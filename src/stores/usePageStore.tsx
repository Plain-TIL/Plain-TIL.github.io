import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Page {
  user: string
}

export const usePageStore = create(
  persist<Page>((set) => ({
    user: "None",
    setUser: (user: string) => set({user: user})
  }), {
    name: "userPageStorage"
  })
);