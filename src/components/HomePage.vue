<template>
    <v-card height="100%">
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
                Registro de Ventas
            </v-tab>
            <v-tab class="text-info bg-primary">
                Registro de Clientes
            </v-tab>
            <v-tab class="text-info bg-primary">
                Registro de Producto
            </v-tab>
            <v-tab class="text-info bg-primary">
                Lista de Clientes
            </v-tab>
            <v-tab class="text-info bg-primary">
                Lista de Productos
            </v-tab>
            <v-tab class="text-info bg-primary">
                Editar Cliente
            </v-tab>
            <v-tab class="text-info bg-primary">
                Editar Productos
            </v-tab>
            <v-tab class="text-info bg-primary">
              aaaaaaaaaa
            </v-tab>
            <v-tab-item>
                <HomeP></HomeP>
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
            <v-tab-item>
                <RegisterClient></RegisterClient>
            </v-tab-item>
            <v-tab-item>
                <RegisterProduct></RegisterProduct>
            </v-tab-item>
            <v-tab-item>
                <ClientList></ClientList>
            </v-tab-item>
            <v-tab-item>
                <ProductList></ProductList>
            </v-tab-item>
            <v-tab-item>
                <EditClient></EditClient>
            </v-tab-item>
            <v-tab-item>
                <EditProduct></EditProduct>
            </v-tab-item>
            <v-tab-item>
              <aaaaaaaaaa></aaaaaaaaaa>
            </v-tab-item>
        </v-tabs>
    </v-card>
</template>

<script>

    import UserData from "@/components/UserData";
    import ChangePassword from "@/components/ChangePassword";
    import Movements from "@/components/Movements";
    import RegisterSale from "@/components/RegisterSale";
    import ClientList from "@/components/ClientList";
    import ProductList from "@/components/ProductList";
    import RegisterClient from "@/components/RegisterClient";
    import RegisterProduct from "@/components/RegisterProduct";
    import EditClient from "@/components/EditClient";
    import EditProduct from "@/components/EditProduct";
    import HomeP from "@/components/HomeP";
    import Aaaaaaaaaa from "@/components/aaaaaaaaaa";
    export default {
        name: "HomePage",
        components: {
            Aaaaaaaaaa,
            HomeP,
            EditProduct,
            EditClient,
            RegisterProduct,
            RegisterClient,
            ProductList, ClientList, RegisterSale, Movements, ChangePassword, UserData},
       mounted(){

       }
    }
</script>

<style scoped>

</style>
