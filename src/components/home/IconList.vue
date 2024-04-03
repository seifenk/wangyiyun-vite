<template>
    <div class="iconList">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tuijianfuwu"></use>
            </svg>
            <span>每日推荐</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tv"></use>
            </svg>
            <span>私人FM</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-songlist"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paihangbang"></use>
            </svg>
            <span>排行榜</span>
        </div>
    </div>
</template>

<script>


export default {

};
</script>

<style lang="less" scoped>
.iconList {
    display: flex;
    justify-content: space-around;
    .iconItem {
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
            width: 1rem;
            height: 1rem;
        }
    }
}
</style>
