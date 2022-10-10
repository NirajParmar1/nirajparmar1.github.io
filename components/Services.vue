<template>
    <section class="container section-top text-center" id="services">
        <h1 class="section-title">services</h1>
        <div class="section-content">
            <div class="row">
                <div class="col-md-4" v-for="(service, index) in Services" :key="index">
                    <service-card :image="service.image" :alt="service.alt" :title="service.title" :text="service.text"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

    const Services=[
        {
            image:`/static/images/dojo_image.jpg`,
            alt:`traditional Karate`,
            title:`traditional goju-ryu karate training`,
            text:`traditional karate techniques like kihon, kata, kumite`
        },

        {
            image:`/static/images/Sports.jpg`,
            alt:`Sports Karate`,
            title:`Sports Karate`,
            text:`Preparing students for various local, state, national, and international competitive tournaments`
        },

        {
            image:`/static/images/dojo_image.jpg`,
            alt:`personal training`,
            title:`personal training`,
            text:`we provide personal karate and fitness training`
        },

        {
            image:`/static/images/self-defense.jpg`,
            alt:`self-defense`,
            title:`self-defense`,
            text:`we periodically organize self-defense classes and workshops`
        },

        {
            image:`/static/images/dojo_image.jpg`,
            alt:`fitness`,
            title:`fitness training`,
            text:`fitness training`
        },

        {
            image:`/static/images/camp.jpg`,
            alt:`camps`,
            title:`Camp Training`,
            text:`We organize various camps every year`
        },

    ]
</script>