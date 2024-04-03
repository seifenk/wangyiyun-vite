<template>
    <div class="topNav">

            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-hanbaobao"></use>
            </svg>
        

        <div class="topContent">
            <span>我的</span>
            <span class="active">发现</span>
            <span>云村</span>
            <span>视频</span>
        </div>

            <svg class="icon" aria-hidden="true" @click="this.$router.push('/search')">
                <use xlink:href="#icon-sousuo"></use>
            </svg>

    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.topNav{
    width: 100%;
    height: 1rem;
    padding: .2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .topContent{
        height: 100%;
        width: 60%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: .36rem;
        .active{
            font-weight: bolder;
        }
    }
}
</style>


