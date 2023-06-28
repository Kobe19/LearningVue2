import Liste from "@/components/Liste/Liste.vue";

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
            titre: 'Je suis le Titre'
        }
    },
    methods: {
        changementTitre: function (nvTitre){
            this.titre = nvTitre;
        }

    },
    components: {
        'liste': Liste
    }

}