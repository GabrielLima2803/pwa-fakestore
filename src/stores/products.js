import { defineStore } from "pinia/dist/pinia";
import { reactive, computed } from 'vue'
import api from '@/plugins/axios'


export const useProductStore = defineStore('product', () => {
    const state = reactive({
        products: []
    })

    const products = computed(() => state.products);

    const getAllProducts = async () => {
        const response = await api.get('/products');
        state.products = response.data;
    }

    return {
        products,
        getAllProducts
    }
})
