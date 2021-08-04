<template>
<div>
    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header"
        style="min-height: 300px; background-image: url(img/diario/farmacia.jpeg); background-size: cover; background-position: center center;">
      <b-container fluid>
        <!-- Mask -->
        <span class="mask bg-gradient-success opacity-2"></span>
      </b-container>
    </div>

    <b-card no-body>
        <b-card-header class="border-0">
            <h3 class="mb-0">Lista de remédios</h3>
        </b-card-header>

    <b-table dark responsive hover bordered :items="remedios"></b-table>

    </b-card>
    </div>
</template>
<script>
  import { Table, TableColumn} from 'element-ui'
  import axios from "axios";

  export default {
    name: 'light-table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
   data() {
      return {
          urlHumor:'http://192.168.10.222:8000/diario_reumatico/remedios/',
          remedios:'',
        currentPage: 1
      };
    },
    created() {
    this.initialize();
  },
  methods:{ 
      initialize() {
      axios
      .get(this.urlHumor, { 'headers': { 'Authorization': `Bearer ${this.$store.state.accessToken}` } })
      .then((response) => {
        this.remedios = response.data;
      }); 
    },
  }
  }
  
</script>