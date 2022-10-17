import config from "../config/config.js";
import ProductDaoFactory from "../model/DAOs/products/productDAOFactory.js";
import ProductDTO from "../model/DTOs/productDTO.js";

export class ProductService {
    constructor(){
        this.productDao = ProductDaoFactory.get(config.DB_NAME);
    }
    async getProducts() {
        const prod = await this.productDao.getAll();
        return prod.map((p) => new ProductDTO(p));
      }
      async getProductsByCategory(categoria) {
        const prod = await this.productDao.getByCategory(categoria);
        return prod.map((p) => new ProductDTO(p));
      }
      async getProductById(id) {
        const prod = await this.productDao.getById(id)
        const descripcion = {foto:prod.url,precio:prod.price,cantidad:prod.quantity}
        return descripcion
      }
      async createProduct(product) {
        const prod = await this.productDao.create(product);
        return new ProductDTO(prod);
      }
      async updateProduct(product,id) {
        const prod = await this.productDao.update(product,id);
        return new ProductDTO(prod);
      }
      async deleteProduct(idProd) {
        const message = await this.productDao.deleteById(idProd);
        return message;
      }
}