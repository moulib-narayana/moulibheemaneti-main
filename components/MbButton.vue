<template>
  <button class="mb-button">
    <span v-if="$slots.prefix" class="mb-button__prefix">
      <slot name="prefix" />
    </span>

    <span>
      <slot />
    </span>

    <span class="mb-button__suffix">
      <slot name="suffix">
        <MbIcon>
          <ArrowRight />
        </MbIcon>
      </slot>
    </span>
  </button>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.mb-button {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  cursor: pointer;
  transition: background-color 0.3s;

  $prefix-size: 3rem;

  min-width: 10rem;
  width: 20rem;

  &__prefix {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    height: $prefix-size;
    width: $prefix-size;
    border-radius: 50%;
    max-width: $prefix-size;
    max-height: $prefix-size;
  }
}
</style>
