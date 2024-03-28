import ProductModule from "@/repository/modules/product";
import CategoryModule from "@/repository/modules/category";

export default defineNuxtPlugin(nuxtApp => {
    const API_BASE_URL = nuxtApp.$config.public.API_BASE_URL

    const modules = {
        product: new ProductModule(API_BASE_URL),
        category: new CategoryModule(API_BASE_URL)
    }

    return {
        provide: {
            api: modules
        }
    }
})