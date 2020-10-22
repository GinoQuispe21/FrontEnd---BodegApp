<template>
    <v-card class="mx-auto" max-width="550" outlined>

            <div align="center" class="login">Log In</div>

        <template>
            <v-row justify="center">
                <v-col cols="12" sm="10" md="8" lg="6">
                    <v-card ref="form">
                        <v-card-text>
                            <v-text-field
                                    ref="user"
                                    v-model="user"
                                    label="User or Email"
                                    required outlined>
                            </v-text-field>
                            <v-text-field
                                    ref="password"
                                    v-model="password"
                                    label="Password"
                                    required outlined>
                            </v-text-field>
                            <div>
                                <a>¿Olvidaste la contraseña?</a>
                            </div>
                            <v-card-actions>
                                <v-btn depressed
                                       color="primary"> Login
                                </v-btn>
                            </v-card-actions>
                        </v-card-text>
                        <v-divider class="mt-12"></v-divider>
                    </v-card>
                </v-col>
            </v-row>
        </template>
    </v-card>
</template>

<script>
    export default {
        name: "LogIn"
    }
</script>

<style scoped>
.login{
    text-align: center;
    font-size: 75px;
    color: white;
}
.mx-auto{
    background: rgb(22,25,29);
    background: linear-gradient(25deg, rgba(22,25,29,1) 0%, rgba(47,109,228,1) 65%);
}
</style>
