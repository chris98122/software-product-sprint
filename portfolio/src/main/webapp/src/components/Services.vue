<template>
  <section
    id="services"
    class="overflow-hidden"
  >
    <v-container>

      <base-bubble-1
        style="transform: rotate(180deg) translateY(25%)"
      />
    <v-row
      class="accent"
      no-gutters
    >
      <v-col
        cols="8"
      >
        <video
          :src="require('@/assets/piano.mp4')"
          contain
          class="d-flex"
          max-width="600"
          controls = "controls"
        >
              您的浏览器不支持 video 标签。
        </video>
      </v-col>

      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="4"
        >
          <base-heading>Have Some Fun🎉</base-heading>
        </v-col>
      </v-row>

      <base-bubble-2
        style="transform: rotate(180deg) translate(-200px, -15%)"
      />
    </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: 'Have Some Fun',

    data: () => ({
    }),
  }
</script>
