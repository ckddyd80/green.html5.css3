let url = "https://api.openweathermap.org/data/2.5/weather";
    url += "?appid=06b19cbf29a3140d8fac88428a0b8e2a";
    url += "&units=metric";
    url += "&lang=kr";
    url += "&q=";

//현재 날씨의 모든 정보 얻어오기
function getCurrentWeather(city) {
    var dataObj;
    var openWeatherAPI = url;

    $.ajax({
        type: "GET",
        url: openWeatherAPI += city,
        dataType: "json",
        async: false,
        success: function(data) {
            dataObj = data;
        },
        error: function(request, status, error) {
            //응답 에러시 처리 작업    
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);
        }
    });

    return dataObj;
}

//현재 날씨 온도 얻어오기
function getCurrentTemp(city) {
    var temp = {};
    var openWeatherAPI = url;

    $.ajax({
        type: "GET",
        url: openWeatherAPI += city,
        dataType: "json",
        async: false,
        success: function(data) {
            temp.celsius = Math.floor(data.main.temp);
            temp.icon = data.weather[0].icon;            
        },
        error: function(request, status, error) {
            //응답 에러시 처리 작업    
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);
        }
    });

    return temp;
}
