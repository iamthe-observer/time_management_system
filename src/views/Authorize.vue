<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, sameAs } from '@vuelidate/validators';
import { reactive, computed } from 'vue';
import { User } from '../classes/Users';
// type alias
type StringOrNum = string | number;
type ObjWithName = { name: string; uid: StringOrNum };

const formData: any = reactive({
  email: null,
  password: {
    password: null,
    confirm: null,
  },
});
let rules = computed(() => {
  return {
    email: { required, email, minLength: minLength(10) },
    password: {
      password: { required },
      confirm: { required, sameAs: sameAs(formData.password.password) },
    },
  };
});
const v$ = useVuelidate(rules, formData);
let submitForm: Function = async () => {
  // validates rules obj
  await v$.value.$validate();
  if (!v$.value.$error) {
    console.log(v$.value);
    alert('Submitted!');
  }
};

const user = new User('Ransford', 23, new Date());
let users: User[] = [];
console.log(user.format());
</script>

<template>
  <div class="">
    <form action="">
      <p>
        <input
          type="text"
          class=""
          placeholder="Email"
          v-model="formData.email"
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          class=""
          v-model="formData.password.password"
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Confirm Password"
          class=""
          v-model="formData.password.confirm"
        />
      </p>
      <button @click.prevent="submitForm()">submit</button>
    </form>
  </div>
</template>
