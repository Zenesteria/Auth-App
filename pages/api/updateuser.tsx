import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import { adminAuth } from "../../config/adminConfig"


const handler:NextApiHandler = async (req:NextApiRequest,res:NextApiResponse) => {
    const {uid, name} = req.body

    try {
        const update = await adminAuth.updateUser(uid, {
            displayName:name
        })
        res.status(200).json(update);
    } catch (error) {
        res.status(500).json(error);
    }
}

export default handler