<template>
  <div class="container-fluid">
    <!-- <ModalEdit /> -->
    <!-- <button class="btn btn-danger" @click="onLogout()">LOGOUT</button> -->
    <b-row>
      <b-col lg="12">
        <b-row>
          <b-col lg="8" class="mt-3">
            <b-row>
              <b-col lg="12">
                <LeftHead />
              </b-col>
              <b-col lg="12" class="card-body">
                <b-row class="mt-4">
                  <b-col lg="12" class="">
                    <div class="menu row">
                      <div class="col-lg-12 col-12">
                        <div class="row">
                          <div class="col-lg-10 col-6">
                            <form v-on:submit.prevent="">
                              <input
                                type="text"
                                name="search"
                                @keyup="getSearch(search)"
                                v-model="search"
                                id="search"
                                class="form-control"
                                placeholder="Search ..."
                              />
                            </form>
                          </div>
                          <div class="col-lg-2 col-2">
                            <div>
                              <b-dropdown
                                id="dropdown-1"
                                text="Sort"
                                class="mb-3 mr-2"
                              >
                                <b-dropdown-item @click="sortLowerPrice"
                                  >Cheapest price</b-dropdown-item
                                >
                                <b-dropdown-item @click="sortHigherPrice"
                                  >Higher Price</b-dropdown-item
                                >
                                <b-dropdown-item @click="sortLates()"
                                  >Lates</b-dropdown-item
                                >
                                <b-dropdown-item @click="sortAsc"
                                  >A-Z</b-dropdown-item
                                >
                                <b-dropdown-item @click="sortDesc"
                                  >Z-A</b-dropdown-item
                                >
                              </b-dropdown>
                            </div>
                          </div>
                          <div class="col-3 cart-page ml-4">
                            <button class="btn btn-page-cart" v-b-modal.modal-cart>
                            <b-icon icon="cart-check-fill"></b-icon>
                            </button>
                          </div>
                        </div>
                      </div>

                      <!-- modal -->
                      <div>
                        <b-modal
                          id="editProduct"
                          hide-footer
                          centered
                          title="Edit Item"
                        >
                          <b-row>
                            <b-col lg="12">
                              <form
                                @submit.prevent="updProduct"
                                enctype="multipart/form-data"
                              >
                                <b-row class="my-3">
                                  <b-col lg="3" cols="3">Name</b-col>
                                  <b-col lg="9" cols="9">
                                    <b-form-input
                                      v-model="upd.name"
                                      type="text"
                                      required
                                      placeholder="Item Name ..."
                                    ></b-form-input>
                                  </b-col>
                                </b-row>
                                <b-row class="my-3">
                                  <b-col lg="3" cols="3">Image</b-col>
                                  <b-col lg="9" cols="9">
                                    <b-form-file
                                      type="file"
                                      @change="procesFile($event)"
                                      required
                                    ></b-form-file>
                                  </b-col>
                                </b-row>
                                <b-row class="my-3">
                                  <b-col lg="3" cols="3">Price</b-col>
                                  <b-col lg="9" cols="9">
                                    <b-form-input
                                      v-model="upd.price"
                                      type="number"
                                      required
                                      placeholder="Item Price ..."
                                    ></b-form-input>
                                  </b-col>
                                </b-row>
                                <b-row class="my-3">
                                  <b-col lg="3" cols="3">Category</b-col>
                                  <b-col lg="9" cols="9">
                                    <b-form-select v-model="upd.category">
                                      <b-form-select-option
                                        v-for="(item, index) in category"
                                        :key="index"
                                        :value="item.id"
                                        required
                                      >
                                        {{ item.category_name }}
                                      </b-form-select-option>
                                    </b-form-select>
                                  </b-col>
                                </b-row>
                                <div class="form-button">
                                  <!-- <input type="submit" value="Send"/> -->
                                  <!-- <input type="button" value="cancel" @click="$emit('addclose')"/> -->
                                  <b-button
                                    class="mt-3"
                                    variant="outline-success"
                                    type="submit"
                                    block
                                    name="button"
                                    >Save</b-button
                                  >
                                  <b-button
                                    class="mt-3"
                                    variant="outline-danger"
                                    type="button"
                                    block
                                    >Cancel</b-button
                                  >
                                </div>
                              </form>
                            </b-col>
                          </b-row>
                        </b-modal>
                      </div>
                      <!-- end modal -->
                      <div
                        class="col-lg-4 col-6 my-2"
                        v-for="(item, index) in product"
                        :key="index"
                      >
                        <div class="item card">
                          <img :src="`http://54.161.214.210:3012/${item.image}`" />
                        </div>
                        <div class="row">
                          <div
                            class="text-left col-lg-12 col-md-12 col-sm-12 col-12"
                          >
                            <p class="mb-0">{{ item.name }}</p>
                            <h5 class="card-title">Rp. {{ item.price }}</h5>
                          </div>
                          <div
                            class="text-right col-lg-3 col-md-3 col-sm-3 col-3 my-2"
                          >
                            <button
                              type="button"
                              class="btn btn-primary"
                              @click="addCart(item.id,index)"
                            >
                              <b-icon icon="cart-plus-fill"></b-icon>
                            </button>
                          </div>
                          <div
                            class="text-right col-lg-3 col-md-3 col-sm-3 col-3 my-2"
                          >
                            <button
                              type="button"
                              v-b-modal.editProduct
                              class="btn btn-warning"
                              @click="updateGet(item.id, index)"
                            >
                              <b-icon icon="pencil"></b-icon>
                            </button>
                            <!-- <ModalEdit /> -->
                          </div>
                          <div
                            class="text-right col-lg-3 col-md-3 col-sm-3 col-3 my-2"
                          >
                            <button
                              type="button"
                              class="btn btn-danger"
                              @click="deleteProduct(item.id)"
                            >
                              <b-icon icon="trash-fill"></b-icon>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-lg-9 text-center my-5"
                        v-if="product.length === 0"
                      >
                        Item not found
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="4" class="mt-3 cart-responsive">
            <b-row class="header-right text-center">
                <b-col lg="12" class="py-2">
                    <h3>Cart<span class="mx-2 cart-length ">{{cart.length}}</span></h3>
                </b-col>
            </b-row>
            <b-col lg="12">
              <div v-if="cart.length === 0">
                <EmptyCart />
              </div>
              <div v-else>
                <b-row>
                  <b-col lg="12" v-for="(item,index) in cart" :key="index">
                    <b-row class="mt-4">
                      <b-col lg="3" cols="3">
                        <img :src="`http://54.161.214.210:3012/${item.image}`" width="80px" height="80px" alt="">
                      </b-col>
                      <b-col lg="6" cols="6" class="text-center">
                        <h5>{{item.name}}</h5>
                        <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                          <button type="button" class="btn btn-minus" @click="minus(index)">-</button>
                          <button type="button" class="btn btn-sum">{{item.qty}}</button>
                          <button type="button" class="btn btn-plus" @click="plus(index)">+</button>
                        </div>
                      </b-col>
                      <b-col lg="3" cols="3">
                        <p class="mt-4" style="font-size:20px;"><strong> {{item.price * item.qty}}</strong></p>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col lg="12" class="mt-5">
                    <b-row>
                      <b-col lg="6" cols="6">
                        <h5>Total :</h5>
                        <p>*Belum termasuk ppn</p>
                      </b-col>
                      <b-col lg="6" cols="6" class="text-right">
                        <h5>Rp. {{formatRp(totalPrice())}}</h5>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col lg="12" class="my-3">
                    <button v-b-modal.modal-co class="btn btn-checkout text-white">Checkout
                    </button>
                    <ModalCheckout />
                  </b-col>
                  <b-col lg="12">
                    <button class="btn btn-cancel text-white">Cancel</button>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-col>

          <!-- modal cart -->
          <b-modal id="modal-cart" hide-footer title="Cart">
              <b-row>
                  <b-col lg="12" v-for="(item,index) in cart" :key="index">
                    <b-row class="mt-4">
                      <b-col lg="3" cols="3">
                        <img :src="`http://54.161.214.210:3012/${item.image}`" width="80px" height="80px" alt="">
                      </b-col>
                      <b-col lg="6" cols="6" class="text-center">
                        <h5>{{item.name}}</h5>
                        <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                          <button type="button" class="btn btn-minus" @click="minus(index)">-</button>
                          <button type="button" class="btn btn-sum">{{item.qty}}</button>
                          <button type="button" class="btn btn-plus" @click="plus(index)">+</button>
                        </div>
                      </b-col>
                      <b-col lg="3" cols="3">
                        <p class="mt-4" style="font-size:20px;"><strong> {{item.price * item.qty}}</strong></p>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col lg="12" class="mt-5">
                    <b-row>
                      <b-col lg="6" cols="6">
                        <h5>Total :</h5>
                        <p>*Belum termasuk ppn</p>
                      </b-col>
                      <b-col lg="6" cols="6" class="text-right">
                        <h5>Rp. {{formatRp(totalPrice())}}</h5>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col lg="12" class="my-3">
                    <button @click="checkout(item)" v-b-modal.modal-co class="btn btn-checkout text-white">Checkout
                    </button>
                  </b-col>
                  <b-col lg="12">
                    <button class="btn btn-cancel text-white">Cancel</button>
                  </b-col>
                </b-row>
          </b-modal>
          <!-- modal co  -->
          <b-modal id="modal-co" hide-footer title="Modal Checkout">
    <b-col lg="12">
        <b-row>
            <b-col lg="12">
                <h4>Invoice #23</h4>
            </b-col>
           <b-col lg="12">
               <b-row>
                    <b-col lg="6" cols="6" class="mt-2">Cashier :</b-col>
            <b-col lg="6" cols="6">
                <input type="text" class="form-control" placeholder="input Your name...">
            </b-col>
               </b-row>
           </b-col>
           <b-col lg="12" class="mt-5" v-for="(item,index) in cart" :key="index">
               <b-row>
                   <b-col lg="5" cols="5">
                       <p>{{item.name}}</p>
                   </b-col>
                   <b-col lg="2" cols="2" class="text-center">
                       {{item.qty}}
                   </b-col>
                   <b-col lg="5" cols="5" class="text-center">
                       <p>Rp. {{formatRp(item.qty * item.price)}}</p>
                   </b-col>
               </b-row>
           </b-col>
           <b-col lg="12" class="mt-5">
               <b-row>
                   <b-col lg="6" cols="6" class="text-left">
                       <h4>Total : </h4>
                   </b-col>
                   <b-col lg="6" cols="6" class="text-center">
                       <h4>Rp. {{formatRp(totalPrice())}}</h4>
                   </b-col>
               </b-row>
           </b-col>
           <b-col lg="12">
               <p>*PPN 10%</p>
           </b-col>
           <b-col lg="12" class="my-3">
               <button @click="print" class="btn btn-checkout1 text-white">PRINT</button>
           </b-col>
        </b-row>
    </b-col>
  </b-modal>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
