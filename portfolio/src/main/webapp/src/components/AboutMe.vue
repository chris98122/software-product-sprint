<template>
  <section
    id="about"
    class="overflow-hidden"
  >
    <v-container>
    <v-row
      class="white"
      no-gutters
    >
      <v-col
        class="pa-5"
        cols="12"
        md="6"
      >
        <base-bubble-1 style="transform: translate(5%, -5%)" />

        <base-heading class="info--text">
          About Me🤔
        </base-heading>

        <v-row>
        <v-col    cols="8">
        <base-text class="mb-5">
           Major in Software Engineering<br>
           SJTU<br>
          Graduate in 2021
        </base-text>
        </v-col>
        <v-col   cols="4">
          <v-img
            :src="require('@/assets/sjtu.jpg')"
            class="align-center ma-3"
            contain
            height="60%"
          />
        </v-col>
        </v-row>

        <base-subheading class="info--text">
          Skills😎
        </base-subheading>
        <v-row>
        <v-col   cols="8">
        <base-text class="mb-5">
          Writes C++ ,Java, JavaScript<br>
          Currently learning Go
        </base-text>
        </v-col>
          <v-col   cols="4">
            <v-img
              :src="require('@/assets/go.png')"
              class="align-center ma-3"
              contain
              height="60%"
            />
          </v-col>
         </v-row>
        <v-alert
          outlined
          color="info"
        >
          <v-row
            v-for="(skill, i) in skills"
            :key="i"
            style="color: #69A1BB;"
          >
            <v-col
              class="text-uppercase"
              cols="6"
              v-text="skill.name"
            />

            <v-col
              class="text-right"
              cols="6"
              v-text="`${skill.value}%`"
            />

            <v-progress-linear
              :value="skill.value"
              color="info"
              height="8"
            />
          </v-row>
        </v-alert>
      </v-col>

      <v-col
        md="6"
      >
        <v-row><br><br><br><br><br></v-row>
        <v-row>
        <v-img
          :src="require('@/assets/tudou1.gif')"
          class="align-center ma-lg-10"
          contain
          height="50%"
        />
        </v-row>
      </v-col>
    </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    data: () => ({
      skills: [
        {
          name: 'Operating System',
          value: 80,
        },
        {
          name: 'Web Development',
          value: 75,
        },
        {
          name: 'System Programming',
          value: 90,
        },
      ],
    }),
  }
</script>
