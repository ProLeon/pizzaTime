pizzaWebsites = [
    "https://www.papajohns.com/", 
    "https://www.pizzahut.com/", 
    "https://www.dominos.com/en/", 
    "https://pizzaranch.com/", 
    "https://www.papamurphys.com/",
    "https://pizzamananoka.com/",
    "https://www.chanticlearpizza.com/",
    "https://www.toppers.com/",
    "https://www.blackpeoplemeet.com/"
];

$("#pizzaTime").on("click", function(){
    randNum = (Math.floor(Math.random() * pizzaWebsites.length));
    document.getElementById('pizzaTimeSound').play()
    setTimeout(function(){
        window.location.href = pizzaWebsites[randNum];
    }, 2400);
});

//papa johns, pizza hut, dominos, pizza ranch, papa murphy's, pizza man, chanticlear, toppers pizzas