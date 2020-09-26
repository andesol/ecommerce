import axios from "axios";

const getProducts = () => {
  return axios
    .get("http://localhost:3001/")
    .then(res => res.data)
    .catch(err => console.error(err));
};

export { getProducts };
