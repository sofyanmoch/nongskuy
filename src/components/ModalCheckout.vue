<template>
    <div>
  <b-modal id="modal-co" hide-footer title="Modal Checkout">
    <b-col lg="12">
        <b-row>
            <b-col lg="12">
                <h4>Invoice #23</h4>
            </b-col>
           <b-col lg="12">
               <b-row>
                    <b-col lg="6" cols="6" class="mt-2">Cashier :</b-col>
            <b-col lg="6" cols="6">
                <input type="text" class="form-control" placeholder="input Your name...">
            </b-col>
               </b-row>
           </b-col>
           <b-col lg="12" class="mt-5">
               <b-row>
                   <b-col lg="5" cols="5">
                       <p>Pesanan 1</p>
                   </b-col>
                   <b-col lg="2" cols="2" class="text-center">
                       x2
                   </b-col>
                   <b-col lg="5" cols="5" class="text-center">
                       <p>Rp. 15.000</p>
                   </b-col>
               </b-row>
           </b-col>
           <b-col lg="12" class="mt-2">
               <b-row>
                   <b-col lg="5" cols="5">
                       <p>Pesanan 2</p>
                   </b-col>
                   <b-col lg="2" cols="2" class="text-center">
                       x2
                   </b-col>
                   <b-col lg="5" cols="5" class="text-center">
                       <p>Rp. 50.000</p>
                   </b-col>
               </b-row>
           </b-col>
           <b-col lg="12" class="mt-5">
               <b-row>
                   <b-col lg="6" cols="6" class="text-left">
                       <h4>Total : </h4>
                   </b-col>
                   <b-col lg="6" cols="6" class="text-center">
                       <h4>Rp. 80.000</h4>
                   </b-col>
               </b-row>
           </b-col>
           <b-col lg="12">
               <p>*PPN 10%</p>
           </b-col>
           <b-col lg="12" class="my-3">
               <button @click="print" class="btn btn-checkout text-white">PRINT</button>
           </b-col>
        </b-row>
    </b-col>
  </b-modal>
</div>
</template>
<script>
import Swal from 'sweetalert2'
import JsPDF from 'jspdf'
export default {
  methods: {
    print: function () {
      const pdfName = 'Invoice'
      var doc = new JsPDF()
      doc.text('Ini invoice ceritanya', 10, 10)
      doc.save(pdfName + '.pdf')
      Swal.fire(
        'Thank You!',
        'Invoice Downloaded!',
        'success'
      )
      setTimeout(() => {
        window.location = '/menu'
      }, 2000)
    }
  }
}
</script>
<style scoped>
.btn-checkout{
    background: #F24F8A;
  width: 100%;
}
</style>
