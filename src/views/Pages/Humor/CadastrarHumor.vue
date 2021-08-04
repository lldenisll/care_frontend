<template>
  <card>
    <b-row align-v="center" slot="header" >
      <b-col cols="8">
        <h3 class="mb-0">Olá {{usuario}}, preencha seu cadastro de humor.</h3>
      </b-col>

    </b-row>

    <b-form @submit.prevent="updateProfile">
      <h6 class="heading-small text-muted mb-4">Gatilho de Ansiedade</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="9">
             <label for="demo-sb">Use os botões para editar, e clique em salvar</label>
              <b-form-spinbutton id="demo-sb" v-model="humor.ansiedade">  min="1" max="100"></b-form-spinbutton>
              <p class="text-center">Crises de hoje: {{this.humor.ansiedade}}  </p>
          </b-col>
          <b-col lg="3">
            <a href="#!" @click="enviar()" class="btn  btn-primary center">Salvar</a>
          </b-col>
        </b-row>
      </div>
      <hr class="my-4">

      <!-- Address -->
      <h6 class="heading-small text-muted mb-4">Humor em Geral</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col md="6">
            <base-input label="O seu humor hoje pela manhã">
                <select v-model="humor.sentimento_comeco_do_dia" class="form-control">
                  <option>Felicidade</option>
                  <option>Ansiedade</option>
                  <option>Preocupação</option>
                  <option>Tristeza</option>
                  <option>Apatia</option>
                </select>
              </base-input>
          </b-col>
              <b-col md="6">
            <base-input label="O seu humor hoje no final do dia">
                <select v-model="humor.sentimento_fim_do_dia" class="form-control">
                  <option>Felicidade</option>
                  <option>Ansiedade</option>
                  <option>Preocupação</option>
                  <option>Tristeza</option>
                  <option>Apatia</option>
                </select>
              </base-input>
          </b-col>
        </b-row>
      </div>

      <hr class="my-4">
      <!-- Description -->
      <h6 class="heading-small text-muted mb-4">Conte-me mais</h6>
      <div class="pl-lg-4">
        <b-form-group label="Diário" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
         <!--  <label class="form-control-label">About Me</label> -->
          <b-form-textarea rows="4" v-model="humor.diario" value="Se estiver com vontade, me conta como foi o seu dia?" id="about-form-textaria" placeholder="Se estiver com vontade, me conta como foi o seu dia?"></b-form-textarea>
      <b-row class="pt-4 pl-2">       
        <a href="#!" @click="enviar()" class="btn btn-sm btn-success">Salvar</a>
      </b-row>

        </b-form-group>
      </div>

    </b-form>
  </card>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      urlHumor:'http://192.168.10.222:8000/diario_reumatico/humor/',
      urlPaciente:'http://192.168.10.222:8000/paciente/users/',
      dia:'',
      id: '',
      humor: {
        sentimento_comeco_do_dia: '', 
        sentimento_fim_do_dia: '',
        ansiedade: '',
        diario: '',        
      },
      usuario: '',
    };
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
      .get(this.urlHumor, { 'headers': { 'Authorization': `Bearer ${this.$store.state.accessToken}` } })
      .then((response) => {
      var date = (new Date()).toISOString().split('T')[0];
      this.humor = response.data;
      this.dia = response.data[0].dia
      if(date==this.dia){
        this.humor.sentimento_comeco_do_dia = response.data[0].sentimento_comeco_do_dia
        this.humor.sentimento_fim_do_dia = response.data[0].sentimento_fim_do_dia
        this.humor.ansiedade = response.data[0].ansiedade
        this.id = response.data[0].id
        this.humor.diario = response.data[0].diario
      }else{
        this.humor.sentimento_comeco_do_dia = ''
        this.humor.sentimento_fim_do_dia = ''
        this.humor.ansiedade = ''
        this.humor.diario=''
      }
      }); 
      axios
      .get(this.urlPaciente,{ 'headers': { 'Authorization': `Bearer ${this.$store.state.accessToken}` } })
      .then((response) =>{
        this.usuario=response.data[0].first_name;
      })
    },
    enviar(){
      var date = (new Date()).toISOString().split('T')[0];
      if(date==this.dia){
        axios
        .put(this.urlHumor+this.id+"/",
        {
          email: this.$store.state.email,
          sentimento_comeco_do_dia: this.humor.sentimento_comeco_do_dia,
          sentimento_fim_do_dia: this.humor.sentimento_fim_do_dia,
          ansiedade: this.humor.ansiedade,
          diario: this.humor.diario,
        },
        { 'headers': { 'Authorization': `Bearer ${this.$store.state.accessToken}` } })
        .then((response)=>{
          alert('ok')
          this.initialize()
        })
      }else{
        axios
        .post(this.urlHumor,
        {
          email: this.$store.state.email,
          sentimento_comeco_do_dia: this.humor.sentimento_comeco_do_dia,
          sentimento_fim_do_dia: this.humor.sentimento_fim_do_dia,
          ansiedade: this.humor.ansiedade,
          diario: this.humor.diario,
        },
        { 'headers': { 'Authorization': `Bearer ${this.$store.state.accessToken}` } },)
        .then((response)=>{
          alert('ok')
          this.initialize()
        })
      }

    },
    addAnsiedade(){
      this.humor.ansiedade +=1;
      console.log(this.humor.ansiedade)
    },
  }
};
</script>
<style></style>
