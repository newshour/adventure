(function(window) {
    "use strict";
    
    var JSTA = window.JSTA || {};
    var Adv = window.Adv || {};
    window.Adv = Adv;
    
    Adv.Decision = function Decision(options) {
        this.destId = options.destId;
        this.wording = options.wording;
        this.choices = options.choices;
        
        this.element = null;
        this.render = function render() {
            return JSTA['decision.html'](this);
        };
        this.append = function append() {
            var element = window.document.createElement('div');
            element.className = 'adventure-decision adventure-' + this.destId;
            element.innerHTML = this.render();
            
            Adv.parentElem.appendChild(element);
            this.element = element;
            
            var createClickHandler = function createClickHandler(destId) {
                return function(event) {
                    Adv.showDestination(destId);
                    event.preventDefault();
                };
            };
            
            var choiceLinks;
            if (!window.document.getElementsByClassName) {
                choiceLinks = element.querySelectorAll(
                    '.adventure-choice-link');
            } else {
                choiceLinks = element.getElementsByClassName(
                    'adventure-choice-link');
            }
            for (var i = 0, len = choiceLinks.length; i < len; i++) {
                var choiceLink = choiceLinks.item(i);
                var destId = choiceLink.getAttribute('href').substring(1);
                if (window.addEventListener) {
                    choiceLink.addEventListener('click', createClickHandler(
                        destId), false);
                } else if (window.attachEvent) {
                    choiceLink.attachEvent('onclick', createClickHandler(
                        destId));
                }
            }
            
            return element;
        };
        this.remove = function remove() {
            Adv.parentElem.removeChild(this.element);
        };
        
        this.toString = function toString() {
            return '<EndGame: ' + this.wording + '>';
        };
    };
    
    Adv.EndGame = function EndGame(options) {
        this.destId = options.destId;
        this.wording = options.wording;
        
        this.element = null;
        this.render = function render() {
            return JSTA['endgame.html'](this);
        };
        this.append = function append() {
            var element = window.document.createElement('div');
            element.className = 'adventure-endgame adventure-' + this.destId;
            element.innerHTML = this.render();
            
            Adv.parentElem.appendChild(element);
            this.element = element;
            
            var restartLink;
            if (!window.document.getElementsByClassName) {
                restartLink = element.querySelectorAll(
                    '.adventure-restart-link').item(0);
            } else {
                restartLink = element.getElementsByClassName(
                    'adventure-restart-link').item(0);
            }
            if (window.addEventListener) {
                restartLink.addEventListener('click', Adv.startAdventure,
                    false);
            } else if (window.attachEvent) {
                restartLink.attachEvent('onclick', Adv.startAdventure);
            }
            
            return element;
        };
        this.remove = function remove() {
            Adv.parentElem.removeChild(this.element);
        };
        
        this.toString = function toString() {
            return '<EndGame: ' + this.wording + '>';
        };
    };
    
    Adv.Choice = function Choice(options) {
        this.wording = options.wording;
        this.destId = options.destId;
        this.choiceId = options.choiceId;
        
        this.render = function render() {
            return JSTA['choice.html'](this);
        };
        
        this.toString = function toString() {
            return '<EndGame: ' + this.wording + '>';
        };
    };
}(this));
