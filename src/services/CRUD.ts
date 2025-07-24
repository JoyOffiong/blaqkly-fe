import axios from "axios";

//const baseUrl = "http://localhost:8080/api"
const baseUrl = "https://blaqkly-be.onrender.com/api"

 type productDetail = {
  product_id: number;
  name: string | undefined;
  image: string | null;
  description: string;
  category: string;
  sizes: string;
  price: number;
  type: string;
  designer: string;
  care_instructions: string;
};

async function Create_Product(data:productDetail){
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


async function Fetch_ProductById(id:number){
    try {
        const res= await axios.get(`${baseUrl}/product/${id}`)
        return res.data
        
    } catch (error) {
        throw error
    }
}

async function DeleteProduct(id:number){
    try {
        const res= await axios.delete(`${baseUrl}/product/${id}`)
        return res;
    } catch (error) {
        throw error
    }
}

async function updateProduct(id:number, data:productDetail){
    try {
        const res = await axios.put(`${baseUrl}/product/${id}`, data)
        return res;
    } catch (error) {
        throw error
    }
}

const ProductAPIs  ={
    Create_Product,
    updateProduct,
    Fetch_Products, 
    Fetch_ProductById, 
    DeleteProduct
}

export default ProductAPIs;