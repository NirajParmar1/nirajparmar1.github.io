<template>
    <footer class="container-fluid foot fixed-bottom">Developed by: Niraj Parmar Copyright<i class="fas fa-copyright mx-2"></i>{{year}}</footer>
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

</style>