import service from "..";
export function getSearch(value){
    return service({
        method: "get",
        url: `/cloudsearch?keywords=${value}`,
    });
}