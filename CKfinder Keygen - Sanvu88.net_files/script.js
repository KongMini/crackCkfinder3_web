var isIE = -1 != navigator.userAgent.toLowerCase().indexOf("msie"),
    isIE6 = -1 != navigator.userAgent.toLowerCase().indexOf("msie 6"),
    isIE7 = -1 != navigator.userAgent.toLowerCase().indexOf("msie 7"),
    isIE8 = -1 != navigator.userAgent.toLowerCase().indexOf("msie 8"),
    isIE9 = -1 != navigator.userAgent.toLowerCase().indexOf("msie 9"),
    isIE10 = -1 != navigator.userAgent.toLowerCase().indexOf("msie 10"),
    isChrome = -1 != navigator.userAgent.toLowerCase().indexOf("chrome"),
    CKEDITOR_BASEPATH = pageJson.JS_URL + "ckeditor/", charText = 0, charFull = 0, iframeURL = "/", isConnected = !0;

function share() {
    FB.ui({method: "share", display: "popup", href: pageJson.fullUrlShare}, function (e) {
        e ? (pageJson.isShared = !0, showSuccess("Thank you for sharing!")) : (pageJson.isShared = !1, showWarning("You have cancelled the share."))
    })
}

$.support.cors = !0;
var location_info = {
    street_number: null,
    street: null,
    ward: null,
    district: null,
    city: null,
    country: null,
    countryCode: null,
    postal_code: null,
    formatted_address: null
}, cookieLoc = $.cookie("cookieLoc");

function userOnline() {
    pageJson.userOnlineURL && $.ajax({
        url: pageJson.userOnlineURL,
        type: "POST",
        data: {location_info: location_info},
        dataType: "json"
    }).fail(function () {
    }).done(function (e) {
        pageJson.userOnline = e, $("#userOnline").show().find("span").html(e.userOnline ? e.userOnline : 1), "SUCCESS" == e.status && pageJson.userOnline.logout && (window.location.href = pageJson.logout_URL), "ERROR" == e.status && (0 == window.location.hostname.indexOf("admin.") && 0 == e.online ? window.location.href = pageJson.ID_URL : 0 == window.location.hostname.indexOf("id.") && window.location.pathname.indexOf("account/") < 0 && (window.location.href = pageJson.ID_URL))
    }), setTimeout(userOnline, 7e3)
}

function fileInfo(e) {
    var t = newPath.slice(2 + (newPath.lastIndexOf(".") - 1 >>> 0)), n = newPath.replace(/^.*\/([^/]*)$/, "$1");
    return {extension: t, baseName: n, fileName: n.replace("." + t, ""), path: newPath.replace(/(^.*\/)([^/]*)$/, "$1")}
}

function renameFile(e, t, n) {
    var a = e.slice(2 + (e.lastIndexOf(".") - 1 >>> 0)), i = e.replace(/^.*\/([^/]*)$/, "$1").replace("." + a, ""),
        o = e.replace(/(^.*\/)([^/]*)$/, "$1");
    return void 0 !== n ? o + i + t + "." + a : o + t + "." + a
}

function getThumbnail(e, t) {
    var n = e.replace(pageJson.UPLOAD_URL + "/" + pageJson.finderUser_URL, pageJson.UPLOAD_URL + "/" + pageJson.finderUser_URL + "/thumbs"),
        a = n.slice(2 + (n.lastIndexOf(".") - 1 >>> 0)), i = n.replace(/^.*\/([^/]*)$/, "$1"),
        o = i.replace("." + a, "");
    return n.replace(/(^.*\/)([^/]*)$/, "$1") + i + "/" + o + "__" + t + "." + a
}

$.ajaxSetup({
    data: {_token: pageJson._Token, ajax: !0}, type: "POST", beforeSend: function (e, t) {
        "GET" == t.type && (t.url = t.url.replace("_token=&", ""))
    }, cache: !1, crossDomain: !0, xhrFields: {withCredentials: !0}
});
var evtCarousel = function (e) {
    $(e).each(function () {
        $().owlCarousel && $(this).owlCarousel({
            items: $(this).data("items"),
            itemsDesktop: [1199, $(this).data("itemsdesktop")],
            itemsDesktopSmall: [979, $(this).data("itemsdesktopsmall")],
            itemsTablet: [768, $(this).data("itemstablet")],
            itemsMobile: [479, $(this).data("itemsmobile")],
            slideSpeed: $(this).data("slidespeed"),
            autoPlay: $(this).data("autoplay"),
            pagination: $(this).data("pagination"),
            responsive: $(this).data("responsive")
        })
    })
}, CaptchaCallback = function () {
    $(".g-recaptcha").each(function (e, t) {
        grecaptcha.render(t, {sitekey: "6LcRKw0UAAAAADv-Xb9X-KcWMYqKztBXpVj9-3vf"})
    })
};

function createCookie(e, t, n) {
    var a;
    if (n) {
        var i = new Date;
        i.setTime(i.getTime() + n), a = "; expires=" + i.toGMTString()
    } else a = "";
    document.cookie = escape(e) + "=" + escape(t) + a + "; path=/"
}

function loginPage() {
    $("body").on("submit", "form.loginForm", function (e) {
        var t = "";
        t += Empty($(this).find("#cemail")), "" != (t += Empty($(this).find("#cpassword"))) && noti_.showErrors(t);
        var n = $(this).serialize();
        return n.toJson = !0, e.preventDefault(), jQuery.ajax({
            url: pageJson.postLogin_URL,
            data: n,
            success: function (e, n) {
                t = "", "isLogin" == e.status ? noti_.showErrors("B???n ???? ????ng nh???p r???i !", function () {
                    e.returnUrl ? window.location.href = e.returnUrl : window.location.href = pageJson.ID_URL
                }) : "loginSuccess" == e.status ? noti_.showSuccess("????ng nh???p th??nh c??ng !", function () {
                    e.returnUrl ? window.location.href = e.returnUrl : 0 == window.location.hostname.indexOf("id.") ? window.location.href = pageJson.ID_URL : window.location.reload(!0)
                }) : ($.each(e.errors, function (e, n) {
                    t += t + "<p>" + n + "</p>"
                }), noti_.showErrors(t))
            }
        }), e.preventDefault(), !1
    })
}

function readCookie(e) {
    for (var t = escape(e) + "=", n = document.cookie.split(";"), a = 0; a < n.length; a++) {
        for (var i = n[a]; " " === i.charAt(0);) i = i.substring(1, i.length);
        if (0 === i.indexOf(t)) return unescape(i.substring(t.length, i.length))
    }
    return null
}

function eraseCookie(e) {
    createCookie(e, "", -1)
}

function isJson(e) {
    return !/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(e.replace(/"(\\.|[^"\\])*"/g, ""))
}

function is_array(e) {
    return e instanceof Array
}

function in_array(e, t) {
    return $.each(t, function (t, n) {
        if (n == e) return !0
    }), !1
}

function array_search(e, t) {
    return $.each(t, function (t, n) {
        if (n == e) return t
    }), !1
}

function is_object(e) {
    return "object" === typeof e
}

function json_decode(str_json) {
    var json = this.window.JSON;
    if ("object" == typeof json && "function" == typeof json.parse) try {
        return json.parse(str_json)
    } catch (e) {
        if (!(e instanceof SyntaxError)) throw new Error("Unexpected error type in json_decode()");
        return this.php_js = this.php_js || {}, this.php_js.last_error_json = 4, null
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        j, text = str_json;
    return cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ? (j = eval("(" + text + ")"), j) : (this.php_js = this.php_js || {}, this.php_js.last_error_json = 4, null)
}

var urlParameters = {};

function getURL() {
    if ("" !== location.href) {
        var e = location.href.replace("?", "&"), t = ((location.href.match(/\?/g) || []).length, e.split("&")), n = [];
        for (i = 0; i < t.length; i++) void 0 == (n = t[i].split("="))[1] || n[1] in t || (urlParameters[n[0]] = n[1]);
        return urlParameters
    }
    return {}
}

function parseURL(e) {
    if ("" !== location.href) {
        var t = "", n = 0;
        return $.each(e, function (e, t) {
            urlParameters[e] = t
        }), console.log(urlParameters), $.each(urlParameters, function (e, a) {
            0 == n && (t += "?"), 0 != n && (t += "&"), t += e + "=" + a, n++
        }), location.pathname + t
    }
    return location.pathname
}

function removeToURL(e) {
    delete urlParameters[e]
}

function addToURL(e, t) {
    return urlParameters[e] = t, parseURL(urlParameters)
}

function ParsedUrl(e) {
    var t = document.createElement("a");
    if (t.href = e, t.href = t.href, "" === t.host) {
        var n = window.location.protocol + "//" + window.location.host;
        if ("/" === e.charAt(1)) t.href = n + e; else {
            var a = ("/" + t.pathname).match(/.*\//)[0];
            t.href = n + a + e
        }
    }
    for (var i = ["host", "hostname", "hash", "href", "port", "protocol", "search"], o = 0, r = i.length; o < r; o++) this[i[o]] = t[i[o]];
    this.pathname = ("/" !== t.pathname.charAt(0) ? "/" : "") + t.pathname
}

function googleRedirect(e) {
    iframeURL = e, googleOpen()
}

function googleOpen() {
    $.colorbox({
        iframe: !0,
        width: 570,
        height: 400,
        fixed: !0,
        title: "????ng nh???p b???ng t??i kho???n Google+ !!!",
        escKey: !1,
        overlayClose: !1,
        href: iframeURL
    })
}

function is_supported_browser() {
    var e = navigator.userAgent.toLowerCase();
    if ($.browser.msie = /rv/.test(navigator.userAgent.toLowerCase()), $.browser.msie) if (e = e.substring(e.indexOf("rv:") + 3), version = parseFloat(e.substring(0, e.indexOf("."))), $.browser.mozilla && -1 != navigator.userAgent.toLowerCase().indexOf("firefox")) {
        if (version >= 3.6) return !0
    } else if (version >= 8) return !0;
    return $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase()), !!($.browser.chrome && (e = e.substring(e.indexOf("chrome/") + 7), version = parseFloat(e.substring(0, e.indexOf("."))), version >= 13)) || (!!($.browser.safari && (e = e.substring(e.indexOf("version/") + 8), version = parseFloat(e.substring(0, e.indexOf("."))), version >= 5)) || !!($.browser.mozilla && -1 != navigator.userAgent.toLowerCase().indexOf("firefox") && (e = e.substring(e.indexOf("firefox/") + 8), version = parseFloat(e.substring(0, e.indexOf("."))), version >= "3.6")))
}

function googleReload() {
    window.location.reload(!0)
}

function randomCards(e, t) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var n = t = t || "JA", a = 0; a < e - 2; a++) {
        var i = Math.floor(Math.random() * charSet.length);
        n += charSet.substring(i, i + 1)
    }
    return n
}

