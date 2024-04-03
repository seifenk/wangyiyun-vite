<template>
    <div class="musicList">
        <div class="musicTop">
            <span class="title">发现好歌单</span>
            <span class="more">查看更多</span>
        </div>

        <van-swipe :loop="false" :width="150" :height="300" :show-indicators="false">
            <van-swipe-item v-for="item in musicList" :key="item">
                <router-link :to="{ path: '/itemMusic', query: { id: item.id } }">
                    <img :src="item.picUrl" />
                    <div>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-bofang-s"></use>
                        </svg>
                        <span>{{ playNum(item.playCount) }}</span>
                    </div>

                    <span>{{ item.name }}</span>
                </router-link>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import { getMusicList } from "@/requst/api/home";
export default {
    data() {
        return {
            musicList: [],
        };
    },
    computed: {
        playNum: () => {
            return (num) => {
                if (num > 10000) return (num / 10000).toFixed(1) + "万";
            };
        },
    },
    mounted() {
        (async () => {
            const res = await getMusicList();
            // console.log(res);
            this.musicList = res.data.result;
        })();
    },
};
</script>

<style lang="less" scoped>
.musicList {
    padding: 0.2rem;

    .musicTop {
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
        height: 0.6rem;
        display: flex;
        justify-content: space-between;
        .title {
            font-size: 0.4rem;
            font-weight: bolder;
            line-height: 0.6rem;
        }
        .more {
            border: 1px solid #ccc;
            border-radius: 0.4rem;
            line-height: 0.6rem;
            padding: 0 0.2rem;
        }
    }
    .van-swipe {
        .van-swipe-item {
            padding: 0.1rem;
            position: relative;
            img {
                width: 100%;

                border-radius: 0.2rem;
            }
            div {
                display: flex;
                align-items: center;
                position: absolute;
                top: 0.2rem;
                right: 10%;
                color: #fff;
            }
            .icon {
                fill:#fff;
            }
        }
    }
}
</style>
