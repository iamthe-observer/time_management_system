<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, sameAs } from '@vuelidate/validators';
import { reactive, computed } from 'vue';

const loginData: any = reactive({
  email: null,
  password: {
    password: null,
    confirm: null,
  },
});

const rules = computed(() => {
  return {
    email: { required, email },
    password: {
      password: { required, minLength: minLength(8) },
      confirm: { required, sameAs: sameAs(loginData.password.password) },
    },
  };
});

const v$l = useVuelidate(rules, loginData);

const submitForm = async () => {
  await v$l.value.$validate();
  if (v$l.value.$error) {
    v$l.value.$errors.forEach(err => {
      console.log(err);
    });
  }
};
</script>

<template>
  <div
    class="shadow-2xl flex justify-end text-black rounded-xl mx-auto w-[95%] h-[90%]"
  >
    <form
      class="min-w-[40%] max-w-[50%] border flex flex-col p-5 items-center justify-center gap-3"
    >
      <label>
        <input
          type="text"
          class=""
          placeholder="email"
          v-model="loginData.email"
        />
      </label>
      <label>
        <input
          type="password"
          class=""
          placeholder="password"
          v-model="loginData.password.password"
        />
      </label>
      <label>
        <input
          type="password"
          class=""
          placeholder="confirm password"
          v-model="loginData.password.confirm"
        />
      </label>
      <button @click.prevent="">submit</button>
    </form>
  </div>
</template>
