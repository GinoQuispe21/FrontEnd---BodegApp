<template>
    <v-card>
        <v-toolbar color="bg-primary" dark>
            <img :src="require('@/assets/safebag_dark.png')" height="100%" width="15%"/>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text to="/" class="text-info">
                    Cerrar Sesión
                </v-btn>
                <v-divider vertical></v-divider>
            </v-toolbar-items>
        </v-toolbar>
        <v-tabs vertical>
            <v-tab class="text-info bg-primary">
                Home
            </v-tab>
            <v-tab class="text-info bg-primary">
                Mis Datos
            </v-tab>
            <v-tab class="text-info bg-primary">
                Cambiar Contraseña
            </v-tab>
            <v-tab class="text-info bg-primary">
                Movimientos
            </v-tab>
            <v-tab class="text-info bg-primary">
                Registrar Venta
            </v-tab>
            <v-tab-item>

            </v-tab-item>
            <v-tab-item>
                <UserData></UserData>
            </v-tab-item>
            <v-tab-item>
                <ChangePassword></ChangePassword>
            </v-tab-item>
            <v-tab-item>
                <Movements></Movements>
            </v-tab-item>
            <v-tab-item>
                <RegisterSale></RegisterSale>
            </v-tab-item>
        </v-tabs>
    </v-card>
</template>

<script>

    import UserData from "@/components/UserData";
    import ChangePassword from "@/components/ChangePassword";
    import Movements from "@/components/Movements";
    import RegisterSale from "@/components/RegisterSale";
    export default {
        name: "HomePage",
        components: {RegisterSale, Movements, ChangePassword, UserData},
    }
</script>

<style scoped>

</style>
