
export class Address {
  public street: string;
  public neighbor: string;
  public number: string;
  public city: string;
  public zipCode?: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(example: Omit<Address, 'id'>) {
    Object.assign(this, example);
    if (!this.street) throw new Error("Nome da rua deve ser preenchido")
    if (!this.neighbor) throw new Error("Bairro do PitStop deve ser preenchido")
    if (!this.number) throw new Error("Número do PitStop deve ser preenchido")
    if (!this.city) throw new Error("Cidade do PitStop deve ser preenchida")
    if (!this.createdAt) this.createdAt = new Date();
  }

}