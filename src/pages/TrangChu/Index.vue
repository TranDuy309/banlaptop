<template>
  <div class="content">

    <!-- <div class="container-fluid"> -->
    <div class="container">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="img/faces/banner-3.jpg" class="d-block w-100 img-fluid" alt="...">
          </div>
        </div>
      </div>
      <h4 class="card-title" style="font-weight: bold; color:blue; text-align: center;">CÁC THƯƠNG HIỆU LAPTOP HÀNG ĐẦU
      </h4>
      <button class="badge badge-pill badge-primary" style="width: 150px; font-size: 20px; border-color: #fff;"><a
          href="https://www.asus.com/vn/" style="color:#fff">Asus</a></button>&nbsp;
      <button class="badge badge-pill badge-secondary" style="width: 150px; font-size: 20px;  border-color: #fff;"><a
          href="https://www.acer.com/ac/vi/VN/content/home" style="color:#fff">Acer</a></button>&nbsp;
      <button class="badge badge-pill badge-success" style="width: 150px; font-size: 20px;  border-color: #fff;"><a
          href="https://www.hp.com/vn-vi/home.html" style="color:#fff">HP</a></button>&nbsp;
      <button class="badge badge-pill badge-danger" style="width: 150px; font-size: 20px;  border-color: #fff;"><a
          href="https://www.dell.com/en-vn" style="color:#fff">Dell</a></button>&nbsp;
      <button class="badge badge-pill badge-warning" style="width: 150px; font-size: 20px;  border-color: #fff;"><a
          href="https://vn.msi.com/" style="color:#fff">MSI</a></button>&nbsp;
      <button class="badge badge-pill badge-info" style="width: 150px; font-size: 20px;  border-color: #fff;"><a
          href="https://www.gigabyte.com/" style="color:#fff">GIGABYTE</a></button>&nbsp;
      <button class="badge badge-pill badge-dark" style="width: 150px; font-size: 20px;  border-color: #fff;"><a
          href="https://www.lenovo.com/vn/vn/" style="color:#fff">Lenovo</a></button>
      <div class="col-md-12" style="
                    border-top: 5px solid yellowgreen;
                    margin-top: 20px;
                    margin-left: 0px;
    "></div>

      <div class="row">
        <div class="col-md-2">
          <!-- Thương hiệu -->
          <div class="col-12">
            <table class="table">
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr class="card-title" style="font-weight: bold">Thương hiệu</tr>
                <tr><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked>
                  <label class="form-check-label" for="flexCheckDefault">
                    Tất cả
                  </label>
                </tr>
                <tr>
                  <label  style="display: block" class="form-check-label" for="flexCheckDefault" v-for=" (brand, index) in LIST_THUONGHIEU" :key="index" :value="brand.ID">
                   <input class="form-check-input" type="checkbox" id="flexCheckDefault">{{brand.TEN}}
                  </label>
                </tr>
               
              </tbody>
            </table>
          </div>
          <!-- CPU -->
          <div class="col-12">
            <table class="table">
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr class="card-title" style="font-weight: bold">CPU</tr>
                <tr><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked>
                  <label class="form-check-label" for="flexCheckDefault">
                    Tất cả
                  </label>
                </tr>
                <tr>
                  <label  style="display: block" class="form-check-label" for="flexCheckDefault" v-for=" (cpu, index) in LIST_CPU" :key="index" :value="cpu.ID">
                   <input class="form-check-input" type="checkbox" id="flexCheckDefault">{{cpu.TEN}}
                  </label>
                </tr>
                
              </tbody>
            </table>
          </div>
          <!-- RAM -->
          <div class="col-12">
            <table class="table">
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr class="card-title" style="font-weight: bold">RAM</tr>
                <tr><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked>
                  <label class="form-check-label" for="flexCheckDefault">
                    Tất cả
                  </label>
                </tr>

                <tr>
                  <label  style="display: block" class="form-check-label" for="flexCheckDefault" v-for=" (ram, index) in LIST_RAM" :key="index" :value="ram.ID">
                   <input class="form-check-input" type="checkbox" id="flexCheckDefault">{{ram.TEN}}
                  </label>
                </tr>
 
              </tbody>
            </table>
          </div>
        </div>
        <!-- Sản phẩm -->
        <div class="col-md-10">
          <khuyenmai />
          <gia-re />
         
                
              </div>
            </div>
          </div>

       

    
  </div>
</template>
<script>
import Khuyenmai from "../../components/Khuyenmai.vue";
import GiaRe from "../../components/GiaRe.vue";
import axios from "axios";
export default {
  components: {
    Khuyenmai,
    GiaRe
  },
  data() {
    return {
      data: [],
      products: [],
      LIST_RAM:[],
      LIST_THUONGHIEU: [],
      LIST_CPU: [],
    };
  },

  mounted() {
    this.listSP();
    this.listRam();
    this.listBrand();
    this.listCpu();
  },
  methods: {
    async listSP() {
      // const token = localStorage.token;
      const result = await axios.get(`http://localhost:3000/product/get-all-product`);
      this.products = result.data;
      console.log(result.data)
    },
      async listRam() {
            const result = await axios.get("http://localhost:3000/product/get-all-ram");
            this.LIST_RAM = result.data;
        },
      async listBrand() {
            const result = await axios.get("http://localhost:3000/product/get-all-brand");
            this.LIST_THUONGHIEU = result.data;
        },
        async listCpu() {
            const result = await axios.get("http://localhost:3000/product/get-all-cpu");
            this.LIST_CPU = result.data;
        },
  },
};
</script>
<style>
</style>
