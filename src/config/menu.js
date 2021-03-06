/**
 * 用于配置菜单栏,如果当前系统已经接入了 SSO，且菜单管理放在 SSO 管理，则不用配置此文件
 * @name 标题
 * @path 路由
 * @icon 图标
 * @children 子菜单
 */

const siderMenuConfig = [
  {
    name: 'Dashboard',
    to: '/dashboard',
    iconType: 'home',
    key: '/dashboard',
    subs: [
      {
        name: '平台概况',
        to: '/dashboard/gai',
        key: '/gai',
      },
      {
        name: '列表展示',
        to: '/dashboard/list',
        key: '/list',
      },
    ]
  },
  {
    name: '客户信息',
    to: '/message',
    key: '/message',
    iconType: 'solution'
  }
]

export { siderMenuConfig }
