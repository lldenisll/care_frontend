<template>
<div>
    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header"
        style="min-height: 400px; background-image: url('https://images.unsplash.com/photo-1604213410393-89f141bb96b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'); background-size: cover; background-position: center center;">
      <b-container fluid>
        <!-- Mask -->
        <span class="mask bg-gradient-dark opacity-4"></span>
        <!-- Header container -->
        <b-container fluid class=" align-items-center">
          <b-row >
            <b-col lg="12" md="12" sm="12" >
              <h1 class="display-2 text-white">Olá {{usuario}}</h1>
              <p class="text-white mt-0 mb-5">Sou a Zohar, e espero que você esteja tendo um ótimo dia. <br> Me conta, como estão as suas dores hoje? Por favor, considere uma escala de 0 até 10</p>
              <b-button class="botao" v-b-modal.modal-1>Ver resumo da semana</b-button>

            </b-col>
       <b-modal id="modal-1" size="xl" title="Resumo Semanal">
          <tabela-dor></tabela-dor>
  </b-modal>
          </b-row>
        </b-container>
      </b-container>
    </div>
      <b-container fluid class="mt--6">
      <b-row>
        <b-col xl="10" class="order-xl-1">
            <card>
<b-form @change.native="enviarDor">
    <b-row>
        <b-col md="8">
            <h6 class="heading-small text-muted mb-4 pt-4 pl-4">Escala de dor do dia {{date}}, {{semana}}</h6>
        </b-col>
        <b-col md="4 " class="pt-4" >
            <a  href="#!" @click="enviarDor()" class="btn  btn-primary ">Salvar</a>
        </b-col>
    </b-row> 
    <div class="pl-lg-4 pb-4">
        <b-row>
          <b-col lg="12">
                <b-form-checkbox v-model="rididez" switch class="mr-n2">
                    <span v-if="this.rididez">
                        <span class="sr-only"> Tive rigidez hoje</span>
                    </span>
                    <span v-else>
                        <span class="sr-only"> Não tive rigidez hoje</span>
                    </span>
                </b-form-checkbox> 
           </b-col>
        </b-row>
    </div>
    <div class="pl-lg-4 pb-4">
        <b-row>
          <b-col lg="12">
            <label for="rating-10">Escala de dor nas mãos</label>
                <b-form-rating  icon-half="emoji-dizzy-half" icon-full="emoji-dizzy-fill" icon-empty="emoji-dizzy" color="#0485D1"  id="rating-10" v-model="dor_mao" stars="10"></b-form-rating>
            </b-col>
        </b-row>
    </div>
    <div class="pl-lg-4 pb-4">
        <b-row>
          <b-col lg="12">
            <label for="rating-10">Escala de dor nos pés</label>
                <b-form-rating  icon-half="emoji-dizzy-half" icon-full="emoji-dizzy-fill" icon-empty="emoji-dizzy" color="#0485D1"  id="rating-10" v-model="dor_pes" stars="10"></b-form-rating>
            </b-col>
        </b-row>
    </div>
    <div class="pl-lg-4 pb-4">
        <b-row>
          <b-col lg="12">
            <label for="rating-10">Escala de dor nos punhos</label>
                <b-form-rating @change.native="enviarDor" icon-half="emoji-dizzy-half" icon-full="emoji-dizzy-fill" icon-empty="emoji-dizzy" color="#0485D1"  id="rating-10" v-model="dor_pulso" stars="10" ></b-form-rating>
            </b-col>
        </b-row>
    </div>
    <div class="pl-lg-4 pb-4">
        <b-row>
          <b-col lg="12">
            <label for="rating-10">Escala de dor nos cotovelo</label>
                <b-form-rating  icon-half="emoji-dizzy-half" icon-full="emoji-dizzy-fill" icon-empty="emoji-dizzy" color="#0485D1"  id="rating-10" v-model="dor_cotovelo" stars="10"></b-form-rating>
            </b-col>
        </b-row>
    </div>
    <div class="pl-lg-4 pb-4">
        <b-row>
          <b-col lg="12">
            <label for="rating-10">Escala de dor nos joelho</label>
                <b-form-rating  icon-half="emoji-dizzy-half" icon-full="emoji-dizzy-fill" icon-empty="emoji-dizzy" color="#0485D1"  id="rating-10" v-model="dor_joelho" stars="10"></b-form-rating>
            </b-col>
        </b-row>
    </div>

    <div class="pl-lg-4 pb-4">
        <b-row>
          <b-col lg="12">
            <label for="rating-10">Escala de dor nos tornozelo</label>
                <b-form-rating  icon-half="emoji-dizzy-half" icon-full="emoji-dizzy-fill" icon-empty="emoji-dizzy" color="#0485D1"  id="rating-10" v-model="dor_tornozelo" stars="10"></b-form-rating>
            </b-col>
        </b-row>
    </div>
    <div class="pl-lg-4 pb-4">
        <b-row>
          <b-col lg="12">
            <label for="rating-10">Escala de dor nos ombros</label>
                <b-form-rating  icon-half="emoji-dizzy-half" icon-full="emoji-dizzy-fill" icon-empty="emoji-dizzy" color="#0485D1"  id="rating-10" v-model="dor_ombros" stars="10"></b-form-rating>
            </b-col>
        </b-row>
    </div>
