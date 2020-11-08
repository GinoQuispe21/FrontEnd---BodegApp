<template>
    <v-card>
        <v-toolbar color="bg-primary" dark>
            <img :src="require('@/assets/safebag_dark.png')" height="100%" width="15%"/>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text to="/" class="text-info">
                    Iniciar Sesión
                </v-btn>
                <v-btn text to="/homepage" class="text-info">
                    Página de Inicio
                </v-btn>
                <v-divider vertical></v-divider>
            </v-toolbar-items>
        </v-toolbar>
        <template>
    <div class="container no-gutters ass">
        <div class="row justify-content-center align-items-center register_body">
            <div class="justify-content-center align-items-center">
                <h1 style="text-align: center">Lo mejor en administración financiera de bodegas</h1>
                <img :src="require('@/assets/safebag_color.png')" height="100%" width="15%" class="center"/>
            </div>
            <div style="border-radius: 15px" class="bg-primary col-auto ">
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
                            <input id="dni" type="number" name="dni" placeholder="Ex. AAAAAAAA"/>
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
                </div>

            </div>
        </div>
        <div class="text-info butt2">
            <b-button >Registrarse</b-button>
        </div>
    </div>
        </template>
    </v-card>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style scoped lang="scss">

.register_body{
    height: 100vh;
    width:  100vw;
}
.ass{
    padding: 0;
}
.butt2{
    margin-left: 50%;
    padding-bottom: 50px;
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

::placeholder{
    color: #a6a8aa;
    font-size: 0.85rem;
    opacity: 75%;
    padding-left: 0.15rem;
    border-radius: 10px;
}
.c_select{
    color: #ff775c;
    font-size: 0.85rem;

}
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}
h1{
    padding-left: 40px;
    padding-right: 50px;
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
