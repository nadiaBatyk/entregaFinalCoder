class MessageDTO {
  constructor(data) {
    this.email = data.email;
    this.timestamp = data.timestamp;
    this.text = data.text;
    this.type = data.type;
  }
}
export default MessageDTO;
