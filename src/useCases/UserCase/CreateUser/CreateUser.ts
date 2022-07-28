import { User } from "../../../entities/User";
import { IMailProvider } from '../../../providers/IMaillProvider';
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateUserDTO } from "./ICreateUserDTO";

export class CreateUser {
  constructor(
    public userRepository: IUserRepository
  ) {}

  async execute(data: ICreateUserDTO) {
    const userAlereadyExists = await this.userRepository.findByEmail(data.email)
    if (userAlereadyExists) throw new Error('Email Já Cadastrado por outro usuario.')

    const user = new User(data.email, await this.userRepository.encryptpass(data.password)) 

    const result = await this.userRepository.save(user)

    return result
  }
}

