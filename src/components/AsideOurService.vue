<template>
  <aside
    class="mt-12 flex flex-col lg:w-1/3 lg:px-6 lg:py-3 lg:items-center transition-transform transition-shadow duration-500 ease-in-out transform  lg:hover:scale-105  lg:hover:shadow-2xl"
  >
    <slot name="svg"></slot>
    <h2 class="mt-2 text-xl font-semibold text-blue-600 lg:text-2xl lg:mt-4">
      <slot name="header"></slot>
    </h2>
    <p
      class="mt-3 text-sm text-gray-500 leading-5 tracking-tight font-serif  lg:text-base lg:w-10/12 lg:text-justify"
    >
      <slot name="text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et possimus at
        eaque eveniet dignissimos autem. Quam expedita dolor quod corporis atque
        possimus neque. Provident sint corrupti sed obcaecati autem repellendus.
      </slot>
    </p>
    <btn-get-started></btn-get-started>
  </aside>
</template>

<script>
import BtnGetStarted from "./BtnGetStarted.vue";
export default {
  components: { BtnGetStarted },
};
</script>

<style></style>
