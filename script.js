// logo redirection
function replaceToHomePage(){
    window.location.href="Home.html";
}

// Json data for the shoes
const shoeInfo ={ "shoe":[
    {
        "itemNo":"0",
        "id":"sneaker1",
        "name":"Nike Air",
        "gender":"Universal",
        "style":"Sneaker",
        "size":"8",
        "price":"150.00",
        "color":"Black",
        "description":"The Mens Nike Air Max Plus is a certified icon of the Nike Air Max family. First released in 1998, the Air Max Plus was instantly notable for its then-new Tuned Air technology as well as the eye-catching design. The Air Max Plus debuted in 98 with graphic textile uppers in gradient colors that paired with the wavy TPU “stripes” that provided both support and even more flair. Most famous for its initial “Tiger” and “Shark” colorways, the silhouette has gone on to be featured in countless new colorways and materials in the years since. Along with the traditional mesh build, the Air Max Plus is available in premium leather and suede iterations, that add a new casual-minded lifestyle appeal to the original sporty design. No matter what the upper is constructed in, youll enjoy all day comfort thanks to the multiple visible Air units in the heel and forefoot.",
        "picture":"images/sneakers/s1/s1.png",
        "url":"sneaker1.html"
    },
    {
        "itemNo":"1",
        "id":"sneaker2",
        "name":"Nike Air Max 270",
        "gender":"Men",
        "style":"Sneaker",
        "size":"5",
        "price":"190.00",
        "color":"Blue",
        "description":"A Nike Sportswear lifestyle sneaker, the Air Max 270 is a unique design that pairs the ultimate Air Max comfort with a modern-edge silhouette. Inspired by classic Air Max models from the 90s, this unique shoe provides extreme performance as well as iconic styling. Whether you are a casual urban sneaker wearer or a more serious running enthusiast, this cushioned shoe is the perfect addition to any sneaker collection.",
        "picture":"images/sneakers/s2/s2.png",
        "url":"sneaker2.html"
    },
    {
        "itemNo":"2",
        "id":"sneaker3",
        "name":"Jordan AJ XXXVI",
        "gender":"Men",
        "style":"Sneaker",
        "size":"12",
        "price":"220.00",
        "color":"White",
        "description":"The full-length Zoom Air unit is stitched directly to the upper, bringing the responsive sensation right underneath your feet, letting you sprint and change directions comfortably. A hollowed-out section between the outsole and midsole helps reduce weight and exposes the shoes stabilizing shank that prevents it from twisting. Designed to support your game at any position, the Jordan AJ XXXVI keeps you feeling incredibly light and exceptionally strong in your pursuit of excellence on the court.",
        "picture":"images/sneakers/s3/s3.png",
        "url":"sneaker3.html"
    },
    {
        "itemNo":"3",
        "id":"sneaker4",
        "name":"Adidas Originals NMD",
        "gender":"Women",
        "style":"Sneaker",
        "size":"6",
        "price":"140.00",
        "color":"Maroon",
        "description":"The Womens adidas Originals NMD R1 is a stylish, modern-classic sneaker with sizing and colorways exclusive to women. Featuring a clean, one-piece mesh upper for a sock-like fit and outstanding breathability, the other key feature of the NMD is the ultra-comfortable, full-length Boost foam midsole, with energy-returning cushion. Inspired by the vintage adidas Micropacer running shoe, rectangular foam inserts in the midsole provide a retro aesthetic for the best of both worlds. Inspired by the concept of the “urban nomad,” the NMD is perfect for a stylish individual who thrives in the hustle and bustle of the city.",
        "picture":"images/sneakers/s4/s4.png",
        "url":"sneaker4.html"
    },
    {
        "itemNo":"4",
        "id":"sneaker5",
        "name":"Nike Blazer Low",
        "gender":"Women",
        "style":"Sneaker",
        "size":"12",
        "price":"95.00",
        "color":"White",
        "description":"Sleek, classic, and confident - its the original fashion staple! Originally designed for performance hoops, the Nike Blazer Low Platform elevates the iconic silhouette for a bold look. These sneakers fuse the outsole to the midsole for a streamlined look, while the upper retains the original sleek proportions. This elevated midsole with double-taped detailing offers a lifted stance for a confident and bold look. The retro Swoosh design, along with the throwback materials adds to its classic simplicity.",
        "picture":"images/sneakers/s5/s5.png",
        "url":"sneaker5.html"
    },
    {
        "itemNo":"5",
        "id":"sneaker6",
        "name":"Jordan Flight Club '91",
        "gender":"Kids",
        "style":"Sneaker",
        "size":"4",
        "price":"110.00",
        "color":"White",
        "description":"Welcome to the Flight Club! Taking inspiration from the greatest player of all time, the Jordan Flight Club '91 is an off-court shoe that offers a legendary look. Take flight like Mike with this fresh kick that features a premium look and feel that can't be beat.",
        "picture":"images/sneakers/s6/s6.png",
        "url":"sneaker6.html"
    },
    {
        "itemNo":"6",
        "id":"boot1",
        "name":"Nike Air Max Goadome",
        "gender":"Universal",
        "style":"Boot",
        "size":"10",
        "price":"75.00",
        "color":"Black",
        "description":"The Men's Nike Air Max Goadome is a stylish, versatile, and ultra-comfortable boot thats ready to take on anything the harsh winter weather in an urban landscape can throw at it. Now an all-time classic of Nike/'s ACG (All Conditions Gear) line, the Goadome is loved for its rugged good looks, strong and protective build, and full-length Air Max cushioning to keep your feet comfortable all day long. Every pair features a sturdy premium leather upper with a waterproof treatment to keep your feet dry in even the wettest conditions, while the ample tread on the thick and durable rubber outsole make sure you stay grounded in rainy or icy weather. An essential piece of footwear for the urban landscape as well as a formidable boot on the trails, the Air Max Goadome should be in everyones winter rotation.",
        "picture":"images/boots/b1/b1.png",
        "url":"boot1.html"
    },
    {
        "itemNo":"7",
        "id":"boot2",
        "name":"SFB Gen 2 8",
        "gender":"Men",
        "style":"Boot",
        "size":"11",
        "price":"250.00",
        "color":"Brown",
        "description":"Take a walk on the wild side in the Nike SFB Gen 2 8”. Crafted with full-grain leather and nylon canvas, these tactical boots are designed to provide you speed and flexibility over rough terrain. Inspired by Nike Free technology, the aggressive tread pattern of these silhouettes offers you superior traction over multiple surfaces, while the internal rock shield prevents punctures, so you can explore the wilderness without any fear. The shallow flex grooves of these shoes prevent debris from sticking to the surface, while the sawtooth design at the arch provides an enhanced grip for fast roping. Lightweight, waterproof, and breathable, the Nike SFB Gen 2 8 preps you to take on any challenge that comes your way.",
        "picture":"images/boots/b2/b2.png",
        "url":"boot2.html"
    },
    {
        "itemNo":"8",
        "id":"boot3",
        "name":"Fila Ray TR 2",
        "gender":"Men",
        "style":"Boot",
        "size":"9",
        "price":"50.00",
        "color":"Black",
        "description":"The race is on! The FILA Ray Tracer TR 2 Mid combines retro design with the latest and hottest chunky sneaker style. Slay the look on the streets with these classics featuring suede, leather, and mesh upper. The EVA midsole springs you forward with each step and the rubber outsole delivers premium comfort for a perfect casual day out through the streets.",
        "picture":"images/boots/b3/b3.png",
        "url":"boot3.html"
    },
    {
        "itemNo":"9",
        "id":"boot4",
        "name":"Timberland 6",
        "gender":"Kids",
        "style":"Boot",
        "size":"5",
        "price":"80.00",
        "color":"Red",
        "description":" Premium Waterproof Boot is the childrens sizing of the famous workwear-meets-streetwear boot. Originally founded in 1952, Timberlands reputation for quality and toughness has spread across the globe, and this boot is their flagship model. The 6” Premium Waterproof Boot delivers unparalleled protection, support, and style. From a cultural standpoint, this is the ultimate boot choice of the people and its presence can be seen in music, film, and sports culture. The 6” Boot was originally designed in 1973 with New Englands working class in mind. By the 1990s, Timberlands work boot found a permanent home on the streets of major metropolitan areas, especially New York City, where “Timbs” are the unofficial footwear choice of the city in the harsh winter months.",
        "picture":"images/boots/b4/b4.png",
        "url":"boot4.html"
    },
    {
        "itemNo":"10",
        "id":"slides1",
        "name":"UGG Oh Yeah Slides",
        "gender":"Women",
        "style":"Slides",
        "size":"7",
        "price":"100.00",
        "color":"Black",
        "description":"Say “oh yeah!” to fresh style when you step into UGGs Oh Yeah Slides. The 10mm sheepskin upper, lining, and midsole are ultra-comfortable, while the thick rubber outsole completes the must-have look.",
        "picture":"images/Slides/s1/s1.png",
        "url":"slides1.html"
    },
    {
        "itemNo":"11",
        "id":"slides2",
        "name":"Jordan Nola Slides",
        "gender":"Women",
        "style":"Slides",
        "size":"8",
        "price":"55.00",
        "color":"Pink",
        "description":"Upgrade to the original Jordan style with the Jordan Nola Slides. With molded foam footbed, fixed straps, and deep heel cup, it lets you slide into comfort in casual street style.",
        "picture":"images/Slides/s2/s2.png",
        "url":"slides2.html"
    },
    {
        "itemNo":"12",
        "id":"slides3",
        "name":"UGG Cloud Slides",
        "gender":"Women",
        "style":"Slides",
        "size":"8",
        "price":"59.00",
        "color":"Pink",
        "description":"Get the cushioned comfort and style you need with the UGG Cloud Sandal.",
        "picture":"images/Slides/s3/s3.png",
        "url":"slides3.html"
    },
    {
        "itemNo":"13",
        "id":"slides4",
        "name":"Champion IPO Slides",
        "gender":"Men",
        "style":"Slides",
        "size":"12",
        "price":"40.00",
        "color":"Blue",
        "description":"Upgrade to the original Jordan style with the Jordan Nola Slides. With molded foam footbed, fixed straps, and deep heel cup, it lets you slide into comfort in casual street style.",
        "picture":"images/Slides/s4/s4.png",
        "url":"slides4.html"
    },
    {
        "itemNo":"14",
        "id":"slides5",
        "name":"Jordan Break Slide",
        "gender":"Kids",
        "style":"Slides",
        "size":"4",
        "price":"20.00",
        "color":"Black",
        "description":"Choose the Jordan Grade School Break Slide for a comfortable slip-on that's perfect after sports practice or around the house. The synthetic-leather construction is durable and stylish, with the AJ logo on the upper footstrap adding to the sporty look. With their trendy looks, you can wear these casual slides with everything from jeans to track pants — the classic colorways complement anything in your closet.",
        "picture":"images/Slides/s5/s5.png",
        "url":"slides5.html"
    }
]};


