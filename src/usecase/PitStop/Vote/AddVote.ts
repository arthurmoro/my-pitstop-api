import { PitStopVote, PitStopVoteType } from "../../../entities/PitStopVote";
import { PitStopVoteRepository } from "../../../repository/PitStop/PitStopVoteRepository";

export class AddVote {
  constructor(private votePitStopRepository: PitStopVoteRepository) { }

  execute(pitStopId: string, userId: string) {
    const vote: PitStopVote = { id: null, pitStopId, userId }
    const pitStopVote = new PitStopVote(vote);
    this.votePitStopRepository.vote(pitStopVote, PitStopVoteType.ADD);
  }
}