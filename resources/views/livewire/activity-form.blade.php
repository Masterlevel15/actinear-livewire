<div class="max-w-sm h-auto mx-auto bg-blue-lagon px-3 py-4 pb-24" x-data="{ imageUrl: '' }">
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
    <!-- Image Card -->
    <form wire:submit="save">
    <div class="shadow-lg rounded-lg overflow-hidden mt-24 w-auto">
        @if(!$photoIsUploaded && $isPhoto) 
        <div class="{{ !$photoIsUploaded && !$isPhoto ? 'hidden' : ''}} mb-16 mx-auto text-center pt-24">
            <i class="fa fa-spinner fa-spin fa-2xl"></i>
        </div>
        @elseif($photoIsUploaded )
        <img id="output" src="{{ $url }}" alt="Photo de profil" class="w-full ">
        @else
        <img id="output" src="https://fastly.picsum.photos/id/238/450/200.jpg?hmac=vy5OV4OwcfPBsjgLtZks97bfoIEBProUzHqGcLgmz5E" alt="Photo de profil" class="w-full">
        @endif 
        <!-- Icon overlay, assuming you have SVGs or an icon font set -->
       
            <!-- Input file caché -->
            <input type="file" wire:model="photo" wire:change="fileSet" x-ref="photo" id="photo" class="hidden"/>

            <!-- Icône de la caméra -->
            <div class="absolute top-28 right-4 p-2" x-on:click="$refs.photo.click()">
                <div class="w-[5vh] h-[5vh] bg-slate-800 p-2 rounded-full flex items-center justify-center">
                    <i class="fa-solid fa-camera text-slate-50"></i>
                </div>
            </div>
    </div>
    <!--séparation-->
    <hr class="h-[0.05vh] my-8 bg-[#E5E7EB] border-0 dark:bg-gray-300">
    <!-- Form -->
        <div class="mt-4 overflow-scroll px-4">
            <div class="mb-8">
                <label for="title" class="block text-sm font-medium text-gray-700">Titre</label>
                <input type="text" id="title" name="title" placeholder="Randonnée charmante au bord d'un lac..." class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm" wire:model="title"/>
            </div>
            
            <!-- Categories -->
                <!-- Catégories -->
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
                    class="{{ in_array($category->id, $selectedCategory) ? 'bg-blue-light text-white font-semibold' : 'bg-[#CEE6E7] text-slate-800 border border-blue-light' }} bg-[#CEE6E7] text-slate-800 border border-blue-light w-auto py-2 px-2 rounded-lg text-xs truncate">
                    {{ $category->name }}
                    </button>
                @endforeach 
                </div>
            </div>

            <!-- Date input -->
            <div class="mb-7">
                <label for="date" class="block text-sm font-medium text-gray-700">Date de l'activité</label>
                <input type="date" id="date" name="date" placeholder="2023-10-27" class="bg-[#CEE6E7] mt-1 block w-full border-0 rounded-md shadow-sm" wire:model="date"/>
            </div>

            <!-- Time input -->
            <div class="mb-7">
                <label for="time" class="block text-sm font-medium text-gray-700">Heure de l'activité</label>
                <input type="time" id="time" name="time" placeholder="12:13" class="bg-[#CEE6E7] mt-1 block w-full border-0 rounded-md shadow-sm"  wire:model="hour"/>
            </div>
            

            <!-- Duration input -->
            <div class="mb-7">
                <label for="duration" class="block text-sm font-medium text-gray-700">Durée de l'activité</label>
                <input type="time" id="duration" name="duration" placeholder="03:00" class="bg-[#CEE6E7] mt-1 block w-full border-0 rounded-md shadow-sm" wire:model="term"/>
            </div>

            <!-- Number of participants input -->
            <div class="mb-7">
                <label for="participants" class="block text-sm font-medium text-gray-700">Nombre de participants</label>
                <input type="number" id="participants" name="participants" placeholder="1" class="bg-[#CEE6E7] mt-1 block w-full border-0 rounded-md shadow-sm" wire:model="participants_number" />
            </div>

            <!-- Address input -->
            <div class="mb-7">
                <label for="address" class="block text-sm font-medium text-gray-700">Adresse</label>
                <input type="text" id="address" name="address" placeholder="Rue de la Belle Garde, 27" class="bg-[#CEE6E7] mt-1 block w-full border-0 rounded-md shadow-sm" wire:model="address"/>
            </div>

            <!-- City input -->
            <div class="mb-7">
                <label for="city" class="block text-sm font-medium text-gray-700">Ville</label>
                <input type="text" id="city" name="city" placeholder="Saint-Germain-de-Tallevende-la-Lande-Vaumont" class="bg-[#CEE6E7] mt-1 block w-full border-0 rounded-md shadow-sm" wire:model="city"/>
            </div>

            <!-- Country input -->
            <div class="mb-7">
                <label for="country" class="block text-sm font-medium text-gray-700">Pays</label>
                <input type="text" id="country" name="country" placeholder="Belgique" class="bg-[#CEE6E7] mt-1 block w-full border-0 rounded-md shadow-sm" wire:model="country"/>
            </div>
            <!-- Description textarea -->
            <div class="mb-8">
                <label for="description" class="block text-sm font-medium text-gray-700">Description de l'activité</label>
                <textarea id="description" name="description" class="bg-[#CEE6E7] border-0 rounded-lg w-full"  rows="10" wire:model="description"></textarea>
            </div>
            <!-- Bouton Submit 
            <button class="bg-green px-4 py-2 rounded-3xl text-white  font-bold w-36 shadow-lg">Save</button>
            -->
            <button type="submit" class="px-4 py-2 bg-blue-light text-white rounded hover:bg-blue-light3 hover:border hover:border-blue-light focus:outline-none" :disabled="{{!$photoIsUploaded && $isPhoto}}">
                Save photo
                @if(!$photoIsUploaded)
                <span class="{{ !$photoIsUploaded && !$isPhoto ? 'hidden' : ''}}">
                <i class="fa fa-spinner fa-spin"></i>
                </span>
                @endif
            </button>
            @error('city')
                <span class="text-red-500">{{ $message }}</span>
            @enderror

        </div>
    </form>
</div>


<script>
    function fileChanged() {
        const photoInput = this.$refs.photo;
        if (photoInput.files && photoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.imageUrl = e.target.result; // Mettre à jour imageUrl pour afficher l'image
            };
            reader.readAsDataURL(photoInput.files[0]); // Convertir l'image en URL de données
        }
    }
</script>