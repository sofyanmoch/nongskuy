<template>
    <div class="menu row">
      <div class="col-lg-12 col-12 mx-5">
        <div class="row">
          <div class="col-lg-9 col-7">
             <form v-on:submit.prevent="">
         <input type="text" name="search"  @keyup="getSearch(search)" v-model="search" id="search" class="form-control" placeholder="Search ...">
       </form>
          </div>
          <div class="col-lg-2 col-2">
              <div>
            <b-dropdown id="dropdown-1" text="Sort" class="mb-3">
              <b-dropdown-item @click="sortLowerPrice">Cheapest price</b-dropdown-item>
              <b-dropdown-item @click="sortHigherPrice">Higher Price</b-dropdown-item>
              <b-dropdown-item @click="sortLates()">Lates</b-dropdown-item>
              <b-dropdown-item @click="sortAsc">A-Z</b-dropdown-item>
              <b-dropdown-item  @click="sortDesc">Z-A</b-dropdown-item>
            </b-dropdown>
          </div>
          </div>
    </div>
</div>

<!-- modal -->
<div>
<b-modal id="editProduct" hide-footer centered title="Edit Item">
    <b-row>
        <b-col lg="12">
            <form @submit.prevent="updProduct" enctype="multipart/form-data">
            <b-row class="my-3">
                <b-col lg="3" cols="3">Name</b-col>
                <b-col lg="9" cols="9">
                    <b-form-input v-model="upd.name" type="text" required placeholder="Item Name ..."></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-3">
                <b-col lg="3" cols="3">Image</b-col>
                <b-col lg="9" cols="9">
                    <b-form-file type="file" @change="procesFile($event)" required></b-form-file>
                </b-col>
            </b-row>
            <b-row class="my-3">
                <b-col lg="3" cols="3">Price</b-col>
                <b-col lg="9" cols="9">
                    <b-form-input v-model="upd.price" type="number"  required placeholder="Item Price ..."></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-3">
                <b-col lg="3" cols="3">Category</b-col>
                <b-col lg="9" cols="9">
                  <b-form-select v-model="upd.category">
                    <b-form-select-option v-for="(item, index) in category" :key="index" :value="item.id" required>
              {{item.category_name}}
            </b-form-select-option>
                  </b-form-select>
                </b-col>
            </b-row>
             <div class="form-button">
            <!-- <input type="submit" value="Send"/> -->
            <!-- <input type="button" value="cancel" @click="$emit('addclose')"/> -->
            <b-button class="mt-3" variant="outline-success" type="submit" block name="button">Save</b-button>
            <b-button class="mt-3" variant="outline-danger" type="button" block >Cancel</b-button>
          </div>
            </form>
        </b-col>
    </b-row>
  </b-modal>
</div>
<!-- end modal -->
      <div class="col-lg-4 col-6 my-2" v-for="(item,index) in product" :key="index">
        <div class="item card">
            <img :src="`http://localhost:3007/${item.image}`">
                </div>
                <div class="row">
                    <div class="text-left col-lg-12 col-md-12 col-sm-12 col-12">
                <p class="mb-0">{{item.name}}</p>
            <h5 class="card-title">Rp. {{item.price}}</h5>
        </div>
        <div class="text-right col-lg-4 col-md-4 col-sm-4 col-4 my-2"><button type="button" class="btn btn-primary"><img src="../assets/img/addcart.png" width="50%"></button></div>
        <div class="text-right col-lg-4 col-md-4 col-sm-4 col-4 my-2">
          <button type="button" v-b-modal.editProduct class="btn btn-warning" @click="updateGet(item.id,index)">
            <img src="../assets/img/edit.png" width="50%">
          </button>
        <!-- <ModalEdit /> -->
        </div>
        <div  class="text-right col-lg-4 col-md-4 col-sm-4 col-4 my-2"><button type="button" class="btn btn-danger" @click="deleteProduct(item.id)"><img src="../assets/img/delete.png" width="50%"></button></div>
        </div>
        </div>
        <div class="col-lg-9 text-center my-5 mx-5" v-if="product.length === 0">
          Item not found
        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2'
import { mapGetters, mapActions } from 'vuex'
// import ModalEdit from '../components/ModalEdit'
export default {
  data () {
    return {
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
  components: {
    // ModalEdit
  },
  computed: {
    ...mapGetters({
      product: 'product/getAllProduct',
      category: 'product/getAllCategory'
    })
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
    procesFile (event) {
      this.upd.image = event.target.files[0]
      console.log(this.upd.image)
    },
    updateGet (id, index) {
      this.getDetail(id).then((response) => {
        this.upd.id = response[0].id
        this.upd.name = response[0].name
        this.upd.image = response[0].image
        this.upd.price = response[0].price
        this.upd.category = response[0].category_id
      }).catch((err) => {
        alert(err)
      })
    },
    updProduct () {
      this.updateProducts(this.upd)
        .then((response) => {
          if (response === 'Update produks success') {
            Swal.fire(
              'Good job!',
              'Success Update Product!',
              'success'
            )
            location.reload()
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<a href>Why do I have this issue?</a>'
            })
          }
        }).catch((err) => {
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
    deleteProduct (id) {
      this.deleteProducts(id)
    }
  },
  mounted () {
    this.getMenu()
  }
}
</script>
<style scoped>
  .item img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    .card img:hover{
        opacity: 0.7;
        cursor: pointer;
    }
</style>
