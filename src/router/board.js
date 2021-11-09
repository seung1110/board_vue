export default [
    {
        path : "/board/list",
        component : () => import("@/views/board/List.vue")
    },
    {
        path : "/board/detail",
        component : () => import("@/views/board/Detail")
    }
]