<template>
  <span class="mb-icon">
    <slot />
  </span>
</template>

<script lang="ts" setup>

const props = defineProps({
  color: {
    type: String,
    default: "white",
  },

  size: {
    type: Number,
    default: 32,
  }
})

const iconSize = computed(() => (props.size) / 16 + "rem")
</script>

<style lang="scss">
.mb-icon {

  svg {
    height: v-bind('iconSize');
    width: v-bind('iconSize');

    fill: v-bind('color');
  }
}
</style>
