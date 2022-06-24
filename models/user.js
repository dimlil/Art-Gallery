import { mongoose } from "mongoose";

const UserShcema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    adress: {
        type: String,
        required: true
    },

    myPublications: [{
        type: 'ObjectId',
        ref: 'publications'
    }]

})

module.exports = mongoose.model('User', UserShcema);