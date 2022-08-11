import { Address } from "../../../entities/Address";
import { Photo } from "../../../entities/Photo";

export interface AddPitStopType {
  title: string;
  description?: string;
  photos?: Photo[];
  coordinates: [number, number];
  address: Address;
  createdById: string
}