import { IUserRepository } from '../../../repositories/IUserRepository';
import { IGetUserDTO } from './IGetUserWorkerDTO';

export class GetUserWorker {
  constructor(
    public IUserRepository: IUserRepository
  ){}

async execute(data:IGetUserDTO){
  const user = await this.IUserRepository.findByEmail(data.email, 2)

  return {"user":user}
}

}