class OrderDTO{
    constructor(data){
        this.cart=data.cart,
        this.orderNumber=data.orderNumber,
        this.state=data.state,
        this.timestamp=data.timestamp,
        this._id=data._id
    }
}
export default OrderDTO;