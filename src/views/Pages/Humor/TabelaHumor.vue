<template>
<div>
    <b-card no-body class="bg-default shadow">
        <b-card-header class="bg-transparent border-0">
            <h3 class="mb-0 text-white">Sua última semana foi assim</h3>
        </b-card-header>
    <b-table dark responsive hover bordered :items="humor"></b-table>
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
      [TableColumn.name]: TableColumn,
    },
    data() {
      return {
          urlHumor:'http://192.168.10.222:8000/diario_reumatico/humor/',
          humor:'',
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
        this.humor = response.data;
      }); 
    },
  }
  }
  
</script>