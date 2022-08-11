import { PitStop } from "../../../entities/PitStop";
import { PitStopRepository } from "../../../repository/PitStop/PitStopRepository";
import { ListSearchValues } from "../../../types/ListFieldsType";

export class ListPitStop {

  constructor(private pitStopRepository: PitStopRepository) { };

  async execute(userId: string, page?: number, limit?: number, search?: ListSearchValues[]): Promise<PitStop[]> {

    if (!page) page = 0
    if (!limit) limit = 10

    const result = this.pitStopRepository.getPitStopByUserId(userId);
    return result;
  }
}