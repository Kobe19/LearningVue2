import Header from "@/components/Header/header.vue";
import SingleTask from "@/components/ToDoList1/single-task/single-task.vue";

export default{
    name: 'task-creation',
    data: function () {
        return {
            titre: 'La To-Do Liste !',
            myTitle: 'Rentrez vos choses à faire.',
            tasks: ['JavaScript', 'Vue', 'Python', 'React', 'Angular'],
            formData: {
                newTask: ''
            }
        }
    },
    components: {
        'header-top' : Header,
        'single-task' : SingleTask
    },
    methods: {
        toggleBtnFunc: function(i){
            return this.tasks.splice(i, 1)
        },
        saveData: function (){
            this.tasks.push(this.formData.newTask)
            this.formData.newTask = ''
        }
    }
}