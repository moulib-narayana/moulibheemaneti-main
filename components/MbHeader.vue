<template>
  <header class="header">
    <!-- <NuxtImg src="@/assets/images/mb-pose.jpg" alt="Mouli Bheemaneti's Brand Logo" sizes="64px" height="50"
      densities="x1 x2" @click="goToHome()" /> -->

    <img src="@/assets/images/mb-logo.svg" alt="Mouli Bheemaneti's Brand Logo" @click="goToHome()">

    <h1 class="header__title" @click="goToHome()">
      Mouli Bheemaneti
    </h1>

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

  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  img {
    cursor: pointer;
    height: 64px;
    width: auto;
    aspect-ratio: 1.28;

    @include small-screen {
      display: none;
    }
  }

  &__title {
    cursor: pointer;
    margin: auto;

    @include small-screen {
      font-size: rem(24);
      margin-left: 0;
      margin-right: auto;
    }

    @include extra-small-screen {
      font-size: rem(24);
      margin-left: 0;
      margin-right: auto;
    }
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
    }

    &:last-child {
      margin-right: 0;
    }
  }

  @include extra-small-screen {
    padding: 1rem 2rem;

    img {
      display: none;
    }
  }
}
</style>
