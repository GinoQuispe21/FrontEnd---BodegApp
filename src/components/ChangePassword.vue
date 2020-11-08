<template>
    <v-card>
        <div class="container no-gutters ass">
            <div class="row justify-content-center align-items-center register_body">
                <div style="border-radius: 15px" class="bg-primary col-auto ">
                    <div>
                        <div>
                            <h1>Cambiar Contraseña</h1>
                        </div>
                        <div class="left">
                            <label for="password">Contraseña actual</label>
                            <div></div>
                            <input id="password" type="password" name="password"/>
                        </div>
                        <div></div>
                        <div class="left">
                            <label for="c_password">Nueva Contraseña</label>
                            <div></div>
                            <input id="c_password" type="password" name="password" />
                        </div>
                        <div></div>
                        <div style="padding-left: 1rem">
                            <b-btn>Cambiar</b-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: "ChangePassword"
    }
</script>

<style scoped lang="scss">
    .register_body{
        height: 100vh;
        width:  100vw;
    }
    .left{
        float: left;
        padding-left: 1rem;
        padding-bottom: 10px;
    }
    label{
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
    h1{
        padding-left: 40px;
        padding-right: 50px;
        color: #ffce00;
    }
</style>
