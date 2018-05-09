<template>
    <div class="add-category">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="分类名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">增加分类</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        name: "category-add",
        data() {
            return {
                form: {
                    name: ''
                }
            }
        },
        methods:{
            onSubmit(){
                Axios({
                    method: 'post',
                    url: 'http://blog.springmoon.cn:3000/categoryAdd',
                    data:{
                        name: this.form.name
                    }
                }).then((res) => {
                    let data = res.data;
                    if(data.status === 0){
                        this.$notify({
                            title: '成功',
                            message: `增加分类${this.form.name}成功！`,
                            type: 'success'
                        });
                        this.form.name = '';
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .add-category{
        float:left;
        margin-left:100px;
        margin-top: 30px;
        width:750px;
        padding-top: 50px;
    }
</style>
