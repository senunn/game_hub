import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '9e18089072374848af7678fcd5aaab6b'
    }
})