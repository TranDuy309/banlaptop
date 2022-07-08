<template>
    <div class="content">

        <!-- <div class="container-fluid"> -->
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#/giohang/giohang">Giỏ hàng</a></li>
                    <li class="breadcrumb-item"><a href="#">Thông tin giao hàng</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Phương thức thanh toán</li>
                </ol>
            </nav>

            <div class="row">
                <!-- left -->

                <div class="col-md-5">
                    <div class="col-12">
                        <h5 class="card-title" style="font-weight: bold">
                            Thông tin giao hàng
                        </h5>
                        <span>Bạn đã có tài khoản?&nbsp;<a href="#/dangnhap">Đăng nhập</a></span>
                        <h3></h3>
                        <form>
                            <div class="form-group">
                                <label for="inputEmail4">Họ và tên:</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Họ và Tên">
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Email:</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Số điện thoại:</label>
                                    <input type="text" class="form-control" id="inputPassword4"
                                        placeholder="Số điện thoại">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputEmail4">Địa chỉ:</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="Địa chỉ">
                            </div>
                            <button type="submit" class="row-sm-2 btn-primary btn-fill btn btn-lg btn-block"
                                @click="notifyVue('top', 'right')">Thanh toán</button>
                        </form>
                    </div>
                </div>



                <!--right-->
                <div class="col-md-7">
                    <div class="col-md-12">
                        <h5 class="card-title" style="font-weight: bold">
                            &nbsp;
                        </h5>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="col-md-2"
                                        style="text-align: center !important ; font-weight: bold; color:black">
                                        Sản phẩm</th>
                                    <th class="col-md-5"
                                        style="text-align: center !important ; font-weight: bold; color:black">
                                        Tên sản phẩm</th>
                                    <th class="col-md-2"
                                        style="text-align: center !important ; font-weight: bold; color:black">
                                        Số lượng</th>
                                    <th class="" style="text-align: center !important ; font-weight: bold; color:black">
                                        Giá sản phẩm</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(cart, index) in getCart" :key="index">
                                    <th scope="row"><img class="img-fluid"
                                            v-bind:src="'http://localhost:3000/' + cart.ANH + ''" alt="..." /></th>
                                    <td>{{ cart.TEN }}</td>
                                    <td style="text-align: center !important"> <select
                                            @change="onChangeQuantity($event, cart)"
                                            class="custom-select custom-select-sm" style="text-align: center !important" >
                                            <option v-for="i in 10" :key="i" :value="i"
                                                :selected="checkQty(cart.soluong, i)">
                                                {{ i }}
                                            </option>
                                        </select></td>
                                    <td style="text-align: center !important">{{ (cart.GIA * cart.SOLUONG) |
                                            numeral("0,0")
                                    }}</td>
                                </tr>

                                <tr>
                                    <td colspan="3">
                                        Tạm tính:
                                        <br>
                                        Phí vận chuyển:

                                    </td>
                                    <td style="text-align: center !important">
                                        {{ getCartTotalPrice | numeral("0,0") }}<span>đ</span>
                                        <br style="text-align: auto !important">--
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3" style=" font-weight: bold; color:black">
                                        Tổng cộng</td>
                                    <td style="text-align: center !important ; font-weight: bold; color:black">
                                        {{ getCartTotalPrice | numeral("0,0") }}<span>đ</span></td>
                                </tr>
                                <tr>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    components: {

    },
    data() {
        return {
            datacart: [],
            cart: null,
            thongtinsp: null,
            anhdd: null,
            form: {
                TEN: null,
                GIA: null,
                SOLUONG: 1,
                MOTA: null,
            },
            checkName: null,
            numberAtc: null
        }
    },
    computed: {
        ...mapGetters(["getCart", "getCartTotalPrice", "getCartL", "getCartLength"]),
    },
    methods: {
        onChangeQuantity(event, product) {
            let qty = parseInt(event.target.value);
            //console.log(qty);
            this.$store.commit("changeQty", { product, qty });
        },
        checkQty(prodQty, qty) {
            if (parseInt(prodQty) === parseInt(qty)) {
                return true;
            } else {
                return false;
            }
        },
    }
};
</script>
<style lang="scss">
</style>
