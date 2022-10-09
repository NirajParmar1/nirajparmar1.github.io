<template>
    <div class="row">
        <div class="col">
            <img :src="image" :alt="alt">
        </div>
    </div>
</template>

<script setup>

const galleryImage = "/static/images/gallery/img1.jpg"

const props = defineProps({
        image: String,
        alt: String
    })
</script>

<style scoped>
img{
    max-width: 100%;
    max-height: 100%;
    object-fit: fill;
}
</style>