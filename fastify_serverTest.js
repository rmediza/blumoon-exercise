// require to instantiate
const axios = require('axios');

// status check get('url')
axios.get('http://127.0.0.1:3000/')
  .then((res) => {
    console.log(`Status: ${res.status} ${res.statusText}`);
  }).catch((err) => {
    console.log(err);
  });
