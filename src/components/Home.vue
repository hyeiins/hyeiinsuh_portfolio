<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div>
        <h1 class="green">HYEI-IN,<br> UIUX Designer<br> with a Frontend Flair</h1>
        <h3>
            Seemlessly switch between
        </h3>
        <p>understanding user needs,</p>
        <div class="bg-circles">
            <div class="circle1"></div>
             <div class="circle2"></div>
        </div>
        
       <!-- <p>speaking designer lingo,</p>
        <p>and chatting it up in developer code</p> -->
    </div>
</template>

<style scoped>
h1 {
    position: relative;
    font-family: infinity;
    font-weight: 500;
    margin-top: 150px;
    margin-bottom: 150px;
    line-height: 120%;
    font-size: 2rem;
    text-align: center;
    z-index: 200;
}
.circle1 {
    overflow: hidden;
    position: absolute;
    top: 10%;
    left: 0;
    z-index: 0;
    width: 258px;
    height: 258px;
    flex-shrink: 0;
    border-radius: 258px;
    background: #241E6C;
    filter: blur(100px);
    transform: translateZ(0)
}

.circle2 {
    overflow: hidden;
    position: absolute;
    top: 20%;
    right: 0px;
    z-index: 2;
    width: 258px;
    height: 258px;
    flex-shrink: 0;
    border-radius: 258px;
    background: rgba(70, 123, 139, 0.50);
    filter: blur(100px);
    transform: translateZ(0)

}


@media (min-width: 1024px) {
    h1 {
        font-size: 5.5rem;
        line-height: 120%;
        position: relative;
        top: -10px;
    }
}
</style>
