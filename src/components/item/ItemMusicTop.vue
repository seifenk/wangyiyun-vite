<template>
    <div class="itemMusicTop">
        <img :src="playList.coverImgUrl" class="bgImg" />
        <div class="itemLeft">
            <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                <use xlink:href="#icon-zuojiantou"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="itemRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-hanbaobao"></use>
            </svg>
        </div>
    </div>
    <div class="itemMusicContent">
        <div class="contentLeft"><img :src="playList.coverImgUrl" /></div>
        <div class="contentRight" v-if="playList.creator">
            <h3>{{ playList.name }}</h3>
            <div>
                <img :src="playList.creator.avatarUrl" /><span>{{ playList.creator.nickname }}</span>
            </div>
            <p>{{ playList.description }}</p>
        </div>
    </div>
    <div class="itemMusicFoot">
        <div class="footItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liuyan"></use>
            </svg>
            <span>{{ playList.commentCount }}</span>
        </div>
        <div class="footItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fenxiang"></use>
            </svg>
            <span>{{ playList.shareCount }}</span>
        </div>
        <div class="footItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiazai"></use>
            </svg>
            <span>下载</span>
        </div>
        <div class="footItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-duoxuan"></use>
            </svg>
            <span>多选</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        playList: Object,
    },
    updated() {
        // console.log(this.playList);
    },
};
</script>

<style lang="less" scoped>
.itemMusicTop {
    width: 100%;
    height: 1rem;
    // padding: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .bgImg {
        position: absolute;
        width: 100%;
        z-index: -1;
        filter: blur(30px);
        height: 10rem;
    }
    .itemLeft,
    .itemRight {
        width: 25%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.2rem;
        span {
            font-size: 0.4rem;
            color: #fff;
        }
    }
    .icon {
        fill: #fff;
    }
}
.itemMusicContent {
    width: 100%;
    height: 175px;
    padding: 0 0.2rem;
    display: flex;


    align-content: center;
    color: #fff;
    .contentLeft {
        flex-shrink: 0;
        width: 40%;
        display: flex;
        align-items: center;
        img {
            width: 100%;

            border-radius: 0.4rem;
        }
    }
    .contentRight {
        padding-left: 0.2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div {
            display: flex;
            align-items: center;
            img {
                border-radius: 50%;
                width: 0.8rem;
                height: 0.8rem;
            }
        }

        p {
            display: inline-block;
            height: 0.8rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;

            color: #ccc;
        }
    }
}

.itemMusicFoot {
    margin-top: 0.2rem;
    padding: 0 .2rem;
    display: flex;
    justify-content: space-between;
    .footItem{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        .icon{
            width: .6rem;
            height: .6rem;
            fill: #fff;
        }
        }
}
</style>
