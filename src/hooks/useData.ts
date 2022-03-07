import React, { useState, useEffect, SetStateAction, Dispatch } from "react";

export const useData = <T>(
  url: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [data, setData] = useState<T>(defaultValue);

  useEffect(() => {
    url &&
      fetch(`https://itunes.apple.com/${url}`)
        .then((res) => res.json())
        .then((res: { resultCount: number; results: T }) => {
          setData(res.results);
        });
  }, [url]);
  return [data, setData];
};
