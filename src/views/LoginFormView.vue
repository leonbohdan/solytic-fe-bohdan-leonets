<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import { useLoginStore } from "@/stores/useLogin";
import { useValidation } from "@/composables/useValidation";
import { RULE } from "@/constants/rules";

const router = useRouter();
const useLogin = useLoginStore();
const { emailValidationRule, passwordValidationRule } = useValidation();

const isShowPassword = ref<boolean>(false);

const loginUserData = ref({
  user: {
    emailAddress: "",
    password: ""
  }
});

const createNewAccount = () => {
  alert("Create new account");
};

watch(
  () => useLogin.userId,
  (userId) => {
    if (userId) {
      router.push({ name: "details" });
    }
  }
);

const handleUserLogin = () => {
  useLogin.loginUser(loginUserData.value);
};

const hintEmailMessage = computed(() => {
  return emailValidationRule(loginUserData.value.user.emailAddress);
});

const hintPasswordMessage = computed(() => {
  return passwordValidationRule(loginUserData.value.user.password);
});

const isDisabledLoginButton = computed(() => {
  return !hintEmailMessage.value.isValid || !hintPasswordMessage.value.isValid;
});
</script>

<template>
  <div class="mx-auto mt-6 font-mono">
    <div
      class="bg-white shadow-md border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 md:max-w-xl mx-auto"
    >
      <form class="space-y-6">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>

        <div>
          <label
            for="email"
            class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
          >
            Your email
          </label>

          <input
            v-model="loginUserData.user.emailAddress"
            data-test="email-field"
            type="email"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Your email"
          />

          <div
            :class="[
              'flex justify-between mt-1 mb-4 mx-2 h-3 text-xs',
              { invisible: !loginUserData.user.emailAddress.length }
            ]"
          >
            <span
              :data-test-rule-indicator="RULE.IsEmail"
              :class="[
                'text-red-700',
                { invisible: hintEmailMessage.isValid },
                `email-hint__rule--${hintEmailMessage.isValid ? 'pass' : 'fail'}`
              ]"
            >
              {{ hintEmailMessage.message }}
            </span>

            <span>{{ loginUserData.user.emailAddress.length }}</span>
          </div>
        </div>

        <div>
          <label
            for="password"
            class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
          >
            Password
          </label>

          <div class="relative mt-2 rounded-md shadow-sm">
            <input
              v-model="loginUserData.user.password"
              data-test="password-field"
              :type="isShowPassword ? 'text' : 'password'"
              name="password"
              id="password"
              placeholder="Password"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />

            <div class="absolute inset-y-0 right-0 flex items-center">
              <button type="button" class="p-1 mr-1" @click="isShowPassword = !isShowPassword">
                <i :class="['mdi', isShowPassword ? 'mdi-eye' : 'mdi-eye-off']"></i>
              </button>
            </div>
          </div>

          <div
            :class="[
              'flex justify-between mt-1 mb-4 mx-2 h-3 text-xs',
              { invisible: !loginUserData.user.password.length }
            ]"
          >
            <span
              :data-test-rule-indicator="RULE.LongerThan8"
              :class="[
                'text-red-700',
                { invisible: hintPasswordMessage.isValid },
                `password-hint__rule--${hintPasswordMessage.isValid ? 'pass' : 'fail'}`
              ]"
            >
              {{ hintPasswordMessage.message }}
            </span>

            <span>{{ loginUserData.user.password.length }}</span>
          </div>
        </div>

        <button
          data-test="submit-button"
          type="button"
          :disabled="isDisabledLoginButton"
          class="disabled:bg-gray-400 w-full text-white bg-blue-700 enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 enabled:dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="handleUserLogin"
        >
          Login to your account
        </button>

        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?
          <a
            href="#"
            class="text-blue-700 hover:underline dark:text-blue-500"
            @click.prevent="createNewAccount"
          >
            Create account
          </a>
        </div>
      </form>
    </div>
  </div>
</template>
