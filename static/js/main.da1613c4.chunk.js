(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{21:function(e,t,a){e.exports=a(35)},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),i=a(9),u=a.n(i),m=a(20),o=a(11),s=a(8),p=a(1),d=a(7);Object(d.config)();var E=function(e){var t=e.data,a=Object(p.g)().day,n=t.daily.filter((function(e){return e.dt===Number(a)}))[0];if(!n)return r.a.createElement(p.a,{to:"/weather-app"});var c=n.humidity,l=n.pressure,i=n.temp,u=i.min,m=i.max,o=n.weather[0],d=o.main,E=o.icon,h=o.description,f=new Date(1e3*n.dt).toDateString();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"weather-detail"},r.a.createElement("h4",null,f),r.a.createElement("p",null,r.a.createElement("strong",null,"Forecast: "),d," - ",h),r.a.createElement("div",{className:"img-detail"},r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(E,"@2x.png"),alt:"weather"})),r.a.createElement("div",{className:"temps-detail"},r.a.createElement("p",null,r.a.createElement("strong",null,"Humidity:")," ",c," % "),r.a.createElement("p",null,r.a.createElement("strong",null,"Pressure:")," ",l," hPa "),r.a.createElement("p",null,r.a.createElement("strong",null,"Min:")," ",u," \xb0C "),r.a.createElement("p",null,r.a.createElement("strong",null,"Max:")," ",m," \xb0C "))),r.a.createElement("div",{className:"backBtn"},r.a.createElement(s.b,{to:"/weather-app/"},r.a.createElement("button",null,"Back"))))};Object(d.config)();var h=function(e){var t=e.id,a=e.data,n=a.temp,c=n.min,l=n.max,i=a.weather[0].icon,u=new Date(1e3*a.dt).toDateString().substring(0,3);return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{style:{textDecoration:"none",color:"#000"},to:"/weather-app"+"/".concat(t)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"title"},u),r.a.createElement("div",{className:"img-day"},r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(i,"@2x.png"),alt:"weather"})),r.a.createElement("div",{className:"temps"},r.a.createElement("p",{className:"min"},"Min: ",c," \xb0C"),r.a.createElement("p",{className:"max"},"Max: ",l," \xb0C")))))},f=function(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"WeeklyForecast"),r.a.createElement("hr",null),r.a.createElement("div",{className:"card-container"},t&&t.daily.map((function(e){return r.a.createElement(h,{id:e.dt,key:e.dt,data:e})}))))};Object(d.config)();var g=function(e){var t=e.data;return r.a.createElement(s.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/weather-app/"},r.a.createElement(f,{data:t})),r.a.createElement(p.b,{path:"/weather-app/:day",children:r.a.createElement(E,{data:t})}))))},v=function(){var e=Object(o.a)(u.a.mark((function e(t){var a,n,r,c,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.latitude,n=t.longitude,r="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(a,"&lon=").concat(n,"&exclude=hourly,current,minutely,alerts&appid=").concat("24d7eab231aa80194d6732c8effdded4","&units=metric"),e.next=4,fetch(r);case 4:return c=e.sent,e.next=7,c.json();case 7:return l=e.sent,e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){return new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)}))};function b(){return(b=Object(o.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return t=e.sent,a=t.coords.latitude,n=t.coords.longitude,e.abrupt("return",{latitude:a,longitude:n});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){return b.apply(this,arguments)})().then((function(e){v(e).then((function(e){c(e)}))}))}),[]),r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(g,{data:a}))};a(34);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.querySelector("#root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.da1613c4.chunk.js.map