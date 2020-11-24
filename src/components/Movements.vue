<template>
    <v-card>
        <div class="container no-gutters ass">
            <h1 class="Title">Movimientos</h1>
            <div class="row justify-content-center align-items-center register_body">
                <div class=" col-auto ">
                    <div style="align-items: center">
                        <form class="text-info left right customer-input body_slam">
                            <div class="left right" style="padding-left: 5rem">
                                <div>
                                  <label for="pay">Cliente</label>
                                </div>
                                <input v-model="dni" id="dni" type="number" step="0.1" class="aaaa"/>
                                <div class="row justify-content-center col-2">
                                  <div class="col-auto">
                                    <b-btn @click="getCustomerByDni()">Buscar</b-btn>
                                  </div>
                                </div>
                            </div>
                            <div class="left right">
                                <label>Deuda</label>
                                <div class="paddin"></div>
                                <input class="output" v-model="deuda"/>
                            </div>
                            <div class="left right">
                                <label>Disponible</label>
                                <div class="paddin"></div>
                                <input class="output" v-model="disponible"/>
                            </div>
                        </form>
                    </div>
                    <br><br><br><br><br><br><br><br><br><br>
                    <div v-if="this.dni != null" class="bg-primary body_slam left" style="padding-right: 10%">
                        <div class="text-info" style="text-align: center; padding-left: 90px">
                            <h1 class="cust-name">{{customer.customerName}} {{customer.customerLastname}}</h1>
                        </div>
                        <div class="text-info" style="text-align: center; padding-left: 200px">
                        </div>
                        <div style="padding-top: 2rem" class="text-secondary">
                            <div>
                                <input style="text-align: left; color: #ff775c; background: #28201e; width: 50%" v-model="porcenInteres"/>
                            </div>
                            <div>
                                <input style="text-align: left; color: #ff775c; background: #28201e; width: 50%" v-model="tipoInteres"/>
                            </div>
                            <div>
                                <input style="text-align: left; color: #ff775c; background: #28201e; width: 50%" v-model="periodoInteres"/>
                            </div>
                            <div>
                                <input style="text-align: left; color: #ff775c; background: #28201e; width: 50%" v-model="capitalizacion"/>
                            </div>
                            <div>
                              <input style="text-align: left; color: #ff775c; background: #28201e; width: 50%" v-model="credito"/>
                            </div>
                            <div>
                              <input style="text-align: left; color: #ff775c; background: #28201e; width: 100%" v-model="lastDateMovement"/>
                            </div>
                            <div class = "left right">
                                <div style="padding-top: 2rem"></div>
                                <div>
                                    <label for="pay">Pagar</label>
                                </div>
                                <input v-model="payment" id="pay" type="number" step="0.1" class="aaaa"/>
                                <div>
                                    <label for="pay">Fecha de Pago</label>
                                </div>
                                <input v-model="generated_date_p" id="date" type="text" step="0.1" class="aaaa"/>
                                <div class="col-auto">
                                  <b-btn @click="postPayment()">Pagar</b-btn>
                                </div>
                            </div>
                          <div class="text-right">
                            <div style="padding-right: 3rem">
                              <label >Ganancia</label>
                            </div>
                            <input class="output"  v-model="ganancia"/>
                            <div style="padding-top: 2rem">
                              <b-btn class = "colorbtn">Imprimir Boletas</b-btn>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
          <div v-if="this.dni != null" class="tasa">
            <form>
              <div v-if="this.payments.length > 0 " class="bg-primary left right selection">
                <div style="border-radius: 0px"  class="col-13 text-info bg-primary row justify-content-center" >
                  <div class="col-12">
                    <div class = "title" style="text-align: center">
                      <h1>Ordenes</h1>
                    </div>
                    <div class="row justify-content-center">
                      <div class="row justify-content-center col-3">
                        <div class="col-auto">
                          <p>Código</p>
                        </div>
                      </div>
                      <div class="vl"></div>
                      <div class="row justify-content-center col-3">
                        <div class="col-auto">
                          <p>Fecha</p>
                        </div>
                      </div>
                      <div class="vl"></div>
                      <div class="row justify-content-center col-2">
                        <div class="col-auto">
                          <p>Total</p>
                        </div>
                      </div>
                      <div class="vl"></div>
                      <div class="row justify-content-center col-2">
                        <div class="col-auto">
                          <p>Act</p>
                        </div>
                      </div>
                    </div>
                    <hr>
                  </div>
                  <div class="col-12">
                    <li v-for="(order, index) in orders" :key="index" class="table">
                      <div class="row justify-content-center">
                        <div class="row justify-content-center col-3">
                          <div class="col-auto">
                            <p class ="subt">{{order.id}}</p>
                          </div>
                        </div>
                        <div class="vl"></div>
                        <div class="row justify-content-center col-3">
                          <div class="col-auto">
                            <p class ="subt">{{ order.generated_date}}</p>
                          </div>
                        </div>
                        <div class="vl"></div>
                        <div class="row justify-content-center col-2">
                          <div class="col-auto">
                            <p class ="subt">{{order.payment}}</p>
                          </div>
                        </div>
                        <div class="vl"></div>
                        <div class="row justify-content-center col-2">
                          <div class="col-auto">
                            <b-btn @click="deleteProduct(order.id)">Imprimir</b-btn>
                          </div>
                        </div>
                      </div>
                      <hr>
                    </li>
                  </div>
                </div>
              </div>
              <div ></div>
              <div v-if="this.orders.length > 0" class="bg-primary left right selection">
                <div style="border-radius: 0px"  class="col-14 text-info bg-primary row justify-content-center" >
                  <div class="col-12">
                    <div class = "title" style="text-align: center">
                      <h1>Pagos</h1>
                    </div>
                    <div class="row justify-content-center">
                      <div class="row justify-content-center col-3">
                        <div class="col-auto">
                          <p>Código</p>
                        </div>
                      </div>
                      <div class="vl"></div>
                      <div class="row justify-content-center col-3">
                        <div class="col-auto">
                          <p>Fecha</p>
                        </div>
                      </div>
                      <div class="vl"></div>
                      <div class="row justify-content-center col-2">
                        <div class="col-auto">
                          <p>Total</p>
                        </div>
                      </div>
                      <div class="vl"></div>
                      <div class="row justify-content-center col-2">
                        <div class="col-auto">
                          <p>Act</p>
                        </div>
                      </div>
                    </div>
                    <hr>
                  </div>
                  <div class="col-12">
                    <li v-for="(pago, index) in payments" :key="index" class="table">
                      <div class="row justify-content-center">
                        <div class="row justify-content-center col-3">
                          <div class="col-auto">
                            <p class ="subt">{{pago.id}}</p>
                          </div>
                        </div>
                        <div class="vl"></div>
                        <div class="row justify-content-center col-3">
                          <div class="col-auto">
                            <p class ="subt">{{ pago.generated_date}}</p>
                          </div>
                        </div>
                        <div class="vl"></div>
                        <div class="row justify-content-center col-2">
                          <div class="col-auto">
                            <p class ="subt">{{pago.payment}}</p>
                          </div>
                        </div>
                        <div class="vl"></div>
                        <div class="row justify-content-center col-2">
                          <div class="col-auto">
                            <b-btn @click="deleteProduct(order.id)">Imprimir</b-btn>
                          </div>
                        </div>
                      </div>
                      <hr>
                    </li>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
    </v-card>
