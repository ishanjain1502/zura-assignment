import connectDB from "@/config/mongodb";
import offer from "@/schema/v1/offer";
import withValidation from "@/middleware/withValidation";

connectDB();

const handler = async(req, res) => {
    try{
        const data = await offer.create({
            ...req.body
        })
    
        return res.status(200).json({ error: false, message: 'success', offer: data })

    }catch(err){
        console.log("error in adding",err);
        return res.status(400).json({ error: true, message: 'false'})
    }

}

export default withValidation(handler , "POST")