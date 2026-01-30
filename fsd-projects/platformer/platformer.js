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
     toggleGrid();


    // TODO 2 - Create Platforms
       createPlatform(90,655,200,20, "pink");
       createPlatform(300, 415, 20, 270, "white");
       createPlatform(200, 529, 100,20, "white");
       createPlatform(300, 415, 200, 20, "white");
       createPlatform(600,680, 200, 20, "pink");
       createPlatform(800,500,20,200, "white");
       createPlatform(760,600,40,20, "white");
       createPlatform(1160,430,200,20, "pink");
       createPlatform(800,500,200,20, "pink");
       createPlatform(650,330,200,20,"pink");
      createPlatform(1000,500,20,200,"white");
      createPlatform(1000,700,400,20,"pink");
      createPlatform(1023,600,25,20,"white");
      createPlatform(900,400,30,30,"white");
      createPlatform(650,330,20,200,"white");
      createPlatform(1350,250,20,200,"white");



    // TODO 3 - Create Collectables
    createCollectable("steve",250, 490);
    createCollectable("kennedi", 750, 290);
    createCollectable("database", 700, 640);
    createCollectable("grace",1350,650);
    createCollectable("max",1300,390);



    
    // TODO 4 - Create Cannons
    createCannon("top",600,700);
    createCannon("top",1170,690);
    createCannon("left",300,2000);
    


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
