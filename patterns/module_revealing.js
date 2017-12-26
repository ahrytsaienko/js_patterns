//*** STANDARD MODULE PATTERN ***

const UICtrl = (function () {
    //private stuff
    let _name = 'Kristina Doe';

    const changeName = function (newName) {
        const element = document.querySelector('h1');
        _name = newName;
        element.textContent = _name;

    }

    return {
        callChangeName: function (newName) {
            changeName(newName);
            // console.log(_name);
        }
    }

})();

//UICtrl.callChangeName('Brad');

//*** REVEALING MODULE PATTERN ***

const ItemCtrl = (function () {
    let _data = [];

    function add(item) {
        _data.push(item);
        console.log(`Item ${item.id} - ${item.name} add...`)
    }

    function get(id) {
        return _data.find(item => {
            return item.id === id;
        });
    }

    return {
        add,
        get
    }

})();

// ItemCtrl.add({id: 1, name: 'John'})
// console.log(ItemCtrl.get(1))








