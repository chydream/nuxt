import axios from './axios'
import qs from 'qs'
import {baseUrl} from '@/config/config'
import '../mock/userMock'
import menu from '../mock/menuMock'
export const sharesCategoryGet = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: baseUrl + '/shares/category',
            method: 'get',
            params
        }).then(res => {
          resolve(res.data)
        }).catch(error => {
          reject(error.data)
        })
    })
}

