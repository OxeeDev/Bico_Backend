import { IUserRepository } from '../../../repositories/IUserRepository';
import { ISaveInfosDTO } from './ISaveInfosDTO';

export class SaveInfos {
  constructor(
    public IUserRepository: IUserRepository,
  ){}

async execute(data: ISaveInfosDTO){
  await this.IUserRepository.saveinfos(data.where, data)
  return {"Server":" Password changed successfully!"}
}

}