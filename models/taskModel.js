const mongoose = require('mongoose');
const constants = require('../utils/constants');
const taskSchema = new mongoose.Schema({

    title : {
        type: String,
        unique:true,
        required: true,   
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: constants.taskStatus.pending,
        enum: Object.values(constants.taskStatus)
    },
    createdAt : {
        type : Date,
        immutable : true,
        default : ()=>{
            return Date.now();
        }
    },
    updatedAt : {
        type : Date,
        default : ()=>{
            return Date.now();
        }
    },
})

module.exports = mongoose.model('Task', taskSchema)
