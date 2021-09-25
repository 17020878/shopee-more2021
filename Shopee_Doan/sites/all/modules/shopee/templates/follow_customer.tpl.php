<?php //print_r($data);
//print_r($array);
?>
<div class="content-wrapper contact_client">
    <input type="hidden" id="data_client" name="data_client">
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Tiếp cận khách hàng</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">follow_customer</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <form method="post" class="form-inline ml-3 form_follow">
        <div class="form__up_fl">
            <input type="text" placeholder="Tên đăng nhập"  name="acc_shop" class="acc_shop">
            <input type="password" name="pass_shop" placeholder="Mật khẩu shop" class="pass_shop">
        </div>
        <span class="madatory">*(Bắt buộc) Thông tin tài khoản Shopee muốn theo dõi khách hàng phải chính xác mới theo dõi được</span>
        <div class="form_down_fl">
            <button type="button" data-toggle="dropdown" class="searchBox__toggle" aria-expanded="false">
                <span>Chọn tệp khách hàng</span>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg1 svgArrow">
                    <path d="M6.00004 7.75C5.83649 7.7502 5.67479 7.71552 5.52571 7.64827C5.37664 7.58102 5.24362 7.48274 5.13554 7.36L0.230039 1.784C0.0749938 1.59923 -0.00160603 1.36113 0.0166188 1.12061C0.0348437 0.880091 0.146447 0.65625 0.327564 0.496948C0.508681 0.337645 0.744937 0.255527 0.985813 0.268151C1.22669 0.280775 1.45307 0.38714 1.61654 0.564502L5.90604 5.4405C5.91777 5.45389 5.93223 5.46461 5.94844 5.47196C5.96465 5.47931 5.98224 5.48311 6.00004 5.48311C6.01784 5.48311 6.03543 5.47931 6.05164 5.47196C6.06785 5.46461 6.08231 5.45389 6.09404 5.4405L10.3835 0.564502C10.4627 0.470215 10.5598 0.392694 10.6693 0.336497C10.7788 0.280299 10.8985 0.246559 11.0212 0.237259C11.1439 0.227959 11.2673 0.243287 11.384 0.282343C11.5007 0.321398 11.6085 0.383392 11.7009 0.464682C11.7933 0.545971 11.8686 0.644915 11.9222 0.755699C11.9758 0.866483 12.0068 0.98687 12.0132 1.10979C12.0197 1.2327 12.0015 1.35566 11.9597 1.47145C11.9179 1.58723 11.8535 1.6935 11.77 1.784L6.86604 7.358C6.75777 7.48104 6.62455 7.57964 6.47524 7.64722C6.32592 7.71481 6.16394 7.74985 6.00004 7.75Z" fill="black" fill-opacity="0.45"></path>
                </svg>
            </button>
            <div class="dropdown-menu wayBox">
                <?php foreach ($data as $value):
                    if($value->data == ""){
                        $num = 0;
                    }else{
                        $dataId =  explode(',',$value->data);
                        $num = count($dataId);
                    }
                    ?>
                    <button id="" type="button" class="dropdown-item"><?php echo '['. $num . '] '.$value->namefileClient?></button>
                <?php endforeach;?>

            </div>
            <input type="text" value="" placeholder="Khách hàng theo dõi (người)" name="number_client_fl" class="number__Client">
            <input type="text" name="sleep_time" placeholder="Thời gian nghỉ(s)" class="sleep__Time">
            <div class="col-12 col-sm-6 col-md-3 button_folow">
                <div class="info-box mb-3 follow" data-toggle="modal" data-target="#detail-lots-of-ProductPopup">
                    <svg fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20" height="20" viewBox="0 0 536.071 536.07" style="enable-background:new 0 0 536.071 536.07;" xml:space="preserve"><g><path d="M147.128,91.076c0-37.95,30.766-68.716,68.721-68.716c37.95,0,68.719,30.766,68.719,68.716s-30.769,68.715-68.719,68.715C177.894,159.792,147.128,129.026,147.128,91.076z M248.873,206.607c0.689-14.963,5.84-28.812,14.127-40.261	c-5.816-1.218-11.827-1.865-17.995-1.865h-58.304c-6.15,0-12.153,0.642-17.939,1.845c8.819,12.232,14.094,27.171,14.18,43.343c10.72-5.896,23.02-9.253,36.085-9.253C229.625,200.416,239.714,202.624,248.873,206.607z M260.505,212.775c19.96,12.517,33.957,33.688,36.517,58.274c8.133,3.801,17.171,5.994,26.746,5.994c34.968,0,63.311-28.346,63.311-63.313	c0-34.971-28.343-63.311-63.311-63.311C289.12,150.42,261.031,178.257,260.505,212.775z M219.026,342.411c34.962,0,63.307-28.354,63.307-63.311c0-34.962-28.345-63.311-63.307-63.311c-34.965,0-63.322,28.348-63.322,63.311C155.705,314.057,184.061,342.411,219.026,342.411z M245.882,346.72h-53.717c-44.697,0-81.069,36.369-81.069,81.072v65.703	l0.171,1.029l4.522,1.406c42.658,13.323,79.718,17.779,110.224,17.779c59.571,0,94.114-16.987,96.242-18.074l4.231-2.141h0.449v-65.703C326.936,383.089,290.585,346.72,245.882,346.72z M350.638,281.364h-53.314c-0.579,21.332-9.683,40.542-24.081,54.35	c39.732,11.815,68.802,48.657,68.802,92.178v20.245c52.629-1.938,82.963-16.846,84.961-17.851l4.232-2.152h0.449v-65.715C431.693,317.728,395.324,281.364,350.638,281.364z M364.889,149.069c19.961,12.519,33.957,33.691,36.511,58.277c8.134,3.801,17.171,5.99,26.746,5.99c34.975,0,63.316-28.342,63.316-63.304c0-34.972-28.342-63.311-63.316-63.311C393.503,86.717,365.416,114.56,364.889,149.069z M455.01,217.658h-53.303c-0.579,21.332-9.682,40.542-24.08,54.349c39.731,11.811,68.801,48.658,68.801,92.179v20.245c52.624-1.934,82.964-16.84,84.962-17.852l4.226-2.145h0.455v-65.723C536.077,254.024,499.708,217.658,455.01,217.658z M107.937,277.044c12.386,0,23.903-3.618,33.67-9.777c3.106-20.241,13.958-37.932,29.454-49.975c0.065-1.188,0.174-2.361,0.174-3.561c0-34.971-28.351-63.311-63.298-63.311c-34.977,0-63.316,28.339-63.316,63.311C44.621,248.704,72.959,277.044,107.937,277.044z M164.795,335.714c-14.331-13.742-23.404-32.847-24.072-54.055c-1.971-0.147-3.928-0.295-5.943-0.295H81.069C36.366,281.364,0,317.728,0,362.425v65.709l0.166,1.023l4.528,1.412c34.214,10.699,64.761,15.616,91.292,17.153v-19.837C95.991,384.371,125.054,347.523,164.795,335.714z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
                    <div class="info-box-content">
                        <strong class="info-box-text">Tạo chiến dịch theo dõi</strong>
                    </div>
                </div>
            </div>
            <button type="button" class="d-none follow__hidden">follow hidden</button>
        </div>
    </form>
    <section class="content">
        <div class="container-fluid">
            <div class="row table_tracking_scan">
                <div class="col-md-9">
                    <div class="card">
                        <div class="card-header border-transparent padding_follow">
                            <div class="name_shop_follow d-none">
                                <p style="display: flex" class="title__Follow">
                                    <span class="name_file">Shop theo dõi: Chưa xác định - Tệp: Áo thun nữ</span></p>
                                <div class="button__Follow d-none">
                                    <div class="loading__Follow d-none"></div>
                                    <span>Chạy</span>
                                </div>
                                <span class="number__Follow"></span>
                            </div>

                            <div class="run_follow">
                                <span class="setTimeout"></span>
                                <div class="second">

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <input type="hidden" name="name_client" value="">
    <input type="hidden" name="spc_ec" value="">
    <input type="hidden" name="token" value="">
</div>
