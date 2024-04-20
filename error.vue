<template>
  <div id="__nuxt">
    <MbHeader />

    <template v-if="(error as CustomError)?.statusCode === 404">
      <div class="page page--error">
        <h1>404</h1>

        <p>Page not found</p>

        <button @click="handleError()">
          Go Home
        </button>
      </div>
    </template>
    <template v-else>
      <div>Error...</div>
    </template>

    <MbFooter />
  </div>
</template>

<script lang="ts" setup>
export interface CustomError {
  url: string;
  statusCode: number;
  statusMessage: string;
  message: string;
  description: string;
  data?: any;
}

const error = useError() as Ref<Error | CustomError | null>;

const router = useRouter();

const handleError = () => {

  clearError()

  router.push("/")

};

</script>

<style lang="scss">
@use '~/assets/scss/_helpers.scss' as *;

.page-layout {
  flex: 1;
}

.page--error {
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: rem(16);
}
</style>
