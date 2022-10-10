<template>
    <div class="vidWrapper"> 
        <video loop muted autoplay>
            <source src="/static/vids/KGIVideo.mp4"/>
        </video>
    </div>
</template>

<style scoped>
.vidWrapper{
       
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 100%;
    position: absolute;
    align-items: center;
    align-content: center;
    overflow: hidden;

    text-align: center;
    display: block;

    object-fit: fill;
}

.vidWrapper video{
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>