class UserDTO{
    constructor(data){
        this.name=data.name,
        this.email=data.email,
        this.phone=data.phone,
        this.userImage=data.userImage,
        this._id=data._id,
        this.token=data.token
    }
}
export default UserDTO;