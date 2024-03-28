import HttpFactory from '~/repository/factory.js';

export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

class ProductModule extends HttpFactory {
    _RESOURCE = '/products';

    async index(sort: 'asc' | 'desc' = 'asc') {
        return await this.call<Product[]>({
            method: 'GET',
            url: `${this._RESOURCE}`,
            query: {
                sort
            }
        });
    }

    async show(id: number) {
        return await this.call<Product>({
            method: 'GET',
            url: `${this._RESOURCE}/${id}`,
        });
    }
}

export default ProductModule;
