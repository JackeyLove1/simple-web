import {useMemberStore} from "@/stores";

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith("http")) {
      options.url = baseURL + options.url
    }

    options.timeout = 10000
    options.header = {
      ...options.header,
      "source-client": "miniapp"
    }

    const token = useMemberStore().profile?.token
    if (token) {
      options.header.Authorization = token
    }
    console.log("options: ", options)

  }
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
  code: string
  msg: string
  result: T
}

export const http = <T = any>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({
            url: '/pages/login/login'
          })
          reject(res)
        } else {
          uni.showToast({
            title: (res.data as Data<T>)?.msg || '请求错误',
            icon: 'none'
          })
        }
      },
      fail(err) {
        uni.showToast({
          title: '网络错误，换个网络试试',
          icon: 'none'
        })
        reject(err)
      }
    })
  })
}
