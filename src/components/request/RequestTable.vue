<template>
  <h4 v-if="!requests.length" class="text-center">Заявок пока нет</h4>
  <table class="table" v-else>
    <thead>
    <tr>
      <th>#</th>
      <th>ФИО</th>
      <th>Телефон</th>
      <th>Сумма</th>
      <th>Статус</th>
      <th>Действие</th>
    </tr>
    </thead>
    <tbody>
    <tr :key="request.id" v-for="(request, i) in requests">
      <td>{{i+1}}</td>
      <td>{{request.fio}}</td>
      <td>{{request.phone}}</td>
      <td>{{currency(request.amount)}}</td>
      <td>
        <app-status :type="request.status" />
      </td>
      <td>
        <router-link v-slot="{navigate}" custom :to="{name: 'Request', params: {id: request.id}}">
          <button class="btn" @click="navigate">Открыть</button>
        </router-link>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import {currency} from "@/utils/currency";
import AppStatus from "@/components/ui/AppStatus";

export default {
  props: ['requests'],
  setup() {
    return {
      currency
    }
  },
  components: {
    AppStatus
  }
}
</script>

<style scoped>

</style>
