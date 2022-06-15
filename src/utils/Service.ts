import axios from 'axios'
const Service = axios.create({})

Service.interceptors.request.use(
    (request) => {
        return request
    },
    (err) => {
        return Promise.reject(err)
    },
)

const successStatus = [200]

Service.interceptors.response.use(
    (response) => {
        if (successStatus.includes(response.status)) {
            return response
        } else {
            return Promise.reject()
        }
    },
    (err) => {
        return Promise.reject(err)
    },
)

export default Service
