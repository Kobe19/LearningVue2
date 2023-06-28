import Contenu from "@/components/Contenu/Contenu";
import {bus} from "@/main";

export default {
    name: 'Liste',
    data(){
        return {
            fruits : ['Orange', 'papaye', 'Fraise']
        }
    },
    props: {
        prenom: {
            type: Object
        },
        myArr: {
            type: Array
        },
        monTexte: {
            type: String
        }
    },
    methods: {
        reversing: function () {
            return this.prenom?.nom.split('').reverse().join('')
        },
        deleteOneFilm: function (i) {
            return this.myArr.splice(i, 1);
        },
        deleteLastFilm: function () {
            return this.myArr.pop()
        },
        RefreshListFilm: function () {
            return this.myArr = Contenu.data().myArr
        },
        deleteTexte: function () {
            return this.monTexte = ""
        },
        changeTitre: function () {
            //First way to pass data from child to parent
            this.$emit('changeTitre', 'Mon nouveau Titre')

            //Second way to pass data from child to parent
            bus.$emit('changeTitre', 'Titre changé avec le Bus')
        }
    }
}