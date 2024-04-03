<template>
    <div id="swiperTop">
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in images" :key="image">
                <img :src="image.pic" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import { getBanner } from "@/requst/api/home";
export default {
    data() {
        return {
            images: [],
        };
    },
    mounted() {
        (async () => {
            const res = await getBanner();
            this.images = res.data.banners;
        })();

        // getBanner().then((res)=>this.images = res.data.banners)
    },
};
</script>

<style lang="less" scoped>
#swiperTop {
    .van-swipe {
        width: 100%;
        .van-swipe-item {
            width: 100%;
            padding: 0 0.2rem;
            img {
                width: 100%;
                border-radius: 0.2rem;
            }
        }
    }
}
</style>
