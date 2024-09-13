const numbers = [45, 65, 23, 98, 19];


// for (let i = 0;i< numbers.length; i++) {
//     const number = numbers[i];   // amra avabe numbers array er man pabo avabe korle 
//     console.log(number);
    
// }

// easy way in looping

// for(const number of numbers){   // ------------- ata k bola hoy -------- for of loop
//     console.log(number);        // ------ numbers arry er vitore joto gula value ase sob gula k auto ekta ekta kore number er vitore a pabo...
    
// }

// example:- 02

const products = [
    {id: 1, name: 'xiami phone One night', price: 15000},
    {id: 2, name: 'iphone', price: 150000},
    {id: 3, name: 'mac book air', price: 15000},
    {id: 4, name: 'lenvo yoga laptop 2025', price: 15000},
    {id: 5, name: 'Dell inspiron laptop', price: 15000},
    {id: 6, name: 'Samsung phone note 7', price: 15000},
    {id: 7, name: 'Nokia old age phone gone', price: 15000},
    {id: 8, name: 'One plus Phone', price: 15000},
];


// for (const product in products) {   // ata to amra agei shiksi products er vitorer value gula ekta ekta kore product er vitore diye dibe
//     console.log(product);
// }


function matchProduct(products, search){
    const matched = [];
    for(const product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
        
    }
    return matched;
}

const result = matchProduct(products, "laptop");

console.log(result);


/// ekhan theke amara shikte perlam ki vabe kobo string er vitor thke ama kono string khojbo.