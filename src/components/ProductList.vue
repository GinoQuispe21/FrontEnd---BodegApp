<template>
    <v-card>
        <div class="container no-gutters ass">
            <div style="padding-right: 150px" class="row justify-content-center align-items-center register_body">
                <div style="border-radius: 15px"  class="col-8 text-info bg-primary row justify-content-center">

                    <div class="col-12">
                        <div class = "title" style="text-align: center">
                          <h1>Lista de Productos</h1>
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
                        <li v-for="(product, index) in products" :key="index" class="table">
                            <div class="row justify-content-center">
                                <div class="row justify-content-center col-3">
                                    <div class="col-auto">
                                        <p>{{product.id}}</p>
                                    </div>
                                </div>
                                <div class="vl"></div>
                                <div class="row justify-content-center col-3">
                                    <div class="col-auto">
                                        <p>{{product.productName}}</p>
                                    </div>
                                </div>
                                <div class="vl"></div>
                                <div class="row justify-content-center col-2">
                                    <div class="col-auto">
                                        <p>{{product.purchasePrice}}</p>
                                    </div>
                                </div>
                                <div class="vl"></div>
                                <div class="row justify-content-center col-2">
                                    <div class="col-auto">
                                        <p>{{product.salePrice}}</p>
                                    </div>
                                </div>
                                <div class="vl"></div>
                                <div class="row justify-content-center col-2">
                                    <div class="col-auto">
                                        <div style="padding-bottom: 0.5rem">
                                        <b-btn @click="editProduct(product.id)">Editar</b-btn>
                                        </div>
                                        <b-btn @click="deleteProduct(product.id)">Eliminar</b-btn>
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
        name: "ProductList",
        data: ()=> {
            return{
                products: []
            }
        },
        mounted() {
            console.log()
            this.axios.get(baseURL + 'products')
                .then(response =>{
                    this.products = response.data.content;
                    console.log(response);
                })
        },
        methods:{
            deleteProduct(productid){
              this.axios.delete(baseURL + 'products/' + productid).then(response =>{
                console.log(response)})
            },
            editProduct(productid){
                this.$store.commit('setProductid', productid )
                console.log(this.$store.getters.getProductid)
                alert("Producto " + productid + " listo para editar, seleccione Editar producto para proseguir")
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
    .title{
      color: #a6a8aa;
    }
</style>
