(function(){
    window.EventHandler = function(){
        var key = keyboard(38)
        var init = function(bunny){
            key.press = function(){
                bunny.position.x += 4;
            };
        };

        return {
            init: init
        };
    };
})();
