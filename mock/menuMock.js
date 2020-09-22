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
    },
    {
      id: 12,
      label: '股票策略',
      href: '/strategy',
      icon: 'fa fa-file-text',
      permission: ['view', 'add', 'delete', 'edit'],
      show: true,
      children: []
    },
    {
      id: 12,
      label: '淘客',
      href: '/page_tbk/',
      icon: 'fa fa-file-text',
      permission: ['view', 'add', 'delete', 'edit'],
      show: true,
      children: []
    },
    {
      id: 12,
      label: '淘客产品搜索',
      href: '/page_tbk/product_list',
      icon: 'fa fa-file-text',
      permission: ['view', 'add', 'delete', 'edit'],
      show: true,
      children: []
    },
    {
      id: 12,
      label: '淘客精选',
      href: '/page_tbk/material_list',
      icon: 'fa fa-file-text',
      permission: ['view', 'add', 'delete', 'edit'],
      show: true,
      children: []
    },
    {
      id: 12,
      label: '淘客店铺',
      href: '/page_tbk/shop_list',
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
