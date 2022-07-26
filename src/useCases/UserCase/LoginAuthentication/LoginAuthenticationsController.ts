import { Request, Response } from "express";
import { LoginAuthentication  } from './LoginAuthentication';
export class LoginAuthenticationsController {
  constructor(
    private LoginAuthentication: LoginAuthentication,
  ) {}

  async handle(req: Request, res: Response ) {
    
    const { email, password } = req.body;
  
    try {
      if(!email || !password) throw new Error("Informações incorretas")
      
      const response = await this.LoginAuthentication.execute({email,password})

      return res.json(response)
      
    } catch (error) {
      return res.json({
        error: error.message || "Unexpected error."
      })
    }
  }
}