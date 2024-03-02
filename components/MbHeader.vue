<template>
  <header class="header">
    <NuxtImg src="/manifest.png" alt="Mouli Bheemaneti's Brand Logo" sizes="64px" height="50" densities="x1 x2" />

    <MbIcon class="header__icon">
      <Instagram />
    </MbIcon>
    <MbIcon>
      <Spotify />
    </MbIcon>
    <MbIcon>
      <Youtube />
    </MbIcon>

  </header>
</template>

<style lang="scss">
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

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