</template>

<script>
   import {baseURL} from "@/baseURL";

   export default  {
       name: "ClientList",
       data: ()=> {
           return{
             dni: null,
             customer: null,
             clientAc: [],
             orders: [],
             payments: [],
             payment : null,
             generated_date : null,
             deuda : null,
             disponible : null,
             ganancia: null,
             porcenInteres : null,
             tipoInteres: null,
             periodoInteres: null,
             capitalizacion: null,
             lastDateMovement: null,
             credito: null,
             generated_date_p:null
           }
       },
       mounted() {

       },
       methods:{
         getCustomerByDni(){
           this.axios.get(baseURL + 'users/1/customersDni/'+this.dni)
               .then(responseCustomer => {
                 this.customer = responseCustomer.data;
                 console.log(responseCustomer);
                 this.axios.get(baseURL + 'customers/'+ responseCustomer.data.id+'/customerAccounts').then(responseCustomerAcoutn => {
                   this.clientAc = responseCustomerAcoutn.data;
                   this.deuda = this.clientAc.currentBalance.toFixed(2);
                   this.disponible = this.clientAc.availableBalance.toFixed(2);
                   this.ganancia = this.clientAc.gain.toFixed(2);
                   if(this.clientAc.interestRateType === 1){
                      this.tipoInteres = "Tipo de Interés: Simple";
                   }
                   if(this.clientAc.interestRateType === 2){
                     this.tipoInteres = "Tipo de Interés: Nominal";
                   }
                   if(this.clientAc.interestRatePeriod === 1){
                     this.periodoInteres = "Periodo: Mensual";
                   }
                   if(this.clientAc.interestRatePeriod === 2){
                     this.periodoInteres = "Periodo: Bimestral";
                   }
                   if(this.clientAc.compounding === 0){
                     this.capitalizacion = "Capitalizacion: ---";
                   }
                   if(this.clientAc.compounding === 1){
                     this.capitalizacion = "Capitalizacion: Diario";
                   }
                   this.porcenInteres = 'Interes: ' + this.clientAc.interestRate * 100 + '%';
                   this.credito = 'Credito: ' + this.clientAc.credit;
                   this.formatDateCustomerAccount();
                   console.log(responseCustomerAcoutn);
                   this.axios.get(baseURL + 'customerAccounts/' + responseCustomerAcoutn.data.id + '/payments')
                       .then(response =>{
                         this.payments = response.data.content;
                         this.formatDatePayments();
                         console.log(response);
                       })
                 });
                 this.axios.get(baseURL + 'customers/' + responseCustomer.data.id + '/orders')
                     .then(response =>{
                       this.orders = response.data.content;
                       this.formatDateOrders();
                       console.log(response);
                     });
               });
         },
         postPayment(){
           this.axios.post(baseURL + 'customerAccounts/1/payments', {
             generated_date : this.generated_date_p,
             payment: parseFloat(this.payment)
           })
         },
         formatDateOrders() {
           for (let i = 0; i < this.orders.length; i++) {
             //2000-12-11 19:00:00
             let date = this.orders[i].generated_date;
             let splitDate = date.split("-")
             let formatDate = splitDate[0] + '-' + splitDate[1] + '-' + splitDate[2][0] +splitDate[2][1];
             this.orders[i].generated_date = formatDate;
           }
         },
         formatDatePayments() {
           for (let i = 0; i < this.payments.length; i++) {
             //2000-12-11 19:00:00
             let date = this.payments[i].generated_date;
             let splitDate = date.split("-")
             let formatDate = splitDate[0] + '-' + splitDate[1] + '-' + splitDate[2][0] +splitDate[2][1];
             this.payments[i].generated_date = formatDate;
           }
         },
         formatDateCustomerAccount(){
           let date = this.clientAc.firstDate;
           let splitDate = date.split("-")
           let formatDate = splitDate[0] + '-' + splitDate[1] + '-' + splitDate[2][0] +splitDate[2][1];
           this.lastDateMovement =  "Ultimo Movimiento: " + formatDate;
         }
       }
   }
