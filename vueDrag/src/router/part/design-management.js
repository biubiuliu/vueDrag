export default {
  path: 'design-management',
  component: () => import("../../page/design-management"),
  meta: {title: "软装管理"},
  children: [
    {
      path: 'soft-management',
      component: () => import("../../page/design-management/soft-management/soft-management"),
      meta: {title: "设计管理"}
    },
    {
      path: 'order-management',
      component: () => import("../../page/design-management/order-management/order-management"),
      meta: {title: "订单管理"}
    },
  ]
}
