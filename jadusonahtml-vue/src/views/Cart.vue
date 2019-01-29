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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cart"
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
    .pro-thumbnail img {
        width: 100%;
    }
</style>