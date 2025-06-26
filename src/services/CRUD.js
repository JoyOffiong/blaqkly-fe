import axios from "axios";


const baseUrl = "http://localhost:8080/api"


async function Create_Product(data){
    try {
        await axios.post(`${baseUrl}/product`, data)
        .then((res)=>{
            return res
        }).catch((err)=>{
            return err
        })

    } catch (error) {
        
    }
}

async function Fetch_Products(){
    try{
           const res= await axios.get(`${baseUrl}/products`)
          
                return res.data
          
    }
    catch(error){
        throw error
    }
}


async function Fetch_ProductById(id){
    try {
        const res= await axios.get(`${baseUrl}/product/${id}`)
        return res.data
        
    } catch (error) {
        throw error
    }
}

async function DeleteProduct(id){
    try {
        const res= await axios.delete(`${baseUrl}/product/${id}`)
        return res
    } catch (error) {
        throw error
    }
}

const ProductAPIs  ={
    Create_Product, Fetch_Products, Fetch_ProductById, DeleteProduct
}

export default ProductAPIs;