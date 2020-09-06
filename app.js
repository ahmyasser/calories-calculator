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
        getItems: function() {
            return data.items;
        },
        logItems: function() {
            return data;
        }
    }

})();



// UI controller 
const UICtrl = (function() {
    const UIElements = {
        itemList: document.getElementById('item-list')
    }

    return {
        showItems: function(items) {
            let html = '';

            items.forEach(item => {
                html += `<li class="collection-item" id="item-${item.id}">
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          </li>`
            });
            UIElements.itemList.innerHTML = html;
        }
    }
})();

// App Controller
const AppCtrl = (function(ItemCtrl, UICtrl) {

    return {
        init: function() {
            console.log('intiating project.....');
            const items = ItemCtrl.getItems();
            UICtrl.showItems(items);

        }
    }
})(ItemCtrl, UICtrl);


// Intiating project
AppCtrl.init();