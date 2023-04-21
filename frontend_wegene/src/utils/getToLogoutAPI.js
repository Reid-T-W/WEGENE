import axios from 'axios';


export const getToLogoutAPI = async (url, headers) => {
    return await axios.get(`${url}`, { headers })
    .then((data) => {
        console.log(data);
        return({ data: data.data.message }) 
      })
      .catch((error) => {
        console.log(error);
        return(error.response.data.error) });
}