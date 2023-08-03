import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: "/consultar",
        component: () => import('../modules/estudiante/pages/ConsultaEstudiante.vue'),
    },
    {
        path: "/guardar",
        component: () => import('../modules/estudiante/pages/GuardaEstudiante.vue'),
    }, {
        path: "/actualizar",
        component: () => import('../modules/estudiante/pages/ActualizarEstudiante.vue'),
    },
    {
        path: "/eliminar",
        component: () => import('../modules/estudiante/pages/EliminarEstudiante.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router 