// login module
import {makeAutoObservable} from 'mobx'
import {http, setToken, getToken, removeToken} from '@/utils'

class LoginStore {
    token = getToken() || ''

    constructor() {
        // 响应式
        makeAutoObservable(this)
    }

    getToken = async ({user_name, user_password, validateCode}) => {
        // 调用登录接口
        const res = await http.post('/admin/login', {
            user_name, user_password, validateCode
        })
        // 存入token
        this.token = res.data.token
        // 存入ls
        setToken(this.token)
    }
    // 退出登录
    loginOut = () => {
        this.token = ''
        removeToken()
    }
}

export default LoginStore