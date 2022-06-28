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

    address: {
        type: String,
        required: true
    },

    myPublications: [{
        type: 'ObjectId',
        ref: 'publications'
    }]

});

export default mongoose.model('User', UserShcema);