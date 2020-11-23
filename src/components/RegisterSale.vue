<template>
    <v-card>
        <div class="container no-gutters ass">
            <h1>Registrar Venta</h1>
            <div class="row justify-content-center align-items-center register_body">
                <div class=" col-auto">
                    <div class="help">
                    <div class="row col-13">
                        <form>
                            <div class="left right">
                                <label for="dni">DNI</label>
                                <input v-model="dni" id="dni" type="number" step="0.1" class="aaaa"/>
                            </div>
                            <div class="row justify-content-center col-2">
                              <div class="col-auto">
                                <b-btn @click="getCustomerByDni()">Buscar</b-btn>
                              </div>
                            </div>
                            <div class="left right">
                                <label>Nombre y Apellido</label>
                                <div class="paddin"></div>
                                <input v-model="nombreCompleto" style=" width: 125%"/>
                            </div>
                            <div class="left right">
                                <label>Deuda</label>
                                <div class="paddin"></div>
                                <input v-model="deuda"/>
                            </div>
                          <div class="left right">
                            <label>Disponible</label>
                            <div class="paddin"></div>
                            <input v-model="disponible"/>
                          </div>
                        </form>
                    </div>
                    <div class="row col-13">
                        <b-form>
                            <div class="left right">
                                <label>Producto</label>
                                <div class="paddin"></div>
                               <b-form-group>
                                  <b-form-select v-model="pN" id="product" type="text" name="product" class="c_select" :options="productsName">
                                  </b-form-select>
                               </b-form-group>
                            </div>
                            <div class="left right">
                                <label>Cantidad</label>
                                <div class="paddin"></div>
                                <input v-model="cantidad"  step="0.1" class="aaaa"/>
                            </div>
                            <div style="padding-top: 2.4rem" class="left right">
                                <b-btn @click="AnanirCarrito()">Añadir</b-btn>
                            </div>
                            <div class="left right">
                                <label>Delivery</label>
                                <div class="paddin"></div>
                                <b-form-group>
                                    <b-form-select v-model="dN" id="del" type="text" name="delivery" class="c_select" :options="deliveriesName">
                                    </b-form-select>
                                </b-form-group>
                                <div class="row justify-content-center col-2">
                                  <div class="col-auto">
                                    <b-btn @click="AsignarDelivery()">Aceptar</b-btn>
                                  </div>
                                </div>
                            </div>
                            <div class="left right">
                                <label>Fecha</label>
                                <input v-model="generated_date" id="genereted_date" type="text" step="0.1" class="aaaa"/>
                            </div>
                        </b-form>
                    </div>
                      <hr class="hr1">
                    <div class=" col-12">
                        <div class = "title" style="text-align: center">
                          <h1 style="color: #a6a8aa">Productos Seleccionados</h1>
                        </div>
                        <div style="color: #ff775c" class="row justify-content-center">
                          <div class="row justify-content-center col-3">
                            <div class="col-auto">
                              <p>Código</p>
                            </div>
                          </div>
                          <div class="row justify-content-center col-3">
                            <div class="col-auto">
                              <p>Producto</p>
                            </div>
                          </div>
                          <div class="row justify-content-center col-2">
                            <div class="col-auto">
                              <p>Cantidad</p>
                            </div>
                          </div>
                          <div class="row justify-content-center col-2">
                            <div class="col-auto">
                              <p>Precio Unitario</p>
                            </div>
                          </div>
                          <div class="row justify-content-center col-2">
                            <div class="col-auto">
                              <p>Importe</p>
                            </div>
                          </div>
                        </div>
                        <li v-for="(c, index) in cart" :key="index" class="table2">
                            <div class="row justify-content-center col-12">
                                <div class="row justify-content-center col-3">
                                    <div class="col-auto">
                                        <p>{{c.id}}</p>
                                    </div>
                                </div>
                                <div class="vl"></div>
                                <div class="row justify-content-center col-3">
                                    <div class="col-auto">
                                        <p>{{c.producto}}</p>
                                    </div>
                                </div>
                                <div class="vl"></div>
                                <div class="row justify-content-center col-2">
                                    <div class="col-auto">
                                        <p>{{c.cantidad}}</p>
                                    </div>
                                </div>
                                <div class="vl"></div>
                                <div class="row justify-content-center col-2">
                                    <div class="col-auto">
                                        <p>{{c.precioUnitario}}</p>
                                    </div>
                                </div>
                                <div class="vl"></div>
                                <div class="row justify-content-center col-2">
                                    <div class="col-auto">
                                        <p>{{c.importe}}</p>
                                    </div>
                                </div>
                            </div>
                            <hr>
                        </li>
                    </div>
                    <div class=" col-12">
                        <li v-for="(sale, index) in sales" :key="index" class="table">
                            <div class="row justify-content-center col-12">
                                <div class="row justify-content-center col-3">
                                    <div class="col-auto">
                                        <p>{{sale.codigo}}</p>
                                    </div>
                                </div>
                                <div class="vl"></div>
                                <div class="row justify-content-center col-3">
                                    <div class="col-auto">
                                        <p>{{sale.producto}}</p>
                                    </div>
                                </div>
                                <div class="vl"></div>
                                <div class="row justify-content-center col-2">
                                    <div class="col-auto">
                                        <p>{{sale.cantidad}}</p>
                                    </div>
                                </div>
                                <div class="vl"></div>
                                <div class="row justify-content-center col-2">
                                    <div class="col-auto">
                                        <p>{{sale.precio_unitario}}</p>
                                    </div>
                                </div>
                                <div class="vl"></div>
                                <div class="row justify-content-center col-2">
                                    <div class="col-auto">
                                        <p>{{sale.importe}}</p>
                                    </div>
                                </div>
                            </div>
                            <hr>
                        </li>
                    </div>
                    <div style="text-align: right ">
                        <div>
                        <p>Delivery: {{this.precioDelivery}}</p>
                        </div>
                        <div>
                        <p>Total: {{this.importe}}</p>
                        </div>
                    </div>
                    <div>
                        <div class="text-right butt">
                            <b-btn @click="postOrder()">Registrar Venta</b-btn>
                            <b-btn class="bg-danger">Canelar</b-btn>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </v-card>
