import createError from 'http-errors'
import { Products } from '../models/Product.js'

export function index(req, res, next) {
  res.locals.title = 'Nodepop Homepage'
  res.render('newProduct')
}

export async function createProduct(req, res, next) {
  try {
    const userId = req.session.userId
    const { name, price, image, tags } = req.body

    // TODO validaciones

    // creo una instancia de producto en memoria
    const product = new Products({
      name,
      price,
      image,
      tags,
      owner: userId
    })

    // la guardo en base de datos
    await product.save()

    res.redirect('/')
  } catch (err) {
    next(err)
  }
}

export async function deleteProduct(req, res, next) {
  const userId = req.session.userId
  const productId = req.params.productId

  // validar que el elemento que queremos borrar es propidad
  // del usuario logado!!!!!
  const product = await Products.findOne({ _id: productId })

  // verificar que existe
  if (!product) {
    console.warn(`WARNING - el usuario ${userId} está intentando eliminar un producto inexistente`)
    return next(createError(404, 'Not found'))
  }

  if (product.owner.toString() !== userId) {
    console.warn(`WARNING - el usuario ${userId} está intentando eliminar un producto de otro usuario`)
    return next(createError(401, 'Not authorized'))
  }

  await Products.deleteOne({ _id: productId })

  res.redirect('/')

}