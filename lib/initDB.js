import { askYouSure, initProducts, initUsers } from './utilsInitDB.js'
import { databaseConnection } from './connectMongoDB.js'

try {
    const connectToDB = await databaseConnection().then(mongoose => mongoose.connection)
    console.log(`Connnected to ${connectToDB.name}`)
} catch (error) {
    console.error(`Error connecting with database: ${error}`)
}

try {
    const answer = await askYouSure('Are you sure you want to ERASE database and INITIALIZE with DEFAULT VALUES? yes/no\n')
    if (answer.toLowerCase() !== 'yes') {
        console.warn('Process aborted')
        process.exit()
    }
} catch (error) {
    console.error('ERROR IN QUESTION ARE YOU SURE', error)
}

try {
    await initUsers()
} catch (error) {
    console.error('ERROR INITIALIZING USERS', error.message)
}

try {
    await initProducts()
} catch (error) {
    console.error('ERROR INITIALIZING PRODUCTS', error.message)
}

process.exit()