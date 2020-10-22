<template>
    <div class="container-fluid">
        <b-row>
          <b-col lg="12">
            <b-row>
              <b-col lg="12">
                <b-row class="m-2">
                  <b-col lg="10" cols="8">
                    <h3>!NONGSKUY</h3>
                  </b-col>
                  <b-col lg="1" cols="2" class="register">
                    <button class="btn btn-regis"><router-link to="/register">Register</router-link></button>
                  </b-col>
                  <b-col lg="1" cols="1">
                    <button class="btn btn-primary"><router-link to="/login" class="text-white">Login</router-link></button>
                  </b-col>
                </b-row>
              </b-col>
              <!-- carousel -->
              <b-col lg="12">
                <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="300"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://i.ytimg.com/vi/T9uI1-6Ac6A/maxresdefault.jpg"
        img-height="300"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="data:image/jpeg;base64,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"
        img-height="300"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://loveindonesia.com/images/recipe/1599/photo.jpg"
        img-height="300"
      ></b-carousel-slide>

    </b-carousel>
  </div>

              </b-col>

              <!-- top peoduct -->
              <b-col lg="12" class="my-5 text-center">
                <b-row>
                  <b-col lg="12" class="my-4 mx-4">
                    <h4>Top Products</h4>
                  </b-col>
                  <b-col lg="12">
                    <div>
  <div>
    <b-card-group deck>
      <b-card bg-variant="primary" text-variant="white" header="Primary" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card bg-variant="secondary" text-variant="white" header="Secondary" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card bg-variant="success" text-variant="white" header="Success" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-3">
    <b-card-group deck>
      <b-card bg-variant="info" text-variant="white" header="Info" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card bg-variant="warning" text-variant="white" header="Warning" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card bg-variant="danger" text-variant="white" header="Danger" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-3">
    <b-card-group deck>
      <b-card bg-variant="light" header="Light" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card bg-variant="dark" header="Dark" text-variant="white" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card header="Default" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</div>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
    </div>
</template>

<style scoped>
.btn-regis{
  border: 1px solid #00BFFF;
}
@media only screen and (max-width: 500px) {
  .register{
    display:  none;
  }
}
</style>
