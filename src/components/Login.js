import {http, setToken, removeToken} from '@/utils'
//统一登录方法
const loginIn =  async({user_name, user_password, validateCode}) => {
    // 调用登录接口
    const res = await http.post('/admin/login', {
        user_name, user_password, validateCode
    })
    // 存入token
    const token = res.data.token || ''
    // 存入ls
    setToken(token)
}

//统一登出方法
const loginOut = () => {
    removeToken()
}

export {
    loginIn,
    loginOut
}