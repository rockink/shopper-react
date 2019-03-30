import cartService from "./CartService";
import productService from "../product/ProductService";


beforeEach(()=>{
    console.log("clearing the cart ");
    cartService.clearCart();
})

test('adding 3 diff product to cart should return 3 items', () => {
    const products = productService.getPaginatedProducts().slice(0, 3);

    products.forEach((product, index) => {
        // console.log("product count ", index);
        cartService.addProductToCart(product);
    })

    
    expect(cartService.countAllCartItems).toBe(3);

    //should be two products 
    expect(cartService.cart.cartItems.length).toBe(3);

});

test('adding 3 of the As and 6 of the Bs should be 9 items in the cart ', () => {
    const products = productService.getPaginatedProducts().slice(0, 2);

    cartService.addProductToCart(products[0], 3);
    expect(cartService.countAllCartItems).toBe(3);
    expect(cartService.cart.cartItems.length).toBe(1);

    cartService.addProductToCart(products[1], 6);
    expect(cartService.countAllCartItems).toBe(9);
    expect(cartService.cart.cartItems.length).toBe(2);

    
    //should be two products 

})

test('adding the same product with count = 1 two times should update the cart item to 2 ', () => {
    const products = productService.getPaginatedProducts().slice(0, 2);

    cartService.addProductToCart(products[0]);
    cartService.addProductToCart(products[0]);

    expect(cartService.countAllCartItems).toBe(2);
    expect(cartService.cart.cartItems.length).toBe(1);

})

export default undefined;