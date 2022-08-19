<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import { reactive, computed } from 'vue';
import InputField from './InputField.vue';
import Button from 'primevue/button';

type StringNull = string | null;
interface UserLogin {
  email: StringNull;
  password: StringNull;
}

const loginData: UserLogin = reactive({
  email: null,
  password: null,
});

const rules = computed(() => {
  return {
    email: { required, email },
    password: { required, minLength: minLength(8) },
  };
});

const v$l = useVuelidate(rules, loginData);

const submitForm = async () => {
  let val: any = await v$l.value.$validate();
  console.log(val);

  if (!val) {
    v$l.value.$errors.forEach(err => {
      alert(err.$message);
    });
  } else {
    alert('submitted!');
  }
};

interface registerEmit {
  (e: 'register'): void;
}
// const emit = defineEmits(['register']);
const emit = defineEmits<registerEmit>();

let go2register = () => {
  emit('register');
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
          v-model="loginData.email"
          type="text"
          label-class="w-full text-sm"
          styling="rounded-full"
          holder=""
          :icon-class="null"
          ><template #label>
            <h5 class="font-bold w-full ml-2 text-gray-400">Email</h5>
          </template></InputField
        >
        <InputField
          v-model="loginData.password"
          type="password"
          label-class="w-full text-sm"
          styling="rounded-full"
          holder=""
          :icon-class="null"
          ><template #label>
            <h5 class="font-bold w-full ml-2 text-gray-400">Password</h5>
          </template></InputField
        >
      </div>
      <Button
        class="rounded-full bg-prime w-full h-[40px] mt-4"
        @click.prevent="submitForm()"
        label="Login"
      />
      <span class="text-prime text-xs">Forget password?</span>
      <span @click="go2register" class="text-md mt-3">Wanna Signup?</span>
    </form>
  </div>
</template>
