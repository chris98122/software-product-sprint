<template>
  <section
    id="Comments"
    class="overflow-hidden"
  >
  <v-container>
    <v-row
      class="happygreen"
        no-gutters
      >
      <v-col
        cols="1"
     />
        <v-col
          class="align-center"
          cols="3"
        >
          <base-bubble-1 />
      <base-heading class="mb-5">
      Leave Your Comments💬
    </base-heading>

    </v-col>
    <v-col
      class="align-center"
      cols="8"
    >

      <v-card
        class="align-center ma-10"
        color="#fbf5dc"
     light
      >
        <v-card-title>
          <v-icon
            large
            left
          >
            mdi-pen
          </v-icon>
          <span class="title font-weight-dark">any thoughts are welcomed!</span>
        </v-card-title>

        <v-form
          class="align-center ma-10"
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>
          <v-textarea
            v-model="comment"
            :rules="commentRules"
            label="comment"
            required
          ></v-textarea>

          <v-btn
            class="align-center ma-10"
            :disabled="!valid"
            color="#fed21f"
            @click="Submit()"
          >
            Submit
          </v-btn>
        </v-form>
      </v-card>
    </v-col>
    </v-row>
  </v-container>

    <v-container>
    <v-row>
      <v-card
        max-width="850"
        class="mx-auto"
      >
        <v-toolbar
          color="#77944d"
          dark
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Comments</v-toolbar-title>

          <v-spacer></v-spacer>

        </v-toolbar>

        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item
              v-else
              :key="item.title"
            >
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-row>
  </v-container>
  </section>
</template>

<script>
  const axios = require('axios')
  export default {
    name: 'Comments',

    data: () => ({
      valid: true,
      name: '',
      comment: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      commentRules: [
        v => !!v || 'Comment is required',
      ],
      colors: ['#385F73', '#1F7087', '#952175'],
      items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      Submit () {
        console.log(this.name)
        console.log(this.comment)
        axios({
          method: 'POST',
          url: '/comment',
          data: { name: this.name, comment: this.comment },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }).then(function (response) {
          console.log(response)
        })
          .catch(function (error) {
            console.log(error)
          })
          .then(function () {
            // always executed
          })
      },
    },
  }
</script>

<style scoped>

</style>
