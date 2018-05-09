<template>
    <div class="content-list" v-loading="loading">
        <h3>文章列表</h3>
        <el-select v-model="value" placeholder="请选择" @change="myChange">
            <el-option
                    v-for="item in options"
                    :key="item._id"
                    :label="item.name"
                    :value="item._id">
            </el-option>
        </el-select>
        <el-table
                :data="tableData"
                stripe
                border
                style="width:100%;margin-top:20px;">
            <el-table-column
                    prop="addTime"
                    label="创建日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="sort"
                    label="文章分类"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="title"
                    label="文章标题"
                    width="360">
            </el-table-column>
            <el-table-column
                    prop="user"
                    label="作者"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="views"
                    label="阅读数"
                    width="100">
            </el-table-column>
            <el-table-column label="操作" prop="_data">
                <template slot-scope="scope">
                    <router-link :to="scope.row._data.href"><a class="con_edit" href="javascript:">编辑</a></router-link>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
                :page-count="page_total">
        </el-pagination>
    </div>
</template>

<script>
    import Axios from 'axios';
    import ContentAdd from './ContentAdd.vue';
    export default {
        name: "content-list",
        components:{
            ContentAdd
        },
        data() {
            return {
                options: [{
                    _id: "",
                    name: "全部"
                }],
                value: '全部',
                tableData: [],
                page_total: 0,
                sortName: '',
                contentEdit: false,
                articleLink: '',
                loading: true
            }
        },
        mounted(){
            Axios({
                method: 'get',
                url: 'http://blog.springmoon.cn:3000/category',
                data:{
                }
            }).then((res) => {
                this.options.push(...res.data);
                this.getContentBySort(1);
            });
        },
        methods:{
            getContentBySort(page){
                Axios({
                    method: 'get',
                    url: `http://blog.springmoon.cn:3000/content?limit=6&category=${this.sortName}&page=${page}`
                }).then((res) => {
                    this.loading = false;
                    this.page_total = res.data.pages;
                    this.tableData = res.data.content.map(function (currentValue) {
                        return {
                            addTime: currentValue.addTime.split("T")[0],
                            sort: currentValue.category.name,
                            title: currentValue.title,
                            user: currentValue.user.username,
                            views: currentValue.views,
                            _data: {
                                _id: currentValue._id,
                                href: "/manage/content_edit?id=" + currentValue._id
                            }
                        }
                    });
                });
            },
            handleEdit(row) {
                location.href = `http://ycl.springmoon.cn/manage/content_edit?id=${row._data._id}`;
            },
            handleDelete(row) {
                this.$confirm('确定删除该文章?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    Axios({
                        method: 'get',
                        url: `http://blog.springmoon.cn:3000/contentDelete?id=${row._data._id}`
                    }).then((res) => {
                        let data = res.data;
                        if(data.status === 0){
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            setTimeout(function () {
                                location.reload();
                            },2000)
                        }
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            handleCurrentChange(val){
                this.getContentBySort(val);
            },
            myChange(val){
                this.sortName = val;
                this.getContentBySort(1);
            }
        }
    }
</script>

<style scoped>
    .content-list{
        float:left;
        margin-left:20px;
        width:1000px;
    }
    .el-pagination {
        margin-top:20px;
        text-align: center;
    }
    .content-edit{
        position: absolute;
        right:0;
        top:0;
        background-color: #fff;
        z-index: 10;
    }
    .con_edit{
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        padding: 7px 15px;
        font-size: 12px;
        border-radius: 3px;
    }
    .con_edit:hover{
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
</style>
