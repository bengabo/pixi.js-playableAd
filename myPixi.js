const HEIGHT = 640
const app = new PIXI.Application({
  // width: window.innerHeight * 1.775, 
  // width: window.innerHeight * 2.171875, 
  width: HEIGHT * 2.171875,
  height: HEIGHT,
  backgroundColor: 0x0,
  resolution: window.devicePixelRatio || 1,
  view: document.getElementById('canvas')
});

scaleToWindow(app.view);
window.addEventListener("resize", function (event) {
  scaleToWindow(app.view);
});

let canvasW = app.screen.width
let canvasH = app.screen.height

app.loader
  .add('images/back.png')
  .add('images/btn.png')
  .add('images/logo.png')
  .add('images/Austin.png')
  .add('images/dec_1.png')
  .add('images/table.png')
  .add('images/plant-1.png')
  .add('images/plant.png')
  .add('images/Layer 1.png')
  .add('images/globe.png')
  .add('images/book_stand.png')
  .add('images/old_stair.png')
  .add('images/new_stair_01.png')
  .add('images/new_stair_02.png')
  .add('images/new_stair_03.png')
  .add('images/icon_hammer.png')
  .add('images/1.png')
  .add('images/01.png')
  .add('images/02.png')
  .add('images/03.png')
  .add('images/ok.png')
  .add('images/choosed.png')
  .add('images/Layer 2.png')
  .add('images/Layer 3.png')
  .load(setup)

// let icon_hammer = null;

