<template>
  <section
    id="welcome"
    class="overflow-hidden"
  >
    <v-container>
    <v-row no-gutters>
      <v-col
        cols="6"
        class="align-content-space-between layout wrap"
      >
        <v-card
          flat
            tile
            class="d-flex"
            max-height="800px"
        >
        <v-img
          :src="require('@/assets/face1.jpg')"
          aspect-ratio
          contain
        />
        </v-card>
      </v-col>
      <v-col
        class="align-content-space-between layout wrap"
        cols="6"
        :pa-5="$vuetify.breakpoint.smAndDown"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateY(25%)"
        />

        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="10"
            md="6"
          >
            <base-heading>Welcome🎉</base-heading>
            <base-text>
              This is JiaYi Zhou's Portfolio site.
            </base-text>
            <base-btn
              class="mt-4"
            onclick="window.scrollTo(0, 800)"
            >
              Learn More!
            </base-btn>
          </v-col>
        </v-row>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-col>
    </v-row>
    </v-container>
  </section>
</template>
