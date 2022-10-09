<template>
    <div class="card">
        <img :src="image" class="card-img-top" :alt="alt">
            <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <p class="card-text">{{text}}</p>
            </div>
</div>
</template>

<script setup>
    const props = defineProps({
        image: String,
        alt: String,
        title: String,
        text: String
    })
</script>

<style scoped>
    .card-title, .card-text{
        text-transform: capitalize;
        color: black;        
    }
</style>