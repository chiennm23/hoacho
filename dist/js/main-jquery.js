$(document).ready(function () {
    $("#btnCategory").click(function () {
        var hotline = $("#txthotline").val();
        var province = $("#txtprovince").val();
        var status = $("#txtstatus").val();
        var ordering = $("#txtodering").val();
        if (hotline == '') {
            swal("Cảnh báo", "Mời bạn nhập vào Hotline", "error");
            return;
        }
        if (!isMobileVietNam(hotline)) {
            swal("Cảnh báo", "Định dạng số Hotline phải là số điện thoại việt nam", "error");
            return;
        }
        if (province == '') {
            swal("Cảnh báo", "Mời bạn nhập vào Province", "error");
            return;
        }
        if (status == '') {
            swal("Cảnh báo", "Mời bạn nhập vào Status", "error");
            return;
        }
        if (ordering == '') {
            swal("Cảnh báo", "Mời bạn nhập vào Ordering", "error");
        } else {
            swal("Good job!", "Nhập thông tin thành công", "success");
        }
        ;
    });

    function isMobileVietNam(mobile) {
        var regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        return regex.test(mobile);
    }

    // Alert when click edit icon table
    $(".edit-icon-table").click(function ()
    {
        console.log(1111);
        swal({
            title: "Bạn có chắc muốn sửa?",
            // text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Tick cho vui đấy, chưa sửa được đâu", {
                        icon: "success",
                    });
                } else {
                    swal("Chọn đúng rồi đấy, có sửa cũng chưa sửa được đâu!");
                }
            });;
    })

    // Alert when click edit icon table
    $(".delete-icon-table").click(function ()
    {
        console.log(1111);
        swal({
            title: "Bạn có chắc muốn xóa?",
            // text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Tick cho vui đấy, chưa xóa được đâu", {
                        icon: "success",
                    });
                } else {
                    swal("Không dám xóa thì thôi!");
                }
            });;
    })

    /////When click button btn Submit Schedule
    $("#btnSchedule").click(function () {
        var name = $("#txtname").val();
        var type = $("#txttype").val();
        var time = $("#txttime").val();
        var length = $("#txtLength").val();
        var category = $("#txtCategory").val();
        var status = $("#txtStatus").val();
        var ordering = $("#txtOrdering").val();
        if (name == '') {
            swal("Cảnh báo", "Mời bạn nhập vào Name", "error");
            return;
        }
        if (type == '') {
            swal("Cảnh báo", "Mời bạn nhập vào Type", "error");
            return;
        }
        if (!isEmail(type)) {
            swal("Cảnh báo", "Yêu cầu nhập đúng định dạng email", "error");
            return;
        }
        if (time == '') {
            swal("Cảnh báo", "Mời bạn nhập vào Time", "error");
            return;
        }
        if (length == '') {
            swal("Cảnh báo", "Mời bạn nhập vào Length", "error");
            return;
        }
        if (category == '') {
            swal("Cảnh báo", "Mời bạn nhập vào Category Schedule", "error");
            return;
        }
        if (status == '') {
            swal("Cảnh báo", "Mời bạn nhập vào Status", "error");
            return;
        }
        if (ordering == '') {
            swal("Cảnh báo", "Mời bạn nhập vào Ordering", "error");
        } else {
            swal("Good job!", "Nhập thông tin thành công", "success");
        }
        ;
    });

    function isEmail(email) {
        var regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        return regex.test(email)
    }
});