</b-form>
</card>
        </b-col>

      </b-row>
    </b-container>   

</div>
</template>
<script>
import axios from "axios";
import TabelaDor from './TabelaDor.vue';

export default {
  data() {
    return {
      urlDor:'http://192.168.10.222:8000/diario_reumatico/dor/',
      urlPaciente:'http://192.168.10.222:8000/paciente/users/',
      dia:'',
      semana:'',
      id: '',
      dor_pulso:'0',
      dor_mao:'0',
      dor_tornozelo:'0',
      dor_joelho:'0',
      dor_cotovelo:'0',
      dor_pes:'0',
      dor_ombros:'0',
      date:'',
      usuario: '',
      rididez: true,
    };
  },
    components: {
      TabelaDor,
    },
  created() {
    this.getUser();
    this.initialize();
  },
  methods:{ 
     async getUser(){
        const response = await axios.get('user');
        console.log(response);
      },
      initialize() {
      axios
      .get(this.urlDor, { 'headers': { 'Authorization': `Bearer ${this.$store.state.accessToken}` } })
      .then((response) => {
      this.dia = response.data[0].dia
      var date = (new Date()).toISOString().split('T')[0];

      if(date==this.dia){
        this.dor_pulso      = response.data[0].punhos
        this.dor_mao        = response.data[0].maos
        this.dor_tornozelo  = response.data[0].tornozelos
        this.dor_joelho     = response.data[0].joelhos
        this.dor_cotovelo   = response.data[0].cotovelos
        this.dor_pes        = response.data[0].pes
        this.dor_ombros     = response.data[0].ombros
        this.id             = response.data[0].id
      }else{
        this.dor_pulso      = ''
        this.dor_mao        = ''
        this.dor_tornozelo  = ''
        this.dor_joelho     = ''
        this.dor_cotovelo   = ''
        this.dor_pes        = ''
        this.dor_ombros     = ''
        this.humor.ansiedade = ''
      }
      this.id = response.data[0].id
      }); 
      this.date = new Date().toLocaleDateString();
      var dia_semana = parseInt(this.date[1], 10) - 1;
      axios
      .get(this.urlPaciente,{ 'headers': { 'Authorization': `Bearer ${this.$store.state.accessToken}` } })
      .then((response) =>{
        this.usuario=response.data[0].first_name;
      })
      // incluir API de rigidez

    },
    enviarDor(){
      var date = (new Date()).toISOString().split('T')[0];
      if(date==this.dia){
        axios
        .put(this.urlDor+this.id+"/",
        {
          email: this.$store.state.email,
          punhos: this.dor_pulso,
          maos: this.dor_mao,
          pes: this.dor_pes,
          cotovelos: this.dor_cotovelo,
          joelhos: this.dor_joelho,
          tornozelos: this.dor_tornozelo,
          ombros: this.dor_ombros,
        },
        { 'headers': { 'Authorization': `Bearer ${this.$store.state.accessToken}` } })
        .then((response)=>{
          alert('ok')
          this.initialize()
        })
      }else{
        axios
        .post(this.urlDor,
        {
         email: this.$store.state.email,
         punhos: this.dor_pulso,
          maos: this.dor_mao,
          pes: this.dor_pes,
          cotovelos: this.dor_cotovelo,
          joelho: this.dor_joelho,
          tornozelos: this.dor_tornozelo,
          ombros: this.dor_ombros,
        },
        { 'headers': { 'Authorization': `Bearer ${this.$store.state.accessToken}` } },)
        .then((response)=>{
          alert('ok')
          this.initialize()
        })
      }

    },
  }
};
</script>
<style></style>
