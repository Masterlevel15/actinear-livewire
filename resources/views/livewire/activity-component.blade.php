


<div>
  <!-- Cards d'activité -->
<style>

.inner::-webkit-scrollbar {
  display: none;
}
</style>
  @if($isByDistance)
  <!-- Titre "Activités à proximité" -->
  <h2 class="text-2xl font-bold text-left mt-16 mb-8  pl-[3.75vh] text-white">Activités à proximité</h2>
  @if (session('no-results-distance'))
    <div class="alert alert-success bg-blue-gray p-2 mt-4 text-slate-50 rounded-lg mx-4">
      {{ session('no-results-distance') }}
    </div>
  @endif
  <div class="overflow-x-auto inner flex space-x-4  pl-[3.75vh]">
    @foreach($sortedActivities as $activity)
    <livewire:activity-card :activity="$activity" wire:key="'activity-distance-'.$activity->id"/>
    @endforeach
  </div>
  @endif

  @if($isByDate)
  <!-- Titre "Prochaines activités" -->
  <h2 class="text-2xl font-bold text-left mt-16 mb-8  pl-[3.75vh] text-white">Prochaines activités</h2>
  @if (session('no-results-date'))
    <div class="alert alert-success bg-blue-gray p-2 mt-4 text-slate-50 rounded-lg mx-4">
      {{ session('no-results-date') }}
    </div>
  @endif
  <div class="overflow-x-auto inner flex space-x-4  pl-[3.75vh]">
    @foreach($sortedActivitiesByDate as $activity)
    <livewire:activity-card :activity="$activity"
    wire:key="'activity-date-'.$activity->id"/>
    @endforeach
  </div>
  @endif

  @if($isByFilter)
  <!-- Titre "Activités par filtre" -->
  <h2 class="text-2xl font-bold text-left mt-16 mb-8  pl-[3.75vh] text-white">Activités par filtre</h2>
  @if (session('no-results'))
    <div class="alert alert-success bg-blue-gray p-2 mt-4 text-slate-50 rounded-lg mx-4">
      {{ session('no-results') }}
    </div>
  @endif
  <div class="overflow-x-auto inner flex space-x-4  pl-[3.75vh]">
    @foreach($sortedActivitiesByFilter as $activity)
    <livewire:activity-card :activity="$activity" wire:key="'activity-distance-'.$activity->id"/>
    @endforeach
  </div>
  @endif

</div>








    









 <!-- 


 
 -->