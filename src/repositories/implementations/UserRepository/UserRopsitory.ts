import { User } from "../../../entities/User";
import { IUserRepository } from "../../IUserRepository";
import { PrismaClient } from "@prisma/client";
import { hash,compare } from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken"

export class UserRopsitory implements IUserRepository {
  private prisma: PrismaClient = new PrismaClient();
  private crypt: Function = hash;
  private cryto: any = crypto
  private compare: Function = compare;
  private generate: Function = jwt.sign;
  async findByEmail(email: string, op: number): Promise<User> {
    let user
    if (op == 1) {
      user = await this.prisma.user.findUnique({
        where: {
          email,
        }
      });
    } else if (op == 2) {
      user = await this.prisma.user_Worker.findUnique({
        where: {
          email,
        }
      });
    }
    
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

  async generatehex(): Promise<string> {
    const hex = await this.cryto.randomBytes(16).toString('hex')
    return hex
    
  }

  async saveinfos(email: string,data: any): Promise<string> {
    const alter = await this.prisma.user.update({
      where:{ email },
      data,
    })
    return "ok";
  }
  async comparePass(passdb: string, passuser: string): Promise<boolean> {
      const isok = await this.compare(passuser,passdb)
      return isok;
  }
  async generateToken(useremail: string): Promise<string> {
      const senha = await this.generate({"email":useremail},"loli", {
        subject: `${useremail}`,
        expiresIn: '7d',
      })
        return senha;
  }


}
