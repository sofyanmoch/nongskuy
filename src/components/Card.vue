<template>
    <div class="menu row">
      <div class="col-lg-12 col-12 mx-5">
        <div class="row">
          <div class="col-lg-9 col-7">
             <form v-on:submit.prevent="">
         <input type="text" name="search"  @keyup="searchProduct(search)" v-model="search" id="search" class="form-control" placeholder="Search ...">
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
          <button type="button" v-b-modal.editProduct class="btn btn-warning" @click="editProduct(item.id,index)">
            <img src="../assets/img/edit.png" width="50%">
          </button>
        <!-- <ModalEdit /> -->
        </div>
        <div  class="text-right col-lg-4 col-md-4 col-sm-4 col-4 my-2"><button type="button" class="btn btn-danger" @click="deleteProduct(item.id)"><img src="../assets/img/delete.png" width="50%"></button></div>
        </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
// import ModalEdit from '../components/ModalEdit'
export default {
  data () {
    return {
      search: ''
    }
  },
  components: {
    // ModalEdit
  },
  computed: {
    ...mapGetters({
      product: 'product/getAllProduct'
    })
  },
  methods: {
    ...mapActions({
      getMenu: 'product/getProduct',
      deleteProducts: 'product/delete',
      searchProduct: 'product/searchData',
      sortLates: 'product/sortLates',
      sortHigherPrice: 'product/sortHigherPrice',
      sortLowerPrice: 'product/sortLowerPrice',
      sortAsc: 'product/sortAsc',
      sortDesc: 'product/sortDesc'
    }),
    deleteProduct (id) {
      this.deleteProducts(id)
    },
    editProduct (id, index) {
      alert(id)
      alert(index)
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
        height: 100%
    }
    .card img:hover{
        opacity: 0.7;
        cursor: pointer;
    }
</style>
