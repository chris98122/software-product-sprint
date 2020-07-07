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
            color="orange"
            @click="Submit"
          >
           Submit
          </v-btn>

          <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
          >
            {{ text }}

              <v-btn
                color="orange"
                text
                @click="snackbar = false"
              >
                Comment Success
              </v-btn>
          </v-snackbar>
        </v-form>
      </v-card>
    </v-col>
    </v-row>
  </v-container>

    <v-container>
    <v-row>
      <v-col
        cols="2"
      />
      <v-col
        class="align-center"
        cols="8"
      >
      <v-card
        max-width="850"
        class="mx-auto"
      >
        <v-toolbar
          color="#77944d"
          dark
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Comments✏️</v-toolbar-title>

          <v-spacer></v-spacer>
          <template v-if="this.items.length === 0">
            <v-toolbar-title>No comment right now✍Write me anything</v-toolbar-title>
          </template>
        </v-toolbar>

        <v-list three-line>
          <template v-for="(item, index) in items">

            <v-list-item
              :key="item"
            >

              <v-list-item-content>
                <v-list-item-title v-html="item.name"></v-list-item-title>
                <v-list-item-subtitle v-html="item.comment"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
  </section>
</template>

<script>
  const axios = require('axios')
  export default {
    name: 'Comments',

    data: () => ({
      snackbar: false,
      timeout: 1000,
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
      ],
    }),
    mounted () { // 获得comment
      this.getComment()
    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      Submit () {
        this.snackbar = false
        console.log(this.name)
        console.log(this.comment)
        axios({
          method: 'POST',
          url: '/comment',
          data: { name: this.name, comment: this.comment },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }).then((response) => {
          //  箭头函数内部的this是词法作用域,是由外层调用者vue来确定,使用箭头函数之后，箭头函数指向的函数内部的this已经绑定了外部的vue实例了
          console.log(response)
          console.log(response.status)
          if (response.status === 200) {
            this.name.clear()
            this.comment.clear()
            this.snackbar = true
            this.getComment()
          }
        })
          .catch(function (error) {
            console.log(error)
          })
          .then(function () {
            // always executed
          })
      },
      getComment () {
        axios({
          method: 'GET',
          url: '/comment',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }).then((response) => {
          console.log(response)
          console.log(response.data)
          if (response.status === 200) {
            this.items = response.data
          }
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
