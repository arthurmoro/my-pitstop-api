import { Address } from "../../../entities/Address";
import { Photo } from "../../../entities/Photo";

export interface UpdatePitStopType {
  title?: string;
  description?: string;
  photos?: Photo[];
  coordinates?: [number, number];
  address?: Address;
}