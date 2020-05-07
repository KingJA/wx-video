const app = getApp()

Page({
    data: {

    },
    doRegist: function (e) {
        var formData = e.detail.value;
        console.log(formData);
        var username = formData.username;
        var password = formData.password;
        if (username.length == 0 || password.length == 0) {
            wx.showToast({
                title: '用户名或密码不能为空',
                icon: 'none',
                duration: 2000
            })
        }
        wx.request({
            url: app.globalData.baseApiUrl + "/register",
            method: 'post',
            data: {
                username,
                password
            },
            header: {
                "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            success: function (res) {
                if (res.data.status == 200) {
                   
                    app.globalData.userInfo = res.data.data;
                    console.log(res.data.data);
                } else {
                    wx.showToast({
                        title: res.data.msg,
                        icon: 'none',
                        duration: 2000
                    })
                }
            },
            fail: function (error) {
                wx.showToast({
                    title: '网络异常',
                    icon: 'none',
                    duration: 2000
                })
            }
        })

    }
})