<template>
  <footer class="mt-16 w-full bg-black text-gray-50 px-8 flex flex-col h-auto">
    <nav class="mt-8 flex flex-col font-serif space-y-2">
      <router-link to="/" class="active:text-blue-600">Home</router-link>
      <router-link to="/services" class="active:text-blue-600"
        >Services</router-link
      >
      <router-link to="/ourworks" class="active:text-blue-600"
        >Our works</router-link
      >
      <router-link to="/clients" class="active:text-blue-600"
        >Clients</router-link
      >
      <router-link to="/contact" class="active:text-blue-600"
        >Contact</router-link
      >
    </nav>

    <div class="mt-16">
      <h1 class="font-serif text-3xl font-semibold">Edie</h1>
      <section class="mt-2 flex space-x-2">
        <svg
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          class="w-6 h-6 "
        >
          <path
            fill="white"
            d="M449.446 0C483.971 0 512 28.03 512 62.554v386.892C512 483.97 483.97 512 449.446 512H342.978V319.085h66.6l12.672-82.621h-79.272v-53.617c0-22.603 11.073-44.636 46.58-44.636H425.6v-70.34s-32.71-5.582-63.982-5.582c-65.288 0-107.96 39.569-107.96 111.204v62.971h-72.573v82.621h72.573V512H62.554C28.03 512 0 483.97 0 449.446V62.554C0 28.03 28.029 0 62.554 0h386.892z"
          />
        </svg>
        <svg
          viewBox="3 4 26 26"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
        >
          <path
            fill="white"
            d="M11.4688 5C7.918 5 5 7.914 5 11.4688v9.0625C5 24.082 7.914 27 11.4688 27h9.0625C24.082 27 27 24.086 27 20.5312v-9.0624C27 7.918 24.086 5 20.5312 5zm0 2h9.0625C23.0038 7 25 8.996 25 11.4688v9.0625C25 23.0038 23.004 25 20.5312 25h-9.0624C8.996 25 7 23.004 7 20.5312v-9.0624C7 8.996 8.996 7 11.4688 7zm10.4375 2.1875a.902.902 0 00-.9063.9063.902.902 0 00.9063.9062.902.902 0 00.9062-.9063.902.902 0 00-.9063-.9062zM16 10c-3.3008 0-6 2.6992-6 6s2.6992 6 6 6 6-2.6992 6-6-2.6992-6-6-6zm0 2c2.2227 0 4 1.7773 4 4 0 2.2227-1.7773 4-4 4-2.2227 0-4-1.7773-4-4 0-2.2227 1.7773-4 4-4z"
          />
        </svg>
      </section>
      <div class="my-16">
        <the-forms-email></the-forms-email>
      </div>
    </div>
  </footer>
</template>

<script>
import TheFormsEmail from "./TheFormsEmail.vue";
export default {
  components: { TheFormsEmail },
};
</script>

<style></style>