import JsPDF from 'jspdf'
import LeftHead from '../components/LeftHead'
import EmptyCart from '../components/EmptyCart'
// import ModalEdit from '../components/ModalEdit'
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      idProduct: null,
      indexProduct: null,
      priceCart: null,
      sumPrice: null,
      cart: [],
      search: '',
      upd: {
        id: null,
        name: null,
        image: null,
        price: null,
        category: null
      }
    }
  },
  computed: {
    ...mapGetters({
      product: 'product/getAllProduct',
      category: 'product/getAllCategory'
    }),
    rows () {
      return this.items.length
    }
  },
  components: {
    LeftHead,
    EmptyCart
    // ModalEdit
  },
  methods: {
    ...mapActions({
      getMenu: 'product/getProduct',
      getDetail: 'product/getDetail',
      deleteProducts: 'product/delete',
      updateProducts: 'product/update',
      searchProduct: 'product/searchData',
      sortLates: 'product/sortLates',
      sortHigherPrice: 'product/sortHigherPrice',
      sortLowerPrice: 'product/sortLowerPrice',
      sortAsc: 'product/sortAsc',
      sortDesc: 'product/sortDesc'
    }),
    addCart (id, index) {
      this.idProduct = id
      this.indexProduct = index
      const carts = this.cart.filter(e => e.id === id)
      if (carts.length <= 0) {
        const dataCart = this.product.filter(e => e.id === id)
        dataCart[0].qty = 1
        this.cart = [
          ...this.cart, dataCart[0]
        ]
        this.priceCart = [
          ...this.priceCart, dataCart[0].price
        ]
        this.sumPrice = this.priceCart
      } else {
        const oldData = this.cart.map((e) => {
          if (e.id === id) {
            e.qty += 1
          }
          return e
        })
        this.cart = oldData
      }
    },
    totalPrice () {
      let total = 0
      for (let i = 0; i < this.cart.length; i++) {
        total += this.cart[i].price * this.cart[i].qty
      }
      return total
    },
    minus (index) {
      const cart1 = this.cart[index].id
      const dataFilter = this.cart.filter((e) => {
        if (e.id === cart1) {
          e.qty -= 1
          if (e.qty < 1) {
            e.qty = 1
          }
        }
        return e
      })
      this.cart = dataFilter
    },
    plus (index) {
      const cart1 = this.cart[index].id
      const dataFilter = this.cart.filter((e) => {
        if (e.id === cart1) {
          e.qty += 1
        }
        return e
      })
      this.cart = dataFilter
    },
    procesFile (event) {
      this.upd.image = event.target.files[0]
      console.log(this.upd.image)
    },
    updateGet (id, index) {
      this.getDetail(id)
        .then((response) => {
          this.upd.id = response[0].id
          this.upd.name = response[0].name
          this.upd.image = response[0].image
          this.upd.price = response[0].price
          this.upd.category = response[0].category_id
        })
        .catch((err) => {
          alert(err)
        })
    },
    updProduct () {
      this.updateProducts(this.upd)
        .then((response) => {
          if (response === 'Update produks success') {
            Swal.fire('Good job!', 'Success Update Product!', 'success')
            setTimeout(() => {
              location.reload()
            }, 1000)
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<a href>Why do I have this issue?</a>'
            })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getSearch () {
      this.$router.push({
        path: '/menu',
        query: { search: this.search }
      })
      this.searchProduct(this.search)
    },
    checkout (item) {
      localStorage.setItem('cart', this.item)
    },
    formatRp (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    print: function () {
      const pdfName = 'Invoice'
      var doc = new JsPDF()
      doc.text('Ini invoice ceritanya', 10, 10)
      doc.save(pdfName + '.pdf')
      Swal.fire(
        'Thank You!',
        'Invoice Downloaded!',
        'success'
      )
      setTimeout(() => {
        window.location = '/menu'
      }, 2000)
    },
    deleteProduct (id) {
      this.deleteProducts(id).then(() => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Delete!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Delete Success!',
              'Item deleted',
              'success'
            )
            setTimeout(
              location.reload()
              , 1000)
          }
        })
      })
    }
  },
  mounted () {
    this.getMenu()
  }
}
</script>
<style scoped>
.card-body {
  background: rgba(190, 195, 202, 0.3);
}
.item img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
 .header-right{
     height: 50px;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
 }
.card img:hover {
  opacity: 0.7;
  cursor: pointer;
}
.btn-minus {
  background: rgba(130, 222, 58, 0.2);
border: 1px solid #82DE3A;
box-sizing: border-box;
}
.btn-plus {
  background: rgba(130, 222, 58, 0.2);
border: 1px solid #82DE3A;
box-sizing: border-box;
}
.btn-sum{
  background: #FFFFFF;
border: 1px solid #82DE3A;
box-sizing: border-box;
}
.btn-checkout {
  background: #57CAD5;
  width: 100%;
}
.cart-length{
  background: #57CAD5;
  border-radius: 10px;
}
.btn-checkout1{
    background: #F24F8A;
  width: 100%;
}
.btn-cancel{
  background: #F24F8A;
  width: 100%;
}
@media only screen and (max-width: 500px) {
  .cart-responsive{
    display:none;
  }

}
@media only screen and (min-width: 1000px) {
.cart-page{
  display:none;
}
}
</style>
