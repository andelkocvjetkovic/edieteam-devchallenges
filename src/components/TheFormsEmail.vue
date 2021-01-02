<template>
  <form class="flex flex-col lg:mt-8 lg:w-1/2" @submit.prevent="submit">
    <label
      for="emailAddr"
      class="text-gray-500 text-xs font-medium lg:text-base"
      >Want us to contact you</label
    >
    <div
      class="mt-2 bg-gray-200 p-1 flex rounded-2xl"
      :class="[emailInput ? 'ring-4  ring-gray-400 shadow-md' : '']"
    >
      <input
        id="emailAddr"
        v-model.lazy="emailAdd"
        class="bg-transparent w-4/6 p-2 rounded-2xl focus:outline-none placeholder-gray-800 text-gray-900"
        type="email"
        placeholder="Your email:"
        minlength="5"
        maxlength="30"
        @focus="emailInput = true"
        @blur="emailInput = false"
      />
      <input
        class="w-2/6 p-3 rounded-2xl "
        :class="[
          isValid
            ? 'bg-blue-600 cursor-pointer'
            : 'bg-red-500 cursor-not-allowed',
        ]"
        type="submit"
        value="Join"
        :disabled="!isValid"
      />
    </div>
    <span v-show="!isValid" class="text-red-500 text-sm ml-2 mt-1 font-serif">
      Check your email
    </span>
  </form>
</template>

<script>
import { ref, watch } from "vue";
export default {
  setup() {
    var emailInput = ref(false);
    var emailAdd = ref("");
    var isValid = ref(true);
    watch(emailAdd, function checkEmail(newValue) {
      if (emailAdd.value.length == 0) {
        isValid.value = true;
      } else if (validateEmail(newValue)) {
        isValid.value = true;
      } else {
        isValid.value = false;
      }
    });
    function submit() {
      if (validateEmail(emailAdd.value)) {
        alert("Thanky you");
        emailAdd.value = "";
      } else {
        isValid.value = false;
      }
    }
    function validateEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    return {
      emailInput,
      emailAdd,
      validateEmail,
      submit,
      isValid,
    };
  },
};
</script>

<style></style>
