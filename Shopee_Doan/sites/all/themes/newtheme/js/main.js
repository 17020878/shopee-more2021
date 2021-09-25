

$(document).ready(function () {
    select_shop_show_detail();
    // SECLECT BOX FOLLOW
    $('.form_follow .searchBox__toggle').click(function () {
       $(this).parents('.form_down_fl').find('.dropdown-menu.wayBox').toggleClass('show');
    });
    $('.form_follow .wayBox button').click(function () {

        var name_file = $(this).text();
        $(this).parents('.form_follow').find('.form_down_fl span').text(name_file);
        $('.form_down_fl .dropdown-menu.wayBox').removeClass('show');
    });
    //FORM UP
    $('.form__up_follow .select__box_image').click(function () {
       $('.form__up_follow .wayBox').toggleClass('show');
    });
    $('.form__up_follow .wayBox button').click(function () {
       var name_file = $(this).text();
       $(this).parents('.form__up_follow').find('.select__box_image span').text(name_file);
        $('.form__up_follow .dropdown-menu.wayBox').removeClass('show');
    });
    //FORM DOWN
    $('.form__down_follow .select__file_client').click(function () {
        $('.form__down_follow .wayBox').toggleClass('show');
    });
    $('.form__down_follow .wayBox button').click(function () {

        var name_file = $(this).text();
        $(this).parents('.form__down_follow').find('.select__file_client span').text(name_file);
        $('.form__down_follow .dropdown-menu.wayBox').removeClass('show');
    });


    //SECLECT NAME SHOP
    $('.wayBox button').click(function () {
        //$('.name_shopp .three button').removeClass('active');
        $('.wayBox button').removeClass('active');
        $(this).addClass('active');
        var name_shop = $(this).text();
        $(this).parents('.name_shopp').find('.searchBox__toggle span').text(name_shop);
        $('.dropdown-menu.wayBox').removeClass('show');
    });
    // $('.name_shopp .three button').click(function () {
    //     $('.name_shopp .three button').removeClass('active');
    //     $('.name_shopp span').text('Shop Khác ...');
    //     $('.wayBox button').removeClass('active');
    //     $(this).addClass('active');
    //
    // });
    $('.name_shopp .searchBox__toggle').click(function () {
       $(this).next().toggleClass('show');
    });

    //SELECT NUMBER CLIENT
    $('button[name=select__number_client]').click(function () {
       $('.button__number_client').toggleClass('show');
    });
    $('.button__number_client button').click(function () {
       var number_client = $(this).text();
       $('.select__number_client span').text(number_client);
    });
    click_number_page();
    $('.dataTables_length').addClass('bs-select');
    search_spy_shopee();
    search_scan_customer();
    sort_tracking();
    sort_create_file();
    sort_point_client();
    create_file_client();
    click_button_follow();
    change_pass();
    login();
    click_button_create_client();
    click_selectBox_create_client();
    register();

    $('.tracking').click(function () {
        $('.no_data_product').addClass('d-none');
        loading();
    });


});

//XU LY LOADING MOI KHI LAY DU LIEU
function loading() {
    var keyword = $('#keyword_tracking').val();
    if(keyword != ''){
        $('.number').removeClass('active');
        $('.' + '1').parents('.number').addClass('active');

       add_loading('search_tracking');

        $('.th_loading').delay(1000000).fadeOut('fast');
        search_tracking(0);
    }else {
        var title =  `<a href="#" class="list-group-item">
        <div class="search-title">
        <b style="color: red!important; font-weight: 500" class="text-light">Vui lòng điền thông tin</b>
        </div>
      </a>`;
        $('.list-group').html(title);
        return false;
    }

}

function add_loading(id) {
    $('#' + id).html('<tr>' +
        '    <th style="color: #000" class="th_loading d-none">' +
        '        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/93/loader.gif" alt="Loading..." class="loading">' +
        '        <br />Vui lòng chờ ...' +
        '    </th>' +
        '</tr>');
    $('.th_loading').removeClass('d-none');
}

//HAM KIEM TRA EMAIL COA VALIDATE KHONG
function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

//HAM FORMAT TIEN
function format_money(n) {
    n = n / 100000;
    money = n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    money = money.replace('.0', '');
    return money;
}

//HAM FORMAT THOI GIAN THEO GIO PHUT NGAY THANG NAM
function format_time_stamp(time) {
    timestamp = time * 1000;
    date = new Date(timestamp);
    return date.getDate()+
        "/"+(date.getMonth()+1)+
        "/"+date.getFullYear()+
        " "+date.getHours()+
        ":"+date.getMinutes()+
        ":"+date.getSeconds();
}

//HAM LAM TRON
function roundUp(num, precision) {
    precision = Math.pow(10, precision);
    return Math.ceil(num * precision) / precision
}

//HAM AJAX LAY DU LIEU CUA SAN PHAM KHI NHAP TU KHOA
function search_tracking(pager) {


        var keyword = $('#keyword_tracking').val();
        if(!validateEmail(keyword)) {

            $.ajax({
                url: Drupal.settings.basePath + 'ajax',
                data: {act:'tracking', keyword_tracking: keyword,pager:pager},
                async: true,
                type: "POST",
                success: function (resp) {
                    var obj = JSON.parse(resp);
                    //console.log(resp);
                    var data = get_data_search_tracking(obj);
                    $('#search_tracking').html(data);
                    $('.th_loading').addClass('d-none');
                    $('.page_number_tracking').removeClass('d-none');
                    get_product_detail();
                    tracking_lots_of_product();

                }});
        }
        return false;


}

//PHAN TICH DU LIEU TU JSON, TRA VE HTML
function get_data_search_tracking(obj) {
    var data = '';
    var count = 0;
    var image = '';
    var image_link = '';
    var name_product = '';
    var price_max_before_discount = 0;
    var price_min_before_discount = 0;
    var price_before_discount = 0;
    var show_discount = '';
    var price_min = 0;
    var price_max = 0;
    var price = 0;
    var rating_star = '';
    var view_count = '';
    var ctime = '';
    var cmt_count = 0;
    var liked_count = 0;
    var historical_sold = '';
    var sale = 0;
    var stock = '';
    var shop_location = '';
    var scale = '';
    var itemid = '';
    var shopid = '';
    for(var i = 0; i < (obj.items).length; i++){
        count++;
        image = obj.items[i].image;
        image_link = 'https://shopee.vn/+'+encodeURIComponent(obj.items[i].name) +'-i.'+ obj.items[i].shopid +'.'+ obj.items[i].itemid;
        name_product = obj.items[i].name.substring(0, 80)+ '...';
        price_min_before_discount = format_money(obj.items[i].price_min_before_discount);
        price_max_before_discount = format_money(obj.items[i].price_max_before_discount);

        if(obj.items[i].price_min_before_discount != obj.items[i].price_max_before_discount){
            price_before_discount = price_min_before_discount + ' vnđ - ' + price_max_before_discount + ' vnđ';

        }else if(obj.items[i].price_min_before_discount == obj.items[i].price_max_before_discount && obj.items[i].price_min_before_discount > 0){
            price_before_discount = price_min_before_discount + ' vnđ';
        }else if(obj.items[i].price_min_before_discount == obj.items[i].price_max_before_discount && obj.items[i].price_min_before_discount < 0) {
            price_before_discount = 0;
        }
        show_discount = obj.items[i].show_discount + '%';
        price_min = format_money(obj.items[i].price_min);
        price_max = format_money(obj.items[i].price_max);
        if(price_max != price_min){
            price = price_min + ' vnđ - ' + price_max + ' vnđ';
            sale =  format_money(obj.items[i].price_min * obj.items[i].historical_sold) + ' vnđ - ' + format_money(obj.items[i].price_max * obj.items[i].historical_sold) + ' vnđ';
        }else {
            price = price_min + ' vnđ';
            sale =  format_money(obj.items[i].price_min * obj.items[i].historical_sold) + ' vnđ';
        }
        rating_star =  roundUp(obj.items[i].item_rating.rating_star, 2);
        view_count =  obj.items[i].view_count;
        ctime =  format_time_stamp(obj.items[i].ctime);
        cmt_count =  obj.items[i].cmt_count;
        liked_count =  obj.items[i].liked_count;
        historical_sold =  obj.items[i].historical_sold;

        stock =  obj.items[i].stock;
        shop_location =  obj.items[i].shop_location;
        if(obj.items[i].historical_sold == 0 || view_count == 0){
            scale = '0%';
        }else {
            scale =  roundUp((obj.items[i].historical_sold / view_count) * 100, 2) + ' %';
        }
        itemid = obj.items[i].itemid;
        shopid = obj.items[i].shopid;

        data +=
            '   <tr price="'+ obj.items[i].price_min +'" rating_star="'+ rating_star * 100 +'" view_count="'+ view_count +'" cmt_count="'+ cmt_count +'" liked_count="'+ liked_count +'" historical_sold="'+ historical_sold +'" sale="'+ obj.items[i].price_min * obj.items[i].historical_sold +'" scale="'+ roundUp((obj.items[i].historical_sold / view_count) * 100, 2) * 100 +'" >' +
            '       <td class="check_box_search_tracking"><input type="checkbox" number="'+ count +'" id="fruit'+ i +'" itemid="'+ itemid +'" shopid="'+ shopid +'" name="fruit-1" value="Apple"><label for="fruit'+ i +'"></label></td>' +
            '       <td><span class="badge badge-success">'+ count +'</span></td>' +
            '       <td><a target="_blank" href="'+ image_link +'"><img src="https://cf.shopee.vn/file/'+ image +'" alt="User Avatar" class="img-size-50 img-circle"></a></td>' +
            '       <td data-toggle="modal" data-target="#detailProductPopup" itemid="'+ itemid +'" shopid="'+ shopid +'" class="name_list buttton_detail_product">'+ name_product +'</td>' +
            '       <td><span class="">'+ price_before_discount +'</span></td>' +
            '       <td><span class="">'+ show_discount +'</span></td>' +
            '       <td><span class="">'+ price +'</span></td>' +
            '       <td><span class="">'+ rating_star +'</span></td>' +
            '       <td><span class="">'+ view_count +'</span></td>' +
            '       <td><span class="">'+ ctime +'</span></td>' +
            '       <td><span class="">'+ cmt_count +'</span></td>' +
            '       <td><span class="">'+ liked_count +'</span></td>' +
            '       <td><span class="">'+ historical_sold +'</span></td>' +
            '       <td><span class="">'+ sale +'</span></td>' +
            '       <td><span class="">'+ stock +'</span></td>' +
            '       <td><span class="">'+ shop_location +'</span></td>' +
            '       <td><span class="">'+ scale +'</span></td>' +
            '   </tr>';
    }
    return data;
}

