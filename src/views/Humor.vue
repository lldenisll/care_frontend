<template>
<div>
    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header"
        style="min-height: 400px; background-image: url(img/diario/humor2.jpeg); background-size: cover; background-position: center center;">
      <b-container fluid>
        <!-- Mask -->
        <span class="mask bg-gradient-dark opacity-6"></span>
        <!-- Header container -->
        <b-container fluid class=" align-items-center">
          <b-row >
            <b-col lg="12" md="12" sm="12" >
              <h1 class="display-2 text-white">Olá {{usuario}}</h1>
              <p class="text-white mt-0 mb-5">Sou a Zohar, e espero que você esteja tendo um ótimo dia. <br> Me conta, como vai?</p>
              <b-button class="botao" v-b-modal.modal-1>Ver resumo da semana</b-button>

            </b-col>

          </b-row>
        </b-container>
      </b-container>
    </div>
      <b-modal id="modal-1" size="xl" title="Resumo Semanal">
          <tabela-humor></tabela-humor>
  </b-modal>
  <b-container fluid class="mt--6">
      <b-row>
        <b-col xl="10" class="order-xl-1">
          <cadastrar-humor></cadastrar-humor>
        </b-col>

      </b-row>
    </b-container>   
</div>
</template>
<script>
  import CadastrarHumor from './Pages/Humor/CadastrarHumor';
  import TabelaHumor from './Pages/Humor/TabelaHumor.vue';
  import axios from "axios";

  export default {
    data(){
      return{
       urlPaciente:'http://192.168.10.222:8000/paciente/users/',

        hoje: '',
        usuario:''
      };
    },
    components: {
      CadastrarHumor,
      TabelaHumor,
    },
    created(){
      this.initialize();
    },
    methods:{
    initialize(){
      this.hoje = new Date().toLocaleDateString()
      console.log(this.hoje)
      axios
      .get(this.urlPaciente,{ 'headers': { 'Authorization': `Bearer ${this.$store.state.accessToken}` } })
      .then((response) =>{
        this.usuario=response.data[0].first_name;
        console.log(this.usuario)
      })
    }

    }

  };
</script>
<style>
.botao{
  background-color: #2E5A88;
  border: none;
  color: white;
}
</style>
