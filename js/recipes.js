const API_URL  = "http://localhost:8095/";

window.Recipe = {

    getRecipe:function () {
        $.ajax({
            url: API_URL + "/recipes",
            method: "GET"
        }).done(function(response){
            console.log(response);
            Recipe.displayRecipes(response.content)
        });

    },

    getRecipesHtml: function(recipe){
        return `<div id="recipe-container" class="row no-gutters">
          <div class="col-md-6">
            <div class="sched d-block d-lg-flex">
              <div class="bg-image order-2" style="background-image: url('img/dishes_4.jpg');"></div>
              <div class="text order-1">
                <h3>${recipe.recipeName}</h3>
                <p>${recipe.recipeHowTo}</p>
                <p class="text-primary h3">$44.00</p>
                <div class="recipe-favorite">
                            <a class="add_to_favorite"  data-recipe_id="${recipe.id}" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to favorite</a>
                        </div>
              </div>

            </div>`

    },

    displayRecipes:function (recipes) {
        let recipesHtml = "";


        recipes.forEach(recipe => recipesHtml += Recipe.getRecipesHtml(recipe));


        //am folosit CSS Selector
        $('#recipe-container').html(recipesHtml);


    }

};

Recipe.getRecipe();