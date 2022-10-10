<template>
    <div class="row g-0">
        <div class="col-md-4 card-image">
            <img :src="image" class="img-fluid" :alt="alt">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <p class="card-text">{{text}}</p>
            </div>
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
        margin-top: 2rem;
    }

    .card-text{
        font-size: 1.5rem;
    }

    img{
        max-width: 100%;
        height: auto;
    }
</style>