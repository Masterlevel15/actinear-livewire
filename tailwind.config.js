import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        "./node_modules/flowbite/**/*.js",
    ],

    theme: {
        extend: {
            colors: {
                'blue-lagon': '#EBF4F5',
                'blue-light': '#7BBFBF',
                'blue-light2': '#B4D9D9',
                'blue-light3': '#CEE6E7',
                'blue-dark': '#5299BC',
                'blue-dark2': '#4B8799',
                'blue-gray': '#4C8798',
                'blue-card-background': '#4D8798',
                'blue-input-form': '#D1E7E8',
                'green': '#00CA8A',
                'green2':'#03CB8B',
                'bandelette-details': '#4C8798',
                'white': '#F8FAFC',
                
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms, typography, require('flowbite/plugin')],
};
