(function(window) {
    "use strict";
    
    var Adv = window.Adv || {};
    window.Adv = Adv;
    
    Adv.init = function init(data) {
        Adv.initialDestId = data.start;
        var destId;
        for (destId in data.decisions) {
            if (data.decisions.hasOwnProperty(destId)) {
                var decisionData = data.decisions[destId];
                var choices = [];
                for (var i = 0, len = decisionData[1].length; i < len;
                        i++) {
                    var choiceId = decisionData[1][i];
                    if (data.choices.hasOwnProperty(choiceId)) {
                        var choiceData = data.choices[choiceId];
                        var choice = new Adv.Choice({
                            wording: choiceData[0],
                            destId: choiceData[1],
                            choiceId: choiceId
                        });
                        choices.push(choice);
                    }
                }
                var decision = new Adv.Decision({
                    destId: destId,
                    wording: decisionData[0],
                    choices: choices
                });
                Adv.destinations[destId] = decision;
            }
        }
        for (destId in data.endGames) {
            if (data.endGames.hasOwnProperty(destId)) {
                var endGame = new Adv.EndGame({
                    destId: destId,
                    wording: data.endGames[destId]
                });
                Adv.destinations[destId] = endGame;
            }
        }
        Adv.startAdventure();
    };
    
    Adv.load = function load(parentElemId, data) {
        var loadHandler = function loadHandler() {
            Adv.parentElem = window.document.getElementById(parentElemId);
            if (Adv.parentElem) {
                Adv.init(data);
            } else {
                throw new ReferenceError('Element #' + parentElemId +
                    ' does not exist');
            }
        };
        if (window.addEventListener) {
            window.addEventListener('load', loadHandler, false);
        } else if (window.attachEvent) {
            window.attachEvent('onload', loadHandler);
        }
    };
}(this));
