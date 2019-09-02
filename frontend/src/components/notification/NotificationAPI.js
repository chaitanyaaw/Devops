import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class NotificationAPI {
  sendMail(maildata) {
    // Change customer to your api call
    const url = `${API_URL}/notification/send`;
    return axios.post(url, maildata);
  }
}
