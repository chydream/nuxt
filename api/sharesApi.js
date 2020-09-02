import axios from './axios'
import qs from 'qs'
import {baseUrl} from '@/config/config'
import menu from '../mock/menuMock'
export const sharesCategoryGet = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: baseUrl + 'http://192.168.3.186:9200/api-user/v1.0/tenants?code=&name=',
            method: 'get',
            params
        }).then(res => {
          resolve(res.data)
        })
    })
}

