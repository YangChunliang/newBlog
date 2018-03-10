<template>
    <div class="content">
        <ul>
            <li v-for="item in helloData">{{ item.title }}</li>
        </ul>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        name: "article-content",
        data () {
            return {
                helloData: ""
            }
        },
        mounted(){
            Axios({
                method: 'get',
                url: 'http://localhost:3000/content',
            }).then((response) => {
                this.helloData = response.data;
            })
        }
    }
</script>

<style scoped>

</style>
