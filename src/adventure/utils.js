(function(window) {
    "use strict";
    
    var Adv = window.Adv || {};
    window.Adv = Adv;
    
    Adv.destinations = {};
    Adv.showDestination = function showDestination(destId) {
        if (Adv.destinations[destId]) {
            Adv.parentElem.innerHTML = '';  // Clear whatever's already shown
            Adv.destinations[destId].append();
        } else {
            throw new ReferenceError('Destination ' + destId +
                ' has not been created');
        }
    };
    
    Adv.startAdventure = function startAdventure(event) {
        Adv.showDestination(Adv.initialDestId);
        if (event && event.preventDefault) {
            event.preventDefault();
        }
    };
}(this));
