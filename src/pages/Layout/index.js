import {Layout, Menu, Popconfirm} from 'antd'
import './index.scss'
import NProgress from 'nprogress'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import { connect } from 'react-redux'
import {get_user_async} from '@/redux/actions';
import { Spin } from 'antd'

import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    FunnelPlotOutlined,
    LogoutOutlined
} from '@ant-design/icons'
import './index.scss'
import 'nprogress/nprogress.css'
import {loginOut} from '@/components/Login'
import {useEffect, useState} from 'react'

const {Header, Sider} = Layout;

const GeekLayout = (props) => {
    const {pathname} = useLocation();
    const [user,setuser] = useState({});

    NProgress.start()
    useEffect(() => {
        NProgress.done()
    })

    // 确定退出
    const navigate = useNavigate()
    const onConfirm = () => {
        // 退出登录 删除token 跳回到登录
        loginOut()
        navigate('/login')
    }

    useEffect(()=>{
        props.get_user_async();
        setuser(props.userReducer.useinfo);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getItem = (label, key, icon, children, type) => {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    const gateItems = [
        getItem('数据概览', '/', <HomeOutlined />),
        getItem('新闻管理', '/news', <DiffOutlined />),
        getItem('内容管理', '/article', <FunnelPlotOutlined />),
        getItem('发布文章', '/publish', <EditOutlined />),
    ];

    const navigateItem = useNavigate();

    const gateClick = (e) => {
        navigateItem(e.key)
    };

    return (
        <Layout>
            <Header className="header">
                <div className="logo"/>
                <div className="user-info">
                    <span className="user-name">{user.user_name || '--'}</span>
                    <span className="user-logout">
                        <Popconfirm
                            onConfirm={onConfirm}
                            title="是否确认退出？" okText="退出" cancelText="取消">
                          <LogoutOutlined/> 退出
                        </Popconfirm>
                    </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    {/* 高亮原理：defaultSelectedKeys === item key */}
                    {/* 获取当前激活的path路径？ */}
                    {/*
             defaultSelectedKeys: 初始化渲染的时候生效一次
             selectedKeys: 每次有值更新时都会重新渲染视图
          */}
                    <Menu
                        mode="inline"
                        theme="dark"
                        defaultSelectedKeys={pathname}
                        selectedKeys={pathname}
                        items={gateItems}
                        style={{height: '100%', borderRight: 0}}
                        onClick={gateClick}
                    />
                </Sider>
                <Layout className="layout-content" style={{padding: 20}}>
                    <Spin size="large" spinning={props.switch}>
                        {/* 二级路由出口 */}
                        <Outlet/>
                    </Spin>
                </Layout>
            </Layout>
        </Layout>
    )
}
export default connect(
    state =>({
        switch:state.loadingReducer,
        userReducer:state.userReducer
    }),{get_user_async}
)(GeekLayout)