import { Product } from "../product/Domains";
import productService from "../product/ProductService";

import { observable, decorate, action, computed, toJS, remove } from "mobx"
import { stringify } from "query-string";


export class CartItem{
    product: Product
    count: number 

    constructor(product : Product, count : number){
        // console.log('adding product ', stringify(product), " and count ", count)
        this.product = product;
        this.count = count;
    }

    get price(){
        return this.count * this.product.price;
    }
}
decorate(CartItem, {
    count : observable,
    price: computed
})


/**
 * Exposing the Cart as a DataStructure, though it the objective can be achived 
 * without considering it. 
 */
export class Cart{
    /**
     * Making cartItemms an observable array right in the field 
     * to leverage the mobx api for array 
     * particularly useful when deleting item from 
     * array
     */
    cartItems  = observable.array<CartItem>([]);

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
        return cartProduct;
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


    changeProductCount(product: Product, count: number){
        const cartItemList = this.cartItems.filter(item => item.product.id == product.id);

        // product is not there, nothing to be added 
        if(cartItemList.length == 0) {
            console.log("product ", product.id, "not there. Nothing to be added ")
            return false;
        }

        const cart = cartItemList[0];
        cart.count = count;

    }

    clearCart(){
        while(this.cartItems.length != 0) {
            this.cartItems.pop();
        }
    }

    /**
     * This deals with cartItem rather than product, simply to use 
     * the api that mobx provides to us. 
     * There is no explicit delete api for JS array
     * So, to maintain atomicity in changing the state 
     * of the array, we use mobx array 
     */
    removeCartItem(cartItem: CartItem){
        const removeStatus = this.cartItems.remove(cartItem);
        console.log("removing cart Item ", removeStatus);
    }

    get itemsCost() {
        //handling empty length error
        if(this.cartItems.length == 0) return 0+"";
        return this.cartItems.map(item => item.price).reduce((sum, price)=> sum += price).toFixed(2);
    }

    /**
     * Flat tax rate. 
     */
    get taxCharge() {
        return "10";
    }

    get totalCharge() {
        return (parseFloat(this.itemsCost) + parseFloat(this.taxCharge)).toFixed(2);
    }



}

decorate(Cart, {
    cartItemsCount: computed,
    cartItems: observable,
    itemsCost: computed,
    taxCharge: computed,
    totalCharge: computed
})


/**
 * CartService is responsible for handling the cart transaction in our project 
 * This service is the one React Components communicate with 
 */
class CartService{
    cart = new Cart();

    constructor(){
        // using this during the cart development. This provides us with test data 
        // to play with 
        this.addDummyProducts();
    }

    addProductToCart(product: Product, count = 1){
        console.log("product ", product.name, "and count ", count)
        return this.cart.addProductToCart(product, count);
    }

    get countAllCartItems(){
        return this.cart.cartItemsCount;
    }

    changeProductCount(product: Product, count: number){
        this.cart.changeProductCount(product, count);
    }

    private addDummyProducts(){
        productService.getPaginatedProducts()
            .forEach(product => {
                this.addProductToCart(product);
            });
    }

    removeCartItem(cartItem: CartItem){
        this.cart.removeCartItem(cartItem);
    }

    clearCart(){
        this.cart.clearCart();
    }

}

const cartService = new CartService()

export default cartService;