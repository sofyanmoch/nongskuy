<template>
    <div>
      <!-- <ModalEdit /> -->
        <!-- <button class="btn btn-danger" @click="onLogout()">LOGOUT</button> -->
        <b-row class="container-fluid mx-2">
          <b-col lg="12">
            <b-row>
              <b-col lg="8" class="mt-3">
               <b-row>
                 <b-col lg="12">
                <LeftHead />
                </b-col>
               <b-col lg="12" class="card">
                 <b-row class="mt-4">
                   <b-col lg="12">
                     <Card />
                     </b-col>
                 </b-row>
               </b-col>
               <b-col lg="12">
                 <div class="overflow-auto">
                  <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="my-table"
                  ></b-pagination>
                 </div>
               </b-col>
               </b-row>
              </b-col>
              <b-col lg="4" class="mt-3">
                <RightHead />
                <b-col lg="12">
                  <EmptyCart />
                </b-col>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
    </div>
</template>
<script>
import LeftHead from '../components/LeftHead'
import RightHead from '../components/RightHead'
import Card from '../components/Card'
import EmptyCart from '../components/EmptyCart'
// import ModalEdit from '../components/ModalEdit'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      items: [
        { id: 1, first_name: 'sofyan', last_name: 'Flintstone' },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
        { id: 3, first_name: 'Barney', last_name: 'Rubble' },
        { id: 4, first_name: 'Betty', last_name: 'Rubble' },
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
        { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
      ]
    }
  },
  computed: {
    rows () {
      return this.items.length
    }
  },
  components: {
    LeftHead,
    RightHead,
    Card,
    EmptyCart
    // ModalEdit
  },
  methods: {
    ...mapActions({
      // actionLogout: 'auth/logout'
    })
    // onLogout () {
    //   this.actionLogout().then(() => {
    //     alert('Berhasil logout')
    //     window.location = '/login'
    //   })
    // }
  }
}
</script>
<style scoped>
  .card{
    background: rgba(190, 195, 202, 0.3);
  }
</style>
