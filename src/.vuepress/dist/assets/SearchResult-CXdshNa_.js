import{u as I,f as Z,g as ee,h as G,i as te,P as se,t as ae,j as le,k as q,l as f,m as re,w as U,n as s,p as ue,R as O,q as ie,s as oe,v as ce,x as T,y as M,C as ne,z as ve,A as pe,B as Ee,D as he,E as ye,F as de,G as me,H as ge,I as Be,J as F}from"./app-B4aR5uwP.js";const we=["/intro.html","/","/AI/","/database/","/Git/","/Git/%E9%A1%B9%E7%9B%AE%E6%89%93%E5%8C%85%E9%83%A8%E7%BD%B2%E5%88%B0github%E7%9A%84GitHub%20Pages%EF%BC%88%E9%9D%99%E6%80%81%E7%BD%91%E9%A1%B5%EF%BC%89.html","/python/","/web/","/web/css/css.html","/web/css/","/web/ECMA/ES6-ES11.html","/web/ECMA/","/web/html/BOM%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html","/web/html/DOM%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html","/web/html/","/web/js/%E5%92%8C___%E7%9A%84%E5%8C%BA%E5%88%AB%E4%BB%A5%E5%8F%8A%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF.html","/web/js/js%E4%B8%AD%E7%9A%84this%E3%80%81new%E4%BB%A5%E5%8F%8Aapply%E3%80%81call%E3%80%81bind.html","/web/js/js%E4%BD%9C%E7%94%A8%E5%9F%9F%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE.html","/web/js/js%E5%8E%9F%E5%9E%8B%E4%B8%8E%E5%8E%9F%E5%9E%8B%E9%93%BE.html","/web/js/js%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html","/web/js/js%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html","/web/js/js%E7%9F%A5%E8%AF%86%E7%9B%B8%E5%85%B3.html","/web/js/","/web/js/typeof%E4%B8%8Einstanceof.html","/web/react/disable.html","/web/react/","/web/typescript/","/web/typescript/typescript.html","/web/uniapp/","/web/vue/","/web/webpack/","/web/webpack/webpack.html","/web/vue/vue2/","/web/vue/vue3/","/404.html","/category/","/category/ai/","/category/database/","/category/git/","/category/python/","/category/web/","/category/css/","/category/ecma/","/category/html/","/category/js/","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/category/react/","/category/typescript/","/category/uniapp/","/category/vue/","/category/webpack/","/tag/","/tag/git/","/tag/js/","/tag/html/","/tag/%E7%A6%81%E7%94%A8/","/article/","/star/","/timeline/"],be="SEARCH_PRO_QUERY_HISTORY",m=I(be,[]),Ae=()=>{const{queryHistoryCount:a}=F,l=a>0;return{enabled:l,queryHistory:m,addQueryHistory:r=>{l&&(m.value=Array.from(new Set([r,...m.value.slice(0,a-1)])))},removeQueryHistory:r=>{m.value=[...m.value.slice(0,r),...m.value.slice(r+1)]}}},x=a=>we[a.id]+("anchor"in a?`#${a.anchor}`:""),Ce="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:$}=F,g=I(Ce,[]),fe=()=>{const a=$>0;return{enabled:a,resultHistory:g,addResultHistory:l=>{if(a){const r={link:x(l),display:l.display};"header"in l&&(r.header=l.header),g.value=[r,...g.value.slice(0,$-1)]}},removeResultHistory:l=>{g.value=[...g.value.slice(0,l),...g.value.slice(l+1)]}}},Fe=a=>{const l=ne(),r=G(),H=ve(),i=q(0),b=f(()=>i.value>0),h=pe([]);return Ee(()=>{const{search:y,terminate:D}=he(),B=Be(n=>{const w=n.join(" "),{searchFilter:k=E=>E,splitWord:j,suggestionsFilter:L,...d}=l.value;w?(i.value+=1,y(n.join(" "),r.value,d).then(E=>k(E,w,r.value,H.value)).then(E=>{i.value-=1,h.value=E}).catch(E=>{console.warn(E),i.value-=1,i.value||(h.value=[])})):h.value=[]},F.searchDelay-F.suggestDelay);U([a,r],([n])=>B(n),{immediate:!0}),ye(()=>{D()})}),{isSearching:b,results:h}};var De=Z({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=ee(),H=G(),i=te(se),{enabled:b,addQueryHistory:h,queryHistory:y,removeQueryHistory:D}=Ae(),{enabled:B,resultHistory:n,addResultHistory:w,removeResultHistory:k}=fe(),j=b||B,L=ae(a,"queries"),{results:d,isSearching:E}=Fe(L),u=le({isQuery:!0,index:0}),v=q(0),p=q(0),P=f(()=>j&&(y.value.length>0||n.value.length>0)),R=f(()=>d.value.length>0),Q=f(()=>d.value[v.value]||null),Y=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?n.value.length-1:y.value.length-1):u.index=t-1},z=()=>{const{isQuery:e,index:t}=u;t===(e?y.value.length-1:n.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},J=()=>{v.value=v.value>0?v.value-1:d.value.length-1,p.value=Q.value.contents.length-1},V=()=>{v.value=v.value<d.value.length-1?v.value+1:0,p.value=0},K=()=>{p.value<Q.value.contents.length-1?p.value+=1:V()},N=()=>{p.value>0?p.value-=1:J()},S=e=>e.map(t=>de(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=me[e.index]||"$content",[o,C=""]=ge(t)?t[H.value].split("$content"):t.split("$content");return e.display.map(c=>s("div",S([o,...c,C])))}return e.display.map(t=>s("div",S(t)))},A=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")};return re("keydown",e=>{if(a.isFocusing){if(R.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const t=Q.value.contents[p.value];h(a.queries.join(" ")),w(t),r.push(x(t)),A()}}else if(B){if(e.key==="ArrowUp")Y();else if(e.key==="ArrowDown")z();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(l("updateQuery",y.value[t]),e.preventDefault()):(r.push(n.value[t].link),A())}}}}),U([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!R.value:!P.value}],id:"search-pro-results"},a.queries.length?E.value?s(ue,{hint:i.value.searching}):R.value?s("ul",{class:"search-pro-result-list"},d.value.map(({title:e,contents:t},o)=>{const C=v.value===o;return s("li",{class:["search-pro-result-list-item",{active:C}]},[s("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((c,X)=>{const _=C&&p.value===X;return s(O,{to:x(c),class:["search-pro-result-item",{active:_,"aria-selected":_}],onClick:()=>{h(a.queries.join(" ")),w(c),A()}},()=>[c.type==="text"?null:s(c.type==="title"?ie:c.type==="heading"?oe:ce,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[c.type==="text"&&c.header?s("div",{class:"content-header"},c.header):null,s("div",W(c))])])})])})):i.value.emptyResult:j?P.value?[b?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{l("updateQuery",e)}},[s(T,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:M,onClick:o=>{o.preventDefault(),o.stopPropagation(),D(t)}})]))])):null,B?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.resultHistory),n.value.map((e,t)=>s(O,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{A()}},()=>[s(T,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(o=>S(o)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:M,onClick:o=>{o.preventDefault(),o.stopPropagation(),k(t)}})]))])):null]:i.value.emptyHistory:i.value.emptyResult)}});export{De as default};
