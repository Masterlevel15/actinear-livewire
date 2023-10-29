<div class="w-[5vh] h-[5vh] bg-white rounded-full flex items-center justify-center">        
    @if(auth()->check() && auth()->user()->bookmarkedActivities->contains($activity->id))
        <button wire:click="toggleBookmark">
            <i class="fa-solid fa-bookmark"></i>
        </button>
    @else
        <button wire:click="toggleBookmark">
            <i class="fa-regular fa-bookmark"></i>
        </button>
    @endif
</div>
