import create from "zustand";

const useApiStore = create((set) => ({
  items: [],
  fetchItems: async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      set({ items: data });
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  },
}));

export default useApiStore;
