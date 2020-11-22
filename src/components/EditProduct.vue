<template>
    <v-card>
        <div class="container no-gutters ass">
            <h1>Editar Producto</h1>
            <div class="row justify-content-center align-items-center register_body">
                <div class="col-auto">
                    <div class="bg-primary register_form">
                        <form>
                            <div class="left right">
                                <label for="name">Nombre de producto</label>
                                <div class="paddin"></div>
                                <input v-model="productName" id="name" type="text"  />
                            </div>
                            <div></div>
                            <div class="left right">
                                <label for="provee">Proveedor</label>
                                <div class="paddin"></div>
                                <input v-model="providerName" id="provee" type="text" />
                            </div>

                            <div></div>
                            <div class="left right">
                                <label for="pc">Precio Compra</label>
                                <div class="paddin"></div>
                                <input v-model="purchasePrice" id="pc" type="number"  />
                            </div>
                            <div class="left right">
                                <label for="pv">Precio Venta</label>
                                <div class="paddin"></div>
                                <input v-model="salePrice" id="pv" type="number"  />
                            </div>
                            <div style="padding-top: 3rem"></div>
                            <div class="text-right">
                                <b-btn @click="updateProduct" class="btt">Actualizar</b-btn>
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
    export default  {
        name: "EditProduct",
        data(){
            return{
                product: [],
                productName : null,
                providerName : null,
                purchasePrice : null,
                salePrice : null,

            }
        },
        mounted() {
            console.log()
            this.axios.get(baseURL + 'products/' + this.$store.getters.getProductid)
                .then(response =>{
                    this.product = response.data;
                    console.log(this.product);
                    this.productName = this.product.productName;
                    this.providerName = this.product.providerName;
                    this.purchasePrice = this.product.purchasePrice;
                    this.salePrice = this.product.salePrice;
                })
        },
        methods: {
            updateProduct() {
                this.axios.put(baseURL + 'products/' + this.$store.getters.getProductid, {
                    productName: this.productName,
                    providerName: this.providerName,
                    purchasePrice: this.purchasePrice,
                    salePrice: this.salePrice,
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
    .register_form{
        padding: 3rem;
        border-radius: 15px;
        color: #ffce00;
        .btt{
            color: #28201e;
        }
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
