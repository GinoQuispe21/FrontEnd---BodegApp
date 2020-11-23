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
                            <input v-model="oldPassword" id="password" type="password" name="password"/>
                        </div>
                        <div></div>
                        <div class="left">
                            <label for="c_password">Nueva Contraseña</label>
                            <div></div>
                            <input v-model="newPassword" id="c_password" type="password" name="password" />
                        </div>
                        <div></div>
                        <div style="padding-left: 1rem">
                            <b-btn @click="updatePassword()">Cambiar</b-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script>
    import { baseURL } from '@/baseURL';
    export default  {
        name: "ClientList",
        data: ()=> {
            return{
                user: [],
                password: null,
                oldPassword: null,
                newPassword: null,
            }
        },
        mounted() {
            console.log()
            this.axios.get(baseURL + 'users/1/')
                .then(response =>{
                    this.user = response.data;
                    this.password = this.user.password;
                })
        },
        methods:{
            updatePassword(){
                if(this.oldPassword == this.password){
                    this.user.password = this.newPassword
                    this.axios.put(baseURL + 'users/1', this.user).then(response => {
                        console.log(response)
                        alert("Constraseña Actualizada")
                    })
                }
                else{
                    alert("Error")
                }
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
