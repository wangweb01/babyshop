<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <table>
                        <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="pro-thumbnail">
                                <!--<img src="" alt="">-->
                                <img src="images/product/product-1.jpg" alt="">
                            </td>
                            <td>Tmart Baby Dress</td>
                            <td>$25</td>
                            <td></td>
                            <td>$25</td>
                        </tr>
                        </tbody>
                    </table>
                    <h2>aaaaaaaaaaaaaaaa</h2>
                    <el-table
                            :data="tableData6"
                            :span-method="arraySpanMethod"
                            border
                            show-summary
                            style="width: 100%">
<!--
                        <el-table-column
                                prop="id"
                                label="ID">
                        </el-table-column>
-->
                        <el-table-column width="156" label="IMAGE">
                                <!--prop="pic"-->
                            <template slot-scope="scope">
                                <!--{{scope.row}}-->
                                <img :src="scope.row.pic" alt="">
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="title"
                                label="PRODUCT">
                        </el-table-column>
                        <el-table-column
                                prop="price"
                                sortable
                                label="PRICE">
                        </el-table-column>
                        <el-table-column
                                prop="amount2"
                                sortable
                                label="数值 2">
                        </el-table-column>
                        <el-table-column
                                prop="amount3"
                                sortable
                                label="数值 3">
                        </el-table-column>
                    </el-table>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cart",

        data() {
            return {
                tableData6: []
            }
        },
        watch:{
            tableData6(val){
                console.log('tableData >>>',val)
            }
        },
        methods:{
            arraySpanMethod({ row, column, rowIndex, columnIndex }){
                if (rowIndex){}
            }
        },
        mounted() {
            this.axios.get('http://localhost:3003/user/getCarts').then(res => {
                console.log('getCarts >>>', res);
                this.tableData6 = res.data;
            })
        }
    }
</script>

<style scoped>
    table {
        width: 100%;
        border-style: solid;
        border-color: #DDD;
        border-width: 1px;
    }

    th {
        border: 1px solid #DDD;
        padding: 15px;
        text-align: center;
        font-weight: 500;
        text-transform: uppercase;
    }

    td {
        border: 1px solid #DDD;
        padding: 15px;
        text-align: center;
    }

    .pro-thumbnail {
        width: 160px;
    }

    img {
        width: 100%;
    }
</style>