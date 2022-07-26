import { User } from "../entities/User"

export interface IUserRepository {
  findByEmail(email: string): Promise<User>
  findByUser(id: number): Promise<User>
  save(user: User): Promise<User>
  encryptpass(password: string): Promise<string>
  randompass():Promise<number>
  savetemppass(pass: string,email: string): Promise<string> 
  comparePass(passdb:string,passuser:string): Promise<boolean>
  generateToken(useremail:string): Promise<string>
}
