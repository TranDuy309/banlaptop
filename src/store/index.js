import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        cart: [],
        cartLength: 0,
    },

    getters: {


        getCartLength(state) {
            return state.cartLength
        },

        /* lấy all sản phẩm đã đặt mua */
        getCart(state) {
            return state.cart
        },

        /* tính tổng tiền cho giỏ hàng */
        getCartTotalPrice(state) {
            let total = 0;
            state.cart.map(product => {
                total += product.GIA * product.SOLUONG
            })
            return total
        },
    },

    mutations: {

        /* Thêm 1 sản phẩm vào giỏ hàng */
        pushProductToCart(state, product) {
            product.SOLUONG = 1
            state.cart.push(product)
        },

        /* Tính số lượng và tính tiền cho sản phẩm */
        incrementProductQty(state, product) {
            product.SOLUONG++
                let indexOfProduct = state.cart.indexOf(product)
            state.cart.splice(indexOfProduct, 1, product)
        },

        incrementCartLength(state) {
            state.cartLength = 0
            if (state.cart.length > 0) {
                state.cart.map(product => {
                    state.cartLength += product.SOLUONG
                })
            }
        },

        /* Đặt số lượng sản phẩm và thay đổi giỏ hàng */
        changeQty(state, { product, qty }) {
            let cartProduct = state.cart.find(prod => prod.ID === product.ID)
            cartProduct.SOLUONG = qty

            state.cartLength = 0;
            if (state.cart.length > 0) {
                state.cart.map(product => {
                    state.cartLength += product.SOLUONG
                })
            }
            let indexOfProduct = state.cart.indexOf(cartProduct)
            state.cart.splice(indexOfProduct, 1, cartProduct)
        },

        /* Xóa sản phẩm từ giỏ hàng */
        removeProduct(state, product) {
            state.cartLength -= product.SOLUONG
            let indexOfProduct = state.cart.indexOf(product)
            state.cart.splice(indexOfProduct, 1)
        },

        /* Clear đơn hàng */
        clearCart(state) {
            state.cart = []
            state.cartLength = 0

        }
    },

    actions: {

        /* cart - Bấm nút cart và sản phẩm bay vào giỏ hàng */
        addProductToCart({ state, commit }, product) {
            const cartProduct = state.cart.find(prod => prod.ID === product.ID)
            if (!cartProduct) {
                commit("pushProductToCart", product)
            } else {
                commit("incrementProductQty", cartProduct)
            }
            commit('incrementCartLength')
        }
    },

    /* sử dụng plugin của vue-persisedstate để lưu lại thông tin 
    số sản phẩm cart và người dùng trong local storage */
    plugins: [createPersistedState()],

});