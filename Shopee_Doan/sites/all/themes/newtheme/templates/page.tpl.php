<?php session_start();?>
<?php
    $link = arg(0);
    define('TRACKING','tracking');
    define('SPY','spy_shopee');
    define('TREND','trend');
    define('SCAN','scan_customer');
    define('FL','follow_customer');
    define('TRACKING_', 'detail_lots_of_product');
?>

<main >
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <link rel="stylesheet" href="<?php echo base_path().'sites/all/themes/newtheme/'?>plugins/fontawesome-free/css/all.min.css">
    <link rel="stylesheet" href="<?php echo base_path().'sites/all/themes/newtheme/'?>plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
    <link rel="stylesheet" href="<?php echo base_path().'sites/all/themes/newtheme/'?>dist/css/adminlte.min.css">
    <?php if($link == '' || $link == 'home'):print render($page['content']); ?>

    <?php else: ?>

        <div class="wrapper">
            <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="<?php echo base_path()?>" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="tel:0394694362" class="nav-link">Contact</a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" href="#">
                            <i class="far fa-comments"></i>
                            <span class="badge badge-danger navbar-badge">3</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <img src="<?php echo base_path().'sites/all/themes/newtheme/'?>dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
                                    <div class="media-body">
                                        <h3 class="dropdown-item-title">
                                            Brad Diesel
                                            <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                                        </h3>
                                        <p class="text-sm">Call me whenever you can...</p>
                                        <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <img src="<?php echo base_path().'sites/all/themes/newtheme/'?>dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                                    <div class="media-body">
                                        <h3 class="dropdown-item-title">
                                            John Pierce
                                            <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                                        </h3>
                                        <p class="text-sm">I got your message bro</p>
                                        <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <img src="<?php echo base_path().'sites/all/themes/newtheme/'?>dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                                    <div class="media-body">
                                        <h3 class="dropdown-item-title">
                                            Nora Silvester
                                            <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                                        </h3>
                                        <p class="text-sm">The subject goes here</p>
                                        <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" href="#">
                            <i class="far fa-bell"></i>
                            <span class="badge badge-warning navbar-badge">15</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span class="dropdown-item dropdown-header">15 Notifications</span>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-envelope mr-2"></i> 4 new messages
                                <span class="float-right text-muted text-sm">3 mins</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-users mr-2"></i> 8 friend requests
                                <span class="float-right text-muted text-sm">12 hours</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-file mr-2"></i> 3 new reports
                                <span class="float-right text-muted text-sm">2 days</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                            <i class="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                            <i class="fas fa-th-large"></i>
                        </a>
                    </li>
                </ul>
            </nav>
            <aside class="main-sidebar sidebar-dark-primary elevation-4">
                <div class="user__">
                    <a href="#" class="brand-link">
                        <img src="<?php echo base_path().'sites/all/themes/newtheme/'?>images/no_avt.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                        <span class="brand-text font-weight-light"><?php echo $_SESSION['name']?></span>
                    </a>
                    <ul class="subMenu__child">
                        <li><button data-toggle="modal" data-target="#changePassModal" type="button"><a href="#"><svg viewBox="64 64 896 896" class="" data-icon="user" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                                </svg><span>Đổi mật khẩu</span></a></button></li>
                        <li><a href="<?php echo base_path().'dangxuat'?>"><svg viewBox="64 64 896 896" class="" data-icon="logout" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
                                </svg><span>Đăng xuất</span></a></li>
                    </ul>
                </div>
                <div class="sidebar">
                    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div class="image">
                            <svg viewBox="64 64 896 896" class="" data-icon="home" width="20" height="30" fill="#c2c7d0" aria-hidden="true"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg>
                        </div>
                        <div class="info">
                            <a href="<?php echo base_path()?>" class="d-block">Trang chủ</a>
                        </div>
                    </div>

                    <nav class="mt-2">
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li class="nav-item menu-open">
                                <a href="#" class="nav-link active">
                                    <i class="nav-icon fas fa-chart-pie"></i>
                                    <p>
                                        Phân tích thị trường
                                        <i class="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                        <a href="<?php echo base_path().'tracking' ?>" class="nav-link <?php echo ($link == TRACKING || $link == TRACKING_)?'active':'' ?>">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Tracking</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="<?php echo base_path().'spy_shopee' ?>" class="nav-link <?php echo ($link == SPY)?'active':'' ?>">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Spy Shopee</p>
                                        </a>
                                    </li>
                                    <li class="nav-item d-none">
                                        <a href="<?php echo base_path().'trend' ?>" class="nav-link <?php echo ($link == TREND)?'active':'' ?>">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Xu hướng tìm kiếm</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item menu-open">
                                <a href="#" class="nav-link active">
                                    <i class="nav-icon fas fa-search"></i>
                                    <p>
                                        Khách hàng tiềm năng
                                        <i class="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                        <a href="<?php echo base_path().'scan_customer' ?>" class="nav-link <?php echo ($link == SCAN)?'active':'' ?>">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Tạo tệp khách hàng</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="<?php echo base_path().'follow_customer' ?>" class="nav-link <?php echo ($link == FL)?'active':'' ?>">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Tiếp cận khách hàng</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

            <?php print render($page['content']); ?>

            <aside class="control-sidebar control-sidebar-dark">
            </aside>

            <footer class="main-footer">

            </footer>
        </div>
    <?php endif;?>

    <script src="<?php echo base_path().'sites/all/themes/newtheme/'?>plugins/jquery/jquery.min.js"></script>
    <script src="<?php echo base_path().'sites/all/themes/newtheme/'?>plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="<?php echo base_path().'sites/all/themes/newtheme/'?>plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
    <script src="<?php echo base_path().'sites/all/themes/newtheme/'?>dist/js/adminlte.js"></script>
    <script src="<?php echo base_path().'sites/all/themes/newtheme/'?>plugins/jquery-mousewheel/jquery.mousewheel.js"></script>
    <script src="<?php echo base_path().'sites/all/themes/newtheme/'?>plugins/raphael/raphael.min.js"></script>
    <script src="<?php echo base_path().'sites/all/themes/newtheme/'?>plugins/jquery-mapael/jquery.mapael.min.js"></script>
    <script src="<?php echo base_path().'sites/all/themes/newtheme/'?>plugins/jquery-mapael/maps/usa_states.min.js"></script>
    <script src="<?php echo base_path().'sites/all/themes/newtheme/'?>plugins/chart.js/Chart.min.js"></script>
    <script src="<?php echo base_path().'sites/all/themes/newtheme/'?>dist/js/demo.js"></script>
    <script src="<?php echo base_path().'sites/all/themes/newtheme/'?>dist/js/pages/dashboard2.js"></script>
</main>
<form method="post">
    <div id="changePassModal" class="modal fade changePassModal">
        <div class="modal-dialog modal-register">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" data-dismiss="modal" class="close">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#9E9E9E"></path>
                        </svg>
                    </button>
                    <div class="formRegister">
                        <div class="formRegister__img"><img src="<?php echo base_path().'sites/all/themes/newtheme/'?>images/register.jpg"></div>
                        <div class="formRegister__cont">
                            <p class="formRegister__title">Đổi mật khẩu</p>
                            <div class="status__Change"></div>
                            <div class="formRegister__input">
                                <div class="form-group">
                                    <input type="password" name="c_pass" placeholder="Mật khẩu cũ" class="form-control">
                                </div>
                                <div class="form-group">
                                    <input type="password" name="n_pass" placeholder="Mật khẩu mới" class="form-control">
                                </div>
                                <div class="form-group">
                                    <input type="password" name="n_pass_verify" placeholder="Nhập lại mật khẩu" class="form-control">
                                </div>
                            </div>
                            <div class="formRegister__btn">
                                <button type="submit" name="change_pass" class="btn btn-orange"><span>Đổi mật khẩu</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
