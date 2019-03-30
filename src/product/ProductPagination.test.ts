import productService from "./ProductService";


test('expect only 10 products to be returned ', () => {
    const products = productService.getPaginatedProducts()
    expect(products.length).toBe(10);
})

test('expect only 3 products to be shown ', () => {
    const products = productService.getPaginatedProducts().slice(0, 3);
    expect(products.length).toBe(3);
})

export default undefined;