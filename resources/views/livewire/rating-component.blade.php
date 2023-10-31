<div>
    @for ($i = 1; $i <= $maxRating; $i++)
        <span 
            class="cursor-pointer"
            wire:click="rate({{ $i }})"
        >
            <!--Tant que $i est <= à la note attibué -->
            @if ($i <= $rating)
                <i class="fa-solid fa-star  text-yellow-300"></i>
            @else
                <i class="fa-solid fa-star text-slate-50"></i>
            @endif
        </span>
    @endfor
</div>
