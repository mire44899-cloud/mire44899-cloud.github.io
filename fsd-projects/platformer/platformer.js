$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
       createPlatform(100,650,200,20, "pink");
       createPlatform(400,550, 200, 20, "purple");
       createPlatform(700,700,200,20, "pink");
       createPlatform(1000,565,200,20, "purple");
       createPlatform(800,430,200,20, "pink");



    // TODO 3 - Create Collectables
    createCollectable("steve",550, 510);
    createCollectable("kennedi", 800, 660);
    createCollectable("database", 900, 390);



    
    // TODO 4 - Create Cannons
    createCannon("top", 370, 900);
    createCannon("top", 740, 1100);
    createCannon("right", 650, 1300);
    


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
