<div>
    <h1>{{ $count }}</h1>
 
    <button wire:click="increment">+</button>
 
    <button wire:click="decrement">-</button>

    <script>
        $this->emit('monEvenement', $count);
    </script>
</div>