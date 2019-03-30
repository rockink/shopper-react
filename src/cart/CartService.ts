import { Product } from "../product/Domains";
import productService from "../product/ProductService";

import { observable, decorate, action, computed, toJS } from "mobx"
import { stringify } from "query-string";


export class CartItem{
    product: Product
    count: number 
    constructor(product : Product, count : number){
        // console.log('adding product ', stringify(product), " and count ", count)
        this.product = product;
        this.count = count;
    }
}
decorate(CartItem, {
    count : observable
})


/**
 * Exposing the Cart as a DataStructure, though it the objective can be achived 
 * without considering it. 
 */
export class Cart{
    cartItems: CartItem[] = []

    /**
     * Hey cart, add the product if the product is not already in the cart,
     * If cart already has a product, update the product count with count + 1 
     * 
     * @param product product to be added/updated 
     * @param count total count of the product present in the cart 
     */
    addProductToCart(product: Product, count: number){
        var cartProductList = this.cartItems.filter(cartItem => cartItem.product.id == product.id);
        console.log("cart productList ", cartProductList.length, 'adding count ', count);

        var cartProduct : CartItem;
        if(cartProductList.length != 0) {
            cartProduct = cartProductList[0]!!;
            // console.log("cart Product ", toJS(cartProduct))
            cartProduct.count = cartProduct.count + 1
        }else {
            cartProduct = new CartItem(product, count)
            this.cartItems.push(cartProduct)
        }

        console.log("adding count ", count, "and count is ", cartProduct.count,  " ->for  cart product ", cartProduct.product.name)

    }

    /**
     * It is a total count of cart Items. For eg: there are 3 of the A item, and 6 of the B item
     * This means cartItemsCount = 3 + 6 = 9
     */
    get cartItemsCount(){
        var totalCount = 0;
        this.cartItems.map(item => item.count)
            .forEach(count => {
                totalCount+= count;
            });
        return totalCount;
    }

    clearCart(){
        while(this.cartItems.length != 0) {
            this.cartItems.pop();
        }
    }

}

decorate(Cart, {
    cartItems: observable,
    cartItemsCount: computed
})


/**
 * CartService is responsible for handling the cart transaction in our project 
 * This service is the one React Components communicate with 
 */
class CartService{
    cart = new Cart();

    constructor(){
        // this.addDummyProducts();
    }

    addProductToCart(product: Product, count = 1){
        console.log("product ", product.name, "and count ", count)
        this.cart.addProductToCart(product, count);
        return true;
    }

    get countAllCartItems(){
        return this.cart.cartItemsCount;
    }

    private addDummyProducts(){
        productService.getPaginatedProducts()
            .forEach(product => {
                this.addProductToCart(product);
            });
    }

    clearCart(){
        this.cart.clearCart();
    }

}

const cartService = new CartService()

export default cartService;