//PHAN TRANG            1          2           3            4           5           6
function click_number_page() {
    var number_page = 0;
    var number = 0;
    var layout_number = '';
    var itemid = '';
    var shopid= '';
    var i = 0;
    var pre;
    $('.number a').click(function () {
        var type_page = $(this).parents('.card-footer.clearfix').attr('id');
       // var type = $(this).parents('.paginate_button').attr('id');
        $('.' + type_page +' .number').removeClass('active');
        $(this).parents('.number').addClass('active');
        number = $(this).attr('data-dt-idx');

        if(type_page == 'page_number_tracking'){
            add_loading('search_tracking');
            search_tracking(number);
        }if(type_page == 'page_number_lots_of_detail'){
            add_loading('box_comment');
            itemid = $('input[name=page_number]').attr('itemid');
            shopid = $('input[name=page_number]').attr('shopid');
            var type_rating_box_comment = $(this).parents('.bodyDetailProduct').find('.span_text.active').attr('type_rating');
            var id_rating_box_comment = $(this).parents('.bodyDetailProduct').find('.span_text.active').attr('id');
            if(type_rating_box_comment == 'type'){
                ajax_click_box_rating_comment(id_rating_box_comment, 'type', number);
            } else if(type_rating_box_comment == 'filter'){
                ajax_click_box_rating_comment(id_rating_box_comment, 'filter', number);
            } else if(type_rating_box_comment == '' && id_rating_box_comment == ''){
                ajax_click_box_rating_comment(0, 'type', number);
            } else{
                ajax_get_detail_product(itemid, shopid, 'page_number', '', number);
            }
        }if(type_page == 'page_create_file'){
            $('.scan_client').addClass('d-none');
            $('#loading_create_file .th_loading').removeClass('d-none');
            ajax_scan_customer(number);
        }if(type_page == 'page_number_spy_shopee'){
            add_loading('spy_shop');
            ajax_search_spy_shopee(number);
        }
    });

    //nhan nut next trong page number
    $('#example_next.next').click(function () {
        $('.paginate_button.previous').removeClass('disabled');
        var type_page = $(this).parents('.card-footer.clearfix').attr('id');
        number_page = $(this).attr('num');
        number_page++;
        var idx = 1;
        $('#example1_paginate .previous').attr('num', number_page);
        $('.' + type_page + ' .number').removeClass('active');
        $('.'+ type_page + ' .' + idx).parents('.number').addClass('active');
        for( i = number_page; i < number_page + 6; i++){
           $('.' + type_page + ' .number a.'+ idx +'').text(i);
           $('.' + type_page + ' .number a.'+ idx +'').attr('data-dt-idx', i);
           idx++;
        }
        i--;
        $(this).attr('num', i);
        if(type_page == 'page_number_tracking'){
            add_loading('search_tracking');
            search_tracking(number_page);
        }if(type_page == 'page_number_lots_of_detail'){
            loading('box_comment');
            itemid = $('input[name=page_number]').attr('itemid');
            shopid = $('input[name=page_number]').attr('shopid');
            var type_rating_box_comment = $(this).parents('.bodyDetailProduct').find('.span_text.active').attr('type_rating');
            var id_rating_box_comment = $(this).parents('.bodyDetailProduct').find('.span_text.active').attr('id');
            if(type_rating_box_comment == 'type'){
                ajax_click_box_rating_comment(id_rating_box_comment, 'type', number_page);
            } else if(type_rating_box_comment == 'filter'){
                ajax_click_box_rating_comment(id_rating_box_comment, 'filter', number_page);
            } else if(type_rating_box_comment == '' && id_rating_box_comment == ''){
                ajax_click_box_rating_comment(0, 'type', number_page);
            } else{
                ajax_get_detail_product(itemid, shopid, 'page_number', '', number_page);
            }
        }if(type_page == 'page_number_spy_shopee'){
            add_loading('spy_shop');
            ajax_search_spy_shopee(number_page);
        }
    });

    //nhan nut previous trong page number
    $('#example_previous.previous').click(function () {
        var type_page = $(this).parents('.card-footer.clearfix').attr('id');
        number_page = $(this).attr('num');
        number_page--;
        $('#example_next.next').attr('num', number_page);
        var start = number_page - 5;
        var idx = 1;
        $('.' + type_page + ' .number').removeClass('active');
        $('.'+ type_page + ' .' + idx).parents('.number').addClass('active');
        for( i = start; i <= number_page; i++){
            $('.' + type_page + ' .number a.'+ idx +'').text(i);
            $('.' + type_page + ' .number a.'+ idx +'').attr('data-dt-idx', i);
            idx++;
        }
        i--;
        $(this).attr('num', start);
        if(type_page == 'page_number_tracking'){
            add_loading('search_tracking');
            search_tracking(start);
        }if(type_page == 'page_number_lots_of_detail'){
            loading('box_comment');
            itemid = $('input[name=page_number]').attr('itemid');
            shopid = $('input[name=page_number]').attr('shopid');
            var type_rating_box_comment = $(this).parents('.bodyDetailProduct').find('.span_text.active').attr('type_rating');
            var id_rating_box_comment = $(this).parents('.bodyDetailProduct').find('.span_text.active').attr('id');
            if(type_rating_box_comment == 'type'){
                ajax_click_box_rating_comment(id_rating_box_comment, 'type', start);
            } else if(type_rating_box_comment == 'filter'){
                ajax_click_box_rating_comment(id_rating_box_comment, 'filter', start);
            } else if(type_rating_box_comment == '' && id_rating_box_comment == ''){
                ajax_click_box_rating_comment(0, 'type', start);
            } else{
                ajax_get_detail_product(itemid, shopid, 'page_number', '', start);
            }
        }if(type_page == 'page_number_spy_shopee'){
            add_loading('spy_shop');
            ajax_search_spy_shopee(start);
        }
    });
}
//HAM CHON NHIEU SAN PHAM ROI CHO VAO INPUT (CHON NHIEU SAN PHAM)
function tracking_lots_of_product() {
    var itemid = '';
    var shopid = '';
    var input = '';
    var number_shop = 0;
    $('input[name=fruit-1]').click(function () {
        number_shop++;
        itemid = $(this).attr('itemid');
        shopid =  $(this).attr('shopid');
        var number = $(this).attr('number');
        ajax_get_detail_product(itemid, shopid, 'multi', number, 0);
        text_number_shop = 'Xem ' + number_shop + ' shop';
        $('.detail_lots_of_product .info-box-content strong').text(text_number_shop);

        //hien thi loading khi nao chay xong du lieu thi hien thi
        $('.page_detail_lots_of_product .name_shopp').addClass('d-none');
        $('.page_detail_lots_of_product .th_loading').removeClass('d-none');
    });
}

//LAY DU LIEU CUA MOT SAN PHAM DE CHUAN BI SHOW RA
function get_product_detail() {
    var itemid = '';
    var shopid = '';
    $('.buttton_detail_product').click(function () {
        $('.loading_center .loading_detail_one').removeClass('d-none');
        $('.loading_center .container-fluid').addClass('d-none');
        $('.page_number_lots_of_detail .paginate_button.number').removeClass('active');
        $('.page_number_lots_of_detail .previous').next().addClass('active');
        for( i = 1; i < 7; i++){
            $('.page_number_lots_of_detail' + ' .number a.'+ i +'').text(i);
            $('.page_number_lots_of_detail' + ' .number a.'+ i +'').attr('data-dt-idx', i);
        }
        $('.page_number_lots_of_detail .previous ').attr('num', 1);
        $('.page_number_lots_of_detail .previous a').attr('data-dt-idx', 0);
        $('.page_number_lots_of_detail .next ').attr('num', 6);
        $('.page_number_lots_of_detail .next a').attr('data-dt-idx', 7);

        itemid = $(this).attr('itemid');
        shopid =  $(this).attr('shopid');
        ajax_get_detail_product(itemid, shopid, 'one', 0);
    });
}

//AJAX LẤY DƯ LIEU CUA SAN PHAM (CA MOT VA NHIEU SAN PHAM)
function ajax_get_detail_product(itemid, shopid, type, number, pager) {
    if(itemid) {

        $.ajax({
            url: Drupal.settings.basePath + 'ajax',
            data: {act: 'get_product_detail', itemid: itemid, shopid: shopid, pager: pager},
            async: true,
            type: "POST",
            success: function (resp) {
                //console.log(resp);
                var obj = JSON.parse(resp);
                if(type == 'one'){
                    itemid = obj.item.itemid;
                    shopid =  obj.data.shopid;
                    $('input[name=page_number]').attr('itemid', itemid);
                    $('input[name=page_number]').attr('shopid', shopid);
                    show_product_detail(obj);
                    show_evaluate_left(obj);
                    show_evaluate_right(obj);
                    show_comment(obj);
                    $('.page_number_lots_of_detail').removeClass('d-none');
                }if(type == 'multi'){
                    $('input[name=product_'+ number +']').val(resp);
                    var name_shop = obj.data.name;

                    $('.name_shopp button#shop' + number).text(name_shop);
                    $('.name_shopp button#shop' + number).removeClass('d-none');
                    $('.name_shopp').removeClass('d-none');
                    $('.page_detail_lots_of_product .th_loading').addClass('d-none');
                }if(type = 'page_number') {
                    show_lots_of_shop_detail(obj);
                    show_lots_of_evaluate_left(obj);
                    show_lots_of_evaluate_right(obj);
                    show_lots_of_comment(obj);
                    $('.th_loading').addClass('d-none');
                }
                click_box_rating_comment();
            }
        });
    }
}



//CLICK VAO SECLECT BOX DE CHON SHOP MUON XEM
function select_shop_show_detail() {
    var type = '';
    var idx = '';
    var json_input = '';
    var obj;
    var itemid = '';
    var shopid = '';

    $('.name_shopp button.dropdown-item').click(function () {
        $('.no_data_cmt').addClass('d-none');
        $('.body_lots_of_detail').removeClass('d-none');
        $('.page_number_lots_of_detail').removeClass('d-none');
       type = $(this).attr('id');
       idx = type.split('shop')[1];

       json_input = $('input[name=product_'+ idx +']').val();
       obj = JSON.parse(json_input);
       itemid = obj.item.itemid;
        shopid =  obj.data.shopid;
        $('input[name=page_number]').attr('itemid', itemid);
        $('input[name=page_number]').attr('shopid', shopid);
        $('input[name=page_number]').attr('number', idx);
        show_lots_of_shop_detail(obj);
        show_lots_of_evaluate_left(obj);
        show_lots_of_evaluate_right(obj);
        show_lots_of_comment(obj);
        click_box_rating_comment();

    });
}

//HIEN THI THONG TIN CUA SHOP KEM SAN PHAM (CHUC NANG XEM NHIEU SHOP)
function show_lots_of_shop_detail(obj) {
    var name_product = obj.item.name;
    var link_image_product = "https://cf.shopee.vn/file/"+ obj.item.images[0]+ ""; // anh cua san pham
    var link_avt_shop = "https://cf.shopee.vn/file/"+ obj.data.account.portrait + ""; //anh cua shop
    if(obj.data.account.portrait == '' || obj.data.account.portrait == null){
        link_avt_shop = '/Shopee_Doan/sites/all/themes/newtheme/images/no_avt.png';
    }
    var name_shop = obj.data.name; //ten cua shop
    var item_count = obj.data.item_count; //tong san phan cua shop
    var follower_count = obj.data.follower_count; // so nguoi theo doi
    var following_count = obj.data.account.following_count; // so nguoi shop dang theo doi
    var response_rate = obj.data.response_rate; // ti le phan hoi
    var response_time = roundUp(obj.data.response_time / 3600, 2); //thoi gian phan hoi
    var ctime = format_time_stamp(obj.data.ctime); //thoi gian tao shop
    var rating_bad = obj.data.rating_bad;
    var rating_good = obj.data.rating_good;
    var rating_normal = obj.data.rating_normal;
    var rating_total = rating_bad + rating_good + rating_normal;
    var rating_star =  roundUp(obj.data.rating_star,1);
    var username =obj.data.account.username;
    var link_shop = 'https://shopee.vn/'+ username +'';

    var info_shop =
        '              <div style="padding: 10px 0">' +
        '                  <strong>'+ name_product +'</strong>' +
        '              </div>' +
        '              <div class="row invoice-info">' +
        '                  <div class="col-sm-2 invoice-col">' +
        '                      <img src="'+ link_image_product +'" style="width: 11vw;">' +
        '                  </div>' +
        '                  <div class="col-sm-3 invoice-col">' +
        '                      <h3> Thông tin shop bán</h3>' +
        '                      <img style="border-radius: 45px; width: 6vw;" src="'+ link_avt_shop +'"><br>' +
        '                      <strong>Tên shop: '+ name_shop +'</strong>' +
        '                  </div>' +
        '                  <div class="col-sm-3 invoice-col info_shop">' +
        '                      <strong>Sản phẩm: '+ item_count +'</strong><br>' +
        '                      <strong>Đang theo dõi: '+ following_count +'</strong><br>' +
        '                      <strong>Tỉ lệ phản hồi Chat: '+ response_rate +'% (trong '+ response_time +' giờ)</strong><br>' +
        '                      <strong>Tham gia: '+ ctime +'</strong>' +
        '                  </div>' +
        '                  <div class="col-sm-4 invoice-col info_shop">' +
        '                      <strong>Đánh giá: '+ rating_star +' ('+ rating_total +' đánh giá)</strong><br>' +
        '                      <strong>Đánh giá tốt - xấu - bình thường ('+ rating_good +' - '+ rating_bad +' - '+ rating_normal +')</strong><br>' +
        '                      <strong>Người theo dõi: '+ follower_count +'</strong><br>' +
        '                      <a target="_blank" href="'+ link_shop +'"><strong>Link shop: '+ link_shop +'</strong></a>' +
        '                  </div>' +
        '              </div>';

    $('.detail_lots_of_info_shop').html(info_shop);
}


