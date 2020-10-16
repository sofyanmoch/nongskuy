<template>
    <div>
<b-modal id="addProduct" hide-footer centered title="Add Item">
    <b-row>
        <b-col lg="12">
            <form @submit.prevent="insert" enctype="multipart/form-data">
            <b-row class="my-3">
                <b-col lg="3" cols="3">Name</b-col>
                <b-col lg="9" cols="9">
                    <b-form-input type="text" v-model="input.name" required placeholder="Item Name ..."></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-3">
                <b-col lg="3" cols="3">Image</b-col>
                <b-col lg="9" cols="9">
                    <b-form-file type="file" @change="processFile($event)" required></b-form-file>
                </b-col>
            </b-row>
            <b-row class="my-3">
                <b-col lg="3" cols="3">Price</b-col>
                <b-col lg="9" cols="9">
                    <b-form-input type="number" v-model="input.price" required placeholder="Item Price ..."></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-3">
                <b-col lg="3" cols="3">Category</b-col>
                <b-col lg="9" cols="9">
                  <b-form-select v-model="input.category_id">
                    <b-form-select-option v-for="(item, index) in category" :key="index" :value="item.id" required>
              {{item.category_name}}
            </b-form-select-option>
                  </b-form-select>
                  <!-- <div>
                    <b-form-select v-model="category">
                    <b-form-select-option v-for="(item,index) in categories" :key="index" :value="item.category_id">{{item.category_name}}</b-form-select-option>
                  </b-form-select>
                  </div> -->
                </b-col>
            </b-row>
             <div class="form-button">
            <!-- <input type="submit" value="Send"/> -->
            <!-- <input type="button" value="cancel" @click="$emit('addclose')"/> -->
            <b-button class="mt-3" variant="outline-success" type="submit" block @click="load()" name="button">Add</b-button>
            <b-button class="mt-3" variant="outline-danger" type="button" block @click="hideModal()">Cancel</b-button>
          </div>
            </form>
        </b-col>
    </b-row>
  </b-modal>
</div>

</template>
<script>
import Swal from 'sweetalert2'
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      input: {
        name: null,
        category_id: null,
        price: null,
        image: null
      }
    }
  },
  computed: {
    ...mapGetters({
      category: 'product/getAllCategory'
    })
  },
  methods: {
    ...mapActions({
      getCategory: 'product/getCategory',
      insert: 'product/insert'
    }),
    load () {
      this.input.image = this.image
      this.insert(this.input)
        .then((response) => {
          if (response.data.message === 'Add produks success') {
            Swal.fire(
              'Good job!',
              'Success Add Product!',
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
        })
        .catch(err => {
          console.log(err)
        })
      console.log(this.input)
    },
    processFile (event) {
      this.image = event.target.files[0]
    }
  },
  mounted () {
    this.getCategory()
  }
}
</script>
