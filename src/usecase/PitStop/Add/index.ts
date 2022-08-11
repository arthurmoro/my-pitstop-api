import { Address } from "../../../entities/Address";
import { PitStop } from "../../../entities/PitStop";
import { generateUniqueId } from "../../../helpers";
import { PitStopRepository } from "../../../repository/PitStop/PitStopRepository";
import { AddPitStopType } from "./AddPitStopType";

export class AddPitStop {

  constructor(private pitStopRepository: PitStopRepository) { };

  async execute(data: AddPitStopType): Promise<void> {
    data.address = new Address(data.address);
    const pitStop = new PitStop(data);
    await this.pitStopRepository.addPitStop(pitStop);
  }
}