//HIEN THI DU LIEU BEN TRAI CUA BOX RATING STAR (CHUC NANG XEM NHIEU SHOP)
function show_lots_of_evaluate_left(obj) {

    var rating_star = roundUp(obj.item.item_rating.rating_star, 1);

    if(rating_star == 5 || rating_star == 4 || rating_star == 3 || rating_star == 2 || rating_star == 1 ){
        rating_star = rating_star + '.0 trên 5';
    }else {
        rating_star = rating_star + ' trên 5';
    }
    $('.star_evaluate span').text(rating_star);
    var num_star = Math.floor(obj.item.item_rating.rating_star);
    var svg_star = '';
    for(var i = 1; i <= num_star; i++){
        svg_star += ' <svg fill="#ee4d2d" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
            '                                         viewBox="0 0 512.002 512.002" width="30" height="30" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve"><g><g><path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955C511.56,208.649,513.033,202.688,511.267,197.258z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>' +
            '                                    </svg>';
    }
    if(num_star < 5){
        var hundred = roundUp(obj.item.item_rating.rating_star, 1) * 100;
        var surplus = hundred % 100;
        if(surplus <= 50 && surplus > 0){
            svg_star += '<svg  fill="#ee4d2d" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
                '                                          width="30" height="30" viewBox="0 0 475.044 475.044" style="enable-background:new 0 0 475.044 475.044;" xml:space="preserve"><g><path d="M474.487,183.276c-1.711-5.236-6.852-8.52-15.41-9.851l-143.323-20.839L251.52,22.681c-4-7.804-8.661-11.704-13.989-11.704\tc-5.519,0-10.183,3.9-13.988,11.704l-64.241,129.905L15.978,173.425c-8.564,1.332-13.704,4.615-15.415,9.851\tc-1.709,5.236,0.478,10.898,6.567,16.989l103.924,101.068L86.501,444.082c-0.95,6.286-0.381,11.173,1.715,14.702\tc2.092,3.524,5.33,5.283,9.707,5.283c3.237,0,7.043-1.14,11.42-3.433l128.194-67.382l128.19,67.382\tc4.377,2.286,8.186,3.433,11.423,3.433c4.381,0,7.622-1.759,9.709-5.283c2.088-3.529,2.659-8.416,1.708-14.702l-24.551-142.749\tl103.63-101.068C473.93,194.174,476.212,188.512,474.487,183.276z M338.597,275.065l-13.99,13.421l3.43,18.843l17.128,101.357\tl-90.786-47.965l-16.848-8.856V76.927l45.395,91.933l8.559,17.128l18.85,2.856l101.642,14.844L338.597,275.065z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>' +
                '                                    </svg>';
        }else if(surplus > 50 && surplus < 90){
            svg_star += '<svg width="30" height="30" viewBox="0 0 229 229" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '                                        <g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M145.137 82.8794L114.5 20.8044L83.862 82.8794L15.3596 92.8341L64.9275 141.153L53.2279 209.38L114.5 177.167L175.77 209.38L164.067 141.153L213.64 92.834L145.137 82.8794ZM177.994 222.677L114.5 189.295L51.0032 222.678C50.0219 223.194 48.9503 223.448 47.8822 223.448C46.4912 223.448 45.1069 223.016 43.9382 222.167C41.8723 220.666 40.8374 218.123 41.2694 215.605L53.3939 144.901L2.02649 94.8276C0.197632 93.0452 -0.460741 90.3791 0.32868 87.95C1.11765 85.5214 3.21756 83.7511 5.74415 83.3843L76.7339 73.0682L108.484 8.73957C109.614 6.44958 111.947 5 114.5 5C117.054 5 119.386 6.44958 120.516 8.73957L152.265 73.0682L223.256 83.3843C225.783 83.7511 227.882 85.5214 228.671 87.9505C229.461 90.3791 228.802 93.0452 226.974 94.8271L175.601 144.901L187.729 215.605C188.161 218.122 187.125 220.666 185.059 222.167C182.993 223.668 180.255 223.865 177.994 222.677ZM51.849 217.421L51.8493 217.42ZM7.28617 94.0073L7.28784 94.0071ZM110.89 13.4889L110.89 13.4903Z" fill="#EE4D2D"/><path fill-rule="evenodd" clip-rule="evenodd" d="M152 72.5309L120.516 8.73957C119.386 6.44958 117.054 5 114.5 5C111.947 5 109.614 6.44958 108.484 8.73957L76.7339 73.0682L5.74415 83.3843C3.21756 83.7511 1.11765 85.5214 0.32868 87.95C-0.460741 90.3791 0.197632 93.0452 2.02649 94.8276L53.3939 144.901L41.2694 215.605C40.8374 218.123 41.8723 220.666 43.9382 222.167C45.107 223.016 46.4912 223.448 47.8822 223.448C48.9503 223.448 50.0219 223.194 51.0032 222.678L114.5 189.295L152 209.011V72.5309Z" fill="#EE4D2D"/></g><defs><clipPath id="clip0"><rect width="229" height="229" fill="white"/></clipPath></defs>' +
                '                                    </svg>';
        }else if(surplus >= 90) {
            svg_star += ' <svg fill="#ee4d2d" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
                '                                         viewBox="0 0 512.002 512.002" width="30" height="30" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve"><g><g><path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955C511.56,208.649,513.033,202.688,511.267,197.258z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>' +
                '                                    </svg>';
        }
    }
    $('.num_star_lots_of').html(svg_star);

}

//HIEN THI DU LIEU BEN PHAI CUA BOX RATING STAR (CHUC NANG XEM NHIEU SHOP)
function show_lots_of_evaluate_right(obj) {

    var one_star = obj.rating.data.item_rating_summary.rating_count[0];
    var two_star = obj.rating.data.item_rating_summary.rating_count[1];
    var three_star = obj.rating.data.item_rating_summary.rating_count[2];
    var four_star = obj.rating.data.item_rating_summary.rating_count[3];
    var five_star = obj.rating.data.item_rating_summary.rating_count[4];
    var all_star = obj.rating.data.item_rating_summary.rating_total;
    var rcount_with_media = obj.rating.data.item_rating_summary.rcount_with_media;
    var rcount_with_context = obj.rating.data.item_rating_summary.rcount_with_context;

    var number_star =
        '                                       <div class="span_text active" id="0" type_rating="type">' +
        '                                           <span>Tất cả ('+ all_star +')</span>' +
        '                                       </div>' +
        '                                       <div class="span_text" id="5" type_rating="type">' +
        '                                           <span>5 sao ('+ five_star +')</span>' +
        '                                       </div>' +
        '                                       <div class="span_text" id="4" type_rating="type">' +
        '                                           <span>4 sao ('+ four_star +')</span>' +
        '                                       </div>' +
        '                                       <div class="span_text" id="3" type_rating="type">' +
        '                                           <span>3 sao ('+ three_star +')</span>' +
        '                                       </div>' +
        '                                       <div class="span_text" id="2" type_rating="type">' +
        '                                           <span>2 sao ('+ two_star +')</span>' +
        '                                       </div>' +
        '                                       <div class="span_text" id="1" type_rating="type">' +
        '                                           <span>1 sao ('+ one_star +')</span>' +
        '                                       </div>' +
        '                                       <div class="span_text" id="3" type_rating="filter">' +
        '                                           <span>Có hình ảnh/video ('+ rcount_with_media +')</span>' +
        '                                       </div>' +
        '                                       <div class="span_text" id="1" type_rating="filter">' +
        '                                           <span>Có bình luận ('+ rcount_with_context +')</span>' +
        '                                       </div>';
    $('.show_evaluate_right_lots_of').html(number_star);
}


