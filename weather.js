let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
console.log("緯度: " + data.coord.lat);
console.log("経度: " + data.coord.lon);
console.log("天気: " + data.weather[0].description);
console.log("最低気温: " + data.main.temp_min + " °C");
console.log("最高気温: " + data.main.temp_max + " °C");
console.log("湿度: " + data.main.humidity + " %");
console.log("風速: " + data.wind.speed + " m/s");
console.log("風向: " + data.wind.deg);
console.log("都市名: " + data.name);

///4-2



let a1 = document.querySelector('button#miru');
    a1.addEventListener('click',miru);

function miru(){
    let t = document.querySelector('select#toshi');
    let n = t.selectedIndex;
    let os = t.querySelectorAll('option');
    let s = os.item(n);
    let search = s.value;
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/"+search+".json";
    console.log(url);


    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    let data1 = document.querySelector("span#t1");
    data1.textContent = data.name;
    let data2 = document.querySelector("span#t2");
    data2.textContent = data.coord.lat;
    let data3 = document.querySelector("span#t3");
    data3.textContent = data.coord.lon;
    let data4 = document.querySelector("span#t4");
    data4.textContent = data.weather[0].description;
    let data5 = document.querySelector("span#t5");
    data5.textContent = data.main.temp_min+"度";
    let data6 = document.querySelector("span#t6");
    data6.textContent = data.main.temp_max+"度";
    let data7 = document.querySelector("span#t7");
    data7.textContent = data.main.humidity+"%";
    let data8 = document.querySelector("span#t8");
    data8.textContent = data.wind.speed+"m/s";
    let data9 = document.querySelector("span#t9");
    data9.textContent = data.wind.deg;

}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

console.log(data.name);
console.log(data.weather[0].description);
console.log(data.main.temp_max);
console.log(data.main.temp_min);
console.log(data.wind.deg);
console.log(data.wind.speed);
