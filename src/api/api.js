import axios from 'axios';

const PICTURES_API_URL = 'https://picsum.photos/v2/list';

export const getPictures = () => {
  return axios.get(PICTURES_API_URL).then(res => res.data);
}