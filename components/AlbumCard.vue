<template>
  <div class="album-card">
    <NuxtImg :src="album.coverArt" alt="Album cover" sizes="80px sm:80px md:80px" height="80px" densities="x1 x2" />

    <div class="album-card__details">
      <p>{{ album.name }}</p>

      <p>{{ album.artist }}</p>

      <MbIcon>
        <ArrowRight />
      </MbIcon>
    </div>

  </div>
</template>

<script lang="ts" setup>
import type { Album } from "~/types";

defineProps({
  album: {
    type: Object as PropType<Album>,
    required: true,
  },
});

</script>

<style lang="scss">
.album-card {
  display: flex;
  gap: rem(24);

  cursor: pointer;

  background-color: rgba($color: #ffffff, $alpha: 0.1);
  padding: rem(16) rem(16);
  border-radius: rem(8);

  transition: transform 0.3s;

  img {
    min-height: rem(120);
    min-width: rem(120);
    object-fit: cover;
  }

  &__details {
    flex: 1;

    display: flex;
    flex-direction: column;
    gap: rem(8);
  }

  .mb-icon {
    align-self: flex-end;
  }

  &:hover {
    transform: scale(1.02);
  }

  @include tab-screen {

    .mb-icon {
      display: none;
    }
  }
}
</style>
