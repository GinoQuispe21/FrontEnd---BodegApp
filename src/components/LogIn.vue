
<template>
    <v-card>
        <v-toolbar color="bg-primary" dark>
            <img :src="require('@/assets/safebag_dark.png')" height="100%" width="15%"/>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text to="/register" class="text-info">
                    Registrarse
                </v-btn>
                <v-btn text to="/homepage" class="text-info">
                    Página de Inicio
                </v-btn>
                <v-divider vertical></v-divider>
            </v-toolbar-items>
        </v-toolbar>
        <template>
            <div class="container no-gutters ass">
                <div class="row justify-content-center align-items-center bg-warning register_body">
                    <div class="column">
    <v-card class="bg-primary rounded-xl vicard" outlined>
            <div align="center" class="text-info login">Iniciar Sesión</div>
        <template>
            <v-row justify="center">
                <v-col cols="10" sm="8" md="8" lg="6">
                    <v-card style="border-color: #ffce00" class="bg-warning rounded-xl " ref="form" tile>
                        <v-card-text>
                            <v-text-field
                                    ref="user"
                                    v-model="user"
                                    label="User or Email"

                                    required outlined>
                            </v-text-field>
                            <v-text-field
                                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show3 ? 'text' : 'password'"
                                    ref="password"
                                    v-model="password"
                                    label="Password"
                                    required outlined
                                    @click:append="show3 = !show3">
                            </v-text-field>
                            <div>
                                <a class="text-secondary">¿Olvidaste la contraseña?</a>
                            </div>
                            <div style="padding: 1rem"></div>
                            <div class="text-info butt">
                                <b-button variant="secondary">Iniciar Sesión</b-button>
                            </div>

                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </template>
    </v-card>
                    </div>
                </div>
            </div>
        </template>
    </v-card>
</template>

<script>
    export default {
        name: "LogIn",
    }
</script>

<style lang="scss">
.login{
    text-align: center;
    font-size: 3.5rem;
    color: white;
}
.vicard{
    width: 800px;
    margin: 0 auto;
    border-radius: 75px;
}

.register_body{
    height: 100vh;
    width:  100vw;

}
.ass{
    padding: 0;
}
</style>
