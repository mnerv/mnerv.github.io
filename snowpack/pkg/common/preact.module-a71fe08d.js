var E,d,M,S,W,H,T={},F=[],X=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function g(e,_){for(var t in _)e[t]=_[t];return e}function I(e){var _=e.parentNode;_&&_.removeChild(e)}function O(e,_,t){var r,l,o,c={};for(o in _)o=="key"?r=_[o]:o=="ref"?l=_[o]:c[o]=_[o];if(arguments.length>2&&(c.children=arguments.length>3?E.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)c[o]===void 0&&(c[o]=e.defaultProps[o]);return N(e,c,r,l,null)}function N(e,_,t,r,l){var o={type:e,props:_,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++M};return d.vnode!=null&&d.vnode(o),o}function P(e){return e.children}function w(e,_){this.props=e,this.context=_}function x(e,_){if(_==null)return e.__?x(e.__,e.__.__k.indexOf(e)+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?x(e):null}function R(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return R(e)}}function $(e){(!e.__d&&(e.__d=!0)&&S.push(e)&&!U.__r++||H!==d.debounceRendering)&&((H=d.debounceRendering)||W)(U)}function U(){for(var e;U.__r=S.length;)e=S.sort(function(_,t){return _.__v.__b-t.__v.__b}),S=[],e.some(function(_){var t,r,l,o,c,u;_.__d&&(c=(o=(t=_).__v).__e,(u=t.__P)&&(r=[],(l=g({},o)).__v=o.__v+1,L(u,o,l,t.__n,u.ownerSVGElement!==void 0,o.__h!=null?[c]:null,r,c??x(o),o.__h),J(r,o),o.__e!=c&&R(o)))})}function B(e,_,t,r,l,o,c,u,p,a){var n,v,s,i,f,b,h,y=r&&r.__k||F,m=y.length;for(t.__k=[],n=0;n<_.length;n++)if((i=t.__k[n]=(i=_[n])==null||typeof i=="boolean"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?N(null,i,null,null,i):Array.isArray(i)?N(P,{children:i},null,null,null):i.__b>0?N(i.type,i.props,i.key,null,i.__v):i)!=null){if(i.__=t,i.__b=t.__b+1,(s=y[n])===null||s&&i.key==s.key&&i.type===s.type)y[n]=void 0;else for(v=0;v<m;v++){if((s=y[v])&&i.key==s.key&&i.type===s.type){y[v]=void 0;break}s=null}L(e,i,s=s||T,l,o,c,u,p,a),f=i.__e,(v=i.ref)&&s.ref!=v&&(h||(h=[]),s.ref&&h.push(s.ref,null,i),h.push(v,i.__c||f,i)),f!=null?(b==null&&(b=f),typeof i.type=="function"&&i.__k!=null&&i.__k===s.__k?i.__d=p=j(i,p,e):p=z(e,i,s,y,f,p),a||t.type!=="option"?typeof t.type=="function"&&(t.__d=p):e.value=""):p&&s.__e==p&&p.parentNode!=e&&(p=x(s))}for(t.__e=b,n=m;n--;)y[n]!=null&&(typeof t.type=="function"&&y[n].__e!=null&&y[n].__e==t.__d&&(t.__d=x(r,n+1)),Q(y[n],y[n]));if(h)for(n=0;n<h.length;n++)K(h[n],h[++n],h[++n])}function j(e,_,t){var r,l;for(r=0;r<e.__k.length;r++)(l=e.__k[r])&&(l.__=e,_=typeof l.type=="function"?j(l,_,t):z(t,l,l,e.__k,l.__e,_));return _}function z(e,_,t,r,l,o){var c,u,p;if(_.__d!==void 0)c=_.__d,_.__d=void 0;else if(t==null||l!=o||l.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(l),c=null;else{for(u=o,p=0;(u=u.nextSibling)&&p<r.length;p+=2)if(u==l)break e;e.insertBefore(l,o),c=o}return c!==void 0?c:l.nextSibling}function Y(e,_,t,r,l){var o;for(o in t)o==="children"||o==="key"||o in _||A(e,o,null,t[o],r);for(o in _)l&&typeof _[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===_[o]||A(e,o,_[o],t[o],r)}function G(e,_,t){_[0]==="-"?e.setProperty(_,t):e[_]=t==null?"":typeof t!="number"||X.test(_)?t:t+"px"}function A(e,_,t,r,l){var o;e:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(_ in r)t&&_ in t||G(e.style,_,"");if(t)for(_ in t)r&&t[_]===r[_]||G(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")o=_!==(_=_.replace(/Capture$/,"")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+o]=t,t?r||e.addEventListener(_,o?q:V,o):e.removeEventListener(_,o?q:V,o);else if(_!=="dangerouslySetInnerHTML"){if(l)_=_.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_ in e)try{e[_]=t??"";break e}catch(c){}typeof t=="function"||(t!=null&&(t!==!1||_[0]==="a"&&_[1]==="r")?e.setAttribute(_,t):e.removeAttribute(_))}}function V(e){this.l[e.type+!1](d.event?d.event(e):e)}function q(e){this.l[e.type+!0](d.event?d.event(e):e)}function L(e,_,t,r,l,o,c,u,p){var a,n,v,s,i,f,b,h,y,m,C,k=_.type;if(_.constructor!==void 0)return null;t.__h!=null&&(p=t.__h,u=_.__e=t.__e,_.__h=null,o=[u]),(a=d.__b)&&a(_);try{e:if(typeof k=="function"){if(h=_.props,y=(a=k.contextType)&&r[a.__c],m=a?y?y.props.value:a.__:r,t.__c?b=(n=_.__c=t.__c).__=n.__E:("prototype"in k&&k.prototype.render?_.__c=n=new k(h,m):(_.__c=n=new w(h,m),n.constructor=k,n.render=ee),y&&y.sub(n),n.props=h,n.state||(n.state={}),n.context=m,n.__n=r,v=n.__d=!0,n.__h=[]),n.__s==null&&(n.__s=n.state),k.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=g({},n.__s)),g(n.__s,k.getDerivedStateFromProps(h,n.__s))),s=n.props,i=n.state,v)k.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(k.getDerivedStateFromProps==null&&h!==s&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(h,m),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(h,n.__s,m)===!1||_.__v===t.__v){n.props=h,n.state=n.__s,_.__v!==t.__v&&(n.__d=!1),n.__v=_,_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(D){D&&(D.__=_)}),n.__h.length&&c.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(h,n.__s,m),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(s,i,f)})}n.context=m,n.props=h,n.state=n.__s,(a=d.__r)&&a(_),n.__d=!1,n.__v=_,n.__P=e,a=n.render(n.props,n.state,n.context),n.state=n.__s,n.getChildContext!=null&&(r=g(g({},r),n.getChildContext())),v||n.getSnapshotBeforeUpdate==null||(f=n.getSnapshotBeforeUpdate(s,i)),C=a!=null&&a.type===P&&a.key==null?a.props.children:a,B(e,Array.isArray(C)?C:[C],_,t,r,l,o,c,u,p),n.base=_.__e,_.__h=null,n.__h.length&&c.push(n),b&&(n.__E=n.__=null),n.__e=!1}else o==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=Z(t.__e,_,t,r,l,o,c,p);(a=d.diffed)&&a(_)}catch(D){_.__v=null,(p||o!=null)&&(_.__e=u,_.__h=!!p,o[o.indexOf(u)]=null),d.__e(D,_,t)}}function J(e,_){d.__c&&d.__c(_,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(r){r.call(t)})}catch(r){d.__e(r,t.__v)}})}function Z(e,_,t,r,l,o,c,u){var p,a,n,v=t.props,s=_.props,i=_.type,f=0;if(i==="svg"&&(l=!0),o!=null){for(;f<o.length;f++)if((p=o[f])&&(p===e||(i?p.localName==i:p.nodeType==3))){e=p,o[f]=null;break}}if(e==null){if(i===null)return document.createTextNode(s);e=l?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,s.is&&s),o=null,u=!1}if(i===null)v===s||u&&e.data===s||(e.data=s);else{if(o=o&&E.call(e.childNodes),a=(v=t.props||T).dangerouslySetInnerHTML,n=s.dangerouslySetInnerHTML,!u){if(o!=null)for(v={},f=0;f<e.attributes.length;f++)v[e.attributes[f].name]=e.attributes[f].value;(n||a)&&(n&&(a&&n.__html==a.__html||n.__html===e.innerHTML)||(e.innerHTML=n&&n.__html||""))}if(Y(e,s,v,l,u),n)_.__k=[];else if(f=_.props.children,B(e,Array.isArray(f)?f:[f],_,t,r,l&&i!=="foreignObject",o,c,o?o[0]:t.__k&&x(t,0),u),o!=null)for(f=o.length;f--;)o[f]!=null&&I(o[f]);u||("value"in s&&(f=s.value)!==void 0&&(f!==e.value||i==="progress"&&!f)&&A(e,"value",f,v.value,!1),"checked"in s&&(f=s.checked)!==void 0&&f!==e.checked&&A(e,"checked",f,v.checked,!1))}return e}function K(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(r){d.__e(r,t)}}function Q(e,_,t){var r,l;if(d.unmount&&d.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||K(r,null,_)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){d.__e(o,_)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&Q(r[l],_,typeof e.type!="function");t||e.__e==null||I(e.__e),e.__e=e.__d=void 0}function ee(e,_,t){return this.constructor(e,t)}function _e(e,_,t){var r,l,o;d.__&&d.__(e,_),l=(r=typeof t=="function")?null:t&&t.__k||_.__k,o=[],L(_,e=(!r&&t||_).__k=O(P,null,[e]),l||T,T,_.ownerSVGElement!==void 0,!r&&t?[t]:l?null:_.firstChild?E.call(_.childNodes):null,o,!r&&t?t:l?l.__e:_.firstChild,r),J(o,e)}E=F.slice,d={__e:function(e,_){for(var t,r,l;_=_.__;)if((t=_.__c)&&!t.__)try{if((r=t.constructor)&&r.getDerivedStateFromError!=null&&(t.setState(r.getDerivedStateFromError(e)),l=t.__d),t.componentDidCatch!=null&&(t.componentDidCatch(e),l=t.__d),l)return t.__E=t}catch(o){e=o}throw e}},M=0,w.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=g({},this.state),typeof e=="function"&&(e=e(g({},t),this.props)),e&&g(t,e),e!=null&&this.__v&&(_&&this.__h.push(_),$(this))},w.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),$(this))},w.prototype.render=P,S=[],W=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,U.__r=0;export{_e as S,w as _,P as d,d as l,O as v};
