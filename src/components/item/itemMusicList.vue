<template>
    <div class="itemMusicList">
        <div class="top">
            <div class="topLeft">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                </svg>
                <p>
                    播放全部<span>（共{{ playListItem.length }}首）</span>
                </p>
            </div>
            <div class="topRight">收藏（{{ subscribedCount }}）</div>
        </div>
        <div class="content">
            <div class="item" v-for="(song, index) in playListItem" :key="song">
                <div class="itemLeft" @click="updatePlayList(playListItem), updateIndex(index)">
                    <p>{{ song.name }}</p>
                    <div>
                        <span v-for="(author, index) in song.ar" :key="author"> {{ author.name }}<span v-if="index + 1 < song.ar.length">/</span> </span>
                    </div>
                </div>
                <div class="itemRight">
                    <svg class="icon" aria-hidden="true" v-if="song.mv">
                        <use xlink:href="#icon-bofangMV"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-hanbaobao"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import {useMainStore} from '@/stores/index.js'
export default {
    props: {
        playListItem: Object,
        subscribedCount: Number,
    },
    computed: {
        ...mapState(useMainStore,["playList"]),
    },
    methods: {
        ...mapActions(useMainStore,["updatePlayList", "updateIndex"]),
    },
};
</script>

<style lang="less" scoped>
.itemMusicList {
    padding: 0 0.2rem;
    background-color: #fff;
    border-radius: 0.4rem 0.4rem 0 0;
    padding-top: 0.2rem;
    margin-top: 0.2rem;
    padding-bottom: 1.4rem;
    .top {
        display: flex;
        justify-content: space-between;
        height: 0.6rem;
        line-height: 0.6rem;
        .topLeft {
            display: flex;
            align-items: center;

            .icon {
                fill: #333;
                width: 0.5rem;
                height: 0.5rem;
            }
            p {
                font-size: 0.36rem;
                margin-left: 0.2rem;
                span {
                    font-size: 0.28rem;
                    color: #666;
                }
            }
        }
        .topRight {
            display: flex;
            border-radius: 0.4rem;
            background-color: #fc201c;
            color: #fff;
            padding: 0 0.2rem;
        }
    }
    .content {
        .item {
            padding: 0.2rem;

            display: flex;
            justify-content: space-between;
            .itemLeft {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 70%;
                p {
                    font-weight: bold;
                }
                span {
                    color: #666;
                }
            }
            .itemRight {
                display: flex;
                align-items: center;
                .icon{
                    margin-left: .1rem;
                }
            }
        }
    }
}
</style>
