import request from '@/utils/request'

export const userRegisterService = ({username, password, repassword}) => {
    return request.post(
        '/api/reg',
        {username, password, repassword}
    )
}

export const userLoginService = ({username, password}) => {
    return request.post(
        '/api/login',
        {username, password}
    )
}

export const userGetInfoService = () => {
    return request.get(
        '/my/userinfo'
    )
}

export const userUpdateInfoService = ({id, nickname, email}) => {
    return request.put('/my/userinfo', {id, nickname, email})
}
export const userUpdateAvatarService = (avatar) => {
    return request.post('/my/update/avatar', {avatar})
}