import { generateUniqueId } from "../helpers";
import { Address } from "./Address";
import { Comment } from "./Comment";
import { Photo } from "./Photo";

export enum PitStopVoteType {
  ADD,
  REMOVE
}

export class PitStopVote {

  public readonly id: string;
  public pitStopId: string;
  public userId: string;
  public createdAt?: Date

  constructor(pitStopVote: Omit<PitStopVote, 'id'>, id?: string) {
    Object.assign(this, pitStopVote);
    if (!id) this.id = generateUniqueId();
    if (!id && !this.createdAt) this.createdAt = new Date();
  }

}