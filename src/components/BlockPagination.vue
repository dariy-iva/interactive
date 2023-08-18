<template>
  <div class="navigation">
    <button-default text="Назад" class="button-next" @click="$emit('toggleStep', '-1')" />
    <slot />
    <button-default text="Далее" class="button-next" @click="$emit('toggleStep')" />
  </div>
</template>

<script setup>
import ButtonDefault from '@/components/ButtonDefault.vue'

defineEmits(['toggleStep'])
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: auto;
}
</style>
