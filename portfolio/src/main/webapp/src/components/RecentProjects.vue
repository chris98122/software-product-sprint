<template>
  <section
    id="recent-projects"
    class="overflow-hidden"
  >
    <v-container>
    <v-row no-gutters>
      <v-col
        class="primary text-center pa-5 white--text"
        cols="12"
        md="6"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateX(25%)"
        />

        <base-heading>
          Recent Projects💻
        </base-heading>
        <v-card color="secondary">
          <v-container class="pa-2">
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-hover>
                  <v-card
                    slot-scope="{ hover }"
                    onclick="window.open('https://github.com/chris98122/verilog_vga_game')"
                    class="mx-auto"
                    color="grey lighten-4"
                    max-width="600"
                  >
                    <v-card-title>
                      <span class="title font-weight-dense"> a Snake🐍 Game On FPGA</span>
                    </v-card-title>
                    <v-img
                      src="@/assets/project1.gif"
                      aspect-ratio ="1"
                      max-height="300"
                      contain
                      right
                    >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%;"
                        >
                          Github👉
                        </div>
                      </v-expand-transition>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >

                <v-hover>
                  <v-card
                    slot-scope="{ hover }"
                    onclick="window.open('https://github.com/chris98122/CA-LAB')"
                    class="mx-auto"
                    color="grey lighten-4"
                    max-width="600"
                  >
                    <v-card-title>
                      <span class="title font-weight-dense">Spark process graphs<br> and monitor cache and memory</span>
                    </v-card-title>
                    <v-img
                      src="@/assets/project2.jpg"
                      aspect-ratio ="1"
                      max-height="300"
                      contain
                      right
                    >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%;"
                        >
                          Github👉
                        </div>
                      </v-expand-transition>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-hover>
                  <v-card
                    slot-scope="{ hover }"
                    onclick="window.open('https://github.com/chris98122/SE347/tree/MapReduce')"
                    class="mx-auto"
                    color="grey lighten-4"
                    max-width="600"
                  >
                    <v-card-title>
                      <span class="title font-weight-dense">A MapReduce framework</span>
                    </v-card-title>
                    <v-img
                      src="@/assets/project3.jpg"
                      aspect-ratio ="1"
                      max-height="300"
                      contain
                      right
                    >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%;"
                        >
                          Github👉
                        </div>
                      </v-expand-transition>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-hover>
                  <v-card
                    slot-scope="{ hover }"
                    onclick="window.open('https://github.com/chris98122/SE347/tree/dpdk_udp/dpdk_UDP')"
                    class="mx-auto"
                    color="grey lighten-4"
                    max-width="600"
                  >
                    <v-card-title>
                      <span class="title font-weight-dense">a DPDK UDP sender/receiver</span>
                    </v-card-title>
                    <v-img
                      src="@/assets/project4.jpg"
                      aspect-ratio ="1"
                      max-height="300"
                      contain
                      right
                    >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%;"
                        >
                          Github👉
                        </div>
                      </v-expand-transition>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>

      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
    <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="4">
          <base-bubble-2
            style="transform: translateX(55%)"
          />
          <base-heading class="info--text">
            A distributed Key-Value Database🧠
          </base-heading>
        </v-col>
    </v-row>
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            onclick="window.open('https://github.com/chris98122/SE347')"
            class="mx-auto ma-lg-10"
            color="grey lighten-4"
          >
            <v-img
              src="@/assets/kvstore.png"
              contain
              right
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  Github👉
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
      </v-container>
  </section>
</template>

<script>
  export default {
    name: 'RecentProjects',

    data: () => ({
      projects: [
        'project1',
        'project2',
        'project3',
        'project4',
      ],
    }),

  }
</script>
<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }
</style>
