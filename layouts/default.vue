<template>
    <AppNav/>
    <slot/>
    <AppFooter/>
</template>

<script setup>
    useHead({
        title:"Karate-Do Gojukai India - Gujarat",

        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Best Karate Class in Ahmedabad' },
            { hid: 'keywords', name: 'keywords', content: 'karate, karate-do, gojukai, gojuryu, india, ahmedabad, gujarat, best karate class in ahmedabad, self-defense, martial arts, fitness'}
        ],
        
        link:[
            {rel:"icon", type:"image/x-icon", href:"static/images/goju-fist-bg-transparent-640x658.png"},

        ],
        script:[
            {src:"https://use.fontawesome.com/releases/v6.1.0/js/all.js", crossorigin:"anonymous"},
            {src:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"},
            {src:"@static/js/main.js"},

        ],
    });
</script>