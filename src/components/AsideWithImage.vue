<template>
  <aside class="lg:mt-10 lg:w-1/2 lg:p-2 ">
    <div
      class="mt-6 relative rounded-2xl overflow-hidden "
      :style="getAspectRatio"
    >
      <slot name="image"></slot>
    </div>
    <figure class="mt-1 font-serif lg:mt-2">
      <h3 class="text-xs text-gray-500 sm:text-sm lg:text-base"
        ><slot name="textH3"></slot
      ></h3>
      <h2 class="text-base tracking-tight sm:text-lg lg:text-2xl"
        ><slot name="textH2"></slot
      ></h2>
    </figure>
  </aside>
</template>

<script>
import { computed, toRefs } from "vue";
export default {
  props: {
    aspectRatio: {
      type: String,
      default: "75%",
    },
  },
  setup(props) {
    var { aspectRatio } = toRefs(props);
    var getAspectRatio = computed(function initAspectRatio() {
      var strApsectRatio = "padding-bottom: " + aspectRatio.value;
      return strApsectRatio;
    });
    return { getAspectRatio };
  },
};
</script>

<style></style>
