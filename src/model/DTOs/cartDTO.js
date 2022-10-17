class CartDTO{
    constructor(data){
        this.products=data.products,
        this.user=data.user,
        this.timestamp=data.timestamp,
        this._id=data._id
    }
}
export default CartDTO;