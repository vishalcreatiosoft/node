const express = require('express')
const router = new express.Router()
const productController = require('../controllers/product-control')


router.get('/',(req, res)=>{
    res.render('index')
    
})


router.post('/add',(req, res)=>{
   
    const productData = {
        _id : req.body.productId,
        name : req.body.productName,
        company : req.body.productCompany,
        price : req.body.productPrice,
        category : req.body.productCategory
    }
    productController.saveData(productData)
    res.status(200)
   
})

router.post('/update',(req, res)=>{

    const productCategory = req.body.productCategory
    const productCompany = req.body.productCompany
    const productPrice = req.body.productPrice
    productController.updateData(productCategory,productCompany,productPrice)
    res.status(200)

})

router.post('/show',async(req, res)=>{

    const productCategory = req.body.productCategory
    const data = await productController.showData(productCategory)
    const findData = JSON.stringify(data)
    res.render('home',{info : findData})
    res.status(200)
})


router.post('/remove',(req, res)=>{

    const productCategory = req.body.productCategory
    const remove = productController.removeData(productCategory)
    res.status(200)
})

module.exports = router
