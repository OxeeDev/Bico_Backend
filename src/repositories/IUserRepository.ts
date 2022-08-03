import { User } from "../entities/User"

export interface IUserRepository {
  findByEmail(email: string, op: number): Promise<User>
  findByUser(id: number): Promise<User>
  save(user: User): Promise<User>
  encryptpass(password: string): Promise<string>
  generatehex():Promise<string>
  saveinfos(email:string, data:any): Promise<string> 
  comparePass(passdb:string,passuser:string): Promise<boolean>
  generateToken(useremail:string): Promise<string>
}
