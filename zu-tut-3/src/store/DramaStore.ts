// import { create } from "zustand";
// import produce from "immer";

// export interface Drama {
//   id: number;
//   name: string;
// }

// interface DramaStore {
//   kdramas: Drama[];
//   addDrama: (name: string) => void;
// }

// export const useStore = create<DramaStore>((set) => ({
//   kdramas: [
//     {
//       id: Math.floor(Math.random() * 100),
//       name: "River Where the Moon Rises",
//     },
//     {
//       id: Math.floor(Math.random() * 100),
//       name: "The Crowned Clown",
//     },
//   ],
//   addDrama: (name: string) =>
//     set(
//       produce((draft: Draft<DramaStore>) => {
//         draft.kdramas.push({ id: Math.floor(Math.random() * 100), name: name });
//       })
//     ),
// }));
