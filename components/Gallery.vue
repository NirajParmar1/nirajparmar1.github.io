<template>
    <section class="section-top container-fluid text-center" id="gallery">
        <h1 class="section-title">Gallery</h1>
        <div class="row container-fluid">
            <div class="col-md-3 gy-2 gx-2" v-for="(image, index) in Images" :key="index">
                <gallery-image :image="image.image" :alt="Images.alt"/>
            </div>
        </div>
    </section>
</template>

<script setup>
 const Images=[
    {
        image:`/static/images/img1.jpg`,
        alt:`gallery`
    },

    {
        image:`/static/images/img2.jpg`,
        alt:`gallery`
    },

    {
        image:`/static/images/img3.jpg`,
        alt:`gallery`
    },

    {
        image:`/static/images/img4.jpg`,
        alt:`gallery`
    },

    {
        image:`/static/images/img5.jpg`,
        alt:`gallery`
    },

    {
        image:`/static/images/img6.jpg`,
        alt:`gallery`
    },

    {
        image:`/static/images/img7.jpg`,
        alt:`gallery`
    },

    {
        image:`/static/images/img8.jpg`,
        alt:`gallery`
    },

    {
        image:`/static/images/img9.jpg`,
        alt:`gallery`
    },

    {
        image:`/static/images/img10.jpg`,
        alt:`gallery`
    },

    {
        image:`/static/images/img11.jpg`,
        alt:`gallery`
    },

    {
        image:`/static/images/img12.jpg`,
        alt:`gallery`
    },

    {
        image:`/static/images/img13.jpg`,
        alt:`gallery`
    },

    {
        image:`/static/images/img14.jpg`,
        alt:`gallery`
    },

    {
        image:`/static/images/img15.jpg`,
        alt:`gallery`
    },
 ]
</script>