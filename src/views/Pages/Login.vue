<template>
  <div >
    <!-- Header -->
    <div class="header py-7 py-lg-8 pt-lg-9" >
      <b-container >
        <div class="header-body text-center mb-7 ">
          <b-row class="justify-content-left" >
            <b-col xl="4" lg="6" md="8" class="px-5">
              <h1 class="text-white">Seja bem vindo!</h1>
              <p class="text-lead text-white">Use these awesome forms to login or create new account in your project for
                free.</p>
            </b-col>
            <b-col xl="8" lg="6" md="4">
              <img src="img/diario/medical_pink.svg" width="50%" alt="">
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="bg-secondary border-0 mb-0">
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>Faça login na sua conta</small>
              </div>
              <validation-observer  ref="formValidator">
                <b-form role="form" v-on:submit.prevent="login">
                  <base-input alternative
                              class="mb-3"
                              name="Email"
                              :rules="{required: true, email: true}"
                              prepend-icon="ni ni-email-83"
                              placeholder="Email"
                              v-model="email">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              name="Password"
                              :rules="{required: true, min: 6}"
                              prepend-icon="ni ni-lock-circle-open"
                              type="password"
                              placeholder="Password"
                              v-model="password">
                  </base-input>

                  <div class="text-center">
                    <base-button type="primary" native-type="submit" class="my-4">Sign in</base-button>
                    <p v-if="incorrectAuth">Incorrect username or password entered - please try again</p>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
          <b-row class="mt-3">
            <b-col cols="6">
              <router-link to="/dashboard" class="text-light"><small>Forgot password?</small></router-link>
            </b-col>
            <b-col cols="6" class="text-right">
              <router-link to="/register" class="text-light"><small>Create new account</small></router-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data () {
      return {
        email: '',
        password: '',
        incorrectAuth: false
      }
    },
 
    methods: {
      login () { 
        this.$store.dispatch('userLogin', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'humor' })
        })
        .catch(err => {
          console.log(err)
          this.incorrectAuth = true
        })
        }
      }
  }
</script>

<style>
  .zohar-azul{
    background-color: #2E5A88;
  }
</style>