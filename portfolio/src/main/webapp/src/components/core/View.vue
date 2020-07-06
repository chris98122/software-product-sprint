<template>
  <div>
    <welcome />

    <about-me />

    <recent-projects />

    <hobby />
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
      Hobby: () => import('@/components/Hobby'),
      Welcome: () => import('@/components/Welcome'),
      Comments: () => import('@/components/Comments'),
    },
  }
</script>
