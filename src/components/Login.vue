<template>
    <div class="container-fluid">
      <b-row class="card home">
        <b-col lg="12">
          <b-row>
            <b-col lg="7" class="image">
              <div class="left ">
                <img src="../assets/img/undraw_eating_together_tjhx (1).svg" alt="">
              </div>
            </b-col>
            <b-col lg="5" cols="12" class="card-body my-5">
              <div class="right ">
                <b-row>
                  <b-col lg="12" class="text-center">
                    <h2 class="mt-3" v-warna="red">Login</h2>
                  </b-col>
                  <b-col lg="12" cols="12">
                    <form v-on:submit.prevent="onLogin()">
                      <div class="form-group">
                        <label >Email address</label>
                        <input v-model="form.email" type="email" class="form-control">
                      </div>
                      <div class="form-group">
                        <label >Password</label>
                        <input v-model="form.password" type="password" class="form-control">
                      </div>
                      <b-col lg="12">
                        <b-row>
                          <b-col lg="4" cols="4">
                            <button type="submit" class="btn mt-1 btn-primary">Submit</button>
                          </b-col>
                          <b-col lg="8" cols="8">
                            <b-col lg="12" cols="12" class="register">Don't have account?<router-link to="/register">Register</router-link></b-col>
                          </b-col>
                        </b-row>
                      </b-col>
                    </form>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
</template>
<script>
import Swal from 'sweetalert2'
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
        if (response === 'Login Success') {
          window.location = '/menu'
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${response}`
          })
        }
      // eslint-disable-next-line handle-callback-err
      }).catch((err) => {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      })
    },
    ...mapActions({
      actionLogin: 'auth/login'
    })
  }
}
</script>
<style scoped>
  /* .left{
    position: fixed;
} */
.left img{
  width: 100%;
}
.home{
  margin: 50px;
}

@media only screen and (max-width: 500px) {
  .image {
    display: none;
  }
  .home{
  margin: 0px;
}
.register{
  font-size: 11px;
}
}
</style>
