<template>
    <div class="content">

        <!-- <div class="container-fluid"> -->
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#/home">Trang chủ</a></li>
                    <li class="breadcrumb-item"><a href="#/home">Sản phẩm</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Chi tiết sản phẩm</li>
                </ol>
            </nav>
            <div class="row" v-for="(product, index) in products" :key="index">

                <h5 class="card-title" style="font-weight: bold">
                    {{ product.TEN }}&nbsp/&nbsp{{ product.THUONGHIEU }}&nbsp/&nbsp{{ HEDIEUHANH }}
                </h5>
            </div>


            <div class="row" v-for="(product, index) in products" :key="index">
                <!-- left -->

                <div class="col-md-6">
                    <div class="col-12">
                        <div class="card" style="">
                            <img class="img-fluid" v-bind:src="'http://localhost:3000/' + product.ANH + ''" alt="..." />
                        </div>
                    </div>
                </div>
                <!--right-->
                <div class="col-md-6">
                    <div class="col-12">
                        <!-- <h5 class="card-title" style="font-weight: bold">
                            &nbsp;
                        </h5> -->
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <td colspan="2" style="font-weight: bold; text-align: center!important;">Thông số
                                        chi tiết</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width="30%">Hãng</td>
                                    <td>{{ product.THUONGHIEU }}</td>
                                </tr>
                                <tr>
                                    <td>CPU</td>
                                    <td>{{ product.CPU }}&nbsp;/&nbsp;{{ product.THONGTINCPU }}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{{ product.RAM }}&nbsp;/&nbsp;{{ product.DUNGLUONGRAM }}GB</td>
                                </tr>
                                <tr>
                                    <td>Ổ cứng</td>
                                    <td>{{ product.OCUNG }}&nbsp;/&nbsp;{{ product.DUNGLUONGOCUNG }}GB</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{{ product.HEDIEUHANH }}</td>
                                </tr>
                                <tr>
                                    <td>Mô tả ngắn</td>
                                    <td>{{ product.MOTA }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row" v-for="(product, index) in products" :key="index">
                <div class="col-6">
                    <button type="button" class="row-sm-2 btn-danger btn-fill btn btn-lg btn-block"
                        @click="addProductToCart(product)">Mua
                        hàng</button>
                </div>
                <div class="col-6">
                    <!-- <h5 class="card-title" style="font-weight: bold">Giá sản phẩm:</h5> -->
                    <div style="
                          font-weight: bold;
                          font-size: 50px;
                          color: #363636;
                          line-height: 1.25;
                          /* margin-top: 10px; */
                        ">Giá:
                        <span style="color:#FF4A55">{{ product.GIA | numeral("0,0") }} đ</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
export default {
    components: {},
    data() {
        return {
            products: [],
        }
    },
    computed: {
        ...mapGetters(["user"]),
    },
    mounted() {
        this.findSP()
    },
    methods: {
        ...mapActions(["addProductToCart"]),
        async findSP() {
            //   const token = localStorage.token;
            const result = await axios.get(`http://localhost:3000/product/find-product-by-id/${this.$route.params.id}`, {
                // headers: {
                //   "Access-Control-Allow-Origin": "*",
                //   // "Content-type": "Application/json",
                //   "Authorization": `Bearer ${token} `
                // }
            });
            console.log(result)
            this.products = result.data;
            this.TEN = result.data[0].TEN;
            this.CPU = result.data[0].CPU;
            this.RAM = result.data[0].RAM;
            this.OCUNG = result.data[0].OCUNG;
            this.DUNGLUONGOCUNG = result.data[0].DUNGLUONGOCUNG;
            this.DUNGLUONGRAM = result.data[0].DUNGLUONGRAM;
            this.GIA = result.data[0].GIA;
            this.HEDIEUHANH = result.data[0].HEDIEUHANH;
            this.MOTA = result.data[0].MOTA;
            this.THONGTINCPU = result.data[0].THONGTINCPU;
            this.THUONGHIEU = result.data[0].THUONGHIEU;

        },
    }
};

</script>
<style lang="scss">
</style>
