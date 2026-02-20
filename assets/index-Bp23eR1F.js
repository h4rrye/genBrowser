(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const xa="183",fi={ROTATE:0,DOLLY:1,PAN:2},nc=0,ja=1,ic=2,Es=1,sc=2,Pi=3,Pn=0,Ae=1,un=2,fn=0,pi=1,Ja=2,Qa=3,to=4,rc=5,Vn=100,ac=101,oc=102,lc=103,cc=104,hc=200,uc=201,dc=202,fc=203,Tr=204,Ar=205,pc=206,mc=207,gc=208,_c=209,vc=210,xc=211,Mc=212,Sc=213,Ec=214,wr=0,Cr=1,Rr=2,gi=3,Pr=4,Dr=5,Lr=6,Ir=7,Ma=0,yc=1,bc=2,Ke=0,al=1,ol=2,ll=3,cl=4,hl=5,ul=6,dl=7,fl=300,Xn=301,_i=302,Vs=303,ks=304,Ls=306,Ur=1e3,dn=1001,Nr=1002,_e=1003,Tc=1004,qi=1005,Ee=1006,Hs=1007,Gn=1008,Pe=1009,pl=1010,ml=1011,Oi=1012,Sa=1013,Qe=1014,$e=1015,mn=1016,Ea=1017,ya=1018,Bi=1020,gl=35902,_l=35899,vl=1021,xl=1022,Ge=1023,gn=1026,Wn=1027,Ml=1028,ba=1029,vi=1030,Ta=1031,Aa=1033,ys=33776,bs=33777,Ts=33778,As=33779,Fr=35840,Or=35841,Br=35842,zr=35843,Vr=36196,kr=37492,Hr=37496,Gr=37488,Wr=37489,Xr=37490,Yr=37491,qr=37808,$r=37809,Zr=37810,Kr=37811,jr=37812,Jr=37813,Qr=37814,ta=37815,ea=37816,na=37817,ia=37818,sa=37819,ra=37820,aa=37821,oa=36492,la=36494,ca=36495,ha=36283,ua=36284,da=36285,fa=36286,Ac=3200,Sl=0,wc=1,wn="",Ue="srgb",xi="srgb-linear",Cs="linear",Zt="srgb",jn=7680,eo=519,Cc=512,Rc=513,Pc=514,wa=515,Dc=516,Lc=517,Ca=518,Ic=519,no=35044,io="300 es",Ze=2e3,zi=2001;function Uc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nc(){const i=Rs("canvas");return i.style.display="block",i}const so={};function ro(...i){const t="THREE."+i.shift();console.log(t,...i)}function El(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ct(...i){i=El(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ht(...i){i=El(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ps(...i){const t=i.join(" ");t in so||(so[t]=!0,Ct(...i))}function Fc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Oc={[wr]:Cr,[Rr]:Lr,[Pr]:Ir,[gi]:Dr,[Cr]:wr,[Lr]:Rr,[Ir]:Pr,[Dr]:gi};class Yn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ao=1234567;const Ii=Math.PI/180,Vi=180/Math.PI;function Si(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function zt(i,t,e){return Math.max(t,Math.min(e,i))}function Ra(i,t){return(i%t+t)%t}function Bc(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function zc(i,t,e){return i!==t?(e-i)/(t-i):0}function Ui(i,t,e){return(1-e)*i+e*t}function Vc(i,t,e,n){return Ui(i,t,1-Math.exp(-e*n))}function kc(i,t=1){return t-Math.abs(Ra(i,t*2)-t)}function Hc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Gc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Wc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Xc(i,t){return i+Math.random()*(t-i)}function Yc(i){return i*(.5-Math.random())}function qc(i){i!==void 0&&(ao=i);let t=ao+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $c(i){return i*Ii}function Zc(i){return i*Vi}function Kc(i){return(i&i-1)===0&&i!==0}function jc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qc(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),f=r((t-n)/2),h=a((t-n)/2),p=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*f,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*f,o*l);break;case"ZXZ":i.set(c*f,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*_,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*_,o*l);break;case"ZYZ":i.set(c*_,c*p,o*u,o*l);break;default:Ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function di(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const oo={DEG2RAD:Ii,RAD2DEG:Vi,generateUUID:Si,clamp:zt,euclideanModulo:Ra,mapLinear:Bc,inverseLerp:zc,lerp:Ui,damp:Vc,pingpong:kc,smoothstep:Hc,smootherstep:Gc,randInt:Wc,randFloat:Xc,randFloatSpread:Yc,seededRandom:qc,degToRad:$c,radToDeg:Zc,isPowerOfTwo:Kc,ceilPowerOfTwo:jc,floorPowerOfTwo:Jc,setQuaternionFromProperEuler:Qc,normalize:be,denormalize:di};class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],p=r[a+1],_=r[a+2],S=r[a+3];if(f!==S||c!==h||l!==p||u!==_){let m=c*h+l*p+u*_+f*S;m<0&&(h=-h,p=-p,_=-_,S=-S,m=-m);let d=1-o;if(m<.9995){const M=Math.acos(m),T=Math.sin(M);d=Math.sin(d*M)/T,o=Math.sin(o*M)/T,c=c*d+h*o,l=l*d+p*o,u=u*d+_*o,f=f*d+S*o}else{c=c*d+h*o,l=l*d+p*o,u=u*d+_*o,f=f*d+S*o;const M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[a],h=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+u*f+c*p-l*h,t[e+1]=c*_+u*h+l*f-o*p,t[e+2]=l*_+u*p+o*h-c*f,t[e+3]=u*_-o*f-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),f=o(r/2),h=c(n/2),p=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=h*u*f+l*p*_,this._y=l*p*f-h*u*_,this._z=l*u*_+h*p*f,this._w=l*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+l*p*_,this._y=l*p*f-h*u*_,this._z=l*u*_-h*p*f,this._w=l*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-l*p*_,this._y=l*p*f+h*u*_,this._z=l*u*_+h*p*f,this._w=l*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-l*p*_,this._y=l*p*f+h*u*_,this._z=l*u*_-h*p*f,this._w=l*u*f+h*p*_;break;case"YZX":this._x=h*u*f+l*p*_,this._y=l*p*f+h*u*_,this._z=l*u*_-h*p*f,this._w=l*u*f-h*p*_;break;case"XZY":this._x=h*u*f-l*p*_,this._y=l*p*f-h*u*_,this._z=l*u*_+h*p*f,this._w=l*u*f+h*p*_;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*u,this.y=n+c*u+o*l-r*f,this.z=s+c*f+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gs.copy(this).projectOnVector(t),this.sub(Gs)}reflect(t){return this.sub(Gs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gs=new L,lo=new qn;class It{constructor(t,e,n,s,r,a,o,c,l){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],p=n[5],_=n[8],S=s[0],m=s[3],d=s[6],M=s[1],T=s[4],y=s[7],R=s[2],A=s[5],P=s[8];return r[0]=a*S+o*M+c*R,r[3]=a*m+o*T+c*A,r[6]=a*d+o*y+c*P,r[1]=l*S+u*M+f*R,r[4]=l*m+u*T+f*A,r[7]=l*d+u*y+f*P,r[2]=h*S+p*M+_*R,r[5]=h*m+p*T+_*A,r[8]=h*d+p*y+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,h=o*c-u*r,p=l*r-a*c,_=e*f+n*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=f*S,t[1]=(s*l-u*n)*S,t[2]=(o*n-s*a)*S,t[3]=h*S,t[4]=(u*e-s*c)*S,t[5]=(s*r-o*e)*S,t[6]=p*S,t[7]=(n*c-l*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ws.makeScale(t,e)),this}rotate(t){return this.premultiply(Ws.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ws.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ws=new It,co=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ho=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function th(){const i={enabled:!0,workingColorSpace:xi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Zt&&(s.r=pn(s.r),s.g=pn(s.g),s.b=pn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Zt&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wn?Cs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xi]:{primaries:t,whitePoint:n,transfer:Cs,toXYZ:co,fromXYZ:ho,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:Zt,toXYZ:co,fromXYZ:ho,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}const Gt=th();function pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Jn;class eh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Jn===void 0&&(Jn=Rs("canvas")),Jn.width=t.width,Jn.height=t.height;const s=Jn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Jn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pn(e[n]/255)*255):e[n]=pn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nh=0;class Pa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Si(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xs(s[a].image)):r.push(Xs(s[a]))}else r=Xs(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Xs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?eh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}let ih=0;const Ys=new L;class ye extends Yn{constructor(t=ye.DEFAULT_IMAGE,e=ye.DEFAULT_MAPPING,n=dn,s=dn,r=Ee,a=Gn,o=Ge,c=Pe,l=ye.DEFAULT_ANISOTROPY,u=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=Si(),this.name="",this.source=new Pa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ys).x}get height(){return this.source.getSize(Ys).y}get depth(){return this.source.getSize(Ys).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ur:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case Nr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ur:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case Nr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ye.DEFAULT_IMAGE=null;ye.DEFAULT_MAPPING=fl;ye.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],_=c[9],S=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,y=(p+1)/2,R=(d+1)/2,A=(u+h)/4,P=(f+S)/4,v=(_+m)/4;return T>y&&T>R?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=A/n,r=P/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=v/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=P/r,s=v/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-_)*(m-_)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(f-S)/M,this.z=(h-u)/M,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this.w=zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this.w=zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sh extends Yn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ee,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new ye(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ee,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Pa(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class je extends sh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yl extends ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_e,this.minFilter=_e,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rh extends ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_e,this.minFilter=_e,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ie{constructor(t,e,n,s,r,a,o,c,l,u,f,h,p,_,S,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,f,h,p,_,S,m)}set(t,e,n,s,r,a,o,c,l,u,f,h,p,_,S,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Qn.setFromMatrixColumn(t,0).length(),r=1/Qn.setFromMatrixColumn(t,1).length(),a=1/Qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=a*u,p=a*f,_=o*u,S=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=p+_*l,e[5]=h-S*l,e[9]=-o*c,e[2]=S-h*l,e[6]=_+p*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*u,p=c*f,_=l*u,S=l*f;e[0]=h+S*o,e[4]=_*o-p,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=S+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*u,p=c*f,_=l*u,S=l*f;e[0]=h-S*o,e[4]=-a*f,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*u,p=a*f,_=o*u,S=o*f;e[0]=c*u,e[4]=_*l-p,e[8]=h*l+S,e[1]=c*f,e[5]=S*l+h,e[9]=p*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,p=a*l,_=o*c,S=o*l;e[0]=c*u,e[4]=S-h*f,e[8]=_*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*f+_,e[10]=h-S*f}else if(t.order==="XZY"){const h=a*c,p=a*l,_=o*c,S=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+S,e[5]=a*u,e[9]=p*f-_,e[2]=_*f-p,e[6]=o*u,e[10]=S*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ah,t,oh)}lookAt(t,e,n){const s=this.elements;return Ce.subVectors(t,e),Ce.lengthSq()===0&&(Ce.z=1),Ce.normalize(),Mn.crossVectors(n,Ce),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Ce.x+=1e-4:Ce.z+=1e-4,Ce.normalize(),Mn.crossVectors(n,Ce)),Mn.normalize(),$i.crossVectors(Ce,Mn),s[0]=Mn.x,s[4]=$i.x,s[8]=Ce.x,s[1]=Mn.y,s[5]=$i.y,s[9]=Ce.y,s[2]=Mn.z,s[6]=$i.z,s[10]=Ce.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],p=n[13],_=n[2],S=n[6],m=n[10],d=n[14],M=n[3],T=n[7],y=n[11],R=n[15],A=s[0],P=s[4],v=s[8],b=s[12],$=s[1],C=s[5],z=s[9],V=s[13],X=s[2],B=s[6],H=s[10],N=s[14],Q=s[3],K=s[7],ct=s[11],pt=s[15];return r[0]=a*A+o*$+c*X+l*Q,r[4]=a*P+o*C+c*B+l*K,r[8]=a*v+o*z+c*H+l*ct,r[12]=a*b+o*V+c*N+l*pt,r[1]=u*A+f*$+h*X+p*Q,r[5]=u*P+f*C+h*B+p*K,r[9]=u*v+f*z+h*H+p*ct,r[13]=u*b+f*V+h*N+p*pt,r[2]=_*A+S*$+m*X+d*Q,r[6]=_*P+S*C+m*B+d*K,r[10]=_*v+S*z+m*H+d*ct,r[14]=_*b+S*V+m*N+d*pt,r[3]=M*A+T*$+y*X+R*Q,r[7]=M*P+T*C+y*B+R*K,r[11]=M*v+T*z+y*H+R*ct,r[15]=M*b+T*V+y*N+R*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],p=t[14],_=t[3],S=t[7],m=t[11],d=t[15],M=c*p-l*h,T=o*p-l*f,y=o*h-c*f,R=a*p-l*u,A=a*h-c*u,P=a*f-o*u;return e*(S*M-m*T+d*y)-n*(_*M-m*R+d*A)+s*(_*T-S*R+d*P)-r*(_*y-S*A+m*P)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],p=t[11],_=t[12],S=t[13],m=t[14],d=t[15],M=e*o-n*a,T=e*c-s*a,y=e*l-r*a,R=n*c-s*o,A=n*l-r*o,P=s*l-r*c,v=u*S-f*_,b=u*m-h*_,$=u*d-p*_,C=f*m-h*S,z=f*d-p*S,V=h*d-p*m,X=M*V-T*z+y*C+R*$-A*b+P*v;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/X;return t[0]=(o*V-c*z+l*C)*B,t[1]=(s*z-n*V-r*C)*B,t[2]=(S*P-m*A+d*R)*B,t[3]=(h*A-f*P-p*R)*B,t[4]=(c*$-a*V-l*b)*B,t[5]=(e*V-s*$+r*b)*B,t[6]=(m*y-_*P-d*T)*B,t[7]=(u*P-h*y+p*T)*B,t[8]=(a*z-o*$+l*v)*B,t[9]=(n*$-e*z-r*v)*B,t[10]=(_*A-S*y+d*M)*B,t[11]=(f*y-u*A-p*M)*B,t[12]=(o*b-a*C-c*v)*B,t[13]=(e*C-n*b+s*v)*B,t[14]=(S*T-_*R-m*M)*B,t[15]=(u*R-f*T+h*M)*B,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,f=o+o,h=r*l,p=r*u,_=r*f,S=a*u,m=a*f,d=o*f,M=c*l,T=c*u,y=c*f,R=n.x,A=n.y,P=n.z;return s[0]=(1-(S+d))*R,s[1]=(p+y)*R,s[2]=(_-T)*R,s[3]=0,s[4]=(p-y)*A,s[5]=(1-(h+d))*A,s[6]=(m+M)*A,s[7]=0,s[8]=(_+T)*P,s[9]=(m-M)*P,s[10]=(1-(h+S))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Qn.set(s[0],s[1],s[2]).length();const o=Qn.set(s[4],s[5],s[6]).length(),c=Qn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Be.copy(this);const l=1/a,u=1/o,f=1/c;return Be.elements[0]*=l,Be.elements[1]*=l,Be.elements[2]*=l,Be.elements[4]*=u,Be.elements[5]*=u,Be.elements[6]*=u,Be.elements[8]*=f,Be.elements[9]*=f,Be.elements[10]*=f,e.setFromRotationMatrix(Be),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Ze,c=!1){const l=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s);let _,S;if(c)_=r/(a-r),S=a*r/(a-r);else if(o===Ze)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===zi)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ze,c=!1){const l=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),p=-(n+s)/(n-s);let _,S;if(c)_=1/(a-r),S=a/(a-r);else if(o===Ze)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===zi)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qn=new L,Be=new ie,ah=new L(0,0,0),oh=new L(1,1,1),Mn=new L,$i=new L,Ce=new L,uo=new ie,fo=new qn;class tn{constructor(t=0,e=0,n=0,s=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return uo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fo.setFromEuler(this),this.setFromQuaternion(fo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class Da{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lh=0;const po=new L,ti=new qn,an=new ie,Zi=new L,bi=new L,ch=new L,hh=new qn,mo=new L(1,0,0),go=new L(0,1,0),_o=new L(0,0,1),vo={type:"added"},uh={type:"removed"},ei={type:"childadded",child:null},qs={type:"childremoved",child:null};class ve extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new L,e=new tn,n=new qn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new It}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.multiply(ti),this}rotateOnWorldAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.premultiply(ti),this}rotateX(t){return this.rotateOnAxis(mo,t)}rotateY(t){return this.rotateOnAxis(go,t)}rotateZ(t){return this.rotateOnAxis(_o,t)}translateOnAxis(t,e){return po.copy(t).applyQuaternion(this.quaternion),this.position.add(po.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mo,t)}translateY(t){return this.translateOnAxis(go,t)}translateZ(t){return this.translateOnAxis(_o,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zi.copy(t):Zi.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(bi,Zi,this.up):an.lookAt(Zi,bi,this.up),this.quaternion.setFromRotationMatrix(an),s&&(an.extractRotation(s.matrixWorld),ti.setFromRotationMatrix(an),this.quaternion.premultiply(ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vo),ei.child=t,this.dispatchEvent(ei),ei.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uh),qs.child=t,this.dispatchEvent(qs),qs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vo),ei.child=t,this.dispatchEvent(ei),ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,t,ch),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,hh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ve.DEFAULT_UP=new L(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Di extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dh={type:"move"};class $s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,n),d=this._getHandJoint(l,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;l.inputState.pinching&&h>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Di;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function Zs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Gt.workingColorSpace){if(t=Ra(t,1),e=zt(e,0,1),n=zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Zs(a,r,t+1/3),this.g=Zs(a,r,t),this.b=Zs(a,r,t-1/3)}return Gt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=bl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pn(t.r),this.g=pn(t.g),this.b=pn(t.b),this}copyLinearToSRGB(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Gt.workingToColorSpace(Se.copy(this),t),Math.round(zt(Se.r*255,0,255))*65536+Math.round(zt(Se.g*255,0,255))*256+Math.round(zt(Se.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.workingToColorSpace(Se.copy(this),e);const n=Se.r,s=Se.g,r=Se.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Gt.workingColorSpace){return Gt.workingToColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Ue){Gt.workingToColorSpace(Se.copy(this),t);const e=Se.r,n=Se.g,s=Se.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Sn),this.setHSL(Sn.h+t,Sn.s+e,Sn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL(Ki);const n=Ui(Sn.h,Ki.h,e),s=Ui(Sn.s,Ki.s,e),r=Ui(Sn.l,Ki.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new Vt;Vt.NAMES=bl;class fh extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ze=new L,on=new L,Ks=new L,ln=new L,ni=new L,ii=new L,xo=new L,js=new L,Js=new L,Qs=new L,tr=new ae,er=new ae,nr=new ae;class He{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ze.subVectors(t,e),s.cross(ze);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ze.subVectors(s,e),on.subVectors(n,e),Ks.subVectors(t,e);const a=ze.dot(ze),o=ze.dot(on),c=ze.dot(Ks),l=on.dot(on),u=on.dot(Ks),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(l*c-o*u)*h,_=(a*u-o*c)*h;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ln.x),c.addScaledVector(a,ln.y),c.addScaledVector(o,ln.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return tr.setScalar(0),er.setScalar(0),nr.setScalar(0),tr.fromBufferAttribute(t,e),er.fromBufferAttribute(t,n),nr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(tr,r.x),a.addScaledVector(er,r.y),a.addScaledVector(nr,r.z),a}static isFrontFacing(t,e,n,s){return ze.subVectors(n,e),on.subVectors(t,e),ze.cross(on).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ze.subVectors(this.c,this.b),on.subVectors(this.a,this.b),ze.cross(on).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return He.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ni.subVectors(s,n),ii.subVectors(r,n),js.subVectors(t,n);const c=ni.dot(js),l=ii.dot(js);if(c<=0&&l<=0)return e.copy(n);Js.subVectors(t,s);const u=ni.dot(Js),f=ii.dot(Js);if(u>=0&&f<=u)return e.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(ni,a);Qs.subVectors(t,r);const p=ni.dot(Qs),_=ii.dot(Qs);if(_>=0&&p<=_)return e.copy(r);const S=p*l-c*_;if(S<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(ii,o);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return xo.subVectors(r,s),o=(f-u)/(f-u+(p-_)),e.copy(s).addScaledVector(xo,o);const d=1/(m+S+h);return a=S*d,o=h*d,e.copy(n).addScaledVector(ni,a).addScaledVector(ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Gi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ve.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ve.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ve.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ve):Ve.fromBufferAttribute(r,a),Ve.applyMatrix4(t.matrixWorld),this.expandByPoint(Ve);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ji.copy(n.boundingBox)),ji.applyMatrix4(t.matrixWorld),this.union(ji)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ve),Ve.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ti),Ji.subVectors(this.max,Ti),si.subVectors(t.a,Ti),ri.subVectors(t.b,Ti),ai.subVectors(t.c,Ti),En.subVectors(ri,si),yn.subVectors(ai,ri),In.subVectors(si,ai);let e=[0,-En.z,En.y,0,-yn.z,yn.y,0,-In.z,In.y,En.z,0,-En.x,yn.z,0,-yn.x,In.z,0,-In.x,-En.y,En.x,0,-yn.y,yn.x,0,-In.y,In.x,0];return!ir(e,si,ri,ai,Ji)||(e=[1,0,0,0,1,0,0,0,1],!ir(e,si,ri,ai,Ji))?!1:(Qi.crossVectors(En,yn),e=[Qi.x,Qi.y,Qi.z],ir(e,si,ri,ai,Ji))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ve).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ve).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const cn=[new L,new L,new L,new L,new L,new L,new L,new L],Ve=new L,ji=new Gi,si=new L,ri=new L,ai=new L,En=new L,yn=new L,In=new L,Ti=new L,Ji=new L,Qi=new L,Un=new L;function ir(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Un.fromArray(i,r);const o=s.x*Math.abs(Un.x)+s.y*Math.abs(Un.y)+s.z*Math.abs(Un.z),c=t.dot(Un),l=e.dot(Un),u=n.dot(Un);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const he=new L,ts=new Et;let ph=0;class De{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ph++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=no,this.updateRanges=[],this.gpuType=$e,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ts.fromBufferAttribute(this,e),ts.applyMatrix3(t),this.setXY(e,ts.x,ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=di(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=di(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=di(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==no&&(t.usage=this.usage),t}}class Tl extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Al extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Fe extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}}const mh=new Gi,Ai=new L,sr=new L;class Is{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ai.subVectors(t,this.center);const e=Ai.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ai,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ai.copy(t.center).add(sr)),this.expandByPoint(Ai.copy(t.center).sub(sr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let gh=0;const Ie=new ie,rr=new ve,oi=new L,Re=new Gi,wi=new Gi,me=new L;class Le extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uc(t)?Al:Tl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ie.makeRotationFromQuaternion(t),this.applyMatrix4(Ie),this}rotateX(t){return Ie.makeRotationX(t),this.applyMatrix4(Ie),this}rotateY(t){return Ie.makeRotationY(t),this.applyMatrix4(Ie),this}rotateZ(t){return Ie.makeRotationZ(t),this.applyMatrix4(Ie),this}translate(t,e,n){return Ie.makeTranslation(t,e,n),this.applyMatrix4(Ie),this}scale(t,e,n){return Ie.makeScale(t,e,n),this.applyMatrix4(Ie),this}lookAt(t){return rr.lookAt(t),rr.updateMatrix(),this.applyMatrix4(rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Fe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Re.setFromBufferAttribute(r),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,Re.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,Re.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(Re.min),this.boundingBox.expandByPoint(Re.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Re.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];wi.setFromBufferAttribute(o),this.morphTargetsRelative?(me.addVectors(Re.min,wi.min),Re.expandByPoint(me),me.addVectors(Re.max,wi.max),Re.expandByPoint(me)):(Re.expandByPoint(wi.min),Re.expandByPoint(wi.max))}Re.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(me));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)me.fromBufferAttribute(o,l),c&&(oi.fromBufferAttribute(t,l),me.add(oi)),s=Math.max(s,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new L,c[v]=new L;const l=new L,u=new L,f=new L,h=new Et,p=new Et,_=new Et,S=new L,m=new L;function d(v,b,$){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,$),h.fromBufferAttribute(r,v),p.fromBufferAttribute(r,b),_.fromBufferAttribute(r,$),u.sub(l),f.sub(l),p.sub(h),_.sub(h);const C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(C),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(C),o[v].add(S),o[b].add(S),o[$].add(S),c[v].add(m),c[b].add(m),c[$].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,b=M.length;v<b;++v){const $=M[v],C=$.start,z=$.count;for(let V=C,X=C+z;V<X;V+=3)d(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const T=new L,y=new L,R=new L,A=new L;function P(v){R.fromBufferAttribute(s,v),A.copy(R);const b=o[v];T.copy(b),T.sub(R.multiplyScalar(R.dot(b))).normalize(),y.crossVectors(A,b);const C=y.dot(c[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,C)}for(let v=0,b=M.length;v<b;++v){const $=M[v],C=$.start,z=$.count;for(let V=C,X=C+z;V<X;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,u=new L,f=new L;if(t)for(let h=0,p=t.count;h<p;h+=3){const _=t.getX(h+0),S=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let p=0,_=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?p=c[S]*o.data.stride+o.offset:p=c[S]*u;for(let d=0;d<u;d++)h[_++]=l[p++]}return new De(h,u,f)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],p=t(h,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const p=l[f];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let _h=0;class Ei extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=pi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tr,this.blendDst=Ar,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tr&&(n.blendSrc=this.blendSrc),this.blendDst!==Ar&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const hn=new L,ar=new L,es=new L,bn=new L,or=new L,ns=new L,lr=new L;class La{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ar.copy(t).add(e).multiplyScalar(.5),es.copy(e).sub(t).normalize(),bn.copy(this.origin).sub(ar);const r=t.distanceTo(e)*.5,a=-this.direction.dot(es),o=bn.dot(this.direction),c=-bn.dot(es),l=bn.lengthSq(),u=Math.abs(1-a*a);let f,h,p,_;if(u>0)if(f=a*c-o,h=a*o-c,_=r*u,f>=0)if(h>=-_)if(h<=_){const S=1/u;f*=S,h*=S,p=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ar).addScaledVector(es,h),p}intersectSphere(t,e){hn.subVectors(t.center,this.origin);const n=hn.dot(this.direction),s=hn.dot(hn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,s,r){or.subVectors(e,t),ns.subVectors(n,t),lr.crossVectors(or,ns);let a=this.direction.dot(lr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bn.subVectors(this.origin,t);const c=o*this.direction.dot(ns.crossVectors(bn,ns));if(c<0)return null;const l=o*this.direction.dot(or.cross(bn));if(l<0||c+l>a)return null;const u=-o*bn.dot(lr);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wl extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Mo=new ie,Nn=new La,is=new Is,So=new L,ss=new L,rs=new L,as=new L,cr=new L,os=new L,Eo=new L,ls=new L;class en extends ve{constructor(t=new Le,e=new wl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){os.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],f=r[c];u!==0&&(cr.fromBufferAttribute(f,t),a?os.addScaledVector(cr,u):os.addScaledVector(cr.sub(e),u))}e.add(os)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(r),Nn.copy(t.ray).recast(t.near),!(is.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(is,So)===null||Nn.origin.distanceToSquared(So)>(t.far-t.near)**2))&&(Mo.copy(r).invert(),Nn.copy(t.ray).applyMatrix4(Mo),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const m=h[_],d=a[m.materialIndex],M=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,R=T;y<R;y+=3){const A=o.getX(y),P=o.getX(y+1),v=o.getX(y+2);s=cs(this,d,t,n,l,u,f,A,P,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,d=S;m<d;m+=3){const M=o.getX(m),T=o.getX(m+1),y=o.getX(m+2);s=cs(this,a,t,n,l,u,f,M,T,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const m=h[_],d=a[m.materialIndex],M=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,R=T;y<R;y+=3){const A=y,P=y+1,v=y+2;s=cs(this,d,t,n,l,u,f,A,P,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(c.count,p.start+p.count);for(let m=_,d=S;m<d;m+=3){const M=m,T=m+1,y=m+2;s=cs(this,a,t,n,l,u,f,M,T,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function vh(i,t,e,n,s,r,a,o){let c;if(t.side===Ae?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Pn,o),c===null)return null;ls.copy(o),ls.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ls);return l<e.near||l>e.far?null:{distance:l,point:ls.clone(),object:i}}function cs(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ss),i.getVertexPosition(c,rs),i.getVertexPosition(l,as);const u=vh(i,t,e,n,ss,rs,as,Eo);if(u){const f=new L;He.getBarycoord(Eo,ss,rs,as,f),s&&(u.uv=He.getInterpolatedAttribute(s,o,c,l,f,new Et)),r&&(u.uv1=He.getInterpolatedAttribute(r,o,c,l,f,new Et)),a&&(u.normal=He.getInterpolatedAttribute(a,o,c,l,f,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new L,materialIndex:0};He.getNormal(ss,rs,as,h.normal),u.face=h,u.barycoord=f}return u}class xh extends ye{constructor(t=null,e=1,n=1,s,r,a,o,c,l=_e,u=_e,f,h){super(null,a,o,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hr=new L,Mh=new L,Sh=new It;class zn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=hr.subVectors(n,e).cross(Mh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(hr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Sh.getNormalMatrix(t),s=this.coplanarPoint(hr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new Is,Eh=new Et(.5,.5),hs=new L;class Ia{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,a=new zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ze,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],p=r[7],_=r[8],S=r[9],m=r[10],d=r[11],M=r[12],T=r[13],y=r[14],R=r[15];if(s[0].setComponents(l-a,p-u,d-_,R-M).normalize(),s[1].setComponents(l+a,p+u,d+_,R+M).normalize(),s[2].setComponents(l+o,p+f,d+S,R+T).normalize(),s[3].setComponents(l-o,p-f,d-S,R-T).normalize(),n)s[4].setComponents(c,h,m,y).normalize(),s[5].setComponents(l-c,p-h,d-m,R-y).normalize();else if(s[4].setComponents(l-c,p-h,d-m,R-y).normalize(),e===Ze)s[5].setComponents(l+c,p+h,d+m,R+y).normalize();else if(e===zi)s[5].setComponents(c,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(t){Fn.center.set(0,0,0);const e=Eh.distanceTo(t.center);return Fn.radius=.7071067811865476+e,Fn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(hs.x=s.normal.x>0?t.max.x:t.min.x,hs.y=s.normal.y>0?t.max.y:t.min.y,hs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ua extends Ei{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yo=new ie,pa=new La,us=new Is,ds=new L;class Cl extends ve{constructor(t=new Le,e=new Ua){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(s),us.radius+=r,t.ray.intersectsSphere(us)===!1)return;yo.copy(s).invert(),pa.copy(t.ray).applyMatrix4(yo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let _=h,S=p;_<S;_++){const m=l.getX(_);ds.fromBufferAttribute(f,m),bo(ds,m,c,s,t,e,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=h,S=p;_<S;_++)ds.fromBufferAttribute(f,_),bo(ds,_,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function bo(i,t,e,n,s,r,a){const o=pa.distanceSqToPoint(i);if(o<e){const c=new L;pa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Rl extends ye{constructor(t=[],e=Xn,n,s,r,a,o,c,l,u){super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yh extends ye{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ki extends ye{constructor(t,e,n=Qe,s,r,a,o=_e,c=_e,l,u=gn,f=1){if(u!==gn&&u!==Wn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class bh extends ki{constructor(t,e=Qe,n=Xn,s,r,a=_e,o=_e,c,l=gn){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Pl extends ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wi extends Le{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(u,3)),this.setAttribute("uv",new Fe(f,2));function _(S,m,d,M,T,y,R,A,P,v,b){const $=y/P,C=R/v,z=y/2,V=R/2,X=A/2,B=P+1,H=v+1;let N=0,Q=0;const K=new L;for(let ct=0;ct<H;ct++){const pt=ct*C-V;for(let ut=0;ut<B;ut++){const Ut=ut*$-z;K[S]=Ut*M,K[m]=pt*T,K[d]=X,l.push(K.x,K.y,K.z),K[S]=0,K[m]=0,K[d]=A>0?1:-1,u.push(K.x,K.y,K.z),f.push(ut/P),f.push(1-ct/v),N+=1}}for(let ct=0;ct<v;ct++)for(let pt=0;pt<P;pt++){const ut=h+pt+B*ct,Ut=h+pt+B*(ct+1),se=h+(pt+1)+B*(ct+1),ne=h+(pt+1)+B*ct;c.push(ut,Ut,ne),c.push(Ut,se,ne),Q+=6}o.addGroup(p,Q,b),p+=Q,h+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ct("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,p=(a-u)/h;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new Et:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,s=[],r=[],a=[],o=new L,c=new ie;for(let p=0;p<=t;p++){const _=p/t;s[p]=this.getTangentAt(_,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(zt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(zt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Dl extends _n{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new Et){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,p=l-this.aY;c=h*u-p*f+this.aX,l=h*f+p*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Th extends Dl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Na(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,f){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+f)+(c-o)/f;h*=u,p*=u,s(a,o,h,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const fs=new L,ur=new Na,dr=new Na,fr=new Na;class Ll extends _n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(fs.subVectors(s[0],s[1]).add(s[0]),l=fs);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(fs.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=fs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(f),p),S=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);S<1e-4&&(S=1),_<1e-4&&(_=S),m<1e-4&&(m=S),ur.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,_,S,m),dr.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,_,S,m),fr.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,_,S,m)}else this.curveType==="catmullrom"&&(ur.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),dr.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),fr.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(ur.calc(c),dr.calc(c),fr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function To(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Ah(i,t){const e=1-i;return e*e*t}function wh(i,t){return 2*(1-i)*i*t}function Ch(i,t){return i*i*t}function Ni(i,t,e,n){return Ah(i,t)+wh(i,e)+Ch(i,n)}function Rh(i,t){const e=1-i;return e*e*e*t}function Ph(i,t){const e=1-i;return 3*e*e*i*t}function Dh(i,t){return 3*(1-i)*i*i*t}function Lh(i,t){return i*i*i*t}function Fi(i,t,e,n,s){return Rh(i,t)+Ph(i,e)+Dh(i,n)+Lh(i,s)}class Ih extends _n{constructor(t=new Et,e=new Et,n=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Et){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fi(t,s.x,r.x,a.x,o.x),Fi(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Uh extends _n{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fi(t,s.x,r.x,a.x,o.x),Fi(t,s.y,r.y,a.y,o.y),Fi(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nh extends _n{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fh extends _n{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Oh extends _n{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ni(t,s.x,r.x,a.x),Ni(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Il extends _n{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ni(t,s.x,r.x,a.x),Ni(t,s.y,r.y,a.y),Ni(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bh extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(To(o,c.x,l.x,u.x,f.x),To(o,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Et().fromArray(s))}return this}}var zh=Object.freeze({__proto__:null,ArcCurve:Th,CatmullRomCurve3:Ll,CubicBezierCurve:Ih,CubicBezierCurve3:Uh,EllipseCurve:Dl,LineCurve:Nh,LineCurve3:Fh,QuadraticBezierCurve:Oh,QuadraticBezierCurve3:Il,SplineCurve:Bh});class Us extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,f=t/o,h=e/c,p=[],_=[],S=[],m=[];for(let d=0;d<u;d++){const M=d*h-a;for(let T=0;T<l;T++){const y=T*f-r;_.push(y,-M,0),S.push(0,0,1),m.push(T/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<o;M++){const T=M+l*d,y=M+l*(d+1),R=M+1+l*(d+1),A=M+1+l*d;p.push(T,y,A),p.push(y,R,A)}this.setIndex(p),this.setAttribute("position",new Fe(_,3)),this.setAttribute("normal",new Fe(S,3)),this.setAttribute("uv",new Fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Us(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fa extends Le{constructor(t=new Il(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new L,c=new L,l=new Et;let u=new L;const f=[],h=[],p=[],_=[];S(),this.setIndex(_),this.setAttribute("position",new Fe(f,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(p,2));function S(){for(let T=0;T<e;T++)m(T);m(r===!1?e:0),M(),d()}function m(T){u=t.getPointAt(T/e,u);const y=a.normals[T],R=a.binormals[T];for(let A=0;A<=s;A++){const P=A/s*Math.PI*2,v=Math.sin(P),b=-Math.cos(P);c.x=b*y.x+v*R.x,c.y=b*y.y+v*R.y,c.z=b*y.z+v*R.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,f.push(o.x,o.y,o.z)}}function d(){for(let T=1;T<=e;T++)for(let y=1;y<=s;y++){const R=(s+1)*(T-1)+(y-1),A=(s+1)*T+(y-1),P=(s+1)*T+y,v=(s+1)*(T-1)+y;_.push(R,A,v),_.push(A,P,v)}}function M(){for(let T=0;T<=e;T++)for(let y=0;y<=s;y++)l.x=T/e,l.y=y/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Fa(new zh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Mi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Te(i){const t={};for(let e=0;e<i.length;e++){const n=Mi(i[e]);for(const s in n)t[s]=n[s]}return t}function Vh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ul(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}const kh={clone:Mi,merge:Te};var Hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hh,this.fragmentShader=Gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mi(t.uniforms),this.uniformsGroups=Vh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wh extends nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xh extends Ei{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Vt(16777215),this.specular=new Vt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Ma,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yh extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ac,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qh extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Nl extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const pr=new ie,Ao=new L,wo=new L;class $h{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=Pe,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ia,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ao.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ao),wo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wo),e.updateMatrixWorld(),pr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pr,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===zi||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ps=new L,ms=new qn,Xe=new L;class Fl extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Ze,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ps,ms,Xe),Xe.x===1&&Xe.y===1&&Xe.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ps,ms,Xe.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(ps,ms,Xe),Xe.x===1&&Xe.y===1&&Xe.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ps,ms,Xe.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new L,Co=new Et,Ro=new Et;class Ne extends Fl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ii*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vi*2*Math.atan(Math.tan(Ii*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z)}getViewSize(t,e){return this.getViewBounds(t,Co,Ro),e.subVectors(Ro,Co)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ii*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Oa extends Fl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Zh extends $h{constructor(){super(new Oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kh extends Nl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Zh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class jh extends Nl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const li=-90,ci=1;class Jh extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ne(li,ci,t,e);s.layers=this.layers,this.add(s);const r=new Ne(li,ci,t,e);r.layers=this.layers,this.add(r);const a=new Ne(li,ci,t,e);a.layers=this.layers,this.add(a);const o=new Ne(li,ci,t,e);o.layers=this.layers,this.add(o);const c=new Ne(li,ci,t,e);c.layers=this.layers,this.add(c);const l=new Ne(li,ci,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Ze)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===zi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Qh extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Po=new ie;class tu{constructor(t,e,n=0,s=1/0){this.ray=new La(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Da,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ht("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Po.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Po),this}intersectObject(t,e=!0,n=[]){return ma(t,this,n,e),n.sort(Do),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ma(t[s],this,n,e);return n.sort(Do),n}}function Do(i,t){return i.distance-t.distance}function ma(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ma(r[a],t,e,!0)}}class eu extends Yn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Ct("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Lo(i,t,e,n){const s=nu(n);switch(e){case vl:return i*t;case Ml:return i*t/s.components*s.byteLength;case ba:return i*t/s.components*s.byteLength;case vi:return i*t*2/s.components*s.byteLength;case Ta:return i*t*2/s.components*s.byteLength;case xl:return i*t*3/s.components*s.byteLength;case Ge:return i*t*4/s.components*s.byteLength;case Aa:return i*t*4/s.components*s.byteLength;case ys:case bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ts:case As:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Or:case zr:return Math.max(i,16)*Math.max(t,8)/4;case Fr:case Br:return Math.max(i,8)*Math.max(t,8)/2;case Vr:case kr:case Gr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hr:case Xr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $r:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Zr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Kr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case jr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Jr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ra:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case oa:case la:case ca:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ha:case ua:return Math.ceil(i/4)*Math.ceil(t/4)*8;case da:case fa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nu(i){switch(i){case Pe:case pl:return{byteLength:1,components:1};case Oi:case ml:case mn:return{byteLength:2,components:1};case Ea:case ya:return{byteLength:2,components:4};case Qe:case Sa:case $e:return{byteLength:4,components:1};case gl:case _l:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xa}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xa);function Ol(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function iu(i){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],S=f[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,f[h]=S)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const S=f[p];i.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var su=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ru=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,au=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ou=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,du=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_u=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Au=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ru=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Du=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ku=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$u=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ku=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ju=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ju=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ed=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,id=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ad=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,od=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,md=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_d=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Md=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ed=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ad=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ld=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,of=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,df=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ff=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_f=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Af=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Df=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,If=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ff=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nt={alphahash_fragment:su,alphahash_pars_fragment:ru,alphamap_fragment:au,alphamap_pars_fragment:ou,alphatest_fragment:lu,alphatest_pars_fragment:cu,aomap_fragment:hu,aomap_pars_fragment:uu,batching_pars_vertex:du,batching_vertex:fu,begin_vertex:pu,beginnormal_vertex:mu,bsdfs:gu,iridescence_fragment:_u,bumpmap_pars_fragment:vu,clipping_planes_fragment:xu,clipping_planes_pars_fragment:Mu,clipping_planes_pars_vertex:Su,clipping_planes_vertex:Eu,color_fragment:yu,color_pars_fragment:bu,color_pars_vertex:Tu,color_vertex:Au,common:wu,cube_uv_reflection_fragment:Cu,defaultnormal_vertex:Ru,displacementmap_pars_vertex:Pu,displacementmap_vertex:Du,emissivemap_fragment:Lu,emissivemap_pars_fragment:Iu,colorspace_fragment:Uu,colorspace_pars_fragment:Nu,envmap_fragment:Fu,envmap_common_pars_fragment:Ou,envmap_pars_fragment:Bu,envmap_pars_vertex:zu,envmap_physical_pars_fragment:Ku,envmap_vertex:Vu,fog_vertex:ku,fog_pars_vertex:Hu,fog_fragment:Gu,fog_pars_fragment:Wu,gradientmap_pars_fragment:Xu,lightmap_pars_fragment:Yu,lights_lambert_fragment:qu,lights_lambert_pars_fragment:$u,lights_pars_begin:Zu,lights_toon_fragment:ju,lights_toon_pars_fragment:Ju,lights_phong_fragment:Qu,lights_phong_pars_fragment:td,lights_physical_fragment:ed,lights_physical_pars_fragment:nd,lights_fragment_begin:id,lights_fragment_maps:sd,lights_fragment_end:rd,logdepthbuf_fragment:ad,logdepthbuf_pars_fragment:od,logdepthbuf_pars_vertex:ld,logdepthbuf_vertex:cd,map_fragment:hd,map_pars_fragment:ud,map_particle_fragment:dd,map_particle_pars_fragment:fd,metalnessmap_fragment:pd,metalnessmap_pars_fragment:md,morphinstance_vertex:gd,morphcolor_vertex:_d,morphnormal_vertex:vd,morphtarget_pars_vertex:xd,morphtarget_vertex:Md,normal_fragment_begin:Sd,normal_fragment_maps:Ed,normal_pars_fragment:yd,normal_pars_vertex:bd,normal_vertex:Td,normalmap_pars_fragment:Ad,clearcoat_normal_fragment_begin:wd,clearcoat_normal_fragment_maps:Cd,clearcoat_pars_fragment:Rd,iridescence_pars_fragment:Pd,opaque_fragment:Dd,packing:Ld,premultiplied_alpha_fragment:Id,project_vertex:Ud,dithering_fragment:Nd,dithering_pars_fragment:Fd,roughnessmap_fragment:Od,roughnessmap_pars_fragment:Bd,shadowmap_pars_fragment:zd,shadowmap_pars_vertex:Vd,shadowmap_vertex:kd,shadowmask_pars_fragment:Hd,skinbase_vertex:Gd,skinning_pars_vertex:Wd,skinning_vertex:Xd,skinnormal_vertex:Yd,specularmap_fragment:qd,specularmap_pars_fragment:$d,tonemapping_fragment:Zd,tonemapping_pars_fragment:Kd,transmission_fragment:jd,transmission_pars_fragment:Jd,uv_pars_fragment:Qd,uv_pars_vertex:tf,uv_vertex:ef,worldpos_vertex:nf,background_vert:sf,background_frag:rf,backgroundCube_vert:af,backgroundCube_frag:of,cube_vert:lf,cube_frag:cf,depth_vert:hf,depth_frag:uf,distance_vert:df,distance_frag:ff,equirect_vert:pf,equirect_frag:mf,linedashed_vert:gf,linedashed_frag:_f,meshbasic_vert:vf,meshbasic_frag:xf,meshlambert_vert:Mf,meshlambert_frag:Sf,meshmatcap_vert:Ef,meshmatcap_frag:yf,meshnormal_vert:bf,meshnormal_frag:Tf,meshphong_vert:Af,meshphong_frag:wf,meshphysical_vert:Cf,meshphysical_frag:Rf,meshtoon_vert:Pf,meshtoon_frag:Df,points_vert:Lf,points_frag:If,shadow_vert:Uf,shadow_frag:Nf,sprite_vert:Ff,sprite_frag:Of},at={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},qe={basic:{uniforms:Te([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Te([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Te([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Te([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Te([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Te([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Te([at.points,at.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Te([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Te([at.common,at.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Te([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Te([at.sprite,at.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distance:{uniforms:Te([at.common,at.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distance_vert,fragmentShader:Nt.distance_frag},shadow:{uniforms:Te([at.lights,at.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};qe.physical={uniforms:Te([qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const gs={r:0,b:0,g:0},On=new tn,Bf=new ie;function zf(i,t,e,n,s,r){const a=new Vt(0);let o=s===!0?0:1,c,l,u=null,f=0,h=null;function p(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const y=M.backgroundBlurriness>0;T=t.get(T,y)}return T}function _(M){let T=!1;const y=p(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),T=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,T){const y=p(T);y&&(y.isCubeTexture||y.mapping===Ls)?(l===void 0&&(l=new en(new Wi(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Mi(qe.backgroundCube.uniforms),vertexShader:qe.backgroundCube.vertexShader,fragmentShader:qe.backgroundCube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),On.copy(T.backgroundRotation),On.x*=-1,On.y*=-1,On.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Bf.makeRotationFromEuler(On)),l.material.toneMapped=Gt.getTransfer(y.colorSpace)!==Zt,(u!==y||f!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new en(new Us(2,2),new nn({name:"BackgroundMaterial",uniforms:Mi(qe.background.uniforms),vertexShader:qe.background.vertexShader,fragmentShader:qe.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(y.colorSpace)!==Zt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,T){M.getRGB(gs,Ul(i)),e.buffers.color.setClear(gs.r,gs.g,gs.b,T,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:_,addToRenderList:S,dispose:d}}function Vf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(C,z,V,X,B){let H=!1;const N=f(C,X,V,z);r!==N&&(r=N,l(r.object)),H=p(C,X,V,B),H&&_(C,X,V,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,y(C,z,V,X),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function f(C,z,V,X){const B=X.wireframe===!0;let H=n[z.id];H===void 0&&(H={},n[z.id]=H);const N=C.isInstancedMesh===!0?C.id:0;let Q=H[N];Q===void 0&&(Q={},H[N]=Q);let K=Q[V.id];K===void 0&&(K={},Q[V.id]=K);let ct=K[B];return ct===void 0&&(ct=h(c()),K[B]=ct),ct}function h(C){const z=[],V=[],X=[];for(let B=0;B<e;B++)z[B]=0,V[B]=0,X[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:V,attributeDivisors:X,object:C,attributes:{},index:null}}function p(C,z,V,X){const B=r.attributes,H=z.attributes;let N=0;const Q=V.getAttributes();for(const K in Q)if(Q[K].location>=0){const pt=B[K];let ut=H[K];if(ut===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(ut=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(ut=C.instanceColor)),pt===void 0||pt.attribute!==ut||ut&&pt.data!==ut.data)return!0;N++}return r.attributesNum!==N||r.index!==X}function _(C,z,V,X){const B={},H=z.attributes;let N=0;const Q=V.getAttributes();for(const K in Q)if(Q[K].location>=0){let pt=H[K];pt===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(pt=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(pt=C.instanceColor));const ut={};ut.attribute=pt,pt&&pt.data&&(ut.data=pt.data),B[K]=ut,N++}r.attributes=B,r.attributesNum=N,r.index=X}function S(){const C=r.newAttributes;for(let z=0,V=C.length;z<V;z++)C[z]=0}function m(C){d(C,0)}function d(C,z){const V=r.newAttributes,X=r.enabledAttributes,B=r.attributeDivisors;V[C]=1,X[C]===0&&(i.enableVertexAttribArray(C),X[C]=1),B[C]!==z&&(i.vertexAttribDivisor(C,z),B[C]=z)}function M(){const C=r.newAttributes,z=r.enabledAttributes;for(let V=0,X=z.length;V<X;V++)z[V]!==C[V]&&(i.disableVertexAttribArray(V),z[V]=0)}function T(C,z,V,X,B,H,N){N===!0?i.vertexAttribIPointer(C,z,V,B,H):i.vertexAttribPointer(C,z,V,X,B,H)}function y(C,z,V,X){S();const B=X.attributes,H=V.getAttributes(),N=z.defaultAttributeValues;for(const Q in H){const K=H[Q];if(K.location>=0){let ct=B[Q];if(ct===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(ct=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(ct=C.instanceColor)),ct!==void 0){const pt=ct.normalized,ut=ct.itemSize,Ut=t.get(ct);if(Ut===void 0)continue;const se=Ut.buffer,ne=Ut.type,q=Ut.bytesPerElement,nt=ne===i.INT||ne===i.UNSIGNED_INT||ct.gpuType===Sa;if(ct.isInterleavedBufferAttribute){const rt=ct.data,Lt=rt.stride,At=ct.offset;if(rt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<K.locationSize;Rt++)d(K.location+Rt,rt.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Rt=0;Rt<K.locationSize;Rt++)m(K.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let Rt=0;Rt<K.locationSize;Rt++)T(K.location+Rt,ut/K.locationSize,ne,pt,Lt*q,(At+ut/K.locationSize*Rt)*q,nt)}else{if(ct.isInstancedBufferAttribute){for(let rt=0;rt<K.locationSize;rt++)d(K.location+rt,ct.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let rt=0;rt<K.locationSize;rt++)m(K.location+rt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let rt=0;rt<K.locationSize;rt++)T(K.location+rt,ut/K.locationSize,ne,pt,ut*q,ut/K.locationSize*rt*q,nt)}}else if(N!==void 0){const pt=N[Q];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(K.location,pt);break;case 3:i.vertexAttrib3fv(K.location,pt);break;case 4:i.vertexAttrib4fv(K.location,pt);break;default:i.vertexAttrib1fv(K.location,pt)}}}}M()}function R(){b();for(const C in n){const z=n[C];for(const V in z){const X=z[V];for(const B in X){const H=X[B];for(const N in H)u(H[N].object),delete H[N];delete X[B]}}delete n[C]}}function A(C){if(n[C.id]===void 0)return;const z=n[C.id];for(const V in z){const X=z[V];for(const B in X){const H=X[B];for(const N in H)u(H[N].object),delete H[N];delete X[B]}}delete n[C.id]}function P(C){for(const z in n){const V=n[z];for(const X in V){const B=V[X];if(B[C.id]===void 0)continue;const H=B[C.id];for(const N in H)u(H[N].object),delete H[N];delete B[C.id]}}}function v(C){for(const z in n){const V=n[z],X=C.isInstancedMesh===!0?C.id:0,B=V[X];if(B!==void 0){for(const H in B){const N=B[H];for(const Q in N)u(N[Q].object),delete N[Q];delete B[H]}delete V[X],Object.keys(V).length===0&&delete n[z]}}}function b(){$(),a=!0,r!==s&&(r=s,l(r.object))}function $(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:$,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function kf(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),e.update(u,n,f))}function o(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];e.update(p,n,1)}function c(l,u,f,h){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)a(l[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,f);let _=0;for(let S=0;S<f;S++)_+=u[S]*h[S];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Hf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Ge&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const v=P===mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Pe&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==$e&&!v)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Ct("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:y,maxSamples:R,samples:A}}function Gf(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new zn,o=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const M=r?0:n,T=M*4;let y=d.clippingState||null;c.value=y,y=u(_,h,T,p);for(let R=0;R!==T;++R)y[R]=e[R];d.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,p,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=c.value,_!==!0||m===null){const d=p+S*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,y=p;T!==S;++T,y+=4)a.copy(f[T]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const Cn=4,Io=[.125,.215,.35,.446,.526,.582],kn=20,Wf=256,Ci=new Oa,Uo=new Vt;let mr=null,gr=0,_r=0,vr=!1;const Xf=new L;class No{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Xf}=r;mr=this._renderer.getRenderTarget(),gr=this._renderer.getActiveCubeFace(),_r=this._renderer.getActiveMipmapLevel(),vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mr,gr,_r),this._renderer.xr.enabled=vr,t.scissorTest=!1,hi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xn||t.mapping===_i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mr=this._renderer.getRenderTarget(),gr=this._renderer.getActiveCubeFace(),_r=this._renderer.getActiveMipmapLevel(),vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ee,minFilter:Ee,generateMipmaps:!1,type:mn,format:Ge,colorSpace:xi,depthBuffer:!1},s=Fo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fo(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Yf(r)),this._blurMaterial=$f(r,t,e),this._ggxMaterial=qf(r,t,e)}return s}_compileMaterial(t){const e=new en(new Le,t);this._renderer.compile(e,Ci)}_sceneToCubeUV(t,e,n,s,r){const c=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Uo),f.toneMapping=Ke,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new en(new Wi,new wl({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let d=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,d=!0):(m.color.copy(Uo),d=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):y===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));const R=this._cubeSize;hi(s,y*R,T>2?R:0,R,R),f.setRenderTarget(s),d&&f.render(S,c),f.render(t,c)}f.toneMapping=p,f.autoClear=h,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Xn||t.mapping===_i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;hi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ci)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=0+l*1.25,p=f*h,{_lodMax:_}=this,S=this._sizeLods[n],m=3*S*(n>_-Cn?n-_+Cn:0),d=4*(this._cubeSize-S);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=_-e,hi(r,m,d,3*S,2*S),s.setRenderTarget(r),s.render(o,Ci),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,hi(t,m,d,3*S,2*S),s.setRenderTarget(t),s.render(o,Ci)}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ht("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=l;const h=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*kn-1),S=r/_,m=isFinite(r)?1+Math.floor(u*S):kn;m>kn&&Ct(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kn}`);const d=[];let M=0;for(let P=0;P<kn;++P){const v=P/S,b=Math.exp(-v*v/2);d.push(b),P===0?M+=b:P<m&&(M+=2*b)}for(let P=0;P<d.length;P++)d[P]=d[P]/M;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:T}=this;h.dTheta.value=_,h.mipInt.value=T-n;const y=this._sizeLods[s],R=3*y*(s>T-Cn?s-T+Cn:0),A=4*(this._cubeSize-y);hi(e,R,A,3*y,2*y),c.setRenderTarget(e),c.render(f,Ci)}}function Yf(i){const t=[],e=[],n=[];let s=i;const r=i-Cn+1+Io.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Cn?c=Io[a-i+Cn-1]:a===0&&(c=0),e.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,S=3,m=2,d=1,M=new Float32Array(S*_*p),T=new Float32Array(m*_*p),y=new Float32Array(d*_*p);for(let A=0;A<p;A++){const P=A%3*2/3-1,v=A>2?0:-1,b=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];M.set(b,S*_*A),T.set(h,m*_*A);const $=[A,A,A,A,A,A];y.set($,d*_*A)}const R=new Le;R.setAttribute("position",new De(M,S)),R.setAttribute("uv",new De(T,m)),R.setAttribute("faceIndex",new De(y,d)),n.push(new en(R,null)),s>Cn&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Fo(i,t,e){const n=new je(i,t,e);return n.texture.mapping=Ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function qf(i,t,e){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ns(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function $f(i,t,e){const n=new Float32Array(kn),s=new L(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Oo(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Bo(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Ns(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Bl extends je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rl(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Wi(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ae,blending:fn});r.uniforms.tEquirect.value=e;const a=new en(s,r),o=e.minFilter;return e.minFilter===Gn&&(e.minFilter=Ee),new Jh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function Zf(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===Vs||p===ks)if(t.has(h)){const _=t.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const S=new Bl(_.height);return S.fromEquirectangularTexture(i,h),t.set(h,S),h.addEventListener("dispose",l),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,_=p===Vs||p===ks,S=p===Xn||p===_i;if(_||S){let m=e.get(h);const d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new No(i)),m=_?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return _&&M&&M.height>0||S&&M&&c(M)?(n===null&&(n=new No(i)),m=_?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Vs?h.mapping=Xn:p===ks&&(h.mapping=_i),h}function c(h){let p=0;const _=6;for(let S=0;S<_;S++)h[S]!==void 0&&p++;return p===_}function l(h){const p=h.target;p.removeEventListener("dispose",l);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Kf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ps("WebGLRenderer: "+n+" extension not supported."),s}}}function jf(i,t,e,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const p in h)t.update(h[p],i.ARRAY_BUFFER)}function l(f){const h=[],p=f.index,_=f.attributes.position;let S=0;if(_===void 0)return;if(p!==null){const M=p.array;S=p.version;for(let T=0,y=M.length;T<y;T+=3){const R=M[T+0],A=M[T+1],P=M[T+2];h.push(R,A,A,P,P,R)}}else{const M=_.array;S=_.version;for(let T=0,y=M.length/3-1;T<y;T+=3){const R=T+0,A=T+1,P=T+2;h.push(R,A,A,P,P,R)}}const m=new(_.count>=65535?Al:Tl)(h,1);m.version=S;const d=r.get(f);d&&t.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Jf(i,t,e){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,p){i.drawElements(n,p,r,h*a),e.update(p,n,1)}function l(h,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,h*a,_),e.update(p,n,_))}function u(h,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];e.update(m,n,1)}function f(h,p,_,S){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)l(h[d]/a,p[d],S[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,h,0,S,0,_);let d=0;for(let M=0;M<_;M++)d+=p[M]*S[M];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Qf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ht("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function tp(i,t,e){const n=new WeakMap,s=new ae;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let $=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",$)};var p=$;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),S===!0&&(y=2),m===!0&&(y=3);let R=o.attributes.position.count*y,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const P=new Float32Array(R*A*4*f),v=new yl(P,R,A,f);v.type=$e,v.needsUpdate=!0;const b=y*4;for(let C=0;C<f;C++){const z=d[C],V=M[C],X=T[C],B=R*A*4*C;for(let H=0;H<z.count;H++){const N=H*b;_===!0&&(s.fromBufferAttribute(z,H),P[B+N+0]=s.x,P[B+N+1]=s.y,P[B+N+2]=s.z,P[B+N+3]=0),S===!0&&(s.fromBufferAttribute(V,H),P[B+N+4]=s.x,P[B+N+5]=s.y,P[B+N+6]=s.z,P[B+N+7]=0),m===!0&&(s.fromBufferAttribute(X,H),P[B+N+8]=s.x,P[B+N+9]=s.y,P[B+N+10]=s.z,P[B+N+11]=X.itemSize===4?s.w:1)}}h={count:f,texture:v,size:new Et(R,A)},n.set(o,h),o.addEventListener("dispose",$)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const S=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function ep(i,t,e,n,s){let r=new WeakMap;function a(l){const u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const np={[al]:"LINEAR_TONE_MAPPING",[ol]:"REINHARD_TONE_MAPPING",[ll]:"CINEON_TONE_MAPPING",[cl]:"ACES_FILMIC_TONE_MAPPING",[ul]:"AGX_TONE_MAPPING",[dl]:"NEUTRAL_TONE_MAPPING",[hl]:"CUSTOM_TONE_MAPPING"};function ip(i,t,e,n,s){const r=new je(t,e,{type:i,depthBuffer:n,stencilBuffer:s}),a=new je(t,e,{type:mn,depthBuffer:!1,stencilBuffer:!1}),o=new Le;o.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Fe([0,2,0,0,2,0],2));const c=new Wh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new en(o,c),u=new Oa(-1,1,1,-1,0,1);let f=null,h=null,p=!1,_,S=null,m=[],d=!1;this.setSize=function(M,T){r.setSize(M,T),a.setSize(M,T);for(let y=0;y<m.length;y++){const R=m[y];R.setSize&&R.setSize(M,T)}},this.setEffects=function(M){m=M,d=m.length>0&&m[0].isRenderPass===!0;const T=r.width,y=r.height;for(let R=0;R<m.length;R++){const A=m[R];A.setSize&&A.setSize(T,y)}},this.begin=function(M,T){if(p||M.toneMapping===Ke&&m.length===0)return!1;if(S=T,T!==null){const y=T.width,R=T.height;(r.width!==y||r.height!==R)&&this.setSize(y,R)}return d===!1&&M.setRenderTarget(r),_=M.toneMapping,M.toneMapping=Ke,!0},this.hasRenderPass=function(){return d},this.end=function(M,T){M.toneMapping=_,p=!0;let y=r,R=a;for(let A=0;A<m.length;A++){const P=m[A];if(P.enabled!==!1&&(P.render(M,R,y,T),P.needsSwap!==!1)){const v=y;y=R,R=v}}if(f!==M.outputColorSpace||h!==M.toneMapping){f=M.outputColorSpace,h=M.toneMapping,c.defines={},Gt.getTransfer(f)===Zt&&(c.defines.SRGB_TRANSFER="");const A=np[h];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(S),M.render(l,u),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const zl=new ye,ga=new ki(1,1),Vl=new yl,kl=new rh,Hl=new Rl,zo=[],Vo=[],ko=new Float32Array(16),Ho=new Float32Array(9),Go=new Float32Array(4);function yi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=zo[s];if(r===void 0&&(r=new Float32Array(s),zo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function de(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fs(i,t){let e=Vo[t];e===void 0&&(e=new Int32Array(t),Vo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function sp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2fv(this.addr,t),de(e,t)}}function ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;i.uniform3fv(this.addr,t),de(e,t)}}function op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4fv(this.addr,t),de(e,t)}}function lp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;Go.set(n),i.uniformMatrix2fv(this.addr,!1,Go),de(e,n)}}function cp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;Ho.set(n),i.uniformMatrix3fv(this.addr,!1,Ho),de(e,n)}}function hp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;ko.set(n),i.uniformMatrix4fv(this.addr,!1,ko),de(e,n)}}function up(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2iv(this.addr,t),de(e,t)}}function fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;i.uniform3iv(this.addr,t),de(e,t)}}function pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4iv(this.addr,t),de(e,t)}}function mp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2uiv(this.addr,t),de(e,t)}}function _p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;i.uniform3uiv(this.addr,t),de(e,t)}}function vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4uiv(this.addr,t),de(e,t)}}function xp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ga.compareFunction=e.isReversedDepthBuffer()?Ca:wa,r=ga):r=zl,e.setTexture2D(t||r,s)}function Mp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kl,s)}function Sp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Hl,s)}function Ep(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vl,s)}function yp(i){switch(i){case 5126:return sp;case 35664:return rp;case 35665:return ap;case 35666:return op;case 35674:return lp;case 35675:return cp;case 35676:return hp;case 5124:case 35670:return up;case 35667:case 35671:return dp;case 35668:case 35672:return fp;case 35669:case 35673:return pp;case 5125:return mp;case 36294:return gp;case 36295:return _p;case 36296:return vp;case 35678:case 36198:case 36298:case 36306:case 35682:return xp;case 35679:case 36299:case 36307:return Mp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return Ep}}function bp(i,t){i.uniform1fv(this.addr,t)}function Tp(i,t){const e=yi(t,this.size,2);i.uniform2fv(this.addr,e)}function Ap(i,t){const e=yi(t,this.size,3);i.uniform3fv(this.addr,e)}function wp(i,t){const e=yi(t,this.size,4);i.uniform4fv(this.addr,e)}function Cp(i,t){const e=yi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rp(i,t){const e=yi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pp(i,t){const e=yi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Dp(i,t){i.uniform1iv(this.addr,t)}function Lp(i,t){i.uniform2iv(this.addr,t)}function Ip(i,t){i.uniform3iv(this.addr,t)}function Up(i,t){i.uniform4iv(this.addr,t)}function Np(i,t){i.uniform1uiv(this.addr,t)}function Fp(i,t){i.uniform2uiv(this.addr,t)}function Op(i,t){i.uniform3uiv(this.addr,t)}function Bp(i,t){i.uniform4uiv(this.addr,t)}function zp(i,t,e){const n=this.cache,s=t.length,r=Fs(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),de(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ga:a=zl;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Vp(i,t,e){const n=this.cache,s=t.length,r=Fs(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||kl,r[a])}function kp(i,t,e){const n=this.cache,s=t.length,r=Fs(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Hl,r[a])}function Hp(i,t,e){const n=this.cache,s=t.length,r=Fs(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Vl,r[a])}function Gp(i){switch(i){case 5126:return bp;case 35664:return Tp;case 35665:return Ap;case 35666:return wp;case 35674:return Cp;case 35675:return Rp;case 35676:return Pp;case 5124:case 35670:return Dp;case 35667:case 35671:return Lp;case 35668:case 35672:return Ip;case 35669:case 35673:return Up;case 5125:return Np;case 36294:return Fp;case 36295:return Op;case 36296:return Bp;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return kp;case 36289:case 36303:case 36311:case 36292:return Hp}}class Wp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yp(e.type)}}class Xp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gp(e.type)}}class Yp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const xr=/(\w+)(\])?(\[|\.)?/g;function Wo(i,t){i.seq.push(t),i.map[t.id]=t}function qp(i,t,e){const n=i.name,s=n.length;for(xr.lastIndex=0;;){const r=xr.exec(n),a=xr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Wo(e,l===void 0?new Wp(o,i,t):new Xp(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Yp(o),Wo(e,f)),e=f}}}class ws{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);qp(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Xo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const $p=37297;let Zp=0;function Kp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Yo=new It;function jp(i){Gt._getMatrix(Yo,Gt.workingColorSpace,i);const t=`mat3( ${Yo.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(i)){case Cs:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Kp(i.getShaderSource(t),o)}else return r}function Jp(i,t){const e=jp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Qp={[al]:"Linear",[ol]:"Reinhard",[ll]:"Cineon",[cl]:"ACESFilmic",[ul]:"AgX",[dl]:"Neutral",[hl]:"Custom"};function tm(i,t){const e=Qp[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _s=new L;function em(){Gt.getLuminanceCoefficients(_s);const i=_s.x.toFixed(4),t=_s.y.toFixed(4),e=_s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Li).join(`
`)}function im(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Li(i){return i!==""}function $o(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function _a(i){return i.replace(rm,om)}const am=new Map;function om(i,t){let e=Nt[t];if(e===void 0){const n=am.get(t);if(n!==void 0)e=Nt[n],Ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _a(e)}const lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ko(i){return i.replace(lm,cm)}function cm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jo(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const hm={[Es]:"SHADOWMAP_TYPE_PCF",[Pi]:"SHADOWMAP_TYPE_VSM"};function um(i){return hm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dm={[Xn]:"ENVMAP_TYPE_CUBE",[_i]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE_UV"};function fm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":dm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const pm={[_i]:"ENVMAP_MODE_REFRACTION"};function mm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":pm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gm={[Ma]:"ENVMAP_BLENDING_MULTIPLY",[yc]:"ENVMAP_BLENDING_MIX",[bc]:"ENVMAP_BLENDING_ADD"};function _m(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":gm[i.combine]||"ENVMAP_BLENDING_NONE"}function vm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function xm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=um(e),l=fm(e),u=mm(e),f=_m(e),h=vm(e),p=nm(e),_=im(r),S=s.createProgram();let m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Li).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Li).join(`
`),d.length>0&&(d+=`
`)):(m=[jo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),d=[jo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ke?"#define TONE_MAPPING":"",e.toneMapping!==Ke?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Ke?tm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Jp("linearToOutputTexel",e.outputColorSpace),em(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Li).join(`
`)),a=_a(a),a=$o(a,e),a=Zo(a,e),o=_a(o),o=$o(o,e),o=Zo(o,e),a=Ko(a),o=Ko(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===io?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=M+m+a,y=M+d+o,R=Xo(s,s.VERTEX_SHADER,T),A=Xo(s,s.FRAGMENT_SHADER,y);s.attachShader(S,R),s.attachShader(S,A),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function P(C){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(S)||"",V=s.getShaderInfoLog(R)||"",X=s.getShaderInfoLog(A)||"",B=z.trim(),H=V.trim(),N=X.trim();let Q=!0,K=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,R,A);else{const ct=qo(s,R,"vertex"),pt=qo(s,A,"fragment");Ht("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+ct+`
`+pt)}else B!==""?Ct("WebGLProgram: Program Info Log:",B):(H===""||N==="")&&(K=!1);K&&(C.diagnostics={runnable:Q,programLog:B,vertexShader:{log:H,prefix:m},fragmentShader:{log:N,prefix:d}})}s.deleteShader(R),s.deleteShader(A),v=new ws(s,S),b=sm(s,S)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let $=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=s.getProgramParameter(S,$p)),$},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zp++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=A,this}let Mm=0;class Sm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Em(t),e.set(t,n)),n}}class Em{constructor(t){this.id=Mm++,this.code=t,this.usedTimes=0}}function ym(i,t,e,n,s,r){const a=new Da,o=new Sm,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function S(v,b,$,C,z){const V=C.fog,X=z.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,N=t.get(v.envMap||B,H),Q=N&&N.mapping===Ls?N.image.height:null,K=p[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Ct("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ct=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pt=ct!==void 0?ct.length:0;let ut=0;X.morphAttributes.position!==void 0&&(ut=1),X.morphAttributes.normal!==void 0&&(ut=2),X.morphAttributes.color!==void 0&&(ut=3);let Ut,se,ne,q;if(K){const $t=qe[K];Ut=$t.vertexShader,se=$t.fragmentShader}else Ut=v.vertexShader,se=v.fragmentShader,o.update(v),ne=o.getVertexShaderID(v),q=o.getFragmentShaderID(v);const nt=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),Lt=z.isInstancedMesh===!0,At=z.isBatchedMesh===!0,Rt=!!v.map,fe=!!v.matcap,kt=!!N,qt=!!v.aoMap,Jt=!!v.lightMap,Ft=!!v.bumpMap,oe=!!v.normalMap,w=!!v.displacementMap,ce=!!v.emissiveMap,Yt=!!v.metalnessMap,te=!!v.roughnessMap,Mt=v.anisotropy>0,E=v.clearcoat>0,g=v.dispersion>0,I=v.iridescence>0,Y=v.sheen>0,Z=v.transmission>0,W=Mt&&!!v.anisotropyMap,mt=E&&!!v.clearcoatMap,it=E&&!!v.clearcoatNormalMap,Tt=E&&!!v.clearcoatRoughnessMap,wt=I&&!!v.iridescenceMap,j=I&&!!v.iridescenceThicknessMap,tt=Y&&!!v.sheenColorMap,gt=Y&&!!v.sheenRoughnessMap,vt=!!v.specularMap,ht=!!v.specularColorMap,Ot=!!v.specularIntensityMap,D=Z&&!!v.transmissionMap,st=Z&&!!v.thicknessMap,et=!!v.gradientMap,ft=!!v.alphaMap,J=v.alphaTest>0,G=!!v.alphaHash,_t=!!v.extensions;let Pt=Ke;v.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Pt=i.toneMapping);const ee={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:Ut,fragmentShader:se,defines:v.defines,customVertexShaderID:ne,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:At,batchingColor:At&&z._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&z.instanceColor!==null,instancingMorph:Lt&&z.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:xi,alphaToCoverage:!!v.alphaToCoverage,map:Rt,matcap:fe,envMap:kt,envMapMode:kt&&N.mapping,envMapCubeUVHeight:Q,aoMap:qt,lightMap:Jt,bumpMap:Ft,normalMap:oe,displacementMap:w,emissiveMap:ce,normalMapObjectSpace:oe&&v.normalMapType===wc,normalMapTangentSpace:oe&&v.normalMapType===Sl,metalnessMap:Yt,roughnessMap:te,anisotropy:Mt,anisotropyMap:W,clearcoat:E,clearcoatMap:mt,clearcoatNormalMap:it,clearcoatRoughnessMap:Tt,dispersion:g,iridescence:I,iridescenceMap:wt,iridescenceThicknessMap:j,sheen:Y,sheenColorMap:tt,sheenRoughnessMap:gt,specularMap:vt,specularColorMap:ht,specularIntensityMap:Ot,transmission:Z,transmissionMap:D,thicknessMap:st,gradientMap:et,opaque:v.transparent===!1&&v.blending===pi&&v.alphaToCoverage===!1,alphaMap:ft,alphaTest:J,alphaHash:G,combine:v.combine,mapUv:Rt&&_(v.map.channel),aoMapUv:qt&&_(v.aoMap.channel),lightMapUv:Jt&&_(v.lightMap.channel),bumpMapUv:Ft&&_(v.bumpMap.channel),normalMapUv:oe&&_(v.normalMap.channel),displacementMapUv:w&&_(v.displacementMap.channel),emissiveMapUv:ce&&_(v.emissiveMap.channel),metalnessMapUv:Yt&&_(v.metalnessMap.channel),roughnessMapUv:te&&_(v.roughnessMap.channel),anisotropyMapUv:W&&_(v.anisotropyMap.channel),clearcoatMapUv:mt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:j&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(v.sheenRoughnessMap.channel),specularMapUv:vt&&_(v.specularMap.channel),specularColorMapUv:ht&&_(v.specularColorMap.channel),specularIntensityMapUv:Ot&&_(v.specularIntensityMap.channel),transmissionMapUv:D&&_(v.transmissionMap.channel),thicknessMapUv:st&&_(v.thicknessMap.channel),alphaMapUv:ft&&_(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(oe||Mt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(Rt||ft),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||X.attributes.normal===void 0&&oe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:rt,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:ut,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&$.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Rt&&v.map.isVideoTexture===!0&&Gt.getTransfer(v.map.colorSpace)===Zt,decodeVideoTextureEmissive:ce&&v.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(v.emissiveMap.colorSpace)===Zt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===un,flipSided:v.side===Ae,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_t&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&v.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ee.vertexUv1s=c.has(1),ee.vertexUv2s=c.has(2),ee.vertexUv3s=c.has(3),c.clear(),ee}function m(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const $ in v.defines)b.push($),b.push(v.defines[$]);return v.isRawShaderMaterial===!1&&(d(b,v),M(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function d(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function M(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),v.push(a.mask)}function T(v){const b=p[v.type];let $;if(b){const C=qe[b];$=kh.clone(C.uniforms)}else $=v.uniforms;return $}function y(v,b){let $=u.get(b);return $!==void 0?++$.usedTimes:($=new xm(i,b,v,s),l.push($),u.set(b,$)),$}function R(v){if(--v.usedTimes===0){const b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function P(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:T,acquireProgram:y,releaseProgram:R,releaseShaderCache:A,programs:l,dispose:P}}function bm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Tm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Jo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qo(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,_,S,m,d){let M=i[t];return M===void 0?(M={id:h.id,object:h,geometry:p,material:_,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:d},i[t]=M):(M.id=h.id,M.object=h,M.geometry=p,M.material=_,M.materialVariant=a(h),M.groupOrder=S,M.renderOrder=h.renderOrder,M.z=m,M.group=d),t++,M}function c(h,p,_,S,m,d){const M=o(h,p,_,S,m,d);_.transmission>0?n.push(M):_.transparent===!0?s.push(M):e.push(M)}function l(h,p,_,S,m,d){const M=o(h,p,_,S,m,d);_.transmission>0?n.unshift(M):_.transparent===!0?s.unshift(M):e.unshift(M)}function u(h,p){e.length>1&&e.sort(h||Tm),n.length>1&&n.sort(p||Jo),s.length>1&&s.sort(p||Jo)}function f(){for(let h=t,p=i.length;h<p;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function Am(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Qo,i.set(n,[a])):s>=r.length?(a=new Qo,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function wm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Vt};break;case"SpotLight":e={position:new L,direction:new L,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Cm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Rm=0;function Pm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Dm(i){const t=new wm,e=Cm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new ie,a=new ie;function o(l){let u=0,f=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,_=0,S=0,m=0,d=0,M=0,T=0,y=0,R=0,A=0,P=0;l.sort(Pm);for(let b=0,$=l.length;b<$;b++){const C=l[b],z=C.color,V=C.intensity,X=C.distance;let B=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===vi?B=C.shadow.map.texture:B=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=z.r*V,f+=z.g*V,h+=z.b*V;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],V);P++}else if(C.isDirectionalLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const N=C.shadow,Q=e.get(C);Q.shadowIntensity=N.intensity,Q.shadowBias=N.bias,Q.shadowNormalBias=N.normalBias,Q.shadowRadius=N.radius,Q.shadowMapSize=N.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=B,n.directionalShadowMatrix[p]=C.shadow.matrix,M++}n.directional[p]=H,p++}else if(C.isSpotLight){const H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(z).multiplyScalar(V),H.distance=X,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[S]=H;const N=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,N.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[S]=N.matrix,C.castShadow){const Q=e.get(C);Q.shadowIntensity=N.intensity,Q.shadowBias=N.bias,Q.shadowNormalBias=N.normalBias,Q.shadowRadius=N.radius,Q.shadowMapSize=N.mapSize,n.spotShadow[S]=Q,n.spotShadowMap[S]=B,y++}S++}else if(C.isRectAreaLight){const H=t.get(C);H.color.copy(z).multiplyScalar(V),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=H,m++}else if(C.isPointLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const N=C.shadow,Q=e.get(C);Q.shadowIntensity=N.intensity,Q.shadowBias=N.bias,Q.shadowNormalBias=N.normalBias,Q.shadowRadius=N.radius,Q.shadowMapSize=N.mapSize,Q.shadowCameraNear=N.camera.near,Q.shadowCameraFar=N.camera.far,n.pointShadow[_]=Q,n.pointShadowMap[_]=B,n.pointShadowMatrix[_]=C.shadow.matrix,T++}n.point[_]=H,_++}else if(C.isHemisphereLight){const H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(V),H.groundColor.copy(C.groundColor).multiplyScalar(V),n.hemi[d]=H,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const v=n.hash;(v.directionalLength!==p||v.pointLength!==_||v.spotLength!==S||v.rectAreaLength!==m||v.hemiLength!==d||v.numDirectionalShadows!==M||v.numPointShadows!==T||v.numSpotShadows!==y||v.numSpotMaps!==R||v.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,v.directionalLength=p,v.pointLength=_,v.spotLength=S,v.rectAreaLength=m,v.hemiLength=d,v.numDirectionalShadows=M,v.numPointShadows=T,v.numSpotShadows=y,v.numSpotMaps=R,v.numLightProbes=P,n.version=Rm++)}function c(l,u){let f=0,h=0,p=0,_=0,S=0;const m=u.matrixWorldInverse;for(let d=0,M=l.length;d<M;d++){const T=l[d];if(T.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(T.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const y=n.hemi[S];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),S++}}}return{setup:o,setupView:c,state:n}}function tl(i){const t=new Dm(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Lm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new tl(i),t.set(s,[o])):r>=a.length?(o=new tl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Um=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Nm=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Fm=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],el=new ie,Ri=new L,Mr=new L;function Om(i,t,e){let n=new Ia;const s=new Et,r=new Et,a=new ae,o=new Yh,c=new qh,l={},u=e.maxTextureSize,f={[Pn]:Ae,[Ae]:Pn,[un]:un},h=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Im,fragmentShader:Um}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Le;_.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new en(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Es;let d=this.type;this.render=function(A,P,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===sc&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Es);const b=i.getRenderTarget(),$=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),z=i.state;z.setBlending(fn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=d!==this.type;V&&P.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(B=>B.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,B=A.length;X<B;X++){const H=A[X],N=H.shadow;if(N===void 0){Ct("WebGLShadowMap:",H,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const Q=N.getFrameExtents();s.multiply(Q),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,N.mapSize.y=r.y));const K=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=K,N.map===null||V===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Pi){if(H.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new je(s.x,s.y,{format:vi,type:mn,minFilter:Ee,magFilter:Ee,generateMipmaps:!1}),N.map.texture.name=H.name+".shadowMap",N.map.depthTexture=new ki(s.x,s.y,$e),N.map.depthTexture.name=H.name+".shadowMapDepth",N.map.depthTexture.format=gn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=_e,N.map.depthTexture.magFilter=_e}else H.isPointLight?(N.map=new Bl(s.x),N.map.depthTexture=new bh(s.x,Qe)):(N.map=new je(s.x,s.y),N.map.depthTexture=new ki(s.x,s.y,Qe)),N.map.depthTexture.name=H.name+".shadowMap",N.map.depthTexture.format=gn,this.type===Es?(N.map.depthTexture.compareFunction=K?Ca:wa,N.map.depthTexture.minFilter=Ee,N.map.depthTexture.magFilter=Ee):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=_e,N.map.depthTexture.magFilter=_e);N.camera.updateProjectionMatrix()}const ct=N.map.isWebGLCubeRenderTarget?6:1;for(let pt=0;pt<ct;pt++){if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,pt),i.clear();else{pt===0&&(i.setRenderTarget(N.map),i.clear());const ut=N.getViewport(pt);a.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),z.viewport(a)}if(H.isPointLight){const ut=N.camera,Ut=N.matrix,se=H.distance||ut.far;se!==ut.far&&(ut.far=se,ut.updateProjectionMatrix()),Ri.setFromMatrixPosition(H.matrixWorld),ut.position.copy(Ri),Mr.copy(ut.position),Mr.add(Nm[pt]),ut.up.copy(Fm[pt]),ut.lookAt(Mr),ut.updateMatrixWorld(),Ut.makeTranslation(-Ri.x,-Ri.y,-Ri.z),el.multiplyMatrices(ut.projectionMatrix,ut.matrixWorldInverse),N._frustum.setFromProjectionMatrix(el,ut.coordinateSystem,ut.reversedDepth)}else N.updateMatrices(H);n=N.getFrustum(),y(P,v,N.camera,H,this.type)}N.isPointLightShadow!==!0&&this.type===Pi&&M(N,v),N.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,$,C)};function M(A,P){const v=t.update(S);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new je(s.x,s.y,{format:vi,type:mn})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,v,h,S,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,v,p,S,null)}function T(A,P,v,b){let $=null;const C=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)$=C;else if($=v.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const z=$.uuid,V=P.uuid;let X=l[z];X===void 0&&(X={},l[z]=X);let B=X[V];B===void 0&&(B=$.clone(),X[V]=B,P.addEventListener("dispose",R)),$=B}if($.visible=P.visible,$.wireframe=P.wireframe,b===Pi?$.side=P.shadowSide!==null?P.shadowSide:P.side:$.side=P.shadowSide!==null?P.shadowSide:f[P.side],$.alphaMap=P.alphaMap,$.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,$.map=P.map,$.clipShadows=P.clipShadows,$.clippingPlanes=P.clippingPlanes,$.clipIntersection=P.clipIntersection,$.displacementMap=P.displacementMap,$.displacementScale=P.displacementScale,$.displacementBias=P.displacementBias,$.wireframeLinewidth=P.wireframeLinewidth,$.linewidth=P.linewidth,v.isPointLight===!0&&$.isMeshDistanceMaterial===!0){const z=i.properties.get($);z.light=v}return $}function y(A,P,v,b,$){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&$===Pi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const V=t.update(A),X=A.material;if(Array.isArray(X)){const B=V.groups;for(let H=0,N=B.length;H<N;H++){const Q=B[H],K=X[Q.materialIndex];if(K&&K.visible){const ct=T(A,K,b,$);A.onBeforeShadow(i,A,P,v,V,ct,Q),i.renderBufferDirect(v,null,V,ct,A,Q),A.onAfterShadow(i,A,P,v,V,ct,Q)}}}else if(X.visible){const B=T(A,X,b,$);A.onBeforeShadow(i,A,P,v,V,B,null),i.renderBufferDirect(v,null,V,B,A,null),A.onAfterShadow(i,A,P,v,V,B,null)}}const z=A.children;for(let V=0,X=z.length;V<X;V++)y(z[V],P,v,b,$)}function R(A){A.target.removeEventListener("dispose",R);for(const v in l){const b=l[v],$=A.target.uuid;$ in b&&(b[$].dispose(),delete b[$])}}}function Bm(i,t){function e(){let D=!1;const st=new ae;let et=null;const ft=new ae(0,0,0,0);return{setMask:function(J){et!==J&&!D&&(i.colorMask(J,J,J,J),et=J)},setLocked:function(J){D=J},setClear:function(J,G,_t,Pt,ee){ee===!0&&(J*=Pt,G*=Pt,_t*=Pt),st.set(J,G,_t,Pt),ft.equals(st)===!1&&(i.clearColor(J,G,_t,Pt),ft.copy(st))},reset:function(){D=!1,et=null,ft.set(-1,0,0,0)}}}function n(){let D=!1,st=!1,et=null,ft=null,J=null;return{setReversed:function(G){if(st!==G){const _t=t.get("EXT_clip_control");G?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),st=G;const Pt=J;J=null,this.setClear(Pt)}},getReversed:function(){return st},setTest:function(G){G?nt(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(G){et!==G&&!D&&(i.depthMask(G),et=G)},setFunc:function(G){if(st&&(G=Oc[G]),ft!==G){switch(G){case wr:i.depthFunc(i.NEVER);break;case Cr:i.depthFunc(i.ALWAYS);break;case Rr:i.depthFunc(i.LESS);break;case gi:i.depthFunc(i.LEQUAL);break;case Pr:i.depthFunc(i.EQUAL);break;case Dr:i.depthFunc(i.GEQUAL);break;case Lr:i.depthFunc(i.GREATER);break;case Ir:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=G}},setLocked:function(G){D=G},setClear:function(G){J!==G&&(J=G,st&&(G=1-G),i.clearDepth(G))},reset:function(){D=!1,et=null,ft=null,J=null,st=!1}}}function s(){let D=!1,st=null,et=null,ft=null,J=null,G=null,_t=null,Pt=null,ee=null;return{setTest:function($t){D||($t?nt(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function($t){st!==$t&&!D&&(i.stencilMask($t),st=$t)},setFunc:function($t,sn,rn){(et!==$t||ft!==sn||J!==rn)&&(i.stencilFunc($t,sn,rn),et=$t,ft=sn,J=rn)},setOp:function($t,sn,rn){(G!==$t||_t!==sn||Pt!==rn)&&(i.stencilOp($t,sn,rn),G=$t,_t=sn,Pt=rn)},setLocked:function($t){D=$t},setClear:function($t){ee!==$t&&(i.clearStencil($t),ee=$t)},reset:function(){D=!1,st=null,et=null,ft=null,J=null,G=null,_t=null,Pt=null,ee=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,p=[],_=null,S=!1,m=null,d=null,M=null,T=null,y=null,R=null,A=null,P=new Vt(0,0,0),v=0,b=!1,$=null,C=null,z=null,V=null,X=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,N=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=N>=1):Q.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=N>=2);let K=null,ct={};const pt=i.getParameter(i.SCISSOR_BOX),ut=i.getParameter(i.VIEWPORT),Ut=new ae().fromArray(pt),se=new ae().fromArray(ut);function ne(D,st,et,ft){const J=new Uint8Array(4),G=i.createTexture();i.bindTexture(D,G),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _t=0;_t<et;_t++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(st+_t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return G}const q={};q[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(gi),Ft(!1),oe(ja),nt(i.CULL_FACE),qt(fn);function nt(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function rt(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Lt(D,st){return f[D]!==st?(i.bindFramebuffer(D,st),f[D]=st,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=st),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=st),!0):!1}function At(D,st){let et=p,ft=!1;if(D){et=h.get(st),et===void 0&&(et=[],h.set(st,et));const J=D.textures;if(et.length!==J.length||et[0]!==i.COLOR_ATTACHMENT0){for(let G=0,_t=J.length;G<_t;G++)et[G]=i.COLOR_ATTACHMENT0+G;et.length=J.length,ft=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,ft=!0);ft&&i.drawBuffers(et)}function Rt(D){return _!==D?(i.useProgram(D),_=D,!0):!1}const fe={[Vn]:i.FUNC_ADD,[ac]:i.FUNC_SUBTRACT,[oc]:i.FUNC_REVERSE_SUBTRACT};fe[lc]=i.MIN,fe[cc]=i.MAX;const kt={[hc]:i.ZERO,[uc]:i.ONE,[dc]:i.SRC_COLOR,[Tr]:i.SRC_ALPHA,[vc]:i.SRC_ALPHA_SATURATE,[gc]:i.DST_COLOR,[pc]:i.DST_ALPHA,[fc]:i.ONE_MINUS_SRC_COLOR,[Ar]:i.ONE_MINUS_SRC_ALPHA,[_c]:i.ONE_MINUS_DST_COLOR,[mc]:i.ONE_MINUS_DST_ALPHA,[xc]:i.CONSTANT_COLOR,[Mc]:i.ONE_MINUS_CONSTANT_COLOR,[Sc]:i.CONSTANT_ALPHA,[Ec]:i.ONE_MINUS_CONSTANT_ALPHA};function qt(D,st,et,ft,J,G,_t,Pt,ee,$t){if(D===fn){S===!0&&(rt(i.BLEND),S=!1);return}if(S===!1&&(nt(i.BLEND),S=!0),D!==rc){if(D!==m||$t!==b){if((d!==Vn||y!==Vn)&&(i.blendEquation(i.FUNC_ADD),d=Vn,y=Vn),$t)switch(D){case pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFunc(i.ONE,i.ONE);break;case Qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case to:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ht("WebGLState: Invalid blending: ",D);break}else switch(D){case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Qa:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case to:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",D);break}M=null,T=null,R=null,A=null,P.set(0,0,0),v=0,m=D,b=$t}return}J=J||st,G=G||et,_t=_t||ft,(st!==d||J!==y)&&(i.blendEquationSeparate(fe[st],fe[J]),d=st,y=J),(et!==M||ft!==T||G!==R||_t!==A)&&(i.blendFuncSeparate(kt[et],kt[ft],kt[G],kt[_t]),M=et,T=ft,R=G,A=_t),(Pt.equals(P)===!1||ee!==v)&&(i.blendColor(Pt.r,Pt.g,Pt.b,ee),P.copy(Pt),v=ee),m=D,b=!1}function Jt(D,st){D.side===un?rt(i.CULL_FACE):nt(i.CULL_FACE);let et=D.side===Ae;st&&(et=!et),Ft(et),D.blending===pi&&D.transparent===!1?qt(fn):qt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const ft=D.stencilWrite;o.setTest(ft),ft&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ce(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(D){$!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),$=D)}function oe(D){D!==nc?(nt(i.CULL_FACE),D!==C&&(D===ja?i.cullFace(i.BACK):D===ic?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),C=D}function w(D){D!==z&&(H&&i.lineWidth(D),z=D)}function ce(D,st,et){D?(nt(i.POLYGON_OFFSET_FILL),(V!==st||X!==et)&&(V=st,X=et,a.getReversed()&&(st=-st),i.polygonOffset(st,et))):rt(i.POLYGON_OFFSET_FILL)}function Yt(D){D?nt(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function te(D){D===void 0&&(D=i.TEXTURE0+B-1),K!==D&&(i.activeTexture(D),K=D)}function Mt(D,st,et){et===void 0&&(K===null?et=i.TEXTURE0+B-1:et=K);let ft=ct[et];ft===void 0&&(ft={type:void 0,texture:void 0},ct[et]=ft),(ft.type!==D||ft.texture!==st)&&(K!==et&&(i.activeTexture(et),K=et),i.bindTexture(D,st||q[D]),ft.type=D,ft.texture=st)}function E(){const D=ct[K];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function Y(){try{i.texSubImage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function Z(){try{i.texSubImage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function mt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function it(){try{i.texStorage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function Tt(){try{i.texStorage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function wt(){try{i.texImage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function j(){try{i.texImage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function tt(D){Ut.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ut.copy(D))}function gt(D){se.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),se.copy(D))}function vt(D,st){let et=l.get(st);et===void 0&&(et=new WeakMap,l.set(st,et));let ft=et.get(D);ft===void 0&&(ft=i.getUniformBlockIndex(st,D.name),et.set(D,ft))}function ht(D,st){const ft=l.get(st).get(D);c.get(st)!==ft&&(i.uniformBlockBinding(st,ft,D.__bindingPointIndex),c.set(st,ft))}function Ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},K=null,ct={},f={},h=new WeakMap,p=[],_=null,S=!1,m=null,d=null,M=null,T=null,y=null,R=null,A=null,P=new Vt(0,0,0),v=0,b=!1,$=null,C=null,z=null,V=null,X=null,Ut.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:rt,bindFramebuffer:Lt,drawBuffers:At,useProgram:Rt,setBlending:qt,setMaterial:Jt,setFlipSided:Ft,setCullFace:oe,setLineWidth:w,setPolygonOffset:ce,setScissorTest:Yt,activeTexture:te,bindTexture:Mt,unbindTexture:E,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:wt,texImage3D:j,updateUBOMapping:vt,uniformBlockBinding:ht,texStorage2D:it,texStorage3D:Tt,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:W,compressedTexSubImage3D:mt,scissor:tt,viewport:gt,reset:Ot}}function zm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Et,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,g){return p?new OffscreenCanvas(E,g):Rs("canvas")}function S(E,g,I){let Y=1;const Z=Mt(E);if((Z.width>I||Z.height>I)&&(Y=I/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const W=Math.floor(Y*Z.width),mt=Math.floor(Y*Z.height);f===void 0&&(f=_(W,mt));const it=g?_(W,mt):f;return it.width=W,it.height=mt,it.getContext("2d").drawImage(E,0,0,W,mt),Ct("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+W+"x"+mt+")."),it}else return"data"in E&&Ct("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function m(E){return E.generateMipmaps}function d(E){i.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,g,I,Y,Z=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let W=g;if(g===i.RED&&(I===i.FLOAT&&(W=i.R32F),I===i.HALF_FLOAT&&(W=i.R16F),I===i.UNSIGNED_BYTE&&(W=i.R8)),g===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(W=i.R8UI),I===i.UNSIGNED_SHORT&&(W=i.R16UI),I===i.UNSIGNED_INT&&(W=i.R32UI),I===i.BYTE&&(W=i.R8I),I===i.SHORT&&(W=i.R16I),I===i.INT&&(W=i.R32I)),g===i.RG&&(I===i.FLOAT&&(W=i.RG32F),I===i.HALF_FLOAT&&(W=i.RG16F),I===i.UNSIGNED_BYTE&&(W=i.RG8)),g===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(W=i.RG8UI),I===i.UNSIGNED_SHORT&&(W=i.RG16UI),I===i.UNSIGNED_INT&&(W=i.RG32UI),I===i.BYTE&&(W=i.RG8I),I===i.SHORT&&(W=i.RG16I),I===i.INT&&(W=i.RG32I)),g===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(W=i.RGB8UI),I===i.UNSIGNED_SHORT&&(W=i.RGB16UI),I===i.UNSIGNED_INT&&(W=i.RGB32UI),I===i.BYTE&&(W=i.RGB8I),I===i.SHORT&&(W=i.RGB16I),I===i.INT&&(W=i.RGB32I)),g===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),I===i.UNSIGNED_INT&&(W=i.RGBA32UI),I===i.BYTE&&(W=i.RGBA8I),I===i.SHORT&&(W=i.RGBA16I),I===i.INT&&(W=i.RGBA32I)),g===i.RGB&&(I===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),g===i.RGBA){const mt=Z?Cs:Gt.getTransfer(Y);I===i.FLOAT&&(W=i.RGBA32F),I===i.HALF_FLOAT&&(W=i.RGBA16F),I===i.UNSIGNED_BYTE&&(W=mt===Zt?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function y(E,g){let I;return E?g===null||g===Qe||g===Bi?I=i.DEPTH24_STENCIL8:g===$e?I=i.DEPTH32F_STENCIL8:g===Oi&&(I=i.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Qe||g===Bi?I=i.DEPTH_COMPONENT24:g===$e?I=i.DEPTH_COMPONENT32F:g===Oi&&(I=i.DEPTH_COMPONENT16),I}function R(E,g){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==_e&&E.minFilter!==Ee?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function A(E){const g=E.target;g.removeEventListener("dispose",A),v(g),g.isVideoTexture&&u.delete(g)}function P(E){const g=E.target;g.removeEventListener("dispose",P),$(g)}function v(E){const g=n.get(E);if(g.__webglInit===void 0)return;const I=E.source,Y=h.get(I);if(Y){const Z=Y[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(E),Object.keys(Y).length===0&&h.delete(I)}n.remove(E)}function b(E){const g=n.get(E);i.deleteTexture(g.__webglTexture);const I=E.source,Y=h.get(I);delete Y[g.__cacheKey],a.memory.textures--}function $(E){const g=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let Z=0;Z<g.__webglFramebuffer[Y].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[Y][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[Y]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=E.textures;for(let Y=0,Z=I.length;Y<Z;Y++){const W=n.get(I[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(I[Y])}n.remove(E)}let C=0;function z(){C=0}function V(){const E=C;return E>=s.maxTextures&&Ct("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),C+=1,E}function X(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function B(E,g){const I=n.get(E);if(E.isVideoTexture&&Yt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&I.__version!==E.version){const Y=E.image;if(Y===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{q(I,E,g);return}}else E.isExternalTexture&&(I.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+g)}function H(E,g){const I=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){q(I,E,g);return}else E.isExternalTexture&&(I.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+g)}function N(E,g){const I=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){q(I,E,g);return}e.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+g)}function Q(E,g){const I=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&I.__version!==E.version){nt(I,E,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+g)}const K={[Ur]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[Nr]:i.MIRRORED_REPEAT},ct={[_e]:i.NEAREST,[Tc]:i.NEAREST_MIPMAP_NEAREST,[qi]:i.NEAREST_MIPMAP_LINEAR,[Ee]:i.LINEAR,[Hs]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},pt={[Cc]:i.NEVER,[Ic]:i.ALWAYS,[Rc]:i.LESS,[wa]:i.LEQUAL,[Pc]:i.EQUAL,[Ca]:i.GEQUAL,[Dc]:i.GREATER,[Lc]:i.NOTEQUAL};function ut(E,g){if(g.type===$e&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ee||g.magFilter===Hs||g.magFilter===qi||g.magFilter===Gn||g.minFilter===Ee||g.minFilter===Hs||g.minFilter===qi||g.minFilter===Gn)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,K[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,K[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,K[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ct[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ct[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,pt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===_e||g.minFilter!==qi&&g.minFilter!==Gn||g.type===$e&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ut(E,g){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",A));const Y=g.source;let Z=h.get(Y);Z===void 0&&(Z={},h.set(Y,Z));const W=X(g);if(W!==E.__cacheKey){Z[W]===void 0&&(Z[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,I=!0),Z[W].usedTimes++;const mt=Z[E.__cacheKey];mt!==void 0&&(Z[E.__cacheKey].usedTimes--,mt.usedTimes===0&&b(g)),E.__cacheKey=W,E.__webglTexture=Z[W].texture}return I}function se(E,g,I){return Math.floor(Math.floor(E/I)/g)}function ne(E,g,I,Y){const W=E.updateRanges;if(W.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,I,Y,g.data);else{W.sort((j,tt)=>j.start-tt.start);let mt=0;for(let j=1;j<W.length;j++){const tt=W[mt],gt=W[j],vt=tt.start+tt.count,ht=se(gt.start,g.width,4),Ot=se(tt.start,g.width,4);gt.start<=vt+1&&ht===Ot&&se(gt.start+gt.count-1,g.width,4)===ht?tt.count=Math.max(tt.count,gt.start+gt.count-tt.start):(++mt,W[mt]=gt)}W.length=mt+1;const it=i.getParameter(i.UNPACK_ROW_LENGTH),Tt=i.getParameter(i.UNPACK_SKIP_PIXELS),wt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let j=0,tt=W.length;j<tt;j++){const gt=W[j],vt=Math.floor(gt.start/4),ht=Math.ceil(gt.count/4),Ot=vt%g.width,D=Math.floor(vt/g.width),st=ht,et=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,Ot,D,st,et,I,Y,g.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,it),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,wt)}}function q(E,g,I){let Y=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=i.TEXTURE_3D);const Z=Ut(E,g),W=g.source;e.bindTexture(Y,E.__webglTexture,i.TEXTURE0+I);const mt=n.get(W);if(W.version!==mt.__version||Z===!0){e.activeTexture(i.TEXTURE0+I);const it=Gt.getPrimaries(Gt.workingColorSpace),Tt=g.colorSpace===wn?null:Gt.getPrimaries(g.colorSpace),wt=g.colorSpace===wn||it===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let j=S(g.image,!1,s.maxTextureSize);j=te(g,j);const tt=r.convert(g.format,g.colorSpace),gt=r.convert(g.type);let vt=T(g.internalFormat,tt,gt,g.colorSpace,g.isVideoTexture);ut(Y,g);let ht;const Ot=g.mipmaps,D=g.isVideoTexture!==!0,st=mt.__version===void 0||Z===!0,et=W.dataReady,ft=R(g,j);if(g.isDepthTexture)vt=y(g.format===Wn,g.type),st&&(D?e.texStorage2D(i.TEXTURE_2D,1,vt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,vt,j.width,j.height,0,tt,gt,null));else if(g.isDataTexture)if(Ot.length>0){D&&st&&e.texStorage2D(i.TEXTURE_2D,ft,vt,Ot[0].width,Ot[0].height);for(let J=0,G=Ot.length;J<G;J++)ht=Ot[J],D?et&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ht.width,ht.height,tt,gt,ht.data):e.texImage2D(i.TEXTURE_2D,J,vt,ht.width,ht.height,0,tt,gt,ht.data);g.generateMipmaps=!1}else D?(st&&e.texStorage2D(i.TEXTURE_2D,ft,vt,j.width,j.height),et&&ne(g,j,tt,gt)):e.texImage2D(i.TEXTURE_2D,0,vt,j.width,j.height,0,tt,gt,j.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,vt,Ot[0].width,Ot[0].height,j.depth);for(let J=0,G=Ot.length;J<G;J++)if(ht=Ot[J],g.format!==Ge)if(tt!==null)if(D){if(et)if(g.layerUpdates.size>0){const _t=Lo(ht.width,ht.height,g.format,g.type);for(const Pt of g.layerUpdates){const ee=ht.data.subarray(Pt*_t/ht.data.BYTES_PER_ELEMENT,(Pt+1)*_t/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Pt,ht.width,ht.height,1,tt,ee)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ht.width,ht.height,j.depth,tt,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,vt,ht.width,ht.height,j.depth,0,ht.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?et&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ht.width,ht.height,j.depth,tt,gt,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,vt,ht.width,ht.height,j.depth,0,tt,gt,ht.data)}else{D&&st&&e.texStorage2D(i.TEXTURE_2D,ft,vt,Ot[0].width,Ot[0].height);for(let J=0,G=Ot.length;J<G;J++)ht=Ot[J],g.format!==Ge?tt!==null?D?et&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ht.width,ht.height,tt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,J,vt,ht.width,ht.height,0,ht.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?et&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ht.width,ht.height,tt,gt,ht.data):e.texImage2D(i.TEXTURE_2D,J,vt,ht.width,ht.height,0,tt,gt,ht.data)}else if(g.isDataArrayTexture)if(D){if(st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,vt,j.width,j.height,j.depth),et)if(g.layerUpdates.size>0){const J=Lo(j.width,j.height,g.format,g.type);for(const G of g.layerUpdates){const _t=j.data.subarray(G*J/j.data.BYTES_PER_ELEMENT,(G+1)*J/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,G,j.width,j.height,1,tt,gt,_t)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,tt,gt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,j.width,j.height,j.depth,0,tt,gt,j.data);else if(g.isData3DTexture)D?(st&&e.texStorage3D(i.TEXTURE_3D,ft,vt,j.width,j.height,j.depth),et&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,tt,gt,j.data)):e.texImage3D(i.TEXTURE_3D,0,vt,j.width,j.height,j.depth,0,tt,gt,j.data);else if(g.isFramebufferTexture){if(st)if(D)e.texStorage2D(i.TEXTURE_2D,ft,vt,j.width,j.height);else{let J=j.width,G=j.height;for(let _t=0;_t<ft;_t++)e.texImage2D(i.TEXTURE_2D,_t,vt,J,G,0,tt,gt,null),J>>=1,G>>=1}}else if(Ot.length>0){if(D&&st){const J=Mt(Ot[0]);e.texStorage2D(i.TEXTURE_2D,ft,vt,J.width,J.height)}for(let J=0,G=Ot.length;J<G;J++)ht=Ot[J],D?et&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,tt,gt,ht):e.texImage2D(i.TEXTURE_2D,J,vt,tt,gt,ht);g.generateMipmaps=!1}else if(D){if(st){const J=Mt(j);e.texStorage2D(i.TEXTURE_2D,ft,vt,J.width,J.height)}et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt,gt,j)}else e.texImage2D(i.TEXTURE_2D,0,vt,tt,gt,j);m(g)&&d(Y),mt.__version=W.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function nt(E,g,I){if(g.image.length!==6)return;const Y=Ut(E,g),Z=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+I);const W=n.get(Z);if(Z.version!==W.__version||Y===!0){e.activeTexture(i.TEXTURE0+I);const mt=Gt.getPrimaries(Gt.workingColorSpace),it=g.colorSpace===wn?null:Gt.getPrimaries(g.colorSpace),Tt=g.colorSpace===wn||mt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const wt=g.isCompressedTexture||g.image[0].isCompressedTexture,j=g.image[0]&&g.image[0].isDataTexture,tt=[];for(let G=0;G<6;G++)!wt&&!j?tt[G]=S(g.image[G],!0,s.maxCubemapSize):tt[G]=j?g.image[G].image:g.image[G],tt[G]=te(g,tt[G]);const gt=tt[0],vt=r.convert(g.format,g.colorSpace),ht=r.convert(g.type),Ot=T(g.internalFormat,vt,ht,g.colorSpace),D=g.isVideoTexture!==!0,st=W.__version===void 0||Y===!0,et=Z.dataReady;let ft=R(g,gt);ut(i.TEXTURE_CUBE_MAP,g);let J;if(wt){D&&st&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Ot,gt.width,gt.height);for(let G=0;G<6;G++){J=tt[G].mipmaps;for(let _t=0;_t<J.length;_t++){const Pt=J[_t];g.format!==Ge?vt!==null?D?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,_t,0,0,Pt.width,Pt.height,vt,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,_t,Ot,Pt.width,Pt.height,0,Pt.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,_t,0,0,Pt.width,Pt.height,vt,ht,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,_t,Ot,Pt.width,Pt.height,0,vt,ht,Pt.data)}}}else{if(J=g.mipmaps,D&&st){J.length>0&&ft++;const G=Mt(tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Ot,G.width,G.height)}for(let G=0;G<6;G++)if(j){D?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,tt[G].width,tt[G].height,vt,ht,tt[G].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ot,tt[G].width,tt[G].height,0,vt,ht,tt[G].data);for(let _t=0;_t<J.length;_t++){const ee=J[_t].image[G].image;D?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,_t+1,0,0,ee.width,ee.height,vt,ht,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,_t+1,Ot,ee.width,ee.height,0,vt,ht,ee.data)}}else{D?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,vt,ht,tt[G]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ot,vt,ht,tt[G]);for(let _t=0;_t<J.length;_t++){const Pt=J[_t];D?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,_t+1,0,0,vt,ht,Pt.image[G]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,_t+1,Ot,vt,ht,Pt.image[G])}}}m(g)&&d(i.TEXTURE_CUBE_MAP),W.__version=Z.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function rt(E,g,I,Y,Z,W){const mt=r.convert(I.format,I.colorSpace),it=r.convert(I.type),Tt=T(I.internalFormat,mt,it,I.colorSpace),wt=n.get(g),j=n.get(I);if(j.__renderTarget=g,!wt.__hasExternalTextures){const tt=Math.max(1,g.width>>W),gt=Math.max(1,g.height>>W);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,W,Tt,tt,gt,g.depth,0,mt,it,null):e.texImage2D(Z,W,Tt,tt,gt,0,mt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),ce(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Z,j.__webglTexture,0,w(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Z,j.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(E,g,I){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){const Y=g.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,W=y(g.stencilBuffer,Z),mt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ce(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,w(g),W,g.width,g.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,w(g),W,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,W,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,E)}else{const Y=g.textures;for(let Z=0;Z<Y.length;Z++){const W=Y[Z],mt=r.convert(W.format,W.colorSpace),it=r.convert(W.type),Tt=T(W.internalFormat,mt,it,W.colorSpace);ce(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,w(g),Tt,g.width,g.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,w(g),Tt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(E,g,I){const Y=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ut(i.TEXTURE_CUBE_MAP,g.depthTexture);const wt=r.convert(g.depthTexture.format),j=r.convert(g.depthTexture.type);let tt;g.depthTexture.format===gn?tt=i.DEPTH_COMPONENT24:g.depthTexture.format===Wn&&(tt=i.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,tt,g.width,g.height,0,wt,j,null)}}else B(g.depthTexture,0);const W=Z.__webglTexture,mt=w(g),it=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+I:i.TEXTURE_2D,Tt=g.depthTexture.format===Wn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===gn)ce(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Tt,it,W,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,Tt,it,W,0);else if(g.depthTexture.format===Wn)ce(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Tt,it,W,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,Tt,it,W,0);else throw new Error("Unknown depthTexture format")}function Rt(E){const g=n.get(E),I=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=Y}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let Y=0;Y<6;Y++)At(g.__webglFramebuffer[Y],E,Y);else{const Y=E.texture.mipmaps;Y&&Y.length>0?At(g.__webglFramebuffer[0],E,0):At(g.__webglFramebuffer,E,0)}else if(I){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=i.createRenderbuffer(),Lt(g.__webglDepthbuffer[Y],E,!1);else{const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,W)}}else{const Y=E.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Lt(g.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,W)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(E,g,I){const Y=n.get(E);g!==void 0&&rt(Y.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Rt(E)}function kt(E){const g=E.texture,I=n.get(E),Y=n.get(g);E.addEventListener("dispose",P);const Z=E.textures,W=E.isWebGLCubeRenderTarget===!0,mt=Z.length>1;if(mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=g.version,a.memory.textures++),W){I.__webglFramebuffer=[];for(let it=0;it<6;it++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[it]=[];for(let Tt=0;Tt<g.mipmaps.length;Tt++)I.__webglFramebuffer[it][Tt]=i.createFramebuffer()}else I.__webglFramebuffer[it]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let it=0;it<g.mipmaps.length;it++)I.__webglFramebuffer[it]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(mt)for(let it=0,Tt=Z.length;it<Tt;it++){const wt=n.get(Z[it]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&ce(E)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let it=0;it<Z.length;it++){const Tt=Z[it];I.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[it]);const wt=r.convert(Tt.format,Tt.colorSpace),j=r.convert(Tt.type),tt=T(Tt.internalFormat,wt,j,Tt.colorSpace,E.isXRRenderTarget===!0),gt=w(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,tt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,I.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(I.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ut(i.TEXTURE_CUBE_MAP,g);for(let it=0;it<6;it++)if(g.mipmaps&&g.mipmaps.length>0)for(let Tt=0;Tt<g.mipmaps.length;Tt++)rt(I.__webglFramebuffer[it][Tt],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt);else rt(I.__webglFramebuffer[it],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(g)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let it=0,Tt=Z.length;it<Tt;it++){const wt=Z[it],j=n.get(wt);let tt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(tt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,j.__webglTexture),ut(tt,wt),rt(I.__webglFramebuffer,E,wt,i.COLOR_ATTACHMENT0+it,tt,0),m(wt)&&d(tt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(it=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,Y.__webglTexture),ut(it,g),g.mipmaps&&g.mipmaps.length>0)for(let Tt=0;Tt<g.mipmaps.length;Tt++)rt(I.__webglFramebuffer[Tt],E,g,i.COLOR_ATTACHMENT0,it,Tt);else rt(I.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,it,0);m(g)&&d(it),e.unbindTexture()}E.depthBuffer&&Rt(E)}function qt(E){const g=E.textures;for(let I=0,Y=g.length;I<Y;I++){const Z=g[I];if(m(Z)){const W=M(E),mt=n.get(Z).__webglTexture;e.bindTexture(W,mt),d(W),e.unbindTexture()}}}const Jt=[],Ft=[];function oe(E){if(E.samples>0){if(ce(E)===!1){const g=E.textures,I=E.width,Y=E.height;let Z=i.COLOR_BUFFER_BIT;const W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(E),it=g.length>1;if(it)for(let wt=0;wt<g.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);const Tt=E.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let wt=0;wt<g.length;wt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[wt]);const j=n.get(g[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,I,Y,0,0,I,Y,Z,i.NEAREST),c===!0&&(Jt.length=0,Ft.length=0,Jt.push(i.COLOR_ATTACHMENT0+wt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Jt.push(W),Ft.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let wt=0;wt<g.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[wt]);const j=n.get(g[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,j,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function w(E){return Math.min(s.maxSamples,E.samples)}function ce(E){const g=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Yt(E){const g=a.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function te(E,g){const I=E.colorSpace,Y=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==xi&&I!==wn&&(Gt.getTransfer(I)===Zt?(Y!==Ge||Z!==Pe)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",I)),g}function Mt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=N,this.setTextureCube=Q,this.rebindTextures=fe,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=ce,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Vm(i,t){function e(n,s=wn){let r;const a=Gt.getTransfer(s);if(n===Pe)return i.UNSIGNED_BYTE;if(n===Ea)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_l)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pl)return i.BYTE;if(n===ml)return i.SHORT;if(n===Oi)return i.UNSIGNED_SHORT;if(n===Sa)return i.INT;if(n===Qe)return i.UNSIGNED_INT;if(n===$e)return i.FLOAT;if(n===mn)return i.HALF_FLOAT;if(n===vl)return i.ALPHA;if(n===xl)return i.RGB;if(n===Ge)return i.RGBA;if(n===gn)return i.DEPTH_COMPONENT;if(n===Wn)return i.DEPTH_STENCIL;if(n===Ml)return i.RED;if(n===ba)return i.RED_INTEGER;if(n===vi)return i.RG;if(n===Ta)return i.RG_INTEGER;if(n===Aa)return i.RGBA_INTEGER;if(n===ys||n===bs||n===Ts||n===As)if(a===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fr||n===Or||n===Br||n===zr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Or)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Br)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vr||n===kr||n===Hr||n===Gr||n===Wr||n===Xr||n===Yr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vr||n===kr)return a===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gr)return r.COMPRESSED_R11_EAC;if(n===Wr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Xr)return r.COMPRESSED_RG11_EAC;if(n===Yr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qr||n===$r||n===Zr||n===Kr||n===jr||n===Jr||n===Qr||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===aa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$r)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ta)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ea)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===na)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ia)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ra)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===aa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===la||n===ca)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===oa)return a===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ca)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ha||n===ua||n===da||n===fa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const km=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Pl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new nn({vertexShader:km,fragmentShader:Hm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new en(new Us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wm extends Yn{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",m=new Gm,d={},M=e.getContextAttributes();let T=null,y=null;const R=[],A=[],P=new Et;let v=null;const b=new Ne;b.viewport=new ae;const $=new Ne;$.viewport=new ae;const C=[b,$],z=new Qh;let V=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=R[q];return nt===void 0&&(nt=new $s,R[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=R[q];return nt===void 0&&(nt=new $s,R[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=R[q];return nt===void 0&&(nt=new $s,R[q]=nt),nt.getHandSpace()};function B(q){const nt=A.indexOf(q.inputSource);if(nt===-1)return;const rt=R[nt];rt!==void 0&&(rt.update(q.inputSource,q.frame,l||a),rt.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",N);for(let q=0;q<R.length;q++){const nt=A[q];nt!==null&&(A[q]=null,R[q].disconnect(nt))}V=null,X=null,m.reset();for(const q in d)delete d[q];t.setRenderTarget(T),p=null,h=null,f=null,s=null,y=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",N),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(P),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,Lt=null,At=null;M.depth&&(At=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=M.stencil?Wn:gn,Lt=M.stencil?Bi:Qe);const Rt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Rt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new je(h.textureWidth,h.textureHeight,{format:Ge,type:Pe,depthTexture:new ki(h.textureWidth,h.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const rt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new je(p.framebufferWidth,p.framebufferHeight,{format:Ge,type:Pe,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(q){for(let nt=0;nt<q.removed.length;nt++){const rt=q.removed[nt],Lt=A.indexOf(rt);Lt>=0&&(A[Lt]=null,R[Lt].disconnect(rt))}for(let nt=0;nt<q.added.length;nt++){const rt=q.added[nt];let Lt=A.indexOf(rt);if(Lt===-1){for(let Rt=0;Rt<R.length;Rt++)if(Rt>=A.length){A.push(rt),Lt=Rt;break}else if(A[Rt]===null){A[Rt]=rt,Lt=Rt;break}if(Lt===-1)break}const At=R[Lt];At&&At.connect(rt)}}const Q=new L,K=new L;function ct(q,nt,rt){Q.setFromMatrixPosition(nt.matrixWorld),K.setFromMatrixPosition(rt.matrixWorld);const Lt=Q.distanceTo(K),At=nt.projectionMatrix.elements,Rt=rt.projectionMatrix.elements,fe=At[14]/(At[10]-1),kt=At[14]/(At[10]+1),qt=(At[9]+1)/At[5],Jt=(At[9]-1)/At[5],Ft=(At[8]-1)/At[0],oe=(Rt[8]+1)/Rt[0],w=fe*Ft,ce=fe*oe,Yt=Lt/(-Ft+oe),te=Yt*-Ft;if(nt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(te),q.translateZ(Yt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),At[10]===-1)q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Mt=fe+Yt,E=kt+Yt,g=w-te,I=ce+(Lt-te),Y=qt*kt/E*Mt,Z=Jt*kt/E*Mt;q.projectionMatrix.makePerspective(g,I,Y,Z,Mt,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function pt(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let nt=q.near,rt=q.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(rt=m.depthFar)),z.near=$.near=b.near=nt,z.far=$.far=b.far=rt,(V!==z.near||X!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),V=z.near,X=z.far),z.layers.mask=q.layers.mask|6,b.layers.mask=z.layers.mask&-5,$.layers.mask=z.layers.mask&-3;const Lt=q.parent,At=z.cameras;pt(z,Lt);for(let Rt=0;Rt<At.length;Rt++)pt(At[Rt],Lt);At.length===2?ct(z,b,$):z.projectionMatrix.copy(b.projectionMatrix),ut(q,z,Lt)};function ut(q,nt,rt){rt===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(rt.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Vi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(q){return d[q]};let Ut=null;function se(q,nt){if(u=nt.getViewerPose(l||a),_=nt,u!==null){const rt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Lt=!1;rt.length!==z.cameras.length&&(z.cameras.length=0,Lt=!0);for(let kt=0;kt<rt.length;kt++){const qt=rt[kt];let Jt=null;if(p!==null)Jt=p.getViewport(qt);else{const oe=f.getViewSubImage(h,qt);Jt=oe.viewport,kt===0&&(t.setRenderTargetTextures(y,oe.colorTexture,oe.depthStencilTexture),t.setRenderTarget(y))}let Ft=C[kt];Ft===void 0&&(Ft=new Ne,Ft.layers.enable(kt),Ft.viewport=new ae,C[kt]=Ft),Ft.matrix.fromArray(qt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(qt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),kt===0&&(z.matrix.copy(Ft.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Lt===!0&&z.cameras.push(Ft)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const kt=f.getDepthInformation(rt[0]);kt&&kt.isValid&&kt.texture&&m.init(kt,s.renderState)}if(At&&At.includes("camera-access")&&S){t.state.unbindTexture(),f=n.getBinding();for(let kt=0;kt<rt.length;kt++){const qt=rt[kt].camera;if(qt){let Jt=d[qt];Jt||(Jt=new Pl,d[qt]=Jt);const Ft=f.getCameraImage(qt);Jt.sourceTexture=Ft}}}}for(let rt=0;rt<R.length;rt++){const Lt=A[rt],At=R[rt];Lt!==null&&At!==void 0&&At.update(Lt,nt,l||a)}Ut&&Ut(q,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),_=null}const ne=new Ol;ne.setAnimationLoop(se),this.setAnimationLoop=function(q){Ut=q},this.dispose=function(){}}}const Bn=new tn,Xm=new ie;function Ym(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ul(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,T,y){d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),S(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,M,T):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ae&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ae&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=t.get(d),T=M.envMap,y=M.envMapRotation;T&&(m.envMap.value=T,Bn.copy(y),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),m.envMapRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(Bn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=T*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ae&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,T){const y=T.program;n.uniformBlockBinding(M,y)}function l(M,T){let y=s[M.id];y===void 0&&(_(M),y=u(M),s[M.id]=y,M.addEventListener("dispose",m));const R=T.program;n.updateUBOMapping(M,R);const A=t.render.frame;r[M.id]!==A&&(h(M),r[M.id]=A)}function u(M){const T=f();M.__bindingPointIndex=T;const y=i.createBuffer(),R=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,y),y}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const T=s[M.id],y=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let A=0,P=y.length;A<P;A++){const v=Array.isArray(y[A])?y[A]:[y[A]];for(let b=0,$=v.length;b<$;b++){const C=v[b];if(p(C,A,b,R)===!0){const z=C.__offset,V=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let B=0;B<V.length;B++){const H=V[B],N=S(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,z+X,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,X),X+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,T,y,R){const A=M.value,P=T+"_"+y;if(R[P]===void 0)return typeof A=="number"||typeof A=="boolean"?R[P]=A:R[P]=A.clone(),!0;{const v=R[P];if(typeof A=="number"||typeof A=="boolean"){if(v!==A)return R[P]=A,!0}else if(v.equals(A)===!1)return v.copy(A),!0}return!1}function _(M){const T=M.uniforms;let y=0;const R=16;for(let P=0,v=T.length;P<v;P++){const b=Array.isArray(T[P])?T[P]:[T[P]];for(let $=0,C=b.length;$<C;$++){const z=b[$],V=Array.isArray(z.value)?z.value:[z.value];for(let X=0,B=V.length;X<B;X++){const H=V[X],N=S(H),Q=y%R,K=Q%N.boundary,ct=Q+K;y+=K,ct!==0&&R-ct<N.storage&&(y+=R-ct),z.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=N.storage}}}const A=y%R;return A>0&&(y+=R-A),M.__size=y,M.__cache={},this}function S(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ct("WebGLRenderer: Unsupported uniform value type.",M),T}function m(M){const T=M.target;T.removeEventListener("dispose",m);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function d(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}const $m=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ye=null;function Zm(){return Ye===null&&(Ye=new xh($m,16,16,vi,mn),Ye.name="DFG_LUT",Ye.minFilter=Ee,Ye.magFilter=Ee,Ye.wrapS=dn,Ye.wrapT=dn,Ye.generateMipmaps=!1,Ye.needsUpdate=!0),Ye}class Km{constructor(t={}){const{canvas:e=Nc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Pe}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const S=p,m=new Set([Aa,Ta,ba]),d=new Set([Pe,Qe,Oi,Bi,Ea,ya]),M=new Uint32Array(4),T=new Int32Array(4);let y=null,R=null;const A=[],P=[];let v=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ke,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let $=!1;this._outputColorSpace=Ue;let C=0,z=0,V=null,X=-1,B=null;const H=new ae,N=new ae;let Q=null;const K=new Vt(0);let ct=0,pt=e.width,ut=e.height,Ut=1,se=null,ne=null;const q=new ae(0,0,pt,ut),nt=new ae(0,0,pt,ut);let rt=!1;const Lt=new Ia;let At=!1,Rt=!1;const fe=new ie,kt=new L,qt=new ae,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function oe(){return V===null?Ut:1}let w=n;function ce(x,U){return e.getContext(x,U)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xa}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",ee,!1),w===null){const U="webgl2";if(w=ce(U,x),w===null)throw ce(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw Ht("WebGLRenderer: "+x.message),x}let Yt,te,Mt,E,g,I,Y,Z,W,mt,it,Tt,wt,j,tt,gt,vt,ht,Ot,D,st,et,ft;function J(){Yt=new Kf(w),Yt.init(),st=new Vm(w,Yt),te=new Hf(w,Yt,t,st),Mt=new Bm(w,Yt),te.reversedDepthBuffer&&h&&Mt.buffers.depth.setReversed(!0),E=new Qf(w),g=new bm,I=new zm(w,Yt,Mt,g,te,st,E),Y=new Zf(b),Z=new iu(w),et=new Vf(w,Z),W=new jf(w,Z,E,et),mt=new ep(w,W,Z,et,E),ht=new tp(w,te,I),tt=new Gf(g),it=new ym(b,Y,Yt,te,et,tt),Tt=new Ym(b,g),wt=new Am,j=new Lm(Yt),vt=new zf(b,Y,Mt,mt,_,c),gt=new Om(b,mt,te),ft=new qm(w,E,te,Mt),Ot=new kf(w,Yt,E),D=new Jf(w,Yt,E),E.programs=it.programs,b.capabilities=te,b.extensions=Yt,b.properties=g,b.renderLists=wt,b.shadowMap=gt,b.state=Mt,b.info=E}J(),S!==Pe&&(v=new ip(S,e.width,e.height,s,r));const G=new Wm(b,w);this.xr=G,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const x=Yt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Yt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Ut},this.setPixelRatio=function(x){x!==void 0&&(Ut=x,this.setSize(pt,ut,!1))},this.getSize=function(x){return x.set(pt,ut)},this.setSize=function(x,U,k=!0){if(G.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}pt=x,ut=U,e.width=Math.floor(x*Ut),e.height=Math.floor(U*Ut),k===!0&&(e.style.width=x+"px",e.style.height=U+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(pt*Ut,ut*Ut).floor()},this.setDrawingBufferSize=function(x,U,k){pt=x,ut=U,Ut=k,e.width=Math.floor(x*k),e.height=Math.floor(U*k),this.setViewport(0,0,x,U)},this.setEffects=function(x){if(S===Pe){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let U=0;U<x.length;U++)if(x[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(H)},this.getViewport=function(x){return x.copy(q)},this.setViewport=function(x,U,k,O){x.isVector4?q.set(x.x,x.y,x.z,x.w):q.set(x,U,k,O),Mt.viewport(H.copy(q).multiplyScalar(Ut).round())},this.getScissor=function(x){return x.copy(nt)},this.setScissor=function(x,U,k,O){x.isVector4?nt.set(x.x,x.y,x.z,x.w):nt.set(x,U,k,O),Mt.scissor(N.copy(nt).multiplyScalar(Ut).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(x){Mt.setScissorTest(rt=x)},this.setOpaqueSort=function(x){se=x},this.setTransparentSort=function(x){ne=x},this.getClearColor=function(x){return x.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor(...arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha(...arguments)},this.clear=function(x=!0,U=!0,k=!0){let O=0;if(x){let F=!1;if(V!==null){const ot=V.texture.format;F=m.has(ot)}if(F){const ot=V.texture.type,dt=d.has(ot),lt=vt.getClearColor(),xt=vt.getClearAlpha(),yt=lt.r,Dt=lt.g,Bt=lt.b;dt?(M[0]=yt,M[1]=Dt,M[2]=Bt,M[3]=xt,w.clearBufferuiv(w.COLOR,0,M)):(T[0]=yt,T[1]=Dt,T[2]=Bt,T[3]=xt,w.clearBufferiv(w.COLOR,0,T))}else O|=w.COLOR_BUFFER_BIT}U&&(O|=w.DEPTH_BUFFER_BIT),k&&(O|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&w.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",ee,!1),vt.dispose(),wt.dispose(),j.dispose(),g.dispose(),Y.dispose(),mt.dispose(),et.dispose(),ft.dispose(),it.dispose(),G.dispose(),G.removeEventListener("sessionstart",Ga),G.removeEventListener("sessionend",Wa),Dn.stop()};function _t(x){x.preventDefault(),ro("WebGLRenderer: Context Lost."),$=!0}function Pt(){ro("WebGLRenderer: Context Restored."),$=!1;const x=E.autoReset,U=gt.enabled,k=gt.autoUpdate,O=gt.needsUpdate,F=gt.type;J(),E.autoReset=x,gt.enabled=U,gt.autoUpdate=k,gt.needsUpdate=O,gt.type=F}function ee(x){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function $t(x){const U=x.target;U.removeEventListener("dispose",$t),sn(U)}function sn(x){rn(x),g.remove(x)}function rn(x){const U=g.get(x).programs;U!==void 0&&(U.forEach(function(k){it.releaseProgram(k)}),x.isShaderMaterial&&it.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,k,O,F,ot){U===null&&(U=Jt);const dt=F.isMesh&&F.matrixWorld.determinant()<0,lt=Kl(x,U,k,O,F);Mt.setMaterial(O,dt);let xt=k.index,yt=1;if(O.wireframe===!0){if(xt=W.getWireframeAttribute(k),xt===void 0)return;yt=2}const Dt=k.drawRange,Bt=k.attributes.position;let bt=Dt.start*yt,Kt=(Dt.start+Dt.count)*yt;ot!==null&&(bt=Math.max(bt,ot.start*yt),Kt=Math.min(Kt,(ot.start+ot.count)*yt)),xt!==null?(bt=Math.max(bt,0),Kt=Math.min(Kt,xt.count)):Bt!=null&&(bt=Math.max(bt,0),Kt=Math.min(Kt,Bt.count));const le=Kt-bt;if(le<0||le===1/0)return;et.setup(F,O,lt,k,xt);let re,jt=Ot;if(xt!==null&&(re=Z.get(xt),jt=D,jt.setIndex(re)),F.isMesh)O.wireframe===!0?(Mt.setLineWidth(O.wireframeLinewidth*oe()),jt.setMode(w.LINES)):jt.setMode(w.TRIANGLES);else if(F.isLine){let xe=O.linewidth;xe===void 0&&(xe=1),Mt.setLineWidth(xe*oe()),F.isLineSegments?jt.setMode(w.LINES):F.isLineLoop?jt.setMode(w.LINE_LOOP):jt.setMode(w.LINE_STRIP)}else F.isPoints?jt.setMode(w.POINTS):F.isSprite&&jt.setMode(w.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ps("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const xe=F._multiDrawStarts,St=F._multiDrawCounts,we=F._multiDrawCount,Wt=xt?Z.get(xt).bytesPerElement:1,Oe=g.get(O).currentProgram.getUniforms();for(let We=0;We<we;We++)Oe.setValue(w,"_gl_DrawID",We),jt.render(xe[We]/Wt,St[We])}else if(F.isInstancedMesh)jt.renderInstances(bt,le,F.count);else if(k.isInstancedBufferGeometry){const xe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,St=Math.min(k.instanceCount,xe);jt.renderInstances(bt,le,St)}else jt.render(bt,le)};function Ha(x,U,k){x.transparent===!0&&x.side===un&&x.forceSinglePass===!1?(x.side=Ae,x.needsUpdate=!0,Yi(x,U,k),x.side=Pn,x.needsUpdate=!0,Yi(x,U,k),x.side=un):Yi(x,U,k)}this.compile=function(x,U,k=null){k===null&&(k=x),R=j.get(k),R.init(U),P.push(R),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(R.pushLight(F),F.castShadow&&R.pushShadow(F))}),x!==k&&x.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(R.pushLight(F),F.castShadow&&R.pushShadow(F))}),R.setupLights();const O=new Set;return x.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ot=F.material;if(ot)if(Array.isArray(ot))for(let dt=0;dt<ot.length;dt++){const lt=ot[dt];Ha(lt,k,F),O.add(lt)}else Ha(ot,k,F),O.add(ot)}),R=P.pop(),O},this.compileAsync=function(x,U,k=null){const O=this.compile(x,U,k);return new Promise(F=>{function ot(){if(O.forEach(function(dt){g.get(dt).currentProgram.isReady()&&O.delete(dt)}),O.size===0){F(x);return}setTimeout(ot,10)}Yt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Bs=null;function Zl(x){Bs&&Bs(x)}function Ga(){Dn.stop()}function Wa(){Dn.start()}const Dn=new Ol;Dn.setAnimationLoop(Zl),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(x){Bs=x,G.setAnimationLoop(x),x===null?Dn.stop():Dn.start()},G.addEventListener("sessionstart",Ga),G.addEventListener("sessionend",Wa),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;const k=G.enabled===!0&&G.isPresenting===!0,O=v!==null&&(V===null||k)&&v.begin(b,V);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),x.isScene===!0&&x.onBeforeRender(b,x,U,V),R=j.get(x,P.length),R.init(U),P.push(R),fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Lt.setFromProjectionMatrix(fe,Ze,U.reversedDepth),Rt=this.localClippingEnabled,At=tt.init(this.clippingPlanes,Rt),y=wt.get(x,A.length),y.init(),A.push(y),G.enabled===!0&&G.isPresenting===!0){const dt=b.xr.getDepthSensingMesh();dt!==null&&zs(dt,U,-1/0,b.sortObjects)}zs(x,U,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(se,ne),Ft=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Ft&&vt.addToRenderList(y,x),this.info.render.frame++,At===!0&&tt.beginShadows();const F=R.state.shadowsArray;if(gt.render(F,x,U),At===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(O&&v.hasRenderPass())===!1){const dt=y.opaque,lt=y.transmissive;if(R.setupLights(),U.isArrayCamera){const xt=U.cameras;if(lt.length>0)for(let yt=0,Dt=xt.length;yt<Dt;yt++){const Bt=xt[yt];Ya(dt,lt,x,Bt)}Ft&&vt.render(x);for(let yt=0,Dt=xt.length;yt<Dt;yt++){const Bt=xt[yt];Xa(y,x,Bt,Bt.viewport)}}else lt.length>0&&Ya(dt,lt,x,U),Ft&&vt.render(x),Xa(y,x,U)}V!==null&&z===0&&(I.updateMultisampleRenderTarget(V),I.updateRenderTargetMipmap(V)),O&&v.end(b),x.isScene===!0&&x.onAfterRender(b,x,U),et.resetDefaultState(),X=-1,B=null,P.pop(),P.length>0?(R=P[P.length-1],At===!0&&tt.setGlobalState(b.clippingPlanes,R.state.camera)):R=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function zs(x,U,k,O){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)R.pushLight(x),x.castShadow&&R.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Lt.intersectsSprite(x)){O&&qt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(fe);const dt=mt.update(x),lt=x.material;lt.visible&&y.push(x,dt,lt,k,qt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Lt.intersectsObject(x))){const dt=mt.update(x),lt=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),qt.copy(x.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),qt.copy(dt.boundingSphere.center)),qt.applyMatrix4(x.matrixWorld).applyMatrix4(fe)),Array.isArray(lt)){const xt=dt.groups;for(let yt=0,Dt=xt.length;yt<Dt;yt++){const Bt=xt[yt],bt=lt[Bt.materialIndex];bt&&bt.visible&&y.push(x,dt,bt,k,qt.z,Bt)}}else lt.visible&&y.push(x,dt,lt,k,qt.z,null)}}const ot=x.children;for(let dt=0,lt=ot.length;dt<lt;dt++)zs(ot[dt],U,k,O)}function Xa(x,U,k,O){const{opaque:F,transmissive:ot,transparent:dt}=x;R.setupLightsView(k),At===!0&&tt.setGlobalState(b.clippingPlanes,k),O&&Mt.viewport(H.copy(O)),F.length>0&&Xi(F,U,k),ot.length>0&&Xi(ot,U,k),dt.length>0&&Xi(dt,U,k),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Ya(x,U,k,O){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[O.id]===void 0){const bt=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[O.id]=new je(1,1,{generateMipmaps:!0,type:bt?mn:Pe,minFilter:Gn,samples:te.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}const ot=R.state.transmissionRenderTarget[O.id],dt=O.viewport||H;ot.setSize(dt.z*b.transmissionResolutionScale,dt.w*b.transmissionResolutionScale);const lt=b.getRenderTarget(),xt=b.getActiveCubeFace(),yt=b.getActiveMipmapLevel();b.setRenderTarget(ot),b.getClearColor(K),ct=b.getClearAlpha(),ct<1&&b.setClearColor(16777215,.5),b.clear(),Ft&&vt.render(k);const Dt=b.toneMapping;b.toneMapping=Ke;const Bt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),R.setupLightsView(O),At===!0&&tt.setGlobalState(b.clippingPlanes,O),Xi(x,k,O),I.updateMultisampleRenderTarget(ot),I.updateRenderTargetMipmap(ot),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Kt=0,le=U.length;Kt<le;Kt++){const re=U[Kt],{object:jt,geometry:xe,material:St,group:we}=re;if(St.side===un&&jt.layers.test(O.layers)){const Wt=St.side;St.side=Ae,St.needsUpdate=!0,qa(jt,k,O,xe,St,we),St.side=Wt,St.needsUpdate=!0,bt=!0}}bt===!0&&(I.updateMultisampleRenderTarget(ot),I.updateRenderTargetMipmap(ot))}b.setRenderTarget(lt,xt,yt),b.setClearColor(K,ct),Bt!==void 0&&(O.viewport=Bt),b.toneMapping=Dt}function Xi(x,U,k){const O=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ot=x.length;F<ot;F++){const dt=x[F],{object:lt,geometry:xt,group:yt}=dt;let Dt=dt.material;Dt.allowOverride===!0&&O!==null&&(Dt=O),lt.layers.test(k.layers)&&qa(lt,U,k,xt,Dt,yt)}}function qa(x,U,k,O,F,ot){x.onBeforeRender(b,U,k,O,F,ot),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),F.onBeforeRender(b,U,k,O,x,ot),F.transparent===!0&&F.side===un&&F.forceSinglePass===!1?(F.side=Ae,F.needsUpdate=!0,b.renderBufferDirect(k,U,O,F,x,ot),F.side=Pn,F.needsUpdate=!0,b.renderBufferDirect(k,U,O,F,x,ot),F.side=un):b.renderBufferDirect(k,U,O,F,x,ot),x.onAfterRender(b,U,k,O,F,ot)}function Yi(x,U,k){U.isScene!==!0&&(U=Jt);const O=g.get(x),F=R.state.lights,ot=R.state.shadowsArray,dt=F.state.version,lt=it.getParameters(x,F.state,ot,U,k),xt=it.getProgramCacheKey(lt);let yt=O.programs;O.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,O.fog=U.fog;const Dt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;O.envMap=Y.get(x.envMap||O.environment,Dt),O.envMapRotation=O.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,yt===void 0&&(x.addEventListener("dispose",$t),yt=new Map,O.programs=yt);let Bt=yt.get(xt);if(Bt!==void 0){if(O.currentProgram===Bt&&O.lightsStateVersion===dt)return Za(x,lt),Bt}else lt.uniforms=it.getUniforms(x),x.onBeforeCompile(lt,b),Bt=it.acquireProgram(lt,xt),yt.set(xt,Bt),O.uniforms=lt.uniforms;const bt=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(bt.clippingPlanes=tt.uniform),Za(x,lt),O.needsLights=Jl(x),O.lightsStateVersion=dt,O.needsLights&&(bt.ambientLightColor.value=F.state.ambient,bt.lightProbe.value=F.state.probe,bt.directionalLights.value=F.state.directional,bt.directionalLightShadows.value=F.state.directionalShadow,bt.spotLights.value=F.state.spot,bt.spotLightShadows.value=F.state.spotShadow,bt.rectAreaLights.value=F.state.rectArea,bt.ltc_1.value=F.state.rectAreaLTC1,bt.ltc_2.value=F.state.rectAreaLTC2,bt.pointLights.value=F.state.point,bt.pointLightShadows.value=F.state.pointShadow,bt.hemisphereLights.value=F.state.hemi,bt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,bt.spotLightMatrix.value=F.state.spotLightMatrix,bt.spotLightMap.value=F.state.spotLightMap,bt.pointShadowMatrix.value=F.state.pointShadowMatrix),O.currentProgram=Bt,O.uniformsList=null,Bt}function $a(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=ws.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function Za(x,U){const k=g.get(x);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Kl(x,U,k,O,F){U.isScene!==!0&&(U=Jt),I.resetTextureUnits();const ot=U.fog,dt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?U.environment:null,lt=V===null?b.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:xi,xt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,yt=Y.get(O.envMap||dt,xt),Dt=O.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Bt=!!k.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),bt=!!k.morphAttributes.position,Kt=!!k.morphAttributes.normal,le=!!k.morphAttributes.color;let re=Ke;O.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(re=b.toneMapping);const jt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,xe=jt!==void 0?jt.length:0,St=g.get(O),we=R.state.lights;if(At===!0&&(Rt===!0||x!==B)){const pe=x===B&&O.id===X;tt.setState(O,x,pe)}let Wt=!1;O.version===St.__version?(St.needsLights&&St.lightsStateVersion!==we.state.version||St.outputColorSpace!==lt||F.isBatchedMesh&&St.batching===!1||!F.isBatchedMesh&&St.batching===!0||F.isBatchedMesh&&St.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&St.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&St.instancing===!1||!F.isInstancedMesh&&St.instancing===!0||F.isSkinnedMesh&&St.skinning===!1||!F.isSkinnedMesh&&St.skinning===!0||F.isInstancedMesh&&St.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&St.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&St.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&St.instancingMorph===!1&&F.morphTexture!==null||St.envMap!==yt||O.fog===!0&&St.fog!==ot||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==tt.numPlanes||St.numIntersection!==tt.numIntersection)||St.vertexAlphas!==Dt||St.vertexTangents!==Bt||St.morphTargets!==bt||St.morphNormals!==Kt||St.morphColors!==le||St.toneMapping!==re||St.morphTargetsCount!==xe)&&(Wt=!0):(Wt=!0,St.__version=O.version);let Oe=St.currentProgram;Wt===!0&&(Oe=Yi(O,U,F));let We=!1,Ln=!1,Zn=!1;const Qt=Oe.getUniforms(),ge=St.uniforms;if(Mt.useProgram(Oe.program)&&(We=!0,Ln=!0,Zn=!0),O.id!==X&&(X=O.id,Ln=!0),We||B!==x){Mt.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Qt.setValue(w,"projectionMatrix",x.projectionMatrix),Qt.setValue(w,"viewMatrix",x.matrixWorldInverse);const xn=Qt.map.cameraPosition;xn!==void 0&&xn.setValue(w,kt.setFromMatrixPosition(x.matrixWorld)),te.logarithmicDepthBuffer&&Qt.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Qt.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),B!==x&&(B=x,Ln=!0,Zn=!0)}if(St.needsLights&&(we.state.directionalShadowMap.length>0&&Qt.setValue(w,"directionalShadowMap",we.state.directionalShadowMap,I),we.state.spotShadowMap.length>0&&Qt.setValue(w,"spotShadowMap",we.state.spotShadowMap,I),we.state.pointShadowMap.length>0&&Qt.setValue(w,"pointShadowMap",we.state.pointShadowMap,I)),F.isSkinnedMesh){Qt.setOptional(w,F,"bindMatrix"),Qt.setOptional(w,F,"bindMatrixInverse");const pe=F.skeleton;pe&&(pe.boneTexture===null&&pe.computeBoneTexture(),Qt.setValue(w,"boneTexture",pe.boneTexture,I))}F.isBatchedMesh&&(Qt.setOptional(w,F,"batchingTexture"),Qt.setValue(w,"batchingTexture",F._matricesTexture,I),Qt.setOptional(w,F,"batchingIdTexture"),Qt.setValue(w,"batchingIdTexture",F._indirectTexture,I),Qt.setOptional(w,F,"batchingColorTexture"),F._colorsTexture!==null&&Qt.setValue(w,"batchingColorTexture",F._colorsTexture,I));const vn=k.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&ht.update(F,k,Oe),(Ln||St.receiveShadow!==F.receiveShadow)&&(St.receiveShadow=F.receiveShadow,Qt.setValue(w,"receiveShadow",F.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&U.environment!==null&&(ge.envMapIntensity.value=U.environmentIntensity),ge.dfgLUT!==void 0&&(ge.dfgLUT.value=Zm()),Ln&&(Qt.setValue(w,"toneMappingExposure",b.toneMappingExposure),St.needsLights&&jl(ge,Zn),ot&&O.fog===!0&&Tt.refreshFogUniforms(ge,ot),Tt.refreshMaterialUniforms(ge,O,Ut,ut,R.state.transmissionRenderTarget[x.id]),ws.upload(w,$a(St),ge,I)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ws.upload(w,$a(St),ge,I),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Qt.setValue(w,"center",F.center),Qt.setValue(w,"modelViewMatrix",F.modelViewMatrix),Qt.setValue(w,"normalMatrix",F.normalMatrix),Qt.setValue(w,"modelMatrix",F.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const pe=O.uniformsGroups;for(let xn=0,Kn=pe.length;xn<Kn;xn++){const Ka=pe[xn];ft.update(Ka,Oe),ft.bind(Ka,Oe)}}return Oe}function jl(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function Jl(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(x,U,k){const O=g.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),g.get(x.texture).__webglTexture=U,g.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:k,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,U){const k=g.get(x);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const Ql=w.createFramebuffer();this.setRenderTarget=function(x,U=0,k=0){V=x,C=U,z=k;let O=null,F=!1,ot=!1;if(x){const lt=g.get(x);if(lt.__useDefaultFramebuffer!==void 0){Mt.bindFramebuffer(w.FRAMEBUFFER,lt.__webglFramebuffer),H.copy(x.viewport),N.copy(x.scissor),Q=x.scissorTest,Mt.viewport(H),Mt.scissor(N),Mt.setScissorTest(Q),X=-1;return}else if(lt.__webglFramebuffer===void 0)I.setupRenderTarget(x);else if(lt.__hasExternalTextures)I.rebindTextures(x,g.get(x.texture).__webglTexture,g.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Dt=x.depthTexture;if(lt.__boundDepthTexture!==Dt){if(Dt!==null&&g.has(Dt)&&(x.width!==Dt.image.width||x.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(x)}}const xt=x.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(ot=!0);const yt=g.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(yt[U])?O=yt[U][k]:O=yt[U],F=!0):x.samples>0&&I.useMultisampledRTT(x)===!1?O=g.get(x).__webglMultisampledFramebuffer:Array.isArray(yt)?O=yt[k]:O=yt,H.copy(x.viewport),N.copy(x.scissor),Q=x.scissorTest}else H.copy(q).multiplyScalar(Ut).floor(),N.copy(nt).multiplyScalar(Ut).floor(),Q=rt;if(k!==0&&(O=Ql),Mt.bindFramebuffer(w.FRAMEBUFFER,O)&&Mt.drawBuffers(x,O),Mt.viewport(H),Mt.scissor(N),Mt.setScissorTest(Q),F){const lt=g.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,lt.__webglTexture,k)}else if(ot){const lt=U;for(let xt=0;xt<x.textures.length;xt++){const yt=g.get(x.textures[xt]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+xt,yt.__webglTexture,k,lt)}}else if(x!==null&&k!==0){const lt=g.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,lt.__webglTexture,k)}X=-1},this.readRenderTargetPixels=function(x,U,k,O,F,ot,dt,lt=0){if(!(x&&x.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=g.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&dt!==void 0&&(xt=xt[dt]),xt){Mt.bindFramebuffer(w.FRAMEBUFFER,xt);try{const yt=x.textures[lt],Dt=yt.format,Bt=yt.type;if(x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+lt),!te.textureFormatReadable(Dt)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Bt)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-O&&k>=0&&k<=x.height-F&&w.readPixels(U,k,O,F,st.convert(Dt),st.convert(Bt),ot)}finally{const yt=V!==null?g.get(V).__webglFramebuffer:null;Mt.bindFramebuffer(w.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(x,U,k,O,F,ot,dt,lt=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=g.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&dt!==void 0&&(xt=xt[dt]),xt)if(U>=0&&U<=x.width-O&&k>=0&&k<=x.height-F){Mt.bindFramebuffer(w.FRAMEBUFFER,xt);const yt=x.textures[lt],Dt=yt.format,Bt=yt.type;if(x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+lt),!te.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,bt),w.bufferData(w.PIXEL_PACK_BUFFER,ot.byteLength,w.STREAM_READ),w.readPixels(U,k,O,F,st.convert(Dt),st.convert(Bt),0);const Kt=V!==null?g.get(V).__webglFramebuffer:null;Mt.bindFramebuffer(w.FRAMEBUFFER,Kt);const le=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Fc(w,le,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,bt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ot),w.deleteBuffer(bt),w.deleteSync(le),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,U=null,k=0){const O=Math.pow(2,-k),F=Math.floor(x.image.width*O),ot=Math.floor(x.image.height*O),dt=U!==null?U.x:0,lt=U!==null?U.y:0;I.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,k,0,0,dt,lt,F,ot),Mt.unbindTexture()};const tc=w.createFramebuffer(),ec=w.createFramebuffer();this.copyTextureToTexture=function(x,U,k=null,O=null,F=0,ot=0){let dt,lt,xt,yt,Dt,Bt,bt,Kt,le;const re=x.isCompressedTexture?x.mipmaps[ot]:x.image;if(k!==null)dt=k.max.x-k.min.x,lt=k.max.y-k.min.y,xt=k.isBox3?k.max.z-k.min.z:1,yt=k.min.x,Dt=k.min.y,Bt=k.isBox3?k.min.z:0;else{const ge=Math.pow(2,-F);dt=Math.floor(re.width*ge),lt=Math.floor(re.height*ge),x.isDataArrayTexture?xt=re.depth:x.isData3DTexture?xt=Math.floor(re.depth*ge):xt=1,yt=0,Dt=0,Bt=0}O!==null?(bt=O.x,Kt=O.y,le=O.z):(bt=0,Kt=0,le=0);const jt=st.convert(U.format),xe=st.convert(U.type);let St;U.isData3DTexture?(I.setTexture3D(U,0),St=w.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(I.setTexture2DArray(U,0),St=w.TEXTURE_2D_ARRAY):(I.setTexture2D(U,0),St=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const we=w.getParameter(w.UNPACK_ROW_LENGTH),Wt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Oe=w.getParameter(w.UNPACK_SKIP_PIXELS),We=w.getParameter(w.UNPACK_SKIP_ROWS),Ln=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,re.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,re.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,yt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Dt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Bt);const Zn=x.isDataArrayTexture||x.isData3DTexture,Qt=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const ge=g.get(x),vn=g.get(U),pe=g.get(ge.__renderTarget),xn=g.get(vn.__renderTarget);Mt.bindFramebuffer(w.READ_FRAMEBUFFER,pe.__webglFramebuffer),Mt.bindFramebuffer(w.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let Kn=0;Kn<xt;Kn++)Zn&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,g.get(x).__webglTexture,F,Bt+Kn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,g.get(U).__webglTexture,ot,le+Kn)),w.blitFramebuffer(yt,Dt,dt,lt,bt,Kt,dt,lt,w.DEPTH_BUFFER_BIT,w.NEAREST);Mt.bindFramebuffer(w.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(F!==0||x.isRenderTargetTexture||g.has(x)){const ge=g.get(x),vn=g.get(U);Mt.bindFramebuffer(w.READ_FRAMEBUFFER,tc),Mt.bindFramebuffer(w.DRAW_FRAMEBUFFER,ec);for(let pe=0;pe<xt;pe++)Zn?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ge.__webglTexture,F,Bt+pe):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ge.__webglTexture,F),Qt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,vn.__webglTexture,ot,le+pe):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,vn.__webglTexture,ot),F!==0?w.blitFramebuffer(yt,Dt,dt,lt,bt,Kt,dt,lt,w.COLOR_BUFFER_BIT,w.NEAREST):Qt?w.copyTexSubImage3D(St,ot,bt,Kt,le+pe,yt,Dt,dt,lt):w.copyTexSubImage2D(St,ot,bt,Kt,yt,Dt,dt,lt);Mt.bindFramebuffer(w.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Qt?x.isDataTexture||x.isData3DTexture?w.texSubImage3D(St,ot,bt,Kt,le,dt,lt,xt,jt,xe,re.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(St,ot,bt,Kt,le,dt,lt,xt,jt,re.data):w.texSubImage3D(St,ot,bt,Kt,le,dt,lt,xt,jt,xe,re):x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,ot,bt,Kt,dt,lt,jt,xe,re.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,ot,bt,Kt,re.width,re.height,jt,re.data):w.texSubImage2D(w.TEXTURE_2D,ot,bt,Kt,dt,lt,jt,xe,re);w.pixelStorei(w.UNPACK_ROW_LENGTH,we),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Wt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Oe),w.pixelStorei(w.UNPACK_SKIP_ROWS,We),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ln),ot===0&&U.generateMipmaps&&w.generateMipmap(St),Mt.unbindTexture()},this.initRenderTarget=function(x){g.get(x).__webglFramebuffer===void 0&&I.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?I.setTextureCube(x,0):x.isData3DTexture?I.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?I.setTexture2DArray(x,0):I.setTexture2D(x,0),Mt.unbindTexture()},this.resetState=function(){C=0,z=0,V=null,Mt.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ze}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}}const Sr={type:"change"},Ba={type:"start"},za={type:"end"},nl=1e-6,Xt={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},vs=new Et,An=new Et,jm=new L,xs=new L,Er=new L,ui=new qn,il=new L,Ms=new L,yr=new L,Ss=new L;class Jm extends eu{constructor(t,e=null){super(t,e),this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:fi.ROTATE,MIDDLE:fi.DOLLY,RIGHT:fi.PAN},this.target=new L,this.state=Xt.NONE,this.keyState=Xt.NONE,this._lastPosition=new L,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new L,this._movePrev=new Et,this._moveCurr=new Et,this._lastAxis=new L,this._zoomStart=new Et,this._zoomEnd=new Et,this._panStart=new Et,this._panEnd=new Et,this._pointers=[],this._pointerPositions={},this._onPointerMove=tg.bind(this),this._onPointerDown=Qm.bind(this),this._onPointerUp=eg.bind(this),this._onPointerCancel=ng.bind(this),this._onContextMenu=cg.bind(this),this._onMouseWheel=lg.bind(this),this._onKeyDown=sg.bind(this),this._onKeyUp=ig.bind(this),this._onTouchStart=hg.bind(this),this._onTouchMove=ug.bind(this),this._onTouchEnd=dg.bind(this),this._onMouseDown=rg.bind(this),this._onMouseMove=ag.bind(this),this._onMouseUp=og.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,e!==null&&(this.connect(e),this.handleResize()),this.update()}connect(t){super.connect(t),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}handleResize(){const t=this.domElement.getBoundingClientRect(),e=this.domElement.ownerDocument.documentElement;this.screen.left=t.left+window.pageXOffset-e.clientLeft,this.screen.top=t.top+window.pageYOffset-e.clientTop,this.screen.width=t.width,this.screen.height=t.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>nl&&(this.dispatchEvent(Sr),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>nl||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(Sr),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=Xt.NONE,this.keyState=Xt.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(Sr),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(An.copy(this._panEnd).sub(this._panStart),An.lengthSq()){if(this.object.isOrthographicCamera){const t=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,e=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;An.x*=t,An.y*=e}An.multiplyScalar(this._eye.length()*this.panSpeed),xs.copy(this._eye).cross(this.object.up).setLength(An.x),xs.add(jm.copy(this.object.up).setLength(An.y)),this.object.position.add(xs),this.target.add(xs),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(An.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){Ss.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let t=Ss.length();t?(this._eye.copy(this.object.position).sub(this.target),il.copy(this._eye).normalize(),Ms.copy(this.object.up).normalize(),yr.crossVectors(Ms,il).normalize(),Ms.setLength(this._moveCurr.y-this._movePrev.y),yr.setLength(this._moveCurr.x-this._movePrev.x),Ss.copy(Ms.add(yr)),Er.crossVectors(Ss,this._eye).normalize(),t*=this.rotateSpeed,ui.setFromAxisAngle(Er,t),this._eye.applyQuaternion(ui),this.object.up.applyQuaternion(ui),this._lastAxis.copy(Er),this._lastAngle=t):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),ui.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(ui),this.object.up.applyQuaternion(ui)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let t;this.state===Xt.TOUCH_ZOOM_PAN?(t=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=oo.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(t=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,t!==1&&t>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=oo.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(t,e){return vs.set((t-this.screen.left)/this.screen.width,(e-this.screen.top)/this.screen.height),vs}_getMouseOnCircle(t,e){return vs.set((t-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-e))/this.screen.width),vs}_addPointer(t){this._pointers.push(t)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e].pointerId==t.pointerId){this._pointers.splice(e,1);return}}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Et,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[e.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}function Qm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i))}function tg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function eg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchEnd(i):this._onMouseUp(),this._removePointer(i),this._pointers.length===0&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp)))}function ng(i){this._removePointer(i)}function ig(){this.enabled!==!1&&(this.keyState=Xt.NONE,window.addEventListener("keydown",this._onKeyDown))}function sg(i){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===Xt.NONE&&(i.code===this.keys[Xt.ROTATE]&&!this.noRotate?this.keyState=Xt.ROTATE:i.code===this.keys[Xt.ZOOM]&&!this.noZoom?this.keyState=Xt.ZOOM:i.code===this.keys[Xt.PAN]&&!this.noPan&&(this.keyState=Xt.PAN)))}function rg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case fi.DOLLY:this.state=Xt.ZOOM;break;case fi.ROTATE:this.state=Xt.ROTATE;break;case fi.PAN:this.state=Xt.PAN;break;default:this.state=Xt.NONE}const e=this.keyState!==Xt.NONE?this.keyState:this.state;e===Xt.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY)),this._movePrev.copy(this._moveCurr)):e===Xt.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(i.pageX,i.pageY)),this._zoomEnd.copy(this._zoomStart)):e===Xt.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(i.pageX,i.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(Ba)}function ag(i){const t=this.keyState!==Xt.NONE?this.keyState:this.state;t===Xt.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY))):t===Xt.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(i.pageX,i.pageY)):t===Xt.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(i.pageX,i.pageY))}function og(){this.state=Xt.NONE,this.dispatchEvent(za)}function lg(i){if(this.enabled!==!1&&this.noZoom!==!0){switch(i.preventDefault(),i.deltaMode){case 2:this._zoomStart.y-=i.deltaY*.025;break;case 1:this._zoomStart.y-=i.deltaY*.01;break;default:this._zoomStart.y-=i.deltaY*25e-5;break}this.dispatchEvent(Ba),this.dispatchEvent(za)}}function cg(i){this.enabled!==!1&&i.preventDefault()}function hg(i){if(this._trackPointer(i),this._pointers.length===1)this.state=Xt.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);else{this.state=Xt.TOUCH_ZOOM_PAN;const t=this._pointers[0].pageX-this._pointers[1].pageX,e=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(t*t+e*e);const n=(this._pointers[0].pageX+this._pointers[1].pageX)/2,s=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(n,s)),this._panEnd.copy(this._panStart)}this.dispatchEvent(Ba)}function ug(i){if(this._trackPointer(i),this._pointers.length===1)this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY));else{const t=this._getSecondPointerPosition(i),e=i.pageX-t.x,n=i.pageY-t.y;this._touchZoomDistanceEnd=Math.sqrt(e*e+n*n);const s=(i.pageX+t.x)/2,r=(i.pageY+t.y)/2;this._panEnd.copy(this._getMouseOnScreen(s,r))}}function dg(i){switch(this._pointers.length){case 0:this.state=Xt.NONE;break;case 1:this.state=Xt.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=Xt.TOUCH_ZOOM_PAN;for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId!==i.pointerId){const e=this._pointerPositions[this._pointers[t].pointerId];this._moveCurr.copy(this._getMouseOnCircle(e.x,e.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(za)}async function sl(i){const t=await fetch(i).then(e=>e.arrayBuffer());return new Float32Array(t)}const ke=[[.267,.005,.329],[.19,.407,.553],[.128,.566,.551],[.204,.714,.474],[.993,.906,.144]];function fg(i){const t=i*(ke.length-1),e=Math.min(Math.floor(t),ke.length-2),n=t-e;return new Vt(ke[e][0]+n*(ke[e+1][0]-ke[e][0]),ke[e][1]+n*(ke[e+1][1]-ke[e][1]),ke[e][2]+n*(ke[e+1][2]-ke[e][2]))}function Gl(i){const t=Math.min(...i),e=Math.max(...i);return i.map(n=>(n-t)/(e-t))}const Ds={dist_surf:3,gc_content:4,dist_com:5,dist_rm:6};function pg(i){const t=[];for(let a=0;a<i.length;a+=7)t.push(new L(i[a],i[a+1],i[a+2]));const e=new Ll(t),n=new Fa(e,1400,.03,20,!1),s=new Xh({vertexColors:!0}),r=new en(n,s);return n.computeBoundingBox(),n.center(),Wl(r,i,Ds.dist_surf),r}function Wl(i,t,e){const n=new Float32Array(t.length/7);for(let o=0;o<n.length;o++)n[o]=t[o*7+e];const s=Gl(n),r=i.geometry.getAttribute("position"),a=new Float32Array(r.count*3);for(let o=0;o<r.count;o++){const c=o/r.count,l=Math.min(Math.floor(c*s.length),s.length-1),u=fg(s[l]);a[o*3]=u.r,a[o*3+1]=u.g,a[o*3+2]=u.b}i.geometry.setAttribute("color",new De(a,3))}function mg(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new yh(i)}function gg(i){const t=new Le;t.setAttribute("position",new De(i,3)),t.computeBoundingBox(),t.center();const e=new Ua({color:16777215,size:.03,map:mg(),transparent:!0,depthWrite:!1,opacity:.1});return new Cl(t,e)}class Je{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),Je.nextNameID=Je.nextNameID||0,this.$name.id=`lil-gui-name-${++Je.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class _g extends Je{constructor(t,e,n){super(t,e,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function va(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const vg={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:va,toHexString:va},Hi={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},xg={isPrimitive:!1,match:i=>Array.isArray(i)||ArrayBuffer.isView(i),fromHexString(i,t,e=1){const n=Hi.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return Hi.toHexString(s)}},Mg={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=Hi.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return Hi.toHexString(s)}},Sg=[vg,Hi,xg,Mg];function Eg(i){return Sg.find(t=>t.match(i))}class yg extends Je{constructor(t,e,n,s){super(t,e,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Eg(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=va(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class br extends Je{constructor(t,e,n){super(t,e,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class bg extends Je{constructor(t,e,n,s,r,a){super(t,e,n,"lil-number"),this._initInput(),this.min(s),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let M=parseFloat(this.$input.value);isNaN(M)||(this._stepExplicit&&(M=this._snap(M)),this.setValue(this._clamp(M)))},n=M=>{const T=parseFloat(this.$input.value);isNaN(T)||(this._snapClampSetValue(T+M),this.$input.value=this.getValue())},s=M=>{M.key==="Enter"&&this.$input.blur(),M.code==="ArrowUp"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M))),M.code==="ArrowDown"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M)*-1))},r=M=>{this._inputFocused&&(M.preventDefault(),n(this._step*this._normalizeMouseWheel(M)))};let a=!1,o,c,l,u,f;const h=5,p=M=>{o=M.clientX,c=l=M.clientY,a=!0,u=this.getValue(),f=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",S)},_=M=>{if(a){const T=M.clientX-o,y=M.clientY-c;Math.abs(y)>h?(M.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(T)>h&&S()}if(!a){const T=M.clientY-l;f-=T*this._step*this._arrowKeyMultiplier(M),u+f>this._max?f=this._max-u:u+f<this._min&&(f=this._min-u),this._snapClampSetValue(u+f)}l=M.clientY},S=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",S)},m=()=>{this._inputFocused=!0},d=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",d)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(d,M,T,y,R)=>(d-M)/(T-M)*(R-y)+y,e=d=>{const M=this.$slider.getBoundingClientRect();let T=t(d,M.left,M.right,this._min,this._max);this._snapClampSetValue(T)},n=d=>{this._setDraggingStyle(!0),e(d.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=d=>{e(d.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let a=!1,o,c;const l=d=>{d.preventDefault(),this._setDraggingStyle(!0),e(d.touches[0].clientX),a=!1},u=d=>{d.touches.length>1||(this._hasScrollBar?(o=d.touches[0].clientX,c=d.touches[0].clientY,a=!0):l(d),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",h))},f=d=>{if(a){const M=d.touches[0].clientX-o,T=d.touches[0].clientY-c;Math.abs(M)>Math.abs(T)?l(d):(window.removeEventListener("touchmove",f),window.removeEventListener("touchend",h))}else d.preventDefault(),e(d.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",h)},p=this._callOnFinishChange.bind(this),_=400;let S;const m=d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const T=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+T),this.$input.value=this.getValue(),clearTimeout(S),S=setTimeout(p,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Tg extends Je{constructor(t,e,n,s){super(t,e,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Ag extends Je{constructor(t,e,n){super(t,e,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var wg=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function Cg(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let rl=!1;class Va{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),c&&this.domElement.classList.add("lil-allow-touch-styles"),!rl&&o&&(Cg(wg),rl=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=a}add(t,e,n,s,r){if(Object(n)===n)return new Tg(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new bg(this,t,e,n,s,r);case"boolean":return new _g(this,t,e);case"string":return new Ag(this,t,e);case"function":return new br(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new yg(this,t,e,n)}addFolder(t){const e=new Va({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof br||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof br)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("lil-transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}function Rg(i,t,e,n){const s=new Va({title:"Controls"});s.domElement.style.position="absolute",s.domElement.style.top="100px",s.domElement.style.right="20px";const r={colorBy:"dist_surf",showSurface:!0,showBackbone:!0,rotationSpeed:2,showTooltip:!0,isAnimating:!1};return s.add(r,"showTooltip").name("Show tooltip"),s.add(r,"colorBy",Object.keys(Ds)).name("Color by").onChange(a=>{Wl(i,e,Ds[a])}),s.add(r,"showSurface").name("Show surface").onChange(a=>{t.visible=a}),s.add(r,"showBackbone").name("Show chromosome").onChange(a=>{i.visible=a}),s.add(r,"isAnimating").name("Animate"),s.add(r,"rotationSpeed",0,50,.01).name("Rotation speed"),r}function Pg(){const i=document.createElement("canvas");i.width=200,i.height=80,i.style.cssText="position:absolute; bottom:30px; right:20px;",document.body.appendChild(i);const t=i.getContext("2d"),e=t.createLinearGradient(0,0,200,0);e.addColorStop(0,"#440154"),e.addColorStop(.25,"#31688e"),e.addColorStop(.5,"#21918c"),e.addColorStop(.75,"#35b779"),e.addColorStop(1,"#fde725"),t.beginPath(),t.moveTo(0,70),t.lineTo(190,70),t.lineTo(190,0),t.closePath(),t.fillStyle=e,t.fill(),t.fillStyle="white",t.font="11px sans-serif",t.fillText("Low",0,80),t.fillText("High",165,80)}const Dg=["distance from surface","GC content","distance from COM","distance from rolling mean"],Lg=["#35b779","#31688e","#fde725","#440154"];function Ig(){const i=document.createElement("div");return i.style.cssText=`
    position: absolute;
    background: rgba(10,10,30,0.9);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 6px;
    padding: 10px 14px;
    color: white;
    font-family: sans-serif;
    font-size: 12px;
    pointer-events: none;
    display: none;
    min-width: 160px;
  `,document.body.appendChild(i),i}function Ug(i,t,e){i.innerHTML=`<div style="margin-bottom:6px;opacity:0.6">Bead ${e}</div>`+Dg.map((n,s)=>{const r=(t[s]*100).toFixed(1);return`
        <div style="margin-bottom:5px">
          <div style="opacity:0.7;margin-bottom:2px">${n}</div>
          <div style="background:rgba(255,255,255,0.1);border-radius:3px;height:10px;width:100%">
            <div style="background:${Lg[s]};width:${r}%;height:100%;border-radius:3px"></div>
          </div>
        </div>`}).join("")}function Ng(i,t,e,n,s){const r=Ig(),a=new tu,o=new Et,c=Object.values(Ds).map(l=>{const u=new Float32Array(n.length/7);for(let f=0;f<u.length;f++)u[f]=n[f*7+l];return Gl(u)});i.addEventListener("mousemove",l=>{if(!s.showTooltip){r.style.display="none";return}o.x=l.clientX/window.innerWidth*2-1,o.y=-(l.clientY/window.innerHeight)*2+1,a.setFromCamera(o,t);const u=a.intersectObject(e);if(u.length===0){r.style.display="none";return}const f=Math.min(Math.floor(u[0].faceIndex/(e.geometry.index.count/3)*(n.length/7)),n.length/7-1),h=c.map(p=>p[f]);Ug(r,h,f),r.style.display="block",r.style.left=`${l.clientX+16}px`,r.style.top=`${l.clientY-10}px`}),i.addEventListener("mouseleave",()=>{r.style.display="none"})}function Fg(){const t=new Float32Array(9e3);for(let s=0;s<3e3*3;s++)t[s]=(Math.random()-.5)*50;const e=new Le;e.setAttribute("position",new De(t,3));const n=new Ua({color:16777215,size:.015,transparent:!0,opacity:.6});return new Cl(e,n)}const ka=document.querySelector("#canvas"),Xl=new Km({canvas:ka,antialias:!0});Xl.setSize(window.innerWidth,window.innerHeight);const $n=new fh;window.scene=$n;$n.background=new Vt(1447447);const Og=Fg();$n.add(Og);const Os=new Ne(90,window.innerWidth/window.innerHeight,.1,1e3);Os.position.set(0,.9,3);$n.add(new jh(16777215,.5));const Yl=new Kh(16777215,1);Yl.position.set(50,50,50);$n.add(Yl);Pg();const ql=new Jm(Os,ka);ql.rotateSpeed=5;const Rn=new Di;$n.add(Rn);let Hn;Promise.all([sl("/data/backbone.bin"),sl("/data/surface.bin")]).then(([i,t])=>{const e=pg(i),n=gg(t);Rn.add(e),Rn.add(n),Rn.rotation.set(0,-1.2,-.12),Rn.position.set(0,-.52,0),Hn=Rg(e,n,i),Ng(ka,Os,e,i,Hn)});function $l(){requestAnimationFrame($l),ql.update(),Xl.render($n,Os),Hn&&Hn.isAnimating&&(Rn.rotation.x+=Hn.rotationSpeed*.001,Rn.rotation.y+=Hn.rotationSpeed*.003,Rn.rotation.z+=Hn.rotationSpeed*4e-4)}$l();
