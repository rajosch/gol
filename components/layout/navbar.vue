<script>
    import { useRouter, useState } from "#app"
    import { userLogout } from "~/composables/useAuth"
    export default{
        setup(){
          console.log(useState('user').value)
          return {useState, userLogout}
        },  
        data() {
            return {
                isOpen: false
            }
        }
    }
</script>

<template>
    <nav class="flex items-center justify-between flex-wrap bg-dark-gray p-4">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <router-link to="/" 
            class="font-semibold text-xl tracking-tight"
            :class="{'bg-dark-gray-lighter rounded-md p-2': $route.path === '/'}"
          >
        Home</router-link>
      </div>
      <!-- <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 bhover:dark-gray-lighter rounded-md p-2 hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div> -->
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <router-link to="/builder" 
          class="block mt-4 lg:inline-block lg:mt-0 text-white hover:dark-gray-lighter rounded-md p-2 mr-4" 
          :class="{ 'bg-dark-gray-lighter rounded-md p-2': $route.path === '/builder'}">
            Builder
          </router-link>
          <router-link to="/ranking" 
          class="block mt-4 lg:inline-block lg:mt-0 text-white hover:dark-gray-lighter rounded-md p-2 mr-4"
          :class="{ 'bg-dark-gray-lighter rounded-md p-2': $route.path === '/ranking'}">
            Ranking
          </router-link>
        </div>
        <div v-if="useState('user').value" class="relative inline-block text-left">
          <button @click="isOpen = !isOpen" class="relative z-10 inline-block text-sm p-4 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">
            {{useState('user').value.username ? useState('user').value.username : useState('user').value}}
          </button>
          <div v-show="isOpen" @click.away="isOpen = false" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-20 text-white">
            <div class="py-1 rounded-md bg-dark-gray-lighter shadow-xs z-10 border-white border">
                <router-link to="/user/profile" class="block px-4 py-2 text-sm hover:bg-dark-gray">Profile</router-link>
                <router-link to="/user/settings" class="block px-4 py-2 text-sm hover:bg-dark-gray">Settings</router-link>
                <div @click="userLogout" class="block px-4 py-2 text-sm hover:bg-dark-gray cursor-pointer">Logout</div>
            </div>
            </div>
        </div>
        <div v-else class="relative inline-block text-left">
          <router-link 
          class="relative z-10 inline-block text-sm p-4 leading-none border rounded text-white border-white hover:border-transparent hover:text-dark-gray hover:bg-white mt-4 lg:mt-0"
          to="/user/register">
            Sign In
          </router-link>
        </div>
      </div>
    </nav>
</template>