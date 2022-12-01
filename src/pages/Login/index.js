import { Card, Form, Input, Checkbox, Button, message } from 'antd'
import logo from '@/assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
// 导入样式文件
import './index.scss'
import { useStore } from '@/store'
import { http } from '@/utils'
import { useEffect, useState } from 'react'

const Login = () => {
    const { loginStore } = useStore()
    const navigate = useNavigate()
    const onFinish = async (values) => {
        console.log(values)
        // values：放置的是所有表单项中用户输入的内容
        // todo:登录
        const { user_name, user_password,validateCode } = values
        await loginStore.getToken({  user_name, user_password, validateCode })
        // 跳转首页
        navigate('/', { replace: true })
        // 提示用户
        message.success('登录成功')
    }

    // 文章参数管理
    const [captcha, setCaptcha] = useState({
        captchaImg:''
    })

    const getVerifyCode = async () => {
        const res = await http.get('/api/verify');
        const { data } = res;
        setCaptcha({
            captchaImg: data
        })
    }

    // 获取文章列表
    useEffect(() => {
        getVerifyCode();
    },[])

    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt="" />
                {/* 登录表单 */}
                {/* 子项用到的触发事件 需要在Form中都声明一下才可以 */}
                <Form
                    validateTrigger={['onBlur', 'onChange']}
                    initialValues={{
                        validateCode: '',
                        user_name: 'yflintao',
                        user_password: 'yf15398806',
                        remember: true
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="user_name"
                        rules={[
                            {
                                required: true,
                                message: '请输入账号名称',
                            }
                        ]}
                    >
                        <Input size="large" placeholder="请输入账号名称" />
                    </Form.Item>
                    <Form.Item
                        name="user_password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码',
                            }
                        ]}
                    >
                        <Input size="large" placeholder="请输入用户密码" />
                    </Form.Item>
                    <Form.Item
                        name="validateCode"
                        rules={[
                            {
                                required: true,
                                message: '请输入图形验证码',
                            },
                            {
                                len: 4,
                                message: '请输入4位图形验证码',
                                validateTrigger: 'onBlur'
                            }
                        ]}
                    >
                        <div className="flexBetween">
                            <Input style={{width:'280px'}} size="large" placeholder="请输入图形验证码" />
                            <div dangerouslySetInnerHTML={{__html:captcha.captchaImg}} className="captchaImg" onClick={() => getVerifyCode()}></div>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox className="login-checkbox-label">
                            我已阅读并同意「用户协议」和「隐私条款」
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login