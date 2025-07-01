const proveedores_routes = [
    {
        path: '/proveedores', 
        name: 'proveedores_list',
        component: ()=>import('../components/proveedores/ProveedoresList.vue')
    },
    {
        path: '/proveedores/:id/show',
        name: 'proveedores_show',
        component: ()=>import('../components/proveedores/ProveedoresShow.vue')
    },
    {
        path: '/proveedores/create',
        name: 'proveedores_create',
        component: ()=>import('../components/proveedores/ProveedoresCreate.vue')
    },
    {
        path: '/proveedores/:id/edit',
        name: 'proveedores_edit',
        component: ()=>import('../components/proveedores/ProveedoresUpdate.vue')
    }, 
]
export default proveedores_routes