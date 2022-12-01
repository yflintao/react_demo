import './index.scss'
import {observer} from 'mobx-react-lite'
import {Table, Tag, Card, Input} from 'antd'
import {useEffect, useState} from 'react'
import {http,filterData} from '@/utils'

const {Search} = Input


const News = () => {
    const [newsData, setNewsData] = useState({
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
    useEffect(() => {
        const loadList = async () => {
            const filterParams = filterData(params);
            console.log('filterParams:',filterParams);
            const recode = await http.get('/article/search', {params:filterParams});
            const {count, rows} = recode.data
            setNewsData({
                list: rows,
                count
            })
        }
        loadList()
    }, [params])

    const onSearch = (keywords) => {
        setParams({
            ...params,
            page:1,
            keywords
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
        let tagHtml = '';
        if(type === 1){
            tagHtml = <Tag color="green">审核成功</Tag>
        }else{
            tagHtml = <Tag color="red">未审核</Tag>
        }
        return tagHtml;
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
        }
    ]

    return (
        <div>
            {/* 筛选区域 */}
            <Card
                title="关键词检索"
                style={{marginBottom: 12}}
            >
                <Search
                    placeholder="输入需要检索的关键词"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
            </Card>
            {/* 列表区域 */}
            <Card title={`根据筛选条件共查询到 ${newsData.count} 条结果：`}>
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={newsData.list}
                    pagination={
                        {
                            pageSize: params.size,
                            total: newsData.count,
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

export default observer(News)