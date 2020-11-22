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
                            <div class="left right">
                                <label for="name">Nombre y Apellido</label>
                                <div class="paddin"></div>
                                <input class = "inputtext" id="name" type="text" disabled placeholder="Juan Alonso Leyva Calle"/>
                            </div>
                            <div class="left right">
                                <label for="debt">Deuda</label>
                                <div class="paddin"></div>
                                <input class = "inputnumb" id="debt" type="number" disabled placeholder="25000"/>
                            </div>
                          <div class="left right">
                            <label for="debt">Deuda</label>
                            <div class="paddin"></div>
                            <input class = "inputnumb" id="debt" type="number" disabled placeholder="25000"/>
                          </div>
                        </form>
                    </div>
                    <div class="row col-13">
                        <form>
                            <div class="left right">
                                <label for="product">Producto</label>
                                <div class="paddin"></div>
                                <select id="product" type="text" name="product" class="c_select">
                                    <option value="1">Chocolate Tana</option>
                                    <option value="2">Chocolate Moto Moto</option>
                                </select>
                            </div>
                            <div class="left right">
                                <label for="stock">Cantidad</label>
                                <div class="paddin"></div>
                                <input id="stock" type="number" onkeydown="return false"/>
                            </div>
                            <div style="padding-top: 2.4rem" class="left right">
                                <b-btn>Añadir</b-btn>
                            </div>
                            <div class="left right">
                                <label for="del">Delivery</label>
                                <div class="paddin"></div>
                                <select id="del" type="text" name="delivery" class="c_select">
                                    <option value="1">Sí</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                            <div class="left right">
                                <label>Fecha</label>
                                <input v-model="generated_date" id="genereted_date" type="text" step="0.1" class="aaaa"/>
                            </div>
                        </form>
                    </div>
                    <div class=" col-12">
                        <li v-for="(sale, index) in labels" :key="index" class="table2">
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
                                        <p>{{sale.precio_unitario}}</p>
                                    </div>
                                </div>
                                <div class="vl"></div>
                                <div class="row justify-content-center col-2">
                                    <div class="col-auto">
                                        <p>{{sale.importe}}</p>
                                    </div>
                                </div>
                                <div class="vl"></div>
                                <div class="row justify-content-center col-2">
                                    <div class="col-auto">
                                        <p>{{sale.codigo}}</p>
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
                        <small>Delivery:</small>
                        </div>
                        <div>
                        <small>Total: </small>
                        </div>
                    </div>
                    <div class="left right">
                        <label>Monto de venta</label>
                        <input v-model="payment" id="payment" type="number" step="0.1" class="aaaa"/>
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
                sales: [],
                products: [],
                deliveries: [],
                dni : null,
                generated_date : null,
                payment : null,
            }
        },
        mounted() {
            console.log()
            this.axios.get(baseURL + 'products')
                .then(response =>{
                    this.products = response.data.content;
                    console.log(response);
                });
            this.axios.get(baseURL + 'deliveries')
                .then(response =>{
                    this.deliveries = response.data.content;
                    console.log(response);
                });
            //Get By Dni
            this.axios.get(baseURL + 'users/1/customersDni/'+this.dni)
                .then(response => {
                    this.customer = response.data.content;
                    console.log(response);
                })
        },
        methods:{
            postOrder(){
                //Cambiar customers 1 por id
                this.axios.post(baseURL + 'customers/1/orders',{
                    generated_date : this.generated_date,
                    payment: parseFloat(this.payment)
              })
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
</style>
