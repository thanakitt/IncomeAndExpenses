<template>
  <div>
    <h1>income and expenses</h1>
      <div>
        <label for="name">Name list</label>
        <input type="text" v-model="form.name">
      </div>

      <div>
        <label for="amount">Amount</label>
        <input type="text" v-model="form.amount">
      </div>

      <div>
        <label for="date">Date</label>
        <input type="date" v-model="form.date">
      </div>

      <div>
        <label for="type">Type</label>
        <select v-model="form.type">
          <option value="income">income</option>
          <option value="expenses">expenses</option>
        </select>
      </div>

      <div>
        <button @click="addMoney">Add</button>
      </div>
  </div>
</template>

<script>
import Money from '@/store/money'
export default {
  data(){
    return{
      form:{
        name:'',
        amount:'',
        date:'',
        type:''
      }
    }
  },
  methods:{
    clearForm(){
      this.form={
        name:'',
        amount:'',
        date:null,
        type:''
      }
    },
    addMoney(){
      let payload = {
        name: this.form.name,
        amount: Number(this.form.amount),
        date: this.form.date,
        type: this.form.type
      }
      Money.dispatch('addMoney', payload)
      Money.dispatch('sumTotal')
      this.clearForm()
    },
  },
}
</script>

<style>

</style>
