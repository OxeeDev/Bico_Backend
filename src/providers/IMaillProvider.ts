
export interface IMessage {
  to: string;
  subject: string;
  text: string;
}
export interface IMailProvider {
  sendMail(message: IMessage ): Promise<void>;
}