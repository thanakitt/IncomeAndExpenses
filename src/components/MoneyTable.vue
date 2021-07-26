<template>
  <table>
      <thead>
          <tr>
              <th>No.</th>
              <th>Name list</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Type</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="(money, index) in moneys" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ money.name }}</td>
            <td>{{ money.amount }}</td>
            <td>{{ money.date }}</td>
            <td>{{ money.type }}</td>
          </tr>
      </tbody>
      <h2>Total : {{ total }}</h2>
  </table>
</template>

<script>
import Money from '@/store/money'
export default {
    data(){
        return{
            moneys:[],
            total: {}
        }
    },
    created(){
        this.fetchMoney()
        this.sumTotal()
    },
    beforeUpdate(){
        this.sumTotal()
    },
    methods:{
        fetchMoney(){
            Money.dispatch('fetchMoney')
            this.moneys = Money.getters.moneys
        },
        sumTotal(){
            Money.dispatch('sumTotal')
            this.total = Money.getters.total
        }
    }
}
</script>

<style>

</style>