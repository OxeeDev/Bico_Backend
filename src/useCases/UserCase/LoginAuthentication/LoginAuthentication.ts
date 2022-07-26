import { IUserRepository } from '../../../repositories/IUserRepository';
import { ILoginAuthenticationDTO } from './ILoginAuthenticationDTO';

export class LoginAuthentication {
  constructor(
    public IUserRepository: IUserRepository,
  ){}

async execute(data:ILoginAuthenticationDTO){
  const verifyemail = await this.IUserRepository.findByEmail(data.email)  
   
  if(!verifyemail)throw new Error('Não existe e-mail cadastrado.')
   
   var verifyPass = await this.IUserRepository.comparePass(verifyemail.password,data.password) 
    
   if(verifyemail.temp_password == data.password)verifyPass = true
   
   if(!verifyPass)throw new Error('Senha invalida.')
    const token = await this.IUserRepository.generateToken(verifyemail.email)
    return {
      "User":verifyemail,
      "Token":token
    }
  }
  

  
}