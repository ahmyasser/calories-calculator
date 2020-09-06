// Storage Controller

// Item controller
const ItemCtrl = (function() {

    // Item constructor
    const Item = function(id, name, calories) {
            this.id = id;
            this.name = name;
            this.calories = calories;
        }
        // Datastructure/State
    const data = {
        items: [{
                id: 1,
                name: 'banana',
                calories: 300

            },
            {
                id: 2,
                name: 'appel',
                calories: 200

            },
            {
                id: 3,
                name: 'meat',
                calories: 230

            }
        ],
        currentItem: null,
        totalCalories: 0
    }

    return {
        logItems: function() {
            return data;
        }
    }

})();



// UI controller 
const UICtrl = (function() {

})();

// App Controller
const AppCtrl = (function(ItemCtrl, UICtrl) {

    return {
        init: function() {
            console.log('intiating project.....');
        }
    }
})(ItemCtrl, UICtrl);


// Intiating project
AppCtrl.init();