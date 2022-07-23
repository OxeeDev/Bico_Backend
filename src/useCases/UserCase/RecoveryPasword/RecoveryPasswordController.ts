import { Request, Response } from "express";
import { RecoveryPassoword } from '../RecoveryPasword/RecoveryPassoword';

export class RecoveryPasswordController {
  constructor(
    private RecoveryPassword: RecoveryPassoword,
  ) {}

  async handle(req: Request, res: Response ) {
    const { email } = req.body
  
    try {
      if(!email) throw new Error("Informações incorretas")
      
      const response = await this.RecoveryPassword.execute({email})
      
      return res.json(response)
      
    } catch (error) {
      return res.json({
        error: error.message || "Unexpected error."
      })
    }
  }
}