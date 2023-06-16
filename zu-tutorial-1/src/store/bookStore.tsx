import { create } from "zustand";

interface IBook {
  amount: number;
  title: string;
  updateAmount: (newAmount: number) => void;
}

//The create function takes a callback function as a parameter, which returns an object, to create the store
export const useBookStore = create<IBook>((set, get) => ({
  amount: 40,
  title: "Alice's Adventures in Wonderland",
  updateAmount: (newAmount: number) => {
    const amountState = get().amount;
    set({ amount: newAmount + amountState });

    // set((state) => ({ ...state, amount: state.amount + newAmount })),
  },
}));

//async data fetching
//updateAmount: async(newAmount: number ) => {
// to do fetching data
//     set({ amount: newAmount })
// }

// the set function accepts a second boolean parameter, default is false. Instead of merging, it will replace the state model. You must be careful not to delete important parts of your store such as actions.
//updateAmount: () => set({}, true),
