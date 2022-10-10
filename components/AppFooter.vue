<template>
    <footer class="container-fluid foot fixed-bottom">Developed by: Niraj Parmar Copyright<i class="fas fa-copyright mx-2"></i>{{year}}
        <button>
            <a href="https://wa.me/919687522200" target="_blank">
                <img class="whatsapp" src="/static/images/WhatsApp_icon.png.webp"/>
            </a>
        </button>
    </footer>
</template>

<script setup>
    const year = new Date().getFullYear()
</script>

<style scoped>

.foot{
    background-color: rgba(0, 0, 0, 0.7);
    align-items: center;
    align-content: center;
    text-align: center;
    color: white;
}

.whatsapp{
    width: 4rem;
    position: fixed;
    bottom: 25px;
    right: 20px;
}

</style>