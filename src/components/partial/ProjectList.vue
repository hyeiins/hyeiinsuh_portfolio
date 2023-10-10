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
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'1.4'"
        :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }" 
        :space-between="-100"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
        :loop="true"

    >
        <swiper-slide> 
            <v-card
                max-width="500"
                color="#141414"
            >
                <v-img
                class="align-end text-white"
                height="200"
                :src="imageSrc"
                cover
                >
                    <v-card-title>Youtube Music Renewal</v-card-title>
                </v-img>

                <v-card-subtitle class="pt-4">
                   08.07.2023 - 10.04.2023
                </v-card-subtitle>

                <v-card-text>
                    <div>50% Faster in Exploring music, and positive response about personalized recommendations and 4.2 Satisfaction after renewal</div>
                </v-card-text>

                <div class="px-4">
                    <v-chip-group v-model="selection">
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
        <swiper-slide> 
            <v-card
                max-width="500"
                color="#141414"
            >
                <v-img
                class="align-end text-white"
                height="200"
                :src="imageSrc2"
                cover
                >
                    <v-card-title>AR tourism app - ITDA</v-card-title>
                </v-img>

                <v-card-subtitle class="pt-4">
                   07.14.2023 - 08.14.2023
                </v-card-subtitle>

                <v-card-text>
                    <div>New concept project UX study to create AR tourism app to give users a meaningful, enjoyable and more vivid experience.</div>
                </v-card-text>

                <div class="px-4">
                    <v-chip-group v-model="selection">
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
        <swiper-slide> 
            <v-card
                max-width="500"
                color="#141414"
                class="card-coming-soon"
            >
                <v-img
                class="align-end text-white"
                height="200"
                :src="imageSrc3"
                cover
                >
                    <v-card-title>Next Concept App</v-card-title>
                </v-img>

                <v-card-subtitle class="pt-4">
                    07.14.2023 - 
                </v-card-subtitle>

                <v-card-text>
                    <div>COMING SOON</div>
                </v-card-text>

                <div class="px-4">
                    <v-chip-group>
                        <v-chip>UI/UX</v-chip>
                        <v-chip>Mobile App</v-chip>
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
    </swiper-container>
</template>

<style>
    .swiper-slide-prev, .swiper-slide-next {
        opacity: 0.2;
        .v-card {
            width: 300px;
            height: 380px;
            margin-top: 20px;
        }
    }

    .swiper-slide-active {
        .v-card {
            min-width: 300px;
            min-height: 400px;
        }
    }

    .card-coming-soon {
        
    }

    
</style>