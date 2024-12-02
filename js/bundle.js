"use strict";
function setCookie(name, value, daysToExpire) {
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);
    var cookieString = "".concat(name, "=").concat(encodeURIComponent(value), "; expires=").concat(expirationDate.toUTCString(), "; path=/");
    document.cookie = cookieString;
}
function getCookie(name) {
    var cookies = document.cookie.split(';').map(function (cookie) { return cookie.trim(); });
    for (var _i = 0, cookies_1 = cookies; _i < cookies_1.length; _i++) {
        var cookie = cookies_1[_i];
        var _a = cookie.split('='), cookieName = _a[0], cookieValue = _a[1];
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}
function deleteCookie(name) {
    document.cookie = "".concat(name, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
}
var author = "Acan Xie";
var init_date = function () {
    var date_array_1 = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    var date_array_2 = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth();
    var monthName = date_array_1[month];
    var date = currentDate.getDate();
    var day = currentDate.getDay();
    var dayName = date_array_2[day];
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();
    var updateElements = function (className, value) {
        var elements = Array.from(document.getElementsByClassName(className));
        elements.forEach(function (item) {
            item.innerText = value.toString();
        });
    };
    updateElements("current_year", year);
    updateElements("current_month", month);
    updateElements("current_monthName", monthName);
    updateElements("current_date", date);
    updateElements("current_day", day);
    updateElements("current_dayName", dayName);
    updateElements("current_hour", hour);
    updateElements("current_minute", minute);
    updateElements("current_second", second);
};
var init_author = function () {
    var elements = Array.from(document.getElementsByClassName("author"));
    elements.forEach(function (item) {
        item.innerText = author;
    });
};
init_date();
init_author();
var init_refreshing = function () {
    var _refreshing = Array.from(document.getElementsByClassName("refreshing"));
    Array.from(_refreshing).forEach(function (item) {
        var content = item.getAttribute("content");
        var frequency = item.getAttribute("frequency");
        if (content && frequency) {
            var freqValue = parseInt(frequency);
            if (!isNaN(freqValue) && freqValue > 0) {
                setInterval(function () {
                    try {
                        var evaluatedContent = eval(content);
                        item.innerText = evaluatedContent;
                    }
                    catch (error) {
                        console.error("Error evaluating content:", error);
                    }
                }, 1000 / freqValue);
            }
            else {
                console.warn("Invalid frequency value: ".concat(frequency));
            }
        }
        else {
            console.warn("Missing content or frequency attribute on element:", item);
        }
    });
};
init_refreshing();
var init_select_view = function () {
    var _select_views = Array.from(document.getElementsByClassName("select-view"));
    Array.from(_select_views).forEach(function (item) {
        var _select_view_select = item.querySelector(":scope > .select-view-select");
        var _select_view_views = item.querySelectorAll(":scope > .select-view-view");
        if (!_select_view_select || !_select_view_views) {
            console.warn("Missing select or views in select-view element:", item);
            return;
        }
        var updateView = function () {
            var selectedValue = _select_view_select.value;
            var _select_view_views_selected = item.querySelectorAll(":scope > .select-view-view.option-".concat(selectedValue));
            Array.from(_select_view_views).forEach(function (_item) {
                _item.style.display = "none";
            });
            Array.from(_select_view_views_selected).forEach(function (_item) {
                _item.style.display = "block";
            });
        };
        updateView();
        _select_view_select.onchange = updateView;
    });
};
init_select_view();
