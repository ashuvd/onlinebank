<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control" :class="{invalid: fioError}">
      <label for="fio">ФИО</label>
      <input id="fio" type="text" v-model="fio" @blur="fioBlur">
      <small v-if="fioError">{{fioError}}</small>
    </div>
    <div class="form-control" :class="{invalid: phoneError}">
      <label for="phone">Телефон</label>
      <input id="phone" type="text" v-model="phone" @blur="phoneBlur">
      <small v-if="phoneError">{{phoneError}}</small>
    </div>
    <div class="form-control" :class="{invalid: amountError}">
      <label for="amount">Сумма</label>
      <input id="amount" type="text" v-model.number="amount" @blur="amountBlur">
      <small v-if="amountError">{{amountError}}</small>
    </div>
    <div class="form-control">
      <label for="status">Статус</label>
      <select id="status" v-model="status">
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>

    <button class="btn primary" :disabled="isSubmitting">Создать</button>
  </form>
</template>

<script>

import {useRequestForm} from "@/use/request-form";
import {useStore} from "vuex";

export default {
  emits: ['created'],
  setup(_, {emit}) {
    const store = useStore();
    const submit = async (values) => {
      await store.dispatch('request/create', values);
      emit('created');
    }
    return {
      ...useRequestForm(submit)
    }
  }
}
</script>

<style scoped>

</style>
