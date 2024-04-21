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

  </div>
</template>

<script lang="ts" setup>
const router = useRouter();

const album = computed(() => {

  return albums.find((album) => album.coverArt.includes(router.currentRoute.value.params.album_name + ".webp"));

});
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
}

.blur-layer {
  width: 100%;
  height: 100%;
  position: absolute;

  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}
</style>
