import productRepository from "../repositories/productRepository.js";

const productServices = {
    async getAllproduct() {
        return productRepository.getAllproduct();
    },
    async creaateProduct(product) {
        return productRepository.createProduct(product);

    },
    async getPoductById(id){
        return productRepository.getProductById(id);
    },
    async getProductByname(name){
        return productRepository.getProductByname(name);
    },
    async updateProductById(id,productData){
        return productRepository.updateProductById(id,productData);
    },
    async deleteProductById(id){
        return productRepository.deleteProductById(id);
    },
    async getAllproductDTO(){
        return productRepository.getAllproductDTO();
    }

}
export default productServices;