//HAM HIEN THI COMMENT KHI DA LAY DUOC CHI TIET SAN PHAM (CHUC NANG XEM NHIEU SHOP)
function show_lots_of_comment(obj) {
    // console.log(obj);
    var url_author_shopid = '';
    var rating_star = 0;
    var star_html1 = '';
    var star_html2 = '';
    var author_username = '';
    var link_author_portrait = '';
    var url_video = '';
    var comment = '';
    var tags = '';
    var image = '';
    var mtime = '';
    var box_comment = '';
    var hieu = 0;
    var dnone = '';
    var image_comment = '';
    var id_count = 0;

    if(obj.rating.data.ratings){
        for(var i = 0; i < (obj.rating.data.ratings).length; i++) {
            url_author_shopid = 'https://shopee.vn/shop/'+ obj.rating.data.ratings[i].author_shopid +''; //link id cua shop
            author_username = obj.rating.data.ratings[i].author_username; //ten nguoi comment
            if(author_username == null || author_username == ''){
                author_username = 'Người dùng Shopee';
            }
            rating_star = obj.rating.data.ratings[i].rating_star;
            hieu =  5- rating_star;

            //hien thi sao cua ngươi comment
            for(var f = 1; f <= rating_star; f++){
                star_html1 += '<svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon icon-rating-solid--active icon-rating-solid"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon></svg>';
            }
            for(var l = 1; l <= hieu; l++){
                star_html2 += '<svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon icon-rating"><polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon></svg>';
            }

            link_author_portrait = "https://cf.shopee.vn/file/"+ obj.rating.data.ratings[i].author_portrait + ""; //anh nguoi dang
            //neu khong co avt
            if(obj.rating.data.ratings[i].author_portrait == null || obj.rating.data.ratings[i].author_portrait == ''){
                link_author_portrait = '/Shopee_Doan/sites/all/themes/newtheme/images/no_avt.png';
            }

            //comment
            comment =  obj.rating.data.ratings[i].comment; // comment
            if(comment == ''){
                comment = 'Không có bình luận';
            }

            //tag
            if(obj.rating.data.ratings[i].tags){
                for(var k = 0; k < (obj.rating.data.ratings[i].tags).length; k++) {
                    tags += '<div class="shopee-product-rating__tag">'+ obj.rating.data.ratings[i].tags[k].tag_description +'</div>';
                }
            }else{
                tags = '';
            }
            //kiem tra co video khong
            if((obj.rating.data.ratings[i].videos).length > 0){
                dnone = '';
                url_video = obj.rating.data.ratings[i].videos['0'].url; //url video mp4
                cover = '<div class="shopee-rating-media-list-image__content" style="background-image: url(&quot;'+ obj.rating.data.ratings[i].videos['0'].cover +'&quot;);"></div>';  //anh cover video
            }else {
               dnone = 'd-none';
                cover = '';
            }

            //kiem tra co anh khong
            if(obj.rating.data.ratings[i].images){
                for(var j = 0; j < (obj.rating.data.ratings[i].images).length; j++){
                    id_count = j + 1;
                    code_image = obj.rating.data.ratings[i].images[j];
                    image +=
                        '<div class="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive" id="'+ id_count +'">' +
                        '    <div class="shopee-rating-media-list-image__wrapper" >' +
                        '         <div class="shopee-rating-media-list-image__place-holder" >' +
                        '             <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon icon-loading-image"><g><rect fill="none" height="8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="10" x="1" y="4.5"></rect><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1" x2="11" y1="6.5" y2="6.5"></line><rect fill="none" height="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="3" x="11" y="6.5"></rect><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1" x2="11" y1="14.5" y2="14.5"></line><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="6" x2="6" y1=".5" y2="3"></line><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="3.5" x2="3.5" y1="1" y2="3"></line><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="8.5" x2="8.5" y1="1" y2="3"></line></g></svg>' +
                        '         </div>' +
                        '         <div class="shopee-rating-media-list-image__content" style="background-image: url(&quot;https://cf.shopee.vn/file/'+ code_image +'&quot;);">' +
                        '             <div class="shopee-rating-media-list-image__content--blur" > </div>' +
                        '         </div>' +
                        '    </div>' +
                        '</div> ';

                    image_comment +=
                        '  <li class="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid media_'+ id_count +' d-none" id="'+ id_count +'" style="padding: 0 0.625rem;">' +
                        '      <img class="rating-media-list__zoomed-image-item" src="https://cf.shopee.vn/file/'+ code_image +'">' +
                        '  </li>';
                }
            }else{
               image = '';
               image_comment = '';
            }
            mtime = format_time_stamp(obj.rating.data.ratings[i].mtime);

            box_comment +=
                ' <div class="shopee-product-rating">' +
                '      <a target="_blank" class="shopee-product-rating__avatar" href="'+ url_author_shopid +'">' +
                '           <div class="shopee-avatar">' +
                '                <div class="shopee-avatar__placeholder" >' +
                '                     <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon icon-headshot"><g><circle cx="7.5" cy="4.5" fill="none" r="3.8" stroke-miterlimit="10"></circle><path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path></g></svg>' +
                '                </div>' +
                '                <img class="shopee-avatar__img" src="'+ link_author_portrait +'">' +
                '           </div>' +
                '      </a>' +
                '      <div class="shopee-product-rating__main">' +
                '           <a target="_blank" class="shopee-product-rating__author-name" href="'+ url_author_shopid +'">'+ author_username +'</a>' +
                '           <div class="shopee-product-rating__rating">' +
                    star_html1 +
                    star_html2 +
                '            </div>' +
                '            <div class="shopee-product-rating__content" >'+ comment +'</div>' +
                '            <div class="shopee-product-rating__tags">' +
                    tags +
                '            </div>' +
                '            <div class="shopee-product-rating__image-list-wrapper">' +
                '               <div class="rating-media-list">' +
                '                   <div class="rating-media-list__container">' +
                '                       <div class="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive '+ dnone +'" id="0">' +
                '                           <div class="shopee-rating-media-list-image__wrapper">' +
                '                               <div class="shopee-rating-media-list-image__place-holder">' +
                '                                   <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon icon-loading-image"><g><rect fill="none" height="8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="10" x="1" y="4.5"></rect><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1" x2="11" y1="6.5" y2="6.5"></line><rect fill="none" height="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="3" x="11" y="6.5"></rect><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1" x2="11" y1="14.5" y2="14.5"></line><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="6" x2="6" y1=".5" y2="3"></line><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="3.5" x2="3.5" y1="1" y2="3"></line><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="8.5" x2="8.5" y1="1" y2="3"></line></g></svg>' +
                '                               </div>' +
                    cover +
                '                           </div>' +
                '                           <div class="rating-media-list__video-cover">' +
                '                               <svg width="23" height="18" viewBox="0 0 23 18" fill="none"><g filter="url(#filter0_d)"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4C4.44772 4 4 4.44772 4 5V13C4 13.5523 4.44772 14 5 14H13C13.5523 14 14 13.5523 14 13V5C14 4.44772 13.5523 4 13 4H5ZM11.5 9C11.5 10.3807 10.3807 11.5 9 11.5C7.61929 11.5 6.5 10.3807 6.5 9C6.5 7.61929 7.61929 6.5 9 6.5C10.3807 6.5 11.5 7.61929 11.5 9ZM9 10.6667C9.92047 10.6667 10.6667 9.92047 10.6667 9C10.6667 8.07952 9.92047 7.33333 9 7.33333C8.07953 7.33333 7.33333 8.07952 7.33333 9C7.33333 9.92047 8.07953 10.6667 9 10.6667ZM18.1667 4.83333L14.8333 7.33306V10.6667L18.1667 13.1667V4.83333Z" fill="white"></path></g><defs><filter id="filter0_d" x="0" y="0" width="22.1667" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg>' +
                '                               <span></span>' +
                '                           </div>' +
                '                       </div>' +
                image +
            '                       </div>' +
            '                   </div>' +
                '                   <div class="rating-media-list__zoomed-image">' +
                '                       <div class="rating-media-list-image-carousel">' +
                '                           <div class="rating-media-list-image-carousel__item-list-wrapper">' +
                '                               <ul class="rating-media-list-image-carousel__item-list">' +
                '                                   <li class="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid media_0 d-none" id="0" style="padding: 0 0.625rem;">' +
                '                                      <div class="_43iTyw">' +
                '                                           <video src="'+ url_video +'" controls="" class="_12mVqG rating-media-list__zoomed-video-item" controlslist="nodownload"></video>' +
                '                                       </div>' +
                '                                   </li>' +
                image_comment +
                '                               </ul>' +
                '                           </div>' +
                '                       </div>' +
                '                   </div>' +
                '<input type="hidden" value="" name="numberMedia">' +
                '           </div>' +
                '           <div class="shopee-product-rating__time">'+ mtime +'</div>' +
                '           </div>' +
                '       </div>' +
                ' </div>';

            image = '';
            image_comment = '';
            tags = '';
            star_html1 = '';
            star_html2 = '';
        }
        $('.box_comment').html(box_comment);
        //chuc nang click vao background video de xem video trong box comment
        $('.rating-media-list__image-wrapper.rating-media-list__image-wrapper--inactive').click(function () {
            var count = $(this).attr('id');
            if(count == $(this).parents('.shopee-product-rating__image-list-wrapper').find('input[name=numberMedia]').val()){
                $(this).parents('.shopee-product-rating__image-list-wrapper').find('.rating-media-list__zoomed-image').removeClass('rating-media-list__zoomed-image--active');
                $(this).parents('.shopee-product-rating__image-list-wrapper').find('input[name=numberMedia]').val('');
            } else {
                $(this).parents('.shopee-product-rating__image-list-wrapper').find('.rating-media-list__zoomed-image').addClass('rating-media-list__zoomed-image--active');
                $(this).parents('.shopee-product-rating__image-list-wrapper').find('input[name=numberMedia]').val(count);
                $(this).parents('.shopee-product-rating__image-list-wrapper').find('.rating-media-list-image-carousel__item.rating-media-list-image-carousel__item--fluid').addClass('d-none');
                if(count == 0){
                    $(this).parents('.shopee-product-rating__image-list-wrapper').find('.rating-media-list-image-carousel').css({"transition": "all 500ms ease 0s","width": "536px"});
                    $(this).parents('.shopee-product-rating__image-list-wrapper').find('.rating-media-list-image-carousel__item.media_' + count).removeClass('d-none');
                }else {
                    $(this).parents('.shopee-product-rating__image-list-wrapper').find('.rating-media-list-image-carousel__item.media_' + count).removeClass('d-none');
                    $(this).parents('.shopee-product-rating__image-list-wrapper').find('.rating-media-list-image-carousel').css({"transition": "all 500ms ease 0s","width": "160%"});
                }
            }
        });

    }

}


//click vao box danh gia trong chuc nang comment de xem binh luan 1 2 3 4 5 sao
function click_box_rating_comment() {
    $('.detailProduct .span_text').click(function () {
        $('.detailProduct .span_text').removeClass('active');
        $(this).addClass('active');
        $('.pagination').addClass('d-none');
        var type_rating = $(this).attr('type_rating');
        var id = $(this).attr('id');

        //xu ly reset lai page number
        for( i = 1; i < 7; i++){
            $('.page_number_lots_of_detail' + ' .number a.'+ i +'').text(i);
            $('.page_number_lots_of_detail' + ' .number a.'+ i +'').attr('data-dt-idx', i);
        }
        $('.page_number_lots_of_detail .previous ').attr('num', 1);
        $('.page_number_lots_of_detail .previous a').attr('data-dt-idx', 0);
        $('.page_number_lots_of_detail .next ').attr('num', 6);
        $('.page_number_lots_of_detail .next a').attr('data-dt-idx', 7);

        ajax_click_box_rating_comment(id, type_rating, 0);
    });
}

// xu li ajax click vao box danh gia trong chuc nang comment de xem binh luan 1 2 3 4 5 sao
function ajax_click_box_rating_comment(id, type_rating, pager) {
    var link = '';
    var offset;
    add_loading('box_comment');
    $('.body_lots_of_detail .box_comment').html(
        '    <div  class="th_loading" style="width: 10%;margin-left: 80px;color: #000">' +
        '        <img style="margin-left: 24px" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/93/loader.gif" alt="Loading..." class="loading">' +
        '        <br />Vui lòng chờ ...' +
        '    </div>');
    if (pager == 0) {
        offset = 0;
    }
    if (pager > 0) {
        offset = (pager - 1) * 6;
    }

    var itemid = $('input[name=page_number]').attr('itemid');
    var shopid = $('input[name=page_number]').attr('shopid');

    if(type_rating == 'type'){
        link = 'https://shopee.vn/api/v2/item/get_ratings?filter=0&flag=1&itemid='+ itemid +'&limit=6&offset='+ offset +'&shopid='+ shopid +'&type='+ id +'';

    }else {
        link = 'https://shopee.vn/api/v2/item/get_ratings?filter='+ id +'&flag=1&itemid='+ itemid +'&limit=6&offset='+ offset +'&shopid='+ shopid +'&type=0';
    }

    if(link){
        $.ajax({
            url: Drupal.settings.basePath + 'ajax',
            data: {act: 'click_box_rating_comment', link: link, pager: pager},
            async: true,
            type: "POST",
            success: function (resp) {
                var total_page_number = '';
                var obj = JSON.parse(resp);
                var number_rating = id - 1;
                show_lots_of_comment(obj);
                $('.th_loading').addClass('d-none');
                $('.body_lots_of_detail .box_comment').removeClass('textCenter');

                //an page number khong co di
                var total_comment = obj.rating.data.item_rating_summary.rating_count[number_rating];
                if(total_comment <= 6){
                    total_page_number = 1;
                }else {
                    total_page_number = (total_comment / 6) + 1;
                }

                if(total_page_number < 6){
                    for(var i = 6; i > total_page_number; i--){
                        $('.page-link.' + i).parents('.paginate_button.number').addClass('d-none');
                    }
                    $('.paginate_button.next').addClass('disabled');
                }else {
                    $('.paginate_button.number').removeClass('d-none');
                    $('.paginate_button.next').removeClass('disabled');
                }
                $('.pagination').removeClass('d-none');
            }
        });
    }

}

