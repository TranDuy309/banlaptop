<template>
  <!-- selloff -->
  <div class="col-md-12">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div
            class="col-md-2"
            style="
              font-weight: bold;
              font-size: 18px;
              background-color: #17a2b8;
            "
          >
            <span style="color: #fff; margin-left: 10px">Giá rẻ</span>
          </div>
          <div
            class="col-md-9"
            style="
              border-top: 2px solid #6c757d;
              margin-top: 13px;
              margin-left: 20px;
            "
          ></div>
        </div>
        <!-- products -->
        <div class="row" style="margin-top: 20px">
          <div v-for="(product, index) in products" :key="index" class="col-sm-3">
          <template v-if="product.GIA <= 15000000">
<div class="card" style="heigth: 250px">
              <router-link :to="`/quanlysanpham/${product.ID}/chitietsp`"
                ><img
                  style="height: 180px; weight: 120px"
                  v-bind:src="'http://localhost:3000/' + product.ANH + ''"
                  class="card-img-top"
                  alt="..."
              /></router-link>
              <div class="card-body">
                <div style="font-size: 16px">
                  <span>{{ product.TEN }}</span>
                </div>
                <div
                  style="
                    font-weight: bold;
                    font-size: 14px;
                    color: red;
                    margin-top: 10px;
                  "
                >
                  <span>{{ product.GIA | numeral("0,0") }} VND</span>
                </div>
                 <div>
                    <router-link :to="`/quanlysanpham/${product.ID}/chitietsp`">
                          <button type="button" class="row-sm-1 btn-info btn-fill">Chi tiết</button></router-link>
                          <button type="button" class="row-sm-2 btn-danger btn-fill"  @click="addProductToCart(product)">Mua hàng</button>
                        </div>
              </div>
            </div>
          </template>
            <template v-else></template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      data: [],
      products: [],
    };
  },

  mounted() {
    this.listSP();
  },
  methods: {
      ...mapActions(["addProductToCart"]),
    async listSP() {
      const result = await axios.get(`http://localhost:3000/product/get-all-product-active`);
      this.products = result.data;
      console.log(result.data)
    },
  },
};
</script>