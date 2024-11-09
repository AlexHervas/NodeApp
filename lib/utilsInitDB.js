import { createInterface } from 'node:readline'
import { Users } from '../models/User.js'
import { Products } from '../models/Product.js'

export const askYouSure = questionText => {
    return new Promise((resolve, reject) => {
        const cInterface = createInterface({
            input: process.stdin,
            output: process.stdout
        })
        cInterface.question(questionText, answer => {
            cInterface.close()
            resolve(answer)
        })
    })
}

export const initUsers = async () => {
    try {
        const deletedUsers = await Users.deleteMany()
        console.log(`${deletedUsers.deletedCount} users deleted from database.`)
        const initialUsers = await Users.insertMany([
            { email: 'example@example.com', password: await Users.EncryptedPwd('12345') },
            { email: 'example1@example.com', password: await Users.EncryptedPwd('54321') }
        ])
        console.log(initialUsers.length + ' users added in database')
    } catch (error) {
        console.error('ERROR INIT-USERS: ', error)
    }
}

export const initProducts = async () => {
    try {
        const deletedProducts = await Products.deleteMany()
        console.log(`${deletedProducts.deletedCount} Products deleted from database.`)
        const [firstUser, secondUser] = await Promise.all([
            Users.findOne({ email: 'example@example.com' }),
            Users.findOne({ email: 'example1@example.com' })
        ])
        const initialProducts = await Products.insertMany([
            { name: 'Camiseta Vans', price: 20, image: 'https://ecool.es/101388-large_default/camiseta-vans-round-off-tee-b-vn000fjsblk1-vnblk.jpg', tags: ['lyfestyle'], owner: firstUser._id },
            { name: 'Camiseta JackJones', price: 26, image: 'https://ecool.es/101388-large_default/camiseta-vans-round-off-tee-b-vn000fjsblk1-vnblk.jpg', tags: ['lyfestyle', 'work', 'motor', 'mobile'], owner: secondUser._id },
        ])
        console.log(initialProducts.length + ' products added in database')
    } catch (error) {
        console.error('ERROR INIT-PRODUCTS: ', error)
    }
}