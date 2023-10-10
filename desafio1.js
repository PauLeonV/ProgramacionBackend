class ProductManager {
    constructor() {
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
        return 'Se ha agregado correctamente';
    }

    getProduct() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        return product ? product : 'Producto no encontrado';
    }
}

const manager = new ProductManager();

manager.addProduct({
    title: 'Juego de Mesa - Calabozo',
    description: 'Es un emocionante juego de mesa diseñado para jugadores que buscan una experiencia llena de aventuras.',
    price: 150000,
    thumbnail: 'imagenCalabozo.jpg',
    code: 'JM001',
    stock: 25
});

manager.addProduct({
    title: 'Juego de Mesa - Exploradores del Cosmos',
    description: 'Es un juego de mesa emocionante que te sumerge en la emocionante y desafiante vida de un astronauta espacial.',
    price: 225000,
    thumbnail: 'imagenCosmos.jpg',
    code: 'JM002',
    stock: 12
});

manager.addProduct({
    title: 'Juego de Mesa - Aventura en CandyLand',
    description: 'Es un emocionante juego de mesa diseñado para transportarte a un mundo dulce y mágico lleno de golosinas, caramelos y desafíos deliciosos.',
    price: 68000,
    thumbnail: 'imagenCandy.jpg',
    code: 'JM003',
    stock: 21
});

console.log(manager.getProductById(2)); 
console.log(manager.getProductById(4)); 