</template>

<script>
    import { baseURL } from '@/baseURL';
    export default  {
        name: "RegisterSale",
        data: ()=> {
            return{
                customer : null,
                clientAc : [],
                sales: [],
                nombreCompleto : null,
                deuda : null,
                disponible : null,
                products: [],
                productsName: [],
                deliveries: [],
                deliveriesName: [],
                dni : null,
                cantidad : null,
                generated_date : null,
                payment : null,
                cart : [],
                item : null,
                pN : null,
                dN: null,
                precioDelivery : null,
                importe : null
            }
        },
        mounted() {
            console.log()
            this.axios.get(baseURL + 'products')
                .then(response =>{
                    this.products = response.data.content;
                    this.AsignarNombreProd();
                    console.log(response);
                });
            this.axios.get(baseURL + 'deliveries')
                .then(response =>{
                    this.deliveries = response.data.content;
                    console.log(this.deliveries)
                    this.AsignarNombreDelivery();
                    console.log(response);
                });
        },
        methods:{
            getCustomerByDni() {
              this.axios.get(baseURL + 'users/1/customersDni/' + this.dni)
                  .then(responseCustomer => {
                    this.customer = responseCustomer.data;
                    this.nombreCompleto =  this.customer.customerName + ' '+ this.customer.customerLastname;
                    console.log(responseCustomer);
                    this.axios.get(baseURL + 'customers/' + responseCustomer.data.id + '/customerAccounts').then(responseCustomerAcoutn => {
                      this.clientAc = responseCustomerAcoutn.data;
                      this.deuda = this.clientAc.currentBalance.toFixed(2);
                      this.disponible = this.clientAc.availableBalance.toFixed(2);
                      console.log(responseCustomerAcoutn);
                      this.axios.get(baseURL + 'customerAccounts/' + responseCustomerAcoutn.data.id + '/payments')
                          .then(response => {
                            this.payments = response.data.content;
                            console.log(response);
                          })
                    });
                    this.axios.get(baseURL + 'customers/' + responseCustomer.data.id + '/orders')
                        .then(response => {
                          this.orders = response.data.content;
                          console.log(response);
                        });
                  });
            },
            postOrder(){
                //Cambiar customers 1 por id
                for (let i = 0; i < this.cart.length; i++) {
                    this.importe = this.importe + this.cart[i].importe;
                }
                console.log(this.importe + this.precioDelivery);
                  this.axios.post(baseURL + 'customers/'+ this.customer.id + '/orders',{
                      generated_date : this.generated_date,
                      payment: parseFloat(this.importe + this.precioDelivery)
                })
            },
            AsignarNombreProd(){
                for (let i = 0; i < this.products.length; i++){
                  this.products[i].text = this.products[i].productName;
                  this.products[i].value = this.products[i].id;
                  this.productsName.push(this.products[i]);
                }
            },
            AsignarNombreDelivery(){
                for (let i = 0; i < this.deliveries.length; i++){
                  this.deliveriesName.push(this.deliveries[i].typeDelivery);
                }
            },
            AnanirCarrito(){
                this.item = [];
                this.item.cantidad = this.cantidad;
                console.log(this.pN);
                for (let i = 0; i < this.products.length; i++) {
                  if(this.pN === this.products[i].id){
                    this.item.id = this.products[i].id;
                    this.item.producto = this.products[i].productName;
                    this.item.precioUnitario = this.products[i].salePrice;
                    this.item.importe = this.item.precioUnitario * this.item.cantidad;
                  }
                }
                this.cart.push(this.item);
            },
            AsignarDelivery(){
              if(this.dN === "Express"){
                this.precioDelivery = 15.00
              }
              if(this.dN === "Regular"){
                this.precioDelivery = 12.00
              }
              if(this.dN === "Economic"){
                this.precioDelivery = 9.5
              }
              console.log(this.precioDelivery);
            }

        }
    }
