import { Request, Response } from "express";
import { SaveInfos } from "./SaveInfos";

export class SaveInfosController {
  constructor(
    private SaveInfos: SaveInfos
  ) {}

  async handle(req: Request, res: Response ) {
    const { where, data } = req.body
  
    try {
      if(!where || !data) throw new Error("Informações incorretas")
      
      const response = await this.SaveInfos.execute({where, data})
      
      return res.json(response)
      
    } catch (error) {
      return res.json({
        error: error.message || "Unexpected error."
      })
    }
  }
}