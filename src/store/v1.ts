import { create } from "zustand";
import { get, set, del } from "idb-keyval";
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";

type ColorBook = {
  title: string;
  slug: string;
  originalColors: (string | null)[];
  fillColors: (string | null)[];
};

type V1Store = {
  currentBook: string;
  currentColor: string;
  colorBooks: ColorBook[];

  getBook: (book: string) => ColorBook | undefined;
  setCurrentBook: (book: string) => void;
  setCurrentColor: (color: string) => void;
  changeColor: (color: string | null, index: number) => void;
};

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await get(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await del(name);
  },
};

// export const useV1Store = create(
//   persist<V1Store>(
//     (set, get) => ({
//       currentBook: "",
//       currentColor: "",
//       colorBooks: [
//         {
//           title: "Sun Flower",
//           slug: "sunflower",
//           originalColors: Array.from({ length: 21 }, () => "#F9F6EE"),
//           fillColors: Array.from({ length: 21 }, () => "#F9F6EE"),
//         },
//       ],
//       getBook: (book) => {
//         return get().colorBooks.find((b) => b.slug === book);
//       },
//       setCurrentBook: (book) => set({ currentBook: book }),
//       setCurrentColor: (color) => set({ currentColor: color }),
//       changeColor: (color, index) => {
//         const book = get().colorBooks.find(
//           (book) => book.title === get().currentBook
//         );
//         if (!book) {
//           console.error(`No book found with title: ${get().currentBook}`);
//           return;
//         }
//         const newColors = [...book.fillColors];
//         newColors[index] = color;
//         set({
//           colorBooks: get().colorBooks.map((book) =>
//             book.title === get().currentBook
//               ? { ...book, fillColors: newColors }
//               : book
//           ),
//         });
//       },
//     }),
//     {
//       name: "v1",
//       storage: createJSONStorage(() => storage),
//     }
//   )
// );
export const useV1Store = create<V1Store>((set, get) => ({
  currentBook: "",
  currentColor: "",
  colorBooks: [
    {
      title: "Sun Flower",
      slug: "sunflower",
      originalColors: Array.from({ length: 21 }, () => "#F9F6EE"),
      fillColors: Array.from({ length: 21 }, () => "#F9F6EE"),
    },
    {
      title: "Burger Fries",
      slug: "burgerfries",
      originalColors: Array.from({ length: 116 }, () => null),
      fillColors: Array.from({ length: 116 }, () => null),
    },
  ],
  getBook: (book) => {
    return get().colorBooks.find((b) => b.slug === book);
  },
  setCurrentBook: (book) => set({ currentBook: book }),
  setCurrentColor: (color) => set({ currentColor: color }),
  changeColor: (color, index) => {
    const book = get().colorBooks.find(
      (book) => book.title === get().currentBook
    );
    if (!book) {
      console.error(`No book found with title: ${get().currentBook}`);
      return;
    }
    const newColors = [...book.fillColors];
    newColors[index] = color;
    set({
      colorBooks: get().colorBooks.map((book) =>
        book.title === get().currentBook
          ? { ...book, fillColors: newColors }
          : book
      ),
    });
  },
}));
