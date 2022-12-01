import {makeAutoObservable} from 'mobx'
import {http} from '@/utils'

class ChannelStore {
    channelList = []

    constructor() {
        makeAutoObservable(this)
    }

    // article publish 哪里调用这个函数呢？
    loadChannelList = async () => {
        const {data} = await http.get('/category/index')
        this.channelList = data || [];
    }
}

export default ChannelStore