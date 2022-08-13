<script setup lang="ts">
import { shallowRef } from 'vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import 'animate.css';

let currContent: object = shallowRef(Login);

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
  <div class="flex-1 rounded-lg max-h-full relative">
    <div class="w-full h-full bg-gradient-to-br from-prime to-sec">
      <img
        src="../assets/images/anton-maksimov-5642-su-wrkNQmhmdvY-unsplash.jpg"
        class="object-cover opacity-60 w-full h-full"
      />
    </div>
    <Transition
      enter-active-class=" animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
      name="custom-classes"
      mode="out-in"
    >
      <div class="absolute inset-0 ml-20">
        <component
          @register="currContent = Register"
          @login="currContent = Login"
          :is="currContent"
        />
      </div>
    </Transition>
  </div>
</template>
