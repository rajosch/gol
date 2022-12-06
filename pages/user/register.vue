<script lang="ts">
import { useState } from "#app";
import { userLogin } from "~/composables/useAuth";
import { registerUser } from "~~/composables/useAuth";

type Data = {
  hasAccount: boolean;
};

type Methods = {
  postRegisterForm: (username: string, email: string, password: string) => void;
  postLoginForm: (email: string, password: string) => void;
};

export default {
  setup(): {
    useState: typeof useState;
    postRegisterForm: (username: string, email: string, password: string) => void;
    postLoginForm: (email: string, password: string) => void;
  } {
    async function postRegisterForm(username: string, email: string,password: string) {
      const result = await registerUser(username, email, password);
    }

    async function postLoginForm(email: string, password: string) {
      await userLogin(email, password);
    }

    return { useState, postRegisterForm, postLoginForm };
  },
  data(): Data {
    return {
      hasAccount: true
    };
  },
};
</script>


<template>
  <div class="container mx-auto px-4">
    <form class="mx-auto mt-8 max-w-lg bg-dark-gray p-6 rounded-md" @submit.prevent="hasAccount? postLoginForm(email, password) : postRegisterForm(username, email, password)">
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-dark-gray leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          v-model="email"
          autocomplete="email"
          required
        />
      </div>
      <div class="mb-4" v-if="!hasAccount">
        <label class="block text-white text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-dark-gray leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          v-model="username"
          autocomplete="username"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-dark-gray leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          v-model="password"
          autocomplete="new-password"
          name="password"
          required
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          v-if="!hasAccount"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register
        </button>
        <button
          v-else
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
        <div
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
          @click="hasAccount = !hasAccount"
        >
          <span v-if="!hasAccount">Login here!</span>
          <span v-else>Register a new account here!</span>
      </div>
      </div>
    </form>
  </div>
</template>