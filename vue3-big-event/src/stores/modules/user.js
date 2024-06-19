import {defineStore} from "pinia";
import {ref, reactive} from "vue";


export const useUserStore = defineStore(
    "user",
    () => {
        // token
        const token = ref("")
        const setToken = (newToken) => {
            token.value = newToken
        }

        const removeToken = () => {
            token.value = ""
        }


        const defaultUserObj = {
            username: "",
            nickname: "",
            email: "",
            avatar: "",
        }

        const user = ref(defaultUserObj)

        const getUser = () => {
            return user
        }

        const setUser = (newUser) => {
            user.value = newUser
        }

        const removeUser = () => {
            user.value = defaultUserObj
        }

        return {
            token,
            setToken,
            removeToken,
            user,
            getUser,
            setUser,
            removeUser,
        }
    },

    {
        persist: true,
    }
)
