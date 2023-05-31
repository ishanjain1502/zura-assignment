import connectDB from "@/config/mongodb";
import product from "@/schema/v1/product";
import withValidation from "@/middleware/withValidation";

connectDB();

const handler = async(req, res) => {
    try{
        const data = await product.create({
            ...req.body
        })
    
        return res.status(200).json({ error: false, message: 'success', product: data })

    }catch(err){
        console.log("error in adding",err);
        return res.status(400).json({ error: true, message: 'false'})
    }

}

export default withValidation(handler , "POST")