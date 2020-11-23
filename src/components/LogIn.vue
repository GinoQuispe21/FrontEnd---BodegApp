
<template>
    <v-card>
        <v-toolbar color="bg-primary" dark>
            <img :src="require('@/assets/safebag_dark.png')" height="100%" width="15%"/>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text to="/register" class="text-info">
                    Registrarse
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
                <div>
                    <div style="padding: 1rem" class="text-info">
                        <label for="user">Correo Electrónico</label>
                        <div></div>
                        <input v-model="uEmail" id="user" type="text" name="user"/>
                    </div>
                    <div style="padding: 1rem" class="text-info">
                        <label for="password">Correo Electrónico</label>
                        <div></div>
                        <input v-model="uPassword" id="password" type="password" name="password"/>
                    </div>
                    <div style="padding-bottom: 1rem" class="text-center">
                        <b-btn @click="login()">Ingresar</b-btn>
                    </div>
                </div>
        </template>
    </v-card>
                    </div>
                </div>
            </div>
        </template>
    </v-card>
</template>

<script>
    import { baseURL } from '@/baseURL';
    export default  {
        name: "ClientList",
        data: ()=> {
            return{
                user: [],
                email: null,
                username: null,
                password: null,
                uEmail: null,
                uPassword: null,
            }
        },
        mounted() {
            console.log()
            this.axios.get(baseURL + 'users/1')
                .then(response =>{
                    this.user = response.data;
                    this.email = this.user.email;
                    this.password = this.user.password;
                    this.username = this.user.username;
                })
        },
        methods:{
            login(){
                if(this.uEmail == this.email && this.uPassword == this.password){
                    alert("Bienvenido de vuelta " + this.username)
                    this.$router.push('/homepage')
                }
                else {
                    alert(this.password)
                }
            }

        }
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
