<template>
  <div>
<div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header"
        style="min-height: 400px; background-image: url('https://images.unsplash.com/photo-1611073061835-e77b1b16d3f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80'); background-size: cover; background-position: center center;">
      <b-container fluid>
        <!-- Mask -->
        <span class="mask bg-gradient-gray opacity-2"></span>      <!-- Card stats -->
      <b-row>
        <b-col xl="6" md="6">
          <stats-card title="Remédios de hoje"
                      type="gradient-blue"
                      icon="ni ni-box-2"
                      class="mb-4">

            <template slot="footer">
              <span class="text-nowrap">{{nome_do_remedio}}</span>
            </template>
          </stats-card>
        </b-col>
          </b-row>
        </b-container>
      </b-container>
    </div>
    <b-container fluid class="mt--7">
      <b-row>
        <b-col>
          <light-table/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import { Dropdown, DropdownItem, DropdownMenu, Table, TableColumn } from 'element-ui';

  import LightTable from "./Tables/RegularTables/LightTable";
  import DarkTable from "./Tables/RegularTables/DarkTable";

  export default {
    components: {
      LightTable,
      DarkTable,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
      return {
          urlHumor:'http://192.168.10.222:8000/diario_reumatico/remedios/',
          remedios:'',
          remedios_do_dia:'',
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
<style>
.el-table.table-dark{
  background-color: #172b4d;
  color: #f8f9fe;
}

.el-table.table-dark th,
.el-table.table-dark tr{
  background-color: #172b4d;
}

.el-table.table-dark td,
.el-table.table-dark th.is-leaf{
  border-bottom: none;
}
</style>
