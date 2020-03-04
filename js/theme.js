var theme = window.localStorage.getItem("theme");
themechanger (theme);

function themechanger(theme){

    //とりあえず全部無効
    document.getElementById("white").disabled = true;
    document.getElementById("dark").disabled = true;

    //alert(theme)
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
    

 /*   formElements.submit.disabled = false;
    formElements.submit.disabled = false;
    formElements.submit.disabled = false; */
}