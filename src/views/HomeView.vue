<template>
  <div class="grow bg-lightprimary">
    <div class="hero-section">
      <div class="hero-overlay">
        <div class="container max-w-6xl mx-auto h-screen px-5 grid items-center">
          <div class="max-w-md md:max-w-lg text-center mx-auto">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-0 text-white mt-32" style="text-shadow: 2px 2px 30px #f6c542;">Submit Your Audition Video Now</h2>
            <div class="flex justify-center space-x-0 items-center">
              <img src="@/assets/logo.png" class="h-24 lg:h-48 drop-shadow-[0_35px_35px_rgba(246,197,66,0.25)]">
              <router-link to="/auth/register" class="cursor-pointer py-3 px-6 rounded-lg font-bold bg-secondary hover:bg-yellow-400 hover:shadow-lg text-primary">Get Started</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="p-24 bg-secondary text-primary font-bold text-center mb-20">
      <p class="text-5xl">Space for banner</p>
    </div>

    <div class="container max-w-6xl mx-auto px-5 mb-20">
      <h2 class="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold text-white">Meet the Peeps</h2>
      <div class="flex justify-center flex-wrap gap-y-5 space-x-3 w-full overflow-x-auto mb-10 items-center">
        <a class="tab-button">Contestants</a>
        <a class="tab-button">Judges</a>
        <a class="tab-button">Team</a>
      </div>

      <div class="p-20 text-center">
        <p class="text-3xl">Coming soon...</p>
      </div>
    </div>

    <div class="container max-w-6xl mx-auto px-5">
      <h2 class="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold text-white">Check out performances</h2>
      <div class="flex justify-center flex-wrap gap-y-5 space-x-3 w-full overflow-x-auto mb-10 items-center">
        <a class="tab-button">All</a>
        <a class="tab-button">Blind Auditions</a>
        <a class="tab-button">Battles</a>
        <a class="tab-button">Live shows</a>
        <a class="tab-button">Knockouts</a>
        <a class="tab-button">Finale</a>
      </div>

      <div class="p-20 text-center">
        <p class="text-3xl">Coming soon...</p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style>
.hero-section {
  background-image: url("https://static.euronews.com/articles/stories/06/51/37/92/1024x538_cmsv2_c70d78de-03aa-5b85-9fee-e5506acf47f7-6513792.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-overlay {
  @apply w-full h-full;
  background-color: rgba(22, 47, 69, 0.6);
}

.tab-button {
  @apply px-5 py-2.5 bg-white border-2 border-secondary text-secondary cursor-pointer hover:bg-blue-700 hover:text-white rounded-lg font-bold;
}

</style>
