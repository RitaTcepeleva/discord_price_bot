(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{HzSy:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var r=n("Fcif"),a=n("dV/x"),o=n("hisu"),i=n("yBJb"),c=n("CHlC"),s=n("kMo5"),l=n("P+uj"),u=n("mK0O"),d=n("mXGw"),p=n.n(d),h=n("UutA"),m=n("N39q"),f=n("QrAA"),g=p.a.createElement;function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var a=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var v={name:"Ether (ETH)",symbol:"\u039e"},x=function(t){Object(c.a)(n,t);var e=b(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"getCurrency",value:function(){var t=this.props,e=t.token;return t.noSimpleEther?e:e&&null!=e.address&&e.address!=m.dc?e:v}},{key:"render",value:function(){var t=this.props,e=t.shouldDefaultFiat,n=t.className,o=Object(a.a)(t,["shouldDefaultFiat","className"]);if(e)return"$";var i=this.getCurrency(),c="".concat(i.name||i.symbol).concat("");return g(f.a,{className:"".concat(n),delay:50,position:"top",tooltip:c},i.imageUrl?g(y,Object(r.a)({src:i.imageUrl,title:"".concat(i.name," (").concat(i.symbol,")")},o)):g("span",{title:i.name},i.symbol))}}]),n}(p.a.Component);Object(u.a)(x,"defaultProps",{className:""});var y=h.b.img.withConfig({displayName:"CurrencyIconreact__InlineImg",componentId:"sc-7e6159-0"})(["max-height:",";max-width:",";margin-bottom:",";margin-right:0.1em;"],(function(t){return t.shrink?"0.9em":"1.2em"}),(function(t){return t.shrink?"0.9em":"1.2em"}),(function(t){return t.shrink?"-0.1em":"-0.25em"}))},T8bB:function(t,e,n){"use strict";n.d(e,"a",(function(){return A}));var r=n("hisu"),a=n("yBJb"),o=n("0942"),i=n("4Mpa"),c=n("CHlC"),s=n("kMo5"),l=n("P+uj"),u=n("mK0O"),d=n("mXGw"),p=n.n(d),h=n("UutA"),m=n("9gvq"),f=n("N39q"),g=n("MMen"),b=n("LjoF"),v=n("HSVd"),x=n("wwms"),y=n("K7R9"),w=n("pCUs"),O=n("XaKp"),k=n("gYmZ"),j=n("wSYs"),C=p.a.createElement;function N(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var a=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var A=function(t){Object(c.a)(n,t);var e=N(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return t=e.call.apply(e,[this].concat(i)),Object(u.a)(Object(o.a)(t),"previousExchangeState",Object(x.e)().exchange),t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){Object(i.a)(Object(l.a)(n.prototype),"componentDidMount",this).call(this),v.a.prefetch("/success")}},{key:"componentDidUpdate",value:function(){var t=this.store.exchange;if(t.creatingOrder&&!this.previousExchangeState.creatingOrder&&this.props.onCreateOrder&&this.props.onCreateOrder(),!t.creatingOrder&&this.previousExchangeState.creatingOrder&&this.props.onCompleteOrder&&this.props.onCompleteOrder(),t.fulfillingOrder&&t.pendingTransactionHash&&!this.previousExchangeState.pendingTransactionHash)return Object(x.b)(m.a.reset()),void v.a.push("/success");this.previousExchangeState=t}},{key:"renderAddFundsSection",value:function(t){var e=this.props.accountAddress;return e?C("div",{className:"center-align padded margin-top"},C(w.a,{accountAddress:e,className:"btn btn-blue btn-large",token:t})):null}},{key:"renderInitializingProxy",value:function(){return C("div",{className:"accept-offer-modal-content"},C("h4",null,"Initialize your account first!"),C("p",null,"To allow people on OpenSea to make offers your items, you must first complete a free (plus gas) transaction. Check your wallet!"),C("p",null,"Keep this tab open while we wait for the blockchain to confirm your action."," ",C("strong",null,"This only needs to be done once for your account.")),C("div",{className:"modal-image-wrapper"},C("img",{src:f.ec})),C(O.a,{blockchain:!0}))}},{key:"renderIsApproving",value:function(t,e,n){return C("div",{className:"accept-offer-modal-content"},C("h4",null,t),C("p",null,"To approve OpenSea to trade this token, you must first complete a free (plus gas) transaction. Confirm it in your wallet and keep this tab open!"," ",e?C("span",null,"You might notice a very large number being requested for approval - this is simply the maximum amount, meaning"," ",C("strong",null,"you'll never have to do this approval again"),". It also doesn't allow OpenSea to transfer that amount for you -"," ",C("strong",null,"the amount you sign in the next step is all that can be traded on your behalf"),". Read more"," ",C("a",{href:"/faq#weth",rel:"noreferrer",target:"_blank"},"here"),"."):n?C("strong",null,"This only needs to be done once for all items of this type."):null),C("div",{className:"modal-image-wrapper"},C("img",{src:f.F}),C("img",{className:"modal-asset-img centered",src:f.mc})),C(O.a,{blockchain:!0}))}},{key:"renderIsAuthorizingOrder",value:function(t){return C("div",{className:"accept-offer-modal-content center-align"},C("h4",null,"Authorizing your account for this order..."),t,C("p",{className:"center-align"},'If a signature request pops up, just click "Sign" to verify that you own your wallet.'),C("div",{className:"modal-image-wrapper"},C("img",{src:f.r})),C(O.a,{relative:!0}))}},{key:"renderCompletingTransaction",value:function(t,e,n,r){var a=this.props.imageUrl;return C("div",{className:"accept-offer-modal-content center-align"},C("h4",null,t?"Add funds to complete this transaction":"Completing the ".concat(e?"transaction":"trade","...")),t&&n?C("p",null,"You don't have enough ",t.symbol," to make this transaction. Your current wallet needs ",Object(b.h)(n)," ",t.symbol,"."):C("p",null,r),C("div",{className:"modal-image-wrapper"},C("img",{src:f.G}),C("img",{className:"modal-asset-img",src:a||f.E})),t?this.renderAddFundsSection(t):C(O.a,{blockchain:!0}))}},{key:"render",value:function(){var t=this.store.exchange,e=t.initializingProxy,n=t.approvingAsset,r=t.approvingAllAssets,a=t.fulfillingOrder,o=t.approvingCurrency,i=t.authorizingOrder,c=t.transactionNotice,s=t.transactionValue,l=t.addressOfMissingToken,u=t.wrappingEth,d=e||r||n||a||o||i||u,p=r||n||o,h=l?Object(g.c)(l):null;return C(k.a,{className:"ExchangeModal",open:d,onClose:function(){return Object(x.b)(m.a.reset())}},C(I,null,e?this.renderInitializingProxy():p?this.renderIsApproving(c,o,r):i?this.renderIsAuthorizingOrder(c):this.renderCompletingTransaction(h,u,s,c)))}}]),n}(j.a),I=h.b.div.withConfig({displayName:"ExchangeModalreact__DivContainer",componentId:"sc-10v8f5c-0"})([".modal-image-wrapper{position:relative;margin-top:25px;text-align:center;overflow:hidden;img{max-width:100%;}.modal-asset-img{position:absolute;left:50%;top:8%;max-width:105px;max-height:150px;transform:translateX(-120%);&.centered{transform:translateX(-50%);}@media (max-width:","){max-height:123px;max-width:87px;transform:translateX(-119%);}}}"],y.k)},pCUs:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return S}));var r=n("NthX"),a=n.n(r),o=n("eijD"),i=n("hisu"),c=n("yBJb"),s=n("0942"),l=n("CHlC"),u=n("kMo5"),d=n("P+uj"),p=n("mK0O"),h=n("mXGw"),m=n.n(h),f=n("9va6"),g=n.n(f),b=n("vvX8"),v=n.n(b),x=n("9gvq"),y=n("N39q"),w=n("j2zt"),O=n("x/xB"),k=n("HSVd"),j=n("xM6t"),C=n("zJIH"),N=n("m5he"),A=m.a.createElement;function I(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var S=function(e){Object(l.a)(r,e);var n=I(r);function r(){var t;Object(i.a)(this,r);for(var e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];return t=n.call.apply(n,[this].concat(a)),Object(p.a)(Object(s.a)(t),"state",{}),Object(p.a)(Object(s.a)(t),"dropdownId","".concat(Object(O.a)())),Object(p.a)(Object(s.a)(t),"dropdown",void 0),Object(p.a)(Object(s.a)(t),"unsub",void 0),Object(p.a)(Object(s.a)(t),"trackWyre",(function(e){var n=e.currentTarget,r=t.props.token;Object(w.g)("link_click",{href:n.href,cta:"add_funds_wyre",token:r})})),t}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var e=Object(o.a)(a.a.mark((function e(){var n,r,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props,r=n.token,o=n.accountAddress,this.dropdown=t(".AddFunds--dropdown").dropdown({belowOrigin:!0,constrainWidth:!1}),e.next=4,x.a._getBalance(o,r);case 4:i=e.sent,this.setState({tokenBalance:i});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.dropdown&&this.dropdown.off()}},{key:"getWyreUrl",value:function(t){var e=this.props,n=e.accountAddress,r=e.token,a={destCurrency:g.a.sortBy(y.jd,(function(t){return t!==(null===r||void 0===r?void 0:r.symbol)})).join(","),dest:"ethereum:".concat(n),paymentMethod:t,redirectUrl:y.Ab?void 0:"".concat(k.a.getHrefWithMergedQuery(Object(p.a)({},y.id.DidRedirect,"true"))),failureRedirectUrl:y.Ab?void 0:"".concat(k.a.getHrefWithMergedQuery(Object(p.a)({},y.id.DidFailAndRedirect,"true"))),accountId:y.hd};return"https://pay.sendwyre.com/purchase?".concat(v.a.stringify(a))}},{key:"render",value:function(){var t=this.props,e=t.className,n=t.children,r=t.token,a=(null===r||void 0===r?void 0:r.symbol)||"ETH";return["ETH","USDC"].includes(a)?A("div",{className:"AddFunds"},A("div",{className:"AddFunds--dropdown ".concat(e),"data-activates":this.dropdownId},n||A(m.a.Fragment,null,"Add Funds ",A(N.a,{className:"right",value:"credit_card"})),A(j.c,{className:"padded",id:this.dropdownId},A("p",null,"Coming soon\u2122"),A("p",null,"In the meantime, you can ",A("br",null),"purchase Ethereum on"," ",A(C.a,{url:"https://coinbase.com"},"Coinbase"),".")))):A(C.a,{url:"https://uniswap.exchange/swap/?outputCurrency=".concat(null===r||void 0===r?void 0:r.address)},A("div",{className:"AddFunds"},A("div",{className:"AddFunds--dropdown ".concat(e)},"Buy ",a," on Uniswap"," ",A(N.a,{className:"right",value:"swap_vertical_circle"}))))}}]),r}(m.a.Component);Object(p.a)(S,"defaultProps",{className:""})}).call(this,n("qIEf"))},"x/xB":function(t,e,n){"use strict";e.a=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},xM6t:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c}));var r=n("UutA"),a=n("K7R9"),o=r.b.ul.withConfig({displayName:"components__DropdownContentUl",componentId:"hk9dif-0"})(["margin:0;display:none;min-width:100px;max-height:650px;max-width:100%;overflow-y:auto;opacity:0;position:absolute;z-index:4;will-change:width,height;background:#ffffff;border:1px solid #f2f2f2;box-sizing:border-box;box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:5px;hr{margin:15px -15px;}p{text-align:left;color:rgba(28,31,39,0.5);}li{clear:both;color:rgba(28,31,39,0.5);cursor:pointer;min-height:1rem;line-height:2rem;width:100%;text-align:left;text-transform:none;img{max-height:1.5em;max-width:1.5em;margin-bottom:-0.3em;margin-right:0.8em;}&:hover{color:#1c1f27;}}"]),i=(Object(r.b)(o).withConfig({displayName:"components__DropdownGridUl",componentId:"hk9dif-1"})(["box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2);&&{padding:10px;}li{&:hover{background:white;a,span,.material-icons{color:#1c1f27;}}}li span,a{display:grid;grid-template-columns:55px 1fr;padding-top:10px;padding-bottom:10px;text-transform:uppercase;font-weight:500;font-size:0.8rem;color:rgba(28,31,39,0.4);justify-content:left;align-items:center;}svg,i{font-size:18px;justify-self:center;}li span,a strong{line-height:1;}"]),r.b.button.withConfig({displayName:"components__AuctionButton",componentId:"hk9dif-2"})(["width:49%;position:relative;z-index:1;padding:0px ","px;text-transform:uppercase;background:",";border:0;outline:0;border-radius:5px;height:","px;line-height:","px;color:#FFF;font-weight:600;cursor:pointer;transition:all 0.2s ease;display:flex;align-items:center;justify-content:space-between;& >:first-child{flex:1;width:100%;display:inline-block;text-align:center;text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;}& .material-icons{vertical-align:middle !important;}.splitter{background-color:black;height:","px;margin-left:","px;width:2px;opacity:0.2;border-left:1px solid #ffffff;}.chevron{height:12px;width:12px;margin-left:10px;margin-right:0px;}.blue-chevron{height:12px;width:12px;margin-left:10px;}&:disabled{pointer-events:none;opacity:0.4;}&:focus,&:active{background-color:",";}@media(max-width:","){margin-bottom:10px;margin-left:0px !important;width:100%;border-radius:5px !important;}"," "," ",""],12,a.f,50,50,50,12,a.f,a.k,(function(t){return t.secondary?"\n    border: 1px solid ".concat(a.f,";\n    background: transparent;\n    &.left {\n      margin-left: 2%;\n    }\n    color: ").concat(a.f,";\n    &:focus, &:active {\n      background-color: transparent;\n    }\n  "):""}),(function(t){return t.segmented?"\n    border: 1px solid rgba(0,0,0,0.1);\n    ".concat(t.secondary?"background-color: white;":"","\n    margin-left: 0px;\n    width: 50%;\n    ").concat(t.secondary?"color: ".concat(a.u,";"):"","\n    border-radius: 0px !important;\n    ").concat(t.secondary?"&:focus, &:active {\n        background-color: white;\n        color: black;\n      }":"","\n    &:first-child {\n      margin-left: 1px;\n      border-top-left-radius: 5px !important;\n      border-bottom-left-radius: 5px !important;\n    }\n    &.last-child {\n      border-top-right-radius: 5px !important;\n      border-bottom-right-radius: 5px !important;\n    }\n    &:not(.last-child) {\n      margin-right: -1px;\n    }\n  "):""}),(function(t){return t.navbar?"\n    height: ".concat(40,"px;\n    width: auto !important;\n    min-width: auto;\n    line-height: inherit;\n    font-size: 13px;\n\n    .splitter {\n      height: ").concat(40,"px;\n    }\n\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    &.right {\n      right: 0;\n    }\n    &.left {\n      left: 0;\n    }\n  "):""}))),c=r.b.button.withConfig({displayName:"components__ButtonSmall",componentId:"hk9dif-3"})(["padding:1px 10px;font-size:12px;line-height:24px;opacity:0.6;background-color:rgba(0,0,0,0.1) !important;i.right{margin-left:8px;font-size:17px;line-height:23px;}"]);r.b.div.withConfig({displayName:"components__DivCenterAligned",componentId:"hk9dif-4"})(["margin-left:auto !important;margin-right:auto !important;"])}}]);
//# sourceMappingURL=1dc7926d387d1e252fc601dc64f311bc9b133820.f99bf97cb843ea6181e7.js.map