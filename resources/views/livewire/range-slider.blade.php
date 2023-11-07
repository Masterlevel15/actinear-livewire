<div x-data="{ sliderValue: @entangle('sliderValue'), distance: @entangle('distance'), percentage: 50 }" x-init="percentage = (sliderValue - 1) / (100 - 1) * 100">

    <div class="flex items-center space-x-4 justify-between ">
        <div class="flex space-x-2 items-center">
            <i class="fa-solid fa-location-dot"></i>
            <span class="text-sm font-semibold"> Distance</span>
        </div>
        <span class="text-sm font-light" x-text="sliderValue + ' km'"></span>
    </div>
    <input 
        type="range" 
        min="1" 
        max="500" 
        class="slider w-full rounded-full mt-2" 
        id="distanceSlider" 
        x-model="sliderValue" 
        wire:input="handleInputChange"
        @input="percentage = (sliderValue - 1) / (100 - 1) * 100"
        style="background: linear-gradient(to right, #14BA8F 50%, #d3d3d3 50%);"
    > 
</div>
    