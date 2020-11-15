<template>
    <v-card>
        <div class="container no-gutters ass">
            <div>
                <h1>Lista de Productos</h1>
            </div>
            <div style="padding-right: 150px" class="row justify-content-center align-items-center register_body">
                <div style="border-radius: 15px"  class="col-8 text-info bg-primary row justify-content-center">
                    <div class="col-12">
                        <form>
                            <div class="left right">
                                <label for="product">Buscar Producto</label>
                                <div class="paddin"></div>
                                <input id="product" type="text" name="b_product" placeholder="N.producto"/>
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
                                    <p>Código</p>
                                </div>
                            </div>
                            <div class="vl"></div>
                            <div class="row justify-content-center col-3">
                                <div class="col-auto">
                                    <p>Nombre</p>
                                </div>
                            </div>
                            <div class="vl"></div>
                            <div class="row justify-content-center col-2">
                                <div class="col-auto">
                                    <p>Pre. de Compra</p>
                                </div>
                            </div>
                            <div class="vl"></div>
                            <div class="row justify-content-center col-2">
                                <div class="col-auto">
                                    <p>Pre. de Venta</p>
                                </div>
                            </div>
                            <div class="vl"></div>
                            <div class="row justify-content-center col-2">
                                <div class="col-auto">
                                    <p>Acciones</p>
                                </div>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="col-12">
                        <li v-for="(product, index) in items" :key="index" class="table">
                            <div class="row justify-content-center">
                                <div class="row justify-content-center col-3">
                                    <div class="col-auto">
                                        <p>{{product.codigo}}</p>
                                    </div>
                                </div>
                                <div class="vl"></div>
                                <div class="row justify-content-center col-3">
                                    <div class="col-auto">
                                        <p>{{product.nombre}}</p>
                                    </div>
                                </div>
                                <div class="vl"></div>
                                <div class="row justify-content-center col-2">
                                    <div class="col-auto">
                                        <p>{{product.p_compra}}</p>
                                    </div>
                                </div>
                                <div class="vl"></div>
                                <div class="row justify-content-center col-2">
                                    <div class="col-auto">
                                        <p>{{product.p_venta}}</p>
                                    </div>
                                </div>
                                <div class="vl"></div>
                                <div class="row justify-content-center col-2">
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
                name: "ProductList",
                fields: ['codigo', 'nombre', 'p_compra', 'p_compra'],
                items: [
                    { isActive: true, codigo: 'CO0001', nombre: 'Chocolate Moto Moto', p_compra: 25.00, p_venta: 22.00 },
                    { isActive: true, codigo: 'CO0003', nombre: 'Chocolate Tana', p_compra: 21.00, p_venta: 17.00 },
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
