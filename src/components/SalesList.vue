<template>
    <v-card>
        <div class="container no-gutters ass">
            <div>
            <h1>Lista de Cliente</h1>
            </div>
            <div class="row justify-content-center align-items-center register_body">
                <div class=" col-auto ">
                    <div class="bg-primary">
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
                    <div>
                        <b-table striped hover :items="items" :fields="fields" class="bg-danger" ></b-table>
                    </div>
                    <div class="text-right">
                        <b-btn>Imprimir reporte</b-btn>
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
                name: "SalesList",
                fields: ['codigo', 'producto', 'cantidad', 'precio_unitario', 'importe'],
                items: [
                    { isActive: true, codigo: 'SW1A', producto: 'Chocolate Moto Moto', cantidad: 2, precio_unitario: 25.00, importe: 12.00 },
                ]
            }
        }
    }

</script>

<style scoped>
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
</style>
