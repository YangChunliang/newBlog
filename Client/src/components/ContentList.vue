<template>
    <div class="content-list">
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
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
    export default {
        name: "content-list",
        data() {
            return {
                options: [{
                    _id: "",
                    name: "全部"
                }],
                value: '全部',
                tableData: [],
                page_total: 0,
                sortName: ''
            }
        },
        mounted(){
            Axios({
                method: 'get',
                url: 'http://localhost:3000/category',
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
                    url: `http://localhost:3000/content?limit=6&category=${this.sortName}&page=${page}`
                }).then((res) => {
                    this.page_total = res.data.pages;
                    this.tableData = res.data.content.map(function (currentValue) {
                        return {
                            addTime: currentValue.addTime.split("T")[0],
                            sort: currentValue.category.name,
                            title: currentValue.title,
                            user: currentValue.user.username,
                            views: currentValue.views
                        }
                    });
                });
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
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
</style>
