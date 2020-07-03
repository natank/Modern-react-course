import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID _8iW8ExWtxi8it6GEwn8OFGCI0hlSIhCH-rekzkf2XA'
  },
})