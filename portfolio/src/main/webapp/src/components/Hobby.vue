<template>
  <section
    id="services"
    class="overflow-hidden"
  >
    <v-container
      class="accent"
    >

      <base-bubble-1
        style="transform: rotate(180deg) translateY(25%)"
      />
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
    <v-row
      align="center"
      justify="center"
      no-gutters
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
    </v-row>

      <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="6"
      >
        <v-img
          :src="require('@/assets/hobby1.jpg')"
          class="align-center ma-3"
          max-height="500"
          contain
        />
      </v-col>
      <v-col
        cols="6"
      >
        <v-img
          :src="require('@/assets/hobby2.jpg')"
          class="align-center ma-3"
          max-height="500"
          contain
        />
      </v-col>
    </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="6"
        >
          <v-img
            :src="require('@/assets/hobby3.gif')"
            class="align-center ma-3"
            style="transform: rotate(270deg); max-height: 700px"
            contain
          />
        </v-col>
      </v-row>
      <base-bubble-2
        style="transform: rotate(180deg) translate(-200px, -15%)"
      />
    </v-container>
  </section>
</template>

<script>
  export default {
    name: 'Hobby',

    data: () => ({
    }),
  }
</script>
