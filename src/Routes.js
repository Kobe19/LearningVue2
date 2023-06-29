import Contenu from "@/components/Contenu/Contenu.vue";
import taskCreation from "@/components/ToDoList1/task-creation/task-creation.vue";

export default[
    {path: '/', component: Contenu},
    {path: '/todo', component: taskCreation}
]