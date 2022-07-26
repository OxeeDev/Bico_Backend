import { User } from "../../../entities/User";
import { IUserRepository } from "../../IUserRepository";
import { PrismaClient } from "@prisma/client";
import { hash,compare } from "bcrypt";
import jwt from "jsonwebtoken"

export class UserRopsitory implements IUserRepository {
  private prisma: PrismaClient = new PrismaClient();
  private crypt: Function = hash;
  private compare: Function = compare;
  private generate: Function = jwt.sign;
  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      }
    });

    return user;
  }

  async findByUser(id: number): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where:{
        id:id
      }
    })
    return user;
  }

  async save(user: User): Promise<User> {
    const result = await this.prisma.user.create({
      data: user,
    });

    return result;
  }

  async encryptpass(password: string): Promise<string> {
    const result = await this.crypt(password, 1);

    return result;
  }

  async randompass(): Promise<number> {
 
      var min = Math.ceil(0);
      var max = Math.floor(99);
      return Math.floor(Math.random() * (max - min)) + min;
    
  }
  async savetemppass(pass: string,email: string): Promise<string> {
    const Pass = await this.prisma.user.update({
      where: { email: email },
      data: { temp_password: pass },
    })
    return "ok";
  }
  async comparePass(passdb: string, passuser: string): Promise<boolean> {
      const isok = await this.compare(passuser,passdb)
      return isok;
  }
  async generateToken(useremail: string): Promise<string> {
      const senha = await this.generate({"email":useremail},"loli")
        return senha;
    }
}
