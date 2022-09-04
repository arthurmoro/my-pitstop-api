import { PitStop } from "../../entities/PitStop";
import { PitStopRepository } from "./PitStopRepository";

export class PitStopRepositoryInMemory implements PitStopRepository {
  private pitStops: PitStop[] = [];

  async getPitStopById(id: string): Promise<PitStop | null> {
    const res = this.pitStops.filter(pitStop => pitStop.id === id);
    return res && res.length > 0 && res[0] || null;
  }
  async getPitStopByUserId(userId: string): Promise<PitStop[]> {
    return this.pitStops.filter(pitStop => pitStop.createdById === userId);
  }
  async getPaginatedPitStops(page?: number, quantity?: number, fields?: { field: "value"; value: "value"; }[]): Promise<PitStop[]> {
    let pitStops = this.pitStops;
    if (fields) {
      pitStops = pitStops.filter(_example => {
        fields.map(field => _example[field.field]?.includes(field.value))
      });
    }
    return pitStops.slice(page * quantity, quantity);
  }

  async updatePitStop(pitStop: PitStop, id: string): Promise<void> {
    this.pitStops = this.pitStops.map(_pitStop => {
      if (_pitStop.id === id) {
        Object.assign(_pitStop, pitStop)
      }
      return _pitStop;
    });
  }

  async addPitStop(pitStop: PitStop): Promise<void> {
    this.pitStops.push(pitStop)
  }

  async findByLocation(lat: number, lng: number, radius: number): Promise<PitStop[]> {
    throw new Error("Method not implemented.");
  }
}