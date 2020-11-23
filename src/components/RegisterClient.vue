<template>
    <v-card>
        <div class="container no-gutters ass">
            <h1>Registrar Cliente</h1>
            <div class="row justify-content-center align-items-center register_body">
                <div class="col-auto">
                    <div class="bg-primary register_form">
                        <form>
                            <div class="left right">
                                <label for="dni">DNI</label>
                                <div class="paddin"></div>
                                <input v-model="dni" id="dni" type="text"/>
                            </div>
                            <div class="left right">
                                <label for="name">Nombre</label>
                                <div class="paddin"></div>
                                <input v-model="customerName" id="name" type="text"  />
                            </div>
                            <div class="left right">
                                <label for="code">Apellido</label>
                                <div class="paddin"></div>
                                <input v-model="customerLastname" id="code" type="text" />
                            </div>
                            <div></div>
                            <div class="left right">
                                <label for="address">Dirección</label>
                                <div class="paddin"></div>
                                <input v-model="address" id="address" type="text"/>
                            </div>
                            <div class="left right">
                                <label for="name">Distrito</label>
                                <div class="paddin"></div>
                                <input v-model="district" id="district" type="text"/>
                            </div>
                            <div class="left right">
                                <label for="name">Pais</label>
                                <div class="paddin"></div>
                                <input v-model="country" id="country" type="text"/>
                            </div>
                            <div class="left right">
                                <label for="email">Correo electrónico</label>
                                <div class="paddin"></div>
                                <input v-model="email" id="email" type="email"  />
                            </div>
                            <div style="padding-top: 3rem"></div>
                            <div class="text-right">
                                <b-btn @click="postCustomer()" class="btt">Registrar</b-btn>
                            </div>
                        </form>
                    </div>
                    <div style="padding-bottom: 3rem"></div>
                    <div class="tasa">
                        <form>
                            <div class="bg-primary left right selection">
                            <input @click="Paquete1()" type="radio" id="1" name="gender" value="male">
                            <label for="1">
                                <h1>Paquete 1</h1>
                                <p><small> Tasa: 10%</small></p>
                                <p><small>Tipo de Interés: Simple</small></p>
                                <p><small>Periodo: Mensual</small></p>
                                <p><small>Crédito: S/.1000.00</small></p>
                                <p><small>Tipo año: Ordinal</small></p>
                            </label><br>
                            </div>
                            <div ></div>
                            <div class="bg-primary left right selection">
                            <input @click="Paquete2()" type="radio" id="2" name="gender" value="male">
                            <label for="2">
                                <h1>Paquete 2</h1>
                                <p><small>Tasa: 25%</small></p>
                                <p><small>Tipo de Interés: Nominal</small></p>
                                <p><small>Periodo: Bimestral</small></p>
                                <p><small>Capitalización: Diaria</small></p>
                                <p><small>Crédito: S/.1500.00</small></p>
                                <p><small>Tipo año: Ordinal</small></p>
                            </label><br>
                            </div>
                            <div class="bg-primary left right selection">
                            <input @click="Paquete3()" type="radio" id="3" name="gender" value="male">
                            <label for="3">
                                <h1>Paquete 3</h1>
                                <p><small>Tasa: 18%</small></p>
                                <p><small>Tipo de Interés: Efectiva</small></p>
                                <p><small>Periodo: Mensual</small></p>
                                <p><small>Crédito: S/.2000.00</small></p>
                                <p><small>Tipo año: Ordinal</small></p>
                            </label><br>
                            </div>
                          <div class="bg-primary left right selection">
                            <input @click="Paquete4()" type="radio" id="3" name="gender" value="male">
                            <label for="interesRate">
                              <h1>Personalizado</h1>
                              <div>
                                  <label class="left right3" for="name">Tasa</label>
                                  <div class="paddin"></div>
                                  <input class ="inputpers" v-model="interestRate" id="interesRate" type="text"/>
                              </div><br>
                              <div>
                                  <label class="left right3" for="name">Tipo de Interes</label>
                                  <div class="paddin"></div>
                                  <input class ="inputpers" v-model="interestRateType" id="interesRateType" type="text"/>
                              </div><br>
                              <div>
                                <label class="left right3" for="name">Periodo</label>
                                <div class="paddin"></div>
                                <input class ="inputpers" v-model="interestRatePeriod" id="interesRatePeriod" type="text"/>
                              </div><br>
                              <div>
                                <label class="left right3" for="name">Capitalizacion</label>
                                <div class="paddin"></div>
                                <input class ="inputpers" v-model="compounding" id="compouding" type="text"/>
                              </div><br>
                              <div>
                                <label class="left right3" for="name">Credito</label>
                                <div class="paddin"></div>
                                <input class ="inputpers" v-model="credit" id="credit" type="text"/>
                              </div><br>
                              <div>
                                <label class="left right3" for="name">Tipo Año</label>
                                <div class="paddin"></div>
                                <input class ="inputpers" v-model="typeYear" id="typeYear" type="text"/>
                              </div><br>
                            </label><br>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script>
    import { baseURL } from '@/baseURL';
    export default {
        name: "RegisterClient",
        data: ()=>{
            return {
                dni : null,
                customerName : null,
                customerLastname : null,
                address : null,
                district : null,
                country : null,
                email : null,

                //Datos para Customer Account
                credit : null,
                interestRate : null,
                interestRateType : null,
                interestRatePeriod : null,
                compounding : null,
                typeYear : null
            }
        },
        methods:{
          Paquete1(){
              this.credit = 1000.00;
              this.interestRate = 0.10;
              this.interestRateType = 1;
              this.interestRatePeriod = 1;
              this.compounding = 0;
              this.typeYear = 1;
          },
          Paquete2(){
             this.credit = 1500.00;
             this.interestRate = 0.25;
             this.interestRateType = 2;
             this.interestRatePeriod = 2;
             this.compounding = 1;
             this.typeYear = 1;
          } ,
          Paquete3(){
            this.credit = 2000.00;
            this.interestRate = 0.18;
            this.interestRateType = 3;
            this.interestRatePeriod = 1;
            this.compounding = 0;
            this.typeYear = 1;
          },
          postCustomer(){
            this.axios.post(baseURL + 'users/1/customers', {
              dni : parseFloat(this.dni),
              customerName : this.customerName,
              customerLastname : this.customerLastname,
              address : this.address,
              district : this.district,
              country : this.country,
              email : this.email
            })
            .then((responseUser) => {
              //Create Customer
              this.axios.post(baseURL + 'customers/' + responseUser.data.id + '/customerAccounts', {
                credit : this.credit,
                interestRate : this.interestRate,
                interestRateType : this.interestRateType,
                interestRatePeriod : this.interestRatePeriod,
                compounding : this.compounding,
                typeYear : this.typeYear
              })})
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
    .register_form {
        padding: 3rem;
        border-radius: 15px;
        color: #ffce00;
        .btt {
            color: #28201e;
        }
    }
    .right2{
        padding-right: 5vw;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .tasa{
        padding: 2rem;
        color: #ffce00;
        border-radius: 15px;
        p{
            color: #ff775c;
        }
    }
    .selection{
        border-radius: 25px;
        padding: 2rem;
    }
    .inputpers{
        width: 50%;
        height: 30px;
    }
    .right3{
      padding-right: 1vw;
      padding-top: 10px;
      padding-bottom: 10px;
      color: #ff775c;
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
    select{
        color: #ff775c;
    }
</style>
