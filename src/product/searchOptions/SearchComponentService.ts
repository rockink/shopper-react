import productService, { ProductService } from "../ProductService";
import { Product } from "../Domains";
import populateOptions from "./searchServiceHelper";


export class Filter{
    name: String;
    filterOptions: FilterOption[];

    constructor(name: String, filterOptions: FilterOption[]){
        this.name = name;
        this.filterOptions  = filterOptions;
    }
    
}

export class FilterOption{
    key: string = ""; 
    count: number = 0;

    constructor(key: string, count: number){
        this.key = key;
        this.count = count;
    }

}


class ProductSearchService{
    brandFilter : Filter
    ramFilter  : Filter

    constructor(productService: ProductService){
        const products = productService.getAllProducts();
        console.log("products initialized ", products);

        const options = populateOptions(products);
        this.brandFilter = new Filter("Brands", options.brandOptions);
        this.ramFilter = new Filter("RAM", options.ramOptions);
        this.printStats();
    }


    printStats(){
        console.log("brands ", this.brandFilter);
        console.log("ram ", this.ramFilter);        
    }
}

const searchComponentService = new ProductSearchService(productService);

export default searchComponentService;