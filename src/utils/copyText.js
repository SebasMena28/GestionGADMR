export const copyText = async (text) => {
    if(navigator.clipboard){
        return await navigator.clipboard.writeText(text);
    }
}