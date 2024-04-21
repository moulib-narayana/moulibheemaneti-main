<template>
  <div class="page page--album">
    <div class="page-album__header">
      <div class="blur-layer" />
      <NuxtImg :src="getLocalDynamicImageUrl('images/album-arts', album!.coverArt)"
        :alt="`${album!.name} - Album Art`" />
    </div>

    <h1 class="page-album__title">
      {{ album!.name }}
    </h1>

    <div v-if="Object.values(album?.urls ?? {}).length > 0" class="page-album__streaming-links">
      <MbButton v-for="(item, index) in album?.urls" :key="index" class="mb-button--streaming-link">
        <template #prefix>
          <img :src="getLocalDynamicImageUrl('images/platforms', platformAssetUrl[`${index}`]!)">
        </template>

        {{ camelToPascalWithSpaces(index) }}
      </MbButton>
    </div>

    <div v-else class="no-streaming-links">
      <p>
        No platforms available for streaming. Check back later...!!!
        <br>
        Till then, checkout Mouli Bheemaneti's Youtube channel.
      </p>

      <MbButton class="mb-button--streaming-link" @click="redirectToYoutubeChannel()">
        <template #prefix>
          <img :src="getLocalDynamicImageUrl('images/platforms', 'youtube.webp')">
        </template>

        Youtube
      </MbButton>
    </div>

  </div>
</template>

<script lang="ts" setup>
const router = useRouter();

const album = computed(() => {

  return albums.find((album) => album.coverArt === router.currentRoute.value.params.album_name + ".webp");

});

const redirectToYoutubeChannel = () => {

  window.open("https://www.youtube.com/bemouli", "_blank");

};

</script>

<style lang="scss">
@use '~/assets/scss/_helpers.scss' as *;

.page-album {
  &__header {
    height: 300px;
    background-image: v-bind("album?.coverArt ? `url(${getLocalDynamicImageUrl('images/album-arts', album.coverArt)})` : 'none'");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 80%;
      aspect-ratio: 1/1;

      backdrop-filter: blur(10px);

      border: 10px solid rgba(255, 255, 255, 0.1);

      transition: transform 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }

    @include extra-small-screen {
      height: 200px;

      img {
        height: 90%;
      }
    }
  }

  &__title {
    text-align: center;
    // font-size: 2rem;
    margin-top: 1rem;
  }

  &__streaming-links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    row-gap: 1rem;
    margin-top: 1rem;
  }

  @include extra-small-screen {
    &__streaming-links {
      grid-template-columns: 1fr;
    }
  }

  @include small-screen {
    &__streaming-links {
      grid-template-columns: 1fr;
    }
  }
}

.blur-layer {
  width: 100%;
  height: 100%;
  position: absolute;

  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}

.mb-button--streaming-link {
  transition: transform 0.3s;
  width: 100%;
  padding: 0.5rem 1.5rem 0.5rem 0.5rem;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .mb-icon {
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    transform: scale(1.02);

    .mb-icon {
      opacity: 1;
    }
  }
}

.no-streaming-links {
  width: 70%;
  margin: 0 auto;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  p {
    font-style: italic;
    letter-spacing: 0.1rem;
    font-weight: 100;
  }
}
</style>