function codeCards(e) {
    for (var t = "", n = (e = e.replaceAll("-", "")).toUpperCase().split(""), a = 0; a < e.length; a++) a % 4 == 0 && a && (t += "-"), t += n[a];
    return t
}

function randomString(e, t) {
    t = t || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var n = "", a = 0; a < e; a++) {
        var i = Math.floor(Math.random() * t.length);
        n += t.substring(i, i + 1)
    }
    return n
}

function addFile(e) {
    e = void 0 === e ? "files" : e;
    var t = $("#" + e + " li:last").data("id");
    t++, $("#" + e).append('<li class="file_' + t + '" data-id="' + t + '"><span class="label col-sm-2">H??nh (<b>*</b>):</span><div class="col-md-7"><input maxlength="245" type="text" name="file[]" id="image_' + t + '" class="form-control" placeholder="Ch???n file !" onclick="BrowseServer(\'image_' + t + '\');" /></div><div class="col-md-3"><input type="button" name="browse" id="browse" class="btn btn-default brown" value="Browse..." onClick="BrowseServer(\'image_' + t + '\');" /><input type="button" name="add" id="add" class="btn btn-default" value="+" onClick="addFile();" /><input type="button" name="re" id="re" class="btn btn-default" value=" - " onClick="reFile(' + t + ",'" + e + "');\" /></div></li>")
}

function reFile(e, t) {
    t = void 0 === t ? "files" : t, $("#" + t + " li.file_" + e).remove()
}

function BrowseServer(e) {
    var t = new CKFinder, n = null;
    n = void 0 !== pageJson.finder_URL ? pageJson.finder_URL + pageJson.finderRoot : window.location.origin + "/public/js/" + pageJson.finderRoot, t.BasePath = n, t.SelectFunction = SetFileField, t.SelectFunctionData = e, t.SelectThumbnailFunction = ShowFileInfo, t.SelectThumbnailFunctionData = e, t.defaultLanguage = "vi", t.language = "vi", t.Popup()
}

function UserServer(e) {
    var t = new CKFinder;
    t.BasePath = window.location.origin + "/public/js/users", t.SelectFunction = SetFileField, t.SelectFunctionData = e, t.SelectThumbnailFunction = ShowFileInfo, t.SelectThumbnailFunctionData = e, t.defaultLanguage = "vi", t.language = "vi", t.Popup()
}

function AdminServer(e) {
    var t = new CKFinder;
    t.BasePath = window.location.origin + "/public/js/admins", t.SelectFunction = SetFileField, t.SelectFunctionData = e, t.SelectThumbnailFunction = ShowFileInfo, t.SelectThumbnailFunctionData = e, t.defaultLanguage = "vi", t.language = "vi", t.Popup()
}

function ShowFileInfo(e, t) {
    alert('The selected thumbnail URL is "' + e + '"');
    var n;
    document.getElementById(t.selectThumbnailFunctionData).value = e, alert('The selected thumbnail URL is: "' + t.thumbnailUrl + '"'), alert('The URL of full size image is: "' + t.fileUrl + '"'), alert('The size of selected file is: "' + t.fileSize + 'KB"'), alert('The selected file was last modifed on: "' + ((n = t.fileDate).substr(0, 4) + "-" + n.substr(4, 2) + "-" + n.substr(6, 2) + " " + n.substr(8, 2) + ":" + n.substr(10, 2)) + '"'), alert('The data passed to the function is: "' + t.selectThumbnailFunctionData + '"')
}

function ShowThumbnailsFunc(e, t) {
    var n = this.getSelectedFile().name;
    return document.getElementById("thumbnails").innerHTML += '<div class="thumb"><img src="' + e + '" id="IMG_Thumb" /><div class="caption"><a href="' + t.fileUrl + '" target="_blank">' + n + "</a> (" + t.fileSize + "KB)</div></div>", $("input#avatar").length && (alert(e), $("input#avatar").val(e)), document.getElementById("preview").style.display = "", !1
}

function SetFileField(e, t) {
    document.getElementById(t.selectActionData).value = e
}

function isVietnamese(e) {
    return "" == e.trim() || null != e.toLowerCase().match(/??|??|???|??|???|??|???|???|???|???|???|??|???|???|???|???|??|??|???|???|??|???|???|???|???|???|??|???|???|??|??|??|??|???|???|???|???|???|??|??|???|??|???|??|???|???|???|???|??|???|???|???|???|???|???|??|??|???|??|??|???|???|???/i)
}

