import productServices from "../services/productService.js";

const productController = {
    async getAllproduct(req, res) {
        try {
            const result = await productServices.getAllproduct();
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    async createProduct(req, res) {
        try {
            const product = await productServices.creaateProduct(req.body);
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    async getProductById(req, res) {
        try {
            console.log(req.params.id);
            const product = await productServices.getPoductById(req.params.id)
            console.log(product);
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    async updateProductById(req, res) {
        try {
            const product = await productServices.updateProductById(req.params.id, req.body);
            console.log(product);
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    async getProductByname(req,res){
        try {
            const product = await productServices.getProductByname(req.params.name);
            console.log(product);
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    async deleteProductById(req, res) {
        try {
            const product = await productServices.deleteProductById(req.params.id);
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    async getAllproductDTO(req,res){
        try {
            const product= await productServices.getAllproductDTO();
            res.status(200).json(product);
        }catch(error){
            res.status(400).json({ error: error.message });
        }
    }
}

export default productController;