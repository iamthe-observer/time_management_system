<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import Login from '../components/Login.vue';

let currContent = shallowRef(Login);
// type alias
// type StringOrNum = string | number;
// type ObjWithName = { name: string; uid: StringOrNum };

// const LoginData: any = reactive({
//   email: null,
//   password: {
//     password: null,
//     confirm: null,
//   },
// });
// let rules = computed(() => {
//   return {
//     email: { required, email, minLength: minLength(10) },
//     password: {
//       password: { required },
//       confirm: { required, sameAs: sameAs(LoginData.password.password) },
//     },
//   };
// });
// const v$ = useVuelidate(rules, formData);
// let submitForm: Function = async () => {
//   // validates rules obj
//   await v$.value.$validate();
//   if (!v$.value.$error) {
//     console.log(v$.value);
//     alert('Submitted!');
//   }
// };

// const user = new User('Ransford', 23, new Date());
// let users: User[] = [];
// console.log(user.format());
</script>

<template>
  <div
    class="flex-1 p-3 border-none rounded-3xl [max-height:100%] flex items-center justify-center gap-3"
  >
    <div
      class="absolute bg-[#a6d1e68c] w-[40%] h-screen top-0 left-0 bottom-0 rounded-tr-lg rounded-br-lg"
    ></div>
    <keep-alive>
      <component :is="currContent" />
    </keep-alive>
  </div>
</template>
