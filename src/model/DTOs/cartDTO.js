class CartDTO{
    constructor(data){
        this.products=data.products,
        this.userId=data.userId,
        this.timestamp=data.timestamp,
        this._id=data._id
    }
}
export default CartDTO;