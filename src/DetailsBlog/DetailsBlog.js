import axios from "axios";

export default {
    name: "DetailsBlog",
    data: function(){
        return {
            id : this.$route.params.id,
            blogDetails: []
        }
    },
    mounted(){
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
            .then(
                (response) => {
                    console.log(response.data)
                    this.blogDetails = response.data
                }
            )
    }
}