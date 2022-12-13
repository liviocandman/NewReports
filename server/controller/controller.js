const newReportsbd = require('../models/NewReportModels')


//create and save new report
exports.create = (req,res) =>{
    //validate request
    if(!req.body){
        res.status(400).send({ message: "Content can not be emprty!"})
        return;
    }
    
    //new report
    const createReport = new newReportsbd({
        area: req.body.area,
        setor: req.body.setor,
        tipo: req.body.tipo,
        descricao: req.body.descricao
    })
    
    //save report in database
    createReport.save()
    .then(data =>{
        res.json(data)
    })
    .catch(err =>{
        res.json(err)
    })
}