//HIEN THI DU LIEU MO TA CUA MOT SAN PHAM
function show_product_detail(obj) {

    var name_product = obj.item.name;
    var link_image_product = "https://cf.shopee.vn/file/"+ obj.item.images[0]+ ""; // anh cua san pham
    var link_avt_shop = "https://cf.shopee.vn/file/"+ obj.data.account.portrait + ""; //anh cua shop
    var name_shop = obj.data.name; //ten cua shop
    var item_count = obj.data.item_count; //tong san phan cua shop
    var follower_count = obj.data.follower_count; // so nguoi theo doi
    var following_count = obj.data.account.following_count; // so nguoi shop dang theo doi
    var response_rate = obj.data.response_rate; // ti le phan hoi
    var response_time = roundUp(obj.data.response_time / 3600, 2); //thoi gian phan hoi
    var ctime = format_time_stamp(obj.data.ctime); //thoi gian tao shop
    var rating_bad = obj.data.rating_bad;
    var rating_good = obj.data.rating_good;
    var rating_normal = obj.data.rating_normal;
    var rating_total = rating_bad + rating_good + rating_normal;
    var rating_star =  roundUp(obj.data.rating_star,1);
    var username =obj.data.account.username;
    var link_shop = 'https://shopee.vn/'+ username +'';

    var info_shop =
        '              <div style="padding: 10px 0">' +
        '                  <strong>'+ name_product +'</strong>' +
        '              </div>' +
        '              <div class="row invoice-info">' +
        '                  <div class="col-sm-2 invoice-col">' +
        '                      <img src="'+ link_image_product +'" style="width: 11vw;">' +
        '                  </div>' +
        '                  <div class="col-sm-3 invoice-col">' +
        '                      <h3> Thông tin shop bán</h3>' +
        '                      <img style="border-radius: 45px; width: 6vw;" src="'+ link_avt_shop +'"><br>' +
        '                      <strong>Tên shop: '+ name_shop +'</strong>' +
        '                  </div>' +
        '                  <div class="col-sm-3 invoice-col info_shop">' +
        '                      <strong>Sản phẩm: '+ item_count +'</strong><br>' +
        '                      <strong>Đang theo dõi: '+ following_count +'</strong><br>' +
        '                      <strong>Tỉ lệ phản hồi Chat: '+ response_rate +'% (trong '+ response_time +' giờ)</strong><br>' +
        '                      <strong>Tham gia: '+ ctime +'</strong>' +
        '                  </div>' +
        '                  <div class="col-sm-4 invoice-col info_shop">' +
        '                      <strong>Đánh giá: '+ rating_star +' ('+ rating_total +' đánh giá)</strong><br>' +
        '                      <strong>Đánh giá tốt - xấu - bình thường ('+ rating_good +' - '+ rating_bad +' - '+ rating_normal +')</strong><br>' +
        '                      <strong>Người theo dõi: '+ follower_count +'</strong><br>' +
        '                      <a target="_blank" href="'+ link_shop +'"><strong>Link shop: '+ link_shop +'</strong></a>' +
        '                  </div>' +
        '              </div>';

        $('.detail_info_shop').html(info_shop);

}


//HIEN THI DU LIEU BEN TRAI CUA BOX RATING STAR (MOT SAN PHAM)
function show_evaluate_left(obj) {

    var rating_star = roundUp(obj.item.item_rating.rating_star, 1);
    if(rating_star == 5 || rating_star == 4 || rating_star == 3 || rating_star == 2 || rating_star == 1 ){
        rating_star = rating_star + '.0 trên 5';
    }else {
        rating_star = rating_star + ' trên 5';
    }
    $('.star_evaluate span').text(rating_star);
    var num_star = Math.floor(obj.item.item_rating.rating_star);
    var svg_star = '';
    for(var i = 1; i <= num_star; i++){
        svg_star += ' <svg fill="#ee4d2d" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
            '                                         viewBox="0 0 512.002 512.002" width="30" height="30" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve"><g><g><path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955C511.56,208.649,513.033,202.688,511.267,197.258z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>' +
            '                                    </svg>';
    }
    if(num_star < 5){
        var hundred = roundUp(obj.item.item_rating.rating_star, 2) * 100;
        var surplus = hundred % 100;
        if(surplus <= 50 && surplus > 0){
            svg_star += '<svg  fill="#ee4d2d" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
                '                                          width="30" height="30" viewBox="0 0 475.044 475.044" style="enable-background:new 0 0 475.044 475.044;" xml:space="preserve"><g><path d="M474.487,183.276c-1.711-5.236-6.852-8.52-15.41-9.851l-143.323-20.839L251.52,22.681c-4-7.804-8.661-11.704-13.989-11.704\tc-5.519,0-10.183,3.9-13.988,11.704l-64.241,129.905L15.978,173.425c-8.564,1.332-13.704,4.615-15.415,9.851\tc-1.709,5.236,0.478,10.898,6.567,16.989l103.924,101.068L86.501,444.082c-0.95,6.286-0.381,11.173,1.715,14.702\tc2.092,3.524,5.33,5.283,9.707,5.283c3.237,0,7.043-1.14,11.42-3.433l128.194-67.382l128.19,67.382\tc4.377,2.286,8.186,3.433,11.423,3.433c4.381,0,7.622-1.759,9.709-5.283c2.088-3.529,2.659-8.416,1.708-14.702l-24.551-142.749\tl103.63-101.068C473.93,194.174,476.212,188.512,474.487,183.276z M338.597,275.065l-13.99,13.421l3.43,18.843l17.128,101.357\tl-90.786-47.965l-16.848-8.856V76.927l45.395,91.933l8.559,17.128l18.85,2.856l101.642,14.844L338.597,275.065z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>' +
                '                                    </svg>';
        }else if(surplus > 50 && surplus < 90){
            svg_star += '<svg width="30" height="30" viewBox="0 0 229 229" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '                                        <g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M145.137 82.8794L114.5 20.8044L83.862 82.8794L15.3596 92.8341L64.9275 141.153L53.2279 209.38L114.5 177.167L175.77 209.38L164.067 141.153L213.64 92.834L145.137 82.8794ZM177.994 222.677L114.5 189.295L51.0032 222.678C50.0219 223.194 48.9503 223.448 47.8822 223.448C46.4912 223.448 45.1069 223.016 43.9382 222.167C41.8723 220.666 40.8374 218.123 41.2694 215.605L53.3939 144.901L2.02649 94.8276C0.197632 93.0452 -0.460741 90.3791 0.32868 87.95C1.11765 85.5214 3.21756 83.7511 5.74415 83.3843L76.7339 73.0682L108.484 8.73957C109.614 6.44958 111.947 5 114.5 5C117.054 5 119.386 6.44958 120.516 8.73957L152.265 73.0682L223.256 83.3843C225.783 83.7511 227.882 85.5214 228.671 87.9505C229.461 90.3791 228.802 93.0452 226.974 94.8271L175.601 144.901L187.729 215.605C188.161 218.122 187.125 220.666 185.059 222.167C182.993 223.668 180.255 223.865 177.994 222.677ZM51.849 217.421L51.8493 217.42ZM7.28617 94.0073L7.28784 94.0071ZM110.89 13.4889L110.89 13.4903Z" fill="#EE4D2D"/><path fill-rule="evenodd" clip-rule="evenodd" d="M152 72.5309L120.516 8.73957C119.386 6.44958 117.054 5 114.5 5C111.947 5 109.614 6.44958 108.484 8.73957L76.7339 73.0682L5.74415 83.3843C3.21756 83.7511 1.11765 85.5214 0.32868 87.95C-0.460741 90.3791 0.197632 93.0452 2.02649 94.8276L53.3939 144.901L41.2694 215.605C40.8374 218.123 41.8723 220.666 43.9382 222.167C45.107 223.016 46.4912 223.448 47.8822 223.448C48.9503 223.448 50.0219 223.194 51.0032 222.678L114.5 189.295L152 209.011V72.5309Z" fill="#EE4D2D"/></g><defs><clipPath id="clip0"><rect width="229" height="229" fill="white"/></clipPath></defs>' +
                '                                    </svg>';
        }else if(surplus >= 90) {
            svg_star += ' <svg fill="#ee4d2d" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
                '                                         viewBox="0 0 512.002 512.002" width="30" height="30" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve"><g><g><path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955C511.56,208.649,513.033,202.688,511.267,197.258z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>' +
                '                                    </svg>';
        }
    }

    $('.num_star').html(svg_star);

}

//HIEN THI DU LIEU BEN PHAI CUA BOX RATING STAR (MOT SAN PHAM)
function show_evaluate_right(obj) {
    var one_star = obj.rating.data.item_rating_summary.rating_count[0];
    var two_star = obj.rating.data.item_rating_summary.rating_count[1];
    var three_star = obj.rating.data.item_rating_summary.rating_count[2];
    var four_star = obj.rating.data.item_rating_summary.rating_count[3];
    var five_star = obj.rating.data.item_rating_summary.rating_count[4];
    var all_star = obj.rating.data.item_rating_summary.rating_total;
    var rcount_with_media = obj.rating.data.item_rating_summary.rcount_with_media;
    var rcount_with_context = obj.rating.data.item_rating_summary.rcount_with_context;

    var number_star =
        '                                       <div class="span_text active" id="0" type_rating="type">' +
        '                                           <span>Tất cả ('+ all_star +')</span>' +
        '                                       </div>' +
        '                                       <div class="span_text" id="5" type_rating="type">' +
        '                                           <span>5 sao ('+ five_star +')</span>' +
        '                                       </div>' +
        '                                       <div class="span_text" id="4" type_rating="type">' +
        '                                           <span>4 sao ('+ four_star +')</span>' +
        '                                       </div>' +
        '                                       <div class="span_text" id="3" type_rating="type">' +
        '                                           <span>3 sao ('+ three_star +')</span>' +
        '                                       </div>' +
        '                                       <div class="span_text" id="2" type_rating="type">' +
        '                                           <span>2 sao ('+ two_star +')</span>' +
        '                                       </div>' +
        '                                       <div class="span_text" id="1" type_rating="type">' +
        '                                           <span>1 sao ('+ one_star +')</span>' +
        '                                       </div>' +
        '                                       <div class="span_text" id="3" type_rating="filter">' +
        '                                           <span>Có hình ảnh/video ('+ rcount_with_media +')</span>' +
        '                                       </div>' +
        '                                       <div class="span_text" id="1" type_rating="filter">' +
        '                                           <span>Có bình luận ('+ rcount_with_context +')</span>' +
        '                                       </div>';
    $('.show_evaluate_right').html(number_star);

}


