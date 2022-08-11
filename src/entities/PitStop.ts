import { generateUniqueId } from "../helpers";
import { Address } from "./Address";
import { Comment } from "./Comment";
import { Photo } from "./Photo";

export class PitStop {

  public readonly id: string;
  public title: string;
  public description?: string;
  public comments?: Comment[];
  public photos?: Photo[];
  public coordinates: [number, number];
  public address: Address;
  public createdById: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(example: Omit<PitStop, 'id'>, id?: string) {
    Object.assign(this, example);
    if (!id) this.id = generateUniqueId();
    if (!this.title) throw new Error("error.pitstop.title");
    if (!this.address) throw new Error("error.pitstop.address");
    if (!this.coordinates) throw new Error("error.pitstop.coordinates");
    if (!this.createdById) throw new Error("error.pitstop.createdById");
    if (!this.createdAt) this.createdAt = new Date();
  }

}