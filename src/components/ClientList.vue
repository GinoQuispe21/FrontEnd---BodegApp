<template>
    <v-card>
        <div class="container no-gutters ass">
            <div style="padding-right: 150px" class="row justify-content-center align-items-center register_body">
                <div style="border-radius: 15px"  class="col-9 text-info bg-primary row justify-content-center">
                    <div class="col-12">
                    </div>
                    <div class = "title">
                      <h1>Lista de Cliente</h1>
                    </div>
                    <div class="col-12">
                        <div class="row justify-content-center">
                            <div class="row justify-content-center col-3">
                                <div class="col-auto">
                                <p>DNI</p>
                                </div>
                            </div>
                            <div class="vl"></div>
                            <div class="row justify-content-center col-3">
                                <div class="col-auto">
                                    <p>Nombre</p>
                                </div>
                            </div>
                            <div class="vl"></div>
                            <div class="row justify-content-center col-3">
                                <div class="col-auto">
                                    <p>Apellido</p>
                                </div>
                            </div>
                            <div class="vl"></div>
                            <div class="row justify-content-center col-3">
                                <div class="col-auto">
                                    <p>Acciones</p>
                                </div>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="col-12">
                        <li v-for="(client, index) in clients" :key="index" class="table">
                            <div class="row justify-content-center">
                            <div class="row justify-content-center col-3">
                                <div class="col-auto">
                                    <p>{{client.dni}}</p>
                                </div>
                            </div>
                                <div class="vl"></div>
                            <div class="row justify-content-center col-3">
                                <div class="col-auto">
                                    <p>{{client.customerName}}</p>
                                </div>
                            </div>
                                <div class="vl"></div>
                            <div class="row justify-content-center col-3">
                                <div class="col-auto">
                                    <p>{{client.customerLastname}}</p>
                                </div>
                            </div>
                                <div class="vl"></div>
                            <div class="row justify-content-center col-3">
                                <div class="col-auto">
                                    <div style="padding-bottom: 0.5rem">
                                        <b-btn @click="editClient(client.id)">Editar</b-btn>
                                    </div>
                                    <b-btn @click="deleteClient(client)">Eliminar</b-btn>
                                </div>
                            </div>
                            </div>
                            <hr>
                        </li>
                    </div>
                    <div>
                        <div class="row ">
                            <div class="col-12">
                                <b-btn>Imprimir reporte</b-btn>
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
        name: "ClientList",
        data: ()=> {
            return{
                clients: [],
                client: null
            }
        },
        mounted() {
            console.log()
            this.axios.get(baseURL + 'users/1/customersActives')
                .then(response =>{
                    this.clients = response.data.content;
                    console.log(response);
                })
        },
        methods:{
            deleteClient(client){
                this.client = client;
                client.state = 1;
                this.axios.put(baseURL + 'users/1/customers/' + client.id, client).then(response =>{
                    console.log(response)})
            },
            editClient(clientid){
                this.$store.commit('setClientid', clientid )
                console.log(this.$store.getters.getClientid)
                alert("Cliente " + clientid + " listo para editar, seleccione Editar Cliente para proseguir")
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
    .table{
        list-style: none;
        display: inline;
        height: 70vh;
        width: 70vw;
        p{
            color: #ff775c;
        }
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

</style>
