import { atom, selector } from 'recoil'
import { Product } from '../product/productState';

export const cartState = atom<Product[]>({
    key: "cart",
    default: [],
});

export const cartTotal = selector({
    key: "cartTotal",
    get: ({ get }) => {
        const cart = get(cartState);
        return cart.reduce((total, item) => { 
            return total + (item.price * (item.quantity ?? 0))
        }, 0);
    }
})