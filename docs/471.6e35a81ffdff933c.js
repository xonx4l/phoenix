"use strict";(self.webpackChunkphoenix_app=self.webpackChunkphoenix_app||[]).push([[471],{7471:(w,P,g)=>{g.r(P),g.d(P,{TWebPaintingPainter:()=>m});var O=g(5368),M=g(263),S=g(2454);class m extends S.tK{updateObject(e){return!!this.matchObjectType(e)&&(this.assignObject(e),!0)}redraw(){var e=this;return(0,O.Z)(function*(){const r=e.getObject(),n=e.getAxisToSvgFunc();if(!r?.fOper||!n)return;let x,T,a,l=0,i={},p=null,b="none",d="",o=r.fOper.split(";");const c=t=>{if(t!=b&&(p&&(p.attr("d",d),d="",p=null,b="none"),t))switch(b=t,p=e.draw_g.append("svg:path"),t){case"f":p.call(e.fillatt.func);break;case"l":p.call(e.lineatt.func).style("fill","none");break;case"m":p.call(e.markeratt.func)}},y=(t,h)=>{let f=0,s={_typename:"any"};for(let u=0;u<h.length;++u){let _=t.indexOf(":",f+1);s[h[u]]=parseInt(t.slice(f+1,_>f?_:void 0)),f=_}return s},B=t=>{for(;++t<o.length;)switch(x=o[t][0],x){case"z":e.createAttLine({attr:y(o[t],["fLineColor","fLineStyle","fLineWidth"]),force:!0}),c();continue;case"y":e.createAttFill({attr:y(o[t],["fFillColor","fFillStyle"]),force:!0}),c();continue;case"x":e.createAttMarker({attr:y(o[t],["fMarkerColor","fMarkerStyle","fMarkerSize"]),force:!0}),c();continue;case"o":i=y(o[t],["fTextColor","fTextFont","fTextSize","fTextAlign","fTextAngle"]),i.fTextSize<0&&(i.fTextSize*=-.001),c();continue;case"r":case"b":{c("b"==x?"f":"l");let h=n.x(r.fBuf[l++]),f=n.y(r.fBuf[l++]),s=n.x(r.fBuf[l++]),u=n.y(r.fBuf[l++]);d+=`M${h},${f}h${s-h}v${u-f}h${h-s}z`;continue}case"l":case"f":for(c(x),T=parseInt(o[t].slice(1)),a=0;a<T;++a)d+=(a>0?"L":"M")+n.x(r.fBuf[l++])+","+n.y(r.fBuf[l++]);"f"==x&&(d+="Z");continue;case"m":for(c(x),T=parseInt(o[t].slice(1)),e.markeratt.resetPos(),a=0;a<T;++a)d+=e.markeratt.create(n.x(r.fBuf[l++]),n.y(r.fBuf[l++]));continue;case"h":case"t":if(i.fTextSize){c();let h=i.fTextSize>1?i.fTextSize:e.getPadPainter().getPadHeight()*i.fTextSize,f=i.fTextAngle,s=o[t].slice(1),u=e.draw_g.append("svg:g");if(f>=360&&(f-=360*Math.floor(f/360)),e.startTextDrawing(i.fTextFont,h,u),"h"==x){let _="";for(a=0;a<s.length;a+=2)_+=String.fromCharCode(parseInt(s.slice(a,a+2),16));s=_}return e.drawText({align:i.fTextAlign,x:n.x(r.fBuf[l++]),y:n.y(r.fBuf[l++]),rotate:-f,text:s,color:(0,M.Lq)(i.fTextColor),latex:0,draw_g:u}),e.finishTextDrawing(u).then(()=>B(t))}continue;default:console.log(`unsupported operation ${x}`)}return Promise.resolve(!0)};return e.createG(),B(-1).then(()=>(c(),e))})()}static draw(e,r){return(0,O.Z)(function*(){let n=new m(e,r);return n.addToPadPrimitives(),n.redraw()})()}}}}]);
//# sourceMappingURL=471.6e35a81ffdff933c.js.map