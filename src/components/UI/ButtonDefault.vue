<template>
  <button type="button" class="default-button" @click="$emit('click')">
    <span v-text="text" />
  </button>
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

.default-button {
  padding: 1.5rem 3.2rem;
  border: none;
  border-radius: 3rem;
  background-color: $blue;
  color: $white;
  cursor: pointer;
  font-family: GillSans;
  line-height: 100%;
  text-transform: uppercase;
  transition: 0.3s;
  @include adaptive-font(5.2, 3.1);

  &:hover {
    @include desktop {
      background: rgba(0, 159, 227, 50%);
    }
  }

  span {
    display: block;

    @include tablet-desktop {
      margin-top: 1rem;
    }
  }
}
</style>
