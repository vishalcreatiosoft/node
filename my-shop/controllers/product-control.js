const Product = require('../models/product-model')
const productData = {}

productData.saveData = async(productinfo) => {
    try{
        const product = new Product(productinfo)
        const saveNewProductData = await product.save()
        
    }catch(e){
        console.log('Error while saving data',e)
    }
}


productData.updateData = async(productCategory,productCompany,productPrice)=>{
    try{
        const updateProduct = await Product.updateMany({category : productCategory},{$set : {company :productCompany, price : productPrice}})
        
    }
    catch(e){
        console.log('Error while updating data',e)
    }
}


productData.showData = async(productCategory)=>{
    try{
        const showData =  await Product.find({category : productCategory})
        return showData   
    }catch(e){
        console.log('Error while showing data',e)
    }
}


productData.removeData = async(productCategory)=>{
    try{
        const removecategory = await Product.deleteMany({category : productCategory})
    }catch(e){
        console.log('Error while removing category',e)
    }
}




module.exports = productData