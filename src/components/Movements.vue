<template>
    <v-card>
        <div class="container no-gutters ass">
            <h1>Movimientos</h1>
            <div class="row justify-content-center align-items-center register_body">
                <div class=" col-auto ">
                    <div style="align-items: center">
                        <form class="text-info left right">
                            <div class="left right">
                                <label for="client">Cliente</label>
                                <div class="paddin"></div>
                                <select id="client" type="number" name="client">
                                    <option value="1">140301</option>
                                </select>
                            </div>
                            <div class="left right">
                                <label for="r_consult">Cliente</label>
                                <div class="paddin"></div>
                                <select id="r_consult" type="text" name="consult">
                                    <option value="1">Prueba</option>
                                </select>
                            </div>
                            <div class="left right">
                                <label for="debt">Deuda</label>
                                <div class="paddin"></div>
                                <input id="debt" type="number" name="debt" placeholder="25000"/>
                            </div>
                            <div class="left right">
                                <label for="disp">Disponible</label>
                                <div class="paddin"></div>
                                <input id="disp" type="number" name="disp" placeholder="250000"/>
                            </div>
                        </form>
                    </div>
                    <div class="bg-primary body_slam left">
                        <div class="text-info">
                            <h1>Leyva Calle</h1>
                            <small>Juan Alonso</small>
                        </div>
                        <div style="padding-top: 2rem" class="text-secondary">
                            <div>
                                <small>Tasa: 25%</small>
                            </div>
                            <div>
                                <small>Tipo Interés: Nominal</small>
                            </div>
                            <div>
                                <small>Periodo: Bimestral</small>
                            </div>
                            <div>
                                <small>Capitalización: Diario</small>
                            </div>
                            <div>
                                <small>Registro: 7/11/20</small>
                            </div>
                            <div>
                                <div style="padding-top: 2rem"></div>
                                <div>
                                    <label for="pay">Pagar</label>
                                </div>
                                <input id="pay" type="number" step="0.1" class="aaaa"/>
                                <input type="submit" value="Aceptar" style="padding-left: 1rem" class="bn">
                            </div>
                        </div>
                    </div>
                    <div style="padding-left: 4rem" class="left">
                        <b-table striped hover :items="items" :fields="fields" ></b-table>
                    </div>
                    <div>
                        <div style="padding-top: 30rem"></div>
                        <div>
                            <label for="gain">Ganancia</label>
                        </div>
                        <input id="gain" type="number" step="0.1" class="gain"/>
                        <b-btn>Imprimir Boletas</b-btn>
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
                name: "Movements",
                fields: ['tipo', 'fecha', 'código', 'total'],
                items: [
                    { isActive: true, código: 1234, fecha: '10/03/20', tipo: 'Compra', total: 250.000 },

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
    .body_slam{
        padding: 1rem;
        border-radius: 25px;
    }
    .bn{
        color: #ffce00;
    }
    .aaaa{
        background-color: white;
        border-radius: 10px;
        border: #ffce00 solid ;
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
    label{
        color: #ff775c;
    }
    input{
        border: #28201e solid;
        width: 10rem;
    }
input::-webkit-outer-spin-button, input::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
}
#pay{
    z-index:99999;
}
</style>
