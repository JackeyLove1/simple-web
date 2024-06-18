import {getInfo, setInfo} from "@/utils/storages.js";
import {defineStore} from "pinia";

export const useUserStore = defineStore(
    'user',
    () => {
        const userInfo = getInfo()

        function getUserInfo() {
            return userInfo
        }

        function setUserInfo(obj) {
            setInfo(obj)
        }

        function clearUserInfo() {
            setInfo({})
        }
        return {
            getUserInfo,
            setUserInfo,
            clearUserInfo
        }
    }
)