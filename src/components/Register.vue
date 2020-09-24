<template>
    <div class="register-page"><b-col lg="6" cols="12">
                <form class="mx-5 my-3" v-on:submit.prevent="onRegister()">
                    <input type="text" v-model="form.email" class="form-control my-2" placeholder="email">
                    <input type="password" v-model="form.password" class="form-control my-2" placeholder="password">
                    <button type="submit" class="btn btn-success">Register</button>
                </form>
            </b-col>
            <b-col lg="12" cols="12" class="ml-5"> Sudah memiliki akun? <router-link to="/login">login</router-link></b-col>
            </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onRegister () {
      this.actionRegister(this.form).then((response) => {
        alert(response)
        window.location = '/login'
      // eslint-disable-next-line handle-callback-err
      }).catch((err) => {
        alert(err)
      })
    },
    ...mapActions({
      actionRegister: 'auth/register'
    })
  }
}
</script>
<style scoped>
    /* form{
        width: 100%;
    } */
    /* .register-page{
        width: 30%;
    } */
</style>
