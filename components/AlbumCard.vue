<template>
  <ClientOnly>
    <NuxtLink :to="albumRoute" class="album-card">
      <div class="album-card__image">
        <NuxtImg :src="albumArtPath" :alt="`${album.name} - Album Art`" sizes="120px" height="120px"
          densities="x1 x2" />
      </div>

      <div class="album-card__details">
        <p class="album__name">
          {{ album.name }}
        </p>

        <p class="album__artists">
          {{ album.artist }}
        </p>

        <p class="album__release-date">
          {{ formatDate(album.releaseDate) }}
        </p>

        <MbIcon>
          <ArrowRight />
        </MbIcon>
      </div>

    </NuxtLink>
  </ClientOnly>
</template>

<script lang="ts" setup>
import type { Album } from "~/types";

const props = defineProps({
  album: {
    type: Object as PropType<Album>,
    required: true,
  },
});

const albumArtPath = computed(() => getLocalDynamicImageUrl("images/album-arts", props.album.coverArt));

const albumRoute = computed(() => `/album/${props.album.coverArt.replace(".webp", "")}`);

</script>

<style lang="scss">
@use '~/assets/scss/_helpers.scss' as *;

.album-card {
  display: flex;
  gap: rem(24);

  min-height: rem(152);

  cursor: pointer;

  background-color: rgba($color: #ffffff, $alpha: 0.1);
  padding: rem(16) rem(16);
  border-radius: rem(8);

  transition: transform 0.3s;

  &__image,
  &__image img {
    height: rem(120);
    width: rem(120);
    min-height: rem(120);
    min-width: rem(120);
    object-fit: cover;
    aspect-ratio: 1/1;
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

.album {
  &__name {
    font-size: rem(18);
    font-weight: 500;
  }

  &__artists {
    font-size: rem(14);
    font-weight: 400;
  }

  &__release-date {
    font-size: rem(12);
    font-weight: 400;
  }
}
</style>