</script>

<style scoped>
    .register_body{
        height: 100vh;
        width:  100vw;
    }
    .body_slam{
        padding: 1rem;
        border-radius: 25px;
    }
    .bn{
        color: #ffce00;
    }
    .aaaa{
        background-color: white;
        border-radius: 10px;
        border: #ffce00 solid ;
    }
    .left{
        float: left;
        padding-top: 10px;
        padding-bottom: 10px;

    }
    .right{
        padding-right: 5vw;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    label{
        color: #ff775c;
    }
    input{
        border: #28201e solid;
        width: 10rem;
    }
    input::-webkit-outer-spin-button, input::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }
    #pay{
        z-index:99999;
    }

    .register_body{
      height: 100vh;
      width:  100vw;
    }
    .left{
      float: left;
      padding-top: 10px;
      padding-bottom: 10px;

    }
    .right{
      padding-right: 5vw;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .vl{
      border-left: 1px solid #ff775c;
      opacity: 0.90;
      height: auto;
    }
    select{
      color: #ff775c;

    }
    hr{
      background-color: #ffce00;
      opacity: 0.90;
      height: auto;
    }
    .title{
      color: #a6a8aa;
    }
    .Title{
      color: #28201e;
      text-align: center;
      padding-top: 40px;
    }
    .subt{
      color: #a6a8aa;
    }
    .linea {
      display: inline-block;
    }
    .cliente{
      height: 10Vh;
    }
    .gain{
      color: #ff775c;
      border: #a6a8aa solid;
      width: 10rem;
    }
    .colorbtn{
      color:#28201e;
    }
    .customer-input{
      background: #28201e;
    }
    .output{
      border-radius: 12px;
      text-align: center;
      color: #28201e;
      background: #a6a8aa;
    }
</style>
