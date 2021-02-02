<template>
  <div class="filter">
    <div class="form-control">
      <input v-model="name" type="text" placeholder="Начните писать имя">
    </div>
    <div class="form-control">
      <select v-model="status">
        <option disabled selected>Выберите статус</option>
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>
    <button class="btn warning" @click="reset" v-if="isActive">Очистить</button>
  </div>
</template>

<script>
import {computed, ref, watch} from "vue";

export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],
  setup(_, {emit}) {
    const name = ref('');
    const status = ref('');
    watch([name, status], ([name, status]) => {
      emit('update:modelValue', {name, status});
    })
    const isActive = computed(() => name.value || status.value);
    const reset = () => {
      name.value = '';
      status.value = null;
    }
    return {
      name, status, isActive, reset
    }
  }
}
</script>

<style scoped>

</style>
