import React, { Component } from 'react'
import MenuItem from './MenuItem';

export class Menu extends Component {
    menu= [
        {
            "source": {
                "id": "pop's",
                "name": "pop"
            },
            "price": "$5.99",
            "title": "Pancake",
            "description": "Buttermilk Pancakes with fresh bluebarries, Topped with your choise of maple syrup.",
            "url": "https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/",
            "urlToImage": "https://joyfoodsunshine.com/wp-content/uploads/2018/01/Gluten-free-double-chocolate-oatmeal-pancakes-recipe-dairy-free-square-4.jpg"
        },
        {
            "source": {
                "id": "pop's",
                "name": "pop"
            },
            "price": "$7.50",
            "title": "Quiche",
            "description": "Heavy Creams,Eggs,Green Onions & Biscuits.",
            "url": "https://sallysbakingaddiction.com/quiche-recipe/",
            "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F39%2F2022%2F02%2F08%2Ffig-pig-quiche-RU356519.jpg"
        },
        {
            "source": {
                "id": "pop's",
                "name": "pop"
            },
            "price": "$5.50",
            "title": "Burger",
            "description": "The Ultimate Hangover Burger Egg in a hole Burger Grilled Cheese.",
            "url": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjNoPbMiKD4AhX28zgGHYvbCXcQFnoECAQQAQ&url=https%3A%2F%2Fwww.burgerking.in%2F&usg=AOvVaw2IE1mo_tu-kA2sZWzLFxme",
            "urlToImage": "https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?b=1&k=20&m=1309352410&s=170667a&w=0&h=YduYl7Us5MSrw1EFSCxR9zDRLnEFa_O608NdqhHlSyM="
        },
        {
            "source": {
                "id": "pop's",
                "name": "pop"
            },
            "price": "$6.50",
            "title": "Sandwich",
            "description": "Savory and Protein-packed with a Parmesan cage-free egg frittata on an artisan roll.",
            "url": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjS2KfKiqD4AhUpUGwGHYmYCQEQFnoECDUQAQ&url=https%3A%2F%2Fwww.indianhealthyrecipes.com%2Fsandwich-recipes%2F&usg=AOvVaw0WEBHmh-puoDZwF1g3jC0X",
            "urlToImage": "https://media.istockphoto.com/photos/ham-and-cheese-sandwich-on-whole-grain-bread-picture-id1247012863?b=1&k=20&m=1247012863&s=170667a&w=0&h=dBQZ5KGQ6b-QbbUCjkvgsQj8ZWq3O3TSOqoc4rI-cE0="
        },
        {
            "source": {
                "id": "pop's",
                "name": "pop"
            },
            "price":"$7.65",
            "title": "Special Combo",
            "description": "Minced flavoured Vegetable deep fried and dressed with mayo and Lettuce and A cut of Julienne potatoes deep fried, salted and served with tomato sauce.",
            "url": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiMl8uajqD4AhVT-zgGHdOWC0IQFnoECBUQAQ&url=https%3A%2F%2Fwww.burgerking.in%2F&usg=AOvVaw2IE1mo_tu-kA2sZWzLFxme",
            "urlToImage": "https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80"
        },
        {
            "source": {
                "id": "pop's",
                "name": "pop"
            },
            "price":"$7.99=",
            "title": "Spicy Veg Sizzler",
            "description": "Baked Beans, Cutlet, Assorted Vegetables, Work Tossed Noodels, French Frries, served with Garlic Sause.",
            "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
            "urlToImage": "https://www.cityshor.com/uploads/article/07_2017/1499942982_web_8.jpg"
        },
        {
            "source": {
                "id": "pop's",
                "name": "pop"
            },
            "price":"$3.78",
            "title": "Mocha Cookie Crumble Frappuccino",
            "description": "Coffee, Milk and Ice join rich mocha sauce, Frappuccino chips  and a cookie-crumble topping.",
            "url": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjYv9qYlaD4AhUq6jgGHQiRAj0QFnoECAkQAQ&url=https%3A%2F%2Fwww.starbucks.com%2Fmenu%2Fproduct%2F956%2Ficed&usg=AOvVaw3pYw6iyKcVoVXge7pm6UWv",
            "urlToImage": "https://t4.ftcdn.net/jpg/01/38/90/15/360_F_138901512_Gf2bFx7U8dP3YBWeaBWdPjKUa9fpLMSR.jpg"
        },
        {
            "source": {
                "id": "pop's",
                "name": "pop"
            },
            "price":"$3.65",
            "title": "Cappuccino Coffee",
            "description": "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
            "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
            "urlToImage": "https://w0.peakpx.com/wallpaper/912/715/HD-wallpaper-coffee-brown-cup-coffee-beans-brown-sticks-cappuccino-black-coffee.jpg"
        },
        {
            "source": {
                "id": "pop's",
                "name": "pop"
            },
            "price":"$2-8",
            "title": "Cold-Drinks",
            "description": "All types of cold-drinks are available...",
            "url": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi03J2TmqD4AhUo8DgGHW0-BYwQFnoECGEQAQ&url=https%3A%2F%2Fwww.coca-colacompany.com%2Fbrands&usg=AOvVaw3nAoWB0jcg1QV11ECCfOOE",
            "urlToImage": "https://media.istockphoto.com/photos/pour-soft-drink-in-glass-with-ice-splash-on-dark-background-picture-id1062831310?b=1&k=20&m=1062831310&s=170667a&w=0&h=LZlme3y6aUiO7z__PMQNj1Zikfd2vs8UimNlzhroewQ="
        },
        {
            "source": {
                "id": "pop's",
                "name": "pop"
            },
            "price":"$2-8",
            "title": "Pop's Milkshakes",
            "description": "Sweet milkshakes with chocolate, marshmallow, halva and whipped cream.",
            "url": "http://pops-diner.com/",
            "urlToImage": "https://us.123rf.com/450wm/mayatnik/mayatnik1811/mayatnik181100085/113141293-three-sweet-milkshakes-with-chocolate-marshmallow-halva-and-whipped-cream-at-a-wooden-board-on-a-tab.jpg?ver=6"
        },{
            "source": {
                "id": "pop's",
                "name": "pop"
            },
            "price":"$8.78",
            "title": "Strawberry Cake",
            "description": "Sweets Fruit Blueberries Strawberry Gelatin dessert jelly Chocolate Dessert.",
            "url": "https://sallysbakingaddiction.com/strawberry-cake/",
            "urlToImage": "https://s1.1zoom.me/big0/383/Sweets_Fruit_Blueberries_Strawberry_Gelatin_539872_1280x1024.jpg"
        },{
            "source": {
                "id": "pop's",
                "name": "pop"
            },
            "price":"$5-14",
            "title": "More Dessert",
            "description": "All types of desserts...",
            "url": "https://www.dreamstime.com/opera-cake-la-carte-desserts-cakes-black-background-selective-focus-image176281758",
            "urlToImage": "https://thumbs.dreamstime.com/b/opera-cake-la-carte-desserts-cakes-black-background-selective-focus-176281758.jpg"
        }
    ]
    constructor(){
        super();
        this.state={
            menu:this.menu,
        }
    }
  render() {
    return (
      <>
    <div className="container my-3 p-0" id='menu'>
        <h1>Menu</h1>
        <div className="row">
            {this.state.menu.map((element)=>{
                return <div className="col-md-auto col-lg-4 my-3" key={element.urlToImage}>
                <MenuItem title={element.title} description={element.description.slice(0, 40)} urlToImage={element.urlToImage} url={element.url}/>
                </div>
            })}
        </div>
        </div>
      </>
    )
  }
}

export default Menu