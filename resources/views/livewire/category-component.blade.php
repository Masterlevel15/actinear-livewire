<!-- Catégorie-->
<div class="flex flex-row inner overflow-auto flex flex-nowrap w-auto pl-[3.75vh]">
  <div class="flex space-x-4 pt-4" style="min-width: 50vh;">
    <!-- Catégorie 1 -->
    @foreach($categories as $category)
    <a href="{{ route('activities-by-category', ['categoryId' => $category->id ]) }}">
      <div class="flex flex-col items-center ">
        <div class="relative w-[9vh] h-[9vh] rounded-full overflow-hidden">
          <img src="{{$category->image}}" alt="Catégorie 1" class="w-full h-full object-cover">
        </div>
        <p class="text-center text-white mt-2">{{$category->name}}</p>
      </div>
    </a>
    @endforeach
    <!-- Répétez cette structure pour chaque catégorie -->


<style>

.inner::-webkit-scrollbar {
  display: none;
}
</style>
  </div>
</div>
