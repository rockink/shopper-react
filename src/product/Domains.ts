export class Product implements ProductInterface {
    id: String;
    name: string;
    company: string;
    productType: string;
    price: number;
    sizeInch: number;
    screenResolution: string;
    cpu: string;
    ram: number;
    storage: string;
    gpu: string; 
    opSys: string

    constructor(id: String, name: string, 
        company: string, productType: string, 
        price: number,
        sizeInch: number,
        screenResolution: string,
        cpu: string,
        ram: number,
        storage: string,
        gpu: string,
        opSys: string
    
        ) {
        this.id = id;
        this.name = name;
        this.company = company;
        this.productType = productType;
        this.price = price;
        this.sizeInch = sizeInch;
        this.screenResolution = screenResolution;
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
        this.gpu = gpu;
        this.opSys = opSys;
    }
}

export interface ProductInterface {
    id: String;
    name: string;
    company: string;
    productType: string;
}
