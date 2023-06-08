import { AuthenticatedRequest } from "@/middlewares";
import planService from "@/services/plans-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function basicPlan(req: AuthenticatedRequest, res: Response){
    try{
        const paymentCreated = await planService.updatePlanToBasic(res);
        return res.status(httpStatus.OK).send(paymentCreated);
    }catch(error){
        console.log(error.message)
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}
export async function premiumPlan(req: AuthenticatedRequest, res: Response){
    const {userId} = req
    const body = req.body
    console.log(body)
    try{
        const paymentCreated = await planService.updatePlanToPremium(res);
        return res.status(httpStatus.OK).send(paymentCreated);
    }catch(error){
        console.log(error.message)
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}