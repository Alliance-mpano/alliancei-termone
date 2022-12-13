const express = require('express')
import doMath from './../controllers/MathController';
const router = express.Router();

router.post('/',(req, res) =>  {
    let reqst = req.body;
    let result = doMath(reqst.num1, reqst.num2, reqst.operator)
    res.status(200).send(result)

})