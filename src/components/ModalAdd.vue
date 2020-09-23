<template>
    <div>
<b-modal id="addProduct" hide-footer centered title="Add Item">
    <b-row>
        <b-col lg="12">
            <form>
            <b-row class="my-3">
                <b-col lg="3" cols="3">Name</b-col>
                <b-col lg="9" cols="9">
                    <b-form-input type="text" v-model="name" required placeholder="Item Name ..."></b-form-input>
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
                    <b-form-input type="number" v-model="price" required placeholder="Item Price ..."></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-3">
                <b-col lg="3" cols="3">Category</b-col>
                <b-col lg="9" cols="9">
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
            <b-button class="mt-3" variant="outline-success" type="submit" block name="button">Add</b-button>
            <b-button class="mt-3" variant="outline-danger" type="button" block >Cancel</b-button>
          </div>
            </form>
        </b-col>
    </b-row>
  </b-modal>
</div>

</template>
