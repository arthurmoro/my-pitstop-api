import { PitStop } from "../../entities/PitStop"
import { ListSearchValues } from "../../types/ListFieldsType"

export interface PitStopRepository {

  getPitStopById(id: string): Promise<PitStop | null>
  getPitStopByUserId(userId: string): Promise<PitStop[]>
  getPaginatedPitStops(page?: number, quantity?: number, fields?: ListSearchValues[]): Promise<PitStop[]>
  updatePitStop(pitStop: PitStop, id: string): Promise<void>
  addPitStop(pitStop: PitStop): Promise<void>
  findByLocation(lat: number, lng: number, radius: number): Promise<PitStop[]>
}