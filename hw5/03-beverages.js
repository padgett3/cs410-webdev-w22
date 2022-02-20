
$(document).ready(function () {
  // Add your code here

  const url =
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

  const addDrinkToDOM = (drink) => {

    $('#results')
      .addClass('results-grid')
      .append($('<figure>')
        .attr('class', 'figure')
        .append($('<img>')
          .attr({
            src: drink.strDrinkThumb,
            alt: "Photo of drink " + drink.strDrink
          })
        )
        .append($('<figcaption>')
          .text(drink.strDrink)
        )
    );
  }

  $.ajax({
    type: 'GET',
    url: url,
    success: (data) => {
      data.drinks.forEach(drink => {
        addDrinkToDOM(drink);
      });
    },

    error: (error) => {
      console.error(error);
      $('#results')
        .append($('<p>')
          .text('An error occured. Please try again.')
        );
    },

    complete: () => {
      $('#loading').remove();
    }
  })
});
