import productService, {products} from "./ProductService";


beforeAll(()=>{
    productService.setProducts(products.products.slice(0, 10));
})

test('products are not empty', () => {
    expect(productService.products != undefined).toBeTruthy();
    console.log("producs length ", productService.products.length);
    expect(productService.products.length).toBeGreaterThan(0)
});

test('product with valid id is returned by service', () => {
    const product = productService.products[0];
    expect(product == undefined).toBeFalsy();
    expect(product!!.id).toBe(product.id);
});

