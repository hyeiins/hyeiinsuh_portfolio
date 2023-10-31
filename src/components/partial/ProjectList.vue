<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // import function to register Swiper custom elements
    import { register } from 'swiper/element/bundle';

    // register Swiper custom elements
    register();

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/effect-coverflow';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation'

    // import required modules
    import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

    
    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        data () {
            return {

            }
        },
        computed: {
            imageSrc() {
                return new URL(`./../../assets/images/cover.png`, import.meta.url).href;
            },
            imageSrc2() {
                return new URL(`./../../assets/images/itda_cover.png`, import.meta.url).href;
            },
            imageSrc3() {
                return new URL(`./../../assets/images/voyage_cover.png`, import.meta.url).href;
            }
        },  
        setup() {
            return {
                modules: [EffectCoverflow, Pagination, Navigation],
            };
        
        },
    };
</script>

<template>
    <swiper-container
        class="d-md-none"
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
            rotate: 40,
            stretch: 10,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        }"
        :spaceBetween="-60"
        :pagination="{
            clickable: true,
        }"
        :modules="modules"
        id="mySlider"
    >
        <swiper-slide class="slides"> 
            <v-card
                color="#141414"
            >
                <v-img
                class="align-end text-white"
                :src="imageSrc"
                cover
                /> 
                <v-card-title>Youtube Music Renewal</v-card-title>
                <v-card-subtitle>
                08.07.2023 - 10.04.2023
                </v-card-subtitle>

                <v-card-text>
                    <div>50% Faster in Exploring music, and positive response about personalized recommendations and 4.2 Satisfaction after renewal</div>
                </v-card-text>

                <div class="px-4">
                    <v-chip-group>
                        <v-chip>UI/UX</v-chip>

                        <v-chip>Renewal</v-chip>

                        <v-chip>Group Project</v-chip>
                    </v-chip-group>
                </div>

                <v-card-actions>
                    <v-btn color="orange" href="https://www.behance.net/gallery/181651261/YOUTUBE-MUSIC-RENEWAL-" target="_blank">
                        Read More
                    </v-btn>
                </v-card-actions>
            </v-card>
        </swiper-slide>
        <swiper-slide class="slides"> 
            <v-card
                color="#141414"
            >
                <v-img
                class="align-end text-white banner-img"
                
                :src="imageSrc2"
                cover
                >    
                </v-img>
                <v-card-title>AR tourism app - ITDA</v-card-title>
                <v-card-subtitle>
                07.14.2023 - 08.14.2023
                </v-card-subtitle>

                <v-card-text>
                    <div>50% Faster in Exploring music, and positive response about personalized recommendations and 4.2 Satisfaction after renewal </div>
                </v-card-text>

                <div class="px-4">
                    <v-chip-group>
                        <v-chip>UI/UX</v-chip>

                        <v-chip>New</v-chip>

                        <v-chip>Personnal Project</v-chip>
                    </v-chip-group>
                </div>

                <v-card-actions>
                    <v-btn color="orange">
                        Read More
                    </v-btn>
                </v-card-actions>
            </v-card>
        </swiper-slide>
        <swiper-slide class="slides"> 
            <v-card
                color="#141414"
            >
                <v-img
                class="align-end text-white banner-img"
                :src="imageSrc3"
                cover
                /> 
                <v-card-title>Youtube Music Renewal</v-card-title>
                <v-card-subtitle>
                08.07.2023 - 10.04.2023
                </v-card-subtitle>

                <v-card-text>
                    <div>50% Faster in Exploring music, and positive response about personalized recommendations and 4.2 Satisfaction after renewal</div>
                </v-card-text>

                <div class="px-4">
                    <v-chip-group>
                        <v-chip>UI/UX</v-chip>

                        <v-chip>Renewal</v-chip>

                        <v-chip>Group Project</v-chip>
                    </v-chip-group>
                </div>

                <v-card-actions>
                    <v-btn color="orange">
                        Read More
                    </v-btn>
                </v-card-actions>
            </v-card>
        </swiper-slide>
    </swiper-container>
</template>

<style lang="scss" scoped>
.slides {
    width: 310px;
}

.swiper-slide-visible{
    margin: auto;
    .v-card {
        opacity: 0.2;
        height: 520px;
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);

        .v-img {
            width: 310px;
            height: 244px;
        }
    }
}

.swiper-slide-active {
    .v-card {
        opacity: 1;
        height: 560px;
        -webkit-filter: none; /* Safari 6.0 - 9.0 */
        filter: none;
    }
}

#mySlider {
    .swiper-pagination-bullet {
        background-color: red !important;
    }
}

@media (min-width: 763px) {
    .slides {
        width: 400px;
    }

    .swiper-slide-visible{
        .v-card { 
            .v-img {
                width: 400px;
                height: 304px;
            }
        }
    }
}

</style>