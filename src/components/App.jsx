import React from "react";
import emojipedia from "../emojipedia";
import Meaning from "./Meaning";
import Header from "../Header";
import Footer from "../Footer";
import notes from "../notes";
import Note from "../Note";

const newEmojiPedia = emojipedia.map( (emojilol)=> {
  return emojilol.meaning.substring(0, 100)
})

console.log(newEmojiPedia)

function creaEmoji(emojipedia){
return <Meaning
key={emojipedia.id}
emoji={emojipedia.emoji}
name={emojipedia.name}
description={emojipedia.meaning}
/>
}


function createNotes(noteItem){
return <Note 
imgURL={noteItem.imgURL}
title={noteItem.title} 
content={noteItem.content}
/>
}


/*<
{<h1>
  <span>emojipedia and flagpedia</span>
</h1>
<dl className="dictionary">{emojipedia.map(creaEmoji)}</dl>}> */


function Appe() {
  return (
    <div>
      <Header/>
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default Appe;
