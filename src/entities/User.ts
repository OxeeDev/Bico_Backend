// ! Criando e exportando o Usuario
export class User {
  constructor(
    public email: string,
    public password: string,
    public name?: string,
    public cpf_or_cnpj?: string,
    public age?: number,
    public temp_password?: string,
    public number?: string,
    public sex?: string
  ) {}
}