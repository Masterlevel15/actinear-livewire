<div class="px-[3.8vh] mb-24">
    <!-- Bandelette transparente -->
    <div class="absolute top-0 left-0 w-full h-12 bg-black bg-opacity-50 flex items-center justify-between px-[1.8vh] py-[4vh]">
        <!-- Icône flèche à gauche -->
        <a href="{{ route('homepage') }}">
            <svg  class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12"></path></svg>
        </a>

        <!-- Icônes dans des bulles blanches à droite -->
        <div class="flex space-x-[2vh] pr-2">
            @if(auth()->check() && auth()->user()->id === $promoter->id)
            <!-- Icône edit-->
            <a href="{{ auth()->check() && auth()->user()->id === $promoter->id ? route('promoter-profile-edit', auth()->user()->id ) : route('register') }}">
                <div class=" w-[5vh] h-[5vh] bg-white p-2 rounded-full flex items-center justify-center">
                        <i class="fa-regular fa-pen-to-square"></i>
                </div>
            </a>
            @endif
        </div>
    </div>
    <!--Profil organisateur-->
    <div class="bg-white rounded-full w-24 h-24 mt-24">
        <img src="{{ $promoter->photo ? asset('images/' . $promoter->photo) : 'https://fastly.picsum.photos/id/238/450/200.jpg?hmac=vy5OV4OwcfPBsjgLtZks97bfoIEBProUzHqGcLgmz5E'}}" alt="Nom de l'organisateur" class="w-full h-full object-cover rounded-full">
    </div>
    <!--Age et localité-->
    <div class="mt-4">
        <h1 class="text-3xl font-bold text-slate-50">{{$promoter->pseudo}}</h1>
        <p class="text-slate-50">@if($city){{$city->name}},@endif 
            @if($country){{$country->name}}@endif</p>
    </div>

    <!--Système de notation-->
    <div class="flex text-center mt-4 space-x-4">
        <livewire:rating-component :promoterId="$promoter->id" />
         <!--  
        <p class="text-sm mt-1 text-slate-50">4/5</p>
        --> 
    </div>

    <!--intro Description-->
    <div class="mt-4 ">
        <p class="text-slate-50 text-xl font-semibold">
            {{$promoter->intro}}
        </p>
    </div>

    <!--Description-->
    <div class="mt-4 ">
        <p class="text-slate-50 text-lg font-normal">
            {{$promoter->description}}
        </p>
    </div>

    <!--Catégories-->
    <div class="mt-16">
        <div class="flex items-center space-x-2 text-slate-50">
            <i class="fa-solid fa-tag text-2xl"></i>
            <h2 class="font-bold text-xl">Catégories</h2>
        </div>
        <div class="flex space-x-4 mt-4">
            @foreach($promoter->categories as $category)
            <span class="bg-blue-gray text-slate-50 py-1 px-3 rounded-lg">{{$category->name}}</span>
            @endforeach
            <!-- Répétez ce span pour chaque catégorie -->
        </div>
    </div>

    <!--Activités-->
    <div class="mt-14">
        <div class="flex items-center space-x-2 mb-4">
            <i class="fa-solid fa-box-archive fa-lg text-slate-50"></i>
            <h2 class="font-bold text-xl text-slate-50">Activités</h2>
        </div>
        @foreach($promoter->organizedActivities as $activity)
        <div class="bg-blue-gray px-7 py-10 rounded-lg mb-4">
        
            <img src="{{preg_match('/^https?:\/\//', $activity->image) ? $activity->image : asset('images/' . $activity->image)}}" alt="Description" class="w-24  h-16 rounded-lg mb-4">
            <h3 class="font-bold mb-2 text-slate-50">{{$activity->title}}</h3>
            <div class="flex items-center space-x-2">
                <i class="fa-solid fa-location-pin fa-lg text-green"></i>
                <p class="text-slate-50 mb-2">
                {{$activity->address}}, {{$activity->city->zip_code}} {{$activity->city->name}}, {{$activity->country->name}}</p>
            </div>
            <div class="flex items-center space-x-2">
                <i class="fa-solid fa-calendar text-green "></i>
                <p class="text-slate-50">{{$activity->date->format('d F Y')}}</p>
            </div>
            <!--bouton Infos-->
            <div class="mt-8">
                <a href="{{ route('activity-details', ['id' => $activity->id] ) }}" class="bg-green px-4 py-2 rounded-3xl text-white font-bold w-28 shadow-lg block text-center">Infos</a>
            </div>
           
        </div>
        @endforeach
        <!-- Répétez ce div pour chaque activité -->
    </div>



    {{-- If you look to others for fulfillment, you will never truly be fulfilled. --}}
</div>