//HAM HIEN THI COMMENT KHI DA LAY DUOC CHI TIET SAN PHAM (MOT SAN PHAM)
function show_comment(obj) {

    var url_author_shopid = '';
    var rating_star = 0;
    var star_html1 = '';
    var star_html2 = '';
    var author_username = '';
    var link_author_portrait = '';
    var url_video = '';
    var comment = '';
    var tags = '';
    var image = '';
    var mtime = '';
    var box_comment = '';
    var hieu = 0;
    var dnone = '';

    if(obj.rating.data.ratings) {
        for (var i = 0; i < (obj.rating.data.ratings).length; i++) {
            url_author_shopid = 'https://shopee.vn/shop/' + obj.rating.data.ratings[i].author_shopid + ''; //link id cua shop
            author_username = obj.rating.data.ratings[i].author_username; //ten nguoi comment
            if (author_username == null || author_username == '') {
                author_username = 'Người dùng Shopee';
            }
            rating_star = obj.rating.data.ratings[i].rating_star;
            hieu = 5 - rating_star;

            //hien thi sao cua nguoi comment
            for (var f = 1; f <= rating_star; f++) {
                star_html1 += '<svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon icon-rating-solid--active icon-rating-solid"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon></svg>';
            }
            for (var l = 1; l <= hieu; l++) {
                star_html2 += '<svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon icon-rating"><polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon></svg>';
            }

            link_author_portrait = "https://cf.shopee.vn/file/" + obj.rating.data.ratings[i].author_portrait + ""; //anh nguoi dang
            //neu khong co avt
            if (obj.rating.data.ratings[i].author_portrait == null || obj.rating.data.ratings[i].author_portrait == '') {
                link_author_portrait = '/Shopee_Doan/sites/all/themes/newtheme/images/no_avt.png';
            }

            //comment
            comment = obj.rating.data.ratings[i].comment; // comment
            if (comment == '') {
                comment = 'Không có bình luận';
            }

            //tag
            if (obj.rating.data.ratings[i].tags) {
                for (var k = 0; k < (obj.rating.data.ratings[i].tags).length; k++) {
                    tags += '<div class="shopee-product-rating__tag">' + obj.rating.data.ratings[i].tags[k].tag_description + '</div>';
                }
            } else {
                tags = '';
            }
            //kiem tra co video khong
            if ((obj.rating.data.ratings[i].videos).length > 0) {
                dnone = '';
                url_video = obj.rating.data.ratings[i].videos['0'].url; //url video mp4
                cover = '<div class="shopee-rating-media-list-image__content" style="background-image: url(&quot;' + obj.rating.data.ratings[i].videos['0'].cover + '&quot;);"></div>';  //anh cover video
            } else {
                dnone = 'd-none';
                cover = '';
            }

            //kiem tra co anh khong
            if (obj.rating.data.ratings[i].images) {
                for (var j = 0; j < (obj.rating.data.ratings[i].images).length; j++) {
                    code_image = obj.rating.data.ratings[i].images[j];
                    image +=
                        '<div class="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive" >' +
                        '    <div class="shopee-rating-media-list-image__wrapper" >' +
                        '         <div class="shopee-rating-media-list-image__place-holder" >' +
                        '             <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon icon-loading-image"><g><rect fill="none" height="8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="10" x="1" y="4.5"></rect><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1" x2="11" y1="6.5" y2="6.5"></line><rect fill="none" height="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="3" x="11" y="6.5"></rect><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1" x2="11" y1="14.5" y2="14.5"></line><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="6" x2="6" y1=".5" y2="3"></line><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="3.5" x2="3.5" y1="1" y2="3"></line><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="8.5" x2="8.5" y1="1" y2="3"></line></g></svg>' +
                        '         </div>' +
                        '         <div class="shopee-rating-media-list-image__content" style="background-image: url(&quot;https://cf.shopee.vn/file/' + code_image + '&quot;);">' +
                        '             <div class="shopee-rating-media-list-image__content--blur" > </div>' +
                        '         </div>' +
                        '    </div>' +
                        '</div> ';
                }
            } else {
                image = '';
            }
            mtime = format_time_stamp(obj.rating.data.ratings[i].mtime);

            box_comment +=
                ' <div class="shopee-product-rating">' +
                '      <a target="_blank" class="shopee-product-rating__avatar" href="' + url_author_shopid + '">' +
                '           <div class="shopee-avatar">' +
                '                <div class="shopee-avatar__placeholder" >' +
                '                     <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon icon-headshot"><g><circle cx="7.5" cy="4.5" fill="none" r="3.8" stroke-miterlimit="10"></circle><path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path></g></svg>' +
                '                </div>' +
                '                <img class="shopee-avatar__img" src="' + link_author_portrait + '">' +
                '           </div>' +
                '      </a>' +
                '      <div class="shopee-product-rating__main">' +
                '           <a class="shopee-product-rating__author-name" href="' + url_author_shopid + '">' + author_username + '</a>' +
                '           <div class="shopee-product-rating__rating">' +
                star_html1 +
                star_html2 +
                '            </div>' +
                '            <div class="shopee-product-rating__content" >' + comment + '</div>' +
                '            <div class="shopee-product-rating__tags">' +
                tags +
                '            </div>' +
                '            <div class="shopee-product-rating__image-list-wrapper">' +
                '               <div class="rating-media-list">' +
                '                   <div class="rating-media-list__container">' +
                '                       <div class="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive ' + dnone + '">' +
                '                           <div class="shopee-rating-media-list-image__wrapper">' +
                '                               <div class="shopee-rating-media-list-image__place-holder">' +
                '                                   <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon icon-loading-image"><g><rect fill="none" height="8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="10" x="1" y="4.5"></rect><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1" x2="11" y1="6.5" y2="6.5"></line><rect fill="none" height="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="3" x="11" y="6.5"></rect><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1" x2="11" y1="14.5" y2="14.5"></line><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="6" x2="6" y1=".5" y2="3"></line><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="3.5" x2="3.5" y1="1" y2="3"></line><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="8.5" x2="8.5" y1="1" y2="3"></line></g></svg>' +
                '                               </div>' +
                cover +
                '                           </div>' +
                '                           <div class="rating-media-list__video-cover">' +
                '                               <svg width="23" height="18" viewBox="0 0 23 18" fill="none"><g filter="url(#filter0_d)"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4C4.44772 4 4 4.44772 4 5V13C4 13.5523 4.44772 14 5 14H13C13.5523 14 14 13.5523 14 13V5C14 4.44772 13.5523 4 13 4H5ZM11.5 9C11.5 10.3807 10.3807 11.5 9 11.5C7.61929 11.5 6.5 10.3807 6.5 9C6.5 7.61929 7.61929 6.5 9 6.5C10.3807 6.5 11.5 7.61929 11.5 9ZM9 10.6667C9.92047 10.6667 10.6667 9.92047 10.6667 9C10.6667 8.07952 9.92047 7.33333 9 7.33333C8.07953 7.33333 7.33333 8.07952 7.33333 9C7.33333 9.92047 8.07953 10.6667 9 10.6667ZM18.1667 4.83333L14.8333 7.33306V10.6667L18.1667 13.1667V4.83333Z" fill="white"></path></g><defs><filter id="filter0_d" x="0" y="0" width="22.1667" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg>' +
                '                               <span></span>' +
                '                           </div>' +
                '                       </div>' +
                image +
                '                       </div>' +
                '                   </div>' +
                '                   <div class="rating-media-list__zoomed-image">' +
                '                       <div class="rating-media-list-image-carousel" style="transition: all 0ms ease 0s; width: 0px;">' +
                '                           <div class="rating-media-list-image-carousel__item-list-wrapper">' +
                '                               <ul class="rating-media-list-image-carousel__item-list" style="margin-left: 0px; margin-top: 0px;">' +
                '                                   <li class="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid" style="padding: 0px 0.625rem;">' +
                '                                      <div class="_43iTyw">' +
                '                                           <video src="https://1500000774.vod2.myqcloud.com/c830c918vodtranssgp1500000774/5d97ff4c5285890815847860111/v.f132082.mp4" controls="" class="_12mVqG rating-media-list__zoomed-video-item" controlslist="nodownload"></video>' +
                '                                       </div>' +
                '                                   </li>' +
                '                                   <li class="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid" style="padding: 0px 0.625rem;">' +
                '                                       <img class="rating-media-list__zoomed-image-item" src="https://cf.shopee.vn/file/f53940ad7effeb9fe3b651eb3ae488e1">' +
                '                                   </li>' +
                '                               </ul>' +
                '                           </div>' +
                '                       </div>' +
                '                   </div>' +
                '           </div>' +
                '           <div class="shopee-product-rating__time">' + mtime + '</div>' +
                '           </div>' +
                '       </div>' +
                ' </div>';

            image = '';
            tags = '';
            star_html1 = '';
            star_html2 = '';
        }
        $('.box_comment').html(box_comment);

        //Bo loading di
        $('.loading_center .loading_detail_one').addClass('d-none');
        $('.loading_center .container-fluid').removeClass('d-none');

    }


}


//HAM SPY MOT SHOP KHI NHAP DUONG LINK SHOP VAO
function click_spy_shopee() {
    $('.spy_shopee').click(function () {
        var keyword = $('#keyword_spy_shopee').val();
       // ajax_spy_shopee(keyword, 0);
    });
}
function search_spy_shopee() {
    $('.spy_shopee').click(function () {
        $('.no_data_product').addClass('d-none');
        $('.th_loading').removeClass('d-none');
        ajax_search_spy_shopee(0);
    });
}
function ajax_search_spy_shopee(number) {
    var data = '';
    var count = 0;
    var price = 0;
    var sale = 0;
    var total_count = '';
    //loading();
        var keyword = $('#keyword_spy_shopee').val();

        if(!validateEmail(keyword)) {

            $.ajax({
                url: Drupal.settings.basePath + 'ajax',
                data: {act:'spy_shopee', keyword_spy: keyword, number:number},
                async: true,
                type: "POST",
                success: function (resp) {
                    //console.log(resp);
                    var obj = JSON.parse(resp);
                   // console.log(obj);

                // show info shop
                    var link_avt_shop = "https://cf.shopee.vn/file/"+ obj.data.account.portrait + ""; //anh cua shop
                    if(obj.data.account.portrait == '' || obj.data.account.portrait == null){
                        link_avt_shop = '/Shopee_Doan/sites/all/themes/newtheme/images/no_avt.png';
                    }
                    var name_shop = obj.data.name; //ten cua shop
                    var item_count = obj.data.item_count; //tong san phan cua shop
                    var follower_count = obj.data.follower_count; // so nguoi theo doi
                    var following_count = obj.data.account.following_count; // so nguoi shop dang theo doi
                    var response_rate = obj.data.response_rate; // ti le phan hoi
                    var response_time = roundUp(obj.data.response_time / 3600, 2); //thoi gian phan hoi
                    var ctime = format_time_stamp(obj.data.ctime); //thoi gian tao shop
                    var rating_bad = obj.data.rating_bad;
                    var rating_good = obj.data.rating_good;
                    var rating_normal = obj.data.rating_normal;
                    var rating_total = rating_bad + rating_good + rating_normal;
                    var rating_star =  roundUp(obj.data.rating_star,1);
                    var username =obj.data.account.username;
                    var link_shop = 'https://shopee.vn/'+ username +'';

                    var info_shop =

                        '              <div class="row invoice-info">' +
                        '                  <div class="col-sm-3 invoice-col">' +
                        '                      <h3> Thông tin shop bán</h3>' +
                        '                      <img style="border-radius: 45px; width: 6vw;" src="'+ link_avt_shop +'"><br>' +
                        '                      <strong>Tên shop: '+ name_shop +'</strong>' +
                        '                  </div>' +
                        '                  <div class="col-sm-4 invoice-col info_shop">' +
                        '                      <strong>Sản phẩm: '+ item_count +'</strong><br>' +
                        '                      <strong>Đang theo dõi: '+ following_count +'</strong><br>' +
                        '                      <strong>Tỉ lệ phản hồi Chat: '+ response_rate +'% (trong '+ response_time +' giờ)</strong><br>' +
                        '                      <strong>Tham gia: '+ ctime +'</strong>' +
                        '                  </div>' +
                        '                  <div class="col-sm-4 invoice-col info_shop">' +
                        '                      <strong>Đánh giá: '+ rating_star +' ('+ rating_total +' đánh giá)</strong><br>' +
                        '                      <strong>Đánh giá tốt - xấu - bình thường ('+ rating_good +' - '+ rating_bad +' - '+ rating_normal +')</strong><br>' +
                        '                      <strong>Người theo dõi: '+ follower_count +'</strong><br>' +
                        '                      <a target="_blank" href="'+ link_shop +'"><strong>Link shop: '+ link_shop +'</strong></a>' +
                        '                  </div>' +
                        '              </div>';
                    $('.box_info_shop_spy').html(info_shop);
                    //show data spy
                    for(var i = 0; i < (obj.items).length; i++){
                        price = obj.items[i].price;
                        sale = price * obj.items[i].historical_sold;
                        count++;
                        total_count = obj.total_count;
                        data +=
                            '   <tr cmt="'+ obj.items[i].cmt_count +'" like="'+ obj.items[i].liked_count +'" price="'+ obj.items[i].price +'" sold="'+ obj.items[i].historical_sold +'" sale="'+ sale +'" stock="'+ obj.items[i].stock +'">' +
                            '       <td><span class="badge badge-success">'+ count +'</span></td>' +
                            '       <td><a href="https://shopee.vn/'+ encodeURIComponent(obj.items[i].name) +'-i.'+ obj.items[i].shopid +'.'+ obj.items[i].itemid +'"><img src="https://cf.shopee.vn/file/'+ obj.items[i].image +'" alt="User Avatar" class="img-size-50 mr-3 img-circle"></a></td>' +
                            '       <td class="name_list">'+ obj.items[i].name +'</td>' +
                            '       <td><span class="">'+ obj.items[i].cmt_count +'</span></td>' +
                            '       <td><span class="">'+ obj.items[i].liked_count +'</span></td>' +
                            '       <td><span class="">'+ format_money(obj.items[i].price) +'vnd</span></td>' +
                            '       <td><span class="">'+ obj.items[i].historical_sold +'</span></td>' +
                            '       <td>' +
                            '           <div class="sparkbar" data-color="#00a65a" data-height="20">'+ format_money(sale) +'vnd</div>' +
                            '       </td>' +
                            '       <td><span class="">'+ obj.items[i].stock +'</span></td>' +
                            '   </tr>';
                    }
                    $('.t_body').html(data);
                  //  $('.th_loading').addClass('d-none');
                    $('.page_number_spy_shopee').removeClass('d-none');
                    $('.table_tracking .box_info_shop_spy').removeClass('d-none');
                }});
        }
        return false;

}


