import productService from "./ProductService";



test('products are not empty', () => {
    expect(productService.products != undefined).toBeTruthy();
    expect(productService.products.length).toBeGreaterThan(0)
});

test('product with valid id is returned by service', () => {
    const product = productService.getProductById("1");
    expect(product == undefined).toBeFalsy();
    expect(product.id).toBe("1");
});

