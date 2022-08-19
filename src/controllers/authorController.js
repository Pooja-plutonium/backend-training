const AuthorModel = require('../models/authorModel.js');

const createAuthor = async function(req,res){
    let data = req.body
    const allData = await AuthorModel.create(data)
    res.send({msg : allData})
}



module.exports.createAuthor = createAuthor;