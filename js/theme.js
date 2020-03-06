function themechanger(theme){

    //とりあえず全部無効
    document.getElementById("white").disabled = true;
    document.getElementById("dark").disabled = true;

    //
    if (theme == "dark"){
    document.getElementById("dark").disabled = false;
    window.localStorage.setItem('theme', 'dark');
    $('input[value="white"]').prop('checked', false);
    }

    if (theme == "white"){
    document.getElementById("white").disabled = false;
    window.localStorage.setItem('theme', 'white');
    $('input[value="dark"]').prop('checked', false);
    }

}




    //データ読み取り、関数実行
    var theme = window.localStorage.getItem("theme");
    if (theme != "white" && theme != "dark"){
        theme = "white" }
    themechanger (theme);

    

 /*   formElements.submit.disabled = false;
    formElements.submit.disabled = false;
    formElements.submit.disabled = false; */
