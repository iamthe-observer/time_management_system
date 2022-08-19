<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, sameAs } from '@vuelidate/validators';
import { reactive, computed } from 'vue';
import InputField from './InputField.vue';
import Button from 'primevue/button';

const registerData: any = reactive({
  email: null,
  password: { password: null, confirm: null },
});

const rules = computed(() => {
  return {
    email: { required, email },
    password: {
      password: { required, minLength: minLength(8) },
      confirm: {
        required,
        minLength: minLength(8),
        sameAs: sameAs(registerData.password.password),
      },
    },
  };
});

const v$ = useVuelidate(rules, registerData);

const submitForm = async () => {
  let val: any = await v$.value.$validate();
  console.log(val);

  if (!val) {
    v$.value.$errors.forEach(err => {
      alert(err.$message);
    });
  } else {
    alert('submitted!');
  }
};

const emits = defineEmits(['login']);
let go2login = () => {
  emits('login');
};
</script>

<template>
  <div
    class="shadow-2xl flex flex-col items-center justify-evenly text-black rounded-b-3xl outline outline-2 outline-white bg-light w-fit min-h-[90%]"
  >
    <section class="flex flex-col items-center gap-2">
      <!-- LOGO -->
      <div
        class="w-[8rem] aspect-square rounded-full outline outline-white outline-2 bg-sec"
      >
        <img src="" class="object-fill" />
      </div>
      <h1>Welcome to <span>Aktive</span>!</h1>
      <p class="text-xs mt-2">Please Login to your account</p>
    </section>

    <form
      class="flex flex-col py-5 px-7 items-center justify-center gap-3 w-96"
    >
      <div class="flex flex-col gap-2 w-full">
        <InputField
          v-model="registerData.email"
          type="text"
          label-class="w-full text-sm"
          holder=""
          :icon-class="null"
          styling=""
          ><template #label>
            <h5 class="font-bold w-full ml-2 text-gray-400">Email</h5>
          </template></InputField
        >
        <InputField
          v-model="registerData.password.password"
          :type="`password`"
          :label-class="'w-full text-sm'"
          styling="rounded-full"
          holder=""
          :icon-class="null"
          ><template #label>
            <h5 class="font-bold w-full ml-2 text-gray-400">Password</h5>
          </template></InputField
        >
        <InputField
          v-model="registerData.password.confirm"
          :type="`password`"
          :label-class="'w-full text-sm'"
          styling="rounded-full"
          holder="hello"
          :icon-class="null"
          ><template #label>
            <h5 class="font-bold w-full ml-2 text-gray-400">
              Confirm Password
            </h5>
          </template></InputField
        >
      </div>
      <Button
        class="rounded-full bg-prime w-full h-[40px] mt-4"
        @click.prevent="submitForm()"
        label="Signup"
      />
      <span @click="go2login" class="text-md mt-3">Login Here</span>
    </form>
  </div>
</template>
