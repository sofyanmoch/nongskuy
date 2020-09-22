<template>
    <div>
        <!-- <button class="btn btn-danger" @click="onLogout()">LOGOUT</button> -->
        <b-row class="fluid mx-2">
          <b-col lg="12">
            <b-row>
              <b-col lg="8" class="mt-3">
               <LeftHead />
               <b-col lg="12">
                 <b-row class="mt-4">
                   <b-col lg="4"><Card /></b-col>
                   <b-col lg="4"><Card /></b-col>
                   <b-col lg="4"><Card /></b-col>
                 </b-row>
               </b-col>
              </b-col>
              <b-col lg="4" class="mt-3">
                <RightHead />
                <b-col lg="12" class="bg-danger">Lorem</b-col>
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
import { mapActions } from 'vuex'
export default {
  data () {

  },
  components: {
    LeftHead,
    RightHead,
    Card
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
