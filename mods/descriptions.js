console.log("descriptions.js: Loading vanilla descriptions...");
fetch("https://sandboxels-mods.mollthecoder.repl.co/descriptions/vanilla.json", 
      {
        referrer: "https://sandboxels.r74n.com/mods/descriptions.js"
      }
)
  .then(res=>{
    res.json().then(json=>{
    for(const element in json) {
      // If the element doesn't exist (for example, nocancer2.js) then don't try to change it.
      if(!elements.hasOwnProperty(element)) continue;
      elements[element].desc = json[element];
    }
    console.log("descriptions.js: Loaded vanilla descriptions!");
  });
});
