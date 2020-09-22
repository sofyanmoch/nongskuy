<template>
    <div>
        <b-col lg="12" md="12" sm="12" cols="12">
            <LandHeader />
            <b-col lg="12" md="12" sm="12" cols="12">
              <b-row class="mt-5">
                <b-col lg="6" md="6" sm="6" cols="6" class="main-left mt-5">
                  <b-row>
                    <b-col lg="12" md="12" sm="12" cols="12">
                      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, tempora libero consequuntur iure et mollitia unde eveniet molestiae. Laudantium esse tempore eveniet vitae cupiditate porro temporibus, assumenda facilis quibusdam ratione!</h5>
                      </b-col>
                    <b-col lg="12" md="12" sm="12" cols="12"></b-col>
                  </b-row>
                </b-col>
                <b-col lg="6" md="6" sm="6" cols="6">
                  <img src="../assets/img/illust1.png" alt="" width="100%">
                </b-col>
              </b-row>
            </b-col>
            <b-col lg="12" md="12" sm="12" cols="12" class="my-5 text-center bg-primary item">
              <b-row>
                <b-col lg="4" md="4" sm="4" cols="4"><h2>Maps ikon</h2></b-col>
                <b-col lg="4" md="4" sm="4" cols="4"><h2>sum testi</h2></b-col>
                <b-col lg="4" md="4" sm="4" cols="4"><h2>Rating</h2></b-col>
              </b-row>
            </b-col>
        </b-col>
    </div>
</template>
<script>
import LandHeader from '../components/LandHeader'
export default {
  components: {
    LandHeader
  }
}
</script>
<style scoped>
  .main-left{
    font-family: Rubik;
  }
  .item{
    height: 70px;
  }
</style>
