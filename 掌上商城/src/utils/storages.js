const INFO_KEY = "shopping_info"
const HISTORY_KEY = 'history_list'

export const getInfo = () => {
    const defaultObj = {
        token: '',
        userId: '',
    };
    const result = localStorage.getItem(INFO_KEY);
    return result ? JSON.parse(result) : defaultObj;
}

// 设置个人信息
export const setInfo = (obj) => {
    localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}

export const removeInfo = () => {
    localStorage.removeItem(INFO_KEY)
}

