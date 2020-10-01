<template>
    <b-row>
        <b-col lg="3">
            <b-row class="my-5">
                 <b-col lg="12">
        <b-row class="login">
            <b-col lg="12" class="text-center">
                <h3 v-warna="red">Login</h3>
            </b-col>
            <b-col lg="12">
                <form class="mx-5 my-3" v-on:submit.prevent="onLogin()">
                    <input type="text" v-model="form.email" class="form-control my-2" placeholder="email" required>
                    <input type="password" v-model="form.password" class="form-control my-2" placeholder="password" required>
                    <button type="submit" class="btn btn-success">Login</button>
                </form>
            </b-col>
            <b-col lg="12" class="text-center">Belum memiliki akun? <router-link to="/register">Register</router-link></b-col>
        </b-row>
    </b-col>
            </b-row>
        </b-col>
        <b-col lg="9" class="login-image">
            <img src="../assets/img/illust1.png" alt="" width="100%">
        </b-col>
    </b-row>
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
    onLogin () {
      this.actionLogin(this.form).then((response) => {
        alert(response)
        console.log(response)
        if (response === 'Login Success') {
          window.location = '/menu'
        } else {
          return false
        }
      // eslint-disable-next-line handle-callback-err
      }).catch((err) => {
        alert(err)
      })
    },
    ...mapActions({
      actionLogin: 'auth/login'
    })
  }
}
</script>
