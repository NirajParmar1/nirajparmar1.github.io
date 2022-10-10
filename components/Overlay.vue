<template>
    <div class="overlay">
      <div class="row content">
        <div class="circle">
          <img class="image-fluid" src="/static/images/goju-fist.png" alt="Gojukai Logo"/>
        </div>
        <h1 class="title">Karate-Do Gojukai India Gujarat</h1>
        <h2 class="tagline">Best place to learn Goju-Ryu Karate in Ahmedabad</h2>
        <h2>Call us: 9687522200</h2>
      </div>
    </div>
</template>
<style scoped>
.overlay{
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 100%;
    position: relative;
    align-items: center;
    align-content: center;
    overflow: hidden;

    text-align: center;
    
    object-fit: fill;
    background-color: rgba(0, 0, 0, 0.5);
    }

img{
    height: 13rem;
}

.content{
    align-items: center;
    align-content: center;
    text-align: center;
    color: white;
    height: 100vh;
    width: 100%;
}

.circle{
    width: 15rem;
    height: 15rem;
    margin:auto;
    align-items: center;
    align-content: center;
    border-radius: 50%;
    border: 0.5rem solid yellow;
    background-color: rgba(0, 0, 0, 0.1);
}

.title{
    font-size: 5rem;
    text-transform: uppercase;
}

.tagline{
    font-size: 2rem;
    color: yellow;
    text-transform: uppercase;
}

@media only screen and (min-width: 200px) and (max-width: 800px) {

/* .overlay{
        padding-top: 2rem;
    } */

    .title{
        font-size: 2rem;
    }

    .tagline{
        font-size: 2rem;
    }
}
</style>