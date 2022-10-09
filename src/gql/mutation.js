import { gql } from "@apollo/client";

export const CREATE_CAKE = gql`
  mutation CreateCake($cake: Product) {
    createCake(cake: $cake) {
      name
      price
      tag
    }
  }
`;

export const CREATE_COFFE = gql`
  mutation CreateCoffe($coffe: Product) {
    createCoffe(coffe: $coffe) {
      name
      price
      tag
    }
  }
`;

export const CREATE_BILL = gql`
  mutation Mutation($input: [BillInput!]!) {
    createBill(input: $input) {
      totalCost
    }
  }
`;
