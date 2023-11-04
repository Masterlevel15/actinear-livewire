<!-- Slider de distance -->
<div class="">
    <div class="flex items-center space-x-4 justify-between ">
        <div class="flex space-x-2 items-center">
            <i class="fa-solid fa-location-dot"></i>
            <span class="text-sm font-semibold"> Distance</span>
        </div>
        <span class="text-sm font-light">{{$sliderValue}} km</span>
    </div>
    <input type="range" min="1" max="100" class="slider w-full rounded-full mt-2" id="distanceSlider" value='{{$distance}}' wire:model="sliderValue" wire:change="handleInputChange" style="{{ $sliderStyle }}">

    <style id="sliderStyles">
        /* Style de la piste du slider avant que le thumb ne la dépasse */
        input[type="range"].slider::-webkit-slider-runnable-track {
            background: linear-gradient(to right, #14BA8F 50%, #d3d3d3 50%); /* Couleur de fond de la piste (non remplie) */
            height: 1vh;
            border-radius: 25px;
        }

        /* Style du thumb du slider */
        input[type="range"].slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            background: #FFFFFF !important;
            margin-top: -5px; /* Pour bien centrer le thumb sur la piste */
            box-shadow: none;
            border: none;
        }
    </style>
</div>
<script>

const slider = document.getElementById('distanceSlider');

slider.addEventListener('input', function() {
    const percentage = (this.value - this.min) / (this.max - this.min) * 100;

    // Obtenez la feuille de style et la règle CSS appropriée
    const styleSheet = document.getElementById('sliderStyles').sheet;
    console.log(styleSheet);
    const cssRules = styleSheet.cssRules || styleSheet.rules;

    for(let i = 0; i < cssRules.length; i++) {
        const rule = cssRules[i];
        if (rule.selectorText === 'input[type="range"].slider::-webkit-slider-runnable-track') {
            // Mettez à jour le style de fond avec le pourcentage actuel
            rule.style.background = `linear-gradient(to right, #14BA8F ${percentage}%, #d3d3d3 ${percentage}%)`;
            break;
        }
    }
});
/*
    document.addEventListener('livewire:initialized', () => {
        @this.on('sliderValueChanged', (event) => {
        });
    });
*/
</script>
