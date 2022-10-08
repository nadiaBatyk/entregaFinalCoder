import config from "../config/config";
import ProductDaoFactory from "../model/DAOs/products/productDAOFactory";
import ProductDTO from "../model/DTOs/productDTO";

export class ProductService {
    constructor(){
        this.productDao = ProductDaoFactory.get(config.DB_NAME);
    }
    async getProducts() {
        const prod = await this.productDao.getAll();
        return prod.map((p) => new ProductDTO(p));
      }
      async createProduct(product) {
        const prod = await this.productDao.create(product);
        return new ProductDTO(prod);
      }
      async updateProduct(product) {
        const prod = await this.productDao.update(product);
        return new ProductDTO(prod);
      }
      async deleteProduct(idProd) {
        const message = await this.productDao.deleteById(idProd);
        return message;
      }
}