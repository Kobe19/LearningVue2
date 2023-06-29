import {bus} from "@/main";

export default {
    name: 'Header',
    data: function (){
        return {
            //titre: 'Mon titre de base',
        }
    },
    props: ['titre'],
    beforeCreate() {
    },
    created() {
        bus.$on('changeTitre', (data) => {
            this.titre = data
        })
    },
    beforeMount() {
    },
    mounted() {
    },
    beforeUpdate() {
    },
    updated() {
    }
}