import offer from "@/schema/v1/offer";
import connectDB from "@/config/mongodb";

connectDB();

const handler = async(req,res) => {

    try {
        const data = await offer.find();
        return res.status(200).json({ error: false, message: 'fetched successfully', data: data[0].images })
    } catch (error) {
        return res.status(500).json({ error: true, message: 'server error' })
    }

}

export default handler;