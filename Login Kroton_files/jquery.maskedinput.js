﻿!function(e){var t,n,a,r=(n=document.createElement("input"),a="onpaste",n.setAttribute(a,""),("function"==typeof n[a]?"paste":"input")+".mask"),i=navigator.userAgent,o=/iphone/i.test(i),c=/android/i.test(i);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((n=this.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(n,a){var i,l,s,u,f;return!n&&this.length>0?e(this[0]).data(e.mask.dataName)():(a=e.extend({placeholder:e.mask.placeholder,completed:null},a),i=e.mask.definitions,l=[],s=f=n.length,u=null,e.each(n.split(""),function(e,t){"?"==t?(f--,s=e):i[t]?(l.push(new RegExp(i[t])),null===u&&(u=l.length-1)):l.push(null)}),this.trigger("unmask").each(function(){var h=e(this),d=e.map(n.split(""),function(e,t){if("?"!=e)return i[e]?a.placeholder:e}),m=h.val();function p(e){for(;++e<f&&!l[e];);return e}function g(e,t){var n,r;if(!(e<0)){for(n=e,r=p(t);n<f;n++)if(l[n]){if(!(r<f&&l[n].test(d[r])))break;d[n]=d[r],d[r]=a.placeholder,r=p(r)}k(),h.caret(Math.max(u,e))}}function v(e,t){var n;for(n=e;n<t&&n<f;n++)l[n]&&(d[n]=a.placeholder)}function k(){h.val(d.join(""))}function b(e){var t,n,r=h.val(),i=-1;for(t=0,pos=0;t<f;t++)if(l[t]){for(d[t]=a.placeholder;pos++<r.length;)if(n=r.charAt(pos-1),l[t].test(n)){d[t]=n,i=t;break}if(pos>r.length)break}else d[t]===r.charAt(pos)&&t!==s&&(pos++,i=t);return e?k():i+1<s?(h.val(""),v(0,f)):(k(),h.val(h.val().substring(0,i+1))),s?t:u}h.data(e.mask.dataName,function(){return e.map(d,function(e,t){return l[t]&&e!=a.placeholder?e:null}).join("")}),h.attr("readonly")||h.one("unmask",function(){h.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){var e;clearTimeout(t),m=h.val(),e=b(),t=setTimeout(function(){k(),e==n.length?h.caret(0,e):h.caret(e)},10)}).bind("blur.mask",function(){b(),h.val()!=m&&h.change()}).bind("keydown.mask",function(e){var t,n,a,r=e.which;8===r||46===r||o&&127===r?(n=(t=h.caret()).begin,(a=t.end)-n==0&&(n=46!==r?function(e){for(;--e>=0&&!l[e];);return e}(n):a=p(n-1),a=46===r?p(a):a),v(n,a),g(n,a-1),e.preventDefault()):27==r&&(h.val(m),h.caret(0,b()),e.preventDefault())}).bind("keypress.mask",function(t){var n,r,i,o=t.which,s=h.caret();t.ctrlKey||t.altKey||t.metaKey||o<32||o&&(s.end-s.begin!=0&&(v(s.begin,s.end),g(s.begin,s.end-1)),(n=p(s.begin-1))<f&&(r=String.fromCharCode(o),l[n].test(r)&&(function(e){var t,n,r,i;for(t=e,n=a.placeholder;t<f;t++)if(l[t]){if(r=p(t),i=d[t],d[t]=n,!(r<f&&l[r].test(i)))break;n=i}}(n),d[n]=r,k(),i=p(n),c?setTimeout(e.proxy(e.fn.caret,h,i),0):h.caret(i),a.completed&&i>=f&&a.completed.call(h))),t.preventDefault())}).bind(r,function(){setTimeout(function(){var e=b(!0);h.caret(e),a.completed&&e==h.val().length&&a.completed.call(h)},0)}),b()}))}})}(jQuery);