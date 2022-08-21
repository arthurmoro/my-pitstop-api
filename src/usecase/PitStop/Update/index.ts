import { Address } from "../../../entities/Address";
import { PitStop } from "../../../entities/PitStop";
import { PitStopRepository } from "../../../repository/PitStop/PitStopRepository";
import { UpdatePitStopType } from "./UpdatePitStop.types";

export class UpdatePitStop {

  constructor(private pitStopRepository: PitStopRepository) { };

  async execute(data: UpdatePitStopType, id: string): Promise<void> {
    data.address = new Address(data.address);
    const pitStop = new PitStop(data);
    await this.pitStopRepository.updatePitStop(pitStop, id);
  }
} 