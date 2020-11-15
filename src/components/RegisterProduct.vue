<template>
    <v-card>
        <div class="container no-gutters ass">
            <h1>Registrar Producto</h1>
            <div class="row justify-content-center align-items-center register_body">
                <div class="col-auto">
                    <div class="bg-primary register_form">
                        <form>
                        <div class="left right">
                            <label for="name">Nombre de producto</label>
                            <div class="paddin"></div>
                            <input id="name" type="text"  />
                        </div>
                        <div class="left right">
                            <label for="code">Código</label>
                            <div class="paddin"></div>
                            <input id="code" type="text" disabled placeholder="P00001"/>
                        </div>
                            <div></div>
                            <div class="left right">
                                <label for="provee">Proveedor</label>
                                <div class="paddin"></div>
                                <input id="provee" type="text"/>
                            </div>
                            <div class="left right">
                                <label for="v_date">Fecha de Vigencia</label>
                                <div></div>
                                <input id="v_date" type="date" name="b_date"/>
                            </div>
                            <div></div>
                            <div class="left right">
                                <label for="pc">Precio Compra</label>
                                <div class="paddin"></div>
                                <input id="pc" type="number"  />
                            </div>
                            <div class="left right">
                                <label for="pv">Precio Venta</label>
                                <div class="paddin"></div>
                                <input id="pv" type="number"  />
                            </div>
                            <div style="padding-top: 3rem"></div>
                            <div class="text-right">
                                <b-btn class="btt">Registrar</b-btn>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: "RegisterProduct"
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
