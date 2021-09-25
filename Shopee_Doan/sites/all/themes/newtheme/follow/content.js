
    sessionStorage.setItem('status','loggedIn');

//window.location.href = true;
    var check_login = document.getElementsByClassName('navbar__link--account__container');
    // if(check_login[0] == undefined){
    //     setTimeout(function() {
    //     window.location.replace("https://shopee.vn/buyer/login");
    //
    //     }, 2000);
    // }
        var evtFired = false;
        setTimeout(function() {
            if (!evtFired) {
                var check = document.getElementsByClassName('section-seller-overview-horizontal__button--following');
                // console.log(check);
                if(check[0] == undefined){
                    var eles = document.getElementsByClassName('shopee-button-outline shopee-button-outline--complement shopee-button-outline--fill');
                    eles[0].click();
                }
            }
        }, 1000);


