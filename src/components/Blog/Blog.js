import axios from "axios";

export default {
    name: 'Blog',
    data() {
        return{
            allArticles: []
        }
    },
    created(){
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(
                (response) => {
                    console.log(response.data)
                    for(const article of response.data){
                        this.allArticles.push(article)
                    }

                }
            )
    }

}