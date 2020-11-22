<template>
  <v-card>
    <p>{{customer.dni}}</p>
    <p>{{clientAc.interestRate}}</p>
  </v-card>
</template>

<script>
    import {baseURL} from "@/baseURL";
    export default {
      name: "aaaaaaaaaa",
      data: ()=>{
        return{
          customer : null,
          clientAc: []
        }
      },
      mounted() {
        this.axios.get(baseURL + 'users/1/customersDni/45345621')
            .then(response => {
              this.customer = response.data;
              console.log(response);
              this.axios.get(baseURL + 'customers/'+ response.data.id+'/customerAccounts').then(response1 => {
                this.clientAc = response1.data.content;
                console.log(response1);
              })
            });
      }
    }
</script>

<style scoped>

</style>