class UserDTO{
    constructor(data){
        this.fullName=data.fullName,
        this.email=data.email,
        this.phone=data.phone,
        this.address=data.address,
        this._id=data._id,
        this.token=data.token
    }
}
export default UserDTO;