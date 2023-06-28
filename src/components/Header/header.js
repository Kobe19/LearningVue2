import {bus} from "@/main";

export default {
    name: 'Header',
    data: function (){
        return {
            titre: 'Mon titre de base'
        }
    },
    created() {
        bus.$on('changeTitre', (data) => {
            this.titre = data
        })
    }
}