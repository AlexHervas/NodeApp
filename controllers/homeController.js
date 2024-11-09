import { Products } from "../models/Product.js"

export const homeController = async (req, res, next) => {
    res.locals.title = 'Nodepop Homepage'
    try {
        res.locals.productsList = await Products.find()
    } catch (error) {
        next(error)
    }
    res.render('home')
}