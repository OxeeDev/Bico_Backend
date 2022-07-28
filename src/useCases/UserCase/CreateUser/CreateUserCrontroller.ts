import { Request, Response } from "express";
import { CreateUser } from "./CreateUser";

export class CreateUserController {
  constructor(
    private createUser: CreateUser,
  ) {}

  async handle(req: Request, res: Response ) {
    const { email, password } = req.body
  
    try {
      if(!email || !password) throw new Error("Informações incorretas")
      
      const user = await this.createUser.execute({
        email: email.toLowerCase(),
        password: password.toLowerCase(),
      })

      return res.json(user)
      
    } catch (error) {
      return res.json({
        error: error.message || "Unexpected error."
      })
    }
  }
}