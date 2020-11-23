<template>
    <v-card>
        <div class="container no-gutters ass">
            <h1>Editar Cliente</h1>
            <div class="row justify-content-center align-items-center register_body">
                <div class="col-auto">
                    <div class="bg-primary register_form">
                        <form>
                            <div class="left right">
                                <label for="dni">DNI</label>
                                <div class="paddin"></div>
                                <input v-model="dni" id="dni" type="text" placeholder="140301"/>
                            </div>
                            <div class="left right">
                                <label for="name">Nombre</label>
                                <div class="paddin"></div>
                                <input v-model="customerName" id="name" type="text" placeholder="Juan" />
                            </div>
                            <div class="left right">
                                <label for="code">Apellido</label>
                                <div class="paddin"></div>
                                <input v-model="customerLastname" id="code" type="text" placeholder="Leyva"/>
                            </div>
                            <div></div>
                            <div class="left right">
                                <label for="address">Dirección</label>
                                <div class="paddin"></div>
                                <input v-model="address" id="address" type="text" placeholder="Av. Aviación 2675"/>
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
                                <input v-model="email" id="email" type="email" placeholder="Empe@gmail.com"/>
                            </div>
                            <div style="padding-top: 3rem"></div>
                            <div class="text-right">
                                <b-btn @click="updateClient()" class="btt">Actualizar</b-btn>
                            </div>
                        </form>
                    </div>
                    <div style="padding-bottom: 3rem"></div>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script>
    import { baseURL } from '@/baseURL';
    export default  {
        name: "EditClient",
        data: ()=> {
            return{
                clients: [],
                dni : null,
                customerName : null,
                customerLastname : null,
                address : null,
                district : null,
                country : null,
                email : null,

            }
        },
        mounted() {
            console.log()
            this.axios.get(baseURL + 'users/1/customers/' + this.$store.getters.getClientid)
                .then(response =>{
                    this.clients = response.data;
                    console.log(this.clients);
                    this.dni = this.clients.dni;
                    this.customerName = this.clients.customerName;
                    this.customerLastname = this.clients.customerLastname;
                    this.address = this.clients.address;
                    this.district = this.clients.district;
                    this.country = this.clients.country;
                    this.email = this.clients.email;
                })
        },
        methods: {
            updateClient() {
                this.axios.put(baseURL + 'users/1/customers/'+ this.$store.getters.getClientid, {
                    dni : parseFloat(this.dni),
                    customerName : this.customerName,
                    customerLastname : this.customerLastname,
                    address : this.address,
                    district : this.district,
                    country : this.country,
                    email : this.email
                }).then(response => {
                    console.log(response)
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
