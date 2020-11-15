<template>
    <v-card>
        <div class="container no-gutters ass">
            <div>
                <h1>Lista de Cliente</h1>
            </div>
            <div style="padding-right: 150px" class="row justify-content-center align-items-center register_body">
                <div style="border-radius: 15px"  class="col-9 text-info bg-primary row justify-content-center">
                    <div class="col-12">
                        <form>
                            <div class="left right">
                                <label for="client">DNI</label>
                                <div class="paddin"></div>
                                <select id="client" name="states[]" >
                                    <option value="1">140301</option>
                                    <option value="2">210593</option>
                                </select>
                            </div>
                            <div class="left right">
                                <b-btn>Buscar</b-btn>
                            </div>
                        </form>
                    </div>
                    <div style="padding: 3rem"></div>

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
                        <li v-for="(client, index) in items" :key="index" class="table">
                            <div class="row justify-content-center">
                            <div class="row justify-content-center col-3">
                                <div class="col-auto">
                                    <p>{{client.DNI}}</p>
                                </div>
                            </div>
                                <div class="vl"></div>
                            <div class="row justify-content-center col-3">
                                <div class="col-auto">
                                    <p>{{client.nombre}}</p>
                                </div>
                            </div>
                                <div class="vl"></div>
                            <div class="row justify-content-center col-3">
                                <div class="col-auto">
                                    <p>{{client.apellido}}</p>
                                </div>
                            </div>
                                <div class="vl"></div>
                            <div class="row justify-content-center col-3">
                                <div class="col-auto">
                                    <b-btn>Eliminar</b-btn>
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
    export default {
        data() {
            return {
                // Note `isActive` is left out and will not appear in the rendered table
                name: "ClientList",
                fields: ['DNI', 'nombre', 'apellido'],
                items: [
                    { isActive: true, DNI: 140301, nombre: 'Juan', apellido: 'Leyva' },
                    { isActive: true, DNI: 210593, nombre: 'Mafer', apellido: 'Calle' },
                ]
            }
        },
        methods:{
            DNI_filter(name, l_name){
                let fulllname = name + ' ' + l_name;
                alert(fulllname)
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

</style>
