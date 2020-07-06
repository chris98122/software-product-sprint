<template>
  <div>
    <welcome />

    <recent-projects />

    <services />

    <about-me />

    <get-in-touch />

    <comments />
  </div>
</template>

<script>
  export default {
    name: 'CoreView',

    components: {
      AboutMe: () => import('@/components/AboutMe'),
      GetInTouch: () => import('@/components/GetInTouch'),
      RecentProjects: () => import('@/components/RecentProjects'),
      Services: () => import('@/components/Services'),
      Welcome: () => import('@/components/Welcome'),
      Comments: () => import('@/components/Comments'),
    },
  }
</script>
