import { IUserRepository } from '../../../repositories/IUserRepository';
import { IGetUserDTO } from './IGetUserDTO';

export class GetUser {
  constructor(
    public IUserRepository: IUserRepository
  ){}

async execute(data:IGetUserDTO){
  const user = await this.IUserRepository.findByEmail(data.email)

  return {"user":user}
}

}