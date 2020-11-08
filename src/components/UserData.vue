<template>
    <v-card>
        <div class="container no-gutters ass">
            <div class="row justify-content-center align-items-center bg-warning register_body">
                <div style="border-radius: 15px" class="bg-primary col-auto ">
                    <h1 style="text-align: left">Mis Datos</h1>
                    <div class="bg-primary register_interface">
                        <form class="text-info">
                            <div class="left right">
                                <label for="name">Nombre</label>
                                <div class="paddin"></div>
                                <input id="name" type="text" name="f_name" placeholder="Ex. Madeline"/>
                            </div>
                            <div style="padding-right: 10px" class="left">
                                <label for="surname">Apellido</label>
                                <div></div>
                                <input id="surname" type="text" name="l_name" placeholder="Ex. Veradi"/>
                            </div>
                            <div class="left">
                                <label for="surname">DNI</label>
                                <div></div>
                                <input id="dni" type="number" name="dni" disabled/>
                            </div>
                            <div style="padding-right: 5vw">
                                <label for="address">Dirección</label>
                                <div></div>
                                <input id="address" type="text" name="address" placeholder="Ex. Calle Matier 620"/>
                            </div>
                            <div></div>
                            <div style="padding-right: 5vw" class="alone">
                                <label for="email">Correo Electrónico</label>
                                <div></div>
                                <input id="email" type="text" name="email" placeholder="Example@email.com"/>
                            </div>
                            <div></div>
                            <div class="left right2">
                                <label for="number">Numero de celular</label>
                                <div class="paddin"></div>
                                <input id="number" type="number" name="n_cell" placeholder="Ex. 987654321"/>
                            </div>
                            <div style="margin-left: 100px" class="left">
                                <label for="b_date">Fecha de Nacimiento</label>
                                <div></div>
                                <input id="b_date" type="date" name="b_date"/>
                            </div>
                            <div></div>
                            <div style="padding-right: 5vw">
                                <label for="password">Ingresar contrseña</label>
                                <div></div>
                                <input id="password" type="text" name="password" placeholder="Más de 8 caracteres"/>
                            </div>
                            <div></div>
                            <div style="padding-right: 5vw">
                                <label for="c_password">Confirmar Contraseña</label>
                                <div></div>
                                <input id="c_password" type="text" name="confirm password" placeholder="Misma contraseña"/>
                            </div>
                            <div></div>
                            <div class="left right2">
                                <label for="currency">Tipo de Moneda</label>
                                <div></div>
                                <select name="t_currency" id="currency" class="c_select">
                                    <option value="soles">Soles(S/.)</option>
                                    <option value="dollar">Dólares($)</option>
                                </select>
                            </div>
                            <div></div>
                            <div class="left right2">
                                <label for="district">Distrito</label>
                                <div></div>
                                <select name="distrcit" id="district" class="c_select">
                                    <option value="SB">San Borja</option>
                                    <option value="L_Ol">Los Olivos</option>
                                </select>
                            </div>
                            <div></div>
                            <div class="left" style="margin-left: 8rem">
                                <label for="country">País</label>
                                <div></div>
                                <select name="country" id="country" class="c_select">
                                    <option value="p">Perú</option>
                                </select>
                            </div>
                        </form>
                        <div>
                            <div class="left ">
                            <b-btn style="margin-left: 18.5rem">Actualizar</b-btn>
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
        name: "UserData"
    }
</script>

<style scoped>
    .register_body{
        height: 100vh;
        width:  100vw;
    }
    .ass{
        padding: 0;
    }
    .left{
        float: left;
        background-color: #28201e;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .left{
        float: left;
        background-color: #28201e;
        padding-top: 10px;
        padding-bottom: 10px;

    }
    .alone{
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .right{
        padding-right: 1vw;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .right2{
        padding-right: 5vw;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .register_interface{
        border-radius: 25px;
    }
    .c_select{
        color: #ff775c;
        font-size: 0.85rem;
    }
    h1{
        color: #ffce00;
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
