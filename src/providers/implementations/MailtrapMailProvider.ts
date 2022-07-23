import { IMailProvider, IMessage } from '../IMaillProvider';
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer';

export class MailtrapMailProvider implements IMailProvider{
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:"contato.oxedev@gmail.com",
        pass:"zokavftgpuojrepc"
      }
      })
  }
  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      text:message.text,
      subject: message.subject,
      from:"Bico <contato.oxedev@gmail.com>",
      to:message.to
    })
  }
}