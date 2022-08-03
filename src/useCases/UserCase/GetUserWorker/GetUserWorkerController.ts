import { Request, Response } from "express";
import { GetUserWorker } from "./GetUserWorker";

export class GetUserWorkerController {
  constructor(
    private GetUser: GetUserWorker,
  ) {}

  async handle(req: Request, res: Response ) {
    const { email } = req.body
  
    try {
      if(!email) throw new Error("Informações incorretas")
      
      const response = await this.GetUser.execute({email})
      
      return res.json(response)
      
    } catch (error) {
      return res.json({
        error: error.message || "Unexpected error."
      })
    }
  }
}