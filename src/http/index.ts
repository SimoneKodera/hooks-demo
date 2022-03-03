import axios from 'axios';

const key = '804194643acfffdc8a08d76b7e01df74';

function getRateList() {
    return axios.get('http://api.tianapi.com/fxratelist/index', {
        params: {
            key,
            bank: 'icbc'
    }})
}

export {
    getRateList
}