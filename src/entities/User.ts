import { generateUniqueId } from "../helpers";
import { Photo } from "./Photo";
import { PitStop } from "./PitStop";

export class User {

  public readonly id: string;
  public name: string;
  public email: string;
  public profilePhoto: Photo;
  public pitStops?: PitStop[];
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(example: Omit<User, 'id'>, id?: string) {
    Object.assign(this, example);
    if (!id) this.id = generateUniqueId();
    if (!this.name) throw new Error("Name is not defined")
    if (!this.createdAt) this.createdAt = new Date();
  }

}