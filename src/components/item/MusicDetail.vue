<template>
    <img :src="song.al.picUrl" class="bgImg" />

    <div class="detailTop">
        <div class="topLeft">
            <svg class="icon" aria-hidden="true" @click="updateShow()">
                <use xlink:href="#icon-zuojiantou"></use>
            </svg>
            <div>
                <p>{{ song.name }}</p>
                <span v-for="(author, index) in song.ar" :key="author">
                    {{ author.name }}<span v-if="index + 1 < song.ar.length">/</span>
                </span>
            </div>
        </div>
        <div class="topRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fenxiang"></use>
            </svg>
        </div>
    </div>
    <div class="detailContent">
        <img src="@/assets/needle-ab.png" class="img_needle" ref="needle" />
        <img src="@/assets/cd.png" class="img_cd" />
        <img :src="song.al.picUrl" class="img_song" />
    </div>
    <!-- <div>{{lyric}}</div> -->
    <div class="detailFoot">
        <div class="footTop">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-aixin"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiazai"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-CD"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liuyan"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-player"></use>
            </svg>
        </div>
        <div class="footCenter">
            <input
                type="range"
                min="0"
                :max="duration"
                step="0.01"
                class="range"
                :value="currentTime"
                @input="changeTime" />
        </div>
        <div class="footFoot">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xunhuan"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="updateIndex(playListIndex - 1)">
                <use xlink:href="#icon-shangyishoushangyige"></use>
            </svg>
            <svg class="icon playBtn" aria-hidden="true" @click="play()" v-if="!isPlaying">
                <use xlink:href="#icon-bofang"></use>
            </svg>
            <svg class="icon playBtn" aria-hidden="true" @click="play()" v-else>
                <use xlink:href="#icon-zanting"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="updateIndex(playListIndex + 1)">
                <use xlink:href="#icon-xiayigexiayishou"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-list"></use>
            </svg>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useMainStore } from "@/stores/index.js";
export default {
    emits: ["changeTime"],
    data() {
        return {
            changeTimeValue: 0,
        };
    },
    props: {
        song: Object,
        play: Function,
        isPlaying: Boolean,
        currentTime: Number,
    },
    computed: {
        ...mapState(useMainStore, ["lyric", "playListIndex", "duration"]),
    },
    methods: {
        ...mapActions(useMainStore, ["updateShow", "updateIndex"]),
        changeTime(e) {
            this.$emit("changeTime", e.target.value);
        },
    },
    watch:{
        isPlaying:function(newVal){
            if(newVal)
            this.$refs.needle.style.transform = "rotate(0deg)"
            else
            this.$refs.needle.style.transform = "rotate(-20deg)"
        }
    }
};
</script>

<style lang="less" scoped>
.bgImg {
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    filter: blur(60px) brightness(70%);
}

.detailTop {
    padding: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
        fill: #fff;
    }
    .topLeft {
        display: flex;
        align-items: center;

        div {
            padding-left: 0.2rem;
            color: #fff;
            // span {
            //     color: #999;
            // }
        }
    }
}
.detailContent {
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .img_needle {
        position: absolute;
        width: 2rem;
        height: 3rem;
        left: 46%;
        transform-origin: 0 0;
        transform: rotate(-20deg);
        transition: all 2s;
    }
    .img_cd {
        width: 5rem;
        height: 5rem;
        position: absolute;
        bottom: 2.3rem;
        z-index: -1;
    }
    .img_song {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
        position: absolute;
        bottom: 3.14rem;
    }
}
.detailFoot {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 3.6rem;
    position: fixed;
    bottom: 0;
    .footTop {
        display: flex;
        justify-content: space-around;
        .playBtn {
            width: 1rem;
            height: 1rem;
        }
        .icon {
            width: 0.6rem;
            height: 0.6rem;
            fill: #fff;
        }
    }

    .footCenter {
        padding: 0 0.2rem;
        .range {
            width: 100%;
        }
    }
    .footFoot {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .icon {
            width: 0.5rem;
            height: 0.5rem;
            fill: #fff;
        }
        .playBtn {
            width: 1rem;
            height: 1rem;
        }
    }
}
</style>
