<template>
  <nav
    class="font-serif flex justify-items-start items-center mt-2 px-3 lg:mt-6 lg:justify-between lg:px-9 xl:px-12 "
  >
    <the-logo> </the-logo>
    <div v-if="getInnerWidth < 1024" class="ml-auto relative z-10">
      <svg viewBox="0 0 40 40" class="w-8 h-8 " @click="animationSvgMenu">
        <line class="crta prva" x1="5" y1="10" x2="35" y2="10" />
        <line class="crta srednja" x1="5" y1="20" x2="35" y2="20" />
        <line class="crta treca" x1="5" y1="30" x2="35" y2="30" />
      </svg>
    </div>
    <div v-else class="myNavActive space-x-9 lg:text-xl  ">
      <router-link to="/">Home</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/ourworks">Our works</router-link>
      <router-link to="/clients">Clients</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
  <teleport to="#modal">
    <transition
      class="myNavActive"
      :css="false"
      mode="out-in"
      @before-enter="initAnimationItems"
      @enter="EnterAnimationItems"
      @leave="LeaveAnimationItems"
    >
      <div
        v-if="isOpen && getInnerWidth < 1024"
        class="font-serif fixed top-0 left-0 w-full h-full bg-gray-300 flex flex-col justify-center items-center space-y-5 text-lg"
        @click.prevent="closeModal"
      >
        <router-link to="/">Home</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/ourworks">Our works</router-link>
        <router-link to="/clients">Clients</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </transition>
  </teleport>
</template>

<script>
import TheLogo from "./TheLogo.vue";
import gsap from "gsap";
import { computed, onMounted, ref, watch } from "vue";
export default {
  components: {
    TheLogo,
  },
  setup() {
    var isOpen = ref(false);
    var tlSvgAnim = undefined;
    var getInnerWidth = computed(function computWidth() {
      return window.innerWidth;
    });
    onMounted(function initGsap() {
      initSvgAnimation();
    });
    watch(isOpen, function(newValue) {
      if (newValue == true) {
        //prevent scroll on showd modal
        document.body.style.position = "fixed";
        document.body.style.top = `${window.scrollY}`;
      } else {
        //var scrollY = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
      }
    });
    function initSvgAnimation() {
      if (getInnerWidth.value < 1024) {
        tlSvgAnim = gsap.timeline({
          defaults: {
            transformOrigin: "50% 50%",
            ease: "slow(0.7, 0.7, false)",
          },
          paused: true,
        });
        tlSvgAnim
          .to(".srednja", { opacity: 0, duration: 0.2 })
          .to(".prva", { rotation: 45, duration: 0.25, y: 10 }, "<.1")
          .to(".treca", { rotation: -45, duration: 0.25, y: -10 }, "<");
      } else {
        return;
      }
    }
    function animationSvgMenu() {
      if (tlSvgAnim.isActive()) {
        return;
      } else {
        if (!isOpen.value) {
          tlSvgAnim.play();
          isOpen.value = true;
        } else if (isOpen.value) {
          tlSvgAnim.reverse();
          isOpen.value = false;
        }
      }
    }
    function initAnimationItems(el) {
      gsap.set(el, {
        xPercent: "-100",
      });
    }
    function EnterAnimationItems(el, done) {
      gsap.to(el, {
        xPercent: "0",
        duration: 0.3,
        ease: "circ.out",
        onComplete: done,
      });
    }
    function LeaveAnimationItems(el, done) {
      gsap.to(el, {
        xPercent: "-100",
        duration: 0.25,
        delay: 0.15,
        ease: "circ.in",
        onComplete: done,
      });
    }
    function closeModal(e) {
      /** Ako hoces da gasis modal na sve klikove uncoment ovu liniju ispdd */
      if (e.target.tagName == "A") {
        animationSvgMenu();
      } else {
        return;
      }
    }
    return {
      animationSvgMenu,
      isOpen,
      initAnimationItems,
      EnterAnimationItems,
      LeaveAnimationItems,
      closeModal,
      getInnerWidth,
    };
  },
};
</script>

<style scoped>
.crta {
  stroke-width: 5px;
  stroke: rgb(0, 0, 0);
  stroke-linecap: round;
}
.myNavActive a.router-link-exact-active {
  @apply text-blue-500;
  @apply font-bold;
}
</style>
