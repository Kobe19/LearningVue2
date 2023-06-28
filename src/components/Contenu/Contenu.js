import Liste from "@/components/Liste/Liste.vue";
import Texte1 from "@/components/Texte1.vue";
import Texte2 from "@/components/Texte2.vue";

export default {
    name: 'Contenu',
    data() {
        return {
            txt: 'Je suis le contenu',
            prenom: {
                nom: 'Enzo'
            },
            myArr: [
                {titre: 'Inception', date: 2010},
                {titre: 'Avatar', date: 2009},
                {titre: 'Seven', date: 1995}
            ],
            monTexte: 'Hello World',
            titre: 'Je suis le Titre',
            toggle1: true,
            toggle2: false,
            component: 'texte1'
        }
    },
    methods: {
        changementTitre: function (nvTitre){
            this.titre = nvTitre;
        },
        toggleOng1: function (){
            this.toggle1 = true
            this.toggle2 = false
        },
        toggleOng2: function (){
            this.toggle1 = false
            this.toggle2 = true
        }

    },
    components: {
        'liste': Liste,
        'texte1': Texte1,
        'texte2': Texte2
    }

}