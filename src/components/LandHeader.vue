<template>
    <div class="land-header">
        <b-row class="my-3">
            <b-col lg="3" md="3" sm="3" cols="3" class="px-5">
                <h4>NONGSKUY!</h4>
                </b-col>
            <b-col lg="5">
                <b-row>
                    <b-col lg="3" md="3" sm="3" cols="3"><a href="#">About</a></b-col>
                    <b-col lg="3" md="3" sm="3" cols="3"><a href="#">Testimonials</a></b-col>
                    <b-col lg="3" md="3" sm="3" cols="3"><a href="#">Pricing</a></b-col>
                    <b-col lg="3" md="3" sm="3" cols="3"><a href="#">Help</a></b-col>
                </b-row>
            </b-col>
            <b-col lg="4" class="text-right">
                <b-row>
                    <b-col lg="6"><router-link to="/login">Sign In</router-link></b-col>
                    <b-col lg="3" class="register text-center">
                        <a href="#">Register</a>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>
<style>
    h4{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.register{
    border: 1px solid #0089ff;
    border-radius: 10px;
    color: #0089ff;
    background: #0089ff;
    cursor: pointer;
}
.register a{
    color: white
}
</style>
