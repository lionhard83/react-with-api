import React, { SetStateAction, Dispatch } from "react";
import { Character } from "../models/User";
import { useData } from "./useData";

export const useCharacters = () =>
  useData<Character[]>(`character`, [] as Character[]);
