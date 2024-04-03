import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
    state: () => {
        return {
            playList: [
                {
                    al: {
                        id: 86043909,
                        picUrl: "https://p2.music.126.net/zRR00_u7IY2h52YxiTXdKA==/109951164748120892.jpg",
                        pic_str: "109951164748120892",
                        pic: 109951164748120900,
                    },
                    ar: [{ name: "LinG" }],
                    name: "Blind faith",
                    id: 1426572175,
                },
            ],
            playListIndex: 0,
            isPlaying: false,
            isShow: false,
            lyric: {},
            duration: 0,
        };
    },
    getters: {},
    actions: {
        changePlay: function (value) {
            this.isPlaying = value;
        },
        updatePlayList: function (value) {
            this.playList = value;
        },
        updateIndex: function (value) {
            if ((value >= 0) & (value < this.playList.length)) this.playListIndex = value;
        },
        updateShow: function () {
            this.isShow = !this.isShow;
        },
        updateLyric: function (value) {
            this.lyric = value;
        },
        updateDuration: function (value) {
            this.duration = value;
        },
        // updateLyric: async function (value) {
        //     const res = await getLyric(value);
        // },
    },
});

