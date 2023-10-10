import { create } from "zustand";
export const usePowerUserStore = create((set) => ({
    powerUsers: [],
    setPowerUsers: (powerUsers) => set({ powerUsers })
}));
