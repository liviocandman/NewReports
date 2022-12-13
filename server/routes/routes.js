const express = require('express')
const router = express.Router()
const reportsdb = require('../models/newReportModels')


router.post('/reports', (req,res) =>{
    //validate request
    if(!req.body){
        res.status(400).send({ message: "Content can not be empty!"})
            return;
     }

    const createReport = new reportsdb({
        area:req.body.area,
        setor:req.body.setor,
        tipo:req.body.tipo,
        descricao:req.body.descricao
    })
    createReport.save()
    .then (data =>{
        res.json(data)
    })
    .catch(err =>{
        res.json(err)
    })
})

router.get('/reports', (req,res) =>{
    if(req.query.id){
        const id = req.query.id
        reportsdb.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({ message: "Not found user with id" })
            }else {
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send(err)
        })
    }else {
        reportsdb.find()
        .then(data =>{
            res.send(data)
        })
        .catch(err => {
            res.status(500).send(err)
        })


    }
})



module.exports = router