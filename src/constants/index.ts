interface IRoute {
    title: string,
    path: string,
    submenu?: IRoute[]   
}

const ROUTES: IRoute[] = [
    {
        title: '使用场景',
        path: 'basic',
        submenu: [
            {
                title: '异步请求',
                path: '/basic/async'
            },
            {
                title: '浏览器操作',
                path: '/basic/scroll'
            },
            {
                title: '案例',
                path: '/basic/case'
            },
        ]
    }
]

export {
    ROUTES
}