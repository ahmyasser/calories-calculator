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

    // Add Item
    const addItem = function(name, calories, callback) {
        const newItem = new Item(name, data.items.length, calories)
        data.items.push(newItem);
        data.totalCalories += calories;
        callback(data);
    }

    return {
        getItems: function() {
            return data;
        },
        logItems: function() {
            return data;
        },
        addItem
    }

})();



// UI controller 
const UICtrl = (function() {
    const UIElements = {
        itemList: document.getElementById('item-list'),
        itemCalories: document.getElementById('item-calories'),
        itemName: document.getElementById('item-name'),
        addItemBtn: document.getElementById('add-item'),
        totalCalories: document.getElementById('total-calories')
    }

    return {
        showItems: function(data) {
            let { items } = data;
            let { totalCalories } = data;
            let html = '';
            console.log(totalCalories);
            items.forEach(item => {
                html += `<li class="collection-item" id="item-${item.id}">
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          </li>`
            });
            UIElements.itemList.innerHTML = html;
            if (totalCalories) {
                UIElements.totalCalories.textContent = totalCalories;
            } else
                UIElements.totalCalories.textContent = 4;


        },
        getItemInput: function() {
            return {
                name: UIElements.itemName.value,
                calories: parseInt(UIElements.itemCalories.value)
            }
        },
        getUIElments: function() {
            return UIElements;
        }
    }
})();

// App Controller
const AppCtrl = (function(ItemCtrl, UICtrl) {
    // Load event lestinersgetIt
    const loadEventlisteners = function() {

        //load UIElments
        const UIElements = UICtrl.getUIElments();

        // add event lestiner
        UIElements.addItemBtn.addEventListener('click', function(e) {
            console.log(UICtrl.getItemInput());
            let { name } = UICtrl.getItemInput();
            let { calories } = UICtrl.getItemInput();
            if (name !== '' && calories !== '') {
                items = ItemCtrl.addItem(name, calories, UICtrl.showItems);
            }
            e.preventDefault();
        });


    }

    return {
        init: function() {
            console.log('intiating project.....');
            const items = ItemCtrl.getItems();
            UICtrl.showItems(items);
            loadEventlisteners();
        }
    }
})(ItemCtrl, UICtrl);


// Intiating project
AppCtrl.init();