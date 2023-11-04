<button wire:click.prevent="toggleButton"  wire:key="{{ $toggleButtonId }}" class="{{ $isActive ? 'bg-blue-light text-white font-semibold' : 'bg-[#CEE6E7] text-slate-800 border border-blue-light' }} {{$class}}">
    {{$content }}
</button>
