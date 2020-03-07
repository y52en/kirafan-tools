var fc , rtn , stamina , cs , tEX , ex , flagE; 

function errM_fn (fc,rank,gwatch,swatch,bwatch,gkey,skey){
    var rtnErr = "" ;
    if (rank <= 0 || rank > 120)
         if (fc == 1)
          {rtnErr ="ランクの値が不正です";
          }else{rtnErr = 1;};
    if((rank%1 != 0 || gwatch%1 != 0 || swatch%1 != 0 || bwatch%1 != 0 || gkey%1 != 0 || skey%1 != 0 )|| 
       (rank    < 0 || gwatch    < 0 || swatch    < 0 || bwatch    < 0 || gkey    < 0 || skey    < 0 )){
          if (fc == 1)
             {rtnErr ="小数、マイナスは入力できません";
            }else{rtnErr = 1;};
          };

        //ついでにランクの値セーブ
        window.localStorage.setItem('rank', rank);
    return rtnErr
};

function RemS (rank,gwatch,swatch,bwatch,cs,ex){
    if(rank < 16){
        stamina = rank*2 + 9;
    }else if(rank >= 16 || rank < 20){
        stamina = rank + 24;
    }else if(rank > 20){
        stamina = rank + 25 ;
    }

    var rtn = Math.floor(( (stamina*gwatch*1) + Math.floor(stamina*0.5)*swatch + Math.floor(stamina*0.1)*bwatch) / cs) * ex;
    return rtn;
};


function StmCalc_a (rank,gwatch,swatch,bwatch){
    fc = 0;
    flagE = errM_fn(fc,rank,gwatch,swatch,bwatch,0,0);
    if (flagE == 1){return ""}
    cs = 25 ; ex = 4000;
    tEX = RemS(rank,gwatch,swatch,bwatch,cs,ex).toLocaleString()
          +" ("+ (RemS(rank,gwatch,swatch,bwatch,cs,ex)/ex).toLocaleString() + "回)";
    return tEX
};

function StmCalc_h (rank,gwatch,swatch,bwatch){
    fc = 0;
    flagE = errM_fn(fc,rank,gwatch,swatch,bwatch,0,0);
    if (flagE == 1){return ""}
    cs = 24 ; ex = 3600;
    tEX = RemS(rank,gwatch,swatch,bwatch,cs,ex).toLocaleString()
          +" ("+ (RemS(rank,gwatch,swatch,bwatch,cs,ex)/ex).toLocaleString() + "回)";
    return tEX
};

function StmCalc_f (rank,gwatch,swatch,bwatch){
    fc = 0;
    flagE = errM_fn(fc,rank,gwatch,swatch,bwatch,0,0);
    if (flagE == 1){return "";}
    cs = 24 ; ex = 3740;
    tEX = RemS(rank,gwatch,swatch,bwatch,cs,ex).toLocaleString()
          +" ("+ (RemS(rank,gwatch,swatch,bwatch,cs,ex)/ex).toLocaleString() + "回)";
    return tEX
};

function StmCalc_ah (rank,gwatch,swatch,bwatch){
    fc = 0;
    flagE = errM_fn(fc,rank,gwatch,swatch,bwatch,0,0);
    if (flagE == 1){return ""}
    cs = 13 ; ex = 4000;
    tEX = RemS(rank,gwatch,swatch,bwatch,cs,ex).toLocaleString()
          +" ("+ (RemS(rank,gwatch,swatch,bwatch,cs,ex)/ex).toLocaleString() + "回)";
    return tEX
};

function StmCalc_hh (rank,gwatch,swatch,bwatch){
    fc = 0;
    flagE = errM_fn(fc,rank,gwatch,swatch,bwatch,0,0);
    if (flagE == 1){return ""}
    cs = 12 ; ex = 3600;
    tEX = RemS(rank,gwatch,swatch,bwatch,cs,ex).toLocaleString()
          +" ("+ (RemS(rank,gwatch,swatch,bwatch,cs,ex)/ex).toLocaleString() + "回)";
    return tEX
};

function StmCalc_fh (rank,gwatch,swatch,bwatch){
    fc = 0;
    flagE = errM_fn(fc,rank,gwatch,swatch,bwatch,0,0);
    if (flagE == 1){return "";}
    cs = 12 ; ex = 3740;
    tEX = RemS(rank,gwatch,swatch,bwatch,cs,ex).toLocaleString()
          +" ("+ (RemS(rank,gwatch,swatch,bwatch,cs,ex)/ex).toLocaleString() + "回)";
    return tEX
};



function ConvSt_fn (rank,gwatch,swatch,bwatch){
    fc = 0;
    flagE = errM_fn(fc,rank,gwatch,swatch,bwatch,0,0);
    if (flagE == 1){return ""}
    if(rank < 16){
        stamina = rank*2 + 9;
    }else if(rank >= 16 || rank < 20){
        stamina = rank + 24;
    }else if(rank > 20){
        stamina = rank + 25 ;
    }
   rtn = ((stamina*1)*gwatch + Math.floor(stamina*0.5)*swatch 
           + Math.floor(stamina*0.1)*bwatch).toLocaleString();
   return rtn;
};

function ToEx_fn (rank,remex){
    var a,b;
    a = rank_te[rank]; //現ランクまでの経験値所得
    b = rank_ne[rank] - remex; //次のランクに必要な-残りまで
    if (rank == 120 && remex == 0){
        return a
    }
    if (a + b < 0 || rank_ne[rank] < remex || remex <= 0 || rank == 120 && remex != 0){
        return "\"次のランクまで\"の値が不正です"
    }
    rtn = (a + b).toLocaleString();
    return rtn;
}

function hid_exN(){
    $("#exN").hide(0);

    $("#exN_bh").hide(0);
    $("#exN_bs").show(0);
    //状態セーブ
    window.localStorage.setItem("exN","hide");
}

function shw_exN(){
    $("#exN").show(0);

    $("#exN_bh").show(0);
    $("#exN_bs").hide(0);
    //状態セーブ
    window.localStorage.setItem("exN","show");
}

function hid_exH(){
    $("#exH").hide(0);

    $("#exH_bh").hide(0);
    $("#exH_bs").show(0);
    //状態セーブ
    window.localStorage.setItem("exH","hide");
}

function shw_exH(){
    $("#exH").show(0);

    $("#exH_bh").show(0);
    $("#exH_bs").hide(0);
    //状態セーブ
    window.localStorage.setItem("exH","show");
}