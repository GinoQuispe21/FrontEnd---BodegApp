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
                                <input id="dni" type="text" placeholder="140301"/>
                            </div>
                            <div class="left right">
                                <label for="name">Nombre</label>
                                <div class="paddin"></div>
                                <input id="name" type="text" placeholder="Juan" />
                            </div>
                            <div class="left right">
                                <label for="code">Apellido</label>
                                <div class="paddin"></div>
                                <input id="code" type="text" placeholder="Leyva"/>
                            </div>
                            <div></div>
                            <div class="left right">
                                <label for="address">Dirección</label>
                                <div class="paddin"></div>
                                <input id="address" type="text" placeholder="Av. Aviación 2675"/>
                            </div>
                            <div class="left right">
                                <label for="district">Distrito</label>
                                <div></div>
                                <select name="distrcit" id="district" class="c_select">
                                    <option value="SB">San Borja</option>
                                    <option value="L_Ol">Los Olivos</option>
                                </select>
                            </div>
                            <div class="left right">
                                <label for="country">País</label>
                                <div></div>
                                <select name="country" id="country" class="c_select">
                                    <option value="p">Perú</option>
                                </select>
                            </div>
                            <div class="left right">
                                <label for="email">Correo electrónico</label>
                                <div class="paddin"></div>
                                <input id="email" type="email" placeholder="Empe@gmail.com"/>
                            </div>
                            <div style="padding-top: 3rem"></div>
                            <div class="text-right">
                                <b-btn class="btt">Actualizar</b-btn>
                            </div>
                        </form>
                    </div>
                    <div style="padding-bottom: 3rem"></div>
                    <div class="tasa">
                        <form>
                            <div class="bg-primary left right selection">
                                <input type="radio" id="1" name="gender" value="male">
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
                                <input type="radio" id="2" name="gender" value="male">
                                <label for="2">
                                    <h1>Paquete 2</h1>
                                    <p><small>Tasa: 22%</small></p>
                                    <p><smalll>Tipo de Interés: Nominal</smalll></p>
                                    <p><small>Periodo: Bimestral</small></p>
                                    <p><small>Capitalización: Diaria</small></p>
                                    <p><small>Crédito: S/.1500.00</small></p>
                                    <p><small>Tipo año: Ordinal</small></p>
                                </label><br>
                            </div>
                            <div class="bg-primary left right selection">
                                <input type="radio" id="3" name="gender" value="male">
                                <label for="3">
                                    <h1>Paquete 3</h1>
                                    <p><small>Tasa: 18%</small></p>
                                    <p><small>Tipo de Interés: Efectiva</small></p>
                                    <p><small>Periodo: Mensual</small></p>
                                    <p><small>Crédito: S/.2000.00</small></p>
                                    <p><small>Tipo año: Ordinal</small></p>
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
    export default {
        name: "EditClient"
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
