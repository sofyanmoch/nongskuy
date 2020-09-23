<template>
    <div class="menu">
      <div v-for="(item,index) in product" :key="index">
        <div class="item card">
            <img :src="`http://54.161.214.210:3007/${item.image}`">
                </div>
                <div class="row">
                    <div class="text-left col-lg-12 col-md-12 col-sm-12 col-12">
                <p class="mb-0">df</p>
            <h5 class="card-title">df</h5>
        </div>
        <div class="text-right col-lg-4 col-md-4 col-sm-4 col-4 my-2"><button type="button" class="btn btn-primary"><img src="../assets/img/addcart.png" width="50%"></button></div>
        <div v-b-modal.modal-update class="text-right col-lg-4 col-md-4 col-sm-4 col-4 my-2"><button type="button" class="btn btn-warning"><img src="../assets/img/edit.png" width="50%"></button></div>
        <!-- <ModalEdit /> -->
        <div  class="text-right col-lg-4 col-md-4 col-sm-4 col-4 my-2"><button type="button" class="btn btn-danger"><img src="../assets/img/delete.png" width="50%"></button></div>
        </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      product: 'product/getAllProduct'
    })
  },
  methods: {
    ...mapActions({
      getMenu: 'product/getProduct'
    })
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
