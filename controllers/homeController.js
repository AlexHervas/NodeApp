import { Products } from "../models/Product.js"

export const homeController = async (req, res, next) => {

    const userId = req.session.userId

    res.locals.title = 'Nodepop Homepage'
    
    if (userId) {
        try {
            res.locals.productsList = await Products.find()
        } catch (error) {
            next(error)
        }
    }
    res.render('home')
}