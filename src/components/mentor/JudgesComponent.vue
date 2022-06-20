<template>
  <div class="w-full px-5 py-10">
    <h3 class="mb-16 text-4xl font-bold text-center">Judges</h3>
    <div
      class="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 sm:gap-5"
    >
      <div
        class="relative overflow-hidden max-w-sm w-full mx-auto bg-white h-96 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            class="rounded-t-lg rounded-b-lg object-cover w-full h-full"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <router-link
          to="/auth"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Learn More
        </router-link>
        <div class="absolute w-full h-full bg-lightprimary/95 top-0"></div>
      </div>
      <div
        class="relative overflow-hidden max-w-sm w-full mx-auto bg-white h-96 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            class="rounded-t-lg rounded-b-lg object-cover w-full h-full"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div class="absolute w-full h-full bg-lightprimary/95 top-0"></div>
      </div>
      <div
        class="relative overflow-hidden max-w-sm w-full mx-auto bg-white h-96 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            class="rounded-t-lg rounded-b-lg object-cover w-full h-full"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div class="absolute w-full h-full bg-lightprimary/95 top-0"></div>
      </div>
      <div
        class="relative overflow-hidden max-w-sm w-full mx-auto bg-white h-96 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            class="rounded-t-lg rounded-b-lg object-cover w-full h-full"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div class="absolute w-full h-full bg-lightprimary/95 top-0"></div>
      </div>
      <div
        class="relative overflow-hidden max-w-sm w-full mx-auto bg-white h-96 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            class="rounded-t-lg rounded-b-lg object-cover w-full h-full"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div class="absolute w-full h-full bg-lightprimary/95 top-0"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JudgesComponent",
};
</script>
