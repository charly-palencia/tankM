(function(){
    window.onload = function(){
        var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
        document.body.appendChild(renderer.view);

        var stage = new PIXI.Container();

        var texture = PIXI.Texture.fromImage("/images/bunny.png");
        var bunny = new PIXI.Sprite(texture);

        bunny.anchor.x = 0.5;
        bunny.anchor.y = 0.5;

        bunny.position.x = 200;
        bunny.position.y = 150;

        stage.addChild(bunny);

        var animate = function(){
            requestAnimationFrame( animate );

            bunny.rotation += 0.1;
            renderer.render(stage);
        };

        animate();
    };
})();

