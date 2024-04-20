<template>
  <header class="header">
    <NuxtImg src="/manifest.png" alt="Mouli Bheemaneti's Brand Logo" sizes="64px" height="50" densities="x1 x2"
      @click="goToHome()" />

    <MbIcon @click="goToSocialAccounts('instagram')">
      <Instagram />
    </MbIcon>
    <MbIcon @click="goToSocialAccounts('spotify')">
      <Spotify />
    </MbIcon>
    <MbIcon @click="goToSocialAccounts('youtube')">
      <Youtube />
    </MbIcon>

  </header>
</template>

<script lang="ts" setup>
const router = useRouter();

const goToHome = () => {

  router.push("/");

}

const goToSocialAccounts = (account: "instagram" | "spotify" | "youtube") => {

  switch (account) {

    case "instagram":
      window.open("https://www.instagram.com/mouli.bheemaneti", "_blank");
      break;

    case "spotify":
      window.open("https://open.spotify.com/artist/2ny7JyTgSvXGCnCJGx3jSt?si=mQ9u7eroSrywq7KCJAzUmg", "_blank");
      break;

    case "youtube":
      window.open("https://www.youtube.com/bemouli");
      break;

    default:
      break;

  }

}

</script>

<style lang="scss">
@use '~/assets/scss/_helpers.scss' as *;

.header {
  display: flex;
  align-items: center;
  padding: 1rem 3rem;

  img {
    cursor: pointer;
    height: 64px;
    width: auto;
    aspect-ratio: 1.28;
    margin-right: auto;
  }

  .mb-icon {
    margin-right: 1.5rem;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }


    @include small-screen {
      margin-right: 2rem;
      ;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  @include extra-small-screen {
    padding: 2rem;
  }
}
</style>
