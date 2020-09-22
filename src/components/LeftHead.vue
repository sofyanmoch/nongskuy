<template>
<div>
    <b-row class="header pt-0">
        <b-col lg="1" cols="1" class="py-2 text-center">
            <b-button v-b-toggle.my-sidebar>=</b-button>
        <Sidebar />
        </b-col>
        <b-col lg="7" cols="7" class="py-2 text-center">
            <h3>Food Items</h3>
        </b-col>
        <b-col lg="4" cols="4" class="py-2 search">
            <b-input-group>
                      <b-form-input
                        id="input-1"
                        type="text"
                        v-model="name"
                        placeholder="Search"
                      ></b-form-input>
                      <div class="btn btn-outline-primary">
                        <b-icon icon="search" @click="searchProduct"></b-icon>
                      </div>
                    </b-input-group>
        </b-col>
    </b-row>
</div>
</template>
<script>
import Sidebar from '../components/Sidebar'
export default {
  props: ['sortby', 'type'],
  data () {
    return {
      name: ''
    }
  },
  components: {
    Sidebar
  }
}
</script>
<style scoped>
.header{
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }
.search img{
    width: 30px;
    height: 30px
}
</style>
