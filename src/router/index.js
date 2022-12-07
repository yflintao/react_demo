import {Route, Routes} from "react-router-dom";
import {AuthComponent} from "@/components/AuthComponent";
import {lazy}  from 'react'

// 按需导入组件
const Login = lazy(() => import('@/pages/Login'))
const Layout = lazy(() => import('@/pages/Layout'))
const Home = lazy(() => import('@/pages/Home'))
const Article = lazy(() => import('@/pages/Article'))
const Publish = lazy(() => import('@/pages/Publish'))
const News = lazy(() => import('@/pages/News'))
const Nofound = lazy(() => import('@/pages/Nofound'))

export default function MRouter (){
  return (
      <Routes>
        {/*创建路由path和组件对应关系*/}
        {/*Layout需要鉴权处理的*/}
        {/*这里的Layout不一定不能写死 要根据是否登录进行判断*/}
        <Route exact path='/' element={
          <AuthComponent>
            <Layout />
          </AuthComponent>
        }>
          <Route index element={<Home />}></Route>
          <Route path='article' element={<Article />}></Route>
          <Route path='publish' element={<Publish />}></Route>
          <Route path='news' element={<News />}></Route>
          <Route path="*" element={<Nofound />}></Route>
        </Route>
        {/* 这个不需要 */}
        <Route path='/login' element={<Login />}></Route>
      </Routes>
  )
}