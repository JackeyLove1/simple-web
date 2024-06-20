import axios from "axios";
import {useUserStore} from "@/stores/index.js";
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";

// todo(jackyfan): move it to config file
const baseURL = 'http://big-event-vue-api-t.itheima.net'
const instance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})

instance.interceptors.request.use(
    (config) => {
        //todo: add loading ?
        const token = useUserStore().token;
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    })

instance.interceptors.response.use(
    (response) => {
        const data = response.data
        if (data?.code === 0) {
            return response
        }
        const msg = data?.message || '请求失败'
        ElMessage.error(msg)
        return Promise.reject(new Error(msg))
    },
    (error) => {
        if (error.response?.status === 401) {
            ElMessage.error('登录过期，请重新登录')
            const router = useRouter()
            router.push('/login')
        }

        ElMessage.error(error.response?.data?.message || '服务异常')
        return Promise.reject(error)
    }
)

export default instance
export {
    baseURL
}