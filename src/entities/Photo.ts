export class Photo {

  public description: string;
  public url: string;
  public createdAt: Date;
  public updatedAt?: Date;

  constructor(photo: Photo) {
    Object.assign(this, photo);
    if (!this.url) throw new Error("Url da imagem não pode ser vazia")
    if (!this.createdAt) this.createdAt = new Date();
  }

}