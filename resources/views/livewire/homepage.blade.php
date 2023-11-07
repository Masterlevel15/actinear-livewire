<div class="container">
    <!--Authentification -->
    @if(auth()->check())
        <div class="flex justify-around mt-4">
            <a href="{{ route('profile.show') }}" class="{{ request()->routeIs('profile.show') ? 'active-class' : '' }}">
                    <div class="w-auto">
                        <div class="font-medium text-base text-gray-100">{{ Auth::user()->name }}</div>
                        <div class="font-medium text-sm text-gray-500">{{ Auth::user()->email }}</div>
                    </div>
            </a>

            <form method="POST" action="{{ route('logout') }}" x-data class="w-auto">
                @csrf
                <a href="{{ route('logout') }}"
                @click.prevent="$root.submit();" class="text-gray-100">
                    {{ __('Log Out') }}
                </a>
            </form>
        </div>
    @else
        @if (Route::has('login'))
            <div class="sm:fixed sm:top-0 sm:right-0 p-6 text-right z-10">
                
                    <a href="{{ route('login') }}" class="font-semibold text-gray-600 hover:text-gray-100 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log in</a>

                @if (Route::has('register'))
                    <a href="{{ route('register') }}" class="ml-4 font-semibold text-gray-600 hover:text-gray-100 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register</a>
                @endif
            </div>
        @endif
    @endif
    <!-- FIN Authentification -->
    
    <!-- En-tête avec titre de l'application -->
    <h1 class="text-4xl font-bold text-left my-[6.5vh]  text-slate-50 pl-[3.75vh]">Actinear</h1>
    <div class="flex items-center justify-between pr-[4.5vh] text-slate-50 pl-[3.75vh] pb-[3vh]">
        <livewire:search-bar-component2/>
        <!-- Icône filtre -->
        <a href="{{ route('filter', ['categories']) }}">
            <i class="fa-solid fa-filter fa-flip-horizontal text-xl"></i>
        </a>
        <!-- Icône carte -->
        <i class="fa-solid fa-map text-xl"></i>
    </div>
    <livewire:category-component />
    
    <livewire:geo-location-component />
    
</div>