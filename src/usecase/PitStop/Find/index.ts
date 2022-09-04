import { PitStop } from "../../../entities/PitStop";
import { PitStopRepository } from "../../../repository/PitStop/PitStopRepository";

export type FilterPitStopsType = {
  page?: number,
  limit?: number,
  location?: {
    geoLocation?: {
      radius: number,
      coordinates: {
        lat: number,
        lng: number,
      }
    },
    address?: {
      city?: string,
      neighbor?: string,
      street?: string,
      streetNumber?: string,
    },
  },
  filter: {
    title?: string,
    description?: string,
    tags?: string[],
    votes?: {
      gt?: string,
      order?: "DESC" | "ASC"
    }
  }
}

export class FindPitStops {

  constructor(private pitStopRepository: PitStopRepository) { };

  async execute(filters: FilterPitStopsType): Promise<PitStop[]> {
    const page = filters.page || 0;
    const limit = filters.limit || 10;


    const result = this.pitStopRepository.getPitStopByUserId(userId);
    return result;
  }
}