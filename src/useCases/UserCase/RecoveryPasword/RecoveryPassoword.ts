import { IMailProvider } from '../../../providers/IMaillProvider';
import { IUserRepository } from '../../../repositories/IUserRepository';
import { IRecoveryPasswordDTO } from './IRecoveryPasswordDTO';

export class RecoveryPassoword {
  constructor(
    public IUserRepository: IUserRepository,
    public IMaillProvider : IMailProvider,
  ){}

async execute(data:IRecoveryPasswordDTO){
  var finishpass ="" 
  for (let i  = 0; i < 10; i++) {
    var pass = await this.IUserRepository.randompass()
    var passS = String(pass)
    finishpass += passS
   }
   await this.IUserRepository.savetemppass(finishpass,data.email)
   await this.IMaillProvider.sendMail({
    text:`Sua senha momentanea é essa ${finishpass}, entre e altere dentro do app sua senha.`,
      subject: "Alteração de Senha:",
      to:data.email
    
    })
    return {"Server":" Password changed successfully!"}
}

  
}