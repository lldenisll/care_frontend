<template>
<div>
    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header"
        style="min-height: 400px; background-image: url(img/diario/consultorio.jpg); background-size: cover; background-position: center center;">
      <b-container fluid>
        <!-- Mask -->
        <span class="mask bg-gradient-dark opacity-4"></span>
        <!-- Header container -->
        <b-container fluid class=" align-items-center">
          <b-row >
            <b-col lg="12" md="12" sm="12" >
              <h1 class="display-2 text-white">Consultório</h1>
              <p class="text-white mt-0 mb-5">Acesse suas consultas, exames e outras informações importantes</p>
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
        <b-col xl="12" class="order-xl-1">
        <card>
          
          <b-row>
            <b-col lg="4" class="order-xl-1">
            <card>
              
              Consultas

            </card>
            </b-col>
            <b-col lg="4" class="order-xl-1">
            <card>
              
              Exames

            </card>
            </b-col>
            <b-col lg="4" class="order-xl-1">
            <card>
              
              Outras informações

            </card>
            </b-col>

          </b-row>

        </card>
        </b-col>

      </b-row>
    </b-container>   

</div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';

  // Tables
  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';

  export default {
    components: {
      LineChart,
      BarChart,
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [
              {
                label: 'Performance',
                data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
              }
            ],
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          },
          extraOptions: chartConfigs.blueChartOptions
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>
