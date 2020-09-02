import axios from './axios'
import qs from 'qs'
import {baseUrl} from '@/config/config'
import menu from '../mock/menuMock'
export const sharesCategoryGet = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: baseUrl + 'http://127.0.0.1:8900/shares/category',
            method: 'get',
            params
        }).then(res => {
          resolve(res.data)
        })
    })
}

