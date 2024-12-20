export interface IRewardTier {
  id: number;
  title: string;
  pledgeAmount: number;
  description: string;
  itemsLeft: number;
  isOutOfStock: boolean;
  shippingIncluded?: boolean;
}

const rewardTiers: IRewardTier[] = [
  {
    id: 1,
    title: "Bamboo Stand",
    pledgeAmount: 25,
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
    itemsLeft: 101,
    isOutOfStock: false,
  },
  {
    id: 2,
    title: "Black Edition Stand",
    pledgeAmount: 75,
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    itemsLeft: 64,
    isOutOfStock: false,
    shippingIncluded: true,
  },
  {
    id: 3,
    title: "Mahogany Special Edition",
    pledgeAmount: 200,
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    itemsLeft: 0,
    isOutOfStock: true,
    shippingIncluded: true,
  },
];

export default rewardTiers;
