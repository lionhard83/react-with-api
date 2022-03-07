import React, { SetStateAction, Dispatch } from "react";
import { Song } from "../models/Song";
import { useData } from "./useData";

export const useSongs = (
  term: string
): [Song[], Dispatch<SetStateAction<Song[]>>] => {
  const [songs, setSongs] = useData<Song[]>(
    `search?term=${term}`,
    [] as Song[]
  );
  return [songs, setSongs];
};