//HAM NHAP TU KHOA VA NHAN SEARCH DE HIEN THỊ SAN PHAM (GIONG TRACKING)
function search_scan_customer() {
    $('.scan').click(function () {
        $('.no_data_product').addClass('d-none');
        $('.table_tracking_scan .th_loading').removeClass('d-none');
        ajax_scan_customer(0)

    });
}
//HAM HIEN THI SAN PHAM RA (GIONG TRACKING)
function ajax_scan_customer(num) {
    var data = '';
    var count = 0;
    var price = 0;
    var sale = 0;
    var keyword = $('#keyword_tracking').val();


        if(!validateEmail(keyword)) {

            $.ajax({
                url: Drupal.settings.basePath + 'ajax',
                data: {act:'scan_customer', keyword_scan: keyword, num:num},
                async: true,
                type: "POST",
                success: function (resp) {
                    //console.log(resp)
                    var obj = JSON.parse(resp);
                    for(var i = 0; i < (obj.items).length; i++){
                        price = obj.items[i].price;
                        sale = price * obj.items[i].historical_sold;
                        count++;
                        data +=
                            '   <tr itemid="'+obj.items[i].itemid+'" shopid="'+obj.items[i].shopid+'" cmt="'+ obj.items[i].cmt_count +'" like="'+ obj.items[i].liked_count +'" price="'+ obj.items[i].price +'" sold="'+ obj.items[i].historical_sold +'" sale="'+ sale +'" stock="'+ obj.items[i].stock +'">' +
                            '       <td class="check_box"><input type="checkbox" id="fruit'+ i +'" url_link="https://shopee.vn/api/v2/item/get_ratings?filter=0&flag=1&itemid='+ obj.items[i].itemid +'&limit=6&offset=0&shopid='+ obj.items[i].shopid +'&type=0" name="fruit-1" value="Apple"><label for="fruit'+ i +'"></label></td>' +
                            '       <td><span class="badge badge-success">'+ count +'</span></td>' +
                            '       <td><a href="https://shopee.vn/'+ encodeURIComponent(obj.items[i].name) +'-i.'+ obj.items[i].shopid +'.'+ obj.items[i].itemid +'"><img src="https://cf.shopee.vn/file/'+ obj.items[i].image +'" alt="User Avatar" class="img-size-50 mr-3 img-circle"></a></td>' +
                            '       <td style="width: 20%!important;" class="name_list">'+ obj.items[i].name +'</td>' +
                            '       <td><span class="">'+ obj.items[i].cmt_count +'</span></td>' +
                            '       <td><span class="">'+ obj.items[i].liked_count +'</span></td>' +
                            '       <td><span class="">'+ format_money(obj.items[i].price) +'vnd</span></td>' +
                            '       <td><span class="">'+ obj.items[i].historical_sold +'</span></td>' +
                            '       <td>' +
                            '           <div class="sparkbar" data-color="#00a65a" data-height="20">'+ format_money(sale) +'vnd</div>' +
                            '       </td>' +
                            '       <td><span class="">'+ obj.items[i].stock +'</span></td>' +
                            '   </tr>';
                    }
                    $('.t_body.scan_client').html(data);
                    $('.table_tracking_scan .th_loading').addClass('d-none');
                    $('.scan_client').removeClass('d-none');
                    $('.page_create_file').removeClass('d-none');
                    get_link_scan();
                }
            });
        }
        return false;

}

//HAM LAY LINK DU LIEU KHACH HANG
function get_link_scan() {
    // lay link de scan khach hang
    $('input[type="checkbox"]').click(function(){

        var id = $(this).attr('url_link');
        $('input[name=id_scan_link]').val(id);
        //console.log(id);

    });
}

//CLICK BUTTON TAO TEP KHACH HANG
function click_button_create_client() {
    $('button[name=button_scan_client]').click(function () {
        ajax_show_client(6);
    });
}
//CLICK SELECT BOX CHON SO LUONG KHACH HANG MUON HIEN THI RA
function click_selectBox_create_client() {
    $('.button__number_client button').click(function () {
       var number_client = $(this).attr('num');
       $('.create_client_file').html('<tr>' +
           '    <th class="th_loading" style="color: #000">' +
           '        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/93/loader.gif" alt="Loading..." class="loading">' +
           '        <br />Vui lòng chờ ...' +
           '    </th>' +
           '</tr>');
       ajax_show_client(number_client);
    });
}


//HIEN THI DU LIEU KHACH HANG RA
function ajax_show_client(number_client) {
    var count = 0;
    var image = '';
    var name_client = '';
    var point = '';
    var data = '';
    var date = '';
    var evaluation_date = '';
    var status = '';
    var userid = '';
    var have_img = '';

        if($('.create_client_file tr').hasClass('have_img') == true || $('.create_client_file tr').hasClass('no_img') == true){
            $('tbody.create_client_file').html('');
        }

        $('.create_client_file .th_loading').removeClass('d-none');
        data = '';
        count = 0;
        var id = $('input[name=id_scan_link]').val();
        if(id) {
            $.ajax({
                url: Drupal.settings.basePath + 'ajax',
                data: {act: 'scan_link', link_scan: id, number_client: number_client},
                async: true,
                type: "POST",
                success: function (resp) {
                //console.log(resp)
                    //Phan tich du lieu tu file json
                    var obj = JSON.parse(resp);
                    // console.log(obj);
                    // console.log('manhmanhmanh');
                    for(var i = 0; i < obj.length; i++){
                        image = obj[i].author_portrait;
                        name_client = obj[i].author_username;
                        if(image == '' || image == undefined){
                            have_img = 'no_img';
                            status = 'Không có ảnh';
                        }else {
                            have_img = 'have_img';
                            status = 'Có ảnh';
                        }
                        userid = obj[i].author_shopid;
                        evaluation_date = format_time_stamp(obj[i].mtime);
                        point = obj[i].rating_star + ' sao';
                        count++;
                        data +=
                            '   <tr class="'+ have_img +'" point="'+ point +'">' +
                            '       <td class="check_box"><input type="checkbox" id="client'+ i +'" name="client-1" number="'+ i +'" id_shop="'+ userid +'" value="Apple"><label for="client'+ i +'"></label></td>' +
                            '       <td><span class="badge badge-success">'+ count +'</span></td>' +
                            '       <td>'+ status +'</td>' +
                            '       <td class="name_list">'+ name_client +'</td>' +
                            '       <td><span class="">'+ userid +'</span></td>' +
                            '       <td><span class="">'+ evaluation_date +'</span></td>' +
                            '       <td><span class="">'+ point +'</span></td>' +
                            '   </tr>';
                    }

                    $('.create_client_file .th_loading').addClass('d-none');
                    $('.t_body.create_client_file').html(data);
                    add_client_in_file();
                    fill_client();
                    click_selectBox_create_client();
                }
            });
        }

}


//HAM LOC KHACH CO ANH HAY KHONG CO ANH
function fill_client() {
    $('.form__follow .wayBox button').click(function () {
        var have_img = $(this).attr('have_img');
        if(have_img == 'have_img'){
            $('.create_client_file tr').removeClass('d-none');
            $('.create_client_file tr.no_img').addClass('d-none');
        }else if(have_img == 'no_img'){
            $('.create_client_file tr').removeClass('d-none');
            $('.create_client_file tr.have_img').addClass('d-none');
        }else {
            $('.create_client_file tr').removeClass('d-none');
        }
    });
}

//HAM TAO TEP KHACH HANG VA ADD VA DATABASE
function create_file_client() {
    var file_client = '';
    var leng_file = 0;
    var name = '';
    var obj_length = 0;
    $('button[name=button_create_file_client]').click(function(){

        var name_file = $('input[name=create]').val();
        var id_client = $('input[name=json_client]').val();
        //console.log(id);
        if(name_file) {
            $.ajax({
                url: Drupal.settings.basePath + 'ajax',
                data: {act: 'create_file', name_file: name_file, id_client:id_client},
                async: true,
                type: "POST",
                success: function (resp) {

                    var obj = JSON.parse(resp);
                    var html = '';
                    for(var i = 0 ; i < obj.length; i++){
                        name = obj[i].namefileClient;
                        if(obj[i].data == ""){
                            leng_file = 0;
                        }else {
                            obj_length = (obj[i].data).split(',');
                            leng_file = obj_length.length;
                        }
                        file_client = '[' + leng_file + '] ' + name;
                        html += '<button type="button" class="dropdown-item">'+ file_client + '</button>';
                    }

                    $('.form__down_follow .wayBox').html(html);
                    $('input[name=create]').val('');
                    $('.form__down_follow .wayBox button').click(function () {
                        var name_file = $(this).text();
                        $(this).parents('.form__down_follow').find('.select__file_client span').text(name_file);
                        $('.form__down_follow .dropdown-menu.wayBox').removeClass('show');
                    });
                    add_client_in_file();
                }
            });
        }
        return false;
    });
}

//HAM CHON KHACH HANG ROI NHET VAO TRONG TEP
function add_client_in_file() {
    var id_shop = '';
    var file_id_shop = [];
    $('input[name=client-1]').click(function () {
        id_shop = $(this).attr('id_shop');
        file_id_shop.push(id_shop);
        //json_client = JSON.stringify(file_id_shop);
        $('input[name=json_client]').val(file_id_shop);
    });

    var name = '';
    $('button[name=button_import_file]').click(function () {
        var name_file = $('.form__down_follow button span').text().split('] ');
        name_file = name_file[1];
        var id_client = $('input[name=json_client]').val();
        if(name_file != '' && id_client != ''){
            $.ajax({
                url: Drupal.settings.basePath + 'ajax',
                data: {act: 'add_client_in_file', id_client: id_client, name_file: name_file},
                async: true,
                type: "POST",
                success: function (resp) {
                    //console.log(resp);
                    var obj = JSON.parse(resp);
                    obj_length = (obj[0].data).split(',').length;
                    name = '[' + obj_length + '] ' + name_file;
                    $('.form__down_follow button span').text(name);

                    var num_client_add = id_client.split(',').length;
                    var name_alert = 'Đã thêm thành công ' + num_client_add + ' khách';
                    $('.notification p').text(name_alert);
                    $('.notification').removeClass('d-none');
                    setTimeout(function() {
                        $('.notification').addClass('d-none');
                    }, 4000);
                }
            });
        }
        return false;
    });


}

