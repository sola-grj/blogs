import{u as $,g as Z,h as ee,i as G,j as te,P as se,t as ae,k as le,l as q,m as C,n as re,w as U,p as s,q as ue,R as _,s as ie,v as oe,x as ne,y as I,z as T,C as ce,A as Ee,B as ve,D as pe,E as he,F as ye,G as de,H as me,I as Be,J as Ae,K as f}from"./app-Ba2CBXJF.js";const ge=["/intro.html","/","/AI/","/database/","/Git/","/Git/%E9%A1%B9%E7%9B%AE%E6%89%93%E5%8C%85%E9%83%A8%E7%BD%B2%E5%88%B0github%E7%9A%84GitHub%20Pages%EF%BC%88%E9%9D%99%E6%80%81%E7%BD%91%E9%A1%B5%EF%BC%89.html","/node/","/python/","/web/","/node/nestjs/IOC%E6%8E%A7%E5%88%B6%E5%8F%8D%E8%BD%AC%E4%B8%8EDI%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5.html","/node/nestjs/nestjs%20cli.html","/node/nestjs/nestjs%20%E6%8E%A7%E5%88%B6%E5%99%A8.html","/node/nestjs/","/node/nestjs/restful.html","/node/nestjs/%E8%A3%85%E9%A5%B0%E5%99%A8.html","/web/css/css.html","/web/css/","/web/html/BOM%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html","/web/html/DOM%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html","/web/html/","/web/ECMA/ES6-ES11.html","/web/ECMA/","/web/js/%E5%92%8C___%E7%9A%84%E5%8C%BA%E5%88%AB%E4%BB%A5%E5%8F%8A%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF.html","/web/js/js%E4%B8%AD%E7%9A%84this%E3%80%81new%E4%BB%A5%E5%8F%8Aapply%E3%80%81call%E3%80%81bind.html","/web/js/js%E4%BD%9C%E7%94%A8%E5%9F%9F%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE.html","/web/js/js%E5%8E%9F%E5%9E%8B%E4%B8%8E%E5%8E%9F%E5%9E%8B%E9%93%BE.html","/web/js/js%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html","/web/js/js%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html","/web/js/js%E7%9F%A5%E8%AF%86%E7%9B%B8%E5%85%B3.html","/web/js/","/web/js/typeof%E4%B8%8Einstanceof.html","/web/js/%E4%BA%8B%E4%BB%B6%E6%A8%A1%E5%9E%8B.html","/web/react/disable.html","/web/react/","/web/uniapp/","/web/typescript/","/web/typescript/typescript.html","/web/webpack/","/web/webpack/webpack.html","/web/vue/","/web/vue/vue2/","/web/vue/vue3/","/404.html","/category/","/category/ai/","/category/database/","/category/git/","/category/node/","/category/python/","/category/web/","/category/css/","/category/html/","/category/ecma/","/category/js/","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/category/react/","/category/uniapp/","/category/typescript/","/category/webpack/","/category/vue/","/tag/","/tag/git/","/tag/nestjs/","/tag/js/","/tag/html/","/tag/%E7%A6%81%E7%94%A8/","/article/","/star/","/timeline/"],we="SEARCH_PRO_QUERY_HISTORY",m=$(we,[]),be=()=>{const{queryHistoryCount:a}=f,l=a>0;return{enabled:l,queryHistory:m,addQueryHistory:r=>{l&&(m.value=Array.from(new Set([r,...m.value.slice(0,a-1)])))},removeQueryHistory:r=>{m.value=[...m.value.slice(0,r),...m.value.slice(r+1)]}}},x=a=>ge[a.id]+("anchor"in a?`#${a.anchor}`:""),je="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:M}=f,B=$(je,[]),Ce=()=>{const a=M>0;return{enabled:a,resultHistory:B,addResultHistory:l=>{if(a){const r={link:x(l),display:l.display};"header"in l&&(r.header=l.header),B.value=[r,...B.value.slice(0,M-1)]}},removeResultHistory:l=>{B.value=[...B.value.slice(0,l),...B.value.slice(l+1)]}}},fe=a=>{const l=ce(),r=G(),D=Ee(),i=q(0),w=C(()=>i.value>0),h=ve([]);return pe(()=>{const{search:y,terminate:F}=he(),A=Ae(c=>{const g=c.join(" "),{searchFilter:H=p=>p,splitWord:k,suggestionsFilter:L,...d}=l.value;g?(i.value+=1,y(c.join(" "),r.value,d).then(p=>H(p,g,r.value,D.value)).then(p=>{i.value-=1,h.value=p}).catch(p=>{console.warn(p),i.value-=1,i.value||(h.value=[])})):h.value=[]},f.searchDelay-f.suggestDelay);U([a,r],([c])=>A(c),{immediate:!0}),ye(()=>{F()})}),{isSearching:w,results:h}};var Fe=Z({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=ee(),D=G(),i=te(se),{enabled:w,addQueryHistory:h,queryHistory:y,removeQueryHistory:F}=be(),{enabled:A,resultHistory:c,addResultHistory:g,removeResultHistory:H}=Ce(),k=w||A,L=ae(a,"queries"),{results:d,isSearching:p}=fe(L),u=le({isQuery:!0,index:0}),E=q(0),v=q(0),P=C(()=>k&&(y.value.length>0||c.value.length>0)),R=C(()=>d.value.length>0),Q=C(()=>d.value[E.value]||null),Y=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=t-1},z=()=>{const{isQuery:e,index:t}=u;t===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},J=()=>{E.value=E.value>0?E.value-1:d.value.length-1,v.value=Q.value.contents.length-1},K=()=>{E.value=E.value<d.value.length-1?E.value+1:0,v.value=0},V=()=>{v.value<Q.value.contents.length-1?v.value+=1:K()},N=()=>{v.value>0?v.value-=1:J()},S=e=>e.map(t=>de(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=me[e.index]||"$content",[o,j=""]=Be(t)?t[D.value].split("$content"):t.split("$content");return e.display.map(n=>s("div",S([o,...n,j])))}return e.display.map(t=>s("div",S(t)))},b=()=>{E.value=0,v.value=0,l("updateQuery",""),l("close")};return re("keydown",e=>{if(a.isFocusing){if(R.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=Q.value.contents[v.value];h(a.queries.join(" ")),g(t),r.push(x(t)),b()}}else if(A){if(e.key==="ArrowUp")Y();else if(e.key==="ArrowDown")z();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(l("updateQuery",y.value[t]),e.preventDefault()):(r.push(c.value[t].link),b())}}}}),U([E,v],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!R.value:!P.value}],id:"search-pro-results"},a.queries.length?p.value?s(ue,{hint:i.value.searching}):R.value?s("ul",{class:"search-pro-result-list"},d.value.map(({title:e,contents:t},o)=>{const j=E.value===o;return s("li",{class:["search-pro-result-list-item",{active:j}]},[s("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((n,X)=>{const O=j&&v.value===X;return s(_,{to:x(n),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{h(a.queries.join(" ")),g(n),b()}},()=>[n.type==="text"?null:s(n.type==="title"?ie:n.type==="heading"?oe:ne,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?s("div",{class:"content-header"},n.header):null,s("div",W(n))])])})])})):i.value.emptyResult:k?P.value?[w?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{l("updateQuery",e)}},[s(I,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:T,onClick:o=>{o.preventDefault(),o.stopPropagation(),F(t)}})]))])):null,A?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,t)=>s(_,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{b()}},()=>[s(I,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(o=>S(o)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:T,onClick:o=>{o.preventDefault(),o.stopPropagation(),H(t)}})]))])):null]:i.value.emptyHistory:i.value.emptyResult)}});export{Fe as default};
