<template>
  <nav
    class="border bg-white w-full border-gray-00 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 z-10"
    :class="{
      'absolute top-0 left-0 bg-transparent border-0 homeNav':
        this.$route.name === 'home',
      'sticky top-0': this.$route.name !== 'home',
    }"
  >
    <div
      class="container max-w-7xl flex flex-wrap justify-between items-center mx-auto"
    >
      <router-link to="/" class="flex items-center">
        <img
          src="@/assets/logo.png"
          class="h-48 w-48"
          alt="Dynamic pageant logo"
          :class="{
            'h-24 w-24': this.$route.name === 'dashboard' || 'register || login',
          }"
        />
      </router-link>
      <div class="flex md:order-2">
        <router-link
          to="/auth"
          type="button"
          class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          v-if="isLoggedIn"
          @click="logout"
        >
          Log Out
        </router-link>

        <router-link
          to="/auth"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          v-else
        >
          Sign In
        </router-link>
        <button
          data-collapse-toggle="mobile-menu-4"
          type="button"
          class="inline-flex items-center p-2 text-xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-4"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
        id="mobile-menu-4"
      >
        <ul
          class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium"
        >
          <li>
            <router-link
              to="/"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li>
            <a
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="flex items-center cursor-pointer justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            >
              Mentors
              <svg
                class="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <div
              id="dropdownNavbar"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                class="py-1 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownLargeButton"
              >
                <li>
                  <router-link
                    to="/mentors"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Judges</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/mentors/teams"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Teams</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <router-link
              to="/contestants"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
              >Contestants</router-link
            >
          </li>
          <li v-if="isLoggedIn">
            <router-link
              to="/dashboard"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Dashboard</router-link
            >
          </li>
          <li>
            <router-link
              to="/faqs"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >FAQs</router-link
            >
          </li>
          <li>
            <router-link
              to="/news"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >News</router-link
            >
          </li>
          <li>
            <router-link
              to="/about"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >About</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default {
  name: "NavbarComponent",
  computed: {
    isLoggedIn() {
      return this.$store.getters.getLoggedInState;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("startLoader");
      signOut(auth)
        .then(() => {
          this.$store.dispatch("clearCurrentUser");
          this.$router.push("/");
          this.$store.dispatch("dataAlert", "Successfully logged out");
          this.$store.dispatch("setAlertType", "success");
        })
        .catch((error) => {
          this.$store.dispatch("dataAlert", error);
          this.$store.dispatch("setAlertType", "error");
        })
        .finally(() => this.$store.dispatch("stopLoader"));
    },
  },
};
</script>

<style>
.homeNav a {
  color: #fff !important;
}

.homeNav a:hover {
  @apply text-white;
}

.homeNav #dropdownNavbar a {
  @apply text-lg text-black !important;
}
</style>
