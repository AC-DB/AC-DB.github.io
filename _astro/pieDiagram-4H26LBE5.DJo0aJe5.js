import{B as e,Ct as t,G as n,K as r,Xt as i,Yt as a,wt as o,z as s}from"./src.DUIugFJx.js";import{H as c,K as l,U as u,a as d,c as f,f as p,v as m,w as h,x as g,y as _}from"./chunk-CSCIHK7Q.CBrtooD7.js";import{i as v,p as y}from"./chunk-5ZQYHXKU.BQ7-TOo6.js";import{u as b}from"./Layout.astro_astro_type_script_index_0_lang.BX99rvHg.js";import{t as x}from"./mermaid-parser.core.CbT1p4Yz.js";import{t as S}from"./chunk-4BX2VUAB.BywHwin_.js";r(),s(),t();var C=p.pie,w={sections:new Map,showData:!1,config:C},T=w.sections,E=w.showData,D=structuredClone(C),O={getConfig:a(()=>structuredClone(D),`getConfig`),clear:a(()=>{T=new Map,E=w.showData,d()},`clear`),setDiagramTitle:l,getDiagramTitle:h,setAccTitle:u,getAccTitle:_,setAccDescription:c,getAccDescription:m,addSection:a(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(e)||(T.set(e,t),i.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:a(()=>T,`getSections`),setShowData:a(e=>{E=e},`setShowData`),getShowData:a(()=>E,`getShowData`)},k=a((e,t)=>{S(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),A={parse:a(async e=>{let t=await x(`pie`,e);i.debug(t),k(t,O)},`parse`)},j=a(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),M=a(t=>{let n=[...t.values()].reduce((e,t)=>e+t,0),r=[...t.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/n*100>=1);return e().value(e=>e.value).sort(null)(r)},`createPieArcs`),N={parser:A,db:O,renderer:{draw:a((e,t,r,a)=>{i.debug(`rendering pie chart
`+e);let s=a.db,c=g(),l=v(s.getConfig(),c.pie),u=b(t),d=u.append(`g`);d.attr(`transform`,`translate(225,225)`);let{themeVariables:p}=c,[m]=y(p.pieOuterStrokeWidth);m??=2;let h=l.textPosition,_=n().innerRadius(0).outerRadius(185),x=n().innerRadius(185*h).outerRadius(185*h);d.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+m/2).attr(`class`,`pieOuterCircle`);let S=s.getSections(),C=M(S),w=[p.pie1,p.pie2,p.pie3,p.pie4,p.pie5,p.pie6,p.pie7,p.pie8,p.pie9,p.pie10,p.pie11,p.pie12],T=0;S.forEach(e=>{T+=e});let E=C.filter(e=>(e.data.value/T*100).toFixed(0)!==`0`),D=o(w).domain([...S.keys()]);d.selectAll(`mySlices`).data(E).enter().append(`path`).attr(`d`,_).attr(`fill`,e=>D(e.data.label)).attr(`class`,`pieCircle`),d.selectAll(`mySlices`).data(E).enter().append(`text`).text(e=>(e.data.value/T*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+x.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`);let O=d.append(`text`).text(s.getDiagramTitle()).attr(`x`,0).attr(`y`,-400/2).attr(`class`,`pieTitleText`),k=[...S.entries()].map(([e,t])=>({label:e,value:t})),A=d.selectAll(`.legend`).data(k).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*k.length/2;return`translate(216,`+(t*22-n)+`)`});A.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>D(e.label)).style(`stroke`,e=>D(e.label)),A.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>s.getShowData()?`${e.label} [${e.value}]`:e.label);let j=512+Math.max(...A.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0)),N=O.node()?.getBoundingClientRect().width??0,P=450/2-N/2,F=450/2+N/2,I=Math.min(0,P),L=Math.max(j,F)-I;u.attr(`viewBox`,`${I} 0 ${L} 450`),f(u,450,L,l.useMaxWidth)},`draw`)},styles:j};export{N as diagram};