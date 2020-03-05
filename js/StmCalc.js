var fc , rtn , stamina , cs , tEX , ex; 

function StmErrCk (fc,rank,gwatch,swatch,bwatch,gkey,skey){
    var rtnErr
    if((rank || gwatch || swatch || bwatch || gkey || skey)%1 != 0 || 
       (rank || gwatch || swatch || bwatch || gkey || skey)    < 0 )
       {if (fc == "total")
             {rtnErr = "小数、マイナスは入力できません" ; return rtnErr;}
         else{rtnErr = "あ";}
       };
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
    fc = "notTotal";
    StmErrCk(fc,rank,gwatch,swatch,bwatch);
    cs = 25 ; ex = 4000;
    tEX = RemS(rank,gwatch,swatch,bwatch,cs,ex);
    return tEX
};

function StmCalc_h (rank,gwatch,swatch,bwatch){
    fc = "notTotal";
    StmErrCk(fc,rank,gwatch,swatch,bwatch);
    cs = 24 ; ex = 3600;
    tEX = RemS(rank,gwatch,swatch,bwatch,cs,ex);
    return tEX
};

function StmCalc_f (rank,gwatch,swatch,bwatch){
    fc = "notTotal";
    StmErrCk(fc,rank,gwatch,swatch,bwatch);
    cs = 24 ; ex = 3740;
    tEX = RemS(rank,gwatch,swatch,bwatch,cs,ex);
    return tEX
};

function ConvSt (rank,gwatch,swatch,bwatch){
    switch (rank){
        case rank < 16:
            stamina = rank*2 + 9;
            break;
        case rank >= 16 || rank < 20:
            stamina = rank + 24;
            break;
        case rank > 20:
            stamina = rank + 25;
            break;
   };
   rtn = stamina*((gwatch*1) + Math.floor(swatch*0.5) + Math.floor(bwatch*0.1));
   return rtn;
};
