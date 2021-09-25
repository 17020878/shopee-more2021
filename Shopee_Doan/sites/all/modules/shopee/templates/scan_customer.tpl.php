<?php ?>
<div class="content-wrapper">
    <input type="hidden" id="data_client" value="none" name="data_client">

    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Tạo tệp khách hàng</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Scan</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <form class="form-inline ml-3 form_input" method="post" >
<!--        <input class="form-control form-control-sidebar one" id="number_client" type="search" placeholder="Số lượng sản phẩm ..." aria-label="Search">-->
        <div class="form-inline">
            <div class="input-group" data-widget="sidebar-search">
                <input class="form-control form-control-sidebar" id="keyword_tracking" type="search" placeholder="Nhập từ khóa  ...." aria-label="Search">
                <div class="input-group-append">
                    <button style="color: #6a6767" class="btn btn-sidebar scan" type="submit">
                        <i class="fas fa-search fa-fw"></i>
                        Tìm sản phẩm
                    </button>
                </div>
            </div>
        </div>
        <div data-toggle="modal" data-target="#createClientPopup">
            <button type="button" class="button_popup__scan"><svg fill="#e5e5e5" width="20" height="20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve"><g><g><path d="M507.608,4.395c-4.243-4.244-10.609-5.549-16.177-3.321L9.43,193.872c-5.515,2.206-9.208,7.458-9.42,13.395	c-0.211,5.936,3.101,11.437,8.445,14.029l190.068,92.181l92.182,190.068c2.514,5.184,7.764,8.455,13.493,8.455	c0.178,0,0.357-0.003,0.536-0.01c5.935-0.211,11.189-3.904,13.394-9.419l192.8-481.998	C513.156,15.001,511.851,8.638,507.608,4.395z M52.094,209.118L434.72,56.069L206.691,284.096L52.094,209.118z M302.883,459.907	l-74.979-154.599l228.03-228.027L302.883,459.907z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                </svg>
                Quét khách hàng</button>
        </div>
