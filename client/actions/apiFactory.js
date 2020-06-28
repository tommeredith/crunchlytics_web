import axios from 'axios'
import { URI } from './constants'

export const api = axios.create({
    baseURL: URI
})
