import axios from 'axios';

export const getPictures = () => {
  let rand = Math.floor(Math.random() * 15) + 1;
  return axios.get(`https://picsum.photos/v2/list?page=${rand}`).then(res => res.data);
}