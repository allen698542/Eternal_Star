function Ignore1() {
  var ui = prompt("UI無視：", 90);
  var boss = prompt("BOSS防禦：", 300);
  var n1 = 100 - (1 - ui / 100) * boss;
  alert("實際對BOSS傷害 " + n1 + " %");
}
function Ignore2() {
  var m1 = prompt("UI無視：", 90);
  var m2 = prompt("超技能無視：", 0);
  var m3 = prompt("V矩陣無視：", 0);
  var m4 = prompt("攻擊技能自帶無視：", 0);
  var mn =
    (1 - (1 - m1 / 100) * (1 - m2 / 100) * (1 - m3 / 100) * (1 - m4 / 100)) *
    100;
  alert("實際無視防禦為 " + mn + " %");
}
function scroll() {
  var ba = prompt("基礎攻擊：", 347);
  var sf = prompt("星力(1-25)：", 22);
  var bs = prompt("星火增加的攻擊：", 63);
  var scn = prompt("已衝的卷數：", 12);
  var fa = prompt("最終攻擊：", 866);
  var tt3 = 0;
  var tt1 = 0;
  var tt2 = 0;
  var dam = 0;
  var sss = 0;
  var tmp1 = 0;
  var xx = 0;
  var y = 0;
  var i = 0;
  var j = 0;
  var label1 = "";
  var label2 = "";
  var cho = false;
  tt3 = fa - bs;
  for (i = 1; i <= 2000; i++) {
    tt2 += 1;
    tt1 = tt2;
    dam = 0;
    sss = 0;
    while (sss < sf) {
      sss += 1;
      if (sss <= 15) {
        dam = ~~(tt1 / 50) + 1;
        tt1 += dam;
      } else if (sss == 16) tt1 += 13;
      else if (sss == 17) tt1 += 13;
      else if (sss == 18) tt1 += 14;
      else if (sss == 19) tt1 += 14;
      else if (sss == 20) tt1 += 15;
      else if (sss == 21) tt1 += 16;
      else if (sss == 22) tt1 += 17;
      else if (sss == 23) tt1 += 34;
      else if (sss == 24) tt1 += 35;
      else if (sss == 25) tt1 += 36;
    }
    if (tt1 == tt3 && tt2 - ba > 0 && xx == 0) {
      tmp1 = 1;
      y = tt2 - ba;
      label1 =
        "衝了" +
        scn +
        "張卷軸，攻擊總共加了 " +
        y +
        " 攻，\n平均一張加了" +
        y / scn +
        "攻。";
      label2 =
        "\n\n100%咒文+3攻\n70%咒文+5攻\n30%咒文+7攻\n15%咒文+9攻\n極電卷+9攻\nRED卷+10攻\nX卷+12攻\nV卷+13攻\n究極的黑暗+14攻\n榮耀+10~20攻";
      alert(label1 + label2);
    }
  }
  if (tmp1 == 0) {
    alert("數值輸入錯誤(0)");
  }
}
function Powercalculate() {
  var lv = prompt("輸入等級：");
  var st = prompt("輸入星力(需扣除公會加成)：");
  var x = 0;
  var y = 0;
  if (lv >= 60 && lv < 100) x = 0.5 * lv ** 3 + 12500;
  else if (lv >= 100 && lv < 140) x = 0.4 * lv ** 3 + 12500;
  else if (lv >= 140 && lv < 180) x = 0.7 * lv ** 3 + 12500;
  else if (lv >= 180 && lv < 200) x = 0.8 * lv ** 3 + 12500;
  else if (lv >= 200 && lv < 210) x = lv ** 3 + 12500;
  else if (lv >= 210 && lv < 220) x = 1.1 * lv ** 3 + 12500;
  else if (lv >= 220 && lv < 230) x = 1.15 * lv ** 3 + 12500;
  else if (lv >= 230 && lv < 240) x = 1.2 * lv ** 3 + 12500;
  else if (lv >= 240 && lv <= 300) x = 1.25 * lv ** 3 + 12500;

  if (st >= 0 && st < 60)
    y = Math.floor(0.1 * st ** 3 + 15 * st ** 2 + 750 * st);
  else if (st >= 60 && st < 120)
    y = Math.floor(0.11 * st ** 3 + 16.5 * st ** 2 + 825 * st + 1250);
  else if (st >= 120 && st < 180)
    y = Math.floor(0.12 * st ** 3 + 18 * st ** 2 + 900 * st + 2500);
  else if (st >= 180 && st < 230)
    y = Math.floor(0.13 * st ** 3 + 19.5 * st ** 2 + 975 * st + 3750);
  else if (st >= 230 && st < 260)
    y = Math.floor(0.14 * st ** 3 + 21 * st ** 2 + 1050 * st + 5000);
  else if (st >= 260 && st < 290)
    y = Math.floor(0.15 * st ** 3 + 22.5 * st ** 2 + 1125 * st + 6250);
  else if (st >= 290 && st < 320)
    y = Math.floor(0.16 * st ** 3 + 24 * st ** 2 + 1200 * st + 7500);
  else if (st >= 320 && st < 350)
    y = Math.floor(0.17 * st ** 3 + 25.5 * st ** 2 + 1275 * st + 8750);
  else if (st >= 350)
    y = Math.floor(0.18 * st ** 3 + 27 * st ** 2 + 1350 * st + 10000);

  if (lv < 60 || lv > 300) alert("等級輸入錯誤(需大於等於60且小於等於300)");
  else if (st < 0) alert("星力輸入錯誤(需大於0)");
  else {
    var n = Math.floor(x + y);
    alert("戰力：" + n);
  }
}