// creating the layout to display the shoes products with the info in the json file
function mainPanelLayout(shoes){
    return`
    <li data-id="${shoes.itemNo}">
        <img src="${shoes.picture}" alt="${shoes.id}">
        <h2>${shoes.name}</h2>
        <p>${shoes.gender} ${shoes.color} | S:${shoes.size}</p>
        <p>$${shoes.price}</p> 
        <a href="${shoes.url}">
            <button>More Detail</button>
        </a>
        <img onclick="addTofav('${shoes.id}')"" src="images/Icons/heart.png" alt="heart icon">
        <img src="images/Icons/cart.png" alt="cart icon"> 
    </li>
`
}

document.getElementById("main-panel").innerHTML = `${shoeInfo.shoe.map(mainPanelLayout).join(' ')}`;

$(document).ready(function(){
    //  adding the jquery ui 

    $( "input[name='gender']" ).checkboxradio({
        // removing the click icon
        icon: false,
    });
    $( "input[name='color']" ).checkboxradio({
        icon: false
    });
    $( "input[name='style']" ).checkboxradio({
        icon: false
    });
    $( "input[name='size']" ).checkboxradio({
        icon: false
    });
    $("#clearFliter_button").button();

    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 250,
        values: [ 0, 50 ],
        slide: function( event, ui ) {
          $( "#priceDisplay" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
      $( "#priceDisplay" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );

    //--------------- Filter ---------------

    // Gender
    $("input[name=gender]").on("click",function(){
    
        var userGender=$("input[name=gender]:checked").val();
    
        var output="<ul>";
        
        // looping throught the json
        for (var i in shoeInfo.shoe) {
            // seeing if the value in the json mathces the value in the check option from the radio button
            if(shoeInfo.shoe[i].gender == userGender){
                // retriving the elements from its index no
                output+=`
                <li data-id="${shoeInfo.shoe[i].itemNo}">
                    <img src="${shoeInfo.shoe[i].picture}" >
                    <h2>${shoeInfo.shoe[i].name}</h2>
                    <p>${shoeInfo.shoe[i].gender} ${shoeInfo.shoe[i].color} | S:${shoeInfo.shoe[i].size}</p>
                    <p>$${shoeInfo.shoe[i].price}</p> 
                    <a href="${shoeInfo.shoe[i].url}">
                        <button>More Detail</button>
                    </a>
                    <img onclick="addTofav('${shoeInfo.shoe[i].id}')"" src="images/Icons/heart.png" alt="heart icon">
                    <img src="images/Icons/cart.png" alt="cart icon"> 
                </li>
                `;  
            }
        }
    
        output+="</ul>";
        document.getElementById("main-panel").innerHTML=output;
    });

    // size
    $("input[name='size']").on("click",function(){
    
        var userSize=$("input[name=size]:checked").val();
    
        var output="<ul>";
        
        for (var i in shoeInfo.shoe) {
            if(shoeInfo.shoe[i].size == userSize){
                output+=`
                <li data-id="${shoeInfo.shoe[i].itemNo}">
                    <img src="${shoeInfo.shoe[i].picture}" >
                    <h2>${shoeInfo.shoe[i].name}</h2>
                    <p>${shoeInfo.shoe[i].gender} ${shoeInfo.shoe[i].color} | S:${shoeInfo.shoe[i].size}</p>
                    <p>$${shoeInfo.shoe[i].price}</p> 
                    <a href="${shoeInfo.shoe[i].url}">
                        <button>More Detail</button>
                    </a>
                    <img onclick="addTofav('${shoeInfo.shoe[i].id}')"" src="images/Icons/heart.png" alt="heart icon">
                    <img src="images/Icons/cart.png" alt="cart icon"> 
                </li>
                `;
            }
        }
    
        output+="</ul>";
        document.getElementById("main-panel").innerHTML=output;
    });

    // Color
    $("input[name=color]").on("click",function(){
    
        var userColor=$("input[name=color]:checked").val();
    
        var output="<ul>";
    
        for (var i in shoeInfo.shoe) {
            if(shoeInfo.shoe[i].color == userColor){
                output+=`
                <li data-id="${shoeInfo.shoe[i].itemNo}">
                    <img src="${shoeInfo.shoe[i].picture}">
                    <h2>${shoeInfo.shoe[i].name}</h2>
                    <p>${shoeInfo.shoe[i].gender} ${shoeInfo.shoe[i].color} | S:${shoeInfo.shoe[i].size}</p>
                    <p>$${shoeInfo.shoe[i].price}</p> 
                    <a href="${shoeInfo.shoe[i].url}">
                        <button>More Detail</button>
                    </a>
                    <img onclick="addTofav('${shoeInfo.shoe[i].id}')"" src="images/Icons/heart.png" alt="heart icon">
                    <img src="images/Icons/cart.png" alt="cart icon"> 
                </li>
                `;
            }
        }
    
        output+="</ul>";
        document.getElementById("main-panel").innerHTML=output;
    });
  

    // Style
    $("input[name=style]").on("click",function(){
    
        var userstyle=$("input[name=style]:checked").val();
    
        var output="<ul>";
    
        for (var i in shoeInfo.shoe) {
            if(shoeInfo.shoe[i].style == userstyle){
                output+=`
                <li data-id="${shoeInfo.shoe[i].itemNo}">
                    <img src="${shoeInfo.shoe[i].picture}">
                    <h2>${shoeInfo.shoe[i].name}</h2>
                    <p>${shoeInfo.shoe[i].gender} ${shoeInfo.shoe[i].color} | S:${shoeInfo.shoe[i].size}</p>
                    <p>$${shoeInfo.shoe[i].price}</p> 
                    <a href="${shoeInfo.shoe[i].url}">
                        <button>More Detail</button>
                    </a>
                    <img onclick="addTofav('${shoeInfo.shoe[i].id}')"" src="images/Icons/heart.png" alt="heart icon">
                    <img src="images/Icons/cart.png" alt="cart icon"> 
                </li>
                `;
            }
        }
    
        output+="</ul>";
        document.getElementById("main-panel").innerHTML=output;
    });

    // clear the filter
    $("#clearFliter_button").on("click",function(){
        document.getElementById("main-panel").innerHTML = window.location.href="Shoes.html";
    });

    //--------------- search bar on the nav ---------------

    $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#main-panel li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    //--------------- Draggable and Droppable---------------

    $("#main-panel li").draggable({
        revert:true,
        helper: "clone",
        cursor: "move",
    });

    $(".basket").droppable({

        activeClass:"active",
        hoverClass:"hover",
        tolerance:"touch",

        drop:function (event, ui) {
         
            var basket = $(this),
            move = ui.draggable,
            itemId = basket.find("ul li[data-id='" + move.attr("data-id") + "']");

            if (itemId.html() != null) {
                itemId.find("input").val(parseInt(itemId.find("input").val()));
            }
            else {
                // Add the dragged item to the basket
                addBasket(basket, move);
            }
        }
    });


    // This function runs once an item is added to the basket
    function addBasket(basket, move) {
        basket.find("ul").append('<li data-id="' + move.attr("data-id") + '">'  
            + '<span class="name">' + move.find("h2").html() + '</span>'
            + '<button class="delete">&#10005;</button>'
        );
    }


    // THis is uded to delete an item in the fav list
    $("body").on("click", ".basket ul li button.delete", function () {
        $(this).closest("li").remove();
    });

});

//------------------------ Adding to fav panel in details page and the home page--------------------------

function deleItem() {
    $("body").on("click", ".basket ul li button.delete", function () {
        $(this).closest("li").remove();
    });
}

function addTofav(shoeIdInfo) {

    // appending the parameter to the 
    function shoeDetailsId(shoes) {
        return shoes.id == shoeIdInfo;
    }

    var shoes = shoeInfo.shoe.find(shoeDetailsId);

    var shoeName = shoes.name;

    // This is used to show that if there is nohthin gin the local storage then save an empty array 
    if(localStorage.getItem('FavouriteShoes') == null){
        localStorage.setItem('FavouriteShoes','[]');        
    }

    // To retrive anyy data that is in there and insert the new data
    var oldData = JSON.parse(localStorage.getItem('FavouriteShoes'));
    oldData.push(shoeName);

    // save both the old and new data
    localStorage.setItem('FavouriteShoes', JSON.stringify(oldData));

    $(".fav-panel").find("ul").append('<li data-id="' + shoes.id + '">'
    + '<span class="name">' + shoes.name + '</span>'
    + '<button class="delete" onclick="deleItem()">&#10005;</button>');
}







