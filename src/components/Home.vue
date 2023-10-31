<script>
import ProjectList from "./partial/ProjectList.vue";

export default {
    components: {
        ProjectList
    },  
    data() {
        return {
            msgDynamic: ['understanding user needs,', 'chatting it up in Developer Code', 'speaking Designer lingo'],
            mouseX: 0,
            mouseY: 0,
            xp: 0,
            yp: 0,
            isFaded: false,
        }
    },
    computed: {
        circleStyle() {
        return {
            left: this.xp + "px",
            top: this.yp + "px",
        };
        },
    },
    mounted() {
        window.setInterval(() => {
            this.pollMsg();
        }, 3000);
    },
    mounted() {
        document.addEventListener("mousemove", this.handleMouseMove);
    },
    methods: {
        pollMsg() {
            const first = this.msgDynamic.shift();
            this.msgDynamic = this.msgDynamic.concat(first);
        },
        handleMouseMove(e) {
            this.mouseX = e.pageX - 80;
            this.mouseY = e.pageY - 80;

            this.xp += (this.mouseX - this.xp) / 6;
            this.yp += (this.mouseY - this.yp) / 6;
        },
        mouseEnter() {
            this.isFaded = false;
            console.log(this.isFaded)
        },
        mouseLeave() {
            this.isFaded = true;
            console.log(this.isFaded)
        },
    }
}
</script>

<template>
    <div>
        <div class="circle fade-out-element" :style="circleStyle"  :class="{ 'faded': isFaded }"></div>
        <h1  @mousemove="handleMouseMove" @mouseleave="mouseLeave" @mouseenter="mouseEnter" class="txt-heading">HYEI-IN, <br> UIUX Designer <br> with a Frontend Flair</h1>
       
        <div class="section-intro d-lg-flex">
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
            
        <div class="section-project">
            <h2>Project</h2>
            <project-list></project-list>
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
    font-size: 2rem;
}

.section-intro{
    text-align: center;
    margin-bottom: 400px;
    
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

.section-project {
    margin-bottom: 300px;
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

// bg
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
    top: 15%;
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

h2 {
    text-align: center;
    margin-bottom: 50px;
}

@media (min-width: 600px) {
    h1 {
        font-size: 3.5rem;
    }

    @-webkit-keyframes bgEffect {
        0%   {background: rgba(36, 30, 108, 0.50); width:20rem; height:20rem;}
        25%  {background: rgba(70, 123, 139, 0.50); width:22rem; height:22rem;}
        50%  {background: rgba(70, 123, 139, 0.50); width:19rem; height:19rem;}
        75%  {background: rgba(36, 30, 108, 0.50); width:23rem; height:23rem;}
        100% {background: rgba(70, 123, 139, 0.50); width:21rem; height:21rem;}
    }

    @-webkit-keyframes bgEffect2 {
        0%   {background: rgba(139, 70, 103, 0.50); width:22rem; height:22rem;}
        25%  {background: rgba(70, 123, 139, 0.50); width:20rem; height:20rem;}
        50% {background: rgba(139, 70, 103, 0.50); width:23rem; height:23rem;}
        75% {background: rgba(70, 123, 139, 0.50); width:19rem; height:19rem;}  
        100% {background: rgba(139, 70, 103, 0.50); width:21rem; height:21rem;}
    }

    .circle1 {
        top: 10%;
        left: 10%;
        width: 22rem;
        height: 22rem;
        animation-name: bgEffect;
        animation-duration: 5s;
        animation-iteration-count: infinite;
    }

    .circle2 {
        top: 10%;
        right: 10%;
        width: 24rem;
        height: 24rem;
        animation-name: bgEffect2;
        animation-duration: 8s;
        animation-iteration-count: infinite;
    }
}

@media (min-width: 1024px) {
    .circle1 {
        display: none;
    }

    .circle2 {
        display: none;
    }

    h1 {
        vertical-align: center;
        font-size: 5.5rem;
        line-height: 120%;
        color: white; /* Element is white */
        mix-blend-mode: difference;
        top: -120px;
        cursor: default;
    }

    .circle {
        width: 200px;
        height: 200px;
        background: white;
        border-radius: 50%;
        position: absolute;
        z-index: 3;
        box-shadow:
        0 0 40px rgba(139, 70, 103, 0.50),
        
        0 0 60px rgba(139, 70, 103, 0.50);
        animation: pulse 2s infinite;
    }

    @-webkit-keyframes @keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}

    .section-intro {
        justify-content: center;

        .msg-intro {
            font-size: 24px;
            margin-right: 1%;
        }

        .msg-dynamic {
            font-size: 24px;
        } 
    }
    .fade-out-element {
        /* Add any necessary styles here */
        transition: opacity 0.5s;
    }
    .faded {
        opacity: 0;
    }
}
</style>
