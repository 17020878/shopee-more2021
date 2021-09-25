<?php //print_r($data)?>
<div class="notification d-none">
    <div class="access_left">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30" height="30" viewBox="0 0 367.805 367.805" style="enable-background:new 0 0 367.805 367.805;" xml:space="preserve"><g><path style="fill:#3BB54A;" d="M183.903,0.001c101.566,0,183.902,82.336,183.902,183.902s-82.336,183.902-183.902,183.902	S0.001,285.469,0.001,183.903l0,0C-0.288,82.625,81.579,0.29,182.856,0.001C183.205,0,183.554,0,183.903,0.001z"/><polygon style="fill:#D4E1F4;" points="285.78,133.225 155.168,263.837 82.025,191.217 111.805,161.96 155.168,204.801 256.001,103.968 	"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    </svg>
    </div>
    <div class="access_right">
        <span >Thành công</span>
        <p>Đã thêm khách hàng vào trong tệp</p>
    </div>

</div>
<div class="form__follow">
    <div class="form__up_follow">
        <button type="button" name="select__box_image" class="select__box_image">
            <span class="mb-0 text14">Cả ảnh và không ảnh</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg1 svgArrow">
                <path d="M6.00004 7.75C5.83649 7.7502 5.67479 7.71552 5.52571 7.64827C5.37664 7.58102 5.24362 7.48274 5.13554 7.36L0.230039 1.784C0.0749938 1.59923 -0.00160603 1.36113 0.0166188 1.12061C0.0348437 0.880091 0.146447 0.65625 0.327564 0.496948C0.508681 0.337645 0.744937 0.255527 0.985813 0.268151C1.22669 0.280775 1.45307 0.38714 1.61654 0.564502L5.90604 5.4405C5.91777 5.45389 5.93223 5.46461 5.94844 5.47196C5.96465 5.47931 5.98224 5.48311 6.00004 5.48311C6.01784 5.48311 6.03543 5.47931 6.05164 5.47196C6.06785 5.46461 6.08231 5.45389 6.09404 5.4405L10.3835 0.564502C10.4627 0.470215 10.5598 0.392694 10.6693 0.336497C10.7788 0.280299 10.8985 0.246559 11.0212 0.237259C11.1439 0.227959 11.2673 0.243287 11.384 0.282343C11.5007 0.321398 11.6085 0.383392 11.7009 0.464682C11.7933 0.545971 11.8686 0.644915 11.9222 0.755699C11.9758 0.866483 12.0068 0.98687 12.0132 1.10979C12.0197 1.2327 12.0015 1.35566 11.9597 1.47145C11.9179 1.58723 11.8535 1.6935 11.77 1.784L6.86604 7.358C6.75777 7.48104 6.62455 7.57964 6.47524 7.64722C6.32592 7.71481 6.16394 7.74985 6.00004 7.75Z" fill="black" fill-opacity="0.45"></path>
            </svg>
        </button>
        <div class="dropdown-menu wayBox">
            <button type="button" have_img="both" class="dropdown-item active">Cả ảnh và không ảnh</button>
            <button type="button" have_img="have_img" class="dropdown-item">Có ảnh</button>
            <button type="button" have_img="no_img" class="dropdown-item">Không ảnh</button>
        </div>
        <button type="button" name="button_scan_client" class="button_scan_client">
            <svg style="margin-right: 4px" id="bold" fill="#fff" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="6" r="4"/><path d="m15.25 12h-6.5c-2.619 0-4.75 2.131-4.75 4.75v2.5c0 .414.336.75.75.75h14.5c.414 0 .75-.336.75-.75v-2.5c0-2.619-2.131-4.75-4.75-4.75z"/><path d="m5 0h-2c-1.654 0-3 1.346-3 3v2c0 .553.448 1 1 1s1-.447 1-1v-2c0-.552.449-1 1-1h2c.552 0 1-.447 1-1s-.448-1-1-1z"/><path d="m5 22h-2c-.551 0-1-.448-1-1v-2c0-.553-.448-1-1-1s-1 .447-1 1v2c0 1.654 1.346 3 3 3h2c.552 0 1-.447 1-1s-.448-1-1-1z"/><path d="m21 0h-2c-.552 0-1 .447-1 1s.448 1 1 1h2c.551 0 1 .448 1 1v2c0 .553.448 1 1 1s1-.447 1-1v-2c0-1.654-1.346-3-3-3z"/><path d="m23 18c-.552 0-1 .447-1 1v2c0 .552-.449 1-1 1h-2c-.552 0-1 .447-1 1s.448 1 1 1h2c1.654 0 3-1.346 3-3v-2c0-.553-.448-1-1-1z"/></svg>
            Quét khách hàng
        </button>
    </div>
    <form method="post">
        <div class="form__down_follow">
            <button type="button" name="select__file_client" class="select__file_client">
                <span class="mb-0 text14">Chọn tệp khách hàng</span>
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
                    <button type="button" class="dropdown-item"><?php echo '['. $num . '] '.$value->namefileClient?></button>
                <?php endforeach;?>
            </div>
                <button type="submit" name="button_import_file" class="button_import_file">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20" height="20" fill="#fff" viewBox="0 0 511.992 511.992" style="margin-right:5px; enable-background:new 0 0 511.992 511.992;" xml:space="preserve"><g><g><path d="M484.746,111.59L348.69,1.024c-2.935-2.389-7.364-0.324-7.364,3.43v110.566c0,2.458,2.014,4.446,4.506,4.446h136.055		C486.111,119.467,488.014,114.244,484.746,111.59z"/></g></g><g><g><path d="M253.381,253.124l-75.298-82.833c-2.62-2.876-7.424-1.024-7.424,2.876v27.366c0,2.355-1.911,4.267-4.267,4.267H34.126	c-4.71,0-8.533,3.823-8.533,8.533v76.8c0,4.71,3.823,8.533,8.533,8.533h132.267c2.355,0,4.267,1.911,4.267,4.267v35.9c0,3.9,4.804,5.751,7.424,2.867l75.298-82.833C254.858,257.237,254.858,254.754,253.381,253.124z"/></g></g><g><g><path d="M482.126,136.533h-153.6c-2.355,0-4.267-1.911-4.267-4.267v-128c0-2.355-1.911-4.267-4.267-4.267H81.059c-2.355,0-4.267,1.911-4.267,4.267v179.2c0,2.355,1.911,4.267,4.267,4.267h68.267c2.355,0,4.267-1.911,4.267-4.267v-53.214c0-3.866,4.71-5.769,7.356-2.944c24.533,26.172,102.903,109.764,118.084,125.961c1.51,1.613,1.493,4.062,0.008,5.709c-15.172,16.828-93.696,99.959-118.161,125.841c-2.637,2.79-7.313,0.939-7.313-2.91c-0.009-17.143,0.017-50.176,0.026-61.918c0-2.355-1.911-4.267-4.267-4.267h-64c-4.71,0-8.533,3.823-8.533,8.533v179.2c0,4.71,3.823,8.533,8.533,8.533h392.533c4.71,0,8.533-3.823,8.533-8.533V140.8C486.393,138.445,484.481,136.533,482.126,136.533z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    </svg>
                    Nhập vào tệp
                </button>
                <input type="hidden" value="" name="json_client">

                <input type="text" value="" name="create" placeholder="Tên tệp khách hàng" class="name_file_client">
                <button type="submit" name="button_create_file_client" class="button_create_file_client">
                    <svg style="margin-right: 5px" height="20" fill="#fff" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0"/></svg>
                    Tạo tệp khách hàng
                </button>
        </div>
    </form>
