import axios from 'axios';

export default (token, addresses, product) => new Promise((resolve, reject) => {
    axios.post('https://l5d4l.sse.codesandbox.io/checkout',
        { token, product }
    ).then(r => resolve(r.data));
});