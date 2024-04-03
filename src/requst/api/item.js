import service from "../index";
export function getMusicListDetial(id){
    return service({
        method: "get",
        url: `/playlist/detail?id=${id}`
    });
}
export function getMusicListItem(id){
    return service({
        method: "get",
        url: `/playlist/track/all?id=${id}&limit=20&offset=0`,
    });
}
export function getLyric(id){
    return service({
        method: "get",
        url: `/lyric?id=${id}`,
    });
}