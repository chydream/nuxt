const menu = {
  admin: [
    {
      id: 12,
      label: '首页',
      href: '/',
      icon: 'fa fa-file-text',
      permission: ['view', 'add', 'delete', 'edit'],
      show: true,
      children: []
    },
    {
      id: 12,
      label: '资讯',
      href: '/news',
      icon: 'fa fa-file-text',
      permission: ['view', 'add', 'delete', 'edit'],
      show: true,
      children: []
    }
  ],
  user: [
    {
      id: 1,
      label: '首页',
      href: '/index/home',
      icon: 'fa fa-home',
      permission: ['view', 'add', 'delete', 'edit'],
      show: true,
      children: []
    }
  ]
}
export default menu
