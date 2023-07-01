import Contenu from "@/components/Contenu/Contenu.vue";
import taskCreation from "@/components/ToDoList1/task-creation/task-creation.vue";
import Blog from "@/components/Blog/Blog.vue";
import DetailsBlog from "@/DetailsBlog/DetailsBlog.vue";
import Meteo from "@/components/AppMeteo/Meteo/Meteo.vue";

export default[
    {path: '/', component: Contenu},
    {path: '/todo', component: taskCreation},
    {path: '/blog', component: Blog},
    {path: '/blog/:id', component: DetailsBlog},
    {path: '/meteo', component: Meteo}


]