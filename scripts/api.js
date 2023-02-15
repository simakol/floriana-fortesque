const URL = "http://54.234.65.134:3001/api/v1/";

async function getProviders() {
  return await axios.get(`${URL}providers`).then(({ data }) => data.data);
}

async function getIceCreams() {
  return await axios.get(`${URL}ice-creams`).then(({ data }) => data.data);
}

function postUser(user) {
  return axios.post(`${URL}users`, user);
}
