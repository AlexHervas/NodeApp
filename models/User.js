import mongoose from "mongoose"
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    email: {type: String, unique: true},
    password: String
}, {
    timestamps: true  // añade update_at y created_at 
})

userSchema.statics.EncryptedPwd = pass => bcrypt.hash(pass, 10) // metodo de schema

userSchema.methods.comparePwd = function (pass) {
    return bcrypt.compare(pass, this.password)
}

export const Users = mongoose.model('user', userSchema)