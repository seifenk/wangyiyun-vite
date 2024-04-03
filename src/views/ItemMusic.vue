<template>
    <div class="itemMusic">
        <item-music-top :playList="this.playList"></item-music-top>
        <item-music-list :playListItem="this.playListItem" :subscribedCount="this.subscribedCount"></item-music-list>
    </div>
</template>

<script>
import { getMusicListDetial, getMusicListItem } from "@/requst/api/item";
import ItemMusicTop from "@/components/item/ItemMusicTop.vue";
import ItemMusicList from "@/components/item/itemMusicList.vue"

export default {
    data() {
        return {
            playList: {},
            playListItem: {},
            subscribedCount:0
        };
    },
    mounted() {
        (async () => {
            const id = this.$route.query.id;
            const res = await getMusicListDetial(id);
            console.log(res);
            this.playList = res.data.playlist;
            this.subscribedCount = this.playList.subscribedCount
            const result = await getMusicListItem(id)
            this.playListItem = result.data.songs
            console.log(result)
        })();

    },
    components: {
        ItemMusicTop,ItemMusicList
    },
};
</script>

<style></style>
