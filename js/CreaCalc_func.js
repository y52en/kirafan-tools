function CreaCalc(stamina, awaken, Num_of_awaken, possessed_star5, possessed_star4, num_of_member5, number_of_member4, staminaFactorType) {
  // stmFtypeによってstmに代入する数字を決定
  switch (staminaFactorType) {
    case "stamina":
      stamina = document.getElementById("stm_i").value; //入力欄の数字を代入
      //bondsがundefinedで不正チェックに引っかかるのを回避
      bonds = 0;
      break;
    case "Gkey":
      stamina = 40;
      break;
    case "Skey":
      stamina = 30;
      break;
    case "Cquest":
      stamina = 100;
      break;
    case "tickets":
      stamina = 35;
      break;
    case "bonds":
      const bonds = document.getElementById("bonds_i").value;
      //下の不正チェック回避のために一時的に0にする　不正チェック後10で割る
      //ここ偶然stmがundefinedで不正チェックに引っかかるのを回避してた
      stamina = 0;
      break;
  }

  //不正チェック
  if (
    (stamina || awaken || Num_of_awaken || number_of_member4 || num_of_member5 || possessed_star5 || possessed_star4 || bonds) % 1 !=
      0 ||
    (stamina || awaken || Num_of_awaken || number_of_member4 || num_of_member5 || possessed_star5 || possessed_star4 || bonds) < 0
  ) {
    result = "小数、マイナスは入力できません";
    return result;
  }
  if (number_of_member4 + num_of_member5 > 5) {
    result = "編成人数が不正です";
    return result;
  }
  if (awaken > 25) {
    result = "総覚醒数が不正です";
    return result;
  }
  if (Num_of_awaken > 5) {
    result = "フル覚醒人数が不正です";
    return result;
  }
  if (number_of_member4 > possessed_star4 || num_of_member5 > possessed_star5) {
    result = "所持人数より編成人数の方が多いです";
    return result;
  }
  if (Num_of_awaken > num_of_member5) {
    result = "編成人数よりフル覚醒人数の方が多いです";
    return result;
  }
  if (awaken > number_of_member4 * 4 + num_of_member5 * 5 + (5 - number_of_member4 - num_of_member5) * 3) {
    result = "総覚醒数、または編成人数が不正です";
    return result;
  }

  //ここでstmFtype==bondsの時bondsをstmに変換する
  if (staminaFactorType == "bonds") {
    stamina = bonds / 10;
  }

  //ファクター計算
  //Math.froundを使いすぎだと思うが、どこまで必要なのか分からないのでこのまま
  const stmF = Math.fround(Math.fround(stamina) * 0.02);
  const awknF = Math.fround(Math.fround(awaken) + 25 + Math.fround(Num_of_awaken) * 10);
  const possF = Math.fround(
    20 +
      Math.fround(num_of_member5) * Math.fround(7 + Math.min(possessed_star5, 5)) +
      Math.fround(
        Math.fround(number_of_member4) *
          Math.fround(1 + 0.4 * Math.fround(Math.min(possessed_star4, 5)))
      )
  );
  //クリエ計算
  const result = Math.ceil(
    Math.fround(Math.fround(stmF) * Math.fround(awknF) * Math.fround(possF))
  );

  return result;
}

/* 
計算式：https://twitter.com/UCieloSereno/status/1233659580309233666 

stmF=stm*0.02   //スタミナファクター
awknF=awkn+25+N_awkn*10     //覚醒ファクター
possF=20+memb5*(7+poss5) + memb4*(1+0.4*poss4)      //所持ファクター

*/
