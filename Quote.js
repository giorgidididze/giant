const generateQuote = function() {
    const quotes = [
    {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        author: "Albus Dumbledore",
        imige: "persons/Albus Dumbledore.webp"
    },
    {
        quote: "It is impossible to manufacture or imitate love",
        author: "Horace Slughorn",
        imige: "persons/Horace Slughorn.jpg"
    },
    {
        quote: "Being different isn't a bad thing. I means that you are brave enough to be yourself.",
        author: "Luna Lovegood",
        imige: "persons/Luna Lovegood.webp"
    },
    {
        quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
        author: "Sirius Black",
        imige: "persons/Sirius Black.jpg"
    },
    {
        quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
        author: "Arthur Weasley",
        imige: "persons/Arthur Weasley.jpg"
    },
    {
        quote: "Every human life is worth the same, and worth saving.",
        author: "Kingsley Shacklebolt",
        imige: "persons/Kingsley Shacklebolt.jpg"
    },
    {
        quote: "Have a biscuit, Potter.",
        author: "Minerva McGonagall",
        imige: "persons/Minerva McGonagall.jpg_large"
    },
    {
        quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        author: "Albus Dumbledore",
        imige: "persons/Albus Dumbledore.webp"
    },
    {
        quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
        author: "Dobby",
        imige: "persons/Dobby.jpg"
    }
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;
    document.getElementById("image").src = quotes[arrayIndex].imige;
}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote); 
}

function randomBgHex(){ 
    let randomHex = Math.floor(Math.random()*900000) + 100000;  
    document.querySelector('body').style.backgroundColor = `#${randomHex}`; 
}


function image(img) {
    var src = img.src;
    window.open(src);
}


    