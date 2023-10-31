

<!-- Cards d'activité -->
<style>

.inner::-webkit-scrollbar {
  display: none;
}
</style>
<div class="overflow-x-auto inner flex space-x-4  pl-[3.75vh]">
@foreach($sortedActivities as $activity)
  <livewire:activity-card :activity="$activity" />
@endforeach
</div>

<script>

</script>







    









 <!-- 


 
 -->