import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import {adminAuth} from '../../config/adminConfig'


const authenticate:NextApiHandler = async (req:NextApiRequest,res:NextApiResponse) => {
    // console.log(`${req.body.token}`)
    try {
        const decodedToken = await adminAuth.verifyIdToken(`${req.body.token}`)
        res.status(200).json({uid:decodedToken.uid});
    } catch (error) {
        // console.log(error)
        res.status(500).json({error});
    }
}

export default authenticate