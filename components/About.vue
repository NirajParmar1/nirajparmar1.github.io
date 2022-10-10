<template>
    <section class="container section-top text-center" id="about">
        <div class="section-content">
            <h1 class="section-title">About us</h1>
            <h1>Karate-Do Gojukai India (KGI)</h1>
            <h2>India's Foremost karate training institute</h2>
            <h3>(Affiliated to International Karate-Do Gojukai Association (IKGA), Japan)</h3>
                <div class="row person-container container">
                    <div class="col-md-6" v-for="(person, index) in persons" :key="index">
                        <person-card class="person-card" :image = "person.image" :alt="person.alt" :title="person.title" :text="person.text"/>
                    </div>
                </div>
            </div>
    </section>    
</template>

<script setup>

    const persons =[
        {
            image: `/static/images/miyagi.jpg`,
            alt:`miyagi`,
            title:`Chojun Miyagi Sensei`,
            text:`Founder of Goju-Ryu Karate`
        },

        {
            image: `/static/images/gogen-yamaguchi.jpg`,
            alt:`Kaiso`,
            title:`Kaiso Gogen Yamaguchi - "The Cat"`,
            text:`Founder of International Karate-Do Gojukai Association (IKGA)`
        },

        {
            image: `/static/images/Goshi-Yamaguchi.jpg`,
            alt:`Saiko-Shihan`,
            title:`Saiko Shihan Goshi Yamaguchi`,
            text:`President of International Karate-Do Gojukai Association (IKGA)`
        },

        {
            image:`/static/images/gohei-yamaguchi.jpg`,
            alt:`Gohei-Yamaguchi`,
            title: `Shihan Gohei Yamaguchi`,
            text: `Bloc director for I.K.G.A. Asia`
        },

        {
            image: `/static/images/Kaivan1.jpg`,
            alt:`kaivan`,
            title:`Sensei Kaivan Fatakia`,
            text:`Technical Director of Karate-Do Gojukai India (KGI)`
        },

        {
            image: `/static/images/NirajParmar.jpg`,
            alt:`Niraj`,
            title:`Niraj Parmar`,
            text:`Gujarat Representative for Karate-Do Gojukai India (KGI)`
        }
    ]
</script>

<style>

    h1{
        margin-top: 2rem;
        font-size: 2rem;
    }

    h2{
        font-size: 1.5rem;
    }

    .person-container{
        margin-top: 2rem;
    }

    .person-card{
        margin-top: 2rem;
        /* border: solid 5px yellow; */
    }

    .card-title{
        font-size: 1.5rem;
        font-weight: 800;
    }

    .card-text{
        font-size: 1.5rem;
    }

    /* .card-image{
        width: 8rem;
        height: auto;
    } */

</style>