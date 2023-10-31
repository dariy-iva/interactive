<template>
  <div class="pagination">
    <button-default v-if="stepNum !== 25" text="Назад" class="button-next" @click="$emit('toggleStep', '-1')" />
    <slot />
    <button-default
      :text="stepNum === 25 ? 'Пройти тест' : stepNum === 27 ? 'Завершить' : 'Далее'"
      class="button-next"
      @click="$emit('toggleStep')"
    />
  </div>
</template>

<script setup>
import ButtonDefault from '@/components/UI/ButtonDefault.vue'

defineProps({
  stepNum: {
    type: Number,
    default: 0
  }
})

defineEmits(['toggleStep'])
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}
</style>
