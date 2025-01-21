import Product from "../models/productModel.js";
import ProductDTO from "../models/ProductDTO.js";

const productRepository = {
    async getAllproduct() {
        try {
            const products = await Product.find();
            console.log('All products:', products);
            return products;
        } catch (error) {
            console.error('Error fetching all products:', error);
            throw error;
        }
    },
    async createProduct(product) {
        try {
            const newProduct = await Product.create(product);
            console.log('Created product:', newProduct);
            return newProduct;
        } catch (error) {
            console.error('Error creating product:', error);
            throw error;
        }
    },
    async getProductById(id) {
        try {
            const product = await Product.findById(id);
            console.log('Product by ID:', product);
            return product;
        } catch (error) {
            console.error('Error fetching product by ID:', error);
            throw error;
        }
    },
    async getProductByname(name){
        try{
            const product=await Product.findOne({name:name});
            console.log(product);
            return product;
        }catch(error){
            console.error('Error fetching product by name:', error);
            throw error;
        }
    },
    async updateProductById(id, productData) {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(id, productData, { new: true });
            console.log('Updated product:', updatedProduct);
            return updatedProduct;
        } catch (error) {
            console.error('Error updating product by ID:', error);
            throw error;
        }
    },
    async deleteProductById(id) {
        try {
            const deletedProduct = await Product.findByIdAndDelete(id);
            console.log('Deleted product:', deletedProduct);
            return deletedProduct;
        }
        catch (error) {
            console.error('Error deleting product by ID:', error);
            throw error;
        }
    },

    async getAllproductDTO() {
        try {
            const products = await Product.find();
            const productdto = products.map(product => new ProductDTO({
                name: product.name,
                price: product.price,
                description: product.description
            }));
            return productdto;
        } catch (error) {
            console.error('Error fetching all products:', error);
            throw error;
        }
    }
};

export default productRepository;