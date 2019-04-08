

/**
 * For some reason, it required more boilerplate to create JSON object in typescript. Hence, javascript 
 * @param {*} products 
 */
export default function populateOptions(products){
        const brands = {}, ram = {};

        products.forEach(product =>{
            if(brands[product.company] == undefined) brands[product.company] = 0;
            if(ram[product.ram] == undefined) ram[product.ram] = 0;

            brands[product.company] = brands[product.company] + 1; 
            ram[product.ram] = ram[product.ram] + 1;
        });

        const brandOptions = toArray(brands);
        const ramOptions = toArray(ram);

        return {
            brandOptions: brandOptions,
            ramOptions: ramOptions
        }
    }


        /**
     * 
     * @param {} options given an option, {<key>: count }, construct an array of jsonOject [{count: <count>, key:<key>}]
     */
    function toArray(options){
        const array = []
        for(const key in options){
            array.push({
                count: options[key],
                key: key 
            })
        }
        return array.sort((a, b)=> b.count - a.count)
    }