</script>

<style scoped lang="scss">
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
    .help{
        background-color: #28201e;
        padding: 2rem;
        border-radius: 15px;
        color: #ffce00;
    }
    .c_select{
        color: #ff775c;
        font-size: 0.85rem;
        height: 100%;
        width: 100%;
    }
    .table{
        list-style: none;
        display: inline;
        height: 70vh;
        width: 70vw;
        p{
            color: #ff775c;
        }
    }
    .table2{
        list-style: none;
        display: inline;
        height: 70vh;
        width: 70vw;
        p{
            color: #ffce00;
        }
    }
    .vl{
        border-left: 1px solid #ff775c;
        opacity: 0.90;
        height: auto;
    }
    .butt{
        color: #28201e;
    }
    .inputtext{
        width: 100%;
        height: 30px;
        border: #a6a8aa solid thin;
        border-radius: 10px;
        color: #ff775c;
        padding-left: 0.75rem;
        background-color: white;
    }
    .inputnumb{
        width: 50%;
        height: 30px;
        border: #a6a8aa solid thin;
        border-radius: 10px;
        color: #ff775c;
        padding-left: 0.75rem;
        background-color: white;
    }
    input{
      width: 100%;
      height: 30px;
      border: #a6a8aa solid thin;
      border-radius: 10px;
      color: #ff775c;
      padding-left: 0.75rem;
      background-color: white;
    }
    .hr1{
      background-color: #ffce00;
      opacity: 0.90;
      height: auto;
    }
    hr{
      background-color: #ff775c;
      opacity: 0.90;
      height: auto;
    }
</style>
