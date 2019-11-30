import axios from 'axios'

const createApiRequest = ({
    method, url, data, params, headers,
}) => new Promise((resolve, reject) => {
    axios({
        method,
        url,
        data,
        params,
        headers
    })
        .then(({ data }) => resolve(data))
        .catch(err => reject(err.message))
})

export default createApiRequest