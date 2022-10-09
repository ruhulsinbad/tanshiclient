import { gql } from "@apollo/client";

export const CAKE = gql`
  query Cake {
    cake {
      name
      price
    }
  }
`;

export const COFFE = gql`
  query Coffe {
    coffe {
      name
      price
    }
  }
`;
