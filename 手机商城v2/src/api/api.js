import request from '@/utils/request.js'

export const getHomeData = () => {
    return request.get("/page/detail", {
        params: {
            pageId: 0,
        }
    })
}

export const getCategoryData = () => {
    return request.get("/category/list", {})
}