import connectDB from "@/config/mongodb";
import product from "@/schema/v1/product";
import withValidation from "@/middleware/withValidation";

connectDB();

const handler = async(req, res) => {

    try{
        let {searchTerm} = req.query;
        // console.log(searchTerm);

        searchTerm = searchTerm.trim()

        if(searchTerm.length< 1){
            return res.status(404).json({ error: true, message: 'No Data found', data: [] }) 
        }
    
        const data = await product.find({ $or: [{ name: { $regex: searchTerm, $options: 'i' } }, { desc: { $regex: searchTerm, $options: 'i' } }, { brandName: { $regex: searchTerm, $options: 'i' } }] }).limit(10);

        if (data.length !== 0) {
            return res.status(200).json({ error: false, message: 'fetch successfully', data: data })
        }
        return res.status(404).json({ error: true, message: 'No Data found', data: [] })
    }catch(err){
        return res.status(500).json({ error: true, message: err })
    }
}

export default withValidation(handler , "POST")