function setup(loader, resources) {
  const background = new PIXI.Sprite(resources['images/back.png'].texture);
  background.width = canvasW;
  background.height = canvasH;
  app.stage.addChild(background);

  let container = new PIXI.Container()
  container.width = app.screen.width
  container.height = app.screen.height
  container.sortableChildren = true
  app.stage.addChild(container)

  const btn = new PIXI.Sprite(resources["images/btn.png"].texture);
  btn.anchor.set(.5);
  btn.x = canvasW / 2;
  btn.y = canvasH * 0.89;
  btn.zIndex = 3
  container.addChild(btn);

  const logo = new PIXI.Sprite(resources["images/logo.png"].texture);
  logo.anchor.set(.5);
  logo.x = canvasW * 0.13;
  logo.y = canvasH * 0.1;
  logo.scale.set(0,0)
  container.addChild(logo);

  const austin = new PIXI.Sprite(resources["images/Austin.png"].texture);
  austin.x = 694;
  austin.y = 112;
  container.addChild(austin);

  const dec_1 = new PIXI.Sprite(resources["images/dec_1.png"].texture);
  dec_1.anchor.set(1);
  dec_1.x = 1375;
  dec_1.y = 640;
  dec_1.zIndex = 1
  container.addChild(dec_1);

  const table = new PIXI.Sprite(resources["images/table.png"].texture);
  table.x = 190;
  table.y = 220;
  container.addChild(table);

  const plant1 = new PIXI.Sprite(resources["images/plant-1.png"].texture);
  plant1.x = 1135;
  plant1.y = 165;
  container.addChild(plant1);

  const plant = new PIXI.Sprite(resources["images/plant.png"].texture);
  plant.x = 450;
  plant.y = 0;
  container.addChild(plant);

  const layer1 = new PIXI.Sprite(resources["images/Layer 1.png"].texture);
  layer1.x = 120;
  layer1.y = 330;
  container.addChild(layer1);

  const globe = new PIXI.Sprite(resources["images/globe.png"].texture);
  globe.x = 70;
  globe.y = 125;
  container.addChild(globe);

  const book_stand = new PIXI.Sprite(resources["images/book_stand.png"].texture);
  book_stand.x = 850;
  book_stand.y = 0;
  container.addChild(book_stand);

  const old_stair = new PIXI.Sprite(resources["images/old_stair.png"].texture);
  old_stair.x = 833;
  old_stair.y = 53;
  container.addChild(old_stair);

  const icon_hammer = new PIXI.Sprite(resources["images/icon_hammer.png"].texture);
  icon_hammer.x = 1080;
  icon_hammer.y = 220;
  icon_hammer.zIndex = 1
  container.addChild(icon_hammer);

  let carpetIcons = []
  for (let i = 1; i < 4; i++) {
    let carpetIcon = new PIXI.Container()
    let carpetBack = new PIXI.Sprite(resources["images/1.png"].texture)
    carpetBack.anchor.set(0.5)
    carpetIcon.addChild(carpetBack)

    let choosed = new PIXI.Sprite(resources["images/choosed.png"].texture);
    choosed.anchor.set(0.5)
    choosed.y = -3
    choosed.visible = false
    carpetIcon.addChild(choosed)

    let carpetImg = new PIXI.Sprite(resources[`images/0${i}.png`].texture)
    carpetImg.anchor.set(0.5)
    carpetImg.zIndex = 2
    carpetIcon.addChild(carpetImg)

    carpetIcon.x = 130 * i + 810
    carpetIcon.y = 80
    carpetIcon.scale.set(0)
    carpetIcon.sortableChildren = true
    carpetIcon.zIndex = 1
    container.addChild(carpetIcon)
    carpetIcons.push(carpetIcon)
  }
  carpetIcons[0].children[2].x = 28
  carpetIcons[0].children[2].y = -20
  carpetIcons[1].children[2].x = 58
  carpetIcons[1].children[2].y = -20
  carpetIcons[2].children[2].x = 17
  carpetIcons[2].children[2].y = -15

  const okBtn = new PIXI.Sprite(resources["images/ok.png"].texture);
  okBtn.visible = false;
  okBtn.anchor.set(0.5);
  okBtn.zIndex = 1
  container.addChild(okBtn);

  const newStairs = []
  for (let i = 1; i < 4; i++) {
    const newStair = new PIXI.Sprite(resources[`images/new_stair_0${i}.png`].texture);
    newStair.x = 910
    newStair.y = -60
    newStair.visible = false;
    container.addChild(newStair);
    newStairs.push(newStair)
  }

  // const blackFill = new PIXI.Sprite(resources["images/Layer 3.png"].texture)
  // blackFill.zIndex = 2
  // container.addChild(blackFill)
  const graphics = new PIXI.Graphics()
  graphics.beginFill(0x0);
  graphics.drawRect(0, 0, canvasW, canvasH);
  graphics.alpha = 0
  graphics.zIndex = 2
  graphics.visible = false
  graphics.endFill();
  container.addChild(graphics)

  const finish = new PIXI.Sprite(resources["images/Layer 2.png"].texture)
  finish.anchor.set(0.5)
  finish.x = canvasW/2
  finish.y = canvasH * 0.4
  finish.zIndex = 2
  finish.visible = false
  container.addChild(finish)

  // Listen for animate update
  app.ticker.add((delta) => {
    PIXI.tweenManager.update();
  });
  
  // Tweens
  let tweenHammer = PIXI.tweenManager.createTween(icon_hammer);
  tweenHammer.time = 600;
  tweenHammer.delay = 400;
  tweenHammer.easing = PIXI.tween.Easing.outBounce();
  tweenHammer.to({
    y: 260,
  });
  // tweenHammer.loop = true;
  tweenHammer.start();
  
  let tweenBtn = PIXI.tweenManager.createTween(btn);
  tweenBtn.time = 2000;
  tweenBtn.to({
    scale: {x: 1.06, y: 1.06},
  });
  tweenBtn.loop = true;
  tweenBtn.pingPong = true
  tweenBtn.start();

  let tweenLogo = PIXI.tweenManager.createTween(logo);
  tweenLogo.time = 600;
  tweenLogo.delay = 300;
  tweenLogo.to({
    scale: {x: 1.06, y: 1.06},
  });
  tweenLogo.start();
  
  function tweenCarpets() {
    for (let i = 0; i < carpetIcons.length; i++) {
      const el = carpetIcons[i];
      let tween = PIXI.tweenManager.createTween(el)
      tween.time = 400
      tween.delay = 150 * i
      tween.easing = PIXI.tween.Easing.outBack();
      tween.to({scale: {x:1, y: 1}})
      // tween.loop = true
      tween.start()
    }
  }

  let tweenOk = PIXI.tweenManager.createTween(okBtn)
  tweenOk.time = 200
  tweenOk.from({alpha: 0})
  tweenOk.to({ alpha: 1})
  function tweenOkAlpha() {
    tweenOk.start()
  }

  // tween stairs
  for (let i = 0; i < newStairs.length; i++) {
    const el = newStairs[i];
    let tweenStair = PIXI.tweenManager.createTween(el)
    tweenStair.time = 500
    tweenStair.from({alpha: 0})
    tweenStair.to({alpha: 1, y: 0})
    tweenStair.easing = PIXI.tween.Easing.outExpo();
    el.tween = () => { tweenStair.start()}
  }

  // tween finish
  function tweenFinish() {
    const TIME = 600

    let tweenFinish = PIXI.tweenManager.createTween(finish)
    tweenFinish.time = TIME
    finish.visible = true
    tweenFinish.from({scale: {x:0, y:0}})
    tweenFinish.to({ scale: {x:1, y:1}})
    tweenFinish.easing = PIXI.tween.Easing.outBack();
    tweenFinish.start()

    let tweenGraph = PIXI.tweenManager.createTween(graphics)
    tweenGraph.time = TIME
    graphics.visible = true
    tweenGraph.to({alpha: 0.6})
    tweenGraph.easing = PIXI.tween.Easing.outExpo();
    tweenGraph.start()
  }
  

  // Events
  icon_hammer.interactive = true
  icon_hammer.on('pointerdown', (e) => {
    // adding carpet icons
    tweenCarpets()
    icon_hammer.visible = false
  })

  for (let i = 0; i < carpetIcons.length; i++) {
    const el = carpetIcons[i];
    el.interactive = true
    el.on('pointerdown', () => {
      old_stair.visible = false
      okBtn.visible = true
      tweenOkAlpha()
      okBtn.x = el.x
      okBtn.y = el.y + 90

      const indexOfLastClicked = carpetIcons[3]
      if (indexOfLastClicked != undefined) {
        // remove previous green
        carpetIcons[indexOfLastClicked].children[1].visible = false
        // remove previous stair
        newStairs[indexOfLastClicked].visible = false
      }
      // save last clicked carpetIcon index
      carpetIcons.splice(3, 1, i)
      // adding green color
      el.children[1].visible = true

      // change stair
      newStairs[i].visible = true
      newStairs[i].tween()
    })
  }

  okBtn.interactive = true
  okBtn.on('pointerdown', () => {
    okBtn.visible = false
    carpetIcons.forEach(el => {
      el.visible = false
    });
    tweenFinish()
  })
}