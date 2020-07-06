<template>
  <section
    id="get-in-touch"
    class="overflow-hidden"
  >
    <v-container>
    <v-row
      class="info white--text"
      no-gutters
    >
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          class="align-center ma-10"
          :src="require('@/assets/face2.jpg')"
          contain
        />
      </v-col>

      <v-col
        class="pa-5"
        cols="12"
        md="6"
      >
        <base-bubble-1 />

        <base-heading class="mb-5">
          Get In Touch💬
        </base-heading>

        <v-card
          class="align-center ma-10"
          color="#26c6da"
          dark
          max-width="400"
        >
          <v-card-title>
            <v-icon
              large
              left
            >
              mdi-email
            </v-icon>
            <span class="title font-weight-light">Mail</span>
          </v-card-title>

          <v-card-text class="headline font-weight-bold">
            jzhou@sps-program.com
          </v-card-text>

        </v-card>
        <v-card
          class="align-center ma-10"
          color="#26c6da"
          dark
          max-width="400"
        >
          <v-card-title>
            <v-icon
              large
            >
              mdi-wechat
            </v-icon>
            <span class="title font-weight-light">WeChat</span>

          </v-card-title>
          <v-img
            :src="require('@/assets/wechat.png')"
            class="align-center ma-3"
            contain
          />
        </v-card>

        <v-hover>

          <v-card
            slot-scope="{ hover }"
            onclick="window.open('https://www.linkedin.com/in/%E4%BD%B3%E6%87%BF-%E5%91%A8-b505221a0/')"
            class="align-center ma-10"
            color="#26c6da"
            dark
            max-width="400"
          >
            <v-card-title>
              <v-icon
                large
              >
                mdi-linkedin
              </v-icon>
              <span class="title font-weight-light">LinkedIn</span>
            </v-card-title>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  LinkedIn👉
                </div>
              </v-expand-transition>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: 'GetInTouch',
  }
</script>