//HAM CLICK BUTTON FOLLOW DE FOLLOW KHACH HANG
function click_button_follow() {
    var file_client = '';
    var num_client = '';
    var sleep_time = '';
    var username = '';
    var password = '';
    var status = '';
    var total_client = 0;
    //nhan nut follow 1
    $('.follow').click(function () {
        $('.name_shop_follow').removeClass('d-none');
        $('.title__Follow').html('<tr>' +
            '    <th style="color:#000;" class="th_loading">' +
            '        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/93/loader.gif" alt="Loading..." class="loading">' +
            '    </th>' +
            '</tr>');
        $.ajax({
            url: Drupal.settings.basePath + 'ajax',
            data: {act: 'deletefile'},
            async: true,
            type: "POST",
            success: function (resp) {
                // console.log('xóa file thành công');
            }
        });
        username = $('input[name=acc_shop]').val();
        password = $('input[name=pass_shop]').val();
        name_file_client = $('.contact_client .form_follow .searchBox__toggle span').text().split('] ');
        file_client = name_file_client[1];
        num_client = $('input[name=number_client_fl]').val();
       // sleep_time = $('input[name=sleep_time]').val();
        $('.name_shop_follow .title__Follow .name_file').text(' Tệp: ' + file_client);
        if(username != '' && password != '' && file_client != '' && num_client != '' ){

            status = 1;
            $('.page-follow-customer section.content').removeClass('d-none');
            $.ajax({
                url: Drupal.settings.basePath + 'ajax',
                data: {act: 'before_follow',username: username, password: password, file_client: file_client, num_client:num_client, status: status},
                async: true,
                type: "POST",
                success: function (resp) {
                   // console.log(resp);
                    $('input[name=name_client]').val(resp);
                    $('.follow__hidden').click();
                }
            });
        }

    });

    //nhan nut follow 2
    $('.follow__hidden').click(function () {

        username = $('input[name=acc_shop]').val();
        password = $('input[name=pass_shop]').val();
        name_file_client = $('.contact_client .form_follow .searchBox__toggle span').text().split('] ');
        file_client = name_file_client[1];
        total_client = name_file_client[0].substring(1);
        num_client = $('input[name=number_client_fl]').val();
       // sleep_time = $('input[name=sleep_time]').val();

        if(username != '' && password != '' && file_client != '' && num_client != ''){
            status = 2;
            $('.page-follow-customer section.content').removeClass('d-none');
            $.ajax({
                url: Drupal.settings.basePath + 'ajax',
                data: {act: 'before_follow',username: username, password: password, file_client: file_client, num_client:num_client, status: status},
                async: true,
                type: "POST",
                success: function (resp) {
                     var obj = JSON.parse(resp);
                     if(obj.SPC_EC == undefined && obj.name_shop == null){
                        $('.title__Follow').html('<span class="not_follow">Vui lòng kiểm tra lại tên đăng nhập của shop và mật khẩu</span>');
                     }else {
                         $('.name_shop_follow .title__Follow').html('<span class="name_file">Shop theo dõi: '+ obj.name_shop  +' - Tệp: '+ file_client +'</span>');
                         $('input[name=spc_ec]').val('SPC_' + obj.SPC_EC);
                         $('input[name=token]').val(obj.token);
                         $('.number__Follow').text(num_client + ' / ' + total_client);
                         $('.button__Follow').removeClass('d-none');
                     }
                }
            });
        }

    });
    //nhan nut follow 3
    $('.button__Follow').click(function () {

        //lam cac cong viec khac
        var html = '';
        $('.button__Follow .loading__Follow').removeClass('d-none');
        name_file_client = $('.contact_client .form_follow .searchBox__toggle span').text().split('] ');
        file_client = name_file_client[1];
        num_client = $('input[name=number_client_fl]').val();
        sleep_time = $('input[name=sleep_time]').val();
        var spc_ec = $('input[name=spc_ec]').val();
        var token = $('input[name=token]').val();

        //Chay thoi gian theo doi o JS
        var json_name_client = $('input[name=name_client]').val();
        var name_client = JSON.parse(json_name_client);
        var leng_obj_name = Object.keys(name_client).length;
        for(var i = 0; i < leng_obj_name; i++ ){
            html += '<span class="second_'+ i +' d-none">[Theo dõi thành công] Khách hàng:<a target="_blank" class="link_client" href="https://shopee.vn/'+ name_client[i] +'"> '+ ' ' + name_client[i] +'</a></span>';
        }
        $('.second').html(html);
        var time = sleep_time;
        var idx = 0;
        let downloadTimer = setInterval(function(){
            if(time < 0){
                time = sleep_time;
                $('.second_' + idx).removeClass('d-none');
                idx++;
            }else {
                $('.setTimeout').text('Vui lòng chờ: ' + time + ' giây');
                time -= 1;
            }

        }, 1000);
        setTimeout(() => {
            clearInterval(downloadTimer);
            $('.setTimeout').text('Theo dõi thành công: ' + leng_obj_name + ' khách hàng');
            $('.loading__Follow').addClass('d-none');
        }, (sleep_time * leng_obj_name * 1000) + (leng_obj_name * 1000 * 2));



        //chay thoi gian theo doi o PHP

        var sleep_time2 = $('input[name=sleep_time].sleep__Time').val();
        if(username != '' && password != '' && file_client != '' && num_client != '' && sleep_time != '' && spc_ec != ''){
            $('.page-follow-customer section.content').removeClass('d-none');
            $.ajax({
                url: Drupal.settings.basePath + 'ajax',
                data: {act: 'follow',file_client: file_client, num_client:num_client, sleep_time: sleep_time2, spc_ec: spc_ec, token: token},
                async: true,
                type: "POST",
                success: function (resp) {
                    console.log(resp);
                    // $('#second .name_shop_success').text(resp);
                    // $('p.title__Follow .name_shop_client').text('Shop theo dõi: ' + resp + ' - ');
                }
            });
        }

    });
}



//sort tracking
function sort_tracking() {
    $('.table_tracking th span').click(function () {
        var sort_type = $(this).attr('sort_by');
        var bound = '.table_tracking .t_body';
        var element = bound + ' tr';
        sort(sort_type, bound, element, 'table_tracking');
    });
}

//sort create file
function sort_create_file() {
    $('.table_tracking_scan th span').click(function () {
        var sort_type = $(this).attr('sort_by');
        var bound = '.table_tracking_scan .t_body';
        var element = bound + ' tr';
        sort(sort_type, bound, element, 'table_tracking_scan');
    });
}

//sort theo so diem khi quet khach hang
function sort_point_client() {
    $('.table_client th span').click(function () {
        var sort_type = $(this).attr('sort_by');
        var bound = '.table_client .t_body';
        var element = bound + ' tr';
        sort(sort_type, bound, element, 'table_client');
    });
}

//HAM SAP XEP
function sort(sort_type, bound, element, classs) {


        if($('th.'+sort_type+' .arrow_down').hasClass('arrow_black')){
            $('.' + classs + ' th svg').removeClass('arrow_black');
            $('th.'+sort_type+' .arrow_down').removeClass('arrow_black');
            $('th.'+sort_type+' .arrow_up').addClass('arrow_black');

            $(element).sort(function(a,b) {
                return parseInt($(a).attr(sort_type)) > parseInt($(b).attr(sort_type)) ? 1 : -1;
            }).appendTo(bound);
        }
        else{
            $('.' + classs +' th svg').removeClass('arrow_black');
            $('th.'+sort_type+' .arrow_down').addClass('arrow_black');
            $('th.'+sort_type+' .arrow_up').removeClass('arrow_black');
            $(element).sort(function(a,b) {
                return parseInt($(a).attr(sort_type)) < parseInt($(b).attr(sort_type)) ? 1 : -1;
            }).appendTo(bound);
        }

}

//HAM THAY DOI PASSWORD
function change_pass() {
    $('button[name=change_pass]').click(function () {
        var c_pass = $('input[name=c_pass]').val();
        var n_pass = $('input[name=n_pass]').val();
        var n_pass_verify = $('input[name=n_pass_verify]').val();
        // console.log(c_pass);
        // console.log(n_pass);
        // console.log(n_pass_verify);
        if(c_pass != '' && n_pass != '' && n_pass_verify != ''){
            $.ajax({
                url: Drupal.settings.basePath + 'ajax',
                data: {act: 'change_pass', c_pass: c_pass, n_pass: n_pass, n_pass_verify: n_pass_verify},
                async: true,
                type: "POST",
                success: function (resp) {
                    console.log(resp);
                    $('.changePassModal .status__Change').html(resp);
                    setTimeout(function() {
                        $('.changePassModal .status__Change').html('');
                    }, 2000);
                    $('input[name=c_pass]').val('');
                    $('input[name=n_pass]').val('');
                    $('input[name=n_pass_verify]').val('');

                }
            });
        }
        return false;

    });
}
//HAM DANGKI
function register() {
    var check = '';
    $('button[name=register]').click(function () {
        var fullname = $('#registerModal input[name=fullname]').val();
        var phone = $('#registerModal input[name=phone]').val();
        var mail = $('#registerModal input[name=mail]').val();
        var password = $('#registerModal input[name=password]').val();
        var repassword = $('#registerModal input[name=repassword]').val();

        if(fullname != '' && phone != '' && mail != '' && password != '' && repassword !='' && password == repassword){

            if(validate_Email(mail)){
                $('.valid_mail').addClass('d-none');
                $.ajax({
                    url: Drupal.settings.basePath + 'ajax',
                    data: {act: 'register', fullname: fullname, phone: phone, mail: mail, password: password, repassword: repassword},
                    async: true,
                    type: "POST",
                    success: function (resp) {
                        $('#registerModal .status__Change').html('<span style="background-color: rgb(79 204 112 / 29%);margin-bottom: -20px">Đăng kí thành công. Vui lòng hãy đăng nhập ngay!</span>');
                        setTimeout(function() {
                            $('#registerModal .status__Change').html('');
                            $('#registerModal').modal('hide');
                            $('.modal-backdrop.fade.show').attr('class', '');
                            $('#registerModal input[name=fullname]').val('');
                            $('#registerModal input[name=phone]').val('');
                            $('#registerModal input[name=mail]').val('');
                            $('#registerModal input[name=password]').val('');
                            $('#registerModal input[name=repassword]').val('');
                        }, 2000);

                    }
                });
            }else {
                $('.valid_mail').removeClass('d-none');
            }

        } else  {
            var list = $('.formRegister .required');
            if(list.length > 0) {
                for (var i = 0; i < list.length; i++) {
                    if ($(list[i]).prop('type') == 'text' && $(list[i]).val() == '' && $(list[i]).hasClass('d-hidden') == false) {
                        $(list[i]).addClass('bug').focus();
                        return false;
                    } else if ($(list[i]).prop('type') == 'email' && $(list[i]).val() == '') {
                        $(list[i]).addClass('bug').focus();
                        return false;
                    } else if ($(list[i]).prop('type') == 'password' && $(list[i]).val() == '') {
                        $(list[i]).addClass('bug').focus();
                        return false;
                    }
                }
            }

        }
        return false;
    });

    //kiem tra 2 mat khau co giong nhau khong
    $('.formRegister input[name=repassword]').keyup(function () {
        var password = $('.formRegister input[name=password]').val();
        if(password != ''){
            if(password != $(this).val()){
                $('.valid_pass').removeClass('d-none');
            }else {
                $('.valid_pass').addClass('d-none');
            }
        }
    });
    $('.formRegister input[name=password]').keyup(function () {
        var repassword = $('.formRegister input[name=repassword]').val();
        if(repassword != ''){
            if(repassword != $(this).val()){
                $('.valid_pass').removeClass('d-none');
            }else {
                $('.valid_pass').addClass('d-none');
            }
        }
    });
}

function validate_Email(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//HAM LOGIN
function login() {
    var check = '';
    $('button[name=login]').click(function () {
        if($("input[name=remember]").prop('checked') == true){
            check = 'active';
        }else{
            check = 'lost';
        }
        var mail = $('#loginModal input[name=mail]').val();
        var pass = $('#loginModal input[name=password]').val();
        if(mail != '' && pass != ''){
            $.ajax({
                url: Drupal.settings.basePath + 'ajax',
                data: {act: 'login', mail: mail, pass: pass, check: check},
                async: true,
                type: "POST",
                success: function (resp) {
                    var obj = JSON.parse(resp);
                    //console.log(resp);
                    if(obj.check == 'not_ok') {
                        $('#loginModal .status__Change').html(obj.stt);
                        setTimeout(function() {
                            $('#loginModal .status__Change').html('');
                        }, 2000);
                      //  $('#loginModal input[name=mail]').val('');
                      //  $('#loginModal input[name=password]').val('');
                    }
                    if(obj.check == 'ok'){
                        window.location.href = Drupal.settings.basePath + 'home/' + obj.stt;
                    }
                    $('input[name=mail]').attr('placeholder', mail);
                    $('input[name=password]').attr('placeholder', pass);



                }
            });
        }
        return false;
    });
}
