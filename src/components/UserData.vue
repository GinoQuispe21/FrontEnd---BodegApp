<template>
    <v-card>
        <div class="container no-gutters ass">
            <div class="row justify-content-center align-items-center bg-warning register_body">
                <div style="border-radius: 15px" class="bg-primary col-auto ">
                    <h1 style="text-align: left">Mis Datos</h1>
                    <div class="bg-primary register_interface">
                        <form class="text-info">
                            <div class="left right2">
                                <label for="name">Nombre</label>
                                <div class="paddin"></div>
                                <input v-model="username" id="name" type="text" name="f_name" />
                            </div>
                            <div style="padding-right: 10px" class="left right2">
                                <label for="surname">Apellido</label>
                                <div></div>
                                <input v-model="lastname" id="surname" type="text" name="l_name" />
                            </div>
                            <div style="padding-left: 5vw" class="left">
                                <label for="surname">DNI</label>
                                <div></div>
                                <input v-model="dni" id="dni" type="number" name="dni" />
                            </div>
                            <div style="padding-right: 5vw">
                                <label for="address">Dirección</label>
                                <div></div>
                                <input v-model="address" id="address" type="text" name="address" />
                            </div>
                            <div></div>
                            <div style="padding-right: 5vw" class="alone">
                                <label for="email">Correo Electrónico</label>
                                <div></div>
                                <input v-model="email" id="email" type="text" name="email" />
                            </div>
                            <div></div>
                            <div class="left right2">
                                <label for="number">Numero de celular</label>
                                <div class="paddin"></div>
                                <input v-model="phone_number" id="number" type="text" name="n_cell" />
                            </div>
                            <div  class="left right2">
                                <label for="b_date">Fecha de Nacimiento</label>
                                <div></div>
                                <input v-model="birthdate" id="b_date" type="text" name="b_date"/>
                            </div>
                            <div></div>
                            <div class="left right2">
                                <label for="currency">Tipo de Moneda</label>
                                <div></div>
                                <input id="currency" disabled type="text" name="b_date" placeholder="Soles (S/.)"/>
                            </div>
                            <div class="left right">
                                <label for="District">Distrito</label>
                                <div></div>
                                <input v-model="district" id="District" type="text" name="b_date"/>
                            </div>
                            <div class="left right" style="margin-left: 4rem">
                                <label for="country">País</label>
                                <div></div>
                                <input v-model="country" id="country" type="text" name="b_date"/>
                            </div>
                        </form>
                        <div>
                            <div class="left ">
                            <b-btn @click="updateUser" style="margin-left: 25rem">Actualizar</b-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script>
    import { baseURL } from '@/baseURL';
    export default {
        name: "EditClient",
        data: () => {
            return {
                user: [],
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
            }
        },
        mounted() {
            console.log()
            this.axios.get(baseURL + 'users/1')
                .then(response => {
                    this.user = response.data;
                    console.log(this.user);
                    this.dni = this.user.dni;
                    this.username = this.user.username;
                    this.lastname = this.user.lastname;
                    this.address = this.user.address;
                    this.district = this.user.district;
                    this.country = this.user.country;
                    this.email = this.user.email;
                    this.phone_number = this.user.phoneNumber;
                    this.birthdate =  this.user.birthdate;
                    this.password = this.user.password
                    this.formatBDateOrders();
                })
        },
        methods:{
            formatBDateOrders() {
                //2000-12-11 19:00:00
                let date = this.birthdate
                let splitDate = date.split("-");
                let formatDate = splitDate[0] + '-' + splitDate[1] + '-' + splitDate[2][0] +splitDate[2][1];
                this.birthdate = formatDate;
            },
            updateUser() {
                this.axios.put(baseURL + 'users/1', {
                    dni : parseFloat(this.dni),
                    username : this.username,
                    lastname : this.lastname,
                    address : this.address,
                    district : this.district,
                    country : this.country,
                    email : this.email,
                    phoneNumber : this.phone_number,
                    birthdate : this.birthdate,
                    password : this.password
                }).then(response => {
                    console.log(response)
                })
            }
        }
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
