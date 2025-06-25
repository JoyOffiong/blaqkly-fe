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

export default ProductAPIs ={
    Create_Product
}
