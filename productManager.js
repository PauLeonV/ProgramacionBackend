const fs = require('fs');

class ProductManager {
    constructor() {
        this.productsPath = 'productos.json';
        this.products = [];
        this.productId = 1;
    }

    addProduct({ title, description, price, thumbnail, code, stock }) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            return 'Rellene todos los campos';
        }

        if (this.products.some(product => product.code === code)) {
            return 'El código ya existe elija otro';
        }

        const product = {
            id: this.productId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(product);
        fs.writeFileSync(this.productsPath,JSON.stringify(this.products),'utf-8');
    }

    getProduct() {
        try{
            const data = fs.readFileSync(this.productsPath, 'utf-8');
            this.products = JSON.parse(data);
            }
        catch(error){
            console.log(`Error al leer archivo ${error}`);
        }
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        return product;
    }
