<template>
  <main class="page page-index">
    <div class="jumbotron" />
    <div class="page-index__discography">
      <AlbumCard v-for="album in albums" :key="album.id" :album="album" />
    </div>
  </main>
</template>

<style lang="scss">
@use '~/assets/scss/_helpers.scss' as *;

.page-index {
  display: flex;
  flex-direction: column;
  gap: rem(24);

  &__discography {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40vw, 1fr));
    gap: rem(24);

    @include extra-small-screen {
      grid-template-columns: 1fr;
    }

    @include small-screen {
      grid-template-columns: 1fr;
    }

    @include web-screen {
      grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));
    }

    @include large-screen {
      grid-template-columns: repeat(auto-fill, minmax(25vw, 1fr));
    }
  }
}

.jumbotron {
  background-color: black;
  height: rem(80);
}
</style>
