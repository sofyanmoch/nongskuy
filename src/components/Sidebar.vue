<template>
  <b-sidebar id="my-sidebar" width="80px" shadow>
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="product m-0 text-center mt-5">
          <router-link to="/menu">
            <img src="../assets/img/fork.png" alt="Menu" class="my-0" />
            </router-link>
            <p class="text-center">Foods</p>
        </b-col>
        <b-col cols="12" class="clipboard m-0 text-center">
          <router-link to="/history">
            <img src="../assets/img/clipboard.png" alt="History" class="my-0" />
          </router-link>
          <p class="text-center">History</p>
        </b-col>
        <b-col cols="12" class="add-produk m-0">
         <button v-b-modal.addProduct><img
            src="../assets/img/add.png"
            alt="Add Menu"
            class="addProduct"
          /></button>
          <p class="text-center">Add</p>
          <ModalAdd />
        </b-col>
        <b-col lg="12" class="out">
          <button class="btn" @click="onLogout()"><img src="../assets/img/logout.png"></button>
          <p v-hai="'red'">{{name}}</p>
        </b-col>
      </b-row>
    </b-container>
  </b-sidebar>
</template>
<script>
import Swal from 'sweetalert2'
import home from '../mixins/home'
import { mapActions } from 'vuex'
import ModalAdd from './ModalAdd'
export default {
  mixins: [home],
  components: {
    ModalAdd
  },
  methods: {
    ...mapActions({
      actionLogout: 'auth/logout'
    }),
    onLogout () {
      this.actionLogout().then(() => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Logout!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Logout!',
              'Your Account has been logout.',
              'success'
            )
            setTimeout(
              window.location = '/login'
              , 3000)
          }
        })
      })
    }
  }
}
</script>
<style scoped>
  .add-produk img{
    width: 35px;
    height: 35px
  }
  .product img{
     width: 35px;
    height: 35px
  }
  .clipboard img{
     width: 35px;
    height: 35px
  }
  .out img{
    width: 80%;
  }
</style>
