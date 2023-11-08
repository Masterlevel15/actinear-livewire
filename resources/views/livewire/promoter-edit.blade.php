<div class="mx-auto">
    <!--Top Bar Action-->
    <div class="fixed top-0 left-0 w-full h-12 bg-black bg-blue-light2 flex items-center justify-between px-[1.8vh] py-[4vh] z-10">
        <!-- Icône flèche à gauche -->
        <button >
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12"></path></svg>
        </button>
        <!-- Icônes dans des bulles blanches à droite -->
        <!-- Icône ReInit-->
        <div class=" w-[5vh] h-[5vh] bg-white p-2 rounded-full flex items-center justify-center mr-4">
            <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
     <!--FIN Top Bar Action-->
    <form wire:submit="save" class="bg-blue-lagon shadow px-4 py-20">
        <!-- Photo de profil -->
        <div class="flex justify-center items-center my-4">
            <div class="relative">
            @if(!$photoIsUploaded && $isPhoto) 
                    <div class="{{ !$photoIsUploaded && !$isPhoto ? 'hidden' : ''}} mb-16 mx-auto text-center">
                    <i class="fa fa-spinner fa-spin fa-2xl"></i>
                    </div>
            @elseif($photoIsUploaded )
                <img id="output" src="{{ $url }}" alt="Photo de profil" class="rounded-full w-32 h-32">
            @else
                <img id="output" src="https://fastly.picsum.photos/id/238/450/200.jpg?hmac=vy5OV4OwcfPBsjgLtZks97bfoIEBProUzHqGcLgmz5E" alt="Photo de profil" class="rounded-full w-32 h-32">
            @endif 
                <!-- Icone de caméra pour changer la photo -->
                <label for="photo-upload" class="absolute bottom-0 right-0 bg-black rounded-full p-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>  
                </label>
                <input type="file" id="photo-upload" class="hidden" wire:change="fileSet" accept="image/*" wire:model="photo">
            </div>
        </div>
        @error('photo')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror
        <!-- FIN Photo de profil -->
        <div class="grid grid-cols-1 gap-6">
            <!--séparation-->
            <hr class="h-[0.05vh] my-6 bg-[#E5E7EB] border-0 dark:bg-gray-300">

            <!-- Password -->
            <a href="{{ route('profile.show') }}" >
                <div class="w-52 px-4 py-2 bg-slate-50
                border border-blue-light text-blue-light rounded hover:bg-blue-light hover:text-slate-50 focus:outline-none">Modifier mot de passe</div>
                <label class="block">
                    <span class="text-gray-700">Mot de passe</span>
                    <input type="password" class="bg-blue-light3 mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="••••••••">
                </label>
            </a>

            <!-- Pseudo -->
            <label class="block">
                <span class="text-gray-700">Email</span>
                <input type="email" name="email" class="bg-blue-light3 mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="johndoe@hotmail.com" wire:model="email">
            </label>
            
            <!-- Pseudo -->
            <label class="block">
                <span class="text-gray-700">Pseudo</span>
                <input type="text" class="bg-blue-light3 mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Abdoullareymane" wire:model="pseudo">
            </label>

            <!-- Categories -->
            <div class="mb-10">
                <div class="flex items-center mb-4 space-x-2">
                    <i class="fa-solid fa-tag"></i>
                    <span class="text-sm font-semibold block"> Catégorie</span>
                </div>
                <div class="grid grid-cols-4 gap-3 text-xs mr-8">
                @foreach($categories as $category)
                    <button type="button"
                    wire:key="{{ $category->id }}" 
                    wire:click.stop="toggleCategory({{ $category->id }})" 
                    class="{{ in_array($category->id, $selectedCategories) ? 'bg-blue-light text-white font-semibold' : 'bg-[#CEE6E7] text-slate-800 border border-blue-light' }} bg-[#CEE6E7] text-slate-800 border border-blue-light w-auto py-2 px-2 rounded-lg text-xs truncate">
                    {{ $category->name }}
                    </button>
                @endforeach 
                </div>
            </div>

            <!-- Intro-->
            <label class="block">
                <span class="text-gray-700">Intro</span>
                <textarea class="bg-blue-light3 mt-1 block w-full rounded-md border-gray-300 shadow-sm" rows="3" placeholder="Aimable et charismatique, je suis avant tout un grand sportif" wire:model="intro"></textarea>
            </label>

            <!-- Description-->
            <label class="block">
                <span class="text-gray-700">Description</span>
                <textarea class="bg-blue-light3 mt-1 block w-full rounded-md border-gray-300 shadow-sm" rows="3" placeholder="J'aime le VTT, les randonnées, ..." wire:model="description"></textarea>
            </label>

            <!-- Prènom-->
            <label class="block">
                <span class="text-gray-700">Prénom</span>
                <input type="text" class="bg-blue-light3 mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Julie" wire:model="firstName">
            </label>
            
            <!-- Nom-->
            <label class="block">
                <span class="text-gray-700">Nom</span>
                <input type="text" class="bg-blue-light3 mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="De La Roche Foucault" wire:model="lastName">
            </label>
            
            <!-- Date de naissance-->
            <label class="block">
                <span class="text-gray-700">Date de naissance</span>
                <input type="date" class="bg-blue-light3 mt-1 block w-full rounded-md border-gray-300 shadow-sm" wire:model="birthDate">
            </label>

            <!-- Ville-->
            <label class="block">
                <span class="text-gray-700">Ville</span>
                <input type="text" class="bg-blue-light3 mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Saint-Germain-de-Tallevende-la-Lande..." wire:model="city">
            </label>
            
            <!-- Pays-->
            <label class="block">
                <span class="text-gray-700">Pays</span>
                <input type="text" class="bg-blue-light3 mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Belgique" wire:model="country">
            </label>

            <div class="flex justify-center">
                <button type="submit" class="px-4 py-2 bg-blue-light text-white rounded hover:bg-blue-light3 hover:border hover:border-blue-light focus:outline-none">Voir mon profil public
                @if(!$photoIsUploaded)
                <span class="{{ !$photoIsUploaded && !$isPhoto ? 'hidden' : ''}}">
                <i class="fa fa-spinner fa-spin"></i>
                </span>
                @endif
                </button>
            </div>
        </div>
    </form>
</div>


