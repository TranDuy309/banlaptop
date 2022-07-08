<template>
  <div class="content">
    <!-- <div class="container-fluid"> -->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3 class="card-title" style="text-align: center !important ; font-weight: bold;">
            GIỎ HÀNG
          </h3>
          <table class="table table-bordered"  v-if="getCartLength > 0">
            <thead>
              <tr>
                <th class="col-md-2" style="text-align: center !important ; font-weight: bold; color:black">Sản phẩm
                </th>
                <th class="col-md-4" style="text-align: center !important ; font-weight: bold; color:black">Tên sản phẩm
                </th>
                <th class="col-md-2" style="text-align: center !important ; font-weight: bold; color:black">Số lượng
                </th>
                <th class="col-md-2" style="text-align: center !important ; font-weight: bold; color:black">Giá
                </th>
                <th class="col-md-2" style="text-align: center !important ; font-weight: bold; color:black">Tổng
                </th>
                <th class="col-md-1" style="text-align: center !important ; font-weight: bold; color:black">Xóa</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cart, index) in getCart" :key="index">
                <th scope="row"><img class="img-fluid" v-bind:src="'http://localhost:3000/' + cart.ANH + ''" alt="..." /></th>
                <td>{{ cart.TEN }}</td>
                <td style="text-align: center !important">
                    <select @change="onChangeQuantity($event, cart)"
                        class="custom-select custom-select-sm" style="width:70%;  text-align: center;">
                        <option
                          v-for="i in 100"
                          :key="i"
                          :value="i"
                          :selected="checkQty(cart.SOLUONG, i)">
                         {{ i }}
                        </option>
                      </select>
                </td>
                <td style="text-align: center !important">{{ cart.GIA | numeral("0,0") }}</td>
                 <td style="text-align: center !important">{{ (cart.GIA * cart.SOLUONG) | numeral("0,0") }}</td>
                <td style="text-align: center !important">
                  <button @click="$store.commit('removeProduct', cart)" type="button"
                    class="row-sm-2 btn-secondary btn-fill">Xóa</button>
                </td>
              </tr>
              <tr>
                <td colspan="4" style="text-align: center !important ; font-weight: bold; color:black">Tổng tiền</td>
                <td style="text-align: center !important ; font-weight: bold; color:black">{{ getCartTotalPrice | numeral("0,0") }}<span>đ</span>
                </td>
              </tr>
              <tr>
              </tr>
            </tbody>
          </table>
          <div style="text-align: left; margin-right: 100px;" >
            <router-link to="/giohang/thanhtoan">
              <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-danger btn-fill float-right"
                @click="notifyVue1('top', 'right')">
                Thanh toán
              </button>
            </router-link>
          </div>
          <div style="text-align: center; margin-right: 250px;">
            <router-link to="/home">
              <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-success btn-fill float-right">
                Tiếp tục mua
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  components: {},
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
      numberAtc: null,
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
