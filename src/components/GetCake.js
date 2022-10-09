import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { CAKE } from "../gql/query";

export const GetCake = () => {
  const [getCakes, setGetCakes] = useState();
  const [GetCake] = useLazyQuery(CAKE, {
    onCompleted: (data) => setGetCakes(data.cake),
    onError: (error) => {
      console.log(error);
    },
    fetchPolicy: "cache-and-network",
  });

  return { getCakes, GetCake };
};
