class OrderDTO{
    constructor(data){
        this.cart=data.cart,
        this.user=data.user,
        this._id=data._id
    }
}
export default OrderDTO;