<!--        <span>* Điền số lượng sản phẩm muốn hiển thị (nhỏ hơn 1000). Nếu không điền mặc định hiển thị 50 sản phẩm</span>-->
    </form>
    <section class="content">
        <div class="container-fluid">



            <div class="row table_tracking_scan">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header border-transparent">
                            <h3 class="card-title"><strong>Danh sách sản phẩm</strong></h3>
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
                                <table class="table m-0" style="width: 140%!important;">
                                    <thead>
                                        <tr>
                                            <th>
                                                <input type="checkbox" id="fruit" name="fruit-1" value="Apple">
                                                <label for="fruit"></label>
                                            </th>
                                            <th>STT</th>
                                            <th>Ảnh</th>
                                            <th class="name_product">Tên sản phẩm</th>
                                            <th class="cmt"><span sort_by="cmt" >Comment</span>
                                                <svg class="arrow_down" width="15" height="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 50 50;" xml:space="preserve"><g><g><path d="M374.108,373.328c-7.829-7.792-20.492-7.762-28.284,0.067L276,443.557V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v423.558l-69.824-70.164c-7.792-7.829-20.455-7.859-28.284-0.067c-7.83,7.793-7.859,20.456-0.068,28.285l104,104.504c0.006,0.007,0.013,0.012,0.019,0.018c7.792,7.809,20.496,7.834,28.314,0.001c0.006-0.007,0.013-0.012,0.019-0.018l104-104.504C381.966,393.785,381.939,381.121,374.108,373.328z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g><g><g></g><g></g><g></g><g></g><g><g></svg>
                                                <svg class="arrow_up" width="15" height="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M374.176,110.386l-104-104.504c-0.006-0.006-0.013-0.011-0.019-0.018c-7.818-7.832-20.522-7.807-28.314,0.002c-0.006,0.006-0.013,0.011-0.019,0.018l-104,104.504c-7.791,7.829-7.762,20.493,0.068,28.285c7.829,7.792,20.492,7.762,28.284-0.067L236,68.442V492c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V68.442l69.824,70.162c7.792,7.829,20.455,7.859,28.284,0.067C381.939,130.878,381.966,118.214,374.176,110.386z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>g><g></g><g></g><g></g><g></g><g></g></svg>
                                            </th>
                                            <th class="like"><span sort_by="like">Like</span>
                                                <svg class="arrow_down" width="15" height="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 50 50;" xml:space="preserve"><g><g><path d="M374.108,373.328c-7.829-7.792-20.492-7.762-28.284,0.067L276,443.557V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v423.558l-69.824-70.164c-7.792-7.829-20.455-7.859-28.284-0.067c-7.83,7.793-7.859,20.456-0.068,28.285l104,104.504c0.006,0.007,0.013,0.012,0.019,0.018c7.792,7.809,20.496,7.834,28.314,0.001c0.006-0.007,0.013-0.012,0.019-0.018l104-104.504C381.966,393.785,381.939,381.121,374.108,373.328z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g><g><g></g><g></g><g></g><g></g><g><g></svg>
                                                <svg class="arrow_up" width="15" height="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M374.176,110.386l-104-104.504c-0.006-0.006-0.013-0.011-0.019-0.018c-7.818-7.832-20.522-7.807-28.314,0.002c-0.006,0.006-0.013,0.011-0.019,0.018l-104,104.504c-7.791,7.829-7.762,20.493,0.068,28.285c7.829,7.792,20.492,7.762,28.284-0.067L236,68.442V492c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V68.442l69.824,70.162c7.792,7.829,20.455,7.859,28.284,0.067C381.939,130.878,381.966,118.214,374.176,110.386z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>g><g></g><g></g><g></g><g></g><g></g></svg>
                                            </th>
                                            <th class="price"><span sort_by="price">Giá</span>
                                                <svg class="arrow_down" width="15" height="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 50 50;" xml:space="preserve"><g><g><path d="M374.108,373.328c-7.829-7.792-20.492-7.762-28.284,0.067L276,443.557V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v423.558l-69.824-70.164c-7.792-7.829-20.455-7.859-28.284-0.067c-7.83,7.793-7.859,20.456-0.068,28.285l104,104.504c0.006,0.007,0.013,0.012,0.019,0.018c7.792,7.809,20.496,7.834,28.314,0.001c0.006-0.007,0.013-0.012,0.019-0.018l104-104.504C381.966,393.785,381.939,381.121,374.108,373.328z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g><g><g></g><g></g><g></g><g></g><g><g></svg>
                                                <svg class="arrow_up" width="15" height="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M374.176,110.386l-104-104.504c-0.006-0.006-0.013-0.011-0.019-0.018c-7.818-7.832-20.522-7.807-28.314,0.002c-0.006,0.006-0.013,0.011-0.019,0.018l-104,104.504c-7.791,7.829-7.762,20.493,0.068,28.285c7.829,7.792,20.492,7.762,28.284-0.067L236,68.442V492c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V68.442l69.824,70.162c7.792,7.829,20.455,7.859,28.284,0.067C381.939,130.878,381.966,118.214,374.176,110.386z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>g><g></g><g></g><g></g><g></g><g></g></svg>
                                            </th>
                                            <th class="sold"><span sort_by="sold">Đã bán</span>
                                                <svg class="arrow_down" width="15" height="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 50 50;" xml:space="preserve"><g><g><path d="M374.108,373.328c-7.829-7.792-20.492-7.762-28.284,0.067L276,443.557V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v423.558l-69.824-70.164c-7.792-7.829-20.455-7.859-28.284-0.067c-7.83,7.793-7.859,20.456-0.068,28.285l104,104.504c0.006,0.007,0.013,0.012,0.019,0.018c7.792,7.809,20.496,7.834,28.314,0.001c0.006-0.007,0.013-0.012,0.019-0.018l104-104.504C381.966,393.785,381.939,381.121,374.108,373.328z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g><g><g></g><g></g><g></g><g></g><g><g></svg>
                                                <svg class="arrow_up" width="15" height="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M374.176,110.386l-104-104.504c-0.006-0.006-0.013-0.011-0.019-0.018c-7.818-7.832-20.522-7.807-28.314,0.002c-0.006,0.006-0.013,0.011-0.019,0.018l-104,104.504c-7.791,7.829-7.762,20.493,0.068,28.285c7.829,7.792,20.492,7.762,28.284-0.067L236,68.442V492c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V68.442l69.824,70.162c7.792,7.829,20.455,7.859,28.284,0.067C381.939,130.878,381.966,118.214,374.176,110.386z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>g><g></g><g></g><g></g><g></g><g></g></svg>
                                            </th>
                                            <th class="sale"><span sort_by="sale">Doanh thu</span>
                                                <svg class="arrow_down" width="15" height="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 50 50;" xml:space="preserve"><g><g><path d="M374.108,373.328c-7.829-7.792-20.492-7.762-28.284,0.067L276,443.557V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v423.558l-69.824-70.164c-7.792-7.829-20.455-7.859-28.284-0.067c-7.83,7.793-7.859,20.456-0.068,28.285l104,104.504c0.006,0.007,0.013,0.012,0.019,0.018c7.792,7.809,20.496,7.834,28.314,0.001c0.006-0.007,0.013-0.012,0.019-0.018l104-104.504C381.966,393.785,381.939,381.121,374.108,373.328z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g><g><g></g><g></g><g></g><g></g><g><g></svg>
                                                <svg class="arrow_up" width="15" height="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M374.176,110.386l-104-104.504c-0.006-0.006-0.013-0.011-0.019-0.018c-7.818-7.832-20.522-7.807-28.314,0.002c-0.006,0.006-0.013,0.011-0.019,0.018l-104,104.504c-7.791,7.829-7.762,20.493,0.068,28.285c7.829,7.792,20.492,7.762,28.284-0.067L236,68.442V492c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V68.442l69.824,70.162c7.792,7.829,20.455,7.859,28.284,0.067C381.939,130.878,381.966,118.214,374.176,110.386z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>g><g></g><g></g><g></g><g></g><g></g></svg>
                                            </th>
                                            <th class="stock"><span sort_by="stock">Tồn kho</span>
                                                <svg class="arrow_down" width="15" height="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 50 50;" xml:space="preserve"><g><g><path d="M374.108,373.328c-7.829-7.792-20.492-7.762-28.284,0.067L276,443.557V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v423.558l-69.824-70.164c-7.792-7.829-20.455-7.859-28.284-0.067c-7.83,7.793-7.859,20.456-0.068,28.285l104,104.504c0.006,0.007,0.013,0.012,0.019,0.018c7.792,7.809,20.496,7.834,28.314,0.001c0.006-0.007,0.013-0.012,0.019-0.018l104-104.504C381.966,393.785,381.939,381.121,374.108,373.328z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g><g><g></g><g></g><g></g><g></g><g><g></svg>
                                                <svg class="arrow_up" width="15" height="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M374.176,110.386l-104-104.504c-0.006-0.006-0.013-0.011-0.019-0.018c-7.818-7.832-20.522-7.807-28.314,0.002c-0.006,0.006-0.013,0.011-0.019,0.018l-104,104.504c-7.791,7.829-7.762,20.493,0.068,28.285c7.829,7.792,20.492,7.762,28.284-0.067L236,68.442V492c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V68.442l69.824,70.162c7.792,7.829,20.455,7.859,28.284,0.067C381.939,130.878,381.966,118.214,374.176,110.386z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>g><g></g><g></g><g></g><g></g><g></g></svg>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="t_body scan_client">

                                    </tbody>
                                    <thead id="loading_create_file">
                                        <?php echo loading();?>
                                    </thead>
                                </table>
                                <div class="no_data_product" style="text-align: center; margin-top: 30px">
                                    <p>Không có dữ liệu. Vui lòng điền từ khóa và tìm sản phẩm</p>
                                </div>

                            </div>
                        </div>
                        <div class="card-footer clearfix page_create_file d-none" id="page_create_file">
                            <?php echo page_number(); ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="createClientPopup" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" data-dismiss="modal" class="close">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg1point5">
                                <path d="M14.3001 12.1788C14.2768 12.1556 14.2584 12.128 14.2458 12.0976C14.2332 12.0672 14.2267 12.0347 14.2267 12.0018C14.2267 11.9689 14.2332 11.9364 14.2458 11.906C14.2584 11.8756 14.2768 11.848 14.3001 11.8248L23.5631 2.5628C23.8444 2.28114 24.0022 1.89928 24.002 1.50124C24.0017 1.10319 23.8433 0.721561 23.5616 0.440299C23.28 0.159037 22.8981 0.00118392 22.5001 0.00146522C22.102 0.00174652 21.7204 0.160139 21.4391 0.441799L12.1771 9.6998C12.1539 9.72308 12.1263 9.74155 12.0959 9.75416C12.0656 9.76676 12.033 9.77325 12.0001 9.77325C11.9672 9.77325 11.9347 9.76676 11.9043 9.75416C11.8739 9.74155 11.8463 9.72308 11.8231 9.6998L2.56113 0.441799C2.42186 0.302467 2.25651 0.191929 2.07453 0.116498C1.89254 0.0410666 1.69748 0.00221873 1.50048 0.0021723C1.10262 0.00207854 0.721022 0.160037 0.439627 0.441299C0.158232 0.722561 9.38099e-05 1.10409 4.17235e-08 1.50195C-9.37265e-05 1.8998 0.157865 2.2814 0.439127 2.5628L9.70013 11.8248C9.72341 11.848 9.74188 11.8756 9.75448 11.906C9.76709 11.9364 9.77357 11.9689 9.77357 12.0018C9.77357 12.0347 9.76709 12.0672 9.75448 12.0976C9.74188 12.128 9.72341 12.1556 9.70013 12.1788L0.439127 21.4418C0.29986 21.5811 0.189401 21.7465 0.114055 21.9286C0.0387096 22.1106 -4.63876e-05 22.3057 4.17235e-08 22.5027C9.38099e-05 22.9005 0.158232 23.282 0.439627 23.5633C0.57896 23.7026 0.744358 23.813 0.92638 23.8884C1.1084 23.9637 1.30348 24.0025 1.50048 24.0024C1.89834 24.0023 2.27987 23.8442 2.56113 23.5628L11.8231 14.2998C11.8463 14.2765 11.8739 14.258 11.9043 14.2454C11.9347 14.2328 11.9672 14.2264 12.0001 14.2264C12.033 14.2264 12.0656 14.2328 12.0959 14.2454C12.1263 14.258 12.1539 14.2765 12.1771 14.2998L21.4391 23.5628C21.7204 23.8442 22.1019 24.0023 22.4998 24.0024C22.8976 24.0025 23.2792 23.8446 23.5606 23.5633C23.842 23.282 24.0002 22.9005 24.0003 22.5027C24.0003 22.1048 23.8424 21.7232 23.5611 21.4418L14.3001 12.1788Z" fill="black" fill-opacity="0.25"></path>
                            </svg>
                        </button>
                        <h2>Tạo tệp khách hàng</h2>
                        <?php echo create_client_file($data); ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
