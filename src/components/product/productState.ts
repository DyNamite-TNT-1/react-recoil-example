import { atom } from "recoil";

export const productListState = atom<Product[]>({
    key: "productList",
    default: [
        { id: 1, price: 150000, title: 'Áo thun nam' },
        { id: 2, price: 250000, title: 'Áo sơ mi nữ' },
        { id: 3, price: 300000, title: 'Áo khoắc thời trang' },
    ]
})

export interface Product {
    id: number, 
    price: number,
    title: string,
    quantity?: number,
}

export const addToCart = (cart: Product[], product: Product) => {
    const newCart = [...cart];
    const foundIndex = cart.findIndex(x => x.id === product.id);
    
    // Increase quantity if existing
    if (foundIndex >= 0) {
    newCart[foundIndex] = {
    ...cart[foundIndex],
    quantity: (cart[foundIndex].quantity ?? 0) + 1,
    };
    return newCart;
    }

    // Create new if NOT existing
    const newProduct: Product = {
        ...product,
        quantity: 1,
    }
    newCart.push(newProduct);
    return newCart;
}
