import axios from 'axios';

export default (token, addresses, product) => {
    axios.post('https://l5d4l.sse.codesandbox.io/checkout',
        { token, product }
    );
}