<template>
    <div>
<b-modal id="editProduct" hide-footer centered title="Edit Item">
    <b-row>
        <b-col lg="12">
            <form >
            <b-row class="my-3">
                <b-col lg="3" cols="3">Name</b-col>
                <b-col lg="9" cols="9">
                    <b-form-input type="text" required placeholder="Item Name ..."></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-3">
                <b-col lg="3" cols="3">Image</b-col>
                <b-col lg="9" cols="9">
                    <b-form-file type="file" required></b-form-file>
                </b-col>
            </b-row>
            <b-row class="my-3">
                <b-col lg="3" cols="3">Price</b-col>
                <b-col lg="9" cols="9">
                    <b-form-input type="number"  required placeholder="Item Price ..."></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-3">
                <b-col lg="3" cols="3">Category</b-col>
                <b-col lg="9" cols="9">
                  <b-form-select >
                    <b-form-select-option v-for="(item, index) in category" :key="index" :value="item.id" required>
              {{item.category_name}}
            </b-form-select-option>
                  </b-form-select>
                </b-col>
            </b-row>
             <div class="form-button">
            <!-- <input type="submit" value="Send"/> -->
            <!-- <input type="button" value="cancel" @click="$emit('addclose')"/> -->
            <b-button class="mt-3" variant="outline-success" type="submit" block name="button">Add</b-button>
            <b-button class="mt-3" variant="outline-danger" type="button" block >Cancel</b-button>
          </div>
            </form>
        </b-col>
    </b-row>
  </b-modal>
</div>

</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      category: 'product/getAllCategory'
    })
  },
  methods: {
    ...mapActions({
      getCategory: 'product/getCategory'
    })
  },
  mounted () {
    this.getCategory()
  }
}
</script>
