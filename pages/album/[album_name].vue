<template>
  <div class="page page--album">
    <div class="page-album__header">
      <div class="blur-layer" />
      <NuxtImg :src="getLocalDynamicImageUrl('images/album-arts', album!.coverArt)"
        :alt="`${album!.name} - Album Art`" />
    </div>

    <div class="page">

      <h1 class="page-album__title">
        {{ album!.name }}
      </h1>

      <div v-if="Object.values(album?.urls ?? {}).length > 0" class="page-album__streaming-links">
        <MbButton v-for="(item, index) in album?.urls" :key="index" class="mb-button--streaming-link"
          @click="redirectToPlatform(album!, index)">
          <template #prefix>
            <NuxtImg :src="getLocalDynamicImageUrl('images/platforms', platformAssetUrl[`${index}`]!)"
              :alt="`${platformAssetUrl[`${index}`]!} - Music Platform Icon`" />
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
            <NuxtImg :src="getLocalDynamicImageUrl('images/platforms', 'youtube.webp')"
              alt="Youtube Icon - Mouli Bheemaneti's Channel" />
          </template>

          Youtube
        </MbButton>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import type { Album } from "~/types";

const router = useRouter();

const album = computed(() => {

  const album = albums.find((album) => album.coverArt === router.currentRoute.value.params.album_name + ".webp");

  if (album === undefined) {

    router.push("/404");

    return;

  }

  return album;

});

const redirectToYoutubeChannel = () => {

  window.open("https://www.youtube.com/bemouli", "_blank");

};

const redirectToPlatform = (album: Album, platform: string) => {

  const streamingService: Record<string, string> = album.urls as Record<string, string> ?? {};

  if (streamingService[`${platform}`] === undefined) return;

  window.open(streamingService[`${platform}`], "_blank");

};

</script>

<style lang="scss">
@use '~/assets/scss/_helpers.scss' as *;

.page--album {
  padding: 0;
}

.page-album {
  &__header {
    height: rem(424);
    background-image: v-bind("album?.coverArt ? `url(${getLocalDynamicImageUrl('images/album-arts', album.coverArt)})` : 'none'");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    img {
      height: 60%;
      margin-bottom: rem(32);
      aspect-ratio: 1/1;

      backdrop-filter: blur(10px);

      border: 10px solid rgba(255, 255, 255, 0.1);

      transition: transform 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }

    @include extra-small-screen {
      height: rem(300);

      img {
        height: 60%;
        margin-bottom: rem(8);
      }
    }
  }

  &__title {
    text-align: center;

    @include extra-small-screen {
      font-size: 1.5rem;
    }
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

  @include large-screen {
    &__streaming-links {
      grid-template-columns: 1fr 1fr 1fr;
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
    background-color: rgba(255, 255, 255, 0.15);

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
