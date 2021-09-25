
<div class="content-wrapper page_detail_lots_of_product">
    <div class="content-header" style="margin-bottom: 12px; border-bottom: 2px solid #ccc">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-4">
                    <h1 class="m-0">Chi tiết sản phẩm</h1>
                </div>
                <div class="th_loading d-none" style="left: 40px;top: 0;">
                    <img style="margin-left: 24px" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/93/loader.gif" alt="Loading..." class="loading">
                    <br />Vui lòng chờ ...
                </div>
                <div class="col-sm-8 name_shopp">
                    <p class="titleLotofshop">Bạn đang xem shop</p>
<!--                    <div class="threeShop" style="display: flex">-->
<!--                        <div class="three">-->
<!--                            <button id="shop1" type="button" class="dropdown-item d-none ">Shop</button>-->
<!--                        </div>-->
<!--                        <div class="three">-->
<!--                            <button id="shop2" type="button" class="dropdown-item d-none">Shop</button>-->
<!--                        </div>-->
<!--                        <div class="three">-->
<!--                            <button id="shop3" type="button" class="dropdown-item d-none">Shop</button>-->
<!--                        </div>-->
<!--                    </div>-->
                    <div class="otherShop">
                        <button type="button" data-toggle="dropdown" class="searchBox__toggle button_otherShop" aria-expanded="false">
                            <span>Danh sách các shop</span>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg1 svgArrow">
                                <path d="M6.00004 7.75C5.83649 7.7502 5.67479 7.71552 5.52571 7.64827C5.37664 7.58102 5.24362 7.48274 5.13554 7.36L0.230039 1.784C0.0749938 1.59923 -0.00160603 1.36113 0.0166188 1.12061C0.0348437 0.880091 0.146447 0.65625 0.327564 0.496948C0.508681 0.337645 0.744937 0.255527 0.985813 0.268151C1.22669 0.280775 1.45307 0.38714 1.61654 0.564502L5.90604 5.4405C5.91777 5.45389 5.93223 5.46461 5.94844 5.47196C5.96465 5.47931 5.98224 5.48311 6.00004 5.48311C6.01784 5.48311 6.03543 5.47931 6.05164 5.47196C6.06785 5.46461 6.08231 5.45389 6.09404 5.4405L10.3835 0.564502C10.4627 0.470215 10.5598 0.392694 10.6693 0.336497C10.7788 0.280299 10.8985 0.246559 11.0212 0.237259C11.1439 0.227959 11.2673 0.243287 11.384 0.282343C11.5007 0.321398 11.6085 0.383392 11.7009 0.464682C11.7933 0.545971 11.8686 0.644915 11.9222 0.755699C11.9758 0.866483 12.0068 0.98687 12.0132 1.10979C12.0197 1.2327 12.0015 1.35566 11.9597 1.47145C11.9179 1.58723 11.8535 1.6935 11.77 1.784L6.86604 7.358C6.75777 7.48104 6.62455 7.57964 6.47524 7.64722C6.32592 7.71481 6.16394 7.74985 6.00004 7.75Z" fill="black" fill-opacity="0.45"></path>
                            </svg>
                        </button>
                        <div class="dropdown-menu wayBox">
                            <?php for($i = 1; $i <= 50; $i++):?>
                                <button id="shop<?php echo $i; ?>" type="button" class="dropdown-item d-none">Shop</button>
                            <?php endfor;?>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="no_data_cmt" style="text-align: center; margin-top: 30px">
        <span>Không có dữ liệu. Vui lòng chọn shop muốn xem</span>
    </div>
    <div class="body_lots_of_detail d-none bodyDetailProduct">
        <div style="display: flex">
            <div class="form-inline ml-3 form_input">
                <div class="callout callout-info detail_lots_of_info_shop">

                </div>
                <div class="row invoice-info rating">
                    <div class="col-sm-3 invoice-col">
                        <div class="star_evaluate">
                            <span>Video..</span>
                        </div>
                        <div class="num_star_lots_of">

                        </div>
                    </div>
                    <div class="col-sm-7 invoice-col">
                        <div class="text_evaluate show_evaluate_right_lots_of detailProduct">

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="content">
            <div class="container-fluid">
                <div class="row table_tracking">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header border-transparent">
                                <h3 class="card-title">Bình luận</h3>

                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                    <button type="button" class="btn btn-tool" data-card-widget="remove">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="card-body p-0 box_comment" id="box_comment">
                                <?php echo loading() ?>
                            </div>
                            <div class="card-footer clearfix page_number_lots_of_detail d-none" id="page_number_lots_of_detail">
                                <?php echo page_number();?>
                                <input name="page_number" type="hidden" number="" itemid="" shopid="" value="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <div class="input_product">
        <?php for($j = 1; $j<=50; $j++):?>
            <input name="product_<?php echo $j; ?>" type="hidden" value="">
        <?php endfor;?>
    </div>
    
</div>
