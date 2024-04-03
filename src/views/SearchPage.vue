<template>
    <div class="top">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
            <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <input type="text" placeholder="周杰伦" v-model="searchKey" @keydown.enter="addHistoryKey" />
        <svg class="icon" aria-hidden="true" @click="addHistoryKey">
            <use xlink:href="#icon-sousuo"></use>
        </svg>
    </div>
    <div class="history">
        <span><b>历史</b></span>
        <div class="historyWord">
            <span v-for="item in keyWordList" :key="item" @click="historyClick(item)">{{ item }}</span>
        </div>
        <svg class="icon" aria-hidden="true" @click="delHistory">
            <use xlink:href="#icon-shanchu"></use>
        </svg>
    </div>
    <div class="content">
        <div class="item" v-for="(song, index) in searchList" :key="song">
            <div class="itemLeft" @click="updatePlayList(searchList), updateIndex(index)">
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
</template>

<script>
import { getSearch } from "@/requst/api/search";
import { mapActions } from "pinia";
import {useMainStore} from '@/stores/index.js'
export default {
    data() {
        return {
            searchKey: "",
            keyWordList: [],
            searchList: [],
        };
    },
    mounted() {
        this.keyWordList = JSON.parse(localStorage.getItem("keyWordList")) ? JSON.parse(localStorage.getItem("keyWordList")) : [];
    },
    methods: {
        ...mapActions(useMainStore,["updatePlayList", "updateIndex"]),
        addHistoryKey: async function () {
            if (this.searchKey != "") {
                this.keyWordList.unshift(this.searchKey);
                this.keyWordList = [...new Set(this.keyWordList)];
                if (this.keyWordList.length > 5) {
                    this.keyWordList.pop();
                }
                localStorage.setItem("keyWordList", JSON.stringify(this.keyWordList));
                const res = await getSearch(this.searchKey);
                this.searchList = res.data.result.songs;
                this.searchKey = "";
            }
        },
        delHistory: function () {
            this.keyWordList = [];
            localStorage.removeItem("keyWordList");
        },
        historyClick: async function (value) {
            const res = await getSearch(value);
            this.searchList = res.data.result.songs;
        },
    },
};
</script>

<style lang="less" scoped>
.top {
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem;
    input {
        padding: 0 0.2rem;
        width: 80%;
        height: 0.6rem;
        border: 2px solid #999;
        border-radius: 0.4rem;
        display: block;
    }
}
.history {
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    .historyWord {
        width: 80%;
        span {
            background-color: #ccc;
            padding: 0.1rem 0.2rem;
            margin: 0 0.1rem;
            border-radius: 0.3rem;
        }
    }
}
.content {
    padding: 0.2rem;
    padding-bottom: 1.4rem;
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
            .icon {
                margin-left: 0.1rem;
            }
        }
    }
}
</style>
