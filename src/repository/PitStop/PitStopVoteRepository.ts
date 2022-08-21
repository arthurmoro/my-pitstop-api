import { PitStop } from "../../entities/PitStop"
import { PitStopVoteType, PitStopVote } from "../../entities/PitStopVote"

export interface PitStopVoteRepository {
  vote(pitStopVote: PitStopVote, operationType: PitStopVoteType): Promise<any>
  getPitStopVotes(pitStopId: string): Promise<PitStop[]>
  getUserVotes(userId: string): Promise<PitStop[]>
}