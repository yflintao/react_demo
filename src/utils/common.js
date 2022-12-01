// 过滤对象为空的数据
export const filterData = (data) => {
    const searchParams = JSON.parse(JSON.stringify(data))
    Object.keys(searchParams).map((item,index) => {
        if (typeof searchParams[item] == "object") {
            if (Array.isArray(searchParams[item])) {
                if (searchParams[item].length === 0) {
                    delete searchParams[item]
                }
            } else {
                if (!searchParams[item]) {
                    delete searchParams[item]
                } else {
                    if (Object.keys(searchParams[item]).length === 0) {
                        delete searchParams[item]
                    }
                }
            }
        } else {
            if (searchParams[item] === "null" || searchParams[item] === "" || searchParams[item] === undefined) {
                delete searchParams[item]
            }
        }
        return searchParams;
    })
    return searchParams;
}