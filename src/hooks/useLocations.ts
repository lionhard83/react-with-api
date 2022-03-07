import React, { SetStateAction, Dispatch } from "react";
import { Location } from "../models/User";
import { useData } from "./useData";

export const useLocations = (): [
  Location[],
  Dispatch<SetStateAction<Required<Location>[]>>,
  boolean,
  any
] => useData<Required<Location>[]>(`location`, [] as Required<Location>[]);
