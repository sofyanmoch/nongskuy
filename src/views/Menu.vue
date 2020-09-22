<template>
    <div>
        <button class="btn btn-danger" @click="onLogout()">LOGOUT</button>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {

  },
  methods: {
    ...mapActions({
      actionLogout: 'auth/logout'
    }),
    onLogout () {
      this.actionLogout().then(() => {
        alert('Berhasil logout')
        window.location = '/login'
      })
    }
  }
}
</script>
