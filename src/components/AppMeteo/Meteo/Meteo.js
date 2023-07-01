import axios from "axios";

export default {
    name: "Meteo",
    data: function (){
        return {
            requete: '',
            temps: undefined,
            api_code: '47b03d39740d5d01247660605670c8d2',
            url_recherche: 'https://api.openweathermap.org/data/2.5/weather?'
            
        }
    },
    methods: {
        goMeteo: function (e){
            if(e.key == "Enter"){
                axios
                    .get(`${this.url_recherche}APPID=${this.api_code}&q=${this.requete}&units=metric&lang=fr`)
                    .then(
                        (response) => {
                            console.log(response)
                            this.temps = response.data
                        }
                    )
                    this.requete = ''
            }
        }
    }
}