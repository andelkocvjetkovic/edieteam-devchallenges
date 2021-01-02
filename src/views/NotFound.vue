<template>
  <main class="min-h-screen">
    <div
      class="font-mono w-screen h-screen grid grid-cols-1 grid-rows-2 gap-y-5 md:grid-rows-1 md:grid-cols-2"
    >
      <div class="w-full h-full px-2 md:flex md:flex-col md:justify-center">
        <img
          src="../assets/Scarecrow.png"
          alt="notfoundImage"
          class="object-center w-full h-72 block md:h-96 lg:w-10/12 lg:m-auto"
        />
      </div>
      <div class="px-6 flex flex-col md:justify-center">
        <h1 class="text-4xl font-bold leading-8 tracking-tighter lg:text-6xl"
          >I have some bad news for you</h1
        >
        <h2
          class="mt-4 font-medium text-sm tracking-tighter leading-4 lg:text-xl"
          >The page are you looking for might be removed or is temporaily
          unavailable</h2
        >
        <button class="mt-8 bg-black w-9/12 p-2 text-white" @click="toHome"
          >Back to Homepage</button
        >
      </div>
    </div>
  </main>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    var router = useRouter();
    function toHome() {
      router.push({
        name: "Home",
      });
    }
    return { toHome };
  },
};
</script>
