<template>
    <div class="foot">
        <div class="left" @click="updateShow()">
            <img :src="playList[playListIndex].al.picUrl" alt="" />
            <span>{{ playList[playListIndex].name }}</span>
        </div>
        <div class="right">
            <svg class="icon" aria-hidden="true" @click="play()" v-if="!isPlaying">
                <use xlink:href="#icon-bofang"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="play()" v-else>
                <use xlink:href="#icon-zanting"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-list"></use>
            </svg>
            <audio loop ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`" @canplay="changeDuration()" @timeupdate="updateTime" @ended="changePlay(false)"></audio>
        </div>
    </div>
    <van-popup :show="isShow" position="bottom" :style="{ height: '100%', weight: '100%' }">
        <music-detail :song="playList[playListIndex]" :play="play" :isPlaying="isPlaying" :currentTime="currentTime" @changeTime="changeCurrentTime"></music-detail>
    </van-popup>
</template>

<script>
import MusicDetail from "@/components/item/MusicDetail.vue";
import { mapActions, mapState } from "pinia";
import {useMainStore} from '@/stores/index.js'
export default {
    data() {
        return {currentTime:0};
    },
    computed: {
        ...mapState(useMainStore,["playList", "playListIndex", "isPlaying", "isShow"]),

    },
    methods: {
        ...mapActions(useMainStore,["changePlay", "updateShow", "updateDuration"]),
        play: function () {
            if (!this.isPlaying) {
                this.$refs.audio.play();
                this.changePlay(true);
            } else {
                this.$refs.audio.pause();
                this.changePlay(false);
            }
        },
        changeDuration: function () {
            this.updateDuration(this.$refs.audio.duration);
            this.$refs.audio.play();
            console.log(12312);

        },
        updateTime(e) {
      this.currentTime = e.target.currentTime;
    },
    changeCurrentTime(changeTimeValue){
        this.$refs.audio.currentTime = changeTimeValue
    }
    },
    updated() {

    },
    mounted() {},
    watch: {
        playListIndex: function () {
            this.changePlay(true);

        },
        playList: function () {
            this.changePlay(true);

        },
    },
    components: { MusicDetail },
};
</script>

<style lang="less" scoped>
.foot {
    width: 100%;
    height: 1.4rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #999;
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    .left {
        display: flex;
        align-items: center;

        img {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
        }
        span {
            padding-left: 0.2rem;
        }
    }
    .right {
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .icon {
            width: 0.6rem;
            height: 0.6rem;
            fill: #333;
        }
    }
}
</style>
