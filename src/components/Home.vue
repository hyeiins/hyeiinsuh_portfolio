<script>
export default {
    data() {
        return {
            msgDynamic: ['understanding user needs,', 'Chatting it up in Developer Code', 'Speacking Designer Lingo'],
        }
    },
    mounted() {
        window.setInterval(() => {
            this.pollMsg();
        }, 3000);
    },
    methods: {
        pollMsg() {
            const first = this.msgDynamic.shift();
            this.msgDynamic = this.msgDynamic.concat(first);
        }
    }
}
</script>

<template>
    <div>
        <h1>HYEI-IN,<br> UIUX Designer<br> with a Frontend Flair</h1>
        <div class="msg-strength">
            <p class="msg-intro">
                Seemlessly switch between
            </p>
            <Transition name="slide-fade" mode="out-in">
                <p class="msg-dynamic" :key="msgDynamic[0]">{{ msgDynamic[0] }}</p>
            </Transition>
        </div>
            <div class="bg-circles">
                <div class="circle1"></div>
                <div class="circle2"></div>
            </div>
    </div>
</template>

<style scoped lang="scss">
h1 {
    position: relative;
    font-family: infinity;
    font-weight: 500;
    margin-top: 150px;
    margin-bottom: 150px;
    line-height: 120%;
    font-size: 1.8rem;
    text-align: center;
    z-index: 200;
}

.msg-strength{
    text-align: center;
    margin-bottom: 300px;
    .msg-intro {
        font-size: 1rem;
        margin-bottom: 1%;
        font-weight: 400;
    }

    .msg-dynamic {
        font-size: 1.2rem;
        font-weight: 500;
        background: #5D61CF;
        background: radial-gradient(circle farthest-corner at left center, #5D61CF 0%, #BA9CE7 35%, #8480FF 66%, #7C92B8 77%, #2AA5BF 85%, #22869B 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}

// animation
.slide-fade-enter-active {
  transition: all .8s ease-in;
}

.slide-fade-leave-active {
  transition: all .8s ease-in;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(15px);
  opacity: 0;
}

.circle1 {
    overflow: hidden;
    position: absolute;
    top: 10%;
    left: 0;
    z-index: 0;
    width: 240px;
    height: 240px;
    flex-shrink: 0;
    border-radius: 240px;
    background: #241E6C;
    filter: blur(100px);
    /* safari doesn't work with some properties without transform: translateZ(0) */
    transform: translateZ(0);
}
.circle2 {
    overflow: hidden;
    position: absolute;
    top: 20%;
    right: 0px;
    z-index: 2;
    width: 240px;
    height: 240px;
    flex-shrink: 0;
    border-radius: 240px;
    background: rgba(70, 123, 139, 0.50);
    filter: blur(100px);
    transform: translateZ(0);

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