<input type="hidden" value="" name="id_scan_link">
</div>



<div class="row table_client">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header border-transparent">
                <h3 style="margin-top: 10px" class="card-title">Danh sách khách hàng</h3>
                <button type="button" name="select__number_client" class="select__number_client">
                    <span class="mb-0 text14">Chọn số lượng khách hàng</span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg1 svgArrow">
                        <path d="M6.00004 7.75C5.83649 7.7502 5.67479 7.71552 5.52571 7.64827C5.37664 7.58102 5.24362 7.48274 5.13554 7.36L0.230039 1.784C0.0749938 1.59923 -0.00160603 1.36113 0.0166188 1.12061C0.0348437 0.880091 0.146447 0.65625 0.327564 0.496948C0.508681 0.337645 0.744937 0.255527 0.985813 0.268151C1.22669 0.280775 1.45307 0.38714 1.61654 0.564502L5.90604 5.4405C5.91777 5.45389 5.93223 5.46461 5.94844 5.47196C5.96465 5.47931 5.98224 5.48311 6.00004 5.48311C6.01784 5.48311 6.03543 5.47931 6.05164 5.47196C6.06785 5.46461 6.08231 5.45389 6.09404 5.4405L10.3835 0.564502C10.4627 0.470215 10.5598 0.392694 10.6693 0.336497C10.7788 0.280299 10.8985 0.246559 11.0212 0.237259C11.1439 0.227959 11.2673 0.243287 11.384 0.282343C11.5007 0.321398 11.6085 0.383392 11.7009 0.464682C11.7933 0.545971 11.8686 0.644915 11.9222 0.755699C11.9758 0.866483 12.0068 0.98687 12.0132 1.10979C12.0197 1.2327 12.0015 1.35566 11.9597 1.47145C11.9179 1.58723 11.8535 1.6935 11.77 1.784L6.86604 7.358C6.75777 7.48104 6.62455 7.57964 6.47524 7.64722C6.32592 7.71481 6.16394 7.74985 6.00004 7.75Z" fill="black" fill-opacity="0.45"></path>
                    </svg>
                </button>
                <div class="dropdown-menu wayBox button__number_client">
                    <button type="button" num="6" class="dropdown-item">36 khách hàng</button>
                    <button type="button" num="12" class="dropdown-item">72 khách hàng</button>
                    <button type="button" num="18" class="dropdown-item">108 khách hàng</button>
                    <button type="button" num="24" class="dropdown-item">144 khách hàng</button>
                    <button type="button" num="30" class="dropdown-item">180 khách hàng</button>
                </div>
                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse">
                        <i class="fas fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-tool" data-card-widget="remove">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table m-0">
                        <thead>
                        <tr>
                            <th>
                                <input type="checkbox" id="client" name="client-1" value="Apple">
                                <label class="check_ccf" for="client"></label>
                            </th>
                            <th>STT</th>
                            <th>Ảnh</th>
                            <th class="name_product">Khách hàng</th>
                            <th class="name_product">ID khách hàng</th>
                            <th>Ngày đánh giá</th>
                            <th class="point"><span sort_by="point">Số điểm</span>
                                <svg class="arrow_down" width="15" height="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 50 50;" xml:space="preserve"><g><g><path d="M374.108,373.328c-7.829-7.792-20.492-7.762-28.284,0.067L276,443.557V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v423.558l-69.824-70.164c-7.792-7.829-20.455-7.859-28.284-0.067c-7.83,7.793-7.859,20.456-0.068,28.285l104,104.504c0.006,0.007,0.013,0.012,0.019,0.018c7.792,7.809,20.496,7.834,28.314,0.001c0.006-0.007,0.013-0.012,0.019-0.018l104-104.504C381.966,393.785,381.939,381.121,374.108,373.328z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g><g><g></g><g></g><g></g><g></g><g><g></svg>
                                <svg class="arrow_up" width="15" height="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M374.176,110.386l-104-104.504c-0.006-0.006-0.013-0.011-0.019-0.018c-7.818-7.832-20.522-7.807-28.314,0.002c-0.006,0.006-0.013,0.011-0.019,0.018l-104,104.504c-7.791,7.829-7.762,20.493,0.068,28.285c7.829,7.792,20.492,7.762,28.284-0.067L236,68.442V492c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V68.442l69.824,70.162c7.792,7.829,20.455,7.859,28.284,0.067C381.939,130.878,381.966,118.214,374.176,110.386z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>g><g></g><g></g><g></g><g></g><g></g></svg>
                            </th>
                        </tr>
                        </thead>
                        <tbody class="t_body create_client_file">

                            <?php echo loading();?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
