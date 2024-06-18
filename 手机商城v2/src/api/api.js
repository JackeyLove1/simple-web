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

export const getCaptchaCode = () => {
    return request.get('/captcha/image', {})
}

export const getSmsCode = (captchaCode, captchaKey, mobile) => {
    return request.post('/captcha/sendSmsCaptcha', {
        form: {
            captchaCode,
            captchaKey,
            mobile
        }
    })
}

export const codeLogin = (mobile, smsCode) => {
    return request.post('/passport/login', {
        form: {
            isParty: false,
            partyData: {},
            mobile,
            smsCode
        }
    })
}