let yhy = `****一个类似于一节火车车厢的空间里面是有吧台的餐厅大家都很忙收拾餐具擦桌子上菜打扫卫生的一个女人
一个女人卷发的蓝眼睛的外国女人是这群忙碌景象中的一份子深呼吸 慢慢走向前面的门就像在做一个重大的决定 她回头深深的看了一眼所有就像想把所有的这些平凡无奇看进心里所有人和物还是在常速运作没有任何变化
女人再转头下定决心按下银色把手再见就已到生活多年了的世界这里还是在饱受战后摧残走在街上女人已比之前见的餐厅世界里面的她苍白很多头裹了布看不出是掉了头发还是怎么好像是像平时一样出去买菜回来的路上一样的平淡神情
女人走向餐厅打开门进去眨眼之间她又完美嵌入这幅忙碌餐厅场景中忙着端菜给客人她穿着深色丝绒连衣裙很好看带着深色帽子好像从来都是这样的生活一样
再看时候她正走向另一端的门这次看不清她到底是深呼吸了没距离有些远只能看到她很自然的稍微停顿后走向那个门按下把手又进入了另一个世界.***********`;

let ye =`Inside a space resembling a train carriage, there is a restaurant with a bar. Everyone is busy - cleaning utensils, wiping tables, serving food, and maintaining hygiene. Among them is a foreign woman with curly hair and blue eyes. She takes a deep breath and walks slowly towards the front door, as if making a significant decision. Glancing back, she deeply observes everyone and everything, seemingly trying to etch the ordinary scenes into her memory. Despite her reflection, everyone and everything continues to move at the usual pace without any change. The woman turns again, determined, and presses the silver handle. Suddenly, she finds herself in a world she has lived in for many years. The place remains scarred by the aftermath of war. Walking on the streets, the woman looks paler than she did in the bustling restaurant world. Her head is wrapped in cloth, making it hard to tell if she lost hair or for some other reason. She appears as if she's on a routine grocery run, wearing a plain expression. The woman heads back to the restaurant, opens the door, and, in the blink of an eye, seamlessly integrates into the busy restaurant scene. She is seen busily serving guests, dressed in a dark velvet dress and a dark hat, as if this has always been her way of life. Upon another glance, she's heading towards the door on the other end. From a distance, it's unclear whether she took a deep breath this time. It's too far to be certain, but she naturally pauses slightly before heading towards that door, pressing the handle, and entering yet another world.
`;

let index = 0;
let indexe = 0;
let handle; // handle
let plate; // plate
let playing = false;
let angle = 90;
let goal = 0;
let cnv;
let lasttouch = 0;
let yea = [];
function preload() {
  handle = loadImage("handle.png");
  plate = loadImage("plate.png");
}

function setup() {
  // put setup code here
  cnv = createCanvas(600, 600);
  handle.resize(90, 0); // handle size w90 h403
  print(handle);
  plate.resize(150, 0);
  let cx = floor((windowWidth - cnv.width) / 2);
  let cy = floor((windowHeight - cnv.height) / 2);
  cnv.position(cx, cy);
  background(0);
  angleMode(DEGREES);
  imageMode(CENTER);
  yea = ye.split(" ")
  print(yhy.length);
  print(yea,yea.length)
}

function touchStarted() {
  // for Ios
  // calculate time since last touch
  const currenttime = millis();
  const timesincelasttouch = currenttime - lasttouch;

  print(playing);
  if (timesincelasttouch > 500) {
    if (!playing) {
      //ss.play(); // hiss when you start
      //hs.play();
      //hs.loop(); // keep playing hair dryer
      goal = floor(random(90, 0));
      angle--;
      playing = true;
    } else if (playing) {
      //hs.stop();
      //ss.play(); // hiss when you stop
      //playing = false;
      goal = 90;
    }
    // update
    lasttouch = currenttime;
  }
}

function mousePressed() {
  touchStarted();
}

function draw() {
  background(0);
  // chinese text
  fill(255)
  textSize(36);
  textWrap(CHAR);
  if(playing){
  let textpart = yhy.substring(floor(index),floor(index)+12)
  rectMode(CORNER)
  text(textpart, 72, 10, 600, 600);
  index+=0.08
  if (index >399) index =0  // length of the story hanyu
  // english text

  fill(127)
  text(yea[floor(indexe)], 72,height-36,600,600)
  if (indexe>=270) indexe = 0 // lenght of english story

  indexe+=0.055;



  }
  rectMode(CENTER)

  push();
  translate(width / 4, height / 2); //plate.height/2);
  //rotate(angle / 3);

  image(plate, 0, 0);
  fill(0);
  ellipse(-8, 83, 50 - angle / 3, 50 - angle / 3);
  pop();
  push();
  translate(width / 4, height / 2 - 100); //handle.height/2+20);
  rotate(360 - angle);

  image(handle, 0, +160);
  pop();
  if (angle === 90) {
    playing = false;
  }
  if (playing) {
    if (angle < goal) {
      angle++;
      angle % 180;
    } else if (angle > goal) {
      if (angle > 0) {
        angle--;
      }
    } else if (angle === goal) {
      goal = floor(random(90, 0));
      //ss.play(); // hiss when you reach your goal
    }
  }
}
