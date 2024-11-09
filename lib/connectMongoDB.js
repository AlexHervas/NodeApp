import mongoose from "mongoose";
import debugLib from 'debug'

const debug = debugLib('npx-express-generator-ejs:server')

mongoose.connection.on('error', error => debug('ERROR WITH DATABASE CONNECTION', error))

export const databaseConnection = () => mongoose.connect('mongodb://127.0.0.1:27017/nodepopDB')
