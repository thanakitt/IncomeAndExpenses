<template>
  <div class="home">
    <create-form></create-form>
    <money-table></money-table>
  </div>
</template>

<script>

import CreateForm from '@/components/CreateForm'
import MoneyTable from '@/components/MoneyTable.vue'

export default {
  components: {
    CreateForm,
    MoneyTable
  }
}
</script>

<style>

</style>
