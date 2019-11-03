// import Mock from 'mockjs'
let menu = {
  admin: [
    {
      id: 12,
      label: '功能设置',
      href: '/fee-config/func',
      icon: 'fa fa-file-text',
      permission: ['view', 'add', 'delete', 'edit'],
      show: true,
      children: []
    },
    {
      id: 12,
      label: '功能包设置',
      href: '/fee-config/func-pack',
      icon: 'fa fa-file-text',
      permission: ['view', 'add', 'delete', 'edit'],
      show: true,
      children: []
    },
    {
      id: 12,
      label: '计费模式设置',
      href: '/fee-config/bill-model',
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
// Mock.mock(/\/user\/menu/, 'post', menu)
export default menu
