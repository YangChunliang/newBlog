<template>
    <div class="content-edit">
        <el-table
            :data="tableData"
            stripe
            border
            style="width:100%;margin-top:20px;">
        <el-table-column
                prop="_id"
                label="分类ID"
                width="280">
        </el-table-column>
        <el-table-column
                prop="name"
                label="分类名称"
                width="280">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        @click="handleEdit(scope.row)">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        name: "category-list",
        data() {
            return {
                tableData: [],
                category: ''
            }
        },
        mounted(){
            Axios({
                method: 'get',
                url: 'http://blog.springmoon.cn:3000/category',
                data:{
                }
            }).then((res) => {
                this.tableData = res.data;
            });
        },
        methods:{
            handleEdit(row) {
                this.$prompt('请输入分类名', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(({ value }) => {
                    Axios({
                        method: 'post',
                        url: 'http://blog.springmoon.cn:3000/categoryEdit',
                        data:{
                            id: row._id,
                            name: value
                        }
                    }).then((res) => {
                        let data = res.data;
                        if(data.status === 0){
                            this.$message({
                                type: 'success',
                                message: '修改成功！'
                            });
                            setTimeout(function () {
                                location.href= "http://ycl.springmoon.cn/manage/category_list";
                            },2000)
                        }
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消修改！'
                    });
                });
            }
        }
    }
</script>

<style scoped>
    .content-edit{
        float:left;
        margin-left:100px;
        margin-top: 30px;
        width:750px;
    }
</style>
