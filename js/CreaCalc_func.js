function CreaCalc(stm, awkn, N_awkn, poss5, poss4, memb5, memb4, stmFtype) {

     // stmFtypeによってstmに代入する数字を決定
     switch (stmFtype){
       case "stamina":
        stm = document.getElementById("stm_i").value; //入力欄の数字を代入
        //bondsがundefinedで不正チェックに引っかかるのを回避
        bonds = 0
        break;
       case "Gkey":    
        stm = 40;
        break;
       case "Skey":
        stm = 30;
        break;
       case "Cquest":
        stm = 100;
        break;
       case "tickets":
        stm = 35
        break;
       case "bonds":
        var bonds = document.getElementById("bonds_i").value;
        //下の不正チェック回避のために一時的に0にする　不正チェック後10で割る
        //ここ偶然stmがundefinedで不正チェックに引っかかるのを回避してた
        stm = 0
        break;
     }  ;

    //不正チェック  
    if ((stm || awkn || N_awkn || memb4 || memb5 || poss5 || poss4 || bonds )%1 != 0 || 
        (stm || awkn || N_awkn || memb4 || memb5 || poss5 || poss4 || bonds )    < 0 )
    {result = "小数、マイナスは入力できません" ; return result};
    if (memb4 + memb5 > 5)
    {result = "編成人数が不正です" ; return result};
    if (awkn > 25)
    {result = "総覚醒数が不正です" ; return result};
    if (N_awkn > 5)
    {result = "フル覚醒人数が不正です" ; return result};
    if (memb4 > poss4 || memb5 > poss5)
    {result = "所持人数より編成人数の方が多いです" ; return result};
    if (N_awkn > memb5)
    {result = "編成人数よりフル覚醒人数の方が多いです" ; return result};
    if (awkn > memb4*4 + memb5*5 + (5 - memb4 - memb5)*3 )
    {result = "総覚醒数、または編成人数が不正です" ; return result}; 
   

    //ここでstmFtype==bondsの時bondsをstmに変換する
    if (stmFtype == "bonds"){
      stm = bonds / 10
    };



    //ファクター計算
    //Math.froundを使いすぎだと思うが、どこまで必要なのか分からないのでこのまま
    var stmF = Math.fround(Math.fround(stm) * 0.02);
    var awknF = Math.fround(Math.fround(awkn) + 25 + Math.fround(N_awkn) * 10);
    var possF = Math.fround(20 + Math.fround(memb5) * Math.fround(7 + Math.min(poss5,5)) 
                          + Math.fround(Math.fround(memb4) * Math.fround(1 + 0.4 * Math.fround( Math.min(poss4,5) ) )));
    //クリエ計算
    var result;
    result = Math.ceil(Math.fround(Math.fround(stmF) * Math.fround(awknF) * Math.fround(possF)));

    return result;
};

/* 
計算式：https://twitter.com/UCieloSereno/status/1233659580309233666 

stmF=stm*0.02   //スタミナファクター
awknF=awkn+25+N_awkn*10     //覚醒ファクター
possF=20+memb5*(7+poss5) + memb4*(1+0.4*poss4)      //所持ファクター

*/
