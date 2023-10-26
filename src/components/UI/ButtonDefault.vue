<template>
  <button type="button" class="default-button" @click="$emit('click')" v-text="text" />
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  }
})

defineEmits(['click'])
</script>

<style scoped lang="scss">
$blue: $BLUE;
$white: $WHITE;
$fontDefault: $FONT_DEFAULT;

.default-button {
  padding: 1.9rem 3rem;
  border: none;
  border-radius: 3rem;
  background-color: $blue;
  color: $white;
  cursor: pointer;
  font-family: $fontDefault;
  line-height: 100%;
  text-transform: uppercase;
  transition: 0.3s;
  @include adaptive-font(4.6, 2);
  letter-spacing: -0.1rem;

  &:hover {
    @include desktop {
      background: rgba(0, 159, 227, 50%);
    }
  }
}
</style>
