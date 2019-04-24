//set environment variable by set DEPLOY=dev or DEPLOY=prod
const env = process.env.DEPLOY || "dev";
const conf = require('../config/' + env + ".json");
let fetch = require('node-fetch');


const find = function (req, res) {
     fetch(conf.booksvc, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(json => {
        sendResp(null, res, 'Books found', json.data)
     })
     .catch(err => { 
        sendResp(err, res, null, null)        
        console.log(err); 
    });
}


function sendResp(err, res, message, retobj) {
    const ret = {};
    if (err) {
        ret.message = err.message;
        res.status(400).json(ret);
    } else {
        ret.message = message;
        ret.data = retobj;
        res.status(201).json(ret);
    }
}
module.exports = { "find": find };

