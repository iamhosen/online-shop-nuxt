import HttpFactory from '~/repository/factory.js';

class CategoryModule extends HttpFactory {
    _RESOURCE = '/products';

    async index() {        
        return await this.call<string[]>({
            method: 'GET',
            url: `${this._RESOURCE}/categories`,
        });
    }

    async products(name: string) {
        return await this.call({
            method: 'GET',
            url: `${this._RESOURCE}/category/${name}`,
        });
    }
}

export default CategoryModule;