function CharactorAutocomplete(e, t) {
    return (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.toLowerCase()).replace(/??|???|??/g, "0")).replace(/??|???|??/g, "1")).replace(/??|???|??/g, "2")).replace(/??|???|??/g, "3")).replace(/???|???|??|??/g, "4")).replace(/???|???|??|??/g, "5")).replace(/???|???|??|??/g, "6")).replace(/???|???|??/g, "7")).replace(/???|???|??/g, "8")).replace(/???|???|??/g, "9")).replace(/??|??|???|??|???|??|???|???|???|???|???|??|???|???|???|???|???|??|??|??|??|??|???|???|???|???|???|???|???|???|???|???|???|???|???|???|???|???|???|??|???|???|???|???|???|???|???|??|??|???|???|???|??|??|??|???|???|??/g, "a")).replace(/??|??|??|??|??|???|???/g, "b")).replace(/??|??|??|??|??/g, "c")).replace(/??|??|??|??|??|??|??|???|???|???|??|??|??|??|???|???|???/g, "d")).replace(/??|??|???|???|???|??|???|???|???|???|???|??|??|??|??|??|??|??|??|???|???|???|???|???|???|???|??|??|??|??|??|??|???|???|???|???|???|??|??/g, "e")).replace(/??|??|??|??|???/g, "f")).replace(/??|??|??|??|??|??|??|???|???|??/g, "g")).replace(/??|??|??|??|??|??|???|???|???/g, "h")).replace(/??|??|???|??|???|??|??|??|??|??|??|??|??|??|??|???|???|???|???|???|???|???|???|???|??|???|???|???|??|???|???|??|??|??|???|???|???|??????|??|???|???/g, "i")).replace(/??|??|??|???|??/g, "j")).replace(/??|??|??|??|??|??|??|???|???|???|??/g, "k")).replace(/??|??|??|??|??|??|??|??|???|???/g, "l")).replace(/??|??|??|???|???/g, "m")).replace(/??|??|??|??|??|??|??|??|??|???|???/g, "n")).replace(/??|??|???|??|???|??|???|???|???|???|???|??|???|???|???|???|???|??|??|??|??|??|???|???|???|???|???|???|???|??|??|??|??|??????|??|??|??|???|???/g, "o")).replace(/??|??|???|???|??/g, "p")).replace(/???/g, "q")).replace(/??|??|??|??|??|??|???/g, "r")).replace(/??|??|??|??|??|??|??|??|??|???|??|???/g, "s")).replace(/??|??|??|??|??|??|??|???|???|??|???|???/g, "t")).replace(/??|??|???|??|???|??|???|???|???|???|???|??|??|??|??|??|??|??|??|???|???|???|??|??|??|??|??|???|???/g, "u")).replace(/??|???|??/g, "v")).replace(/??|??|??|???|???/g, "w")).replace(/??|??/g, "x")).replace(/??|???|???|???|???|??|??|??|??|??|??|??|??|??|???/g, "y")).replace(/??|??|??|??|??|??|???|???/g, "z")).replace(/??|???|??/g, "aa")).replace(/??|??|??/g, "ae")).replace(/???/g, "ai")).replace(/@/g, "at")).replace(/??|???|???|??/g, "ch")).replace(/??|??/g, "dj")).replace(/??|???/g, "dz")).replace(/???/g, "ei")).replace(/??|???/g, "gh")).replace(/???/g, "ii")).replace(/??/g, "ij")).replace(/??|??|???/g, "kh")).replace(/??/g, "lj")).replace(/??/g, "nj")).replace(/??|??|??/g, "oe")).replace(/???/g, "oi")).replace(/???/g, "oii")).replace(/??/g, "ps")).replace(/??|???|??/g, "sh")).replace(/??/g, "shch")).replace(/??/g, "ss")).replace(/??/g, "sx")).replace(/??|??|??|??|??/g, "th")).replace(/??|???|???/g, "ts")).replace(/??/g, "ue")).replace(/???/g, "uu")).replace(/??/g, "ya")).replace(/??/g, "yu")).replace(/??|???|??/g, "zh")).replace(/??/g, "(c)")).replace(/??|??|???|??|???|??|???|???|???|???|???|??|???|???|???|???|???|??|??|??|??|??|???|???|???|???|???|???|???|???|???|???|???|???|???|???|???|???|???|???|???|??|???|??|??|??/g, "A")).replace(/??|??|???/g, "B")).replace(/??|??|??|??|??/g, "C")).replace(/??|??|??|??|??|??|???|???|??|??/g, "D")).replace(/??|??|???|???|???|??|???|???|???|???|???|??|??|??|??|??|??|??|??|???|???|???|???|???|???|??|???|??|??|??|??|??/g, "E")).replace(/??|??/g, "F")).replace(/??|??|??|??|??|??/g, "G")).replace(/??|??|??/g, "H")).replace(/??|??|???|??|???|??|??|??|??|??|??|??|??|??|???|???|???|???|???|???|???|???|???|???|??|??|??|??|??|??/g, "I")).replace(/??|??/g, "K")).replace(/??|??|??|??|??|??|??|???/g, "L")).replace(/??|??/g, "M")).replace(/??|??|??|??|??|??|??/g, "N")).replace(/??|??|???|??|???|??|???|???|???|???|???|??|???|???|???|???|???|??|??|??|??|??|??|???|???|???|???|???|???|???|??|??|??|??|??|??/g, "O")).replace(/??|??/g, "P")).replace(/??|??|??|??|??/g, "R")).replace(/??|??|??|??|??|??|??/g, "S")).replace(/??|??|??|??|??|??/g, "T")).replace(/??|??|???|??|???|??|???|???|???|???|???|??|??|??|??|??|??|??|??|??|??|??|??/g, "U")).replace(/??/g, "V")).replace(/??|??|??/g, "W")).replace(/??|??/g, "X")).replace(/??|???|???|???|???|??|???|???|???|??|??|??|??|??|??/g, "Y")).replace(/??|??|??|??|??/g, "Z")).replace(/??|??|??/g, "AE")).replace(/??/g, "CH")).replace(/??/g, "DJ")).replace(/??/g, "DZ")).replace(/??/g, "GX")).replace(/??/g, "HX")).replace(/??/g, "IJ")).replace(/??/g, "JX")).replace(/??/g, "KH")).replace(/??/g, "LJ")).replace(/??/g, "NJ")).replace(/??|??/g, "OE")).replace(/??/g, "PS")).replace(/??/g, "SH")).replace(/??/g, "SHCH")).replace(/???/g, "SS")).replace(/??/g, "TH")).replace(/??/g, "TS")).replace(/??/g, "UE")).replace(/??/g, "YA")).replace(/??/g, "YU")).replace(/??/g, "ZH")).replace(/\xC2\xA0|\xE2\x80\x80|\xE2\x80\x81|\xE2\x80\x82|\xE2\x80\x83|\xE2\x80\x84|\xE2\x80\x85|\xE2\x80\x86|\xE2\x80\x87|\xE2\x80\x88|\xE2\x80\x89|\xE2\x80\x8A|\xE2\x80\xAF|\xE2\x81\x9F|\xE3\x80\x80/g, " "), e = (e = (e = e.replace(/`|!|\||@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|\\|{|}|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|\$|_/g, "-")).replace(/-+-/g, "-")).replace(/^\-+|\-+$/g, ""), "LW" == t ? (e = e.replace(/-/g, " ").capitalize()).replace(/ /g, "-") : "UP" == t ? e.toUpperCase() : e
}

function Tooltip(e, t, n) {
    t = void 0 !== t ? t : "ul.product pre", e = void 0 !== e ? e : ".tooltip", n = void 0 !== n ? n : "pro", isIE6 || isIE7 || (void 0 !== t && (strTooltipProductOb = t), "undefined" != typeof strTooltipProductOb && (arrTooltipProductOb = strTooltipProductOb.split(","), arrTooltipProductOb = $.unique(arrTooltipProductOb), obj = "", $.each(arrTooltipProductOb, function (e, t) {
        "" != obj && (obj += ","), obj += $.trim(t)
    }), $(obj).each(function (t, a) {
        $(a).parent().find(e).pvgTooltip({
            bodyHandler: function () {
                return $(a).html()
            }, track: !0, showURL: !1, extraClass: n
        })
    })))
}

function Captcha() {
    $(".captcha").is(".active") ? ($(".captcha").removeClass("active"), $(".captcha").addClass("noactive")) : ($(".captcha").addClass("active"), $(".captcha").removeClass("noactive"));
    var e = Math.random().toString(36).substring(7);
    $(".captcha").html('<img src="' + pageJson.STATIC_URL + "captcha_" + e + '.png" onclick="Captcha()" height="22"/>'), $(".captcha").html('<img src="' + pageJson.STATIC_URL + "captcha_" + e + '.png" onclick="Captcha()" height="22"/>')
}

function resizeImages() {
    var e = $(".content .detail").width();
    $(".content .detail img").each(function () {
        var t = $(this).width(), n = $(this).height();
        t > e && $(this).width(e).height(t / e * n)
    })
}

function Color_Box() {
    $(".content_detail img").colorbox({
        inline: !1, fixed: !0, maxWidth: 950, maxHeight: 630, href: function () {
            return $(this).attr("src")
        }
    })
}

function wScrollTop() {
    $("#back-top").hide(), $(window).scroll(function () {
        $(this).scrollTop() > 500 ? $("#back-top").fadeIn() : $("#back-top").fadeOut()
    }), $("#back-top").click(function () {
        var e = $(window).scrollTop();
        return t = e > 3e3 ? e / 3 : 1e3, $("body,html").animate({scrollTop: 0}, t), !1
    })
}

function navMenu() {
    $(".header .nav .menu li").mouseout(function () {
        $(this).removeClass("hover"), $(".header .nav .menu").find(".ac").addClass("hover")
    }).mouseover(function () {
        $(".header .nav .menu li").removeClass("hover"), $(this).addClass("hover")
    })
}

function GetCharactersCount(e, t) {
    switch (t) {
        case"char":
            e = (e = (e = e.replace(/<(?:.|\s)*?>/g, "")).replace(/\&[\w\#]+;/g, "&")).replace(/[\s\n]/g, "");
            break;
        case"text":
            e = (e = (e = (e = e.replace(/<(?:.|\s)*?>/g, "")).replace(/\&[\w\#]+;/g, "&")).replace(/^\s+/g, "")).replace(/\s+$/g, "");
            break;
        case"cleantext":
            e = (e = (e = (e = (e = (e = e.replace(/<(?:.|\s)*?>/g, "")).replace(/\&nbsp\;/g, " ")).replace(/\&[\w\#]+;/g, "&")).replace(/\s+/g, " ")).replace(/^\s+/g, "")).replace(/\s+$/g, "")
    }
    return e.length
}

function setField(e, t) {
    document.getElementById(t.selectActionData).value = e, tinymce.activeEditor.windowManager.close()
}

function openKCFinder(e, t, n, a) {
    return "image" == n && (n = "&Type=hinh-anh"), "media" == n && (n = "&Type=videos"), "mp3" == n && (n = "&Type=mp3"), "file" == n && (n = "&Type=files"), "links" == n && (n = "&Type[]=full"), tinymce.activeEditor.windowManager.open({
        file: "/js/ckfinder/ckfinder.html?action=js&func=setField&data=" + e + "&thumbFunc=setField&tdata=" + e + n,
        title: "CFinder",
        width: 900,
        height: 500,
        inline: !0,
        close_previous: !0
    }, {window: a, input: e}), !1
}

function addCart(e) {
    $.ajax({
        url: pageJson.CART_URL + "/cartStatus",
        type: "POST",
        data: {id: e, status: "add"},
        dataType: "json"
    }).fail(function () {
        showWarning("Kh??ng k???t n???i ???????c server !")
    }).done(function (e) {
        "SUCCESS" == e.status ? ($(".cartQuanity").html(e.cart.totalItems), noti_.showDialog("Th??ng b??o !!!", "B???n mu???n di chuy???n ?????n gi??? h??ng?", {
            submit: {
                text: "?????ng ??",
                action: function () {
                    window.location.href = "/cart"
                }
            }, cancel: {
                text: "????ng", action: function () {
                    page.closeDialog()
                }
            }
        })) : showWarning(e.text)
    })
}

function btnSelect() {
    $(".selectBtn").each(function () {
        var e = $(this).data("value"), t = $(this).data("name"), n = $(this).data("id"), a = "",
            i = $(this).find(".dropdown-menu li").data("text"), o = $(this);
        $("#" + n).length || $(this).append('<input type="hidden" id="' + n + '" name="' + t + '" value="' + e + '">'), o.find(".dropdown-menu li").each(function (e, t) {
            var n = $(this).attr("selected", !0);
            void 0 !== n && !1 !== n && (0 != e && "" != a ? (a += ",", a += $(this).data("value")) : (a += $(this).data("value"), i = $(this).data("text")))
        }), "" != a ? ($("#" + n).val(a), $(this).find("button:first").text(i)) : $(this).find("button:first").text($(this).find(".dropdown-menu li").data("text"))
    }), $(".selectBtn .dropdown-menu li:not(.divider)").click(function (e) {
        $(".selectBtn .dropdown-menu li").removeAttr("selected"), $(this).attr("selected", !0);
        var t = $(this).data("value"), n = $(this).data("name"), a = $(this).parents(".selectBtn").data("id"),
            i = $(this).data("text");
        $(this).parents(".selectBtn").find("button:first").text(i), $("#" + a).length ? $("#" + a).val(t) : $(this).parents(".selectBtn").append('<input type="hidden" id="' + a + '" name="' + n + '" value="' + t + '">')
    })
}

function mergeId(e) {
    var t = "";
    return console.log("listId:" + e), $.each(e, function (e, n) {
        t += e ? "," + n : n, console.log("i:" + n)
    }), t
}

function multiSelect() {
    $(".multiSelect").each(function () {
        var e = $(this).data("value"), t = $(this).data("name"), n = $(this).data("id"), a = "";
        $("#" + n).length || $(this).append('<input type="hidden" id="' + n + '" name="' + t + '" value="' + e + '">'), $(this).find(".dropdown-menu.multiSelect li").each(function (e, t) {
            var n = $(this).attr("selected", !0);
            void 0 !== n && !1 !== n && (0 != e && "" != a ? (a += ",", a += $(this).data("value")) : (a += $(this).data("value"), $(this).data("text")))
        }), "" != a ? $("#" + n).val(a) : $("#" + n).val("")
    });
    var e = {
        length: 0, addElem: function (e) {
            console.log("elem:" + e), e.length && [].push.call(this, e)
        }
    };
    $(".multiSelect li:not(.divider)").click(function (t) {
        var n = $(this).parents(".multiSelect").data("name"), a = $(this).parents(".multiSelect").data("id");
        if (t.ctrlKey) {
            var i = $(this).data("value");
            e.addElem($(this).data("value"))
        } else $(".multiSelect li").removeAttr("selected"), e.addElem($(this).data("value"));
        var o = $(this).attr("selected");
        void 0 !== o && !1 !== o ? ($(this).removeAttr("selected"), delete e[i]) : $(this).attr("selected", !0), $("#" + a).length ? $("#" + a).val(mergeId(e)) : $(this).parents(".multiSelect").append('<input type="hidden" id="' + a + '" name="' + n + '" value="' + mergeId(e) + '">')
    })
}

function formatFileSize(e) {
    var t = data.replace(/[\d\.]/g, "").toLowerCase(), n = 1;
    return "kb" === t ? n = 1e3 : "mb" === t ? n = 1e6 : "gb" === t && (n = 1e9), parseFloat(data) * n
}

function Notifications() {
    this.actionDialog;
    var e = this;
    this.showDialog = function (t, n, a) {
        if (null != n) {
            var i = $("#dialog");
            if (0 == i.length) {
                $("body").append($("<div>", {id: "dialog"}));
                (i = $("#dialog")).html('<div><div class="header"></div><div class="content"></div><div class="action"><button class="btnSubmit">?????ng ??</button><button class="btnCancel">????ng</button></div></div>')
            }
            var o = i.find(".action button.btnSubmit"), r = i.find(".action button.btnCancel");
            i.find(".header").html(t || "Th??ng b??o"), i.find(".content").html(n), r.text("????ng"), null != a && (null != a.submit ? (o.html(a.submit.text || "?????ng ??"), o.on("click", function () {
                a.submit.action()
            }).show()) : o.hide(), null != a.cancel && null != a.cancel.text && r.html(a.cancel.text)), r.on("click", function () {
                a && a.cancel && a.cancel.action && a.cancel.action(), e.closeDialog(a.close)
            }), r.show(), i.find("> div").css({"margin-top": "-" + Math.round($("#dialog > div").height() / 2) + "px"}), i.show();
            var s = i.find("> div").height(), l = $(window).height();
            $("#dialog > div").css("top", (l - s) / 2 + "px")
        }
    }, this.closeDialog = function (t) {
        var n = $("#dialog");
        n.hide(), n.find(".header").empty(), n.find(".content").empty(), n.find(".action button").unbind("click").hide(), t && "function" == typeof t && t(), e.actionDialog && "function" == typeof e.actionDialog && e.actionDialog()
    }, this.cancelDialog = function (t) {
        e.closeDialog(t)
    }, this.hideSubmit = function () {
        $("#dialog").find(".action button.btnSubmit").unbind("click").hide()
    }, this.showNotices = function (t, n) {
        var a = "";
        t && (is_array(t) || is_object(t)) ? $.each(t, function (e, t) {
            a += '<div class="alert alert-info"><a href="javascript:void(0)" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + t + "</div>"
        }) : a = t, e.showDialog("Th??ng b??o !!!", '<div class="notices">' + a + "</div>", {close: n})
    }, this.showSuccess = function (t, n) {
        var a = "";
        t && (is_array(t) || is_object(t)) ? $.each(t, function (e, t) {
            a += '<div class="alert alert-success"><a href="javascript:void(0)" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + t + "</div>"
        }) : a = t, e.showDialog("Th??ng b??o !!!", '<div class="success">' + a + "</div>", {close: n})
    }, this.showWarning = function (t, n) {
        var a = "";
        t && (is_array(t) || is_object(t)) ? $.each(t, function (e, t) {
            a += '<div class="alert alert-warning"><a href="javascript:void(0)" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + t + "</div>"
        }) : a = t, e.showDialog("Th??ng b??o !!!", '<div class="warnings">' + a + "</div>", {close: n})
    }, this.showErrors = function (t, n) {
        var a = "";
        t && (is_array(t) || is_object(t)) ? $.each(t, function (e, t) {
            a += '<div class="alert alert-warning"><a href="javascript:void(0)" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + t + "</div>"
        }) : a = t, e.showDialog("Th??ng b??o !!!", '<div class="errors">' + a + "</div>", {close: n})
    }
}

function showEmailBox() {
    noti_.showDialog("Li??n l???c qua email", "<p>" + companyName + ' lu??n mong mu???n ???????c nh???n ph???n h???i t??? b???n ?????c! M???i ?? ki???n ho???c b??i v??? ????ng g??p, xin vui l??ng g???i v??? ?????a ch??? email:</p><div style="margin: 10px 0; text-align: center; border: 1px dashed #ccc;  padding: 10px 0; border-radius: 10px; font-size: 2em;"><a href="mailto:qccute@gmail.com">qccute@gmail.com</a></div><p style="font-size:0.9em;color:#888;">Ch?? ??: Ch??ng t??i s??? s???m h???i b??o ?? ki???n ????ng g??p c???a c??c b???n trong th???i gian s???m nh???t.</p>')
}

function showPhoneBox() {
    noti_.showDialog("???????ng d??y n??ng", "<p>N???u b???n c?? tin t???c th???i s??? n??ng c???n ph???n ??nh tr???c ti???p, vui l??ng li??n l???c qua s??? ??i???n tho???i n??ng sau:</p><div style=\"margin: 10px 0;  border: 1px dashed #ccc;  padding: 10px; border-radius: 5px; font-size: 1.6em; color: #0078D6;font-family: 'Roboto Condensed', sans-serif;\"> " + phone_support_contact + '</div><p style="font-size:0.9em;color:#888;">Ch?? ??: N???u kh??ng li??n l???c ???????c ho???c th??ng tin kh??ng g???p, b???n c??ng c?? th??? g???i th??ng tin qua ?????a ch??? email Tr?????ng THCS TNPB t???i <a href="mailto:qccute@gmail.com">qccute@gmail.com</a></p><p style="font-size:0.9em;color:#888;margin-top: 5px;padding-top: 5px;border-top: 1px solid #eee;"><strong>Th??ng tin qu???ng c??o:</strong> n???u b???n c???n li??n h??? v??? c??c v???n ????? li??n quan ?????n qu???ng c??o tr??n trang, <a href="javascript:showBoxAds();">nh???n v??o ????y</a></p>')
}

function showBoxAds() {
    noti_.showDialog("Li??n h??? qu???ng c??o", "<p>" + companyName + ' cung c???p nhi???u h??nh th???c cho ph??p doanh nghi???p ti???p c???n ?????n b???n ?????c m???t c??ch hi???u qu??? nh???t. ????? t??m hi???u, vui l??ng li??n h??? theo 1 trong c??c c??ch sau:</p><div style="border-top:1px solid #eee; padding-top:10px"><h3>Tp. H??? Ch?? Minh</h3><p>Phone : ' + phone_contact + '<br />Email: <a href="mailto:' + email_contact + '">' + email_contact + "</p></div>")
}

function objText(e, t) {
    if (is_object(e) || is_array(e)) {
        var n = "";
        t = void 0 === t ? "" : t;
        return $.each(e, function (e, a) {
            n = n + '<p clas="' + t + '">' + a + "</p>"
        }), n
    }
    return e
}

function showPopup(e, t) {
    noti_.showDialog("Th??ng b??o !!!", e, {close: t})
}

function showSuccess(e, t) {
    noti_.showSuccess(e, {close: t})
}

function showConfirm(e, t) {
    noti_.showDialog("Th??ng b??o !!!", e, {
        submit: {
            text: "?????ng ??", action: function () {
                t.success
            }
        }, cancel: {
            text: "????ng", action: function () {
                t.error
            }
        }
    })
}

function showWarning(e, t) {
    noti_.showErrors(e, {close: t})
}

function gFileSize(e, t, n) {
    n = void 0 === n ? "File" : n;
    try {
        var a = "", i = 0;
        if (jQuery.browser.msie) {
            var o = new ActiveXObject("Scripting.FileSystemObject"), r = jQuery("#" + e)[0].value;
            i = o.getFile(r).size;
            i /= 1048576
        } else i = jQuery("#" + e)[0].files[0].size, i /= 1048576;
        return i >= 1 ? i / 1024 > 1 ? (Math.round(i) / 1024, "Gb") : (Math.round(i), "Mb") : (Math.round(1024 * i), "Kb"), i > t && (a = '<p class="alert alert-warning">' + n + " v?????t qu?? dung l?????ng cho ph??p : " + Math.round(i) + "/" + t + " MB !</p>"), a
    } catch (t) {
        return a = "" != jQuery("#" + e)[0].value ? '<p class="alert alert-warning">L???i ?????nh d???ng ' + n + " :" + t + " !</p>" : '<p class="alert alert-warning">M???i b???n ch???n ' + n + " !</p>"
    }
}

getURL(), function (e, t) {
    var n, a, i, o, r;
    if (window.JSON && "function" == typeof JSON.stringify) return t.stringify = JSON.stringify;
    i = Object.prototype.toString, o = /string|number|boolean|null/, r = "[object Object]", n = function (e) {
        return function (n, s) {
            var l = t.type(s), c = "";
            if ("number" != typeof n && (c = '"' + n + '":'), "string" === l) c += '"' + s + '"'; else if (o.test(l)) c += s; else if ("array" === l) c += a(s, !0); else {
                if (i.call(s) !== r) return;
                c += a(s)
            }
            e.push(c)
        }
    }, a = function (e, a) {
        var i = [], o = ["{", "}"];
        return a && (o = ["[", "]"]), t.each(e, n(i)), o[0] + i.join(",") + o[1]
    }, t.stringify = function () {
        if (!arguments.length) return "";
        var e = arguments[0];
        return o.test(t.type(e)) ? null === e ? "null" : e.toString() : a(e, e instanceof Array)
    }
}(window, jQuery), function (e, t) {
    if ("function" == typeof define && define.amd) define(["exports", "jquery"], function (e, n) {
        return t(e, n)
    }); else if ("undefined" != typeof exports) {
        var n = require("jquery");
        t(exports, n)
    } else t(e, e.jQuery || e.Zepto || e.ender || e.$)
}(this, function (e, t) {
    function n(e, n) {
        function i(e, t, n) {
            return e[t] = n, e
        }

        function o() {
            return r
        }

        var r = {}, s = {};
        this.addPair = function (o) {
            if (!a.validate.test(o.name)) return this;
            var l = function (e, t) {
                for (var n, o = e.match(a.key); void 0 !== (n = o.pop());) a.push.test(n) ? t = i([], (r = e.replace(/\[\]$/, ""), void 0 === s[r] && (s[r] = 0), s[r]++), t) : a.fixed.test(n) ? t = i([], n, t) : a.named.test(n) && (t = i({}, n, t));
                var r;
                return t
            }(o.name, function (e) {
                switch (t('[name="' + e.name + '"]', n).attr("type")) {
                    case"checkbox":
                        return "on" === e.value || e.value;
                    default:
                        return e.value
                }
            }(o));
            return r = e.extend(!0, r, l), this
        }, this.addPairs = function (t) {
            if (!e.isArray(t)) throw new Error("formSerializer.addPairs expects an Array");
            for (var n = 0, a = t.length; a > n; n++) this.addPair(t[n]);
            return this
        }, this.serialize = o, this.serializeJSON = function () {
            return JSON.stringify(o())
        }
    }

    var a = {
        validate: /^[a-z_][a-z0-9_]*(?:\[(?:\d*|[a-z0-9_]+)\])*$/i,
        key: /[a-z0-9_]+|(?=\[\])/gi,
        push: /^$/,
        fixed: /^\d+$/,
        named: /^[a-z0-9_]+$/i
    };
    return n.patterns = a, n.serializeObject = function () {
        return new n(t, this).addPairs(this.serializeArray()).serialize()
    }, n.serializeJSON = function () {
        return new n(t, this).addPairs(this.serializeArray()).serializeJSON()
    }, void 0 !== t.fn && (t.fn.serializeObject = n.serializeObject, t.fn.serializeJSON = n.serializeJSON), e.FormSerializer = n, n
}), String.prototype.replaceAll = function (e, t) {
    return this.split(e).join(t)
}, String.prototype.cnVert = function (e) {
    var t = this;
    return void 0 === e && (e = {}), $.each(e, function (e, n) {
        n = '<img class="icon" src="' + n + '" title="' + e + '" />', t = t.replaceAll(e, n)
    }), t
}, String.prototype.capitalize = function (e) {
    return (e ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function (e) {
        return e.toUpperCase()
    })
}, $.fn.dataTable && ($.extend($.fn.dataTable.ext.type.order, {
    "file-size-asc": function (e, t) {
        return (e = formatFileSize(e)) < (t = formatFileSize(t)) ? -1 : e > t ? 1 : 0
    }, "file-size-desc": function (e, t) {
        return (e = formatFileSize(e)) < (t = formatFileSize(t)) ? 1 : e > t ? -1 : 0
    }
}), $.fn.dataTable.ext.order["dom-select"] = function (e, t) {
    return this.api().column(t, {order: "index"}).nodes().map(function (e, t) {
        return $("select option:selected", e).val()
    })
}, $.fn.dataTable.ext.order["dom-checkbox"] = function (e, t) {
    return this.api().column(t, {order: "index"}).nodes().map(function (e, t) {
        return $("input", e).prop("checked") ? "1" : "0"
    })
}, $.fn.dataTable.ext.order["dom-itext"] = function (e, t) {
    return this.api().column(t, {order: "index"}).nodes().map(function (e, t) {
        return $("input", e).val()
    })
}, $.fn.dataTable.ext.order["dom-text"] = function (e, t) {
    return this.api().column(t, {order: "index"}).nodes().map(function (e, t) {
        return $(e).data("text")
    })
}, $.fn.dataTable.ext.order["dom-number"] = function (e, t) {
    return this.api().column(t, {order: "index"}).nodes().map(function (e, t) {
        return $(".numeric", e).data("numeric")
    })
}, $.fn.dataTable.ext.order["dom-status"] = function (e, t) {
    return this.api().column(t, {order: "index"}).nodes().map(function (e, t) {
        return $(e).data("status")
    })
}, $.fn.dataTable.ext.order["dom-date"] = function (e, t) {
    return this.api().column(t, {order: "index"}).nodes().map(function (e, t) {
        return $(e).data("date")
    })
}), $(document).ready(function () {
    btnSelect(), multiSelect(), wScrollTop(), userOnline();
    setTimeout(function () {
        void 0 != pageJson.fixHeight && 1 == pageJson.fixHeight && $.each($(".fixHeight"), function () {
            var e = $(this).find(".setH:first-child").height(), t = $(this).find(".setH").height();
            t > e && (e = t), $(this).find(".setH").height(e)
        })
    }, 500)
}), noti_ = new Notifications;
var errorImg = "";

function gFileWidth(e, t, n, a) {
    var i = window.URL || window.webkitURL;
    $("#" + e).change(function () {
        errorImg = "";
        var e, o;
        (e = this.files[0]) && ((o = new Image).onload = function () {
            this.width > t && (errorImg += a + " b???n ch???n chi???u d??i l???n h??n " + this.width + "/" + t + "px !"), this.height > n && (errorImg += a + " b???n ch???n chi???u r???ng l???n h??n " + this.height + "/" + n + "px !"), errorImg = '<p class="alert alert-warning">' + errorImg + "</p>"
        }, o.onerror = function () {
            noti_.showErrors("Kh??ng ph???i l?? t???p tin h???p l??? : " + e.type)
        }, o.src = i.createObjectURL(e))
    })
}

function setIMG(e, t, n, a) {
    return errorImg = "", img = new Image, img.onerror = function () {
        noti_.showErrors("Kh??ng ph???i l?? t???p tin h???p l??? ")
    }, img.src = $("#" + e).attr("src"), img.complete && (img.width > t && (errorImg += '<p class="alert alert-warning">' + a + " b???n ch???n chi???u d??i l???n h??n " + img.width + "/" + t + " px !</p>"), img.height > n && (errorImg += '<p class="alert alert-warning">' + a + " b???n ch???n chi???u r???ng l???n h??n " + img.height + "/" + n + " px !</p>")), errorImg
}

var type_required_info = '<p class="alert alert-warning">B???n c???n nh???p ????ng nh???ng y??u c???u <b>(*)<b> :</p>',
    type_error = "M???i b???n ", type_error_no = "B???n ch??a ";

function trim(e) {
    return e.replace(/^\s+|\s+$/, "")
}

function Empty(e) {
    var t = "";
    return $(e).val() == $(e).data("error") ? ($(e).css("background-color", "yellow"), t = type_error + $(e).data("error")) : 0 == $(e).val().length ? ($(e).css("background-color", "yellow"), t = type_error_no + $(e).data("error")) : $(e).css("background-color", "white"), t && (t = '<p class="alert alert-warning">' + t + "</p>"), t
}

function Selected(e) {
    var t = "";
    return "#" == $(e).val() || "" == $(e).val() ? ($(e).css("background-color", "yellow"), t = type_error_no + $(e).data("error")) : $(e).css("background-color", "white"), t && (t = '<p class="alert alert-warning">' + t + "</p>"), t
}

function btnSelected(e) {
    var t = "";
    return "#" == $(e).val() || "" == $(e).val() ? ($(e).prev(".btn-group").css("background-color", "yellow"), t = type_error_no + $(e).data("error")) : $(e).prev(".btn-group").css("background-color", "white"), t && (t = '<p class="alert alert-warning">' + t + "</p>"), t
}

function Checked(e, t) {
    var n = "";
    return $(e).is(":checked") || (n = t), n && (n = '<p class="alert alert-warning">' + n + "</p>"), n
}

function oldPass(e, t) {
    var n = "";
    return $(e).val().length < 6 ? ($(e).css("background-color", "yellow"), n = $(e).data("error")) : MD5(MD5($(e).val())) != t.value ? ($(e).css("background-color", "yellow"), n = "M???t kh???u c?? ch??a ch??nh x??c ! ") : $(e).css("background-color", "white"), n && (n = '<p class="alert alert-warning">' + n + "</p>"), n
}

function Pass(e) {
    var t = "";
    return $(e).val().length < 6 ? ($(e).css("background-color", "yellow"), t = $(e).data("error")) : $(e).css("background-color", "white"), t && (t = '<p class="alert alert-warning">' + t + "</p>"), t
}

function rePass(e, t) {
    var n = "";
    return $(e).val().length < 6 ? ($(e).css("background-color", "yellow"), n = $(e).data("error")) : $(e).val() != t.value ? ($(e).css("background-color", "yellow"), n = "M???t kh???u nh???p l???i ch??a ch??nh x??c !") : $(e).css("background-color", "white"), n && (n = '<p class="alert alert-warning">' + n + "</p>"), n
}

function Email(e) {
    var t = "", n = trim($(e).val());
    return "B???n c???n nh???p ????ng email !" == $(e).val() ? ($(e).css("background-color", "yellow"), t = "B???n ch??a nh???p ?????a ch??? email !") : /^[^@]+@[^@.]+\.[^@]*\w\w$/.test(n) ? $(e).val().match(/[\(\)\<\>\,\;\:\\\"\[\]]/) ? ($(e).css("background-color", "yellow"), t = "?????a ch??? email ch???a k?? t??? kh??ng h???p l??? !") : $(e).css("background-color", "white") : ($(e).css("background-color", "yellow"), t = "Vui l??ng nh???p ?????a ch??? email h???p l??? !"), t && (t = '<p class="alert alert-warning">' + t + "</p>"), t
}

function Username(e) {
    var t = "", n = trim($(e).val());
    return $(e).val() == $(e).data("error") || $(e).val().length <= 6 ? ($(e).css("background-color", "yellow"), t = "B???n ch??a nh???p Username !") : /^[a-zA-Z0-9_\.]+$/.test(n) ? $(e).val().match(/[\(\)\<\>\,\;\:\\\"\[\]\@\!\#\%\$\&\*\'\~\`]/) ? ($(e).css("background-color", "yellow"), t = "Username ch???a k?? t??? kh??ng h???p l??? !") : $(e).css("background-color", "white") : ($(e).css("background-color", "yellow"), t = "Vui l??ng nh???p Username h???p l??? !"), t && (t = '<p class="alert alert-warning">' + t + "</p>"), t
}

function Register(e) {
    var t = "";
    return t += Empty(e.name), t += Empty(e.fullname), t += Username(e.username), t += Empty(e.password), t += Empty(e.birthday), t += Empty(e.facebook), t += Empty(e.address), t += Empty(e.phone), t += Empty(e.ck_email), t += Empty(e.ck_user), t += Empty(e.cmnd), t += Email(e.email), "" == (t += Checked("sex", "M???i b???n ch???n gi???i t??nh !")) || (noti_.showErrors(t), !1)
}

function Login(e) {
    var t = "";
    return t += Empty(e.user), "" == (t += Empty(e.pass)) || (noti_.showErrors(type_required_info + t), !1)
}

function Login2(e) {
    var t = "";
    return t += Empty(e.user2), "" == (t += Empty(e.pass2)) || (noti_.showErrors(type_required_info + t), !1)
}

function Poll(e) {
    var t = "";
    return "" == (t += Checked("cpoll", "M???i b???n ch???n ?? ki???n !")) || (noti_.showErrors(type_required_info + t), !1)
}

function Search(e) {
    var t = "";
    return "" == (t += Empty(e.keyword)) || (noti_.showErrors(type_required_info + t), !1)
}

function ToMail(e) {
    var t = "";
    return "" == (t += Email(e.email)) || (noti_.showErrors(type_required_info + t), !1)
}

var login = !0, winOpen;

function ForGot(e) {
    var t = "";
    return t += Empty(e.email), "" == (t += Empty(e.code)) || (noti_.showErrors(type_required_info + t), !1)
}

function Log(e) {
    var t = "";
    return t += Empty(e.email), "" == (t += Empty(e.password)) || (noti_.showErrors(type_required_info + t), !1)
}

function delRecord() {
    return DEL_URL = "undefined" != typeof DEL_URL ? DEL_URL : null, !!DEL_URL && ($("a.del").on("click", function (e) {
        var t = $(this).data("id"), n = $(this).attr("title");
        noti_.showDialog("Th??ng b??o !!!", "<p>B???n mu???n x??a " + n + " ?</p>", {
            submit: {
                text: "  Ch???n  ",
                action: function () {
                    $.ajax({url: DEL_URL, type: "POST", data: {id: t}, dataType: "json"}).fail(function () {
                        showWarning(alertJson.disConnect)
                    }).done(function (e) {
                        "SUCCESS" == e.status ? noti_.showSuccess(e.text, function () {
                            window.location.href = showStatus
                        }) : showWarning(e.text)
                    })
                }
            }
        }), e.preventDefault()
    }), !1)
}

function setStatus() {
    if (statusURL = "undefined" != typeof statusURL ? statusURL : null, !statusURL) return !1;
    $(".setStatus").unbind("click").on("click", function (e) {
        var t = $(this).data("id"), n = $(this).data("status");
        noti_.showDialog("Th??ng b??o !!!", '<p class="alert alert-success">B???n mu???n thay ?????i tr???ng th??i ?</p>', {
            submit: {
                text: "  Ch???n  ",
                action: function () {
                    $.ajax({
                        url: statusURL,
                        type: "POST",
                        data: {id: t, status: n},
                        dataType: "json"
                    }).fail(function () {
                        showWarning(alertJson.disConnect)
                    }).done(function (e) {
                        if ("SUCCESS" == e.status) noti_.showSuccess(e.text, function () {
                            window.location.reload(!0)
                        }); else {
                            var t = e.errors;
                            t && t.size() ? showWarning(e.errors) : showWarning(e.text)
                        }
                    })
                }
            }
        })
    })
}

function google_login(e) {
    var t = (screen.height - 400) / 2, n = (screen.width - 570) / 2;
    return winOpen = window.open(pageJson.CUR_URL + "account/social/GoogleUrl?returnUrl=" + e, "google_account", "status=0,toolbar=0,width=570,height=400,top=" + t + ",left=" + n), docPopup(), !1
}

function yahoo_login(e) {
    var t = (screen.height - 500) / 2, n = (screen.width - 570) / 2;
    return winOpen = window.open(pageJson.CUR_URL + "account/social/YahooLogin?returnUrl=" + e, "yahoo_account", "status=0,toolbar=0,width=570,height=500,top=" + t + ",left=" + n), !1
}

function docPopup() {
    if (0 != winOpen.location.pathname.indexOf("GoogleLogin") || 0 != winOpen.location.pathname.indexOf("GoogleUrl")) {
        if ("" != winOpen.location.hostname && (winOpen.close(), window.location.reload(!0)), 0 != (e = $(winOpen.document.html).text()).length) return "SUCCESS" == (t = $.parseJSON(e)).status ? (showSuccess(t.text), !0) : (t.errors ? text = t.errors : text = t.text, showWarning(text), winOpen.close(), window.location.reload(!0), !1)
    } else if ("FacebookLogin" == winOpen.location.pathname) {
        if (0 != (e = $(winOpen.document.body).text()).length) return "SUCCESS" == (t = $.parseJSON(e)).status ? (showSuccess(t.text), !0) : (t.errors ? text = t.errors : text = t.text, showWarning(text), !1)
    } else if ("FacebookActive" == winOpen.location.pathname) {
        var e, t;
        if (0 != (e = $(winOpen.document.body).text()).length) return "SUCCESS" == (t = $.parseJSON(e)).status ? (showSuccess(t.text), !0) : (t.errors ? text = t.errors : text = t.text, showWarning(text), !1)
    }
    setTimeout("docPopup()", 200)
}

function facebook_login(e) {
    return FB.login(function (t) {
        t.authResponse ? FacebookConnectMySite(t.authResponse, e) : FB.logout(function () {
            alert("B???n c???n cung c??c th??ng tin c?? b???n ????? c?? th??? ????ng nh???p!")
        })
    }, {scope: "email,public_profile"}), !1
}

function FacebookConnectMySite(e, t) {
    top.location.href = pageJson.ID_URL + "account/social/FacebookToken?&uid=" + e.userID + "&fb_token=" + e.accessToken + "&returnUrl=" + t
}

function Logout() {
    FB.getLoginStatus(handleSessionResponse)
}

function handleSessionResponse(e) {
    e.session && FB.logout()
}

function ckEditer(e) {
    if (e = $.extend({
        type: 3,
        domain: pageJson.SDOMAIN,
        finderURL: null,
        finderRoot: "user",
        classEditer: ".jquery_ckeditor",
        maximumLength: 5e4,
        height: "300px",
        width: "100%"
    }, e || {}), void 0 !== pageJson.finderRoot && (e.finderRoot = pageJson.finderRoot), e.finderURL = window.location.origin + "/public/js/" + e.finderRoot, 1 == e.type) var t = {
        entities_greek: !1,
        entities_latin: !1,
        language: "vi",
        height: e.height,
        width: e.width,
        toolbar: [["Source"], ["Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-", "Undo", "Redo"], ["Bold", "Italic", "Underline"], ["JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock"], ["Font", "FontSize"], ["TextColor", "BGColor"], ["NumberedList", "BulletedList", "-", "Outdent", "Indent", "Blockquote", "CreateDiv"], ["Link", "Unlink"]]
    }; else if (2 == e.type) t = {
        baseHref: e.domain,
        entities_greek: !1,
        entities_latin: !1,
        entities: !0,
        ForceSimpleAmpersand: !0,
        language: "vi",
        filebrowserBrowseUrl: e.finderURL + "/ckfinder.html",
        filebrowserFlashBrowseUrl: e.finderURL + "/ckfinder.html?type=flash",
        filebrowserImageBrowseUrl: e.finderURL + "/ckfinder.html?type[]=hinh-anh,images",
        filebrowserImageUploadUrl: e.finderURL + "/core/connector/php/connector.php?command=QuickUpload&type=images",
        filebrowserFlashUploadUrl: e.finderURL + "/core/connector/php/connector.php?command=QuickUpload&type=flash",
        height: e.height,
        width: e.width,
        codeSnippet_theme: "foundation",
        toolbar: [{
            name: "document",
            items: ["DocProps", "Source", "Preview", "Print", "-", "Templates"]
        }, {
            name: "clipboard",
            items: ["Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-", "Undo", "Redo"]
        }, {name: "code", items: ["codeSnippet", "video", "Youtube"]}, {
            name: "insert",
            items: ["Image", "Table", "HorizontalRule", "Smiley", "SpecialChar", "PageBreak", "Iframe"]
        }, {name: "styles", items: ["Styles", "Format", "Font", "FontSize"]}, {
            name: "basicstyles",
            items: ["Bold", "Italic", "Underline", "Strike", "Subscript", "Superscript", "-", "RemoveFormat"]
        }, {
            name: "editing",
            items: ["Find", "Replace", "-", "SelectAll", "-", "SpellChecker", "Scayt"]
        }, {name: "links", items: ["Link", "Unlink", "Anchor"]}, {
            name: "colors",
            items: ["TextColor", "BGColor"]
        }, {
            name: "forms",
            items: ["Form", "Checkbox", "Radio", "TextField", "Textarea", "Select", "Button", "ImageButton", "HiddenField"]
        }, {
            name: "paragraph",
            items: ["NumberedList", "BulletedList", "-", "Outdent", "Indent", "-", "Blockquote", "CreateDiv", "-", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock", "-", "BidiLtr", "BidiRtl"]
        }, {name: "tools", items: ["Maximize", "ShowBlocks"]}]
    }; else if (3 == e.type) t = {
        language: "vi",
        baseHref: e.domain,
        entities_greek: !1,
        entities_latin: !1,
        filebrowserBrowseUrl: e.finderURL + "/ckfinder.html",
        filebrowserFlashBrowseUrl: e.finderURL + "/ckfinder.html?type=flash",
        filebrowserImageBrowseUrl: e.finderURL + "/ckfinder.html?type[]=hinh-anh,images",
        filebrowserImageUploadUrl: e.finderURL + "/core/connector/php/connector.php?command=QuickUpload&type=images",
        filebrowserFlashUploadUrl: e.finderURL + "/core/connector/php/connector.php?command=QuickUpload&type=flash",
        filebrowserImageWindowWidth: "900",
        filebrowserImageWindowHeight: "500",
        height: e.height,
        width: e.width,
        codeSnippet_theme: "foundation",
        toolbar: [{
            name: "clipboard",
            items: ["Source", "Preview", "Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-", "Undo", "Redo"]
        }, {name: "code", items: ["codeSnippet", "addFiles", "video", "Youtube"]}, {
            name: "insert",
            items: ["Image", "Table", "HorizontalRule", "Smiley", "SpecialChar", "PageBreak", "Iframe"]
        }, {name: "styles", items: ["Styles", "Format", "Font", "FontSize"]}, {
            name: "basicstyles",
            items: ["Bold", "Italic", "Underline"]
        }, {name: "links", items: ["Link", "Unlink", "Anchor"]}, {
            name: "colors",
            items: ["TextColor", "BGColor"]
        }, {
            name: "forms",
            items: ["Form", "Checkbox", "Radio", "TextField", "Textarea", "Select", "Button", "ImageButton", "HiddenField"]
        }, {
            name: "paragraph",
            items: ["NumberedList", "BulletedList", "-", "Outdent", "Indent", "-", "Blockquote", "CreateDiv", "-", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock", "-", "BidiLtr", "BidiRtl"]
        }, {name: "tools", items: ["Maximize", "ShowBlocks"]}]
    }; else if (4 == e.type) t = {
        language: "vi",
        baseHref: e.domain,
        entities_greek: !1,
        entities_latin: !1,
        filebrowserBrowseUrl: e.finderURL + "/ckfinder.html",
        filebrowserFlashBrowseUrl: e.finderURL + "/ckfinder.html?type=flash",
        filebrowserImageBrowseUrl: e.finderURL + "/ckfinder.html?type[]=hinh-anh,images",
        filebrowserImageUploadUrl: e.finderURL + "/core/connector/php/connector.php?command=QuickUpload&type=images",
        filebrowserFlashUploadUrl: e.finderURL + "/core/connector/php/connector.php?command=QuickUpload&type=flash",
        filebrowserImageWindowWidth: "900",
        filebrowserImageWindowHeight: "500",
        height: e.height,
        width: e.width,
        codeSnippet_theme: "foundation",
        toolbar: [{
            name: "clipboard",
            items: ["Source", "Preview", "Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-", "Undo", "Redo"]
        }, {name: "code", items: ["codeSnippet", "video", "Youtube"]}, {
            name: "insert",
            items: ["Image", "Table", "HorizontalRule", "Smiley", "SpecialChar", "PageBreak", "Iframe"]
        }, {name: "styles", items: ["Styles", "Format", "Font", "FontSize"]}, {
            name: "basicstyles",
            items: ["Bold", "Italic", "Underline"]
        }, {name: "links", items: ["Link", "Unlink", "Anchor"]}, {
            name: "colors",
            items: ["TextColor", "BGColor"]
        }, {
            name: "forms",
            items: ["Form", "Checkbox", "Radio", "TextField", "Textarea", "Select", "Button", "ImageButton", "HiddenField"]
        }, {
            name: "paragraph",
            items: ["NumberedList", "BulletedList", "-", "Outdent", "Indent", "-", "Blockquote", "CreateDiv", "-", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock", "-", "BidiLtr", "BidiRtl"]
        }, {name: "tools", items: ["Maximize", "ShowBlocks"]}]
    }; else if (5 == e.type) t = {
        language: "vi",
        baseHref: e.domain,
        entities_greek: !1,
        entities_latin: !1,
        height: e.height,
        width: e.width,
        codeSnippet_theme: "foundation",
        toolbar: [{
            name: "clipboard",
            items: ["Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-", "Undo", "Redo"]
        }, {name: "code", items: ["codeSnippet", "video", "Youtube"]}, {
            name: "insert",
            items: ["Image", "Table", "HorizontalRule", "Smiley", "SpecialChar", "PageBreak", "Iframe"]
        }, {name: "styles", items: ["Styles", "Format", "Font", "FontSize"]}, {
            name: "basicstyles",
            items: ["Bold", "Italic", "Underline"]
        }, {name: "links", items: ["Link", "Unlink", "Anchor"]}, {
            name: "colors",
            items: ["TextColor", "BGColor"]
        }, {
            name: "forms",
            items: ["Form", "Checkbox", "Radio", "TextField", "Textarea", "Select", "Button", "ImageButton", "HiddenField"]
        }, {
            name: "paragraph",
            items: ["NumberedList", "BulletedList", "-", "Outdent", "Indent", "-", "Blockquote", "CreateDiv", "-", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock", "-", "BidiLtr", "BidiRtl"]
        }, {name: "tools", items: ["Maximize", "ShowBlocks"]}]
    }; else t = {
        language: "vi",
        baseHref: e.domain,
        entities_greek: !1,
        entities_latin: !1,
        height: e.height,
        width: e.width,
        codeSnippet_theme: "foundation",
        toolbar: [{
            name: "document",
            items: ["DocProps", "Source", "Preview", "Print", "-", "Templates"]
        }, {
            name: "clipboard",
            items: ["Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-", "Undo", "Redo"]
        }, {name: "code", items: ["codeSnippet", "video", "Youtube"]}, {
            name: "insert",
            items: ["Image", "Table", "HorizontalRule", "Smiley", "SpecialChar", "PageBreak", "Iframe"]
        }, {name: "styles", items: ["Styles", "Format", "Font", "FontSize"]}, {
            name: "basicstyles",
            items: ["Bold", "Italic", "Underline", "Strike", "Subscript", "Superscript", "-", "RemoveFormat"]
        }, {
            name: "editing",
            items: ["Find", "Replace", "-", "SelectAll", "-", "SpellChecker", "Scayt"]
        }, {name: "links", items: ["Link", "Unlink", "Anchor"]}, {
            name: "colors",
            items: ["TextColor", "BGColor"]
        }, {
            name: "forms",
            items: ["Form", "Checkbox", "Radio", "TextField", "Textarea", "Select", "Button", "ImageButton", "HiddenField"]
        }, {
            name: "paragraph",
            items: ["NumberedList", "BulletedList", "-", "Outdent", "Indent", "-", "Blockquote", "CreateDiv", "-", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock", "-", "BidiLtr", "BidiRtl"]
        }, {name: "tools", items: ["Maximize", "ShowBlocks"]}]
    };
    $(e.classEditer).ckeditor(t), countEditor(e)
}

function countEditor(e) {
    var t = $(e.classEditer).ckeditorGet();
    t.on("contentDom", function () {
        editor_key(t, e.maximumLength)
    }), (n = void 0 !== n && n) || t.on("instanceReady", function (e) {
        this.dataProcessor.htmlFilter.addRules({
            elements: {
                a: function (e) {
                    e.attributes.rel || (e.attributes.rel = "nofollow")
                }
            }
        })
    });
    var n = void 0 !== n && n;
    t.on("afterCommandExec", function () {
        var n, a = GetCharactersCount(t.getData()), i = a, o = e.maximumLength;
        $("#cke_characterscount_" + t.name).html("Characters count: " + GetCharactersCount(t.getData(), "char") + " - SourceCount : " + a), a >= o && (alert("B??i vi???t qu?? d??i !!! ???? l???n h??n " + o + " k?? t???. Hi???n t???i l?? : " + a), n ? setTimeout(function () {
            i < a && (i = a, t.getData().length > o ? t.execCommand("undo") : n = 0), i = a
        }, 0) : (t.fire("saveSnapshot"), n = 1))
    })
}

function editor_key(e, t) {
    $(e.getData()).text().trim();
    var n, a = GetCharactersCount(e.getData()), i = a, o = t;
    0 == $("#cke_characterscount_" + e.name).length ? (charText = GetCharactersCount(e.getData(), "char"), $("#" + e.id + "_bottom").append('<div class="characterscount" id="cke_characterscount_' + e.name + '" style="display: inline-block; float: right; text-align: right; margin-top: 5px; white-space:nowrap; width:auto;">Characters count: ' + GetCharactersCount(e.getData(), "char") + " - Full : " + a + "</div>")) : $("#cke_characterscount_" + e.name).html("Characters count: " + charText + " - Full : " + a), e.document.on("keyup", function (t) {
        charText = GetCharactersCount(e.getData(), "char");
        var a = GetCharactersCount(e.getData());
        charFull = a, $("#cke_characterscount_" + e.name).html("Characters count: " + charText + " - Full : " + a), a >= o && (alert("B??i vi???t qu?? d??i !!! ???? l???n h??n " + o + " k?? t???. Hi???n t???i l?? : " + a), n ? setTimeout(function () {
            i < a && (i = a, e.getData().length > o ? e.execCommand("undo") : n = 0), i = a
        }, 0) : (e.fire("saveSnapshot"), n = 1, t.cancel()))
    })
}

function Padding() {
    var e = $(".padding").width(), t = (640 - e) / 2;
    $(".padding").css({width: e + "px", margin: "0 " + t + "px"})
}

function clTooltip(e) {
    isIE6 || isIE7 || (strTooltipProductOb = void 0 !== e ? e : "#business article pre", "undefined" != typeof strTooltipProductOb && (arrTooltipProductOb = strTooltipProductOb.split(","), arrTooltipProductOb = $.unique(arrTooltipProductOb), obj = "", $.each(arrTooltipProductOb, function (e, t) {
        "" != obj && (obj += ","), obj += $.trim(t)
    }), $(obj).each(function (e, t) {
        $(t).parent("article").pvgTooltip({
            bodyHandler: function () {
                return $(t).html()
            }, track: !0, showURL: !1, extraClass: "user"
        })
    })))
}

function slideDonors() {
    $(".jcarousel").on("jcarousel:reload jcarousel:create", function () {
        var e = $(this), t = e.innerWidth();
        t >= 635 ? t /= 3 : t >= 350 && (t /= 2), e.jcarousel("items").css("width", "155px")
    }).jcarousel({wrap: "circular"}).jcarouselAutoscroll({
        interval: 1e3,
        target: "+=1",
        autostart: !0
    }), $("._btnLeft").jcarouselControl({target: "-=1"}), $("._btnRight").jcarouselControl({target: "+=1"})
}

$(document).ready(function () {
    $(".orders-list li .order header").click(function () {
        $(this).parent(".order").hasClass("order_state_collapsed") ? $(this).parent(".order").removeClass("order_state_collapsed") : $(this).parent(".order").addClass("order_state_collapsed")
    }), $("#cateList2").data("collapsed") || $("#cateList2 > ul > li:eq(1)").removeClass("collapsed"), $("#cateList2 label").click(function () {
        $(this).parent().next().hasClass("collapsed") ? $(this).parent().next().removeClass("collapsed") : $(this).parent().next().addClass("collapsed")
    }), $(".colorBox").colorbox({
        width: "90%",
        height: "90%",
        maxWidth: "950px",
        fixed: !0,
        iframe: !0,
        escKey: !0,
        overlayClose: !1,
        href: function () {
            return $(this).attr("href")
        }
    }), $(".cancelOrder").on("click", function (e) {
        var t = $(this).data("id"), n = $(this).attr("title"), a = $(this).data("status");
        if (DEL_URL = "undefined" != typeof DEL_URL ? DEL_URL : null, t = void 0 !== t ? t : 0, a = void 0 !== a ? a : "", !DEL_URL && t > 0) return !1;
        noti_.showDialog("Th??ng b??o !!!", "<p>B???n mu???n " + n + " ?</p>", {
            submit: {
                text: "  Ch???n  ",
                action: function () {
                    $.ajax({url: DEL_URL, type: "POST", data: {id: t, action: a}, dataType: "json"}).fail(function () {
                        showWarning(alertJson.disConnect)
                    }).done(function (e) {
                        "SUCCESS" == e.status ? noti_.showSuccess(e.text, function () {
                            window.location.reload(!0)
                        }) : showWarning(e.text)
                    })
                }
            }
        }), e.preventDefault()
    }), delRecord(), setStatus(), "undefined" != typeof showStatus && $("#showStatus").on("change", function () {
        var e = $(this).val();
        window.location.href = showStatus + "?status=" + e
    })
}), $(document).ready(function () {
    $(".btnTest").on("click", function () {
        var e = $(this).data("id");
        $.ajax({
            url: pageJson.STORE_URL + "test",
            type: "POST",
            data: {post_id: e},
            dataType: "json"
        }).fail(function () {
        }).done(function (e) {
        })
    }), $(".addFavorites").on("click", function () {
        var e = $(this).data("id");
        $.ajax({
            url: pageJson.ID_URL + "user/favorites/add",
            type: "POST",
            data: {id: e},
            dataType: "json"
        }).fail(function () {
            showWarning(alertJson.disConnect)
        }).done(function (e) {
            "SUCCESS" == e.status ? showSuccess(e.text) : showWarning(e.text)
        })
    }), $(".postFavorites").on("click", function () {
        if (pageJson.userOnline.online) {
            var e = $(this).data("id");
            $.ajax({
                url: pageJson.ID_URL + "user/courses/favorites/add",
                type: "POST",
                data: {id: e},
                dataType: "json"
            }).fail(function () {
                showWarning(alertJson.disConnect)
            }).done(function (e) {
                "SUCCESS" == e.status ? showSuccess(e.text) : showWarning(e.text)
            })
        } else showWarning("B???n c???n ????ng nh???p ????? th???c hi???n ch???c n??ng n??y!")
    }), $(".btnAddCart").on("click", function () {
        var e = $(this).data("id");
        $.ajax({
            url: pageJson.CART_URL + "/cartStatus",
            type: "POST",
            data: {id: e, status: "add"},
            dataType: "json"
        }).fail(function () {
            showWarning(alertJson.disConnect)
        }).done(function (e) {
            "SUCCESS" == e.status ? ($(".cartQuanity").html(e.cart.totalItems), showSuccess(e.text)) : showWarning(e.text)
        })
    }), $(".btnIndexCart").on("click", function () {
        var e = $(this).data("id");
        return $.ajax({
            url: pageJson.CART_URL + "/cartStatus",
            type: "POST",
            data: {id: e, status: "add"},
            dataType: "json"
        }).fail(function () {
            showWarning(alertJson.disConnect)
        }).done(function (e) {
            "SUCCESS" == e.status ? ($(".cartQuanity").html(e.cart.totalItems), noti_.showDialog("Th??ng b??o !!!", "B???n mu???n di chuy???n ?????n gi??? h??ng?", {
                submit: {
                    text: "?????ng ??",
                    action: function () {
                        window.location.href = "/cart"
                    }
                }, cancel: {
                    text: "????ng", action: function () {
                        page.closeDialog()
                    }
                }
            })) : showWarning(e.text)
        }), !1
    }), $(".btnCart").on("click", function () {
        var e = $(this).data("status"), t = $(this).data("id");
        $.ajax({
            url: pageJson.CART_URL + "/cartStatus",
            type: "POST",
            data: {id: t, status: e},
            dataType: "json"
        }).fail(function () {
            showWarning(alertJson.disConnect)
        }).done(function (n) {
            if ("SUCCESS" == n.status) {
                var a = parseInt($("#proId_" + t).val());
                "down" == e ? ($("#proId_" + t).val(a - 1), 1 == a && $("#proId_" + t).parents("tr").remove()) : "up" == e && $("#proId_" + t).val(a + 1), $(".cartQuanity").html(n.cart.totalItems), noti_.showSuccess(n.text, function () {
                    window.location.reload(!0)
                })
            } else showWarning(n.text)
        })
    }), $(".btnCartSet").on("change", function () {
        var e = $(this).data("id"), t = $(this).val();
        $.ajax({
            url: pageJson.CART_URL + "/cartStatus",
            type: "POST",
            data: {id: e, quanity: t, status: "set"},
            dataType: "json"
        }).fail(function () {
            showWarning(alertJson.disConnect)
        }).done(function (e) {
            "SUCCESS" == e.status ? ($(".cartQuanity").html(e.cart.totalItems), showSuccess(e.text)) : showWarning(e.text)
        })
    }), $(".cart_quantity_delete").on("click", function () {
        var e = $(this).data("id"), t = $(this).val();
        $.ajax({
            url: pageJson.CART_URL + "/cartStatus",
            type: "POST",
            data: {id: e, quanity: t, status: "remove"},
            dataType: "json"
        }).fail(function () {
            showWarning(alertJson.disConnect)
        }).done(function (e) {
            "SUCCESS" == e.status ? ($(".cartQuanity").html(e.cart.totalItems), showSuccess(e.text, function () {
                window.location.reload(!0)
            })) : showWarning(e.text, function () {
                window.location.reload(!0)
            })
        })
    })
});