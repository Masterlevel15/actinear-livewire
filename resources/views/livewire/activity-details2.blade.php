<div>
<nav class="fixed top-0 left-0 w-full h-[8vh] 
 z-10">
    <button>
    <a :href="">
            <i class="fa-solid fa-arrow-left text-2xl"></i>
    </a>
    </button>
    <button @click="">
            <div x-if="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#4C8798" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[3vh] h-[3vh] text-bandelette-details mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>
            </div>
            <div v-else > 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[3vh] h-[3vh] text-bandelette-details mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>
            </div>
    </button>
    <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[3vh] h-[3vh] text-bandelette-details mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
        </button>
  </nav>
  bookmarks
  <!-- Lien autour de l'image avec le titre de l'activité -->
    <header>
      <img src="https://fastly.picsum.photos/id/238/450/200.jpg?hmac=vy5OV4OwcfPBsjgLtZks97bfoIEBProUzHqGcLgmz5E" alt="Image de l'activité" class="">
      <h1 class="titre font-black"> firstLetterToUppercase </h1>
      <div class="vignette">
        <div class="vignette-content">
          <Icon icon="ri:map-pin-fill" class="w-5 h-5 text-green self-center"/>
          <p> activity[0].cityName </p>
          <p>  formattedDistance  Km</p>
        </div>
      </div>
    </header>
    <!-- Bandelette avec la date et le nom de la catégorie -->
      <div class="bg-bandelette-details text-white p-[10px] py-3 flex justify-between items-center">
        <p>  convertFormatDate(activity[0].date) </p>
        <div class="vignette-cat">
          <p> activity[0].activityCategoryName </p>
        </div>
      </div>
      <section  class="bg-gradient-to-b from-blue-light to-blue-dark py-[7vh]
      px-[3.5vh]">
        <h1 class="text-white font-black text-[1.5em]"> firstLetterToUppercase </h1>
        <p class="py-4 text-white font-semibold"> convertFormatDate(activity[0].date) , à  convertDateTime(activity[0].date) </p>
        <p class="text-white font-extrabold leading-normal mb-16"> activity[0].description </p>
        <div class="flex gap-[2.75vh]">
          <Icon icon="ph:map-pin-fill" class="w-8 h-8 text-green self-center stroke-white stroke-[3vh]"/>
          <!--display: flex;
    gap: 1.25vh-->
          <address class="text-white font-semibold">
             activity[0].address ,<br>
             activity[0].cityName <br>
          </address>
        </div>
        <!--Map-->
        <div class="relative w-full h-auto pt-8 pb-16">
          <div id="map" class="h-[50vh] w-full z-[9] rounded-lg border-2 border-white"></div>
        </div>
        <!--fin Map-->
        <div class="flex-col space-y-1">
          <div class="text-white font-semibold pb-4">Organisé par</div>
          <div style="width: 8vh; height: 8vh;  border-radius: 9999px; background: red; position: relative; background-image: url('https://cdn.vuetifyjs.com/images/cards/docks.jpg'); background-size: cover;" class="text-after ml-6 mb-5">
          </div>
          <a @click="promoterRatingActive= !promoterRatingActive" class="text-white font-extrabold pt-4 pb-1 underline focus::no-underline"> activity[0].userName </a>
          <div class="flex items-center pb-12">
            <svg x-for="" :key="" aria-hidden="true" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star rate</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg x-for="" :key="" aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          </div>
        </div>
        <p class="text-white"> userByActivity  / activity[0].participants_number participants</p>
        <div class="flex" v-if="activityUsersExist">
          <div style="width: 7vh; height: 7vh;  border-radius: 9999px; background: red; position: relative; background-image: url('https://cdn.vuetifyjs.com/images/cards/docks.jpg'); background-size: cover;" class="text-after ml-6" v-for="user in activityUsers" :key="user.id">
          </div>
        </div>
        <button class="text-white bg-green mx-auto w-auto h-auto px-6 py-2 rounded-xl mt-16">Participer</button>
      </section>
        <div  v-if="promoterRatingActive" class="bg-bandelette-details flex flex-col text-center py-8">
          <h2 class="text-white font-semibold">Evaluer l'organisateur</h2>
          <star-rating :initial-rating="organizerRating" :max-rating="5"
          ref="starRating" class="py-3" ></star-rating>
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
          <textarea id="message" rows="4" class="block p-2.5 w-64 mx-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8" placeholder="Write your thoughts here..." x-model=""></textarea>

          <button @click="" class="text-white bg-green mx-auto w-auto h-auto px-6 py-2 rounded-xl">Soumettre</button>
        </div>
        </div>