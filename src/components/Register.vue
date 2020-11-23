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
                        <input v-model="username" id="name" type="text" name="f_name" placeholder="Ex. Madeline"/>
                        </div>
                        <div style="padding-right: 10px" class="left">
                        <label for="surname">Apellido</label>
                            <div></div>
                        <input v-model="lastname" id="surname" type="text" name="l_name" placeholder="Ex. Veradi"/>
                        </div>
                        <div class="left">
                            <label for="surname">DNI</label>
                            <div></div>
                            <input v-model="dni" id="dni" type="number" name="dni" placeholder="Ex. AAAAAAAA"/>
                        </div>
                        <div style="padding-right: 5vw">
                            <label for="address">Dirección</label>
                            <div></div>
                            <input v-model="address" id="address" type="text" name="address" placeholder="Ex. Calle Matier 620"/>
                        </div>
                        <div></div>
                        <div style="padding-right: 5vw" class="alone">
                            <label for="email">Correo Electrónico</label>
                            <div></div>
                            <input v-model="email" id="email" type="text" name="email" placeholder="Example@email.com"/>
                        </div>
                        <div></div>
                        <div class="left right2">
                            <label for="number">Numero de celular</label>
                            <div class="paddin"></div>
                            <input v-model="phone_number" id="number" type="number" name="n_cell" placeholder="Ex. 987654321"/>
                        </div>
                        <div style="margin-left: 100px" class="left">
                            <label for="b_date">Fecha de Nacimiento</label>
                            <div></div>
                            <input v-model="birthdate" id="b_date" type="text" name="b_date" placeholder="año-mes-día"/>
                        </div>
                        <div></div>
                        <div style="padding-right: 5vw">
                            <label for="password">Ingresar contrseña</label>
                            <div></div>
                            <input v-model="password" id="password" type="password" name="password" placeholder="Más de 8 caracteres"/>
                        </div>
                        <div></div>
                        <div style="padding-right: 5vw">
                            <label for="c_password">Confirmar Contraseña</label>
                            <div></div>
                            <input v-model="confPassword" id="c_password" type="password" name="confirm password" placeholder="Misma contraseña"/>
                        </div>
                        <div></div>
                        <div class="left right">
                            <label for="curr">Tipo de Moneda</label>
                            <div class="paddin"></div>
                            <input  id="curr" type="text" name="f_name" disabled placeholder="Soles (S/.)"/>
                        </div>
                        <div class="left right">
                            <label for="dist">Distrito</label>
                            <div class="paddin"></div>
                            <input v-model="district" id="dist" type="text" name="f_name" placeholder="Ex. Surco"/>
                        </div>
                        <div class="left right">
                            <label for="country">País</label>
                            <div class="paddin"></div>
                            <input v-model="country" id="country" type="text" name="f_name" placeholder="Ex. EEUU"/>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        <div class="text-info butt2">
            <b-button @click="postUser" >Registrarse</b-button>
        </div>
    </div>
        </template>
    </v-card>
</template>

<script>
    import { baseURL } from '@/baseURL';
    export default {
        name: "RegisterProduct",
        data: ()=>{
            return {
                dni: null,
                username: null,
                lastname: null,
                address: null,
                district: null,
                country: null,
                email: null,
                phone_number: null,
                birthdate: null,
                password: null,
                confPassword: null,

            }
        },
        methods:{
            postUser(){
                if(this.password == this.confPassword){
                this.axios.post(baseURL + 'users', {
                    dni : this.dni,
                    username : this.username,
                    lastname : this.lastname,
                    address : this.address,
                    district : this.district,
                    country : this.country,
                    email : this.email,
                    phoneNumber : this.phone_number,
                    birthdate :  this.birthdate,
                    password : this.password,
                    confPassword : this.confPassword
                })
                    .then((responseUser) => {
                        //Create User
                        this.axios.post(baseURL + 'users' + responseUser.data.id, {
                            address: this.form.address,
                        })})
                }
                else{ alert("Error")}
            }
        }
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
