class MessageDTO {
  constructor(data) {
    this.emailFrom = data.emailFrom;
    this.emailTo=data.emailTo;
    this.timestamp = data.timestamp;
    this.text = data.text;
    this.type = data.type;
  }
}
export default MessageDTO;
