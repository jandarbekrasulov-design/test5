const colors = [
    { name: "Deep Sea", hex: "#005f73" },
    { name: "Ocean Mint", hex: "#0a9396" },
    { name: "Sunny Sand", hex: "#ee9b00" },
    { name: "Fire Brick", hex: "#ae2012" },
    { name: "Midnight", hex: "#001219" }
];

const deepSea = document.getElementById("deepSea");
const oceanMint = document.getElementById("oceanMint");
const sunnySand = document.getElementById("sunnySand");
const fireBrick = document.getElementById("fireBrick");
const midnight = document.getElementById("midnight");


deepSea.addEventListener("click",function() {
    document.body.style.backgroundColor = colors[0].hex;
});

  oceanMint.addEventListener("click",function() {
    document.body.style.backgroundColor = colors[1].hex;
});

  
sunnySand.addEventListener("click", function() {
    document.body.style.backgroundColor = colors[2].hex;
});

fireBrick.addEventListener("click", function() {
    document.body.style.backgroundColor = colors[3].hex;
});

midnight.addEventListener("click", function() {
    document.body.style.backgroundColor = colors[4].hex;
});