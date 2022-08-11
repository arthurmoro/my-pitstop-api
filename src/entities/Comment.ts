import { generateUniqueId } from "../helpers";
import { Photo } from "./Photo";

export class Comment {

  public readonly id: string;
  public userName: string;
  public userId: string;
  public comment: string;
  public photos?: Photo[];
  public updateCommentHistory?: { photos?: Photo[], comment?: string }[];
  public createdAt: Date;
  public updatedAt?: Date;

  constructor(example: Omit<Comment, 'id'>, id?: string) {
    Object.assign(this, example);
    if (!id) this.id = generateUniqueId();
    if (!this.userId) throw new Error("Id do usuário deve ser informado")
    if (!this.userName) throw new Error("Nome do usuário deve ser informado")
    if (!this.createdAt) this.createdAt = new Date();
  }

}