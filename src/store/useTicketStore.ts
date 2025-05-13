import { create } from 'zustand';

type TicketItem = {
  productId: string;
  quantity: number;
  note?: string;
  checkboxOptions?: string[];
  radioOption?: string;
  multiItemQuantities?: Record<string, number>;
};

type TicketState = {
  ticket: Record<string, TicketItem[]>;
  setTicketItem: (restaurantId: string, item: TicketItem) => void;
  updateNote: (restaurantId: string, note: string) => void;
  updateQuantity: (restaurantId: string, productId: string, newQuantity: number) => void;
};

export const useTicketStore = create<TicketState>((set) => ({
  ticket: {},

  setTicketItem: (restaurantId, item) =>
    set((state) => {
      const existing = state.ticket[restaurantId] ?? [];
      const updated = existing.some((i) => i.productId === item.productId)
        ? existing.map((i) => (i.productId === item.productId ? item : i))
        : [...existing, item];

      return {
        ticket: {
          ...state.ticket,
          [restaurantId]: updated,
        },
      };
    }),

  updateNote: (restaurantId, note) =>
    set((state) => {
      const current = state.ticket[restaurantId];
      if (!current) return state;

      const updated = current.map((item) => ({ ...item, note }));

      return {
        ticket: {
          ...state.ticket,
          [restaurantId]: updated,
        },
      };
    }),

  updateQuantity: (restaurantId, productId, newQuantity) =>
    set((state) => {
      const currentItems = state.ticket[restaurantId] ?? [];

      const updatedItems = currentItems.map((item) =>
        item.productId === productId ? { ...item, quantity: Math.max(newQuantity, 1) } : item
      );

      return {
        ticket: {
          ...state.ticket,
          [restaurantId]: updatedItems,
        },
      };
    }),
}));
