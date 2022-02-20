const url =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

let app = document.querySelector('#results');

const addDrinkToDOM = (drink) => {
  let thumb = document.createElement('img');
  thumb.setAttribute("src", drink.strDrinkThumb);
  thumb.setAttribute("alt", "Photo of drink: " + drink.strDrink);
  thumb.setAttribute("class", "thumb");

  let label = document.createElement('figcaption');
  label.setAttribute("class", "caption")
  label.textContent = drink.strDrink;

  let element = document.createElement('figure');
  element.setAttribute("class", "figure"); 
  element.append(thumb);
  element.append(label);

  app.append(element);
}

const fetchData = (url) => {
  // Add your code here

  fetch(url)
    .then((response) => response.json())
    .then((data) => {      
      data.drinks.forEach((drink) => {
        addDrinkToDOM(drink);
      });
    })
    .catch((error) => {
      console.error(error);

      let element = document.createElement('p');
      element.textContent = 'An error occured. Please try again.';
      app.append(element);
    })
    .finally(() => {
      let loader = document.querySelector('#loading');
      app.removeChild(loader);
    });
};

fetchData(url);
