import axios from "axios";
import {showLoadingToast, closeToast} from "vant";
import {useUserStore} from "@/stores/modules/user.js";

const instance = axios.create({
    baseURL: 'https://smart-shop.itheima.net/index.php?s=/api',
    timeout: 5000,
    headers: {}
})

// 自定义配置 - 请求/响应 拦截器
// 添加请求拦截器

instance.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        // 开启loading，禁止背景点击 (节流处理，防止多次无效触发)
        showLoadingToast({
            message: "加载中...",
            forbidClick: true,
            duration: 0,
            loadingType: "spinner",
            onOpened: () => {
                console.log("开启loading");
            },
            onClose: () => {
                console.log("关闭loading");
            }
        })

        const userStore = useUserStore()
        const token = userStore.getUserInfo().token
        if (token) {
            config.headers.Authorization = token
            console.log(config.headers.Authorization)
            config.headers.platform = 'h5'
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

// 添加响应拦截器
instance.interceptors.response.use(
    function (response) {
        // 2xx状态码
        const res = response.data
        if (res.status !== 200) {
            (res.message)
            return Promise.reject(res.message)
        } else {
            // 清除loading效果
            closeToast()
        }
        return res
    },
    function (error) {
        return Promise.reject(error)
    }
)

export default instance