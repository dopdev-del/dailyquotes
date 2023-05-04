import emojipedia from "./emojipedia";

const newEmojiPedia = emojipedia.map(function (emojilol){
    return emojilol.meaning.substring(0, 100)
})

console.log(newEmojiPedia)