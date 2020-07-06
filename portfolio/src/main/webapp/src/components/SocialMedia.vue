<template>
  <div>
    <v-btn
      fab
      class="ma-2"
      color="white"
      :small="large"
      onclick="window.open('https://github.com/chris98122')"
    >
      <v-img
        :src="require('@/svg/github.svg')"
        class="shrink"
        contain
        height="50"
      />
    </v-btn>
  </div>
</template>

<script>

  export default {
    props: {
      large: {
        type: Boolean,
        default: false,
      },
    },
    data: () => ({
      items: [],
    }),
  }
</script>
