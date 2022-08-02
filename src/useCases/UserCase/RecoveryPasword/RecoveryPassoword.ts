import { IMailProvider } from '../../../providers/IMaillProvider';
import { IUserRepository } from '../../../repositories/IUserRepository';
import { IRecoveryPasswordDTO } from './IRecoveryPasswordDTO';

export class RecoveryPassoword {
  constructor(
    public IUserRepository: IUserRepository,
    public IMaillProvider : IMailProvider,
  ){}

async execute(data:IRecoveryPasswordDTO){
  const pass = await this.IUserRepository.generatehex()
  await this.IUserRepository.saveinfos(data.email, {temp_password: `${pass}`})

  await this.IMaillProvider.sendMail({
  text:`Sua senha momentanea é essa ${pass}, entre e altere dentro do app sua senha.`,
    subject: "Alteração de Senha:",
    to:data.email
  
  })
  return {"Server":"Password changed successfully!"}
}

  
}