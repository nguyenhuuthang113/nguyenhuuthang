$(document).ready(function() {
    // Ẩn tất cả các phần (About và Contact) khi trang web được tải
    $(".about, .contact").hide();

    // Xử lý khi người dùng nhấp vào liên kết About
    $("a[href='#about']").click(function() {
        // Ẩn tất cả các phần khác và hiển thị phần About
        $(".row, .contact").hide();
        $(".about").show();
    });

    // Xử lý khi người dùng nhấp vào liên kết Contact
    $("a[href='#contact']").click(function() {
        // Ẩn tất cả các phần khác và hiển thị phần Contact
        $(".row, .about").hide();
        $(".contact").show();
    });

    // Xử lý khi người dùng nhấp vào liên kết Home (để quay lại trang chủ)
    $("a[href='#home']").click(function() {
        // Ẩn tất cả các phần khác và hiển thị lại phần Home
        $(".about, .contact").hide();
        $(".row").show();
    });
});