import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import { adminAuth } from "../../config/adminConfig"

const userHandler:NextApiHandler = async (req:NextApiRequest,res:NextApiResponse) => {
    const {uid} = req.body

    try {
        const user = await adminAuth.getUser(uid);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

export default userHandler