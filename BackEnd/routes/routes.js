var express = require('express');
var router = express.Router();
var doner = require('../models/donaterSchema.js')



router.post('/doners',(req,res)=>{
    doner.create(req.body,function(err,result){
          if (err) throw err
          else{
              res.send(result);
          }
      })
  })

  router.get('/doner',(req,res)=>{
    doner.find({}).exec((err,result)=>{
        if(err) throw err
        else{
            res.json(result);
        }
    })
})

router.route('/doner/search').get(function (req, res) {

    var regex = new RegExp(req.query.search, "i");
    var query = {
        $or: [{ bGroup : regex },{dName:regex}]
    };
    doner.find(query, function (err, result) {
        if (err) {
            res.json(err);
        }
        res.json(result);
    });
});


module.exports = router;