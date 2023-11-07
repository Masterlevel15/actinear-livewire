<div class="fixed inset-x-0 bottom-0 bg-slate-50 shadow ">
  <nav class="flex justify-around items-center h-14 text-slate-800">
    <!-- Home Icon -->
    <a href="{{ route('homepage') }}" class="flex place-items-center ">
        <i class="fa-solid fa-house fa-lg"></i>
    </a>
    
    <!-- Profile Icon -->
    <a href="{{ route('profile.show') }}" class="">
        <i class="fa-solid fa-user fa-lg"></i>
    </a>

    <!-- Create Icon -->
    <a href="{{ route('activity-create') }}" class="">
        <i class="fa-solid fa-square-plus fa-xl"></i>
    </a>
    
    <!-- Bookmark Icon -->
    <a href="{{ route('activities-book', auth()->id()) }}" class="">
        <i class="fa-solid fa-bookmark fa-lg"></i>
    </a>
    
    <!-- Settings Icon -->
    <a href="/settings" class="">
        <i class="fa-solid fa-gear fa-lg"></i>
    </a>
  </nav>
</div>
