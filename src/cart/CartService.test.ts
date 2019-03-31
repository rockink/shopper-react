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


const testDescription = `1. add product to cart,  
    2. note the price 
    3. update the count = 5  
    4. make sure price is changed by 4 times`;

test(testDescription, () => {

    const product = productService.getPaginatedProducts()[0];
    const cart = cartService.addProductToCart(product);
    const cartprice = cart.price;

    cartService.changeProductCount(product, 5);
    expect(cartprice * 5).toBe(cart.price)

})


test('remove cart Item', () => {
    const products = productService.getPaginatedProducts();
    products.forEach(product => {
        cartService.addProductToCart(product);
    })

    const cartItem = cartService.cart.cartItems[0];
    const initialCartItemLength = products.length;

    //removes one item and checks 
    cartService.removeCartItem(cartItem);
    expect(initialCartItemLength).toBe(cartService.cart.cartItems.length + 1)

    //remove all items and check 

});


export default undefined;