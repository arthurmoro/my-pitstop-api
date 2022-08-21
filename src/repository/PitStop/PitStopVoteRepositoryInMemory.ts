import { PitStop } from "../../entities/PitStop"
import { PitStopVote, PitStopVoteType } from "../../entities/PitStopVote"
import { PitStopVoteRepository } from "./PitStopVoteRepository"

export class PitStopVoteRepositoryInMemory implements PitStopVoteRepository {
  private votes: PitStopVote[] = [];

  async vote(pitStopVote: PitStopVote, operationType: PitStopVoteType): Promise<any> {
    if (operationType === PitStopVoteType.ADD) {
      this.votes.push(pitStopVote)
    }

  }
  getPitStopVotes(pitStopId: string): Promise<PitStop[]> {
    throw new Error("Method not implemented.")
  }
  getUserVotes(userId: string): Promise<PitStop[]> {
    throw new Error("Method not implemented.")
  }
}