<template>
  <the-nav></the-nav>
  <router-view v-slot="{ Component }">
    <transition
      :css="false"
      mode="out-in"
      @before-enter="initAnimation"
      @enter="beginAnimation"
      @leave="finishAnimation"
    >
      <component :is="Component" />
    </transition>
  </router-view>
  <the-footer></the-footer>
</template>

<script>
import gsap from "gsap";
import TheFooter from "./components/TheFooter.vue";
import TheNav from "./components/TheNav.vue";
export default {
  components: { TheNav, TheFooter },
  setup() {
    function initAnimation(el) {
      gsap.set(el, { opacity: 0 });
    }
    function beginAnimation(el, done) {
      gsap.to(el, {
        opacity: 1,
        duration: 0.25,
        ease: "power2.out",
        onComplete: done,
      });
    }
    function finishAnimation(el, done) {
      gsap.to(el, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: done,
      });
    }

    return { initAnimation, beginAnimation, finishAnimation };
  },
};
TheFooter;
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply min-h-screen;
  @apply bg-gray-50;
  @apply overflow-x-hidden;
  scroll-behavior: smooth;
}
body {
  @apply w-full;
}
</style>
