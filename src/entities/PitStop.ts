import { generateUniqueId } from "../helpers";
import { Address } from "./Address";
import { Comment } from "./Comment";
import { Photo } from "./Photo";

export class PitStop {

  public readonly id: string;
  public title?: string;
  public description?: string;
  public comments?: Comment[];
  public photos?: Photo[];
  public coordinates?: [number, number];
  public address?: Address;
  public createdById?: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(example: Omit<PitStop, 'id'>, id?: string) {
    Object.assign(this, example);
    if (!id) this.id = generateUniqueId();
    if (!id && !this.title) throw new Error("Título não informado");
    if (!id && !this.address) throw new Error("Endereço não informado");
    if (!id && !this.coordinates) throw new Error("Coordenadas não informadas");
    if (!id && !this.createdById) throw new Error("Criador do pitstop não informado");
    if (!id && !this.createdAt) this.createdAt = new Date();
  }

}