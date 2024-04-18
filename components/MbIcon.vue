<template>
  <span class="mb-icon">
    <slot />
  </span>
</template>

<script lang="ts" setup>

const { extraSmallScreen } = useScreenWidth();

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

const iconSize = computed(() => {

  if (extraSmallScreen)
    return (props.size - 8) / 16 + "rem";

  return (props.size) / 16 + "rem";

})
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
