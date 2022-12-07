import {Link, useNavigate} from 'react-router-dom'
import {Table, Tag, Space, Card, Breadcrumb, Form, Button, Radio, DatePicker, Select, Input} from 'antd'
import 'moment/locale/zh-cn'
import locale from 'antd/es/date-picker/locale/zh_CN'
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import {useEffect, useState} from 'react'
import {http} from '@/utils'
import { connect } from 'react-redux'
import {get_channel_async} from "@/redux/actions";

const {Option} = Select
const {RangePicker} = DatePicker


const Article = (props) => {
    const [Channel,setChannel] = useState([]);

    useEffect(()=>{
        props.get_channel_async();
        setChannel(props.channelReducer.channel);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const [RadioList] = useState([
        {key:'null',name:'全部'},{key:'0',name:'草稿'},{key:'1',name:'待审核'},{key:'2',name:'审核通过'},{key:'3',name:'审核失败'}
    ])

    // 文章列表管理 统一管理数据 将来修改给setArticleData传对象
    const [articleData, setArticleData] = useState({
        list: [],// 文章列表
        count: 0 // 文章数量
    })

    // 文章参数管理
    const [params, setParams] = useState({
        page: 1,
        size: 10,
        keywords:''
    })
    // 获取文章列表
    useEffect( () => {
        (async () => {
            const recode = await http.get('/article/search', {params});
            const {count, rows} = recode.data;
            setArticleData({
                list: rows,
                count
            })
        })()
    }, [params])

    /* 表单筛选功能实现 */
    const onFinish = (values) => {
        const { date,...itemData} = values;
        // 数据处理
        const _params = {}
        // 初始化时间
        if (date) {
            _params.begin_pubdate = date[0].format('YYYY-MM-DD')
            _params.end_pubdate = date[1].format('YYYY-MM-DD')
        }
        // 修改params数据 引起接口的重新发送 对象的合并是一个整体覆盖 改了对象的整体引用
        setParams({
            ...params,
            ...itemData,
            ..._params
        })
    }
    // 翻页实现
    const pageChange = (page) => {
        setParams({
            ...params,
            page
        })
    }

    const formatStatus = (type) => {
        const TYPES = {
            1: <Tag color="red">审核成功</Tag>,
            2: <Tag color="green">审核失败</Tag>
        }
        return TYPES[type]
    }

    // 删除文章
    const delArticle = async (data) => {
        await http.delete(`/mp/articles/${data.id}`)
        // 刷新一下列表
        setParams({
            ...params,
            page: 1
        })
    }

    // 编辑文章
    const navigate = useNavigate()
    const goPublish = (data) => {
        navigate(`/publish?id=${data.id}`)
    }

    const columns = [
        {
            title: '标题',
            dataIndex: 'title',
            width: 220
        },
        {
            title: '栏目',
            dataIndex: 'categoryRows',
            width: 220,
            render: (rows) => {
                return rows && rows['category_name'];
            }
        },
        {
            title: '状态',
            dataIndex: 'type',
            render: data => formatStatus(data)
        },
        {
            title: '发布时间',
            dataIndex: 'creat_time'
        },
        {
            title: '操作',
            render: data => {
                return (
                    <Space size="middle">
                        <Button
                            type="primary"
                            shape="circle"
                            icon={<EditOutlined/>}
                            onClick={() => goPublish(data)}/>
                        <Button
                            type="primary"
                            danger
                            shape="circle"
                            icon={<DeleteOutlined/>}
                            onClick={() => delArticle(data)}
                        />
                    </Space>
                )
            },
            fixed: 'right'
        }
    ]

    return (
        <div>
            {/* 筛选区域 */}
            <Card
                title={
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>
                            <Link to="/home">首页</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>内容管理</Breadcrumb.Item>
                    </Breadcrumb>
                }
                style={{marginBottom: 20}}
            >
                <Form onFinish={onFinish}>
                    <Form.Item label="关键字" name="keywords" style={{width: '310px'}}>
                        <Input placeholder="请输入关键字" />
                    </Form.Item>
                    <Form.Item label="状态" name="status">
                        <Radio.Group>
                            {
                                RadioList.map(item =>
                                    <Radio value={item.key} key={item.key}>{item.name}</Radio>
                                )
                            }
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="频道" name="channel_id">
                        <Select placeholder="请选择文章频道" style={{width: '265px'}}>
                            {
                                Channel.map(item =>
                                    <Option key={item.id} value={item.id}>{item.category_name}</Option>
                                )
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item label="日期" name="date">
                        {/* 传入locale属性 控制中文显示*/}
                        <RangePicker locale={locale}></RangePicker>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{marginLeft: 80}}>
                            筛选
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            {/* 文章列表区域 */}
            <Card title={`根据筛选条件共查询到 ${articleData.count} 条结果：`}>
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={articleData.list}
                    pagination={
                        {
                            pageSize: params.size,
                            total: articleData.count,
                            onChange: pageChange,
                            current: params.page
                        }
                    }
                    bordered
                />
            </Card>
        </div>
    )
}

export default connect(
    state =>({
        channelReducer:state.channelReducer
    }),{get_channel_async}
)(Article)