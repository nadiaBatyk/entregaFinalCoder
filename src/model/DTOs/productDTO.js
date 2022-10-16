class ProductDTO{
    constructor(data){
        this.name=data.name,
        this.url=data.url,
        this.price=data.price,
        this.category=data.category,
        this.description=data.description,
        this.quantity=data.quantity,
        this._id=data._id
    }
}
export default ProductDTO;