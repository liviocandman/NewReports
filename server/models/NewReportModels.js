const mongoose = require('mongoose')

const createReportTemplate = new mongoose.Schema({
    area:{
        type:String,
        required:true
    },
    setor:{
        type:String,
        required:true
    },
    tipo:{
        type:String,
        required:true
    },
    descricao:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const reportsdb = mongoose.model('reports', createReportTemplate)
module.exports = reportsdb