(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l=1e3,u=1001,d=1002,f=1003,p=1004,m=1005,h=1006,g=1007,_=1008,v=1009,y=1010,b=1011,x=1012,S=1013,C=1014,w=1015,T=1016,E=1017,D=1018,O=1020,k=35902,A=35899,j=1021,M=1022,N=1023,ee=1026,P=1027,F=1028,te=1029,ne=1030,re=1031,ie=1033,ae=33776,oe=33777,se=33778,I=33779,L=35840,ce=35841,le=35842,ue=35843,de=36196,fe=37492,pe=37496,me=37488,he=37489,ge=37490,_e=37491,ve=37808,ye=37809,be=37810,xe=37811,Se=37812,Ce=37813,we=37814,Te=37815,Ee=37816,De=37817,Oe=37818,ke=37819,Ae=37820,je=37821,R=36492,Me=36494,Ne=36495,Pe=36283,z=36284,Fe=36285,B=36286,V=2300,Ie=2301,Le=2302,Re=2303,ze=2400,Be=2401,Ve=2402,He=3200,Ue=`srgb`,We=`srgb-linear`,Ge=`linear`,Ke=`srgb`,qe=7680,Je=35044,Ye=2e3;function Xe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ze(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function $e(){let e=Qe(`canvas`);return e.style.display=`block`,e}var et={};function tt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function nt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function H(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function U(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function rt(...e){let t=e.join(` `);t in et||(et[t]=!0,H(...e))}function it(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var at={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},ot=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},st=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ct=Math.PI/180,lt=180/Math.PI;function ut(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(st[e&255]+st[e>>8&255]+st[e>>16&255]+st[e>>24&255]+`-`+st[t&255]+st[t>>8&255]+`-`+st[t>>16&15|64]+st[t>>24&255]+`-`+st[n&63|128]+st[n>>8&255]+`-`+st[n>>16&255]+st[n>>24&255]+st[r&255]+st[r>>8&255]+st[r>>16&255]+st[r>>24&255]).toLowerCase()}function W(e,t,n){return Math.max(t,Math.min(n,e))}function dt(e,t){return(e%t+t)%t}function ft(e,t,n){return(1-n)*e+n*t}function pt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function mt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ht(e,t){if(t.constructor===Float32Array)return e;let n=mt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function gt(e,t){if(t.constructor===Float32Array)return e;let n=mt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}o=Symbol.iterator;var G=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=G,e.prototype.isVector2=!0;var _t=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:H(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(W(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var K=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vt.copy(this).projectOnVector(e),this.sub(vt)}reflect(e){return this.sub(vt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=K,t.prototype.isVector3=!0;var vt=new K,yt=new _t,q=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return rt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(bt.makeScale(e,t)),this}rotate(e){return rt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(bt.makeRotation(-e)),this}translate(e,t){return rt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(bt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=q,n.prototype.isMatrix3=!0;var bt=new q,xt=new q().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),St=new q().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ct(){let e={enabled:!0,workingColorSpace:We,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=wt(e.r),e.g=wt(e.g),e.b=wt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Tt(e.r),e.g=Tt(e.g),e.b=Tt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ge:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[We]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:xt,fromXYZ:St,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:r,transfer:Ke,toXYZ:xt,fromXYZ:St,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),e}var J=Ct();function wt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Tt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Et,Dt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Et===void 0&&(Et=Qe(`canvas`)),Et.width=e.width,Et.height=e.height;let t=Et.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Et}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=wt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(wt(t[e]/255)*255):t[e]=wt(t[e]);return{data:t,width:e.width,height:e.height}}return H(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ot=0,kt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ot++}),this.uuid=ut(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(At(r[t].image)):e.push(At(r[t]))}else e=At(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function At(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Dt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(H(`Texture: Unable to serialize Texture.`),{})}var jt=0,Mt=new K,Nt=class e extends ot{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=u,i=u,a=h,o=_,s=N,c=v,l=e.DEFAULT_ANISOTROPY,d=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jt++}),this.uuid=ut(),this.name=``,this.source=new kt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new q,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Mt).x}get height(){return this.source.getSize(Mt).y}get depth(){return this.source.getSize(Mt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){H(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?H(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case l:e.x-=Math.floor(e.x);break;case u:e.x=e.x<0?0:1;break;case d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case l:e.y-=Math.floor(e.y);break;case u:e.y=e.y<0?0:1;break;case d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nt.DEFAULT_IMAGE=null,Nt.DEFAULT_MAPPING=300,Nt.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var Pt=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this.w=W(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this.w=W(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=Pt,r.prototype.isVector4=!0;var Ft=class extends ot{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:h,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Nt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:h,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new kt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},It=class extends Ft{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Lt=class extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Rt=class extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},zt=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Bt.setFromMatrixColumn(e,0).length(),i=1/Bt.setFromMatrixColumn(e,1).length(),a=1/Bt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ht,e,Ut)}lookAt(e,t,n){let r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Wt.crossVectors(n,Kt),Wt.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Wt.crossVectors(n,Kt)),Wt.normalize(),Gt.crossVectors(Kt,Wt),r[0]=Wt.x,r[4]=Gt.x,r[8]=Kt.x,r[1]=Wt.y,r[5]=Gt.y,r[9]=Kt.y,r[2]=Wt.z,r[6]=Gt.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],P=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*M+c*F,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*M+f*F,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*M+g*F,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*M+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Bt.set(r[0],r[1],r[2]).length(),o=Bt.set(r[4],r[5],r[6]).length(),s=Bt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Vt.copy(this);let c=1/a,l=1/o,u=1/s;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=l,Vt.elements[5]*=l,Vt.elements[6]*=l,Vt.elements[8]*=u,Vt.elements[9]*=u,Vt.elements[10]*=u,t.setFromRotationMatrix(Vt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=zt,i.prototype.isMatrix4=!0;var Bt=new K,Vt=new zt,Ht=new K(0,0,0),Ut=new K(1,1,1),Wt=new K,Gt=new K,Kt=new K,qt=new zt,Jt=new _t,Yt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(W(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-W(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(W(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-W(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(W(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-W(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:H(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jt.setFromEuler(this),this.setFromQuaternion(Jt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yt.DEFAULT_ORDER=`XYZ`;var Xt=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Zt=0,Qt=new K,$t=new _t,en=new zt,tn=new K,nn=new K,rn=new K,an=new _t,on=new K(1,0,0),sn=new K(0,1,0),cn=new K(0,0,1),ln={type:`added`},un={type:`removed`},dn={type:`childadded`,child:null},fn={type:`childremoved`,child:null},pn=class e extends ot{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zt++}),this.uuid=ut(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new Yt,r=new _t,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new zt},normalMatrix:{value:new q}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $t.setFromAxisAngle(e,t),this.quaternion.multiply($t),this}rotateOnWorldAxis(e,t){return $t.setFromAxisAngle(e,t),this.quaternion.premultiply($t),this}rotateX(e){return this.rotateOnAxis(on,e)}rotateY(e){return this.rotateOnAxis(sn,e)}rotateZ(e){return this.rotateOnAxis(cn,e)}translateOnAxis(e,t){return Qt.copy(e).applyQuaternion(this.quaternion),this.position.add(Qt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(on,e)}translateY(e){return this.translateOnAxis(sn,e)}translateZ(e){return this.translateOnAxis(cn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tn.copy(e):tn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),nn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(nn,tn,this.up):en.lookAt(tn,nn,this.up),this.quaternion.setFromRotationMatrix(en),r&&(en.extractRotation(r.matrixWorld),$t.setFromRotationMatrix(en),this.quaternion.premultiply($t.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(U(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ln),dn.child=e,this.dispatchEvent(dn),dn.child=null):U(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(un),fn.child=e,this.dispatchEvent(fn),fn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ln),dn.child=e,this.dispatchEvent(dn),dn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nn,e,rn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nn,an,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};pn.DEFAULT_UP=new K(0,1,0),pn.DEFAULT_MATRIX_AUTO_UPDATE=!0,pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=class extends pn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},hn={type:`move`},gn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},_n={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},yn={h:0,s:0,l:0};function bn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Y=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ue){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,J.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=J.workingColorSpace){return this.r=e,this.g=t,this.b=n,J.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=J.workingColorSpace){if(e=dt(e,1),t=W(t,0,1),n=W(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=bn(i,r,e+1/3),this.g=bn(i,r,e),this.b=bn(i,r,e-1/3)}return J.colorSpaceToWorking(this,r),this}setStyle(e,t=Ue){function n(t){t!==void 0&&parseFloat(t)<1&&H(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:H(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);H(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ue){let n=_n[e.toLowerCase()];return n===void 0?H(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wt(e.r),this.g=wt(e.g),this.b=wt(e.b),this}copyLinearToSRGB(e){return this.r=Tt(e.r),this.g=Tt(e.g),this.b=Tt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ue){return J.workingToColorSpace(xn.copy(this),e),Math.round(W(xn.r*255,0,255))*65536+Math.round(W(xn.g*255,0,255))*256+Math.round(W(xn.b*255,0,255))}getHexString(e=Ue){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=J.workingColorSpace){J.workingToColorSpace(xn.copy(this),t);let n=xn.r,r=xn.g,i=xn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=J.workingColorSpace){return J.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Ue){J.workingToColorSpace(xn.copy(this),e);let t=xn.r,n=xn.g,r=xn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(vn),this.setHSL(vn.h+e,vn.s+t,vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(yn);let n=ft(vn.h,yn.h,t),r=ft(vn.s,yn.s,t),i=ft(vn.l,yn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Y;Y.NAMES=_n;var Sn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new Y(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Cn=class extends pn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentIntensity=1,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},wn=new K,Tn=new K,En=new K,Dn=new K,On=new K,kn=new K,An=new K,jn=new K,Mn=new K,Nn=new K,Pn=new Pt,Fn=new Pt,In=new Pt,Ln=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),wn.subVectors(e,t),r.cross(wn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){wn.subVectors(r,t),Tn.subVectors(n,t),En.subVectors(e,t);let a=wn.dot(wn),o=wn.dot(Tn),s=wn.dot(En),c=Tn.dot(Tn),l=Tn.dot(En),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Dn)!==null&&Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Dn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Dn.x),s.addScaledVector(a,Dn.y),s.addScaledVector(o,Dn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Pn.setScalar(0),Fn.setScalar(0),In.setScalar(0),Pn.fromBufferAttribute(e,t),Fn.fromBufferAttribute(e,n),In.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Pn,i.x),a.addScaledVector(Fn,i.y),a.addScaledVector(In,i.z),a}static isFrontFacing(e,t,n,r){return wn.subVectors(n,t),Tn.subVectors(e,t),wn.cross(Tn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),wn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;On.subVectors(r,n),kn.subVectors(i,n),jn.subVectors(e,n);let s=On.dot(jn),c=kn.dot(jn);if(s<=0&&c<=0)return t.copy(n);Mn.subVectors(e,r);let l=On.dot(Mn),u=kn.dot(Mn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(On,a);Nn.subVectors(e,i);let f=On.dot(Nn),p=kn.dot(Nn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(kn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return An.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(An,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(On,a).addScaledVector(kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Rn=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Bn):Bn.fromBufferAttribute(r,t),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Vn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Vn.copy(e.boundingBox)),Vn.applyMatrix4(e.matrixWorld),this.union(Vn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jn),Yn.subVectors(this.max,Jn),Hn.subVectors(e.a,Jn),Un.subVectors(e.b,Jn),Wn.subVectors(e.c,Jn),Gn.subVectors(Un,Hn),Kn.subVectors(Wn,Un),qn.subVectors(Hn,Wn);let t=[0,-Gn.z,Gn.y,0,-Kn.z,Kn.y,0,-qn.z,qn.y,Gn.z,0,-Gn.x,Kn.z,0,-Kn.x,qn.z,0,-qn.x,-Gn.y,Gn.x,0,-Kn.y,Kn.x,0,-qn.y,qn.x,0];return!Qn(t,Hn,Un,Wn,Yn)||(t=[1,0,0,0,1,0,0,0,1],!Qn(t,Hn,Un,Wn,Yn))?!1:(Xn.crossVectors(Gn,Kn),t=[Xn.x,Xn.y,Xn.z],Qn(t,Hn,Un,Wn,Yn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zn=[new K,new K,new K,new K,new K,new K,new K,new K],Bn=new K,Vn=new Rn,Hn=new K,Un=new K,Wn=new K,Gn=new K,Kn=new K,qn=new K,Jn=new K,Yn=new K,Xn=new K,Zn=new K;function Qn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Zn.fromArray(e,a);let o=i.x*Math.abs(Zn.x)+i.y*Math.abs(Zn.y)+i.z*Math.abs(Zn.z),s=t.dot(Zn),c=n.dot(Zn),l=r.dot(Zn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var $n=new K,er=new G,tr=0,nr=class extends ot{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Je,this.updateRanges=[],this.gpuType=w,this.version=0,this._normalizationScale=e===void 0?void 0:mt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)er.fromBufferAttribute(this,t),er.applyMatrix3(e),this.setXY(t,er.x,er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix3(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix4(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyNormalMatrix(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.transformDirection(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?ht(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?gt(e,this.array):Math.round(e*t)}},rr=class extends nr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ir=class extends nr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ar=class extends nr{constructor(e,t,n){super(new Float32Array(e),t,n)}},or=new Rn,sr=new K,cr=new K,lr=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?or.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);let t=sr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(sr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(cr)),this.expandByPoint(sr.copy(e.center).sub(cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ur=0,dr=new zt,fr=new pn,pr=new K,mr=new Rn,hr=new Rn,gr=new K,_r=class e extends ot{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ur++}),this.uuid=ut(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Xe(e)?ir:rr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new q().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return dr.makeRotationFromQuaternion(e),this.applyMatrix4(dr),this}rotateX(e){return dr.makeRotationX(e),this.applyMatrix4(dr),this}rotateY(e){return dr.makeRotationY(e),this.applyMatrix4(dr),this}rotateZ(e){return dr.makeRotationZ(e),this.applyMatrix4(dr),this}translate(e,t,n){return dr.makeTranslation(e,t,n),this.applyMatrix4(dr),this}scale(e,t,n){return dr.makeScale(e,t,n),this.applyMatrix4(dr),this}lookAt(e){return fr.lookAt(e),fr.updateMatrix(),this.applyMatrix4(fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new ar(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&H(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)U(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];mr.setFromBufferAttribute(n),this.morphTargetsRelative?(gr.addVectors(this.boundingBox.min,mr.min),this.boundingBox.expandByPoint(gr),gr.addVectors(this.boundingBox.max,mr.max),this.boundingBox.expandByPoint(gr)):(this.boundingBox.expandByPoint(mr.min),this.boundingBox.expandByPoint(mr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&U(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)U(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);else if(e){let n=this.boundingSphere.center;if(mr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];hr.setFromBufferAttribute(n),this.morphTargetsRelative?(gr.addVectors(mr.min,hr.min),mr.expandByPoint(gr),gr.addVectors(mr.max,hr.max),mr.expandByPoint(gr)):(mr.expandByPoint(hr.min),mr.expandByPoint(hr.max))}mr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)gr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(gr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)gr.fromBufferAttribute(a,t),o&&(pr.fromBufferAttribute(e,t),gr.add(pr)),r=Math.max(r,n.distanceToSquared(gr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&U(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){U(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new nr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let l=new K,u=new K,d=new K,f=new G,p=new G,m=new G,h=new K,g=new K;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new K,b=new K,x=new K,S=new K;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new nr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gr.fromBufferAttribute(e,t),gr.normalize(),e.setXYZ(t,gr.x,gr.y,gr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new nr(a,r,i)}if(this.index===null)return H(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},vr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Je,this.updateRanges=[],this.version=0,this.uuid=ut()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=yr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=yr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function yr(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=ut()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var br=new K,xr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:mt(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix4(e),this.setXYZ(t,br.x,br.y,br.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyNormalMatrix(e),this.setXYZ(t,br.x,br.y,br.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.transformDirection(e),this.setXYZ(t,br.x,br.y,br.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){tt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new nr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?ht(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?gt(e,this.data.array):Math.round(e*t)}},Sr=new K,Cr=new K,wr=new q,Tr=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Sr.subVectors(n,t).cross(Cr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Sr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wr.getNormalMatrix(e),r=this.coplanarPoint(Sr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Er=0,Dr=class extends ot{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Er++}),this.uuid=ut(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Y(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qe,this.stencilZFail=qe,this.stencilZPass=qe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){H(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?H(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Y().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Tr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new G().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new G().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Or=class extends Dr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new Y(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kr,Ar=new K,jr=new K,Mr=new K,Nr=new G,Pr=new G,Fr=new zt,Ir=new K,Lr=new K,Rr=new K,zr=new G,Br=new G,Vr=new G,Hr=class extends pn{constructor(e=new Or){if(super(),this.isSprite=!0,this.type=`Sprite`,kr===void 0){kr=new _r;let e=new vr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);kr.setIndex([0,1,2,0,2,3]),kr.setAttribute(`position`,new xr(e,3,0,!1)),kr.setAttribute(`uv`,new xr(e,2,3,!1))}this.geometry=kr,this.material=e,this.center=new G(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&U(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),jr.setFromMatrixScale(this.matrixWorld),Fr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jr.multiplyScalar(-Mr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Ur(Ir.set(-.5,-.5,0),Mr,a,jr,r,i),Ur(Lr.set(.5,-.5,0),Mr,a,jr,r,i),Ur(Rr.set(.5,.5,0),Mr,a,jr,r,i),zr.set(0,0),Br.set(1,0),Vr.set(1,1);let o=e.ray.intersectTriangle(Ir,Lr,Rr,!1,Ar);if(o===null&&(Ur(Lr.set(-.5,.5,0),Mr,a,jr,r,i),Br.set(0,1),o=e.ray.intersectTriangle(Ir,Rr,Lr,!1,Ar),o===null))return;let s=e.ray.origin.distanceTo(Ar);s<e.near||s>e.far||t.push({distance:s,point:Ar.clone(),uv:Ln.getInterpolation(Ar,Ir,Lr,Rr,zr,Br,Vr,new G),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ur(e,t,n,r,i,a){Nr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Pr.copy(Nr):(Pr.x=a*Nr.x-i*Nr.y,Pr.y=i*Nr.x+a*Nr.y),e.copy(t),e.x+=Pr.x,e.y+=Pr.y,e.applyMatrix4(Fr)}var Wr=new K,Gr=new K,Kr=new K,qr=new K,Jr=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wr.copy(this.origin).addScaledVector(this.direction,t),Wr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Gr.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(Gr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Kr),o=qr.dot(this.direction),s=-qr.dot(Kr),c=qr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Gr).addScaledVector(Kr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Wr.subVectors(e.center,this.origin);let n=Wr.dot(this.direction),r=Wr.dot(Wr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Wr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let ee=S/w,P=C/w,F=1/w,te=T-ee*D,ne=E-P*D,re=O-ee*A,ie=k-P*A,ae=j-ee*N,oe=M-P*N,se=ae*ie-oe*re,I=te*oe-ne*ae,L=re*ne-ie*te;if(r){if(se<0||I<0||L<0)return null}else if((se<0||I<0||L<0)&&(se>0||I>0||L>0))return null;let ce=se+I+L;if(ce===0)return null;let le=F*(se*D+I*A+L*N);return(ce>0?le<0:le>0)?null:this.at(le/ce,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yr=class extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xr=new zt,Zr=new Jr,Qr=new lr,$r=new K,ei=new K,ti=new K,ni=new K,ri=new K,ii=new K,ai=new K,oi=new K,si=class extends pn{constructor(e=new _r,t=new Yr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ii.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ri.fromBufferAttribute(s,e),a?ii.addScaledVector(ri,r):ii.addScaledVector(ri.sub(t),r))}t.add(ii)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(i),Zr.copy(e.ray).recast(e.near),Qr.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(Qr,$r)===null||Zr.origin.distanceToSquared($r)>(e.far-e.near)**2)||(Xr.copy(i).invert(),Zr.copy(e.ray).applyMatrix4(Xr),(n.boundingBox===null||Zr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=li(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=li(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=li(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=li(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ci(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;oi.copy(s),oi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(oi);return l<n.near||l>n.far?null:{distance:l,point:oi.clone(),object:e}}function li(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ei),e.getVertexPosition(c,ti),e.getVertexPosition(l,ni);let u=ci(e,t,n,r,ei,ti,ni,ai);if(u){let e=new K;Ln.getBarycoord(ai,ei,ti,ni,e),i&&(u.uv=Ln.getInterpolatedAttribute(i,s,c,l,e,new G)),a&&(u.uv1=Ln.getInterpolatedAttribute(a,s,c,l,e,new G)),o&&(u.normal=Ln.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};Ln.getNormal(ei,ti,ni,t.normal),u.face=t,u.barycoord=e}return u}var ui=class extends Nt{constructor(e=null,t=1,n=1,r,i,a,o,s,c=f,l=f,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},di=class extends nr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},fi=new zt,pi=new zt,mi=[],hi=new Rn,gi=new zt,_i=new si,vi=new lr,yi=class extends si{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,gi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fi),hi.copy(e.boundingBox).applyMatrix4(fi),this.boundingBox.union(hi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new lr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fi),vi.copy(e.boundingSphere).applyMatrix4(fi),this.boundingSphere.union(vi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(_i.geometry=this.geometry,_i.material=this.material,_i.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vi.copy(this.boundingSphere),vi.applyMatrix4(n),e.ray.intersectsSphere(vi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,fi),pi.multiplyMatrices(n,fi),_i.matrixWorld=pi,_i.raycast(e,mi);for(let e=0,n=mi.length;e<n;e++){let n=mi[e];n.instanceId=i,n.object=this,t.push(n)}mi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ui(new Float32Array(r*this.count),r,this.count,F,w));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bi=new lr,xi=new G(.5,.5),Si=new K,Ci=class{constructor(e=new Tr,t=new Tr,n=new Tr,r=new Tr,i=new Tr,a=new Tr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ye,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476+xi.distanceTo(e.center),bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Si.x=r.normal.x>0?e.max.x:e.min.x,Si.y=r.normal.y>0?e.max.y:e.min.y,Si.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Si)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},wi=new zt,Ti=class e{constructor(){this.coordinateSystem=Ye,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];wi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Ci),n[e].setFromProjectionMatrix(wi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Ci),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Ei=class extends Nt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Di=class extends Nt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Oi=class extends Nt{constructor(e,t,n=C,r,i,a,o=f,s=f,c,l=ee,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ki=class extends Oi{constructor(e,t=C,n=301,r,i,a=f,o=f,s,c=ee){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ai=class extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ji=class e extends _r{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new ar(c,3)),this.setAttribute(`normal`,new ar(l,3)),this.setAttribute(`uv`,new ar(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Mi=class e extends _r{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new ar(u,3)),this.setAttribute(`normal`,new ar(d,3)),this.setAttribute(`uv`,new ar(f,2));function _(){let a=new K,_=new K,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new G,m=new K,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ni=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){H(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new G:new K);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new K,r=[],i=[],a=[],o=new K,s=new zt;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new K)}i[0]=new K,a[0]=new K;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(W(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(W(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Pi=class extends Ni{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new G){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fi=class extends Pi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ii(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Li=new K,Ri=new K,zi=new Ii,Bi=new Ii,Vi=new Ii,Hi=class extends Ni{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new K){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Ri.subVectors(r[0],r[1]).add(r[0]),c=Ri);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Li.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Li),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),zi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Bi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Vi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(zi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Bi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Vi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(zi.calc(s),Bi.calc(s),Vi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ui(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Wi(e,t){let n=1-e;return n*n*t}function Gi(e,t){return 2*(1-e)*e*t}function Ki(e,t){return e*e*t}function qi(e,t,n,r){return Wi(e,t)+Gi(e,n)+Ki(e,r)}function Ji(e,t){let n=1-e;return n*n*n*t}function Yi(e,t){let n=1-e;return 3*n*n*e*t}function Xi(e,t){return 3*(1-e)*e*e*t}function Zi(e,t){return e*e*e*t}function Qi(e,t,n,r,i){return Ji(e,t)+Yi(e,n)+Xi(e,r)+Zi(e,i)}var $i=class extends Ni{constructor(e=new G,t=new G,n=new G,r=new G){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Qi(e,r.x,i.x,a.x,o.x),Qi(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ea=class extends Ni{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Qi(e,r.x,i.x,a.x,o.x),Qi(e,r.y,i.y,a.y,o.y),Qi(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ta=class extends Ni{constructor(e=new G,t=new G){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},na=class extends Ni{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends Ni{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(qi(e,r.x,i.x,a.x),qi(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ia=class extends Ni{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(qi(e,r.x,i.x,a.x),qi(e,r.y,i.y,a.y),qi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends Ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new G){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ui(o,s.x,c.x,l.x,u.x),Ui(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new G().fromArray(n))}return this}},oa=Object.freeze({__proto__:null,ArcCurve:Fi,CatmullRomCurve3:Hi,CubicBezierCurve:$i,CubicBezierCurve3:ea,EllipseCurve:Pi,LineCurve:ta,LineCurve3:na,QuadraticBezierCurve:ra,QuadraticBezierCurve3:ia,SplineCurve:aa}),sa=class extends Ni{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new oa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new oa[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},ca=class extends sa{constructor(e){super(),this.type=`Path`,this.currentPoint=new G,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ta(this.currentPoint.clone(),new G(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new ra(this.currentPoint.clone(),new G(e,t),new G(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new $i(this.currentPoint.clone(),new G(e,t),new G(n,r),new G(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new aa([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Pi(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},la=class extends ca{constructor(e){super(e),this.uuid=ut(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ca().fromJSON(n))}return this}};function ua(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=da(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=va(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return pa(a,o,n,s,c,l,0),o}function da(e,t,n,r,i){let a;if(i===Ha(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=za(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=za(i/r|0,e[i],e[i+1],a);return a&&ja(a,a.next)&&(Ba(a),a=a.next),a}function fa(e,t){if(!e)return e;t||(t=e);let n=e,r;do if(r=!1,!n.steiner&&(ja(n,n.next)||Aa(n.prev,n,n.next)===0)){if(Ba(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function pa(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Ca(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?ha(e,r,i,a):ma(e))t.push(c.i,e.i,l.i),Ba(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=ga(fa(e),t),pa(e,t,n,r,i,a,2)):o===2&&_a(e,t,n,r,i,a):pa(fa(e),t,n,r,i,a,1);break}}}function ma(e){let t=e.prev,n=e,r=e.next;if(Aa(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Oa(i,s,a,c,o,l,m.x,m.y)&&Aa(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ha(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Aa(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Ta(p,m,t,n,r),v=Ta(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Oa(s,u,c,d,l,f,y.x,y.y)&&Aa(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Oa(s,u,c,d,l,f,b.x,b.y)&&Aa(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Oa(s,u,c,d,l,f,y.x,y.y)&&Aa(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Oa(s,u,c,d,l,f,b.x,b.y)&&Aa(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ga(e,t){let n=e;do{let r=n.prev,i=n.next.next;!ja(r,i)&&Ma(r,n,n.next,i)&&Ia(r,i)&&Ia(i,r)&&(t.push(r.i,n.i,i.i),Ba(n),Ba(n.next),n=e=i),n=n.next}while(n!==e);return fa(n)}function _a(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&ka(o,e)){let s=Ra(o,e);o=fa(o,o.next),s=fa(s,s.next),pa(o,t,n,r,i,a,0),pa(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function va(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=da(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Ea(o))}i.sort(ya);for(let e=0;e<i.length;e++)n=ba(i[e],n);return n}function ya(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function ba(e,t){let n=xa(e,t);if(!n)return t;let r=Ra(n,e);return fa(r,r.next),fa(n,n.next)}function xa(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(ja(e,n))return n;do{if(ja(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Da(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Ia(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Sa(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Sa(e,t){return Aa(e.prev,e,t.prev)<0&&Aa(t.next,e,e.next)<0}function Ca(e,t,n,r){let i=e;do i.z===0&&(i.z=Ta(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,wa(i)}function wa(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Ta(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ea(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Da(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Oa(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Da(e,t,n,r,i,a,o,s)}function ka(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Fa(e,t)&&(Ia(e,t)&&Ia(t,e)&&La(e,t)&&(Aa(e.prev,e,t.prev)||Aa(e,t.prev,t))||ja(e,t)&&Aa(e.prev,e,e.next)>0&&Aa(t.prev,t,t.next)>0)}function Aa(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function ja(e,t){return e.x===t.x&&e.y===t.y}function Ma(e,t,n,r){let i=Pa(Aa(e,t,n)),a=Pa(Aa(e,t,r)),o=Pa(Aa(n,r,e)),s=Pa(Aa(n,r,t));return!!(i!==a&&o!==s||i===0&&Na(e,n,t)||a===0&&Na(e,r,t)||o===0&&Na(n,e,r)||s===0&&Na(n,t,r))}function Na(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Pa(e){return e>0?1:e<0?-1:0}function Fa(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ma(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Ia(e,t){return Aa(e.prev,e,e.next)<0?Aa(e,t,e.next)>=0&&Aa(e,e.prev,t)>=0:Aa(e,t,e.prev)<0||Aa(e,e.next,t)<0}function La(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ra(e,t){let n=Va(e.i,e.x,e.y),r=Va(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function za(e,t,n,r){let i=Va(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Ba(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Va(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ha(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Ua=class{static triangulate(e,t,n=2){return ua(e,t,n)}},Wa=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Ga(e),Ka(n,e);let a=e.length;t.forEach(Ga);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Ka(n,t[e]);let o=Ua.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Ga(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ka(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var qa=class e extends _r{constructor(e=new la([new G(.5,.5),new G(-.5,.5),new G(-.5,-.5),new G(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new ar(r,3)),this.setAttribute(`uv`,new ar(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Ja:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new K,b=new K,x=new K}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Wa.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Wa.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||U(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new G(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new G(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,ee=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),ee=ee.concat(N)}let P;if(p===0)P=Wa.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);ae(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);ae(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}P=Wa.triangulateShape(e,t)}let F=P.length,te=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],ee[e],te):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ae(x.x,x.y,x.z)):ae(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],ee[t],te):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ae(x.x,x.y,x.z)):ae(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);ae(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?ae(i.x,i.y+g[s-1].y,g[s-1].x+n):ae(i.x,i.y,c+n)}}}ne(),re();function ne(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<F;e++){let n=P[e];oe(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<F;e++){let n=P[e];oe(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<F;e++){let t=P[e];oe(t[2],t[1],t[0])}for(let e=0;e<F;e++){let t=P[e];oe(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function re(){let e=r.length/3,t=0;ie(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ie(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ie(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);se(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ae(e,t,n){a.push(e),a.push(t),a.push(n)}function oe(e,t,i){I(e),I(t),I(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);L(o[0]),L(o[1]),L(o[2])}function se(e,t,i,a){I(e),I(t),I(a),I(t),I(i),I(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);L(s[0]),L(s[1]),L(s[3]),L(s[1]),L(s[2]),L(s[3])}function I(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function L(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ya(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new oa[i.type]().fromJSON(i)),new e(r,t.options)}},Ja={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new G(a,o),new G(s,c),new G(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new G(o,1-c),new G(l,1-d),new G(f,1-m),new G(h,1-_)]:[new G(s,1-c),new G(u,1-d),new G(p,1-m),new G(g,1-_)]}};function Ya(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Xa=class e extends _r{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new ar(p,3)),this.setAttribute(`normal`,new ar(m,3)),this.setAttribute(`uv`,new ar(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Za=class e extends _r{constructor(e=new la([new G(0,.5),new G(-.5,-.5),new G(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new ar(r,3)),this.setAttribute(`normal`,new ar(i,3)),this.setAttribute(`uv`,new ar(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Wa.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Wa.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Wa.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Qa(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Qa(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var $a=class e extends _r{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new K,d=new K,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new ar(p,3)),this.setAttribute(`normal`,new ar(m,3)),this.setAttribute(`uv`,new ar(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function eo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(no(i))i.isRenderTargetTexture?(H(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(no(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function to(e){let t={};for(let n=0;n<e.length;n++){let r=eo(e[n]);for(let e in r)t[e]=r[e]}return t}function no(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ro(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function io(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:J.workingColorSpace}var ao={clone:eo,merge:to},oo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,so=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,co=class extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oo,this.fragmentShader=so,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=ro(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Y().setHex(r.value);break;case`v2`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Pt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new zt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},lo=class extends co{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},uo=class extends Dr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Y(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fo=class extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=He,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},po=class extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function mo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ho(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var go=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},_o=class extends go{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ze,endingEnd:ze}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Be:i=e,o=2*t-n;break;case Ve:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Be:a=e,s=2*n-t;break;case Ve:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},vo=class extends go{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},yo=class extends go{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},bo=class extends go{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Co(n,t,g,y,r);i[p]=xo(x,o,_,b,m)}return i}};function xo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function So(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Co(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=xo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=So(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var wo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=mo(t,this.TimeBufferType),this.values=mo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:mo(e.times,Array),values:mo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),ho(e.settings)&&(n.settings={inTangents:mo(e.settings.inTangents,Array),outTangents:mo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new bo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case V:t=this.InterpolantFactoryMethodDiscrete;break;case Ie:t=this.InterpolantFactoryMethodLinear;break;case Le:t=this.InterpolantFactoryMethodSmooth;break;case Re:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return H(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return V;case this.InterpolantFactoryMethodLinear:return Ie;case this.InterpolantFactoryMethodSmooth:return Le;case this.InterpolantFactoryMethodBezier:return Re}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;ho(this.settings)&&(To(this.settings.inTangents,e),To(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ho(this.settings)&&(Eo(this.settings.inTangents,e),Eo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(U(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(U(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){U(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){U(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ze(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){U(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Le,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ho(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function To(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Eo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}wo.prototype.ValueTypeName=``,wo.prototype.TimeBufferType=Float32Array,wo.prototype.ValueBufferType=Float32Array,wo.prototype.DefaultInterpolation=Ie;var Do=class extends wo{constructor(e,t,n){super(e,t,n)}};Do.prototype.ValueTypeName=`bool`,Do.prototype.ValueBufferType=Array,Do.prototype.DefaultInterpolation=V,Do.prototype.InterpolantFactoryMethodLinear=void 0,Do.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends wo{constructor(e,t,n,r){super(e,t,n,r)}};Oo.prototype.ValueTypeName=`color`;var ko=class extends wo{constructor(e,t,n,r){super(e,t,n,r)}};ko.prototype.ValueTypeName=`number`;var Ao=class extends go{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)_t.slerpFlat(i,0,a,c-o,a,c,s);return i}},jo=class extends wo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ao(this.times,this.values,this.getValueSize(),e)}};jo.prototype.ValueTypeName=`quaternion`,jo.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends wo{constructor(e,t,n){super(e,t,n)}};Mo.prototype.ValueTypeName=`string`,Mo.prototype.ValueBufferType=Array,Mo.prototype.DefaultInterpolation=V,Mo.prototype.InterpolantFactoryMethodLinear=void 0,Mo.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends wo{constructor(e,t,n,r){super(e,t,n,r)}};No.prototype.ValueTypeName=`vector`;var Po=class extends pn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Y(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Fo=class extends Po{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Y(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Io=new zt,Lo=new K,Ro=new K,zo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new G(512,512),this.mapType=v,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ci,this._frameExtents=new G(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Lo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lo),Ro.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ro),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Io,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Io)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Bo=new K,Vo=new _t,Ho=new K,Uo=class extends pn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Ye,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bo,Vo,Ho),Ho.x===1&&Ho.y===1&&Ho.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,Vo,Ho.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Bo,Vo,Ho),Ho.x===1&&Ho.y===1&&Ho.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,Vo,Ho.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wo=new K,Go=new G,Ko=new G,qo=class extends Uo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ct*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lt*2*Math.atan(Math.tan(ct*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wo.x,Wo.y).multiplyScalar(-e/Wo.z),Wo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wo.x,Wo.y).multiplyScalar(-e/Wo.z)}getViewSize(e,t){return this.getViewBounds(e,Go,Ko),t.subVectors(Ko,Go)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ct*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Jo=class extends Uo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yo=class extends zo{constructor(){super(new Jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xo=class extends Po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new Yo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Zo=-90,Qo=1,$o=class extends pn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qo(Zo,Qo,e,t);r.layers=this.layers,this.add(r);let i=new qo(Zo,Qo,e,t);i.layers=this.layers,this.add(i);let a=new qo(Zo,Qo,e,t);a.layers=this.layers,this.add(a);let o=new qo(Zo,Qo,e,t);o.layers=this.layers,this.add(o);let s=new qo(Zo,Qo,e,t);s.layers=this.layers,this.add(s);let c=new qo(Zo,Qo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},es=class extends qo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ts=`\\[\\]\\.:\\/`,ns=RegExp(`[\\[\\]\\.:\\/]`,`g`),rs=`[^\\[\\]\\.:\\/]`,is=`[^`+ts.replace(`\\.`,``)+`]`,as=`((?:WC+[\\/:])*)`.replace(`WC`,rs),os=`(WCOD+)?`.replace(`WCOD`,is),ss=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,rs),cs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,rs),ls=RegExp(`^`+as+os+ss+cs+`$`),us=[`material`,`materials`,`bones`,`map`],ds=class{constructor(e,t,n){let r=n||fs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},fs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ns,``)}static parseTrackName(e){let t=ls.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);us.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){H(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){U(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){U(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){U(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){U(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){U(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;U(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fs.Composite=ds,fs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},fs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},fs.prototype.GetterByBindingType=[fs.prototype._getValue_direct,fs.prototype._getValue_array,fs.prototype._getValue_arrayElement,fs.prototype._getValue_toArray],fs.prototype.SetterByBindingTypeAndVersioning=[[fs.prototype._setValue_direct,fs.prototype._setValue_direct_setNeedsUpdate,fs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fs.prototype._setValue_array,fs.prototype._setValue_array_setNeedsUpdate,fs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fs.prototype._setValue_arrayElement,fs.prototype._setValue_arrayElement_setNeedsUpdate,fs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fs.prototype._setValue_fromArray,fs.prototype._setValue_fromArray_setNeedsUpdate,fs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ps=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,H(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;function ms(e,t,n,r){let i=hs(r);switch(n){case j:return e*t;case F:return e*t/i.components*i.byteLength;case te:return e*t/i.components*i.byteLength;case ne:return e*t*2/i.components*i.byteLength;case re:return e*t*2/i.components*i.byteLength;case M:return e*t*3/i.components*i.byteLength;case N:return e*t*4/i.components*i.byteLength;case ie:return e*t*4/i.components*i.byteLength;case ae:case oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case se:case I:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ce:case ue:return Math.max(e,16)*Math.max(t,8)/4;case L:case le:return Math.max(e,8)*Math.max(t,8)/2;case de:case fe:case me:case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pe:case ge:case _e:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ye:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case be:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case De:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Oe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ke:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ae:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case je:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case R:case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Pe:case z:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Fe:case B:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function hs(e){switch(e){case v:case y:return{byteLength:1,components:1};case x:case b:case T:return{byteLength:2,components:1};case E:case D:return{byteLength:2,components:4};case C:case S:case w:return{byteLength:4,components:1};case k:case A:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?H(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function gs(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function _s(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var X={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
void main() {
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Z={common:{diffuse:{value:new Y(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new q}},envmap:{envMap:{value:null},envMapRotation:{value:new q},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new q},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Y(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Y(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0},uvTransform:{value:new q}},sprite:{diffuse:{value:new Y(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}}},vs={basic:{uniforms:to([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:X.meshbasic_vert,fragmentShader:X.meshbasic_frag},lambert:{uniforms:to([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new Y(0)},envMapIntensity:{value:1}}]),vertexShader:X.meshlambert_vert,fragmentShader:X.meshlambert_frag},phong:{uniforms:to([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new Y(0)},specular:{value:new Y(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:X.meshphong_vert,fragmentShader:X.meshphong_frag},standard:{uniforms:to([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new Y(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag},toon:{uniforms:to([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new Y(0)}}]),vertexShader:X.meshtoon_vert,fragmentShader:X.meshtoon_frag},matcap:{uniforms:to([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:X.meshmatcap_vert,fragmentShader:X.meshmatcap_frag},points:{uniforms:to([Z.points,Z.fog]),vertexShader:X.points_vert,fragmentShader:X.points_frag},dashed:{uniforms:to([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X.linedashed_vert,fragmentShader:X.linedashed_frag},depth:{uniforms:to([Z.common,Z.displacementmap]),vertexShader:X.depth_vert,fragmentShader:X.depth_frag},normal:{uniforms:to([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:X.meshnormal_vert,fragmentShader:X.meshnormal_frag},sprite:{uniforms:to([Z.sprite,Z.fog]),vertexShader:X.sprite_vert,fragmentShader:X.sprite_frag},background:{uniforms:{uvTransform:{value:new q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X.background_vert,fragmentShader:X.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new q}},vertexShader:X.backgroundCube_vert,fragmentShader:X.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X.cube_vert,fragmentShader:X.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X.equirect_vert,fragmentShader:X.equirect_frag},distance:{uniforms:to([Z.common,Z.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X.distance_vert,fragmentShader:X.distance_frag},shadow:{uniforms:to([Z.lights,Z.fog,{color:{value:new Y(0)},opacity:{value:1}}]),vertexShader:X.shadow_vert,fragmentShader:X.shadow_frag}};vs.physical={uniforms:to([vs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new q},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new q},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new q},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new q},sheen:{value:0},sheenColor:{value:new Y(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new q},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new q},attenuationDistance:{value:0},attenuationColor:{value:new Y(0)},specularColor:{value:new Y(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new q},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new q}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag};var ys={r:0,b:0,g:0},bs=new zt,xs=new q;xs.set(-1,0,0,0,1,0,0,0,1);function Ss(e,t,n,r,i,a){let o=new Y(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new si(new ji(1,1,1),new co({name:`BackgroundCubeMaterial`,uniforms:eo(vs.backgroundCube.uniforms),vertexShader:vs.backgroundCube.vertexShader,fragmentShader:vs.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(bs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(xs),l.material.toneMapped=J.getTransfer(i.colorSpace)!==Ke,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new si(new Xa(2,2),new co({name:`BackgroundMaterial`,uniforms:eo(vs.background.uniforms),vertexShader:vs.background.vertexShader,fragmentShader:vs.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=J.getTransfer(i.colorSpace)!==Ke,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ys,io(e)),n.buffers.color.setClear(ys.r,ys.g,ys.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Cs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ws(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ts(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(H(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&H(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&H(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Es(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Tr,s=new q,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ds=class extends It{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ei(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ji(5,5,5),i=new co({name:`CubemapFromEquirect`,uniforms:eo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new si(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=h),new $o(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Os=256,ks=3,As=20,js=256,Ms=16,Ns=3,Ps=new K,Fs=new Y,Is=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $o(1,10,null),this._boxMesh=new si(new ji(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ps}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Fs));let h=new $o(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Us(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Os,pt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Os:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Ls(e,!1,!1),n=Math.log2(e)-ks;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ls(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Us()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Hs()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=zs(),this._integrationMaterial=Bs());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Ms);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Ns)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(js*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Vs());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Ls(e,t,n){return new Ds(e,{minFilter:_,generateMipmaps:t,type:T,colorSpace:We,depthBuffer:n})}function Rs(e,t,n){return new co({name:e,uniforms:t,vertexShader:X.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function zs(){return Rs(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${js}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Bs(){return Rs(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ms}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Vs(){return Rs(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${As}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Hs(){return Rs(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Us(){return Rs(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ws(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Ds(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Is(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Is(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Gs(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&rt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ks(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?ir:rr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function qs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Js(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:U(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ys(e,t,n){let r=new WeakMap,i=new Pt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Lt(h,p,m,u);g.type=w,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new G(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Xs(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Zs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Qs(e,t,n,r,i,a){let o=new It(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new _r;u.setAttribute(`position`,new ar([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new ar([0,2,0,0,2,0],2));let d=new lo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new si(u,d),p=new Jo(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new It(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}),c=new It(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Oi(t,n),a===!0&&(l.format=P,l.type=O)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},J.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Zs[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var $s=new Nt,ec=new Oi(1,1),tc=new ki(1),nc=new Lt,rc=new Rt,ic=new Ei,ac=[],oc=[],sc=new Float32Array(16),cc=new Float32Array(9),lc=new Float32Array(4);function uc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ac[i];if(a===void 0&&(a=new Float32Array(i),ac[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function dc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function fc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function pc(e,t){let n=oc[t];n===void 0&&(n=new Int32Array(t),oc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function mc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dc(n,t))return;e.uniform2fv(this.addr,t),fc(n,t)}}function gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(dc(n,t))return;e.uniform3fv(this.addr,t),fc(n,t)}}function _c(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dc(n,t))return;e.uniform4fv(this.addr,t),fc(n,t)}}function vc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(dc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),fc(n,t)}else{if(dc(n,r))return;lc.set(r),e.uniformMatrix2fv(this.addr,!1,lc),fc(n,r)}}function yc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(dc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),fc(n,t)}else{if(dc(n,r))return;cc.set(r),e.uniformMatrix3fv(this.addr,!1,cc),fc(n,r)}}function bc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(dc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),fc(n,t)}else{if(dc(n,r))return;sc.set(r),e.uniformMatrix4fv(this.addr,!1,sc),fc(n,r)}}function xc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Sc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dc(n,t))return;e.uniform2iv(this.addr,t),fc(n,t)}}function Cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(dc(n,t))return;e.uniform3iv(this.addr,t),fc(n,t)}}function wc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dc(n,t))return;e.uniform4iv(this.addr,t),fc(n,t)}}function Tc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dc(n,t))return;e.uniform2uiv(this.addr,t),fc(n,t)}}function Dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(dc(n,t))return;e.uniform3uiv(this.addr,t),fc(n,t)}}function Oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dc(n,t))return;e.uniform4uiv(this.addr,t),fc(n,t)}}function kc(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Ac(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?kc(ec):$s,n.setTexture2D(t||a,i)}function jc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||rc,i)}function Mc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?kc(tc):ic,n.setTextureCube(t||a,i)}function Nc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||nc,i)}function Pc(e){switch(e){case 5126:return mc;case 35664:return hc;case 35665:return gc;case 35666:return _c;case 35674:return vc;case 35675:return yc;case 35676:return bc;case 5124:case 35670:return xc;case 35667:case 35671:return Sc;case 35668:case 35672:return Cc;case 35669:case 35673:return wc;case 5125:return Tc;case 36294:return Ec;case 36295:return Dc;case 36296:return Oc;case 35678:case 36198:case 36298:case 36306:case 35682:return Ac;case 35679:case 36299:case 36307:return jc;case 35680:case 36300:case 36308:case 36293:return Mc;case 36289:case 36303:case 36311:case 36292:return Nc}}function Fc(e,t){e.uniform1fv(this.addr,t)}function Ic(e,t){let n=uc(t,this.size,2);e.uniform2fv(this.addr,n)}function Lc(e,t){let n=uc(t,this.size,3);e.uniform3fv(this.addr,n)}function Rc(e,t){let n=uc(t,this.size,4);e.uniform4fv(this.addr,n)}function zc(e,t){let n=uc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Bc(e,t){let n=uc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Vc(e,t){let n=uc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Hc(e,t){e.uniform1iv(this.addr,t)}function Uc(e,t){e.uniform2iv(this.addr,t)}function Wc(e,t){e.uniform3iv(this.addr,t)}function Gc(e,t){e.uniform4iv(this.addr,t)}function Kc(e,t){e.uniform1uiv(this.addr,t)}function qc(e,t){e.uniform2uiv(this.addr,t)}function Jc(e,t){e.uniform3uiv(this.addr,t)}function Yc(e,t){e.uniform4uiv(this.addr,t)}function Xc(e,t,n){let r=this.cache,i=t.length,a=pc(n,i);dc(r,a)||(e.uniform1iv(this.addr,a),fc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?kc(ec):$s;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Zc(e,t,n){let r=this.cache,i=t.length,a=pc(n,i);dc(r,a)||(e.uniform1iv(this.addr,a),fc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||rc,a[e])}function Qc(e,t,n){let r=this.cache,i=t.length,a=pc(n,i);dc(r,a)||(e.uniform1iv(this.addr,a),fc(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?kc(tc):ic;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function $c(e,t,n){let r=this.cache,i=t.length,a=pc(n,i);dc(r,a)||(e.uniform1iv(this.addr,a),fc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||nc,a[e])}function el(e){switch(e){case 5126:return Fc;case 35664:return Ic;case 35665:return Lc;case 35666:return Rc;case 35674:return zc;case 35675:return Bc;case 35676:return Vc;case 5124:case 35670:return Hc;case 35667:case 35671:return Uc;case 35668:case 35672:return Wc;case 35669:case 35673:return Gc;case 5125:return Kc;case 36294:return qc;case 36295:return Jc;case 36296:return Yc;case 35678:case 36198:case 36298:case 36306:case 35682:return Xc;case 35679:case 36299:case 36307:return Zc;case 35680:case 36300:case 36308:case 36293:return Qc;case 36289:case 36303:case 36311:case 36292:return $c}}var tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pc(t.type)}},nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=el(t.type)}},rl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},il=/(\w+)(\])?(\[|\.)?/g;function al(e,t){e.seq.push(t),e.map[t.id]=t}function ol(e,t,n){let r=e.name,i=r.length;for(il.lastIndex=0;;){let a=il.exec(r),o=il.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){al(n,l===void 0?new tl(s,e,t):new nl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new rl(s),al(n,e)),n=e}}}var sl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ol(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function cl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var ll=37297,ul=0;function dl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var fl=new q;function pl(e){J._getMatrix(fl,J.workingColorSpace,e);let t=`mat3( ${fl.elements.map(e=>e.toFixed(4))} )`;switch(J.getTransfer(e)){case Ge:return[t,`LinearTransferOETF`];case Ke:return[t,`sRGBTransferOETF`];default:return H(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ml(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+dl(e.getShaderSource(t),r)}return i}function hl(e,t){let n=pl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var gl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function _l(e,t){let n=gl[t];return n===void 0?(H(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var vl=new K;function yl(){return J.getLuminanceCoefficients(vl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${vl.x.toFixed(4)}, ${vl.y.toFixed(4)}, ${vl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function bl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Cl).join(`
`)}function xl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Sl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Cl(e){return e!==``}function wl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Tl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var El=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(e){return e.replace(El,Ol)}function Ol(e,t){let n=X[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Dl(n)}var kl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Al(e){return e.replace(kl,jl)}function jl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ml(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Nl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Pl(e){return Nl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Fl={302:`ENVMAP_MODE_REFRACTION`};function Il(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Fl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Ll={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Rl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Ll[e.combine]||`ENVMAP_BLENDING_NONE`}function zl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Pl(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Il(n),d=Rl(n),f=bl(n),p=xl(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Cl).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Cl).join(`
`),g.length>0&&(g+=`
`)):(h=[Ml(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Cl).join(`
`),g=[Ml(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:X.tonemapping_pars_fragment,n.toneMapping===0?``:_l(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,X.colorspace_pars_fragment,hl(`linearToOutputTexel`,n.outputColorSpace),yl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Cl).join(`
`)),o=Dl(o),o=wl(o,n),o=Tl(o,n),s=Dl(s),s=wl(s,n),s=Tl(s,n),o=Al(o),s=Al(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=cl(i,i.VERTEX_SHADER,v),x=cl(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=ml(i,b,`vertex`),n=ml(i,x,`fragment`);U(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):H(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new sl(i,m),w=Sl(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,ll)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ul++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Bl=0,Vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hl(e),t.set(e,n)),n}},Hl=class{constructor(e){this.id=Bl++,this.code=e,this.usedTimes=0}};function Ul(e){return e===1030||e===37490||e===36285}function Wl(e,t,n,r,i,a){let o=new Xt,s=new Vl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&H(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=vs[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,ee=!!i.map,P=!!i.matcap,F=!!b,te=F&&b.isPMREMTexture===!0,ne=!!i.aoMap,re=!!i.lightMap,ie=!!i.bumpMap&&i.wireframe===!1,ae=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,I=!!i.metalnessMap,L=!!i.roughnessMap,ce=i.anisotropy>0,le=i.clearcoat>0,ue=i.diffuseRoughness>0,de=i.dispersion>0,fe=i.retroreflectivity>0,pe=i.iridescence>0,me=i.sheen>0,he=i.transmission>0,ge=ce&&!!i.anisotropyMap,_e=le&&!!i.clearcoatMap,ve=le&&!!i.clearcoatNormalMap,ye=le&&!!i.clearcoatRoughnessMap,be=ue&&!!i.diffuseRoughnessMap,xe=pe&&!!i.iridescenceMap,Se=pe&&!!i.iridescenceThicknessMap,Ce=me&&!!i.sheenColorMap,we=me&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=he&&!!i.transmissionMap,ke=he&&!!i.thicknessMap,Ae=!!i.gradientMap,je=!!i.alphaMap,R=i.alphaTest>0,Me=!!i.alphaHash,Ne=!!i.extensions,Pe=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let z=te?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Fe={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:J.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ee,matcap:P,envMap:F,envMapMode:F&&b.mapping,envMapPMREM:te,envMapMaxLod:te?z.length-1:null,envMapSize:te?z[0].width:null,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:ae,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:ae&&i.normalMapType===1,normalMapTangentSpace:ae&&i.normalMapType===0,packedNormalMap:ae&&i.normalMapType===0&&Ul(i.normalMap.format),metalnessMap:I,roughnessMap:L,anisotropy:ce,anisotropyMap:ge,clearcoat:le,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,diffuseRoughness:ue,diffuseRoughnessMap:be,dispersion:de,retroreflection:fe,iridescence:pe,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:me,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:he,transmissionMap:Oe,thicknessMap:ke,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:je,alphaTest:R,alphaHash:Me,combine:i.combine,mapUv:ee&&p(i.map.channel),aoMapUv:ne&&p(i.aoMap.channel),lightMapUv:re&&p(i.lightMap.channel),bumpMapUv:ie&&p(i.bumpMap.channel),normalMapUv:ae&&p(i.normalMap.channel),displacementMapUv:oe&&p(i.displacementMap.channel),emissiveMapUv:se&&p(i.emissiveMap.channel),metalnessMapUv:I&&p(i.metalnessMap.channel),roughnessMapUv:L&&p(i.roughnessMap.channel),anisotropyMapUv:ge&&p(i.anisotropyMap.channel),clearcoatMapUv:_e&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:ve&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:be&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:xe&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(i.sheenRoughnessMap.channel),specularMapUv:Te&&p(i.specularMap.channel),specularColorMapUv:Ee&&p(i.specularColorMap.channel),specularIntensityMapUv:De&&p(i.specularIntensityMap.channel),transmissionMapUv:Oe&&p(i.transmissionMap.channel),thicknessMapUv:ke&&p(i.thicknessMap.channel),alphaMapUv:je&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ae||ce),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(ee||je),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ae===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ee&&i.map.isVideoTexture===!0&&J.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&J.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ne&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=vs[t];n=ao.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new zl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Gl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Kl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ql(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Jl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Kl),r.length>1&&r.sort(t||ql),i.length>1&&i.sort(t||ql)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Yl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Jl,e.set(t,[i])):n>=r.length?(i=new Jl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Xl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new K,color:new Y};break;case`SpotLight`:n={position:new K,direction:new K,color:new Y,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new Y,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new Y,groundColor:new Y};break;case`RectAreaLight`:n={color:new Y,position:new K,halfWidth:new K,halfHeight:new K}}return e[t.id]=n,n}}}function Zl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ql=0;function $l(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function eu(e){let t=new Xl,n=Zl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new zt,o=new zt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort($l);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Ql++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function tu(e){let t=new eu(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function nu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new tu(e),t.set(n,[a])):r>=i.length?(a=new tu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ru=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iu=`uniform sampler2D shadow_pass;
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
}`,au=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],ou=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],su=new zt,cu=new K,lu=new K;function uu(e,t,n){let r=new Ci,i=new G,a=new G,o=new Pt,s=new fo,c=new po,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},p=new co({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:ru,fragmentShader:iu}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new _r;g.setAttribute(`position`,new nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new si(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(H(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){H(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let g=d.getFrameExtents();i.multiply(g),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/g.x),i.x=a.x*g.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/g.y),i.y=a.y*g.y,d.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){H(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new It(i.x,i.y,{format:ne,type:T,minFilter:h,magFilter:h,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Oi(i.x,i.y,w),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ee,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f}else l.isPointLight?(d.map=new Ds(i.x),d.map.depthTexture=new ki(i.x,C)):(d.map=new It(i.x,i.y),d.map.depthTexture=new Oi(i.x,i.y,C)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ee,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=h,d.map.depthTexture.magFilter=h):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let y=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),cu.setFromMatrixPosition(l.matrixWorld),e.position.copy(cu),lu.copy(e.position),lu.add(au[t]),e.up.copy(ou[t]),e.lookAt(lu),e.updateMatrixWorld(),n.makeTranslation(-cu.x,-cu.y,-cu.z),su.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(su,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,y,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new It(i.x,i.y,{format:ne,type:T}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=x(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)S(l[e],i,a,o,s,c)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function du(e,t){function n(){let t=!1,n=new Pt,r=null,i=new Pt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?I(e.DEPTH_TEST):L(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=at[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):L(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(P)[1]),N=ee>=1);let F=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new Pt().fromArray(ne),ae=new Pt().fromArray(re);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),I(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),I(e.CULL_FACE),pe(0);function I(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function L(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ce(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ue(t){return h!==t&&(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(L(e.BLEND),g=!1);else if(g===!1&&(I(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:U(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:U(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:U(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:U(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(de[n],de[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?L(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):L(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ge(t){t===0?L(e.CULL_FACE):(I(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function _e(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ve(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):L(e.POLYGON_OFFSET_FILL)}function ye(t){t?I(e.SCISSOR_TEST):L(e.SCISSOR_TEST)}function be(t){t===void 0&&(t=e.TEXTURE0+M-1),F!==t&&(e.activeTexture(t),F=t)}function xe(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+M-1:F);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function Se(){let t=te[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function we(){try{e.compressedTexImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Te(){try{e.texSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ee(){try{e.texSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function ke(){try{e.texStorage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ae(){try{e.texStorage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function je(){try{e.texImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function R(){try{e.texImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Me(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ne(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Pe(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function z(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function Fe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function B(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function V(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,te={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:I,disable:L,bindFramebuffer:ce,drawBuffers:le,useProgram:ue,setBlending:pe,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:ye,activeTexture:be,bindTexture:xe,unbindTexture:Se,compressedTexImage2D:Ce,compressedTexImage3D:we,texImage2D:je,texImage3D:R,pixelStorei:Ne,getParameter:Me,updateUBOMapping:Fe,uniformBlockBinding:B,texStorage2D:ke,texStorage3D:Ae,texSubImage2D:Te,texSubImage3D:Ee,compressedTexSubImage2D:De,compressedTexSubImage3D:Oe,scissor:Pe,viewport:z,reset:V}}function fu(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new G,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):Qe(`canvas`)}function D(e,t,n){let r=1,i=V(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),H(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&H(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function O(e){return e.generateMipmaps}function k(t){e.generateMipmap(t)}function A(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function j(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];H(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||H(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ge:J.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function M(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,H(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function N(e,t){return O(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=new WeakRef(e);r.get(e).__ref=t,C.add(t),w.register(e,t,t)}function F(e){let t=r.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function te(e){re(e.target)}function ne(e){ie(e.target)}function re(e){e.removeEventListener(`dispose`,te),F(e),oe(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function ie(e){e.removeEventListener(`dispose`,ne),F(e),I(e)}function ae(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ie(t):re(t))}C.clear(),b.clear()}function oe(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&se(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function se(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function I(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&re(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let L=0;function ce(){L=0}function le(){return L}function ue(e){L=e}function de(){let e=L;return e>=i.maxTextures&&H(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),L+=1,e}function fe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function pe(t,i){let a=r.get(t);if(t.isVideoTexture&&Fe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)H(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)H(`WebGLRenderer: Texture marked for update but image is incomplete`);else{we(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function me(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?we(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function he(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?we(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ge(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?Te(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let _e={[l]:e.REPEAT,[u]:e.CLAMP_TO_EDGE,[d]:e.MIRRORED_REPEAT},ve={[f]:e.NEAREST,[p]:e.NEAREST_MIPMAP_NEAREST,[m]:e.NEAREST_MIPMAP_LINEAR,[h]:e.LINEAR,[g]:e.LINEAR_MIPMAP_NEAREST,[_]:e.LINEAR_MIPMAP_LINEAR},ye={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function be(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&H(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,_e[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,_e[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,_e[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ve[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ve[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ye[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function xe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,te),ee(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=fe(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&se(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function Se(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Ce(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=Se(n.start,r.width,4),c=Se(t.start,r.width,4);n.start<=i+1&&a===c&&Se(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function we(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=xe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=J.getPrimaries(J.workingColorSpace),r=o.colorSpace===``?null:J.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=D(o.image,!1,i.maxTextureSize);t=B(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=j(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);be(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=N(o,t);if(o.isDepthTexture)p=M(o.format===P,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&Ce(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=ms(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=ms(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=V(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=V(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);O(o)&&o.mipmapsAutoUpdate===!0&&k(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Te(t,o,s){if(o.image.length!==6)return;let c=xe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=J.getPrimaries(J.workingColorSpace),r=o.colorSpace===``?null:J.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=D(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=B(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=j(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=N(o,h);be(e.TEXTURE_CUBE_MAP,o);let C;if(o.isDepthTexture){if(v=M(o.format===P,o.type),b){if(y)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=V(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}O(o)&&o.mipmapsAutoUpdate===!0&&k(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ee(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=j(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),z(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Pe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=M(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;z(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=j(o.internalFormat,c,l,o.normalized,o.colorSpace);z(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Oe(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?ge(i.depthTexture,0):pe(i.depthTexture,0);let u=c.__webglTexture,d=Pe(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)z(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)z(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ke(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Oe(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Oe(i.__webglFramebuffer[0],t,0):Oe(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),De(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),De(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ae(t,n,i){let a=r.get(t);n!==void 0&&Ee(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ke(t)}function je(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,ne),ee(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&z(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=j(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Pe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),De(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),be(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ee(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ee(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);O(i)?k(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),be(c,a),Ee(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),O(a)&&k(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),be(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ee(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ee(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);O(i)?k(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&ke(t)}function R(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(O(a)&&a.mipmapsAutoUpdate===!0){let t=A(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),k(t),n.unbindTexture()}}}let Me=[];function Ne(t){if(t.samples>0){if(z(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Me.length=0,Me.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Me.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Me))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Pe(e){return Math.min(i.maxSamples,e.samples)}function z(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Fe(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function B(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(J.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&H(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):U(`WebGLTextures: Unsupported texture color space:`,n)),t}function V(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=de,this.resetTextureUnits=ce,this.getTextureUnits=le,this.setTextureUnits=ue,this.setTexture2D=pe,this.setTexture2DArray=me,this.setTexture3D=he,this.setTextureCube=ge,this.rebindTextures=Ae,this.setupRenderTarget=je,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=z,this.dispose=ae}function pu(e,t){function n(n,r=``){let i,a=J.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var mu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hu=`
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

}`,gu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ai(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new co({vertexShader:mu,fragmentShader:hu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new si(new Xa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_u=class extends ot{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new gu,g={},_=t.getContextAttributes(),y=null,b=null,x=[],S=[],w=new G,T=null,E=null,D=new qo;D.viewport=new Pt;let k=new qo;k.viewport=new Pt;let A=[D,k],j=new es,M=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new gn,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new gn,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new gn,x[e]=t),t.getHandSpace()};function te(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,te),r.removeEventListener(`selectstart`,te),r.removeEventListener(`selectend`,te),r.removeEventListener(`squeeze`,te),r.removeEventListener(`squeezestart`,te),r.removeEventListener(`squeezeend`,te),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}M=null,F=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(y),f=null,d=null,u=null,r=null,b=null,I.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,te),r.addEventListener(`selectstart`,te),r.addEventListener(`selectend`,te),r.addEventListener(`squeeze`,te),r.addEventListener(`squeezestart`,te),r.addEventListener(`squeezeend`,te),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?P:ee,a=_.stencil?O:C);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new It(d.textureWidth,d.textureHeight,{format:N,type:v,depthTexture:new Oi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new It(f.framebufferWidth,f.framebufferHeight,{format:N,type:v,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),I.setContext(r),I.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),j.near=k.near=D.near=t,j.far=k.far=D.far=n,(M!==j.near||F!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),M=j.near,F=j.far),j.layers.mask=e.layers.mask|6,D.layers.mask=j.layers.mask&-5,k.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;ie(j,i);for(let e=0;e<a.length;e++)ie(a[e],i);j.projectionMatrix.copy(D.projectionMatrix),j.projectionMatrixInverse.copy(D.projectionMatrixInverse),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),ae(e,j,i)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=lt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(j)},this.getCameraTexture=function(e){return g[e]};let oe=null;function se(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=A[n];o===void 0&&(o=new qo,o.layers.enable(n),o.viewport=new Pt,A[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Ai,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}oe&&oe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let I=new gs;I.setAnimationLoop(se),this.setAnimationLoop=function(e){oe=e},this.dispose=function(){}}},vu=new zt,yu=new q;yu.set(-1,0,0,0,1,0,0,0,1);function bu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,io(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(vu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(yu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function xu(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?H(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):H(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Su=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Cu=null;function wu(){return Cu===null&&(Cu=new ui(Su,16,16,ne,T),Cu.name=`DFG_LUT`,Cu.minFilter=h,Cu.magFilter=h,Cu.wrapS=u,Cu.wrapT=u,Cu.generateMipmaps=!1,Cu.needsUpdate=!0),Cu}var Tu=class{constructor(e={}){let{canvas:t=$e(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=v}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ie,re,te]),g=new Set([v,C,x,O,E,D]),y=new Uint32Array(4),b=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},w=null,k=null,A=[],j=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,ee=!1,P=null,F=null,ne=null,ae=null;this._outputColorSpace=Ue;let oe=0,se=0,I=null,L=-1,ce=null,le=new Pt,ue=new Pt,de=null,fe=new Y(0),pe=0,me=t.width,he=t.height,ge=1,_e=null,ve=null,ye=new Pt(0,0,me,he),be=new Pt(0,0,me,he),xe=!1,Se=new Ci,Ce=new Ti,we=!1,Te=!1,Ee=new zt,De=new K,Oe=new Pt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function je(){return I===null?ge:1}let R=n;function Me(e,n){return t.getContext(e,n)}let Ne,Pe,z,Fe,B,V,Ie,Le,Re,ze,Be,Ve,He,We,Ge,Ke,qe,Je,Xe,Ze,Qe,et,nt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ot,!1),t.addEventListener(`webglcontextrestored`,st,!1),t.addEventListener(`webglcontextcreationerror`,ct,!1),R===null){let t=`webgl2`;if(R=Me(t,e),R===null)throw Me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}rt()}catch(e){throw t.removeEventListener(`webglcontextlost`,ot,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,ct,!1),U(`WebGLRenderer: `+e.message),e}function rt(){Ne=new Gs(R),Ne.init(),Qe=new pu(R,Ne),Pe=new Ts(R,Ne,e,Qe),z=new du(R,Ne),Pe.reversedDepthBuffer&&d&&z.buffers.depth.setReversed(!0),F=R.createFramebuffer(),ne=R.createFramebuffer(),ae=R.createFramebuffer(),Fe=new Js(R),B=new Gl,V=new fu(R,Ne,z,B,Pe,Qe,Fe),Ie=new Ws(N),Le=new _s(R),et=new Cs(R,Le),Re=new Ks(R,Le,Fe,et),ze=new Xs(R,Re,Le,et,Fe),Je=new Ys(R,Pe,V),Ge=new Es(B),Be=new Wl(N,Ie,Ne,Pe,et,Ge),Ve=new bu(N,B),He=new Yl,We=new nu(Ne),qe=new Ss(N,Ie,z,ze,p,s),Ke=new uu(N,ze,Pe),nt=new xu(R,Fe,Pe,z),Xe=new ws(R,Ne,Fe),Ze=new qs(R,Ne,Fe),Fe.programs=Be.programs,N.capabilities=Pe,N.extensions=Ne,N.properties=B,N.renderLists=He,N.shadowMap=Ke,N.state=z,N.info=Fe}m!==1009&&(M=new Qs(m,t.width,t.height,o,r,i));let at=new _u(N,R);this.xr=at,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(e){e!==void 0&&(ge=e,this.setSize(me,he,!1))},this.getSize=function(e){return e.set(me,he)},this.setSize=function(e,n,r=!0){at.isPresenting?H(`WebGLRenderer: Can't change size while VR device is presenting.`):(me=e,he=n,t.width=Math.floor(e*ge),t.height=Math.floor(n*ge),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(me*ge,he*ge).floor()},this.setDrawingBufferSize=function(e,n,r){me=e,he=n,ge=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)U(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){H(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}M.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(le)},this.getViewport=function(e){return e.copy(ye)},this.setViewport=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),z.viewport(le.copy(ye).multiplyScalar(je()).round())},this.getScissor=function(e){return e.copy(be)},this.setScissor=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),z.scissor(ue.copy(be).multiplyScalar(je()).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(e){z.setScissorTest(xe=e)},this.setOpaqueSort=function(e){_e=e},this.setTransparentSort=function(e){ve=e},this.getClearColor=function(e){return e.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(I!==null){let t=I.texture.format;e=h.has(t)}if(e){let e=I.texture.type,t=g.has(e),n=qe.getClearColor(),r=qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(y[0]=i,y[1]=a,y[2]=o,y[3]=r,R.clearBufferuiv(R.COLOR,0,y)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,R.clearBufferiv(R.COLOR,0,b))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),P=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ot,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,ct,!1),qe.dispose(),He.dispose(),We.dispose(),V.dispose(),B.dispose(),Ie.dispose(),ze.dispose(),Re.dispose(),et.dispose(),nt.dispose(),Be.dispose(),at.dispose(),at.removeEventListener(`sessionstart`,mt),at.removeEventListener(`sessionend`,ht),gt.stop()};function ot(e){e.preventDefault(),tt(`WebGLRenderer: Context Lost.`),ee=!0}function st(){tt(`WebGLRenderer: Context Restored.`),ee=!1;let e=Fe.autoReset,t=Ke.enabled,n=Ke.autoUpdate,r=Ke.needsUpdate,i=Ke.type;rt(),Fe.autoReset=e,Ke.enabled=t,Ke.autoUpdate=n,Ke.needsUpdate=r,Ke.type=i}function ct(e){U(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function lt(e){let t=e.target;t.removeEventListener(`dispose`,lt),ut(t)}function ut(e){W(e),B.remove(e)}function W(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){Be.releaseProgram(e)}),e.isShaderMaterial&&Be.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ke);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Tt(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Re.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=Xe;if(c!==null&&(h=Le.get(c),g=Ze,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*je()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*je()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh){if(Ne.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Le.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n,r){P!==null&&e.isNodeMaterial&&P.setObject(r,e),we===!0&&Ge.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,xt(e,t,r),e.side=0,e.needsUpdate=!0,xt(e,t,r),e.side=2):xt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),P!==null&&P.renderStart(e,t,n),k=We.get(n),k.init(t),j.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),P!==null&&P.updateLights(k.state.lightsArray),Te=this.localClippingEnabled,we=Ge.init(this.clippingPlanes,Te),we===!0&&Ge.setGlobalState(this.clippingPlanes,t),P!==null&&Ke.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];dt(o,n,t,e),r.add(o)}else dt(i,n,t,e),r.add(i)}}),k=j.pop(),P!==null&&P.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=B.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function pt(e){ft&&ft(e)}function mt(){gt.stop()}function ht(){gt.start()}let gt=new gs;gt.setAnimationLoop(pt),typeof self<`u`&&gt.setContext(self),this.setAnimationLoop=function(e){ft=e,at.setAnimationLoop(e),e===null?gt.stop():gt.start()},at.addEventListener(`sessionstart`,mt),at.addEventListener(`sessionend`,ht),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){U(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ee===!0)return;P!==null&&P.renderStart(e,t);let n=at.enabled===!0&&at.isPresenting===!0,r=M!==null&&(I===null||n)&&M.begin(N,I);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(t),t=at.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,I),k=We.get(e,j.length),k.init(t),k.state.textureUnits=V.getTextureUnits(),j.push(k),Ee.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Ce.setFromArrayCamera(t):Se.setFromProjectionMatrix(Ee,Ye,t.reversedDepth),Te=this.localClippingEnabled,we=Ge.init(this.clippingPlanes,Te),w=He.get(e,A.length),w.init(),A.push(w),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&G(e,t,-1/0,N.sortObjects)}G(e,t,0,N.sortObjects),w.finish(),P!==null&&P.updateLights(k.state.lightsArray),N.sortObjects===!0&&w.sort(_e,ve),Ae=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Ae&&qe.addToRenderList(w,e),this.info.autoReset===!0&&this.info.reset(),we===!0&&Ge.beginShadows();let i=k.state.shadowsArray;if(Ke.render(i,e,t),we===!0&&Ge.endShadows(),(r&&M.hasRenderPass())===!1){let n=w.opaque,r=w.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];vt(n,r,e,a)}Ae&&qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];_t(w,e,n,n.viewport)}}else r.length>0&&vt(n,r,e,t),Ae&&qe.render(e),_t(w,e,t)}I!==null&&se===0&&(V.updateMultisampleRenderTarget(I),V.updateRenderTargetMipmap(I)),r&&M.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),et.resetDefaultState(),L=-1,ce=null,j.pop(),j.length>0?(k=j[j.length-1],V.setTextureUnits(k.state.textureUnits),we===!0&&Ge.setGlobalState(N.clippingPlanes,k.state.camera)):k=null,A.pop(),w=A.length>0?A[A.length-1]:null,P!==null&&P.renderEnd()};function G(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Ce:Se;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ee);let i=ze.update(e),a=e.material;a.visible&&w.push(e,i,a,n,Oe.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Ce:Se;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=ze.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Oe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Oe.copy(e.boundingSphere.center)),Oe.applyMatrix4(e.matrixWorld).applyMatrix4(Ee)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&w.push(e,i,c,n,Oe.z,s,t)}}else a.visible&&w.push(e,i,a,n,Oe.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)G(i[e],t,n,r)}function _t(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),we===!0&&Ge.setGlobalState(N.clippingPlanes,n),r&&z.viewport(le.copy(r)),i.length>0&&yt(i,t,n),a.length>0&&yt(a,t,n),o.length>0&&yt(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function vt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new It(1,1,{generateMipmaps:!0,type:e?T:v,minFilter:_,samples:Math.max(4,Pe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:J.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||le;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),c=N.getActiveCubeFace(),l=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(fe),pe=N.getClearAlpha(),pe<1&&N.setClearColor(16777215,.5),N.clear(),Ae&&qe.render(n);let u=N.toneMapping;N.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),we===!0&&Ge.setGlobalState(N.clippingPlanes,r),yt(e,n,r),V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,q(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a))}N.setRenderTarget(s,c,l),N.setClearColor(fe,pe),d!==void 0&&(r.viewport=d),N.toneMapping=u}function yt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&q(o,t,n,s,l,c)}}function q(e,t,n,r,i,a){P!==null&&i.isNodeMaterial&&P.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function bt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function xt(e,t,n){t.isScene!==!0&&(t=ke);let r=B.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Be.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Be.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ie.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,lt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return wt(e,s),d}else s.uniforms=Be.getUniforms(e),P!==null&&e.isNodeMaterial&&P.build(e,n,s),e.onBeforeCompile(s,N),d=Be.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ge.uniform),wt(e,s),r.needsLights=Dt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=bt(k.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function St(e,t,n,r,i){let a=B.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=xt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Ct(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=sl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function wt(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Tt(e,t,n,r,i){t.isScene!==!0&&(t=ke),V.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=I===null?N.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:J.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ie.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=B.get(r),y=k.state.lights;if(we===!0&&(Te===!0||e!==ce)){let t=e===ce&&r.id===L;Ge.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ge.numPlanes||v.numIntersection!==Ge.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===bt(k.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let C=v.currentProgram;(b===!0||x===!0)&&(C=x===!0?St(r,t,i,s,h):xt(r,t,i),P&&r.isNodeMaterial&&P.onUpdateProgram(r,C,v));let w=!1,T=!1,E=!1,D=C.getUniforms(),O=v.uniforms;if(z.useProgram(C.program)&&(w=!0,T=!0,E=!0),r.id!==L&&(L=r.id,T=!0),w||ce!==e){z.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),D.setValue(R,`projectionMatrix`,e.projectionMatrix),D.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=D.map.cameraPosition;t!==void 0&&t.setValue(R,De.setFromMatrixPosition(e.matrixWorld)),Pe.logarithmicDepthBuffer&&D.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&D.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),ce!==e&&(ce=e,T=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&D.setValue(R,`sunShadowMap`,y.state.sunShadowMap,V),y.state.directionalShadowMap.length>0&&D.setValue(R,`directionalShadowMap`,y.state.directionalShadowMap,V),y.state.spotShadowMap.length>0&&D.setValue(R,`spotShadowMap`,y.state.spotShadowMap,V),y.state.pointShadowMap.length>0&&D.setValue(R,`pointShadowMap`,y.state.pointShadowMap,V)),i.isSkinnedMesh){D.setOptional(R,i,`bindMatrix`),D.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),D.setValue(R,`boneTexture`,e.boneTexture,V))}i.isBatchedMesh&&(D.setOptional(R,i,`batchingTexture`),D.setValue(R,`batchingTexture`,i._matricesTexture,V),D.setOptional(R,i,`batchingIdTexture`),D.setValue(R,`batchingIdTexture`,i._indirectTexture,V),D.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&D.setValue(R,`batchingColorTexture`,i._colorsTexture,V));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Je.update(i,n,C),(T||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,D.setValue(R,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=wu()),T){if(D.setValue(R,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&Et(O,E),a&&r.fog===!0&&Ve.refreshFogUniforms(O,a),Ve.refreshMaterialUniforms(O,r,ge,he,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=S,t=0;for(let n of k.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}sl.upload(R,Ct(v),O,V)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(sl.upload(R,Ct(v),O,V),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&D.setValue(R,`center`,i.center),D.setValue(R,`modelViewMatrix`,i.modelViewMatrix),D.setValue(R,`normalMatrix`,i.normalMatrix),D.setValue(R,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];nt.update(n,C),nt.bind(n,C)}}return C}function Et(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Dt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(e,t,n){let r=B.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){I=e,oe=t,se=n;let r=null,i=!1,a=!1;if(e){let o=B.get(e);if(o.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(R.FRAMEBUFFER,o.__webglFramebuffer),le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest,z.viewport(le),z.scissor(ue),z.setScissorTest(de),L=-1;return}if(o.__webglFramebuffer===void 0)V.setupRenderTarget(e);else if(o.__hasExternalTextures)V.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);V.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&V.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest}else le.copy(ye).multiplyScalar(ge).floor(),ue.copy(be).multiplyScalar(ge).floor(),de=xe;if(n!==0&&(r=F),z.bindFramebuffer(R.FRAMEBUFFER,r)&&z.drawBuffers(e,r),z.viewport(le),z.scissor(ue),z.setScissorTest(de),i){let r=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=B.get(e.textures[t]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,t.__webglTexture,n)}L=-1};function Ot(e){let t=B.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Pe.textureFormatReadable(e.format),t.__typeReadable=Pe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){z.bindFramebuffer(R.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let u=Ot(o);if(u.__formatReadable===!1){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,Qe.convert(c),Qe.convert(l),a)}finally{let e=I===null?null:B.get(I).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(R.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let d=Ot(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,Qe.convert(l),Qe.convert(u),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let p=I===null?null:B.get(I).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,p);let m=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await it(R,m,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(f),R.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;V.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Qe.convert(t.format),_=Qe.convert(t.type),v;t.isData3DTexture?(V.setTexture3D(t,0),v=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(V.setTexture2DArray(t,0),v=R.TEXTURE_2D_ARRAY):(V.setTexture2D(t,0),v=R.TEXTURE_2D),z.activeTexture(R.TEXTURE0),z.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let y=z.getParameter(R.UNPACK_ROW_LENGTH),b=z.getParameter(R.UNPACK_IMAGE_HEIGHT),x=z.getParameter(R.UNPACK_SKIP_PIXELS),S=z.getParameter(R.UNPACK_SKIP_ROWS),C=z.getParameter(R.UNPACK_SKIP_IMAGES);z.pixelStorei(R.UNPACK_ROW_LENGTH,h.width),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,h.height),z.pixelStorei(R.UNPACK_SKIP_PIXELS,l),z.pixelStorei(R.UNPACK_SKIP_ROWS,u),z.pixelStorei(R.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=B.get(e),r=B.get(t),h=B.get(n.__renderTarget),g=B.get(r.__renderTarget);z.bindFramebuffer(R.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(e).__webglTexture,i,d+n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(t).__webglTexture,a,m+n)),R.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,R.DEPTH_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||B.has(e)){let n=B.get(e),r=B.get(t);z.bindFramebuffer(R.READ_FRAMEBUFFER,ne),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,ae);for(let e=0;e<c;e++)w?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,n.__webglTexture,i),T?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,r.__webglTexture,a),i===0?T?R.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):R.copyTexSubImage2D(v,a,f,p,l,u,o,s):R.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,R.COLOR_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h);z.pixelStorei(R.UNPACK_ROW_LENGTH,y),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,b),z.pixelStorei(R.UNPACK_SKIP_PIXELS,x),z.pixelStorei(R.UNPACK_SKIP_ROWS,S),z.pixelStorei(R.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&R.generateMipmap(v),z.unbindTexture()},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&V.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?V.setTextureCube(e,0):e.isData3DTexture?V.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?V.setTexture2DArray(e,0):V.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){oe=0,se=0,I=null,z.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ye}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=J._getDrawingBufferColorSpace(e),t.unpackColorSpace=J._getUnpackColorSpace()}},Q={maxPixelRatio:1.75,fov:74,eyeHeight:1.6,playerRadius:.45,walkSpeed:7.4,lookSpeed:.0045,fogColor:14936558,fogDensity:.0062,cell:2,goalSteps:[190,270],respawnSteps:[110,240],goalReach:5,giant:{height:26,speedStart:5,speedMax:7.9,ramp:.05,spawnDist:125,catchFoot:3.2,catchBody:5,view:.35,recycleDist:210,recycleTo:150},tide:{delay:6,max:5,interval:6.5,intervalMin:3.8,intervalRamp:.03,minDist:42,maxDist:85,growth:6.5,radius:[13,26],hold:6,shrink:4,viewBias:.6,view:.5},stand:{count:3,height:3.6,dash:11.5,creep:2.4,notice:.6,spawnMin:60,spawnMax:100,catchDist:2.2,view:.5,recycle:130,spawnEvery:13,hold:1.6,fadeIn:1.2},extras:{both:.2,one:.65},intro:{giant:3.6,goal:3.6},caughtLook:1300};function Eu(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new _r;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Du(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Du(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Du(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new nr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Ou(e,t,n){let r=!1,{xs:i,zs:a,n:o}=e;for(let e=0,s=o-1;e<o;s=e++){let o=a[e],c=a[s];o>n!=c>n&&t<(i[s]-i[e])*(n-o)/(c-o)+i[e]&&(r=!r)}return r}function ku(e,t,n){let{xs:r,zs:i,n:a}=e,o=1/0,s=0,c=0;for(let e=0,l=a-1;e<a;l=e++){let a=r[l],u=i[l],d=r[e]-a,f=i[e]-u,p=d*d+f*f,m=p>0?((t-a)*d+(n-u)*f)/p:0;m=Math.max(0,Math.min(1,m));let h=a+d*m,g=u+f*m,_=(t-h)*(t-h)+(n-g)*(n-g);_<o&&(o=_,s=h,c=g)}return{d2:o,x:s,z:c}}function Au(e){let t=e.r,n=new mn,r=e.b.map(e=>{let t=(e.length-1)/2,n=new Float32Array(t),r=new Float32Array(t),i=1/0,a=-1/0,o=1/0,s=-1/0;for(let c=0;c<t;c++)n[c]=e[1+c*2],r[c]=e[2+c*2],i=Math.min(i,n[c]),a=Math.max(a,n[c]),o=Math.min(o,r[c]),s=Math.max(s,r[c]);return{h:e[0],xs:n,zs:r,n:t,minx:i,maxx:a,minz:o,maxz:s}}),i=[],a=new Y;for(let e of r){let t=new la;for(let n=0;n<e.n;n++)(n?t.lineTo:t.moveTo).call(t,e.xs[n],-e.zs[n]);let n=new qa(t,{depth:Math.max(e.h,2.5),bevelEnabled:!1,curveSegments:1});n.rotateX(-Math.PI/2),n.deleteAttribute(`uv`);let r=.8+Math.random()*.2;a.setRGB(.92*r,.94*r,.97*r);let o=new Float32Array(n.attributes.position.count*3);for(let e=0;e<o.length;e+=3)o[e]=a.r,o[e+1]=a.g,o[e+2]=a.b;n.setAttribute(`color`,new nr(o,3)),i.push(n)}let o=Eu(i,!1);i.forEach(e=>e.dispose());let s=new uo({vertexColors:!0}),c=new si(o,s);n.add(c);let l=new uo({color:14673386}),u=new si(new Xa(2400,2400),l);u.rotation.x=-Math.PI/2,n.add(u);let d=new uo({color:10134958,side:2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});{let t=[];for(let n of e.rd||[]){let e=new la;for(let t=0;t<n.length;t+=2)(t?e.lineTo:e.moveTo).call(e,n[t],-n[t+1]);let r=new Za(e);r.rotateX(-Math.PI/2),r.translate(0,.04,0),r.deleteAttribute(`uv`),t.push(r)}if(t.length){let e=new si(Eu(t,!1),d);t.forEach(e=>e.dispose()),n.add(e)}}let f=new Map;r.forEach((e,t)=>{for(let n=Math.floor(e.minx/24)-0;n<=Math.floor(e.maxx/24);n++)for(let r=Math.floor(e.minz/24);r<=Math.floor(e.maxz/24);r++){let e=n+`,`+r;(f.get(e)||f.set(e,[]).get(e)).push(t)}});function p(e,n){for(let t=0;t<2;t++){let t=Math.floor(e.x/24),i=Math.floor(e.z/24);for(let a=t-1;a<=t+1;a++)for(let t=i-1;t<=i+1;t++){let i=f.get(a+`,`+t);if(i)for(let t of i){let i=r[t];if(e.x<i.minx-n||e.x>i.maxx+n||e.z<i.minz-n||e.z>i.maxz+n)continue;let a=Ou(i,e.x,e.z),o=ku(i,e.x,e.z),s=Math.sqrt(o.d2);if(a){let t=o.x-e.x,r=o.z-e.z,i=Math.hypot(t,r)||1;e.x=o.x+t/i*(n+.02),e.z=o.z+r/i*(n+.02)}else if(s<n){let t=e.x-o.x,r=e.z-o.z,i=s||1;e.x=o.x+t/i*n,e.z=o.z+r/i*n}}}}let i=Math.hypot(e.x,e.z),a=t-6;i>a&&(e.x*=a/i,e.z*=a/i)}let m=Q.cell,h=t+12,g=Math.ceil(2*h/m),_=new Uint8Array(g*g),v=e=>Math.floor((e+h)/m),y=e=>(e+.5)*m-h;for(let e=0;e<g;e++)for(let n=0;n<g;n++){let r=y(n),i=y(e);Math.hypot(r,i)>t-9&&(_[n+e*g]=1)}for(let e of r){let t=Math.max(0,v(e.minx-1.6)),n=Math.min(g-1,v(e.maxx+1.6)),r=Math.max(0,v(e.minz-1.6)),i=Math.min(g-1,v(e.maxz+1.6));for(let a=r;a<=i;a++)for(let r=t;r<=n;r++){let t=y(r),n=y(a);(Ou(e,t,n)||ku(e,t,n).d2<2.25)&&(_[r+a*g]=1)}}function b(e){let t=new Int32Array(g*g).fill(-1),n=new Int32Array(g*g),r=0,i=0;for(n[i++]=e,t[e]=0;r<i;){let e=n[r++],a=t[e],o=e%g,s=e/g|0;o>0&&t[e-1]<0&&!_[e-1]&&(t[e-1]=a+1,n[i++]=e-1),o<g-1&&t[e+1]<0&&!_[e+1]&&(t[e+1]=a+1,n[i++]=e+1),s>0&&t[e-g]<0&&!_[e-g]&&(t[e-g]=a+1,n[i++]=e-g),s<g-1&&t[e+g]<0&&!_[e+g]&&(t[e+g]=a+1,n[i++]=e+g)}return{dist:t,count:i}}let x=e=>({x:y(e%g),z:y(e/g|0)}),S=(e,t)=>{let n=v(e),r=v(t);return n>=0&&r>=0&&n<g&&r<g&&!_[n+r*g]};function C(){for(let e=0;e<60;e++){let e=Math.random()*g*g|0;if(_[e])continue;let n=x(e);if(Math.hypot(n.x,n.z)>t*.7)continue;let r=b(e);if(r.count<12e3)continue;let[i,a]=Q.goalSteps,o=[];for(let e=0;e<r.dist.length;e++)r.dist[e]>=i&&r.dist[e]<=a&&o.push(e);if(o.length<50)continue;let s=o[Math.random()*o.length|0],c=b(s).dist;return{start:x(e),goal:x(s),fromGoal:c}}return null}function w(e,n){let[r,i]=Q.respawnSteps,a=[];for(let n=0;n<e.length;n++){let o=e[n];if(o<r||o>i)continue;let s=x(n);Math.hypot(s.x,s.z)>t*.8||a.push(n)}for(let e=0;e<20;e++){let e=x(a[Math.random()*a.length|0]);if(!n||Math.hypot(e.x-n.x,e.z-n.z)>80)return e}return x(a[0])}function T(e,t,n){for(let r=0;r<400;r++){let r=Math.random()*Math.PI*2,i=e+Math.random()*(t-e),a=n.x+Math.cos(r)*i,o=n.z+Math.sin(r)*i;if(S(a,o))return{x:a,z:o}}return{x:n.x,z:n.z}}let E=[];{let e=[];for(let t=1;t<g-1;t++)for(let n=1;n<g-1;n++){let r=n+t*g;_[r]||(_[r-1]||_[r+1]||_[r-g]||_[r+g])&&e.push(r)}for(let t=e.length-1;t>0;t--){let n=Math.random()*(t+1)|0;[e[t],e[n]]=[e[n],e[t]]}for(let t of e){let e=x(t);if(E.every(t=>(t.x-e.x)**2+(t.z-e.z)**2>1444)&&E.push(e),E.length>=90)break}}let D=new yi(new Mi(.07,.11,6,5),new uo({color:8161169}),E.length),O=new yi(new $a(.28,8,6),new Yr({color:16773584}),E.length),k=new zt;E.forEach((e,t)=>{k.makeTranslation(e.x,3,e.z),D.setMatrixAt(t,k),k.makeTranslation(e.x,6.1,e.z),O.setMatrixAt(t,k)}),n.add(D,O);let A={patches:Array.from({length:6},()=>new K(0,0,-200))},j=`
    uniform vec3 uTides[6];
    float tideK(vec2 xz) {
      float tk = 1.0;
      for (int i = 0; i < 6; i++) {
        vec3 t = uTides[i];
        float kk = smoothstep(t.z - 4.0, t.z + 2.0, distance(xz, t.xy));
        tk = min(tk, mix(1.0, kk, clamp(t.z / 6.0, 0.0, 1.0)));
      }
      return tk;
    }`;function M(e,t){e.onBeforeCompile=e=>{e.uniforms.uTides={value:A.patches},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vTW; varying vec3 vWN;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        #ifdef USE_INSTANCING
        vTW = (modelMatrix * instanceMatrix * vec4(transformed,1.0)).xyz;
        #else
        vTW = (modelMatrix * vec4(transformed,1.0)).xyz;
        #endif
        vWN = normalize(mat3(modelMatrix) * normal);`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vTW; varying vec3 vWN;`+j).replace(`#include <color_fragment>`,`#include <color_fragment>
`+(t?`
    float wallK = 1.0 - smoothstep(0.35, 0.6, abs(vWN.y));
    float wu = dot(vTW.xz, vec2(-vWN.z, vWN.x));
    float wy = (vTW.y - 0.6) / 3.0;
    vec2 wc = vec2(floor(wu / 3.2), floor(wy));
    float wd = floor(dot(vTW.xz, vWN.xz) * 0.5);
    float wh = fract(sin(dot(wc + wd * 1.7, vec2(12.9898, 78.233))) * 43758.5453);
    vec2 wf = vec2(fract(wu / 3.2), fract(wy));
    float win = step(0.2, wf.x) * step(wf.x, 0.8) * step(0.28, wf.y) * step(wf.y, 0.82) * wallK * step(0.0, wy);
    win *= 1.0 - smoothstep(60.0, 130.0, distance(cameraPosition, vTW));
    vec3 wcol = wh > 0.84 ? vec3(1.0, 0.9, 0.68) : (wh > 0.5 ? vec3(0.52, 0.6, 0.69) : vec3(0.64, 0.7, 0.77));
    diffuseColor.rgb = mix(diffuseColor.rgb, wcol, win * 0.92);
  `:``)).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
        gl_FragColor.rgb *= tideK(vTW.xz);`)}}M(s,!0);for(let e of[l,d,D.material])M(e,!1);O.material.onBeforeCompile=e=>{e.uniforms.uTides={value:A.patches},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vTW;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vTW = (modelMatrix * instanceMatrix * vec4(transformed,1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vTW;`+j).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
gl_FragColor.rgb *= tideK(vTW.xz);`)};function N(){n.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}return{dispose:N,group:n,R:t,collide:p,plan:C,pickRespawn:w,randomFree:T,isFree:S,tide:A,spotCount:E.length,buildingCount:r.length,roadCount:(e.rd||[]).length}}var ju=[`pelvis`,`chest`,`head`,`shL`,`shR`,`elL`,`elR`,`haL`,`haR`,`hpL`,`hpR`,`knL`,`knR`,`ftL`,`ftR`],Mu=`
  varying vec3 vW;
  void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vW = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }`,Nu=`
  uniform vec3 uJ[15];
  uniform float uH;
  uniform vec3 uBMin; uniform vec3 uBMax;
  uniform mat4 uVP;
  uniform vec3 uColor; uniform float uBase; uniform float uRim; uniform float uFog; uniform float uFade;
  varying vec3 vW;

  float sdCap(vec3 p, vec3 a, vec3 b, float r) {
    vec3 pa = p - a, ba = b - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * h) - r;
  }
  float smin(float a, float b, float k) {
    float h = max(k - abs(a - b), 0.0) / k;
    return min(a, b) - h * h * k * 0.25;
  }
  // 腕・脚: 同じ太さの2本のカプセルを、溶かさずにつなぐ(関節が太くならない)
  float limb(vec3 p, vec3 a, vec3 b, vec3 c, float r) {
    return min(sdCap(p, a, b, r), sdCap(p, b, c, r));
  }
  // 体は1つの塊。ただし、くびれ(首)があり、手先・足先は胴から離れている。
  float map(vec3 p) {
    float H = uH;
    float body = sdCap(p, uJ[0], uJ[1], 0.105 * H);              // 胴
    float neck = sdCap(p, uJ[1], uJ[2], 0.042 * H);              // 首(細い)
    float head = length(p - uJ[2]) - 0.095 * H;                  // 頭
    float d = smin(body, neck, 0.02 * H);
    d = smin(d, head, 0.014 * H);
    float k = 0.026 * H;                                          // 付け根だけ溶かす
    d = smin(d, limb(p, uJ[3], uJ[5], uJ[7], 0.038 * H), k);     // 左腕
    d = smin(d, limb(p, uJ[4], uJ[6], uJ[8], 0.038 * H), k);     // 右腕
    d = smin(d, limb(p, uJ[9], uJ[11], uJ[13], 0.05 * H), k);    // 左脚
    d = smin(d, limb(p, uJ[10], uJ[12], uJ[14], 0.05 * H), k);   // 右脚
    return d;
  }

  void main() {
    vec3 ro = cameraPosition;
    vec3 rd = normalize(vW - ro);
    vec3 inv = 1.0 / (rd + vec3(1e-6));
    vec3 t0 = (uBMin - ro) * inv, t1 = (uBMax - ro) * inv;
    vec3 tmn = min(t0, t1), tmx = max(t0, t1);
    float tNear = max(max(max(tmn.x, tmn.y), tmn.z), 0.0);
    float tFar = min(min(tmx.x, tmx.y), tmx.z);
    if (tFar < tNear) discard;

    float t = tNear;
    bool hit = false;
    float eps = 0.004 * uH;
    for (int i = 0; i < 44; i++) {
      float d = map(ro + rd * t);
      if (d < eps) { hit = true; break; }
      t += d;
      if (t > tFar) break;
    }
    if (!hit) discard;

    vec3 p = ro + rd * t;
    float h = 0.012 * uH;
    vec2 e = vec2(1.0, -1.0) * h;
    vec3 n = normalize(e.xyy * map(p + e.xyy) + e.yyx * map(p + e.yyx) + e.yxy * map(p + e.yxy) + e.xxx * map(p + e.xxx));

    // 縁ほど濃く、中心は薄い。ベール越しに向こうが透ける。
    float r = 1.0 - abs(dot(n, -rd));
    float a = mix(uBase, uRim, pow(r, 1.6));
    float f = 1.0 - exp(-uFog * uFog * t * t);
    a *= (1.0 - f * 0.45) * uFade;
    vec3 c = uColor * (0.86 + 0.14 * n.y);
    gl_FragColor = vec4(c, a);

    vec4 clip = uVP * vec4(p, 1.0);
    gl_FragDepth = clip.z / clip.w * 0.5 + 0.5;
  }`,Pu=class{constructor(e,t){this.H=e,this.group=new mn,this.J={};for(let e of ju)this.J[e]=new K;this.uniforms={uJ:{value:ju.map(e=>this.J[e])},uH:{value:e},uBMin:{value:new K},uBMax:{value:new K},uVP:{value:new zt},uColor:{value:new Y(t.color)},uBase:{value:t.base??.22},uRim:{value:t.rim??.75},uFog:{value:Q.fogDensity},uFade:{value:1}},this.material=new co({vertexShader:Mu,fragmentShader:Nu,uniforms:this.uniforms,transparent:!0,depthWrite:!1,side:1}),this.box=new si(new ji(1,1,1),this.material),this.box.frustumCulled=!1,this.box.renderOrder=101,this.box.onBeforeRender=(e,t,n)=>{this.uniforms.uVP.value.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse)},this.group.add(this.box)}dispose(){this.box.geometry.dispose(),this.material.dispose()}pose(e){let{H:t,J:n}=this,r=e.fx,i=e.fz,a=-i,o=r,s=(e.lean||0)*t,c=(t,n,s,c)=>t.set(e.x+r*s+a*c,n,e.z+i*s+o*c);c(n.pelvis,t*.5,s*.4,0),c(n.chest,t*.78,s,0),c(n.head,t*1.02,s*1.15,0),c(n.shL,t*.75,s,-t*.125),c(n.shR,t*.75,s,t*.125),c(n.hpL,t*.5,s*.4,-t*.08),c(n.hpR,t*.5,s*.4,t*.08);let l=e.swing||0;c(n.haL,t*.44,s*.6-l*t*.1,-t*.215),c(n.haR,t*.44,s*.6+l*t*.1,t*.215),c(n.elL,t*.6,s*.8-l*t*.04,-t*.18),c(n.elR,t*.6,s*.8+l*t*.04,t*.18),n.ftL.set(e.ftL.x,e.ftL.y,e.ftL.z),n.ftR.set(e.ftR.x,e.ftR.y,e.ftR.z);let u=t*.29,d=new K,f=new K;for(let[e,t,a]of[[`hpL`,`knL`,`ftL`],[`hpR`,`knR`,`ftR`]]){d.subVectors(n[a],n[e]);let o=d.length(),s=u*2-.01;o>s&&(d.multiplyScalar(s/o),n[a].copy(n[e]).add(d),o=s);let c=d.clone().normalize();f.set(r,0,i),f.addScaledVector(c,-f.dot(c)),f.lengthSq()<1e-6&&f.set(r,0,i),f.normalize();let l=Math.sqrt(Math.max(0,u*u-o/2*(o/2)));n[t].copy(n[e]).addScaledVector(c,o/2).addScaledVector(f,l)}let p=new K(1/0,1/0,1/0),m=new K(-1/0,-1/0,-1/0);for(let e of ju)p.min(n[e]),m.max(n[e]);let h=t*.22;p.subScalar(h),m.addScalar(h),p.y=Math.max(p.y,-.1),this.uniforms.uBMin.value.copy(p),this.uniforms.uBMax.value.copy(m),this.box.position.addVectors(p,m).multiplyScalar(.5),this.box.scale.subVectors(m,p)}},Fu=(e,t=0,n=1)=>Math.max(t,Math.min(n,e));function Iu(e,t,n,r){let i=t+(Math.random()-.5)*2*n;return{x:e.x-Math.sin(i)*r,z:e.z-Math.cos(i)*r}}var Lu={giant:class{constructor(e,t){this.world=t,this.H=Q.giant.height,this.fig=new Pu(this.H,{color:5663102,base:.3,rim:.82}),e.add(this.fig.group),this.scene=e,this.B={x:0,z:0},this.f={x:1,z:0},this.feet=[{x:0,y:0,z:0},{x:0,y:0,z:0}],this.from={x:0,y:0,z:0},this.to={x:0,y:0,z:0},this.step=0,this.stepT=0,this.age=0,this.caught=!1,this.danger=0}reset(e,t=Math.random()*Math.PI*2,n=Q.giant.spawnDist,r=Q.giant.view,i=!1){let a=Q.giant,o=this.world.R-12,s=this.age,c=null;for(let i=0;i<14;i++){let i=t+(Math.random()-.5)*2*r,a=0;for(;a<n&&this.world.isFree(e.x-Math.sin(i)*a,e.z-Math.cos(i)*a);a+=3);(!c||a>c.run)&&(c={a:i,run:a})}let l=i?n:Fu(c.run+35,80,n),u={x:e.x-Math.sin(c.a)*l,z:e.z-Math.cos(c.a)*l};for(let i=1;i<10&&Math.hypot(u.x,u.z)>o;i++)u=Iu(e,t+(i%2?1:-1)*i*.5,r,n);let d=Math.hypot(u.x,u.z);d>o&&(u.x*=o/d,u.z*=o/d),this.B.x=u.x,this.B.z=u.z;let f=e.x-u.x,p=e.z-u.z,m=Math.hypot(f,p)||1;this.f.x=f/m,this.f.z=p/m;let h=-this.f.z,g=this.f.x;this.feet[0]={x:u.x-h*2.2,y:0,z:u.z-g*2.2},this.feet[1]={x:u.x+h*2.2,y:0,z:u.z+g*2.2},this.step=0,this.stepT=0,this.age=i?s:0,this.caught=!1,this._beginStep(Math.min(a.speedMax,a.speedStart+a.ramp*this.age)),this.fig.pose({x:u.x,z:u.z,fx:this.f.x,fz:this.f.z,ftL:this.feet[0],ftR:this.feet[1],swing:0,lean:.02})}_beginStep(e){let t=this.step,n=this.f,r=-n.z,i=n.x,a=t===0?-1:1,o=6/e;this.from={...this.feet[t]},this.to={x:this.B.x+n.x*e*o+r*a*2.2,y:0,z:this.B.z+n.z*e*o+i*a*2.2}}update(e){let t=Q.giant;this.age+=e.dt;let n=Math.min(t.speedMax,t.speedStart+t.ramp*this.age),r=e.px-this.B.x,i=e.pz-this.B.z,a=Math.hypot(r,i)||1;a>t.recycleDist&&(this.reset({x:e.px,z:e.pz},e.yaw,t.recycleTo,.9,!0),r=e.px-this.B.x,i=e.pz-this.B.z,a=Math.hypot(r,i)||1),this.f.x+=(r/a-this.f.x)*Math.min(1,e.dt*.8),this.f.z+=(i/a-this.f.z)*Math.min(1,e.dt*.8);let o=Math.hypot(this.f.x,this.f.z)||1;this.f.x/=o,this.f.z/=o,this.B.x+=this.f.x*n*e.dt,this.B.z+=this.f.z*n*e.dt;let s=6/n;this.stepT+=e.dt/s,this.stepT>=1&&(this.feet[this.step]={...this.to,y:0},e.onThump(this.to.x,this.to.z,1),this.step^=1,this.stepT=0,this._beginStep(n));let c=this.stepT,l=c*c*(3-2*c);this.feet[this.step]={x:this.from.x+(this.to.x-this.from.x)*l,y:Math.sin(Math.PI*c)*4.5,z:this.from.z+(this.to.z-this.from.z)*l},this.fig.pose({x:this.B.x,z:this.B.z,fx:this.f.x,fz:this.f.z,ftL:this.feet[0],ftR:this.feet[1],swing:Math.sin(this.age*Math.PI/s),lean:.025});let u=Math.min(...this.feet.map(t=>Math.hypot(e.px-t.x,e.pz-t.z))),d=Math.hypot(e.px-this.B.x,e.pz-this.B.z);this.caught=u<t.catchFoot||d<t.catchBody,this.danger=Fu(1-(Math.min(u,d)-12)/130)}focus(){return{x:this.B.x,y:this.H*.6,z:this.B.z}}dispose(){this.scene.remove(this.fig.group),this.fig.dispose()}},tide:class{constructor(e,t){this.world=t,this.patches=[],this.age=0,this.next=0,this.caught=!1,this.danger=0}_sync(){this.world.tide.patches.forEach((e,t)=>{let n=this.patches[t];n?e.set(n.x,n.z,n.r):e.set(0,0,-200)})}reset(){this.patches=[],this.age=-Q.tide.delay,this.next=0,this.caught=!1,this.danger=0,this._sync()}spawnPatch(e,t,n){let r=Q.tide;this.patches.length>=r.max||this.patches.push({x:e,z:t,r:.5,maxR:n??r.radius[0]+Math.random()*(r.radius[1]-r.radius[0]),hold:r.hold,phase:0})}_spawnAround(e){let t=Q.tide,n=this.world.R-30,r={x:e.px,z:e.pz};for(let i=0;i<20;i++){let i=t.minDist+Math.random()*(t.maxDist-t.minDist),a=Math.random()<t.viewBias?Iu(r,e.yaw,t.view,i):Iu(r,Math.random()*Math.PI*2,0,i);if(Math.hypot(a.x,a.z)<n){this.spawnPatch(a.x,a.z);return}}}update(e){let t=Q.tide;this.age+=e.dt,this.age>=0&&(this.next-=e.dt,this.next<=0&&(this._spawnAround(e),this.next=Math.max(t.intervalMin,t.interval-t.intervalRamp*this.age)*(.8+Math.random()*.4)));let n=1/0,r=!1;for(let i of this.patches){i.phase===0?(i.r+=t.growth*e.dt,i.r>=i.maxR&&(i.r=i.maxR,i.phase=1)):i.phase===1?(i.hold-=e.dt,i.hold<=0&&(i.phase=2)):i.r-=i.maxR/t.shrink*e.dt;let a=Math.hypot(e.px-i.x,e.pz-i.z);i.r>3&&a<i.r+.5&&(r=!0),n=Math.min(n,a-i.r)}this.patches=this.patches.filter(e=>e.r>0),this._sync(),this.caught=r,this.danger=Fu(1-n/60)}focus(){let e=this.patches.reduce((e,t)=>e.r>=t.r?e:t,this.patches[0]||{x:0,z:0,r:0});return{x:e.x,y:2,z:e.z}}dispose(){this.patches=[],this._sync()}},stand:class{constructor(e,t){this.scene=e,this.world=t;let n=Q.stand;this.items=[];for(let t=0;t<n.count;t++){let t=new Pu(n.height,{color:5070964,base:.34,rim:.85});e.add(t.group),this.items.push({fig:t,x:0,z:0,ph:Math.random()*6,seenT:0,hold:0,fade:1})}this.t=0,this.grace=0,this.nextSpawn=Q.stand.spawnEvery,this.caught=!1,this.danger=0}_seen(e,t,n){let r=t-e.px,i=n-e.pz,a=Math.hypot(r,i)||1;return(r*-Math.sin(e.yaw)+i*-Math.cos(e.yaw))/a>Math.cos(Math.min(1.5,e.halfFovH+.3))}_place(e,t,n){let r=Q.stand,i={x:t.px,z:t.pz};for(let a=0;a<50;a++){let o=r.spawnMin+Math.random()*(r.spawnMax-r.spawnMin),s,c;if(n===`view`)s=Iu(i,t.yaw,r.view,o),c=this.world.isFree(s.x,s.z);else if(n===`side`){let e=t.yaw+(Math.random()<.5?-1:1)*(.9+Math.random()*.6);s={x:i.x-Math.sin(e)*o,z:i.z-Math.cos(e)*o},c=this.world.isFree(s.x,s.z)&&!this._seen(t,s.x,s.z)}else s=this.world.randomFree(r.spawnMin,r.spawnMax,i),c=!this._seen(t,s.x,s.z);if(c||a===49){e.x=s.x,e.z=s.z,this._appear(e);return}}}_appear(e){e.fade=0,e.hold=Q.stand.hold,e.seenT=0}reset(e,t=0){this.caught=!1,this.grace=3.5,this.items.forEach(e=>{e.seenT=0,e.hold=0,e.fade=1}),this.nextSpawn=Q.stand.spawnEvery;let n={px:e.x,pz:e.z,yaw:t,halfFovH:.6};this.items.forEach((e,t)=>this._place(e,n,t<2?`view`:`hidden`)),this.items.forEach(t=>this._pose(t,e.x,e.z))}_pose(e,t,n){let r=Q.stand.height,i=t-e.x,a=n-e.z,o=Math.hypot(i,a)||1,s=i/o,c=a/o,l=-c,u=s;return e.fig.pose({x:e.x,z:e.z,fx:s,fz:c,ftL:{x:e.x-l*r*.07,y:0,z:e.z-u*r*.07},ftR:{x:e.x+l*r*.07,y:0,z:e.z+u*r*.07},swing:0,lean:Math.sin(this.t*.7+e.ph)*.01}),o}update(e){let t=Q.stand;if(this.t+=e.dt,this.grace-=e.dt,this.nextSpawn-=e.dt,this.nextSpawn<=0&&this.grace<=0){this.nextSpawn=t.spawnEvery*(.8+Math.random()*.4);let n=this.items.reduce((t,n)=>Math.hypot(t.x-e.px,t.z-e.pz)>Math.hypot(n.x-e.px,n.z-e.pz)?t:n);this._place(n,e,Math.random()<.65?`view`:`side`)}let n=1/0;for(let r of this.items){let i=e.px-r.x,a=e.pz-r.z,o=Math.hypot(i,a)||1,s=this._seen(e,r.x,r.z);r.seenT=s?r.seenT+e.dt:0;let c=0;r.hold-=e.dt,r.fade=Math.min(1,r.fade+e.dt/t.fadeIn),r.fig.uniforms.uFade.value=r.fade,this.grace<=0&&r.hold<=0&&(c=s?r.seenT>t.notice?t.dash:0:t.creep),r.x+=i/o*c*e.dt,r.z+=a/o*c*e.dt,o>t.recycle&&!s&&this._place(r,e,Math.random()<.5?`view`:`side`),n=Math.min(n,this._pose(r,e.px,e.pz))}this.nearest=this.items.reduce((t,n)=>Math.hypot(t.x-e.px,t.z-e.pz)<Math.hypot(n.x-e.px,n.z-e.pz)?t:n),this.caught=n<t.catchDist,this.danger=Fu(1-(n-4)/60)}focus(){let e=this.nearest||this.items[0];return{x:e.x,y:Q.stand.height*.9,z:e.z}}dispose(){this.items.forEach(e=>{this.scene.remove(e.fig.group),e.fig.dispose()})}}};function Ru(){let e=Math.random(),t=Q.extras,n=[`giant`];return e<t.both?n.push(`tide`,`stand`):e<t.both+t.one&&n.push(Math.random()<.5?`tide`:`stand`),n}function zu(e,t,n){return e.map(e=>new Lu[e](t,n))}function Bu(){let e=null,t,n,r,i,a=0,o=0,s=null,c=0;function l(){let t=e.createBuffer(1,e.sampleRate*2,e.sampleRate),n=t.getChannelData(0),r=0;for(let e=0;e<n.length;e++)r=(r+.02*(Math.random()*2-1))/1.02,n[e]=r*3.5;return t}function u(){if(e)return;let o=window.AudioContext||window.webkitAudioContext;if(!o)return;e=new o,t=e.createGain(),t.gain.value=.9,n=e.createBiquadFilter(),n.type=`lowpass`,n.frequency.value=2600,n.connect(t),t.connect(e.destination),i=e.createGain(),i.gain.value=.05,i.connect(n);for(let[t,n]of[[48,0],[72.3,1.3],[96.9,-.9]]){let r=e.createOscillator();r.type=`sine`,r.frequency.value=t,r.detune.value=n*8,r.connect(i),r.start()}s=l();let c=e.createBufferSource();c.buffer=s,c.loop=!0;let u=e.createBiquadFilter();u.type=`bandpass`,u.frequency.value=380,u.Q.value=.6,r=e.createGain(),r.gain.value=.035,c.connect(u),u.connect(r),r.connect(n),c.start(),a=e.currentTime+12}function d(t,r,i,a=0){if(!e)return;let o=e.currentTime,c=e.createBufferSource();c.buffer=s;let l=e.createBiquadFilter();l.type=`lowpass`,l.frequency.value=t;let u=e.createGain();u.gain.setValueAtTime(i,o),u.gain.exponentialRampToValueAtTime(1e-4,o+r);let d=e.createStereoPanner?e.createStereoPanner():null;c.connect(l),l.connect(u),d?(d.pan.value=a,u.connect(d),d.connect(n)):u.connect(n),c.start(o,Math.random()),c.stop(o+r+.05)}return{start:u,resume(){e&&e.state===`suspended`&&e.resume()},footstep(){d(620,.09,.09)},thump(t,r){if(!e)return;let i=Math.max(0,1-t/260);if(i<=.01)return;d(140,.7,.55*i*i,r);let a=e.currentTime,o=e.createOscillator(),s=e.createGain();o.type=`sine`,o.frequency.setValueAtTime(70,a),o.frequency.exponentialRampToValueAtTime(30,a+.6),s.gain.setValueAtTime(.5*i,a),s.gain.exponentialRampToValueAtTime(1e-4,a+.8),o.connect(s),s.connect(n),o.start(a),o.stop(a+.9)},update(i,s){if(!e)return;c+=(i-c)*Math.min(1,s*1.5);let l=e.currentTime;if(n.frequency.setTargetAtTime(2600-2250*c,l,.3),t.gain.setTargetAtTime(.9-.5*c,l,.3),r.gain.setTargetAtTime(.035*(1-.8*c),l,.3),c>.12&&l>o){let t=.12+.5*c;for(let[n,r]of[[0,62],[.17,52]]){let i=e.createOscillator(),a=e.createGain();i.type=`sine`,i.frequency.setValueAtTime(r,l+n),i.frequency.exponentialRampToValueAtTime(34,l+n+.16),a.gain.setValueAtTime(1e-4,l+n),a.gain.linearRampToValueAtTime(t,l+n+.012),a.gain.exponentialRampToValueAtTime(1e-4,l+n+.2),i.connect(a),a.connect(e.destination),i.start(l+n),i.stop(l+n+.25)}o=l+1.15-.7*c}if(l>a){let t=e.createOscillator(),r=e.createGain();t.type=`sine`,t.frequency.value=[392,440,523.25,349.23][Math.random()*4|0],r.gain.setValueAtTime(1e-4,l),r.gain.linearRampToValueAtTime(.018,l+.05),r.gain.exponentialRampToValueAtTime(1e-4,l+5),t.connect(r),r.connect(n),t.start(l),t.stop(l+5.2),a=l+22+Math.random()*30}},home(){if(!e)return;let n=e.currentTime;for(let[r,i]of[[261.63,0],[329.63,.15],[392,.3]]){let a=e.createOscillator(),o=e.createGain();a.type=`sine`,a.frequency.value=r,o.gain.setValueAtTime(1e-4,n+i),o.gain.linearRampToValueAtTime(.05,n+i+.4),o.gain.exponentialRampToValueAtTime(1e-4,n+i+6),a.connect(o),o.connect(t),a.start(n+i),a.stop(n+i+6.2)}i.gain.setTargetAtTime(0,n,1.5)}}}function Vu(e,t,n,r){let i=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(r*i),e.height=Math.round(r*i),e.style.width=e.style.height=r+`px`;let a=e.getContext(`2d`);a.scale(i,i);let o=r/(2*(t.r+12)),s=e=>r/2+e*o,c=e=>r/2+e*o,l=(e,t)=>{a.beginPath();for(let n=t;n<e.length;n+=2)(n===t?a.moveTo:a.lineTo).call(a,s(e[n]),c(e[n+1]));a.closePath()};a.fillStyle=`#f4f7f9`,a.fillRect(0,0,r,r),a.beginPath(),a.arc(r/2,r/2,t.r*o,0,Math.PI*2),a.fillStyle=`#ffffff`,a.fill(),a.save(),a.clip(),a.fillStyle=`#c8d1d8`;for(let e of t.rd||[])l(e,0),a.fill();a.fillStyle=`#8c99a4`;for(let e of t.b)l(e,1),a.fill();a.restore(),a.beginPath(),a.arc(r/2,r/2,t.r*o,0,Math.PI*2),a.strokeStyle=`#c3ccd3`,a.lineWidth=1,a.stroke(),a.lineJoin=a.lineCap=`round`,a.strokeStyle=`#e4572e`,a.lineWidth=2.6;for(let e of n.segs)e.length<2||(a.beginPath(),e.forEach((e,t)=>(t?a.lineTo:a.moveTo).call(a,s(e.x),c(e.z))),a.stroke());a.setLineDash([4,5]),a.strokeStyle=`#5d6b77`,a.lineWidth=1.4,n.caught.forEach((e,t)=>{let r=n.segs[t+1]&&n.segs[t+1][0];r&&(a.beginPath(),a.moveTo(s(e.x),c(e.z)),a.lineTo(s(r.x),c(r.z)),a.stroke())}),a.setLineDash([]),a.strokeStyle=`#27313a`,a.lineWidth=2;for(let e of n.caught){let t=s(e.x),n=c(e.z),r=4.5;a.beginPath(),a.moveTo(t-r,n-r),a.lineTo(t+r,n+r),a.moveTo(t+r,n-r),a.lineTo(t-r,n+r),a.stroke()}let u=n.segs[0][0];a.beginPath(),a.arc(s(u.x),c(u.z),5,0,Math.PI*2),a.fillStyle=`#fff`,a.fill(),a.strokeStyle=`#27313a`,a.lineWidth=2,a.stroke();let d=s(n.goal.x),f=c(n.goal.z);a.beginPath(),a.moveTo(d-7,f+6),a.lineTo(d-7,f-1),a.lineTo(d,f-8),a.lineTo(d+7,f-1),a.lineTo(d+7,f+6),a.closePath(),a.fillStyle=`#ff9b3d`,a.fill(),a.strokeStyle=`#27313a`,a.lineWidth=1.4,a.stroke()}function Hu(e,t){let n=0;for(let t of e.segs)for(let e=1;e<t.length;e++)n+=Math.hypot(t[e].x-t[e-1].x,t[e].z-t[e-1].z);let r=Math.floor(t/60),i=Math.floor(t%60);return`${Math.round(n)} m ・ ${r}:${String(i).padStart(2,`0`)} ・ 捕まった ${e.caught.length} 回`}var Uu=Object.entries(Object.assign({"./data/fallback/13104-53394515.json":{r:400,c:[35.67917,139.69375],n:`新宿区（2025年度）`,b:[[10.2,1.1,-339.2,-.6,-346,-9.7,-343.8,-7.8,-337],[10,228.2,-253.3,218.9,-249.3,222.8,-240.2,232.1,-244.2],[11.2,-253.4,104.5,-243,101.3,-245,94.7,-248.7,95.8,-248.6,96.4,-255.3,98.4],[13.1,-355.8,21.5,-364.3,23.7,-358.7,46,-350.2,43.9],[7.8,-267.5,-108.4,-266.1,-107.4,-262.3,-108.9,-268.5,-121.3,-274.7,-118.1,-269.7,-111,-269.4,-111.2],[10.3,122.4,-354.8,114.3,-354.6,114.5,-345.6,122.7,-345.8],[7.5,-229,-55,-236.3,-51.5,-234.3,-47.2,-226.9,-50.8],[10,-224.4,-98.1,-226,-101.2,-227.1,-100.6,-230.1,-106.5,-230.8,-106.2,-231.6,-107.8,-236.8,-105.2,-235.8,-103.2,-240.2,-101,-241,-102.8,-245.7,-100.5,-244.8,-98.6,-245.7,-98.1,-242.7,-92,-244,-91.4,-242.7,-88.9],[2.8,-358.2,-31,-356.8,-22.3,-353.8,-22.8,-355.3,-31.5],[10.9,-156.5,-192.1,-151.7,-186,-141.1,-194.2,-145.8,-200.3],[11.4,-62.4,17.7,-65.1,20.1,-57.5,28.4,-54.9,26],[10.5,-180.1,-100.3,-185.8,-109.6,-189.3,-107.5,-187.9,-105.2,-190.2,-103.8,-185.9,-96.8],[20.1,-144.5,128.5,-138.2,126.4,-138.8,124.4,-138,124.1,-140.3,120.2,-144.2,121.5,-144.3,121.1,-153.3,124.2,-152.6,126.2,-153.7,126.6,-151.8,132.2,-144,129.5],[9.5,-39.7,-97.8,-31.9,-105.3,-34.6,-107.9,-35,-107.4,-36.6,-108.9,-36.1,-109.4,-38.9,-112,-46.1,-104.4],[12.4,86.6,-196.9,97.3,-201.1,94.3,-208.9,83.5,-204.7],[18.1,-211.9,134.1,-209.2,125.1,-208.2,124.7,-210.9,117.6,-213.3,118.4,-214.1,116.1,-226.2,120.5,-227.2,117.9,-258.3,129.3,-248.7,155.2,-227,147.2,-214.1,137.5],[11.7,49.5,-266.2,48.9,-274.1,41.1,-273.5,41.7,-265.6],[6.1,-108.6,220.7,-103.1,218.3,-106,211.6,-111.4,214],[23,-353.1,-115.5,-353.7,-116.6,-355.4,-115.7,-356.1,-117,-362.5,-113.5,-355,-99.6,-350.5,-102.1,-347.7,-96.8,-297.1,-124,-297.7,-125.2,-297.3,-125.4,-305.8,-141,-311.1,-138.2,-313.4,-142.5,-315.9,-141.1,-313.6,-137],[22.8,121.5,-97.8,119.1,-105.2,117.2,-104.6,115.7,-109.4,117.5,-109.9,116.2,-114.3,114.6,-113.8,113.4,-117.7,114.8,-118.1,113.4,-122.7,111.9,-122.2,110.6,-126.5,112.5,-127.1,111.1,-131.6,101.4,-128.9,96.9,-120.5,98.4,-119.6,99.7,-115.7,93.3,-113.7,95.5,-107.3,91.2,-106.4,89.3,-107.6,84.7,-100.7,88.9,-87.5],[18.2,171.6,-246.2,172.2,-244.7,154.3,-237.6,155.6,-234.3,153.9,-233.6,152.4,-237.4,146.4,-235.1,146.8,-234.1,148.5,-229.2,149.5,-229.5,154.8,-216.5,159.8,-220.2,159,-221.1,160.5,-222.6,161.4,-221.5,165,-224.7,164.1,-225.6,165.7,-227.2,166.6,-226.2,169.5,-228.9,168.6,-230,170.9,-231.9,171.6,-231,174.2,-233.4,173.2,-234.5,176.7,-237.4,177.6,-236.4,179.8,-238.5,179,-239.6,179.7,-240,177.1,-245.6,176.3,-245.2,175.3,-247.7],[11.9,-21.4,-367.9,-66.6,-354.3,-64.8,-348.2,-19.5,-361.9],[9.7,-21.6,-8.6,-26.6,-12.9,-30.7,-8.1,-31.7,-8.9,-32.9,-7.6,-34,-8.6,-40.2,-1.5,-34.9,3.1,-30.7,-1.7,-28.9,-.2],[11.1,-157.2,160.8,-154.6,166.8,-149.9,164.8,-150.7,163.1,-148.4,162.2,-150.3,157.8],[28,93.8,190.1,97.3,198.1,99.7,210.5,109.5,212.7,110.9,207.2,109.6,199.8,106.1,189.8,102.7,183.8,99,179.3,102.6,178.4,102.4,174.4,94.8,175.5,89.1,171.8,76,166.7,68.2,166.3,62.9,166.7,57.1,161.6,51.4,162.8,32.9,174.3,37.1,177.4,35,179.6,31,174.9,28.3,179.1,31.7,182.4,30.6,184.2,27.4,181.5,22.1,191.7,20.5,198.7,19.7,206.5,28.1,224,31.6,231.7,38.4,228.2,38.9,229.1,41.8,224.4,39.1,221.4,37.1,216,36.2,208.6,36.8,202.2,38.9,195.4,43.1,188.4,47.8,183.9,55.5,179,75,177,75,179,78.4,181.2,79.5,179.3,85.7,182.4],[12.2,115.3,45.1,115.2,43.7,117.5,43.6,117.2,37.3,105.8,37.8,106.1,44.7,108.2,44.6,108.2,44.2,110.2,44.1,110.3,45.3],[27.6,-47.3,-217,-44.7,-218.4,-45.2,-219.3,-40.1,-222.1,-39.6,-221.1,-36.6,-222.8,-47.4,-242.5,-58.1,-236.6],[7.4,-252.4,24.4,-254,17.7,-263.2,19.9,-261.6,26.6],[8.1,-192.8,96.4,-185.8,104.7,-180.8,100.6,-181.4,100,-179.7,98.5,-178,100.5,-175.1,98.1,-178.2,94.4,-178.8,94.9,-183.8,88.9],[11.2,-166.4,219.6,-164.5,226.2,-160.7,225.2,-162.6,218.5],[12.6,-29.2,59.7,-32.2,56.1,-40.7,63.5,-37.7,68.8,-33.2,65.8],[11.3,-201.3,-26,-198.4,-27.4,-203.9,-38.6,-206.7,-37.2],[7.4,-215.3,-56,-222.2,-52.5,-220.1,-48.2,-213.2,-51.7],[7.6,5.7,-266.4,16.3,-269.4,14.9,-274.5,16.3,-274.8,15.6,-277.1,9.7,-275.4,9.8,-275,3.8,-273.3],[6.3,-56.3,-286.4,-53.3,-280.4,-49.1,-282.6,-52,-288.5],[9.4,198.6,-220.6,195.8,-225.5,191.6,-223.1,191,-224.2,187.4,-222.2,190.7,-216.2],[9.6,-176.9,-346.1,-181.8,-343.3,-179.8,-339.8,-177.9,-340.8,-176.9,-338.9,-177.7,-338.4,-173.4,-330.8,-169.5,-333],[11.5,-208.8,-58.8,-214.1,-56.3,-208.5,-44.6,-203.2,-47.1],[8.8,-87.1,-142.2,-90.7,-139.3,-87.7,-135.6,-87.3,-135.9,-82.6,-130.1,-79.4,-132.8],[13,-164,5.9,-154.1,-4.2,-152,-4.3,-151.4,-5.4,-151.6,-6.5,-155.5,-10.6,-154.7,-11,-161.3,-17.2,-171.9,-7.3,-169,-4.6,-170.5,-3.3,-167.9,-1,-168.9,.4],[6.3,-52.4,-54.9,-56.8,-50.5,-53.4,-47,-48.9,-51.5],[9.7,-137.3,-186.3,-143.5,-181.5,-142.5,-180.2,-143.3,-179.6,-141.2,-176.9,-133.6,-182.7,-135.4,-185.1,-136,-184.6],[9.1,-114.5,-158.1,-118.7,-163.8,-125.2,-159,-120.9,-153.3],[11.8,246.1,-263.4,242.1,-261.9,244.4,-255.6,248.5,-257.2],[11,-38.2,73.4,-43.8,66.5,-46.8,69,-41.2,75.9],[9.2,-160.7,-102.4,-151.3,-88.1,-144.2,-92.7,-150.5,-102.2,-147.6,-104.1,-150.7,-108.8],[12.2,204.6,-279.7,208,-269.3,212,-270.6,211.7,-271.7,214.8,-272.7,218.9,-276.3,217.8,-279.8,216.9,-279.5,215.6,-283.3],[7.7,1.1,-365.3,-11.7,-361.7,-9.2,-352.7,-5.4,-353.7,-4.5,-350.5,1.8,-352.2,.4,-357.3,3.2,-358],[5.9,-189.1,213.9,-196.6,217.2,-193.7,223.9,-186.2,220.6],[10.8,-153.9,-125.3,-151.6,-122,-150.6,-122.6,-148.4,-119.4,-138.2,-126.3,-142.6,-132.9],[12.2,36.6,-329.6,36.8,-324,43.3,-324.2,43.3,-325.4,46.1,-325.5,45.9,-330],[17.2,-174.5,-316.3,-186.1,-334.3,-191,-331.2,-189.4,-328.7,-194.3,-325.6,-195.3,-327.2,-212.1,-316.5,-211,-314.9,-213,-313.6,-203,-298.1],[10.8,-62.9,-38,-70.3,-29.4,-65.5,-25.3,-58.1,-33.9],[8.2,-176.5,100.3,-173.1,106.5,-165,102.2,-168.3,95.9],[11.9,-110.4,-204.6,-112.2,-203.5,-112.6,-204.2,-117.2,-201.5,-112,-192.4,-108.4,-194.2,-108.1,-193.7,-100.3,-198.1,-100.5,-198.6,-97.4,-200.3,-97.2,-201,-102.4,-210.1,-107.2,-207.4,-106.8,-206.6,-108.5,-205.7],[8.5,-216.2,-137.9,-212.2,-139.8,-217,-149.8,-224,-146.5,-222.3,-143,-219.5,-144.3,-218.1,-141.2,-220.9,-139.9,-219.5,-137,-216.5,-138.5],[18.9,-139.3,358.8,-135.3,360,-133.3,353.8,-131.5,354.4,-130.8,352,-123.5,354.4,-116.5,332.7,-129.6,328.6],[8,-136.6,-171.1,-134.2,-167.8,-126.5,-173.3,-128,-175.4,-128.7,-174.9,-129.6,-176.1],[11,-232.1,56,-243.1,58.6,-239.6,73.5,-228.6,70.9],[9.3,-58.2,-96.8,-65.2,-91,-62.7,-88,-55.7,-93.8],[2.9,-16.2,-362.2,-21.1,-361.1,-19.2,-353.4,-14.3,-354.6],[13.9,-154.1,291.7,-154.2,292.3,-161.4,290.3,-163.2,296.8,-152.3,299.9,-150.3,292.7],[16.1,-308,-223.5,-311.8,-226.8,-309.8,-229,-314.1,-232.8,-322.2,-223.6,-323.2,-224.5,-330.5,-216.4,-321.5,-208.4],[9.1,-76.3,-178,-85.6,-190.4,-88.7,-188.1,-89.9,-183.8,-82.5,-173.5],[11.9,-185.7,151.2,-190.8,153.7,-187.8,160,-182.7,157.5],[9,-123.7,-52.2,-126.9,-49.4,-121.5,-43.2,-118.3,-45.9],[13.1,-154.1,188,-152.1,192.5,-147.4,190.4,-148.1,188.8,-146.5,188.1,-145.8,189.9,-142.7,188.5,-144.8,183.8],[15.7,-63.9,32.2,-80.9,47.8,-78.7,50,-80.1,51.6,-70.1,57.1,-66.8,53.9,-64.2,56.4,-63.9,55.9,-62.9,56.9,-58.3,52.4,-59.1,51.5,-57.8,50.2,-57.3,50.7,-48.6,41,-58.1,30.5,-62.2,34.2],[11.2,233.3,-187.2,232.8,-188,230.5,-187.9,218.7,-181.6,218.3,-182.4,212.2,-178.6,214,-175.3,220.6,-179,220.1,-179.8],[6.3,-116.1,-180.8,-122.8,-176.2,-118.5,-169.9,-111.7,-174.6],[11.1,-150.4,295.6,-141.5,297.9,-140,292.4,-146.4,291.8,-146.8,293,-149.5,292.3],[-9999,195.1,-120.2,195.9,-119.1,200.1,-122.4,191.7,-133.3,187.4,-130,189.9,-126.7,188.1,-127.2,183.4,-123.2,183.7,-121.4,184.3,-121,183.3,-120.3,185,-114.3,194.2,-118.5],[9.4,-60.6,-27.9,-63.6,-24.8,-56.9,-18.5,-54,-21.6],[8.8,-318.2,-239.2,-317.4,-239.9,-323.9,-247.7,-335.3,-238.3,-328.7,-230.4],[8,-104,-190,-99.5,-182.5,-96,-184.5,-95.2,-183.3,-92.5,-185.3,-95.7,-195.1],[8,135.7,-360.4,141,-344.1,148,-346.4,148.3,-345.6,152,-346.8,150.7,-350.9,149.5,-350.5,145.3,-363.5],[19.9,311.4,-207.8,313.6,-209.5,311.7,-212,312.2,-212.4,311.4,-213.5,312,-214,310.9,-215.5,311.7,-216.2,310.1,-218.4,311.3,-219.3,309.1,-222.2,310.6,-223.3,308.5,-226.1,298.8,-218.8,299.7,-217.6,298.1,-216.4,300.5,-213.2,303.8,-215.7,304.2,-215.2,305.3,-216],[10.6,-117.5,207.2,-121.6,208.7,-120.7,211.2,-121.3,211.4,-119.9,215.2,-115.1,213.5],[8.1,-87.2,-126.2,-83.8,-128.9,-91.8,-138.7,-95.1,-136],[14.9,-227.8,275.1,-230.3,274.4,-237.9,298.2,-225.9,301.5,-226.6,303.6,-214.2,307.3,-214.8,308.4,-201.8,312.3,-198.9,303.1,-200.7,302.5,-199.5,298.5,-197.9,298.8,-196.5,294.9,-198.5,294.1,-190.4,268.1,-194.9,266.4,-193.2,262.6,-198.7,260.9,-197.6,258.5,-206.1,256.2,-205.2,254.4,-207.2,253.9,-205.9,250.5,-218.7,246.5],[24.4,-306,-170.9,-307.2,-171.3,-306.2,-174,-308.5,-174.8,-309.8,-171.1,-306.7,-169.9,-312.9,-161.5,-290.5,-145.1,-290,-145.7,-286.6,-143.2,-287.7,-141.6,-286.5,-140.7,-289.1,-137.1,-279.7,-130.3,-276,-135.3,-275,-134.6,-270.4,-140.9,-269.3,-140.1,-266.3,-144.3,-267.2,-144.9,-266.1,-146.3,-276.6,-154,-278.2,-151.8,-279.3,-152.5,-275.5,-157.7,-301.7,-176.8],[13.4,-198,157.9,-196.7,157.4,-194.7,162.1,-189.3,159.9,-193.1,151.1,-193.8,151.4,-194.9,148.8,-200.9,151.3],[8.6,271.7,-282.2,265.7,-279.8,266.1,-278.8,263.9,-278,265.7,-273.6,273.9,-277],[10.2,-212.6,-35.2,-210.1,-30.2,-205.5,-32.4,-207.9,-37.5],[21.8,50.9,-264.9,62.9,-265.7,62.6,-271.4,64.6,-271.6,64.1,-281,62.6,-280.9,62.4,-284.2,59.8,-284,59.7,-285.5,53.2,-285,53.4,-280.7,50.5,-280.4,50.6,-278,49.6,-277.9],[12.3,-158.5,178.7,-156.9,182.3,-150.9,179.7,-151.7,178,-150.5,177.5,-149.5,179.6,-145.3,177.7,-147.2,173.7],[5.6,-206.5,-192.4,-213.3,-203.1,-223.9,-196.5,-222.6,-194.6,-214.2,-199.9,-208.6,-191.1],[7.5,20.7,-269.2,30.4,-271.7,30.6,-271.1,33.9,-271.9,33.4,-273.7,34.3,-274,32.9,-279.1,19.1,-275.5],[15.9,91.7,-293.5,90.7,-300.9,70.4,-298.2,71.4,-290.7],[22.2,-251.5,-178.7,-263.1,-171.7,-264.8,-174.2,-262.6,-175.8,-261.2,-175.7,-260.9,-177.6,-259.9,-177.4,-257.9,-178.8,-256.6,-178.7,-256.2,-180.5,-255.1,-180.5,-254.6,-182.6,-258.4,-188.9,-271.9,-180.7,-274.1,-183.4,-276.2,-183.3,-278.1,-185.7,-278.2,-190.6,-279.6,-190.7,-279.6,-192.1,-280.5,-192,-280.6,-193.8,-281.5,-195.5,-284,-193.7,-288.7,-193.8,-288.7,-192.1,-290.4,-190.7,-292.1,-190.7,-292.1,-189.5,-295.6,-189.4,-295.5,-188,-298,-188.1,-297.9,-185.7,-298.7,-185.7,-298.6,-183.3,-298.1,-183.2,-298.1,-182.6,-297.1,-182.7,-297.1,-181.6,-295,-181.6,-295,-179.9,-291.2,-177.8,-291.2,-177.1,-289.4,-175.8,-287.7,-175.9,-287.6,-174.5,-277,-168,-275.7,-168.7,-272.4,-164.4,-269.6,-166.1,-269.1,-165.3,-265.1,-167.8,-258.6,-157.5,-257.1,-158.4,-253.6,-152.9,-250.9,-154.7,-247.7,-149.7,-245.9,-150.9,-242.6,-145.8,-234,-151.2],[11.9,-186,-126.9,-192.4,-122.6,-189.2,-117.9,-182.8,-122.2],[10.7,-132.1,-201.4,-127.8,-203.7,-131.7,-211.3,-136.1,-209],[10,-337.4,-174.3,-341.5,-170.5,-335,-163.4,-330.9,-167.2],[-9999,26.3,-146.3,18.6,-144.3,21.3,-133.6,29,-135.6],[14,-211.3,333.8,-188.3,339.8,-185.6,329.6,-186.1,329.5,-185.2,326.2,-186.5,325.9,-186.6,326.3,-192,324.9,-191.6,323.4,-198.5,321.6,-199.1,324.1,-207.1,322,-207.5,323.5,-208.5,323.3],[13.1,171.3,-259.1,169.3,-258.4,170,-256.5,154.5,-251.1,156.7,-244.7,174.2,-250.8],[8,-337.2,-64.1,-334.1,-51,-323.6,-53.4,-324.2,-56,-314.9,-58.2,-317.4,-68.8],[9.3,-256.8,-115.3,-255.5,-112.9,-256.6,-112.3,-250.9,-102.4,-247.1,-104.6,-248.1,-106.3,-247.7,-106.6,-254.3,-116.7],[17.6,381.8,-39.3,376,-37.7,377.9,-30.9,383.7,-32.5],[11.5,-355.1,-94.8,-358.6,-92.9,-355.2,-86.8,-349.3,-90,-349.6,-90.6,-348,-91.5,-351.9,-97.8,-355.6,-95.7],[9,101.6,-168.9,105.1,-161.2,111.1,-167.9,110.9,-171.9],[10,126,-380.5,127.7,-375.6,131.6,-376.9,135.1,-366.6,139.8,-368.2,134.7,-383.5],[21,-115.1,282.2,-100.6,286.4,-82.9,228,-87.9,226.4,-86.4,223,-88.5,222.1],[9.3,215,-244.9,212.8,-244,213.1,-243.4,211.3,-242.6,212.2,-240.7,207,-238.5,209.6,-232.6,214.7,-234.7,217.6,-227.9,221.7,-229.7],[8.9,-311,-97.8,-319.8,-95.3,-316.6,-84.9,-311.1,-86.5,-311.3,-87,-309.4,-87.6,-309.3,-87.2,-306,-88.1,-306.2,-88.6,-305.4,-88.8,-306.8,-93.6,-308.2,-93.2,-309.3,-96.9,-310.6,-96.5],[8.6,254.5,-259,252.8,-263.8,247.2,-261.9,248.9,-257],[8.1,-178.2,-10.3,-188.7,-7.7,-187.1,-1.3,-183.2,-2.2,-183.4,-3.1,-176.8,-4.8],[9.2,-231,-60.7,-235,-67.4,-239,-65,-235,-58.3],[7.7,-282.1,-38.2,-283.2,-42.6,-289.6,-41,-288.5,-36.6],[17.5,-246.7,-183.5,-235.3,-190.6,-236.7,-192.9,-234.2,-194.4,-236,-197.3,-238.5,-195.8,-245.4,-206.9,-243.1,-208.3,-244.6,-210.7,-246.9,-209.3,-248.8,-212.4,-246,-214.1,-248.8,-218.6,-266.2,-207.9,-262.5,-201.9,-259.3,-203.8],[10,252.6,-266.4,250,-272.8,239.6,-268.5,242.2,-262.1],[10.6,-145.9,170.8,-148.4,165.1,-154.3,167.6,-151.8,173.3],[11.1,-202.4,204.6,-198.4,214.6,-191.2,211.8,-194.2,204.1,-195.8,204.7],[9.5,-51.6,9.3,-52.1,9.8,-52.9,9,-55.2,11.3,-48.3,18.3,-45.4,15.5],[9.6,282.6,-234.5,281.1,-238.3,275,-235.9,276.5,-232.1],[11.2,247,-230.4,248.5,-227,249,-227.2,251.2,-222.2,256.5,-224.5,256.1,-225.3,258.4,-226.3,258.9,-225.1,268,-229.2,267.7,-229.9,269.5,-230.7,269.9,-229.8,272.8,-231.1,272.4,-232,273.9,-232.6,273.4,-233.7,274.3,-234.2,273.2,-236.6,274.4,-237.1,273.7,-238.6,263.1,-236.2,254.2,-231.4,248.5,-244.1,240.1,-240.4],[7.7,-345.2,93.5,-338.2,91.7,-342.7,74.3,-340.5,73.8,-339.1,79.5,-335,78.4,-337.3,69.5,-350.4,72.9],[16.6,42.8,-158.3,44.8,-147.9,54.4,-149.7,52.4,-160.1],[14.6,-336.2,-25.2,-333.2,-26,-333.3,-26.7,-329.1,-27.8,-330.8,-34.3,-331.9,-34,-332.7,-37,-335.8,-36.2,-336,-37,-339,-36.2],[21.3,97.6,-212.1,108.5,-184.1,109.9,-184.6,110.9,-181.9,115.9,-183.9,114.9,-186.4,125.8,-190.6,112.6,-224.8,101.8,-220.6,101.4,-221.6,97.1,-219.9,96.9,-220.6,94.4,-219.6,94.8,-214.6,92.9,-215,91.8,-222.4,109.8,-225,104.1,-264.3,92.9,-262.7,94,-255.3,87.6,-254.4,86.5,-261.8,75.4,-260.2,82.3,-212.3,89.8,-213.4,89.7,-212.8],[7.7,-91.3,-64.1,-99,-71.7,-101.2,-69.5,-102.2,-70.5,-104.9,-67.8,-102.8,-65.7,-103.6,-65,-97.2,-58.6],[9,-196.7,-17.7,-196.1,-15.9,-191.2,-17.5,-194.1,-26.2,-198.9,-24.6,-197.5,-20.2,-198.8,-19.7,-200.7,-24.2,-208.6,-20.9,-205.7,-14],[10.1,-98.7,-43.5,-104.5,-49,-107.7,-45.6,-101.9,-40.2],[9.3,-90.3,-62.4,-96,-56,-91.4,-51.9,-92.9,-50.2,-91.5,-48.9,-90.9,-49.6,-88.6,-47.5,-82.7,-54.1,-84.9,-56.1,-84.2,-56.9],[12.2,-347,22.3,-347.3,22.4,-347.7,21.1,-353.7,22.6,-353.4,24,-353.8,24.1,-350.6,36.9,-343.7,35.2],[10.1,-73.3,-61.4,-78.5,-55.8,-70.8,-48.8,-65.6,-54.4],[6,-348.2,191.9,-349.5,202.5,-344,203.1,-343.7,200.4,-340.9,200.7,-340.7,199.1,-338,199.4,-337.3,193.1],[14.2,-139.3,100.2,-146.8,102.7,-141.1,110.9,-136.7,109.7],[15.2,-129.7,328.6,-131.4,328.1,-136.8,344.9,-135,345.4],[6.8,34.9,-364.4,35.7,-358.2,39.9,-358.7,39.1,-365],[16.9,-118.6,-344.3,-115.7,-339.1,-113.5,-340.4,-110.1,-334.3,-76,-353.5,-79.4,-359.5,-77.5,-360.6,-80.4,-365.7],[11.7,15,-27.3,7.3,-31.8,5.7,-29.1,13.4,-24.7],[8.1,244.6,-253.2,242.1,-260.1,233.8,-257.1,236.4,-250.1],[14.8,-264.7,79.6,-260.9,93.9,-249.5,90.5,-250.6,86.9,-251.1,86.8,-252,83.7,-252.5,83.7,-253.4,80.3,-253.9,80.5,-254.7,77],[18.1,-118.2,156,-124.1,158.1,-123.4,160,-127.6,161.5,-127.1,163,-129,163.7,-125.7,172.7,-124.8,172.4,-124.6,173,-117.2,170.3,-117.1,170.7,-114,169.5,-114.4,168.6,-113.6,168.3],[19.5,-49.5,-325.7,-42.9,-310.3,-39.7,-311.1,-40.2,-312.7,-28.5,-315.8,-29.1,-318,-34.7,-316.6],[24.1,312.9,-98.1,315.4,-99.7,300.4,-122.8,297.9,-121.2],[13.7,-315.2,59.8,-308.6,58.1,-312,45,-323.4,48.2,-325,42.9,-332.2,45.1,-330.1,53.2,-329,52.9,-327.4,58.4,-316.4,55.6,-316.1,58.1,-315.5,58.3],[8,-193.8,246.3,-191.6,253.7,-177,249.3,-179.2,241.9],[53,-83.8,-339.1,-73.9,-321.6,-74.8,-321.1,-76.2,-323.7,-77.9,-322.8,-81.2,-328.7,-90,-323.8,-88.9,-321.8,-97.2,-317.1,-96.6,-316.1,-97.9,-315.3,-96.7,-313.1,-98.2,-312.3,-95.5,-307.3,-96.7,-306.7,-92.2,-298.6,-90.7,-299.5,-88,-294.7,-78.6,-299.9,-81,-304.2,-71.3,-309.6,-70.3,-307.9,-50.7,-318.8,-67.2,-348.4],[9.6,-302.7,241.1,-304.1,237.8,-316.6,243.3,-315.2,246.6],[10.8,-158.8,322,-159.8,325.9,-152.4,327.9,-151.4,324],[7.6,-382.1,14,-373,11.7,-373.9,7.8,-372.7,7.4,-374.4,.5,-376.7,1.1,-377,-.1,-385.1,1.9],[11.6,-240.7,73.3,-241.8,67.7,-249.1,69.1,-248.1,74.6],[15.3,119.2,221.5,108.4,222.5,108.5,223.5,100.8,224.2,103.6,254.7,104.8,254.5,105,256.7,110.6,256.2,110.8,257.9,103.8,258.6,105.3,274.6,112.8,274,113.3,280,105.7,280.7,106.9,294.5,114.3,293.8,114.8,299.1,110.8,299.4,110.8,299.9,106.7,300.3,107.5,310,109.4,309.8,109.7,312.8,115.4,312.2,115.9,317.4,110,317.9,111.1,330.5,118.4,329.9,118.5,331.2,126.7,330.5,120.1,258,116.7,258.3,116.5,255.9,120.1,255.6,119,243.9,123.2,243.5,122.8,238.4,124.5,238.2,124.2,234.4,123.4,234.4,122.6,226.4,123.6,226.3,123.3,222.7,119.3,223.1],[9.9,227.1,-206.5,221.9,-204.2,223.4,-200.7,224.7,-201.2,227.5,-195,231.4,-196.7],[14,35.2,-210.1,37.3,-198.4,43.6,-199.6,41.5,-211.2],[9.7,-235.7,42.5,-240.1,43.7,-238,51.9,-233.5,50.8],[11.2,-78.5,147.8,-73.5,152.4,-70.6,149.3,-70.9,149,-69.5,147.6,-70,147.1,-68.7,145.7,-69.4,145,-67,142.5,-71.7,138.2,-74.1,140.7,-72.7,142],[10.1,-29.8,-247.2,-28.4,-244.3,-20.3,-248,-21.7,-251],[8.6,-17.8,-373,-5.5,-375.6,-7.5,-384.8,-16.6,-382.7,-16.2,-380.4,-19.2,-379.8],[8.9,-309.2,107.5,-302.3,105.7,-303.4,102.1,-296.1,100.1,-299.3,90.9,-298.6,88.9,-299.2,88.5,-307.1,90.9,-306.7,92.3,-313.1,94.1],[17.3,260.9,-188.2,267.1,-180.2,264.7,-178.3,269.1,-172.5,290.7,-188.9,280.1,-202.8],[10.9,-161.6,332.3,-162.6,336.5,-156.2,338.1,-155.2,333.9],[13.7,68.7,87,69.1,98.3,90,97.5,89.6,86.3],[11.2,-321.1,-82.9,-327.3,-81.3,-332.6,-78.8,-330.4,-71.9,-326.9,-72.9,-326.7,-72.2,-324,-73.1,-324.1,-73.5,-322.5,-74,-322.4,-73.4,-320.5,-74.1,-320.5,-74.8,-319.9,-75.1,-320.1,-75.6,-319.3,-76.1],[19.3,-75.1,187,-68,189.2,-64.6,174.5,-65,173,-66.6,172.3,-67.9,172.5],[10,-241.3,-133.9,-247.7,-131.5,-245.1,-126.5,-244.7,-126.8,-243.7,-124.5,-238.7,-127.4],[19.2,-121.4,299.6,-106.6,304,-103.3,293.1,-118.1,288.9],[8.7,-44.2,-66.7,-37.7,-60.8,-31.9,-67.3,-34.1,-69.4,-34.9,-68.5,-39.1,-72.3],[10.9,-198.7,-85.6,-190,-90.3,-192.6,-95,-201.3,-90.3],[14.2,-149.9,322.7,-147.5,313.6,-159.6,310.3,-160.2,312.3,-167.6,310.3,-168.6,314,-169.3,313.9,-170.2,317.3],[15.1,111.4,-290.5,93.2,-288.2,93.6,-285,99.1,-285.7,100.8,-273,113.4,-274.6],[7.5,-195.6,-44,-200.1,-42,-197.9,-37.1,-196.2,-37.9,-196.4,-38.3,-193.6,-39.6],[23.6,-62.3,-244.9,-59.5,-240.2,-52.7,-244.1,-51,-241.3,-45.5,-244.5,-49.6,-252.3],[10.7,-196.4,-285.8,-200.5,-291.8,-207.1,-287.3,-207.7,-288.3,-215.6,-282.9,-210.9,-275.9],[9.7,-175.4,359.1,-166.5,361.6,-163.3,350.2,-172.1,347.7,-172.5,349.5,-180.3,347.4,-182.5,355.4,-175,357.5],[11.1,-238.6,-22.1,-234.8,-14.2,-229.4,-16.7,-233.1,-24.6],[8.4,-308.9,206.2,-298.7,202.3,-301.5,194.8,-307.6,197.1,-308,196.1,-310,196.8,-309.6,197.9,-311.8,198.7],[12.7,48.6,255.8,50.6,252.5,43.2,247.6,52.6,230,45.2,195.6,49.2,190.1,57.5,184.5,61.2,183.2,92.5,198.5,96.6,239.6,85.1,239.4,84.2,242.6,96.7,242.4,104.1,331.2,107.4,330.6,101.7,263.1,104.1,262.7,103.8,259.6,101.5,259.9,99.9,243.4,102.2,243.2,102,240.8,99.9,240.8,97.4,205.8,88.7,187.8,90.3,186.1,88.3,184.5,86.8,186,73.3,179.7,73.4,179.2,66.5,178.8,66.4,179.4,45.9,189,44.3,187.8,42.5,189.8,44.2,191.2,38.2,202.5,38.7,215.4,48.2,230.5,30.9,263.5,34.1,265.1,41.6,251.5],[6.8,96.8,-352.7,87.9,-352,88.9,-337.8,97.8,-338.4],[15.5,-107,306.9,-119.8,303.5,-120.3,304.7,-121,304.5,-121.7,306,-122.8,305.5,-125.1,312.4,-114.6,316.1,-114.5,315.7,-110.9,317.1],[2.9,51.5,59.4,54.9,65.6,58.1,63.9,54.7,57.7],[8.5,-172.3,324.2,-173.6,329,-170.1,329.9,-169.5,327.8,-167,328.5,-167.4,330.1,-162.3,331.4,-161.8,329.2,-162.4,329,-161.8,326.9],[9.9,53.7,-241.9,48.6,-241.6,48.9,-233.9,51.8,-234.1,52.4,-235.3,53.3,-235.3,53.1,-236.9,54,-237],[8.9,-196.1,-80.7,-187.7,-85.2,-190.2,-89.9,-198.6,-85.5],[9.9,-307,-31.3,-308.6,-36.5,-322.9,-32.1,-321.3,-26.9],[7.5,112.8,-339.1,96.8,-337.2,98,-327,114,-328.9],[8.5,-105.1,-104.4,-108.2,-101.7,-109.8,-103.6,-111.4,-102.3,-110.3,-100.9,-110.9,-100.3,-112,-101.6,-113.9,-99.9,-103.5,-87.8,-102.9,-88.4,-100.3,-85.4,-96.1,-89.1,-95.6,-88.5,-93.1,-90.6],[12.9,-252.4,211.1,-257.6,197.8,-263.9,200.3,-262.1,204.8,-265.9,206.3,-267.5,202.2,-272,203.9,-270.5,207.8,-273.5,209,-273.8,208.1,-274.8,208.5,-276,205.5,-281.8,207.8,-281.4,209,-282,209.2,-277.6,220.8],[10.1,-277,99.8,-279.5,90.7,-285.7,92.4,-285.3,93.8,-291.2,95.5,-289.1,103.1],[11.1,-141.8,298.8,-150.7,296.1,-152,300,-150,300.6,-150.4,302,-143.4,304.1],[9.4,-56.9,-32.3,-60.2,-28.7,-53.4,-22.4,-50.1,-26],[2.7,62.4,60.2,69.2,56,67.6,53.4,60.8,57.6],[4.4,-359.7,8,-356,7,-357.3,2.4,-361,3.5],[9.8,-114.1,-35.8,-109.1,-30.4,-105.7,-33.5,-105.1,-32.8,-101.3,-36.3,-107,-42.4],[7.7,55.7,-241.5,63.8,-241.9,63.7,-243.2,65.5,-243.3,65.1,-249.8,63.4,-249.7,63.3,-250.6,55.3,-250.2],[10.4,344.9,-36,347.6,-26.2,354.7,-28.2,352,-37.9],[19.3,24.2,-88.1,31.7,-74,43,-80.9,40,-81.7,35.5,-90.1,34.6,-89.9,33.4,-91.8,27.4,-89,27.1,-89.4],[8.6,-218,-115.7,-226.7,-111.5,-222.9,-103.8,-218.8,-105.8,-219.6,-107.5,-215,-109.7],[6.3,-309.2,-58.8,-297,-60.9,-297.9,-67,-296.9,-67.2,-298.1,-74,-304.1,-73.1,-303.6,-70.8,-309,-69.6,-308.7,-68.5,-309.9,-68.1,-309,-65,-310.2,-64.8],[10.1,-268.3,97.5,-262.7,95.8,-268.2,78.5,-273.7,80.1],[9.6,-51.9,-90.2,-59,-84.4,-56.7,-81.6,-49.6,-87.4],[9.5,-317.1,216,-313.6,213.7,-315,211.6,-313.9,210.9,-315.3,208.8,-314.4,208.2,-316.4,205.1,-315.9,204.8,-317.9,201.6,-317,201,-320.1,196.3,-324.1,198.9,-323.3,200,-325.4,201.4,-324.1,203.3,-325,204,-326.7,201.5,-339.6,210,-333.9,218.6,-321.5,210.5,-322.8,208.6,-318.9,206,-318.1,207.2,-321.4,209.4],[9,-206.6,-3.3,-212.6,-1.2,-211.1,2.9,-205,1.1],[20.9,211.1,-143.8,209.8,-143,209.4,-143.8,208.3,-143.2,208.7,-142.6,207.3,-141.7,205.3,-145.2,203.3,-144,200.8,-148.3,201.5,-148.7,199.4,-152.3,197.5,-151.2,197.1,-151.9,192.9,-149.5,192.7,-149.9,187.8,-147,188.4,-146,187.3,-145.4,194.7,-132.6,194.2,-132.3,195.2,-130.6,195.7,-130.9,197.4,-127.8,198,-128.1,200.6,-123.6,208.9,-128.3,208.6,-128.7,215.6,-132.9,215,-134,216.3,-134.8],[12.2,-41.3,54.5,-37.5,50.9,-41.1,47.1,-42,47.9,-46.8,42.8,-49.7,45.5],[10.9,-283.7,-11.2,-287.7,-22.1,-297.5,-18.4,-293.5,-7.6],[15.4,-154.2,-34.5,-158.7,-39.7,-157.8,-41.2,-170.2,-58,-180.8,-49.8,-172.6,-20.5,-170.3,-20.1],[18.6,-160.9,288.7,-148.8,290.2,-141.4,289.5,-143,272.3,-152.9,273.3,-153.1,271.5,-154,271.6,-155.8,253.2,-179.1,255.3,-178.8,257.8,-180.6,257.9,-180.1,262.6,-177,262.3,-176.7,265.7,-174.1,265.5,-173.8,268.2,-171,268,-170.7,271.2,-167.8,270.9,-167.5,274,-164.3,273.7,-163.7,279.3,-161.8,279.1],[15.3,31,-111.2,33.2,-112.2,32.7,-113.2,35.9,-114.6,31.5,-124.7,26.1,-122.4],[7.2,-267.7,273,-272.9,274.8,-271.3,279.1,-266.2,277.2],[10.2,-179.1,-71.1,-190,-65,-186.5,-58.6,-175.5,-64.7],[9.5,-2,-271.6,-12.1,-268.9,-10.4,-262.2,-.2,-264.9],[9.3,-110.5,-45.7,-113.3,-48.7,-120.6,-42,-117.8,-39],[9.7,257.1,-237.9,259.7,-239,259.9,-238.5,262.8,-239.7,260.7,-245.6,258.1,-244.3,257.9,-244.8,254.8,-243.6],[14.1,-279.5,178,-273.7,193.2,-260.4,188.2,-266.3,173],[14.7,45.2,-242.6,53.6,-243.2,53.4,-249.4,53,-249.4,52.6,-254.7,53,-254.8,52.8,-257.2,52.3,-257.1,52,-261.3,43.7,-260.7,44.3,-252.7,45,-252.8,45.2,-249.9,44.7,-249.9],[10,249.6,-285,247.7,-284.2,246.5,-283,246.8,-282.3,245.3,-281.7,247.3,-277.1,252,-279.1],[8.4,-213.5,35.7,-212.4,38.4,-202.8,34.4],[7.7,-29.6,-91.4,-22.2,-83.4,-19,-86.4,-25.9,-93.8,-26.6,-93.2,-27.1,-93.7],[9.4,-182.6,120,-177.9,118.7,-181.2,111.3,-184.4,112.3],[10.1,47.7,-134.3,48.6,-129,57.2,-130.5,56.3,-135.8],[8,-190.8,19.1,-202.6,25.1,-199.4,31.5,-195.5,29.5,-196.2,28.3,-188.2,24.2],[11.7,-201.2,-245.1,-203.4,-248.5,-207.9,-245.7,-207.4,-244.9,-210.3,-243.1,-208.5,-240.4],[15.3,73.1,-317.6,87.6,-319.7,82.9,-351.5,82.3,-351.5,82.1,-353,76.3,-352.1,76.5,-351.2,68.3,-350],[10,-179.8,-15.5,-180.9,-20.7,-185.8,-19.7,-185.9,-20.1,-188.6,-19.6,-188.5,-19.1,-190.9,-18.6,-189.8,-13.5],[10.1,105.5,-346.7,106.2,-340.1,113.9,-341,113.2,-347.6],[8.3,-253.4,-74.6,-259.3,-72.7,-257.8,-68.3,-251.9,-70.2],[9.1,191,-200.7,183.1,-192.8,185,-190.9,192.6,-199],[29,-131.1,-266.7,-131.6,-266.3,-132,-266.8,-133.2,-265.9,-132.9,-265.5,-139.3,-260.9,-130.6,-248.2,-130.3,-248.4,-119,-245.9,-118.4,-245.2,-117.1,-246.2,-117.6,-246.9],[8.8,-42.8,-18.4,-47.1,-13.5,-39.1,-6.6,-34.8,-11.5],[16.4,-374.7,170.5,-373.9,176.1,-375,176.3,-373.8,182.5,-352.2,180,-352.1,182.2,-338.9,180.4,-338.3,182.7,-324,181.2,-324.7,176.2,-325.6,176.3,-326.7,167.8,-330.1,168,-330.2,166.8,-332.3,167.2,-332.7,163.5,-335.7,163.7,-334.8,167.4,-350.3,169.2,-350.4,167,-361.5,168.1,-361.4,169.2],[31.2,14.7,-173,46.7,-179.6,44.1,-193.3,34.2,-192.1,33.4,-195.9,29.9,-195.6,30.3,-191.3,26.5,-190.5,25.6,-197.6,27.4,-199.5,26.4,-202.1,28.2,-202.7,25.9,-209,20.7,-207.5,19.7,-212.1,13.7,-211.4,13.6,-207.4,8.8,-206.7],[10.2,282.3,-216.6,285.4,-217.8,284.5,-220,286.9,-221,282.1,-232.8,276.6,-230.6],[11.8,-243.1,226.2,-230.4,221.2,-233.6,213.2,-246.3,218.3],[8,-218.9,223.9,-207.7,219.7,-212.4,207.8,-215.2,208.9,-215.7,207.7,-225.2,211.4,-223.5,215.8,-220.5,214.6,-219,218.6,-220.7,219.2],[12.4,25.4,-380.9,25.4,-385.1,24.4,-385.1,24.4,-386.2,20.7,-386.3,20.7,-387.4,9.2,-387.4,9.2,-380.5,12.2,-380.5,12.2,-382,16.4,-382,16.4,-381],[9.9,241.4,-260.7,239.3,-266.2,232.5,-263.7,232.9,-262.7,231.4,-262.1,231.6,-261.6,230.7,-261.2,232.2,-257.2],[13.6,-117.6,97.3,-115.5,103.6,-109.7,102],[38.1,-55,-279.8,-64.7,-297.1,-67.4,-295.5,-70,-300.3,-88.4,-290.4,-79.2,-273.5,-71.6,-271.3,-71.3,-272.1,-69.7,-271.7],[11.2,-126.5,107,-122.3,105.8,-127.2,89.6,-131.4,90.9],[12.7,46.9,-132.5,43.1,-131.8,45.3,-120.1,49.2,-120.8],[11.7,-84.6,84.3,-91,81.7,-100,89.3,-98.6,91,-96.4,89.2,-93.9,92.2],[10,-171.7,231,-177,232.1,-176,237.2,-170.6,236.1],[13.3,-50.4,-113,-46.7,-106.2,-41.8,-111.4,-44.4,-115.9],[8.2,56.7,-106,44.8,-97.7,50.6,-90,53,-91.3,59,-103.6],[9.7,-79.9,-109.7,-85.4,-105.8,-82.6,-101.8,-77,-105.8],[9.2,275.7,-245.3,273.7,-250,270.6,-248.7,270.1,-249.8,262.1,-246.5,263.2,-243.9,262.4,-243.6,263.8,-240.3],[9.7,-203.3,60.8,-198.5,58.6,-203.9,46.6,-205.1,47.1,-205.5,46.2,-209.2,47.9],[6.3,-207.6,-83.7,-212,-81.7,-208.1,-73.2,-203.8,-75.2],[13.5,-376.7,-86,-380.5,-84.3,-376.9,-76.3,-373.1,-78.1],[9.6,-161,83.1,-157.4,87.4,-154.9,85.2,-155.2,84.1,-156.8,82.3,-155.3,81,-152.4,84.4,-148,80.7,-152.2,75.7],[18.6,-49.4,46.3,-55.2,51.9,-50.7,56.6,-44.6,58.3,-42,55.6,-42.8,54.7,-42.1,54],[12.8,-156.6,183,-155,187.1,-149.2,184.9,-149.6,183.7,-148.2,183.2,-147.8,184.2,-144.1,182.8,-145.6,178.8],[12,-280.7,-62.1,-282,-67.3,-282.9,-67.3,-283,-68.1,-284.1,-68,-284.4,-69.9,-285.4,-70.6,-295.8,-67.9,-293.7,-58.7],[5.4,-128.6,219.7,-133.4,220.7,-132.4,225.4,-127.6,224.4],[2.2,-375.7,-18.2,-420.8,-10.3,-420.2,-7.2,-375.1,-15.1],[37.4,-34.7,-316.7,-19.3,-320.8,-10.7,-338.4,-12.9,-344.7,-26.4,-353.5,-45,-348.8,-53.7,-333.9,-52.2,-327.4],[7,-60.5,-75.9,-69.4,-67.3,-68.1,-66,-67,-67,-65.1,-64.9,-57.2,-72.6],[4,-24.9,4,-26.7,2.4,-27.2,2.9,-28,2.3,-32.7,7.9,-30.1,10.2],[9.8,234.1,-208.7,228.4,-206.2,232.4,-197.1,238.1,-199.6],[3.6,-94.5,184.7,-91.2,182.8,-94.8,176.6,-98.1,178.5],[-9999,93.1,-174.1,105.2,-178.8,100.9,-189.5,98.3,-188.5,98.6,-187.6,89.3,-183.9],[13.1,-190.1,-133.1,-198.7,-128,-195.6,-122.8,-187,-127.9],[8.4,312.1,-220.8,313.2,-216.3,320.6,-221.4,321.5,-220.5,330.6,-226.5,327.6,-231.4],[9.6,-282.5,-82.4,-287.6,-87.7,-292.4,-83,-287.3,-77.8],[8.1,-134.1,-182.1,-140.7,-176.9,-137.8,-173.2,-131.1,-178.3],[11.4,-107.2,202.4,-104.1,210,-100.2,208.4,-100.5,207.5,-99,206.9,-99.8,205,-98.5,204.4,-100.4,199.6],[12,-164,227.7,-162,236.2,-158.4,235.3,-160.4,226.9],[13.8,-417.3,-48,-415.9,-39.8,-395.7,-43,-395.7,-43.3,-387.7,-44.7,-387.6,-44.4,-384.3,-44.9,-384.3,-45.3,-375.2,-46.9,-375.2,-46.5,-371.9,-47.1,-371.9,-47.5,-367.4,-48.3,-368.9,-56.6],[12.5,-332.6,-19.9,-342.5,-17.8,-341.9,-14.8,-338.4,-15.5,-338.1,-14,-331.6,-15.4],[8.6,-173.9,329.5,-174.9,333.9,-164.1,336.5,-163,332.1],[15,281.4,-90,282.8,-84.9,312.7,-93,311.3,-98.1],[11,306.5,-201.9,311.6,-205.3,306.4,-213,301.3,-209.7],[14.4,-137.8,142.7,-133.3,153.9,-120.4,148.7,-128.5,138.9],[13.6,38.6,-223.5,31.7,-222,33.8,-212.6,40.8,-214.2],[33.4,93.4,-288.7,109.8,-291.1,109.2,-296.3,107.5,-296.2,107.2,-301.2,92.4,-299.6],[11.8,101.1,-167,96.7,-165.3,97.1,-164.2,95.4,-163.6,94.5,-166.4,90.3,-164.9,93.6,-155.1,92.2,-154.7,93.5,-150.6,96.6,-151.8,103.2,-161.1],[14,-153,300.3,-163.5,298,-164.8,304,-154.3,306.3],[12.8,-202.4,-96.3,-195.6,-100.1,-197.1,-102.7,-196.5,-103,-199.6,-108.5,-206.9,-104.4],[21.1,137.8,-325.2,145.3,-326.9,141.9,-342.1,134.4,-340.5],[9.1,260.6,-255.7,262.9,-249.6,269.1,-252,269.6,-250.5,272.4,-251.6,269.5,-259.1],[8.9,-206.4,-61.2,-208.4,-65.2,-213.5,-62.8,-215,-65.7,-220.4,-63.1,-217,-56.1],[8.5,-185.1,-31.3,-186.3,-36.8,-194.4,-32.9,-193.2,-28.9],[3.3,50.4,-320.5,50.2,-318.3,55.8,-316.4,55.3,-321.3],[10.1,-234.7,38.1,-235.7,34.8,-240.3,36.2,-241.5,31.9,-250.6,34.5,-248.4,42],[6,172.5,-60.7,171.5,-64.9,161.7,-62.6,162.7,-58.5],[10.6,208.5,-282.1,214.9,-284.6,212.9,-289.9,206.5,-287.4],[10.2,-356,-131.5,-353.1,-134,-356.6,-138.2,-355.3,-139.3,-356,-140.1,-360.3,-136.5],[7.4,-162.4,58.6,-158.1,54.6,-169.1,42.8,-172.4,45.9,-171.8,46.4,-172.4,47,-171,48.4,-173.2,50.4,-168.1,55.9,-166.4,54.4],[9.7,-126.8,-160.6,-132.2,-156.7,-127.1,-149.7,-126.2,-150.3,-125.3,-149,-120.7,-152.2],[16.7,-80.7,143.1,-74.4,138.3,-83.1,127.1,-76.6,122.1,-77.5,121.1,-63,110,-67.6,103.4,-72.9,107.6,-73.8,106.5,-81.4,112.6,-82.9,110.5,-84.7,111.9,-83.4,113.7,-85.5,115.2,-87.2,112.8,-88.8,114.1,-92.1,109.8,-100.6,107.8,-104,108.5,-106,109.9],[17.4,-89.9,97.6,-96.5,104.2,-85.3,107.5,-82.8,106.5],[11.9,-123.9,75.5,-116.4,81.4,-113.3,76.9,-115.4,75.2,-114.1,73.5,-112.8,74.1,-110.2,70.9,-116.3,66.7],[10,-109.4,284.5,-115.5,282.8,-116.9,287.8,-110.7,289.5],[9.6,-309.1,109.1,-307.5,115.1,-303.1,114,-303.4,112.9,-298.3,111.5,-298.5,111,-292.8,109.5,-293.9,105.1],[4.2,77.4,-195.4,73.9,-194.4,74.3,-193,73.3,-192.6,75,-186.9,79.5,-188.2],[21.2,243.3,-298.8,238.2,-304,234.4,-300.3,231.6,-303.2,227.8,-299.5,226.5,-300.9,217.9,-292.5,227.1,-283.1],[24.4,-173.5,-265,-162.9,-247.7,-157.9,-250.9,-135.2,-272,-143.7,-284],[15.6,-90.2,-206.6,-93.9,-214.7,-99.6,-212,-95.1,-203.3],[9.5,-243.9,-27.4,-234.8,-31.2,-238.2,-39.2,-247.3,-35.4],[6.6,-223.3,261,-221.6,255.7,-226.7,255.9,-227.9,259.4],[11.7,266,-269.7,268.4,-264.1,274.6,-268.6,274.4,-269.3,276.4,-270.1,275,-273.4],[12.4,-122.3,-164.9,-126.3,-170.8,-134.6,-165,-135.5,-166.2,-137.8,-164.7,-132.9,-157.6],[15.4,199.6,-186.2,196.4,-182.8,194.4,-184.6,189.4,-179.3,191.7,-177.2,188.3,-173.5,194.3,-168,191.3,-164.7,197.2,-159.2,200.2,-162.5,203.9,-159.1,205.7,-161.1,206.6,-160.3,210.9,-165,207.9,-167.7,210,-170,210,-173.2,211.1,-174.4,207.6,-177.6,208.2,-178.3],[12.3,-136,126.6,-143.5,129.4,-139.6,140,-130.6,136.7,-132.2,132.5,-132.9,132.7,-134,130,-134.7,130.3],[9.7,-179.9,90,-178.1,92,-177.6,91.5,-175.5,93.7,-176.4,94.5,-173.7,97.4,-169.7,93.6,-169,94.4,-165,90.6,-172.4,82.9],[12.4,56.4,-340.8,48.5,-340.6,48.7,-332.8,56.6,-333],[7.5,-36.5,-97.4,-47.2,-87.4,-43.4,-83.3,-41.8,-84.7,-36.9,-79.6,-33.5,-82.8,-37.4,-87,-35.4,-88.9,-36.4,-89.9,-32.7,-93.4],[13.1,-117.6,-246.9,-117.1,-246.2,-118.4,-245.2,-119,-245.9,-125.2,-241.5,-121.8,-236.5,-112.8,-243.1,-116.2,-248],[9.8,-78,-51.3,-80.7,-54.1,-88.8,-46.1,-85.8,-43.1],[16.7,10.8,309.6,10.4,313.6,19.2,312.6,20.8,309.3],[12.2,-110.9,-131.1,-102.4,-139.7,-108.3,-146.2,-116,-138.3],[8.9,-308.7,-.6,-301.4,-2.7,-301.7,-3.6,-298.9,-4.4,-301.6,-13.7,-300.9,-13.9,-301.3,-15.3,-302.1,-15.1,-304,-21.5,-313.9,-18.7],[8.3,-246.1,175.8,-248.3,169.8,-252.5,171.4,-253.6,168.3,-259.7,170.6,-260,169.8,-264.7,171.5,-260.7,182.2,-255.9,180.5,-256.2,179.5],[12.3,44.1,-80.5,33.6,-74.8,34.4,-72.9,41.8,-71,44.6,-72.4,46.9,-75.1],[8.7,-31.5,-234.3,-39.4,-230.2,-37.6,-226.9,-29.7,-231],[12,-111.3,-63.8,-118.3,-57,-109.1,-47.6,-102.1,-54.4],[3.8,-258.2,-85.3,-264.5,-81.9,-262.5,-78.3,-256.2,-81.8],[11,320.9,-220.4,313.6,-215.3,317.9,-209.3,325.1,-214.5],[12.2,215.9,-213.1,228.5,-221.1,224.6,-229.3,211.2,-223.1],[10.9,-127.8,240.6,-129.6,232.5,-142.7,235.3,-140.9,243.5],[9.5,-191,-15.4,-198.6,-13.5,-196.6,-5.4,-189,-7.2],[6.3,65.4,66.4,71.1,76.4,84,69.1,78.4,59],[12.4,-181.6,-121.1,-188.4,-117.2,-183.1,-108,-176.4,-111.8],[10.4,-160.4,327.1,-161.4,331.3,-154.4,333.1,-153.3,328.9],[10,221.7,-193.7,219.5,-197.6,212.5,-193.6,214.8,-189.7],[10.2,-219.6,-.2,-231,5.4,-223.2,20.1,-220.3,18.5,-217.3,26.3,-212.6,23.8,-211.4,24.2,-209.2,23.1,-209.7,22.3,-208.2,21.5],[11.9,-346.9,93.6,-352.2,73.3,-358.7,75.1,-356.2,84.6,-357.5,84.9,-355.6,92.2,-354.3,91.8,-353.4,95.3],[8.5,43.9,-82.6,47.7,-86,46.3,-87.6,48.8,-89.8,44.3,-94.9,44.7,-95.3,43.4,-96.8,39.4,-93.2,39.8,-92.8,37,-90.3],[8.4,-90.1,-37.7,-104.9,-23,-99.9,-18,-98.7,-19.1,-97.2,-17.6,-83.5,-31.2],[9.2,-220,225.6,-216.5,234.5,-207.9,231.2,-209.9,226.1,-208.3,225.5,-209.9,221.6],[7.6,-231.3,-59.4,-237.7,-56.4,-235.8,-52.2,-229.4,-55.1],[5.1,-217.6,314.7,-218.7,318.7,-213.8,320.1,-212.7,316.1],[14.2,-363.1,-114.2,-371.9,-110.1,-371.2,-108.2,-376.8,-105.3,-376.5,-104.3,-411,-89.1,-410.1,-87.5,-411.9,-86.8,-408.6,-78.5,-369.9,-95.8,-370.6,-97.2,-357.7,-102.7],[13.4,-161.3,249.2,-162.9,236.6,-176.4,238.3,-174.8,250.9],[16.8,-312.3,-182.4,-323.4,-190.2,-331.7,-178.2,-329.8,-176.7,-330.7,-175.2,-326.7,-172.4,-327.4,-171.3,-318.9,-163.5],[12.1,-343.9,-145.1,-338.4,-139.6,-336.3,-141.7,-335.6,-141,-333.1,-143.5,-333.4,-143.8,-331.6,-145.6,-331.1,-145.1,-328.6,-147.5,-329.1,-148.1,-327.5,-149.7,-326.9,-149.1,-324.4,-151.5,-330.8,-158],[12.1,-233.2,50.3,-229.1,49.2,-229.4,48,-228.4,47.8,-229.9,41.9,-231.2,42.2,-231.4,41.5,-235.2,42.5],[9.7,-64.3,-65,-66.3,-62.9,-69.7,-66.1,-72.2,-63.5,-58.4,-50.4,-53.9,-55.1],[11.1,-254.2,-21.7,-247.8,-24,-249.4,-28.9,-249.9,-28.7,-252.5,-34.6,-254.7,-33.6,-254.9,-34.1,-258.9,-32.3],[2.7,-150.5,-213.7,-153.1,-211.5,-149.8,-206.9],[9.1,-76.1,-129,-78.9,-132.1,-85.9,-125.8,-85.6,-125.4,-86.1,-125,-83.7,-122.3],[9.5,-186.4,-37.1,-188.4,-41.4,-196.3,-37.7,-194.3,-33.3],[10,-26.5,-240.3,-25.1,-237.4,-17,-241.1,-18.4,-244.1],[14.7,-158.3,-131.8,-155.4,-127.9,-154.5,-128.6,-154.2,-128.2,-151.6,-130.1,-151.1,-129.4,-146.5,-132.8,-145.6,-131.6,-142.5,-133.9,-147.1,-140],[7.7,-155,76.8,-155.9,75.7,-154.1,74.2,-157.3,70.5,-160.7,73.3,-159.9,74.3,-166.8,80,-163.5,83.9],[18.7,258.2,-167.4,264.1,-170.2,263.8,-170.8,265.9,-171.8,259,-186,256.1,-184.6,255.3,-186.3,250.3,-183.9],[12.4,-158.2,-234.2,-164.4,-229.9,-162.6,-227.2,-156.3,-231.6],[8.8,-289.2,-32.2,-290.6,-37.6,-301.5,-35,-300.2,-29.6],[8.6,-104.8,-189,-113.3,-183.9,-107.5,-174.1,-105.1,-175.5,-104.6,-174.6,-100.2,-177.2,-99.8,-176.6,-98,-177.6],[19.1,-69.8,66.5,-78.1,66.9,-77.7,75.1,-69.3,74.6],[9.7,-128.2,-195.9,-127.5,-194.9,-132.9,-191.1,-129.2,-185.7,-127.1,-187.1,-124.4,-183.2,-115.6,-189.4,-116.1,-190.2,-113.4,-192.2,-119.6,-201.1,-122.3,-199.2,-122.7,-199.7],[8.1,-294.2,264.9,-296.5,258.3,-304,261.2,-303,263.8,-300.6,263.5,-299.9,265.3,-297.1,266.2],[7.8,-47,-39.2,-40.8,-33.8,-34.8,-41,-40.8,-46.3],[12.3,-144,-251.7,-151.9,-247,-151.3,-246,-158.2,-241.9,-141.5,-214.1,-136.1,-217.3,-140.6,-224.9,-130,-231.1,-133.4,-236.8,-134.7,-236],[20.5,154.7,-14.9,157.4,-13.8,167.2,-38.3,164.7,-39.4],[9.6,-47.2,-11.2,-49.1,-8.9,-47.1,-7.3,-47.1,-4.9,-43.1,-1.6,-40.1,-5.4],[7.9,-145.8,112.8,-152.3,104.2,-154.5,105.2,-155.5,104.2,-164.8,111,-161.2,115.7],[8.3,-323.1,86.7,-325.2,78.8,-327.9,79.5,-328.3,78.5,-334.1,80,-333.8,80.9,-337.4,81.9,-335.3,89.9],[3.1,-247.2,-287.4,-248.4,-289.2,-252.8,-286.6,-253.8,-288.3,-257.9,-285.8,-255.8,-282.1],[9.1,-267.9,-88,-264.6,-82.3,-258,-86.1,-261.2,-91.7],[9,-314.9,234,-312.4,232.4,-311.5,233.9,-307.2,231.2,-306.7,228.3,-311.2,221,-319.7,226.1],[10.1,-260,-32.6,-261,-31.5,-259.3,-18.8,-254.5,-21],[7.1,232.2,-219.5,234.7,-213.8,236.4,-214.5,236.8,-213.7,240.7,-215.5,238,-222.1],[25.1,32.1,-293,23,-290.3,23.7,-287.4,24.5,-287.5,26.3,-279.9,32.6,-281.2,32.5,-281.9,33.5,-282],[9.4,-22.4,-58,-31.8,-66.6,-37.7,-60.2,-37.3,-59.8,-37.8,-59.2,-35.2,-56.8,-34.6,-57.5,-28.1,-51.7],[13.3,146.6,-271.3,139,-269.5,141.7,-258.3,149.3,-260.1],[31.1,69.3,345,61.5,343.3,55.9,343.3,44.9,348.3,41.5,355.7,50.7,360.2,51.9,358.1,53.2,359,51.9,361.1,58.5,372,58.6,373.9,55.4,374.3,55.6,377.8,54.3,378.1,54.8,384.7,58.9,384.7,60.8,404.1,60.2,404.2,59.8,401.2,42.5,402.5,44,419.7,51.8,419.3,51.9,420.5,48.8,420.9,50.6,440.6,56.5,441.5,57.4,445.8,76.3,444.7,77.4,439.7,78.3,439.6,78.3,438.5,82.8,438.1,80.8,418.1,77.5,418.3,77.4,417.7,76.7,417.7,76.6,413,82.2,413.1,82.2,414.8,93.5,413.7,93.9,416.4,116.3,409.6,112.9,407.9,113.6,395.1,112.3,385.5,110,376.5,79.6,379,78.9,388.1,66.6,389,66.8,389.9,65.4,389.9,65.2,383.8,75.4,379.3,74.9,377.6,77.5,375.9,80.7,369.8,81.3,362,79.5,355.1,77.5,352.2,79.1,350.4,75.9,347.4,74,348.6],[15.9,-9.3,-17.2,-15.6,-11.3,-10.6,-6.7,-5.6,-11.3,-6.4,-14.1],[12.4,166.6,-270.5,164.6,-275.6,161.3,-274.3,159.8,-278.1,152.7,-275.3,154.4,-271.1,153.5,-270.8,155.4,-266.1],[11.1,-137.1,5.6,-144,-2.1,-150.1,3.3,-152.5,1.5,-160.1,10.7,-159.6,11.2,-161.2,12.7,-154,20.5],[8.4,-136.4,210.8,-129.2,209,-130.9,201.9,-138.2,203.7],[14.9,-264.2,-221.4,-270.3,-230.6,-273.1,-228.8,-273.6,-229.5,-281.9,-224,-280.4,-221.6,-281.4,-221,-278.9,-217.2,-278,-217.8,-275.4,-213.9],[7.2,-70.9,-113.7,-77.3,-121,-80.3,-118.5,-73.8,-111.1],[9.6,-275.1,267.5,-273.8,273.4,-272.5,272.3,-270.5,271.8,-270.5,271.5,-269.6,271.4,-269.7,270.7,-266.3,270.2,-257.9,276.4,-255.8,273.1,-256.9,271.9,-255.6,271.5,-258,258.1,-262.8,260.7,-262.7,261.5,-266.7,262.3,-266.4,265.1,-270.7,265.8,-270.8,266.6],[11,-175,181.2,-170.2,178.6,-174.5,171.6,-178.7,173.7],[10.5,-255.8,-80.4,-261.3,-78.7,-259.6,-73.4,-254.2,-75.1],[9.2,-217.6,187.1,-206.8,183.1,-209.1,176.9,-208.4,176.7,-209,175.1,-216.1,177.7,-215.6,179.1,-220,180.7],[9.6,-291.8,-48.9,-290,-42.2,-284.8,-43.7,-286.6,-50.4],[10,-222.1,328.5,-223.6,328.2,-225.1,334.8,-217.4,336.5,-213.9,321,-220.1,319.6],[14.5,-76.3,-165.1,-69.2,-171.7,-72,-174.8,-71.3,-175.4,-74.7,-179,-82.5,-171.8],[30,10.9,-112.5,21.3,-117.4,24.6,-125.3,28.3,-125.7,27.7,-133.7,24.2,-132.9,24.7,-129.9,22.6,-129.8,22.2,-132.4,17.4,-129.9,16.3,-131.9,13.2,-130.2,13.9,-129,11.4,-127.7,12.2,-126.3,8,-124,8.6,-122.9,6.9,-121.9,6.5,-122.6,5.7,-122.1],[8.9,-127.3,74.2,-132.1,79.9,-122.3,88,-117.6,82.4],[9.9,-179.2,275,-190.7,284.3,-189,286.4,-192.5,289.2,-190,292.3,-188.9,291.4,-187.4,293.2,-184.8,291.1,-184,292.1,-176.8,286.3,-176,287.2,-173.9,285.5,-175,284.1,-172.2,281.8,-177.2,275.5,-178.2,276.2],[8.7,-206.7,97.9,-197.6,95.7,-198.2,93,-200.7,90.3,-200.9,88.8,-201.8,88.9,-202.3,87.3,-203,87.3,-203.3,86.4,-204.4,86.7,-205.1,85.8,-207.1,86.4,-206.7,87.7,-209.6,88.1],[9.5,-248.9,-78.8,-239.4,-83.8,-241.7,-88.1,-251.2,-83.1],[36.5,-147.8,-220.6,-155.9,-231.6,-161.7,-227.6,-161.4,-227.2,-171.3,-220.1,-181.7,-234.6,-179.3,-236.3,-182.1,-240.3,-184.5,-238.6,-186.8,-241.8,-186.3,-242.3,-187.6,-243.1,-192.5,-250,-203.7,-242,-182.5,-212.4,-183.8,-211.4,-184.1,-211.8,-189.7,-207.3,-181.8,-196.4,-169.2,-205.3,-169.8,-206.1,-168.8,-206.9,-168.1,-206,-161.4,-210.9,-162,-211.8,-160.9,-212.6,-160.2,-211.6],[8.9,-208.7,197,-206.8,201.2,-196.7,196.8,-198.6,192.6],[6.2,-24.6,-258.6,-34,-254,-31.7,-249.2,-22.3,-253.8],[13.7,-415.7,-15.2,-359.1,-25.2,-360.6,-34,-363.3,-33.5,-363.4,-34.5,-367,-33.9,-366.9,-32.9,-374.5,-31.6,-374.7,-32.8,-378.1,-32.2,-377.9,-31.1,-381.9,-30.4,-382.1,-31.4,-385.4,-30.8,-385.2,-29.8,-393.1,-28.4,-393.3,-29.3,-396.6,-28.7,-396.4,-27.8,-400.4,-27.1,-400.5,-28,-404.1,-27.4,-404,-26.6,-411.3,-25.3,-411.5,-26.1,-414.9,-25.5,-414.7,-24.7,-417.3,-24.2],[5.9,-294.8,-68.7,-286.8,-70.8,-288.1,-73.8,-290.6,-76.6,-296.4,-74.9],[10.2,-206.5,-157.3,-216.2,-150.6,-213.3,-146.3,-211.4,-147.6,-210.9,-146.9,-207.4,-149.3,-207.6,-149.6,-206.9,-150.1,-208.6,-152.7,-205,-155.1],[10.5,45.8,-342,45.2,-350,35.8,-349.3,35.3,-348.8,35.9,-341.8,36.6,-341.2],[21.7,-172.1,126.1,-159.4,159.2,-149.7,154.9,-161.6,124.5],[10.7,13,-325.3,9.2,-339.2,-5.1,-335.4,-2.9,-326.9,-3.5,-326.8,-2,-321.2],[3.7,-228,112.8,-228.6,111.2,-257.8,122,-257.2,123.5],[14.1,-117.3,31.2,-129.2,44.7,-121.6,51.4,-109.6,37.9],[7.3,-243,-80.9,-249,-78.4,-247.9,-75.8,-248.7,-75.4,-245.9,-69,-239.1,-71.9],[8.5,-171.4,318.5,-172.8,323.6,-168.8,324.6,-168,321.5,-166,322,-166.8,324.9,-161.1,326.4,-159.8,321.6],[6.8,-241.4,-119.6,-243.7,-123.7,-249,-120.6,-246.8,-117.2,-245.4,-118,-245.1,-117.4],[25.6,2.3,-128.5,5.3,-123.1,7.5,-124.4,7.3,-124.8,10.6,-126.7,10.3,-127.2,13.7,-129.2,13,-130.3,15.9,-131.9,14.1,-135.2],[11.9,-196.7,-26.6,-193.7,-28,-195.1,-30.9,-194.6,-31.1,-196.8,-35.6,-197.4,-35.3,-198.7,-37.9,-201.6,-36.5],[8.4,-176.9,76.2,-184.2,82,-181.1,85.8,-173.8,79.9],[11.1,291.7,-199.7,296.3,-192.5,307.5,-199.7,302.9,-206.8],[9.3,19,20.8,18.5,20.6,16.6,24.4,17.4,24.8,16.8,26,20.4,27.7,24.9,18,25.9,18.5,27.5,14.9,21.4,12.1,19.8,15.6,21.1,16.2],[13.4,-225,210.5,-215.2,206.7,-219.5,195.8,-229.3,199.6],[15.9,-170.5,-71.5,-156.5,-80.4,-160.3,-88.1,-162.3,-87,-163.1,-88.7,-164.8,-87.6,-165.3,-88.3,-167.9,-86.8,-172.2,-93.8,-173.1,-93.2,-174.5,-95.5,-177.4,-93.8,-179.6,-97.3,-183.3,-95.2,-181.6,-92.5,-182.8,-91.8],[7.3,-123.6,189.8,-118.6,187.8,-121.9,179.7,-122.9,180.1,-123.2,179.4,-123.9,179.7,-126.3,173.8,-130.3,175.5,-127.6,182.1,-126.8,181.8],[10.2,-361.8,-125.7,-364.9,-129.4,-368.8,-126,-365.7,-122.4],[22,-203.6,-296.1,-213.8,-312.6,-228.4,-303.6,-226.1,-299.8,-223.9,-301.1,-222.7,-299.1,-223.7,-298.5,-222.5,-296.5,-223.3,-296,-217.8,-287.1],[11.8,138.7,-252.2,142.2,-241.2,143.6,-240.9,154.5,-244.3,154.7,-245,151.5,-255.3,148,-254.2,147.7,-255],[11.9,-257,-93.6,-251.2,-83.9,-243.6,-88.4,-249.3,-98.1],[11.5,-172.5,216.7,-170.1,225,-166.7,224,-169,215.7],[9.9,-70.1,8.3,-73.6,11.7,-66.7,18.8,-63.2,15.4],[8.4,-159.8,225.8,-158.1,234.3,-153.6,233.4,-153.7,232.9,-151,232.3,-152.7,224.3],[5.6,170,-361.6,167.8,-361.4,169.3,-355.8,173.3,-356.7,172.9,-359.4],[9.1,-223.2,-129.6,-225.6,-135,-231.6,-132.4,-229.2,-127],[15.3,42.2,145.5,60.4,154.7,63.9,147.6,45.8,138.5],[24,244.9,-10.3,240.9,-25.5,251.9,-28.3,255.9,-13,278.2,-18.8,270,-49.9,215.5,-35.7,223,-5],[8.3,46.6,-333.7,46.2,-341.3,35.1,-340.7,35.5,-333.2],[13.3,-103.7,81.6,-103.2,82.3,-104.7,83.4,-100.7,88.7,-93.5,83.3,-96.6,79.2,-97.5,79.8,-98.9,78],[9.8,260.4,-262.8,261.1,-261.2,259.4,-260.4,261,-256.9,269,-260.5,266.7,-265.6],[12.8,-124.8,275.2,-125.4,271.1,-133.4,272.3,-132.8,276.4],[17.1,-51.1,243.3,-56.3,252.4,-47.2,257.6,-46,258.6,-40.9,249.6],[13.4,-314.8,-80.5,-312.2,-73.3,-309.7,-73.9,-309.3,-72.6,-303.9,-74.4,-304.1,-75.3,-300.7,-76.4,-300.1,-74.8,-296.5,-76.1,-296.6,-77.2,-293.7,-78.3,-300.1,-86.5,-303.3,-85.8,-303.2,-85,-309.5,-83.5,-309.6,-84.1,-314.8,-82.6,-314.3,-80.5],[-9999,-298.5,235.1,-291.6,232.4,-293,228.6,-290.5,227.7,-294.9,216,-301.6,218.5,-300.4,221.7,-303.2,222.7],[10.4,-240.8,-133.6,-236,-123.7,-230.2,-126.4,-232.4,-131.6,-236.5,-135.6],[9.9,-152.2,271.4,-143,269.5,-144.1,264.1,-144.6,264.2,-145.3,261,-154,262.8],[10.7,-228.7,228.8,-236,231.9,-233.6,237.3,-226.4,234.2],[11.2,-4.5,-20.7,-7.8,-17.7,-3.8,-13.3,-.5,-16.3],[16.2,-244.6,259.7,-243.4,267.8,-230,265.7,-232.1,252,-239.5,253.1,-239.2,255.1,-244.2,255.9,-243.7,259.6],[11.5,-158.8,341.5,-172.5,337.5,-173.3,340.3,-178,338.9,-179.8,344.8,-169.5,347.9,-168.9,345.8,-160.8,348.3],[7.5,-2.2,-7.9,-4.8,-10.7,-9.5,-6.3,-6.8,-3.5],[13.6,-87.5,-154.4,-83.1,-157.6,-95.2,-174.5,-111.3,-162.9,-104.5,-153.5,-103.5,-154.2,-97.9,-146.4,-93.3,-149.7,-92.8,-149,-86.8,-153.4],[9.1,-23.2,-83,-27.2,-86.9,-28,-86.1,-28.5,-86.5,-32.4,-82.5,-27.9,-78.2],[10.4,192.2,-215.9,196.2,-207.2,199.1,-208.6,199.9,-206.9,204.2,-208.8,199.4,-219.2],[8.9,-32.7,67.1,-37.8,70.6,-32.1,78.4,-30.4,75.4,-30.7,74.5,-28.6,73],[16.2,-139.8,140.8,-143.8,130.2,-147.8,131.7,-147.4,132.6,-151.5,134.2,-147.8,143.9],[14.8,-82.3,76.2,-78.5,68.5,-96.6,55.1,-97.7,56.9,-101.6,53.8,-108.8,64.3,-96.8,72,-96.5,71.4,-93.7,72.9],[11.4,-367.2,-122.9,-375,-132.3,-379.2,-128.7],[10.6,-128.7,282.8,-135.6,283.2,-134.8,291.9,-132.9,291.9],[9.8,-274.3,-24.6,-268.1,-25.6,-268,-24.9,-264.8,-25.4,-264.9,-26.6,-263.8,-26.7,-266.5,-39.4,-270.9,-38.7,-270.8,-38.2,-276.3,-37.3],[8.9,-335.5,40.6,-331.6,39.7,-333.4,31.8,-337.2,32.7],[14.2,39.9,-131.7,31.7,-128.9,35.9,-116.7,44,-119.5],[16.8,-68.7,101.9,-59.4,98.4,-54.2,94.9,-62.6,80.5,-70,82.8,-65.3,91.8,-72.3,95.5],[9.5,-140.9,-193.9,-148.2,-186.5,-145.8,-183.2,-137.7,-189.1],[7.2,279.1,-266.5,272.1,-263.5,272.3,-263.1,269,-261.7,273.2,-252.2,283.4,-256.7],[25.7,125,-304.4,111.1,-302.6,113.3,-285.6,112.8,-285.6,113.3,-281.4,127.4,-283.3],[10.8,-143.5,304.3,-151.8,302.3,-153.1,307.4,-144.7,309.4],[10.2,26.3,-147.9,27.6,-144.2,28.5,-144.5,29.5,-141.5,38,-144.4,38.4,-143.3,41.3,-144.2,38.9,-151.2,36.4,-150.4,36.1,-151.2],[16.7,65.8,-133.8,78.9,-136,78.5,-138.4,82,-139,81.6,-141.7,78,-141.1,75.1,-158.1,62,-155.9],[11.4,-57.2,-78.6,-52.6,-74.4,-49.1,-78.2,-48.1,-77.3,-44.6,-81.1,-50.2,-86.2],[8.5,-184.3,67.7,-191.7,73.8,-188.1,78,-180.8,72],[6.1,-196.8,202.4,-197.5,200.8,-209.1,205.6,-208.6,206.8],[13.9,-130.5,321.9,-114.1,327.2,-112.8,323.3,-113.3,323.2,-111.5,317.5,-127.4,312.4],[11.3,-359.5,53.1,-365.2,54.7,-365.6,53.3,-370.5,54.7,-368.8,60.9,-370.4,61.3,-368.8,67.2,-368,67,-365.7,75.3,-363.3,74.6,-363.5,73.7,-358.6,72.3,-358.2,73.8,-354.9,73,-356,68.8,-354.9,68.5,-355.6,65.9,-355.1,65.7,-355.9,63,-356.8,63.2,-357.3,61.3,-359.1,61.8,-359.5,60.2,-357.7,59.7],[8.5,-51.6,-32.4,-46.7,-28.1,-42,-33.4,-46.8,-37.7],[15.3,285.4,-84.3,281.3,-83.2,286.7,-64,285.8,-63.7,286.6,-60.7,325.9,-71.6,320,-92.7,311.3,-90.3,316.3,-72.2,290.7,-65.1],[8.1,-195.4,39,-192.8,42.3,-193.5,42.8,-191.3,45.6,-186,41.4,-184.8,42.9,-180.1,39.3,-178,42,-174.3,39.1,-179,33.1,-180,33.9,-183.3,29.6],[11.4,-310.8,-236,-304.9,-226.5,-298.9,-230.3,-304.8,-239.7],[10.3,-356.6,-131.2,-360,-134.3,-362.6,-131.5,-364,-132.8,-366,-130.7,-361.1,-126.2],[11.8,-217,-90.7,-209.4,-94.2,-212.6,-101.2,-214.2,-100.5,-215.4,-103.1,-221.4,-100.3],[14.9,-164.5,-132.9,-176.5,-125.1,-164.6,-109.4,-163,-109.3,-161.5,-110.2,-161.1,-111.5,-161.6,-112.5,-160.7,-113.2,-159.1,-110.7,-158.2,-111.2,-157.8,-110.4,-155.1,-112.2,-155.5,-112.7,-154.7,-113.1,-158.3,-118.7,-156.1,-120.4],[7.1,-184.1,59.3,-177.7,67.1,-171.7,62.2,-175.2,58,-177.8,60.1,-180.7,56.6],[8.5,-131.4,-23.6,-124.7,-17.1,-117,-25.1,-123.4,-31.3],[10.8,-328.4,-92,-326.3,-83.8,-321.4,-85.2,-322.3,-90.1,-322.7,-90,-323.5,-93.3],[4.4,-251.7,32.8,-253.2,27.2,-261.6,29.5,-260.1,35.1],[6.5,-135.4,194.2,-140.5,195.4,-139.1,201.3,-138.5,201.1,-138.1,202.8,-133.6,201.7],[7.4,-78.7,-165.5,-83,-171,-87.2,-167.8,-82.9,-162.2],[22.7,-85.7,176.7,-86.8,175.3,-84.8,173.6,-85,173,-81.2,171,-81.7,168.2,-78,165,-78.1,164.2,-85.6,154.3,-87.8,148.9,-102,133,-105.8,127.4,-105.2,125.7,-107.3,123.3,-108.4,123.4,-116.1,128.5,-120.1,123.6,-119.4,123,-121.6,117.3,-124.2,118.5,-126,116.2,-131.8,119.2,-132.1,121,-117.8,140.3,-94.4,172.4,-95.4,173.2,-94.5,174.4,-95.6,175.2,-91.1,180.6,-90.9,179.8,-90.2,180.5],[11.8,159.8,-60,126.1,-51.7,121.8,-43.5,129.9,-27.2,139.1,-32.7,133.8,-41.9,153.5,-47.3,138.7,-13.2,148.9,-8.9,166.9,-52.3],[6.9,-115.3,-35.9,-117,-34.5,-112.5,-26.6,-109.7,-29.2],[13.9,-182.1,176.9,-188.4,162.2,-202.7,168.3,-196.4,183],[14.9,-118.5,53.4,-109.3,60.2,-100,48.3,-102.4,46.4,-102.9,47.1,-107.4,43.6,-107,43.1,-109.2,41.5],[10.7,-157.1,165.6,-158.9,160.6,-167.4,163.7,-165.8,168.4],[10.7,-332.3,-159.8,-341.2,-169.2,-344.8,-165.8,-344.4,-165.4,-347.2,-162.7,-339,-154],[10.2,-64.2,12.7,-63.6,12.1,-63.2,12.5,-60.4,9.8,-60.9,9.4,-60.1,8.6,-65.5,3.1,-69.6,7.2],[9.6,256,-292.5,260.4,-283.3,269.4,-287.6,265.1,-296.8],[10,-287.9,265.4,-287.2,267.6,-286.7,267.4,-286,269.6,-281.1,268.1,-280.9,268.5,-278.4,267.8,-279.9,262.9],[10,-128.4,-93.2,-132.9,-88.1,-128.1,-84,-126.8,-85.5,-125.3,-84.2,-126.7,-82.6,-122,-78.5,-117.6,-83.5],[9.5,-208.6,46.8,-198.9,42,-200.3,39.2,-200.9,39.5,-202.8,35.7,-211.9,40.2],[29.3,167.3,-128.7,166.9,-130.8,174.1,-132.6,169.9,-149.4,169.1,-149.4,167.9,-154.5,166.8,-154.2,161.6,-174.8,130.7,-167.9,132.5,-160.5,124.9,-158.6,128.3,-143.1,159.3,-150.3,160,-147.9,119.4,-138.4,124.2,-118.5],[9.8,258.9,-219.6,252.1,-215.8,259.7,-202.4,260.9,-203.1,261.4,-202.3,269,-206.5,266.5,-210.8,264.5,-209.7],[8.4,-340.1,-75.2,-338.3,-68.7,-331.4,-70.7,-332.6,-76.3,-333.2,-76.1,-333.5,-77.1],[6.6,-105.7,211.2,-103.1,217.7,-101.3,217,-101.9,215.4,-100.1,214.7,-100.6,213.5,-100.1,213.3,-100.4,212.5,-98.8,211.9,-100,208.9],[7.8,-116.9,-154.1,-110.9,-146.7,-107.6,-149.3,-113.6,-156.7],[14.8,95.1,-335.6,85.7,-334.4,87.7,-320.5,89.9,-320.8,90.2,-318.4,97.1,-319.2],[7.1,-247.3,-116,-243,-109.1,-240.8,-110.3,-239.3,-111.1,-237.3,-112.3,-241.4,-119.4,-245.3,-117.2,-245.5,-117.7,-246.3,-117.3,-246,-116.8],[26,-35.9,-221.8,-46.7,-215.8,-42.1,-207.7,-37.4,-210.3,-38.4,-212.2,-35.2,-214,-34.2,-212.3,-31.4,-213.8],[10,262.1,-275.9,255.2,-272.7,259.1,-264.1,266,-267.3],[9,-209.6,-7.7,-210.9,-11.7,-217.7,-9.6,-216.5,-5.7],[9.5,-66.9,-117.5,-72.8,-123.9,-76.2,-120.7,-70.3,-114.3],[3,-207.9,-168.7,-206.2,-166.3,-200.7,-170,-201.8,-171.6,-202.7,-171.1,-203.2,-171.9],[9.8,-131.2,-97.6,-125.8,-92.2,-122.4,-95.6,-121,-94.3,-116.5,-98.8,-117.7,-100,-115.5,-102.2,-119.9,-106.6,-123.8,-102.7,-124.9,-103.9],[7,-384.3,80.1,-378,78.4,-383.1,59.8,-383.8,58.7,-388.3,59.9,-388.6,59.1,-390,59.5],[9.4,57.2,-230.5,59.1,-223,66.8,-224.9,65.7,-229,66.5,-229.2,65.5,-232.9,62.2,-232.1,62,-232.9,59.5,-232.2,59.8,-231.2],[7.4,99.2,-354,99.7,-340.2,100.9,-340.2,100.9,-339.4,103.7,-339.5,103.6,-340.1,104.9,-340.2,104.6,-347.3,102.9,-347.2,102.7,-354.1],[10.6,-325.8,-19,-328.1,-26.7,-335.6,-24.5,-334.8,-21.9,-331.9,-22.7,-330.4,-17.6],[8.1,-242.8,-63.9,-239.6,-56,-236.1,-57.4,-239.3,-65.3],[22.4,243.8,-74.5,229,-70.7,235.1,-46.6,250,-50.4],[19.4,314.6,-91.6,320.3,-92.9,319.7,-95.8,317.5,-95.3,316.9,-98.2,313.3,-97.4],[6.8,-117.6,-38.6,-115.1,-35.8,-108,-42.4,-110.5,-45.1],[11.8,-129.4,244,-137.9,245.8,-137.3,248.7,-140,249.3,-137.5,261,-128.6,259.1,-129,257.2,-127.8,256.9,-129,251.3,-130.5,251.6,-131,249,-128.5,248.4],[-9999,-390.8,10,-387.1,9.2,-388.2,4.3,-391.8,5.1],[23.3,-82.8,215.5,-82.1,217.2,-80.6,217.6,-81,220.5,-78.6,221.1,-77.5,218.9,-75.4,217.5,-73.3,214.4,-68.3,195.1,-75.3,193],[8,-360.8,6.4,-363.8,-6.6,-372.1,-4.6,-371.6,-2.2,-373.8,-1.7,-372.1,5.3,-370,4.8,-369.2,8.4],[8.8,-135.9,270.3,-125,268,-126.4,261.1,-137.3,263.3],[18.8,22.4,-290.6,16.3,-289.1,19.5,-276.6,25.6,-278.2],[12,-119.4,63.2,-128.5,56.2,-132.8,60.6,-132,61.3,-133.8,63.2,-125.9,70.3,-119.5,64.3,-120.1,63.6],[11.5,-152.8,174.6,-154.8,169.5,-158.3,170.8,-158,171.5,-162.1,173.1,-162.4,178.3],[8.3,-140.9,56.8,-135.6,51.2,-140.8,46.4,-140.2,45.7,-143.2,42.7,-149.2,49.1],[13.3,-218.3,-115.9,-222.8,-126.2,-233.6,-121.5,-232.1,-117.9,-230.1,-118.8,-227.2,-112.1],[10.7,-305.3,-46.3,-302.7,-37,-296.5,-38.7,-296.3,-37.7,-291.3,-39,-294.1,-49.3],[11.5,-192.5,-250.7,-194.6,-254.1,-198.7,-251.5,-198.1,-250.5,-201.3,-248.5,-199.7,-246],[15.3,-53.1,65.5,-54.9,61.4,-72,61.6,-71.9,65.9,-69.1,65.8,-68.5,75.4],[8.5,-302.3,189.4,-297.4,202.7,-296.1,203.2,-293.7,201.4,-288.9,199.7,-292.9,188.7,-295.6,189.7,-296.5,187.3,-297.1,187.6,-297.4,187,-301.5,188.5,-301.3,189],[22.4,201,-290.5,187.2,-285,187.6,-284.2,183.3,-282.5,190,-265.6,189.2,-265.2,192.9,-255.9,198.3,-258,197.5,-259.9,202.5,-261.8,201.6,-263.9,206.6,-265.9,202.8,-274.4,200.4,-273.5,198.4,-278.4,204.8,-281],[10.6,-194,-76.1,-185.3,-80.8,-187.4,-84.5,-195.9,-80],[12.1,-385.3,-82.1,-389.1,-80.4,-385.5,-72.5,-381.6,-74.2],[8.8,-188.8,70.5,-194.7,63.5,-198.3,66.5,-195.8,69.5,-196.2,69.9,-192.9,73.9],[11.5,-352.3,67.2,-340.9,64.2,-340.7,65,-328.9,61.9,-332.5,48.6,-337.5,50,-337.2,51.3,-339,51.8,-339.3,51,-343.9,52.2,-344.1,51.3,-349.2,52.6,-348.9,53.6,-350.7,54.1,-351,52.9,-355.8,54.2],[24.4,175.8,-333.5,182.1,-333.9,182.6,-333.1,187,-335.4,184.4,-343,181.4,-343.9,179.9,-348.9,173.1,-346.6,173.5,-344.2,172.3,-342.4],[10,183.3,-143.7,179.3,-140.8,180.9,-138.6,179.3,-137.4,182,-133.9,182.8,-134.5,185.4,-131.2,190.6,-134],[9.8,-208.6,59.1,-206.4,58.2,-211.3,45.9,-219.3,49.1,-218.4,51.2,-220.3,52,-216.9,60.5,-213.4,59.1,-212.5,61.3,-208.3,59.7],[8.3,-225.2,-19.5,-218.4,-22.4,-220.4,-27.1,-227.2,-24.1],[10,-371.3,-119.4,-374.9,-123.7,-382.4,-117.7,-378.5,-113.2],[9.7,256.3,-247.9,254.7,-252.4,247.7,-249.8,249.3,-245.3],[4.5,129.9,47.4,133.3,49.3,137,39.3,133.4,38],[9.3,-150.3,203.2,-140.7,199.9,-142.8,194,-141.9,193.7,-143.1,190.2,-151.8,193.2,-151,195.5,-152.7,196.1],[12,174.7,-163.4,177.1,-164.5,177.6,-163.4,186.2,-167.2,184.5,-171,184,-170.8,182.1,-175.1,181.4,-174.8,180.2,-177.5,177,-176,177.6,-174.6,171.8,-172,172.1,-171.2,171.4,-170.9],[10.2,175.3,-282.3,177.9,-275.5,183.9,-277.8,181.5,-284,179.5,-283.2,179.3,-283.9],[11.9,-262,118.3,-255.1,115.9,-259.8,102.6,-262.6,103.6,-263.4,101.4,-267.5,102.9],[7.6,-298.5,-24.2,-297.7,-20.7,-286.9,-23.5,-287.8,-26.9],[12.6,-179.7,-98.1,-177.2,-94,-174.5,-95.7,-173.6,-94.2,-167.5,-97.9,-170.8,-103.4],[12.7,-326.8,-38.9,-325.2,-33.2,-318.2,-35.3,-319.8,-40.9],[7.7,-387,71.8,-389.4,63.7,-391.3,64.3,-391.5,63.7,-397.2,65.3,-397,65.9,-399.4,66.6,-397,74.7,-395.4,74.3,-395.2,74.8,-392.6,74,-392.8,73.5,-391,73,-390.9,73.4,-388.3,72.7,-388.4,72.3],[28.9,126.2,-304.9,128.9,-281.2,141.5,-282.8,140.4,-291.6,141.7,-291.8,141.1,-296.5,140.3,-296.4,139.1,-306.4],[8.5,-274.5,-41.2,-267,-42.4,-267.8,-47.9,-268.7,-47.8,-269.2,-51.1,-270.2,-51,-270.8,-55,-275.6,-54.2,-275.5,-53.6,-277.1,-53.3,-276.4,-49.2,-275.5,-49.3],[17.1,40.7,109.5,33.6,113.9,40.2,124.3,47.3,119.9],[23.9,54,-202.7,61,-170,82.7,-173.7,80.3,-186.3,70.5,-185.2,66.8,-203.5,65.3,-204.6],[13.3,-29.8,-73.5,-18.8,-61.6,-10.7,-69.2,-22.1,-81.5],[16.8,-226,310.4,-232.8,308.8,-237.5,329.2,-236,329.5,-236.3,331,-225.6,333.4,-221,313.1,-226.3,311.9],[13.6,98.6,-285.4,93.3,-284.8,95,-271.2,100.3,-271.9],[10,-273.2,-72,-269.8,-62.4,-264.8,-64.2,-265.5,-66.2,-263.1,-67.1,-265.8,-74.6],[11.4,-339.2,-5.3,-325.5,-9.9,-327.5,-15.8,-338.3,-12.2,-337.6,-10.2,-340.5,-9.2],[10.1,49.1,-128.7,50.5,-121.6,53.5,-123.3,53.4,-124,55.5,-124.4,55.3,-125.4,58.1,-125.9,57.9,-127,58.5,-127.1,57.9,-130.4],[8.5,7.6,-388,2.9,-387.8,2.9,-384.8,2.2,-384.8,2.1,-387.3,-2.4,-387.2,-2.1,-378.4,2.5,-378.6,2.5,-377.5,7.9,-377.7],[10.2,174.5,-273.9,173.7,-273.2,175,-269.9,185.2,-273.6,183.8,-277.3],[26.6,151.6,-328.3,151.8,-327.7,157.1,-329.1,157.2,-328.5,170,-332.4,165.3,-349.8,145.7,-343.2,146.4,-340.7,143.3,-339.5,147.2,-327.2],[-9999,336.4,-126.3,341.7,-128.5,340.4,-131.5,335.2,-129.4],[14,270.4,-52.7,271.3,-48.5,275.3,-49.4,276.7,-43.1,286.9,-45.4,286.2,-48.5,290.6,-49.5,289.8,-53.1,285.9,-52.2,285.1,-55.9],[4.1,137.5,-54.5,159.8,-60,159.2,-62.5,136.9,-57],[27.4,245.1,-179.9,241.8,-178,238.7,-183.5,237.7,-183,236.1,-185.9,234.5,-185,233.3,-187.2,220.1,-179.8,220.6,-179,214,-175.3,217.5,-169.1,225.6,-173.6,227.4,-170.4,226.7,-169.9,229.5,-164.8,230.6,-165.3,234.3,-158.7,233.4,-158.2,237.2,-151.2,254.4,-163.1],[6.5,212.3,-202.9,208.5,-200.7,212.4,-193.8,216.2,-196],[14,34.2,-91.2,38.2,-93.6,33,-101.8,29.1,-99.4],[11,-174.8,194.8,-188,200.4,-185.2,206.9,-172,201.2],[10.8,-338.3,-88,-336.1,-80.1,-331.3,-81.4,-333.5,-89.3],[5.2,2.2,-361.7,4.5,-353.3,11.2,-355.1,9.1,-362.5,8.1,-362.2,7.8,-363.3],[20.6,87.8,222.8,84,222.5,83.9,217.4,83,216.7,81.6,216.7,80.6,217.5,80.4,221.2,78.7,221.4,78.5,228.1,76.9,228.2,75.5,236.5,68.9,234.7,68.4,229,56.7,230.1,57.7,240.2,51.1,252.8,50.6,252.5,48.6,261.4,46.8,265,45.8,264.4,45.2,265.4,44.2,264.9,41.5,270.1,41,268.7,39.1,269.6,35.1,275.2,37.7,277.6,34.6,283.6,35.6,284.4,35.2,285.3,35.9,285.9,33.5,290.1,34.3,290.7,33.7,291.9,38.1,294,38.6,293,39.7,293.7,42,288.8,42.7,289.3,42.9,288.6,44.1,289.6,38.7,312.6,37.6,312.3,36.6,315.3,35.1,314.5,33.1,318.4,37.1,320.5,38,318.7,39.6,319.5,39.5,320.1,47.6,320.7],[8.8,252.8,-288.1,250.7,-287.2,251,-286.7,249.5,-286.1,252.5,-279.1,256,-280.6],[10.3,-230.3,222.5,-238.6,225.5,-236.8,230.4,-228.5,227.4],[18.4,-41.9,-298.8,-44.7,-297.6,-46.7,-302.2,-43.5,-303.6,-46.8,-310.9,-48.4,-311.6,-58.9,-307,-58.5,-306.2,-61.4,-304.9,-58.8,-299.2,-61.4,-298,-58.6,-292.5,-55.3,-294.1,-52.9,-288.9,-47.6,-291.4,-44.5,-284.7,-39.3,-287.2,-39.9,-288.5,-37.9,-289.5],[8.5,290.6,-240.5,282.6,-237.3,286.1,-228.2,289.2,-229.4,289.5,-228.6,291.6,-229.4,291.3,-230.2,294.2,-231.3],[9.7,-106.7,-233.5,-112.3,-229.9,-111.6,-228.9,-112.7,-228.3,-104.5,-215.6,-97.9,-219.8],[7.6,25,-164.6,26.4,-158.7,32.8,-160.2,32.7,-161,33.9,-161.2,32.7,-166.4],[9,-260.7,-100.6,-259.3,-98.4,-254.6,-101.4,-254.2,-100.8,-251.7,-102.4,-256.3,-109,-264,-104,-261.4,-100.1],[10.3,-27.1,-16.8,-36.6,-24.4,-41.5,-18.9,-37.6,-15.1,-37.3,-15.5,-36.3,-14.5,-34,-16.8,-30.8,-13.9,-29,-15.9,-28.5,-15.4],[15.3,-381.2,48.7,-384.9,30.9,-392.6,32.5,-392.1,34.7,-397.1,35.8,-393.9,51.4],[11.9,254.4,-252.9,252.6,-257.5,245.6,-254.8,247.4,-250.1],[12.2,-278.2,-83.5,-272.8,-87.3,-278.8,-95.9,-282.7,-93.2,-282.2,-92.4,-283.7,-91.4],[14,204.9,-209,210.5,-211.4,205.5,-222.7,208.7,-224.1,204.8,-233,196,-229.1],[10.3,-1.4,-33,2.7,-30.3,3.9,-32.1,-.6,-35.3,-1.5,-34.1,-3.5,-35.6,-9.3,-27.1,-6.9,-25.1],[9.7,-117.3,-46.5,-113.6,-50,-119.8,-56.6,-123.5,-53.1],[11.7,-307.6,56.8,-295.1,53.3,-299.5,38.2,-311.9,41.7],[9.1,-242.3,-18.5,-240.4,-11.8,-236,-13,-237.8,-19.7],[9.6,-233,33.4,-234.1,29.6,-241,31.7,-239.9,35.5],[8.2,-38.4,-54.8,-43.3,-49.4,-34.8,-41.7,-29.8,-47.1],[7.4,-327.4,29.3,-317.4,24.6,-321.1,15.2,-327.2,17.5,-326.9,18.3,-332.5,20.3,-332.1,20.7,-333.8,21.5,-331.6,27,-329.5,26.3,-329,27.6,-328.2,27.3],[9.7,-197,158.9,-206.5,163.1,-204.6,167.4,-195.1,163.3],[26.9,-49.5,-253.3,-48.8,-253,-42.8,-240.8,-42.5,-238,-41.6,-236.1,-42,-235.9,-41.1,-234.1,-40.7,-234.3,-40.1,-233,-32.7,-237.3,-32.7,-238.1,-45.5,-264.2,-56.9,-258.3,-56.6,-257.8,-57.1,-257.6,-55.7,-254.9,-55.2,-255.1,-54.8,-254.3,-55.2,-254.1,-53.7,-251.8,-53.1,-252.1,-52.9,-251.6],[25.6,231.2,-155.3,226.9,-156.1,227.8,-161.6,221.3,-162.7,220.6,-158.5,216.6,-159.2,216.4,-158,211.7,-158.8,209.8,-147.8,214.5,-147,213.5,-141.4,222.6,-139.8,223.7,-145.9,229.4,-144.9],[9,-157.2,65.7,-149.8,74.1,-151.2,75.3,-146.9,80.2,-142.8,76.7,-146.9,72,-146.3,71.4,-155.4,61,-155.9,61.5,-159.4,57.6,-162.5,60.3,-161.9,61.1,-165.8,64.5,-168.3,61.6,-175.7,68,-173.4,70.6,-174,71.1,-171.7,73.7,-171,73.2,-168.7,75.8],[10.5,-240.9,104.1,-241.9,101.2,-248.4,103.4,-247.4,106.3],[7.1,-166.5,211.2,-156.8,207.4,-158.9,202.2,-160,202.6,-160.4,201.5,-169,204.8],[9.4,-249.7,-120.3,-253.4,-118.3,-246.8,-106.5,-243.1,-108.5],[33.4,-210.5,-233.5,-223.8,-225,-222.9,-223.7,-222.5,-223.9,-204,-195.1,-204.3,-194.9,-201.8,-191,-203.8,-189.7,-197.5,-179.9,-182.1,-189.8,-191,-203.6,-191.4,-203.4],[11.5,-194.6,184,-194.8,183.6,-197.2,184.7,-195,189.9,-193.1,189,-192.8,189.6,-193.4,189.8,-192.4,192.3,-189.2,190.9,-190.8,187.4,-186.5,185.6,-185.1,188.8,-178.9,186.1,-180,183.5,-179.5,183.3,-181.6,178.3],[12.1,-210.7,154.6,-202.5,151.1,-205.7,144,-208.2,145.1,-208,145.7,-210.7,146.9,-210.5,147.4,-213.1,148.5,-212.9,149,-214,149.5,-212.9,152,-212,151.6],[15.5,-250.5,-228.5,-257.3,-239.2,-269.2,-233,-261.5,-221.1],[10.7,-246.2,-59.2,-254.7,-55.6,-251.4,-47.9,-245.3,-50.4,-245,-49.8,-242.6,-50.8],[10.7,-366.4,-129.8,-371,-135.5,-374.1,-132.8,-369.3,-127.4],[11.5,-192.3,-53.6,-195.9,-61.2,-202.7,-58,-203.7,-60.2,-207.1,-58.6,-202.4,-48.8],[7.5,6.4,14.1,27.9,-25.4,26.4,-28.1,4.4,12.9],[15.5,-128,170.8,-131.1,159.6,-133.9,160.8,-135.4,155.4,-146.1,158.5,-141.4,173.3,-136.8,171.4,-135.8,174],[9.2,-263.2,-58.2,-268.1,-55.8,-265,-49.5,-260.1,-51.9],[10.2,-51.6,-66.4,-57.1,-71.6,-62.1,-66.3,-56.6,-61.1],[10.6,-174.6,134.4,-184.6,138.8,-181.5,145.9,-176.4,143.7,-174.6,148,-167.9,145,-168.3,144.1,-167.7,143.8,-171.6,135.1,-173.9,136.1],[13.9,-139.3,99.9,-140.3,96.6,-148.2,99,-147.2,102.3],[15.2,48.8,-295.7,49.7,-287.1,64.1,-288.5,63.3,-297.6],[9.4,278.9,-249.5,275.1,-247.9,278.2,-240.7,281.9,-242.3],[8.3,-170,35.9,-160.6,28.5,-163.7,24.6,-162.9,23.9,-164.6,21.8,-167.9,24.5,-168.7,23.5,-172.8,26.7,-172,27.8,-174.7,30],[9.7,-197.7,216.3,-206.1,219.1,-208.6,227.7,-206.5,234.1,-203.4,233.2,-205.5,226.4,-202.6,225.5,-202.4,226.2,-195.2,223.9],[10.1,-24.9,-96.5,-29,-102.8,-30.1,-102,-31.8,-103.7,-36.5,-99.1,-30.5,-92.4],[14,-172.4,107.5,-165.9,116.5,-161.7,116,-169.5,105.7],[24,231.1,-311.2,241.6,-317.4,243.8,-318.1,243.1,-320.5,228.7,-319.1],[8.4,182.1,-353.4,184.2,-348.1,191.2,-350.9,189.1,-356.1],[-9999,355.4,-133.5,353.4,-138.8,341.5,-134.2,343.5,-128.9],[10.3,-202.6,-95.6,-200.5,-91.7,-197.7,-93.2,-197.4,-92.7,-193.2,-94.9,-195.6,-99.4],[15.1,-125.9,29.2,-122.3,25.6,-122.8,25.1,-122.1,24.4,-125.3,21.1,-126,21.8,-130.2,17.6,-129.6,17,-133.1,13.5,-133.6,14,-134.3,13.4,-137.9,16.9,-139,15.8,-145.6,22.4,-145.9,22.1,-148,24.2,-133.2,39,-124.6,30.5],[11.1,-228.4,-326,-225.3,-320.7,-224,-321.5,-223.2,-320.2,-219.8,-322.2,-223.8,-328.8],[12.7,-313.5,-235.9,-305,-240.9,-308,-246.1,-308.8,-245.6,-310.5,-248.4,-318.2,-243.9],[10.2,-182.2,-21.7,-184,-30.2,-192.3,-28.4,-190.5,-19.9],[9.2,-164.8,229.4,-170.3,230.7,-169,236.2,-163.6,235],[7.3,-41.3,-46.5,-47.4,-52.1,-53.5,-45.5,-47.4,-39.9],[12,-352.5,-14.3,-358.7,-12.9,-359.4,-16.2,-365.2,-14.8,-361.9,-.2,-354.8,-1.8,-354.1,.9,-348.9,-.3,-349.8,-4.5,-348.2,-4.9,-349.7,-11.3,-351.7,-10.9],[7.7,-15.5,-159.7,-9.8,-149.3,-5.7,-151.4,-7.8,-155.3,-2.7,-157.9,-.6,-154.2,3.3,-156.7,4.7,-155,6.9,-156.2,5,-159.5,3.7,-161.7,3.4,-162.2,6.7,-163.9,2.9,-171.3,-6.8,-166.3,-5.9,-164.7],[7.8,86.9,-5.6,79,-1.1,81.1,2.5,79.4,3.5,82.8,9.5,84.5,8.5,88.6,15.7,86.5,16.8,90.6,24.1,100.3,18.6],[12.4,-230.1,103.1,-229.2,110.2,-220.7,109.1,-221.6,102],[8.7,-194.4,-283,-200,-279.6,-196.6,-274.2,-197.3,-273.8,-195.6,-271.2,-189.2,-274.7],[10.3,-206.7,-11.3,-203.2,.8,-195.9,-1.3,-199.4,-13.4],[8.9,-215.3,-5.4,-213.5,-1,-207,-3.6,-208.8,-8.1],[9.6,-184.2,67,-190,60.2,-190.8,60.9,-191.1,60.5,-194.3,63.2,-188.2,70.4],[24.2,-63.1,-245.1,-62.3,-245.5,-62.1,-245.2,-61.5,-245.5,-61.6,-246,-54.3,-250.2,-58.8,-258,-62.5,-256.1,-63.1,-254.6,-63.7,-254.9,-65.5,-250.7,-64.8,-250.4,-65.4,-249],[12.2,-20.7,-253,-13.7,-256.3,-16.4,-262,-23.3,-258.7],[9.4,45.3,-348.9,45.9,-341.5,55.4,-342.3,54.9,-349.5,48,-349,48.1,-347.9,47.1,-347.8,47,-349.1],[8.5,-96.1,-113.2,-105.7,-124,-111.1,-119.1,-101.6,-108.4],[12.4,305.9,-254.5,301.9,-252.3,303,-250.3,302.3,-249.9,304.3,-246.3,309,-248.9],[11,-123.8,-200.8,-119.5,-203.1,-125.6,-214.8,-129.9,-212.5],[10.9,213.9,-232.7,209.6,-230.6,209.7,-230.3,207.9,-229.4,210.2,-224.6,216.3,-227.5],[10.1,-313.2,247,-311.8,250.5,-301.9,246.1,-302.8,244,-303.6,244.3,-304,243.2],[7.5,-39.2,-73.7,-44.7,-78.7,-50.5,-72.3,-45,-67.3],[11.2,-69.7,389,-70,379.4,-79.9,374,-83.5,381.7],[14,-189.7,-69.5,-188.8,-67.8,-180.8,-72.3,-181.7,-73.9,-180.9,-74.3,-183.3,-78.4,-184.1,-78,-185.1,-79.8,-194.3,-74.5,-191,-68.8],[7,249.1,-220.6,246.1,-226.7,238.1,-222.7,241.2,-216.6],[7.3,-134.9,194.7,-133.2,201.5,-129.2,201.1,-129.1,193.1],[10,-356.1,-141.9,-352.4,-145,-357,-150.5,-360.7,-147.4],[15.2,48.4,-290.7,48,-295,38.2,-294.2,38.5,-289.9],[13.6,253.5,-235.2,256.6,-236.5,255,-240.1,255.7,-240.4,253.5,-245.6,249.8,-244],[14.5,-285.1,45,-286.6,45.4,-285.4,49.9,-288.6,50.7,-287.4,55.2,-284.2,54.4,-279.6,72.1,-265.6,68.5,-265.9,67.4,-263.7,66.9,-263.2,68.8,-254.6,66.6,-258.2,54.1,-262.2,55.1,-263.3,50.9,-257.8,49.4,-261.4,35.8,-263.3,36.3,-265.7,27.1,-288.3,33],[11.7,-7.8,-23.4,-16,-29.6,-22.9,-20.5,-14.8,-14.3],[10.1,-250.6,42.4,-252.7,34.1,-259.6,35.8,-257.5,44.1],[8,-2.6,-7.5,-6.4,-2.9,-1.9,1.3,1.7,-4.1],[9.5,-55.1,-94.1,-62.3,-87.8,-59.5,-84.6,-52.3,-90.9],[17.2,44.9,58.7,42.8,68.1,43.4,69.2,42.7,69.6,43.8,71.4,41.9,72.5,43.1,74.6,41.4,75.6,42.1,76.8,41.6,77.1,43.9,80.8,46.3,79.4,46.8,80.4,52.1,77.3],[16.7,-307,9.3,-315.4,11.4,-314.7,14.1,-316.1,14.5,-315.7,16,-318.6,16.7,-317.5,21,-314.8,20.3,-314.2,22.6,-315,22.8,-314.7,24,-316.8,24.5,-314.6,33.1,-304.1,30.5,-306.3,21.6,-308.3,22.1,-308.6,21.2,-304.3,20.1],[14.8,300,-223.6,303.9,-224.8,306.3,-227.3,305.5,-230,307.8,-230.8,303.2,-245.7,294.1,-242.9],[9.8,304,-260.6,300,-258.2,301.1,-256.4,300.5,-256.1,302.5,-252.8,307,-255.5],[10.9,332.7,-218.8,328.6,-224.4,325.9,-222.5,326.3,-222,325.5,-221.5,329,-216.6],[8,-203.8,-75.2,-209.2,-72.6,-207.2,-68.4,-199.2,-72.3,-201.1,-76,-203.6,-74.8],[8.7,-202.2,-278.4,-207.4,-275.1,-203.5,-269.1,-204,-268.8,-202.9,-267.1,-202.2,-266.9,-198.5,-269.3,-199,-270.1,-197.4,-271.1],[11.2,-176.6,218,-174.6,225.9,-170.7,224.9,-172.8,217],[9.7,-45.7,81.7,-41.3,88.2,-35.3,84.1,-40.3,76.6,-43,78.4,-42.3,79.4],[8.2,-125.5,72.3,-130.5,67.5,-131.2,68.2,-137.2,62.5,-143.1,68.6,-132,79.2],[32.7,-.6,-133.4,10.5,-139.6,6.6,-146.3,9.5,-148.6,7,-153.5,4.4,-152.1,2.6,-155.8,1.5,-155.3,2,-154.2,-6.8,-146.9,-8,-149.2,-9,-148.6],[10,-225.4,-136.1,-227.1,-140.6,-228.6,-141.1,-234.4,-138.9,-232.3,-133.5],[27.1,-28.3,-273.5,-24.7,-265.8,-25.8,-265.1,-23.5,-260,-18.2,-262.2,-19.3,-264.4,-17.5,-265.4,-18.4,-267,-17.7,-267.3,-21,-277.2],[2.8,85.4,17.3,83.4,18.4,88.2,27.1,90.1,26],[23,187.8,-317.3,188,-316.3,185.5,-316.9,182.9,-316.5,186.4,-307.6,188.6,-307.6,189,-305.1,210,-307.1,210.9,-304.8,218.9,-308.4,215.8,-316.1,215.3,-318.7],[10.2,175.2,-269,176.4,-265.7,186.9,-269.6,185.5,-273.1],[10.4,-185.6,150.4,-188.7,143.8,-194,146.3,-191.1,152.9],[11.5,-334.3,27.8,-337.3,16.5,-344.2,18.4,-343.2,22.1,-345.2,22.7,-342.4,33.1,-335.7,31.3,-336.5,28.4],[10.9,-183.3,119.4,-185.1,111.8,-181.9,111.2,-188.4,103.3,-203.6,107,-199.6,122.6,-198.3,123.1],[12,-129.6,-9.8,-125.5,-14.5,-127.4,-16.2,-126.1,-17.7,-130.7,-21.8,-131.6,-20.8,-133,-22,-136.8,-17.7,-134.7,-15.9,-135.5,-15],[16.9,64.5,-259.9,61.8,-262.5,56.8,-262.2,55.2,-260.9,55.2,-260.2,54.2,-260.1,54.4,-251.4,63.8,-251.7,64.9,-252.7],[7.7,-116.5,-96.7,-122.8,-90.1,-108.2,-76.5,-102,-83.1],[11.1,125.1,-363.8,133.9,-367.2,131.2,-374.1,127.8,-372.8,125.5,-378.7,120.2,-376.6],[11.3,-202.9,147.4,-197.2,145.2,-200.1,138.1,-205.8,140.4],[-9999,-68.4,-124,-60.1,-130.8,-51.8,-139.2,-63.1,-160,-80.2,-143.9],[9.9,306.8,-236.3,310.6,-237.5,309.4,-241.1,310,-241.3,308.2,-247,303.8,-245.7],[8.5,228.2,-240.4,222.5,-237.9,226,-230,231.7,-232.5],[9.4,-255.4,-120.3,-254.4,-118.6,-244.6,-123.8,-246.1,-126.4,-247.7,-125.5,-250.4,-130.2,-259.5,-124.9,-256.5,-119.7],[10.6,-323.5,-31.8,-328.1,-30.7,-325.2,-18.5,-323.2,-19,-323.4,-19.9,-320.8,-20.5],[9.9,-344,-194.6,-348.5,-188.8,-340.1,-182.4,-335.7,-188.2],[8.8,-139.7,79.5,-143.3,84.1,-141.6,88,-137.6,90.8,-133,84.3],[7,-361.8,78.3,-370.6,80.4,-367.8,91.9,-364.3,91.1,-363.9,92.6,-360.7,91.8,-360.4,93,-357.4,92.3,-358.3,88.4,-359.3,88.6],[10.1,-180.4,20.7,-174.4,26.7,-167.9,20.2,-173.3,14.8,-176.2,17.7,-176.8,17.1],[6.5,-42.3,-99.7,-49.4,-106.7,-54,-102.1,-51.1,-99.2,-51.6,-98.7,-47.8,-95,-46.6,-96.3,-46.1,-95.9],[8.1,-27.4,-265.9,-30.7,-273,-42.3,-267.2,-39.1,-260.4],[10,-135.8,211.7,-133.8,220.2,-125.2,218.1,-127.2,209.6],[18.8,288,-60.6,294.3,-37.4,309.6,-41.4,311.9,-32.4,342.3,-40.3,338.1,-56.6,337.4,-57.4,334.7,-67.6,328.3,-65.9,326.9,-71.1],[9.5,-137.2,-197,-132.4,-200.4,-136.8,-206.6,-141.6,-203.2],[11.3,-239,103.2,-237.2,111.9,-233.8,111.2,-235.6,102.5],[12.1,-375.2,117.1,-372,153.2,-364.7,153.1,-349.4,150.7,-338.9,149.5,-305.9,145.5,-307.4,132.2,-310.4,132.5,-310.6,131.6,-307.4,131.2,-307.9,129.2,-315.2,105.2,-362.7,116.2],[9.3,-60.2,-3.2,-54.6,1.5,-53,-.5,-53.7,-1.1,-52.3,-2.8,-53.7,-4,-52.8,-5.2,-53.2,-5.5,-52.8,-6,-55.8,-8.5],[10.6,123.8,-346.5,124.7,-343.2,129.6,-344.3,129.7,-343.9,132.9,-344.7,133.1,-344,138.9,-345.3,137.8,-349.8],[10.9,-181.3,-104.4,-178.1,-99.7,-171.2,-104.4,-174.4,-109.1],[9.3,-361.3,-146.4,-365.5,-143,-361.2,-137.8,-357,-141.3],[8.2,-117.6,-140.7,-112.8,-144.7,-118.8,-151.9,-123.6,-147.9],[10.1,-57.7,15.8,-61,19.1,-55,25.2,-51.6,22],[8.6,-121.4,114.1,-117.4,124.8,-113.9,123.5,-113.4,124.5,-110.3,122.9,-110.5,121.9,-108.2,121,-109.9,117.4,-111.3,117.8,-112.2,115.2,-114.3,112.7],[3.9,-163.6,-226.5,-169.1,-234.2,-177,-228.6,-171.5,-220.9],[7.7,-204,31.7,-205.1,28.8,-209.5,30.5,-211.6,25.1,-217.3,27.4,-214.5,34.6,-213.5,34.2,-213.2,34.8,-209.4,33.3,-209.2,33.7],[28.3,205.8,-338.2,197.3,-353.7,184.4,-347.3,188.4,-334.5,190.3,-334.7,197.2,-337.9,198.6,-334.3],[13.4,285.6,-257.3,287.1,-253.8,278.7,-250.3,281.2,-244.6,291.5,-249,292.1,-247.5,299.9,-250.8,295.3,-261.5],[7.1,-212.8,-79.8,-218.9,-76.9,-215.9,-70.6,-214.4,-71.3,-213.8,-70.1,-215.4,-69.3,-213.6,-65.7,-209.3,-67.8,-209.9,-68.9,-208,-69.8],[20,-72.7,101.9,-76.8,94.7,-81.2,90.6,-86.6,95.3,-85.9,96.3,-87.4,98.4,-82.7,103.3,-81.2,103.3,-80,104.6],[9.3,.1,27.6,-6.7,24.1,-11.5,33,-13.2,32.2,-20.3,42.7,-18.9,43.4,-20.5,46.4,-23.1,45.4,-26.6,51.6,-25.8,52.1,-29.5,58.9,-27.9,59.9,-31.8,67,-23.9,71.5],[7.3,-210.8,207.9,-207,217.7,-202.4,215.9,-206.2,206.1],[7.4,-236.4,200.5,-251.6,206.3,-247.9,215.8,-240.4,212.9,-241.3,210.5,-233.6,207.6],[10.8,-278.7,-116.2,-281.4,-114.4,-282,-115.2,-285.2,-113,-279.5,-104.7,-273.5,-108.7],[11.4,-363.7,-82.6,-356.2,-86.2,-356.7,-88.1,-357.1,-87.8,-360.6,-95.1,-368.3,-91.5],[9.6,-254.1,199.6,-243.3,195.4,-241.7,199.5,-237.4,197.8,-242,185.9,-246,187.4,-246.3,186.7,-248,187.3,-247.8,188,-250,188.9,-251.7,184.7,-258.8,187.4],[11.6,-281.9,-11.9,-274.1,-13.8,-280.1,-36.8,-287.8,-34.8],[9.8,-55.3,12.2,-57,13.9,-56.7,16.2,-51.4,21.6,-48.6,18.9],[10.4,85.4,-370.4,82.4,-370,82.5,-368.8,80.4,-368.5,81.5,-361.7,86.6,-362.5],[7.9,-186.4,128.4,-189.6,129.6,-186.7,137.3,-183.5,136.1],[18.3,342,-81,338.7,-90.8,325.7,-86.4,331.6,-69,344.8,-73.5,343.1,-78.6,346.4,-79.7,348,-75.1,348.8,-75.4,354.8,-57.4,354.2,-57.2,357,-48.8,366.5,-52,363.8,-59.9,363.4,-59.8,357.1,-78.3,364.7,-80.8,367,-74,404.2,-86.5,402,-93.1,410.4,-95.9,416.7,-77.3,416,-77.1,418.6,-69.3,427.5,-72.3,425,-79.7,424.6,-79.6,416.7,-103.2,420.8,-104.6,422.7,-98.8,436.1,-103.2,429.9,-121.4,416.5,-116.9,420.1,-106.2,416.7,-105.1,415.4,-108.8,399,-103.3,396.8,-109.8,381.3,-104.6,380.2,-107.7,383.1,-108.6,380.2,-117.3,388.5,-120.1,388,-121.5,391.3,-122.6,392.3,-119.7,401.7,-122.9,399.3,-129.7,403.4,-131.1,402.7,-133.2,398.5,-131.8,397.8,-134,388.6,-130.9,389.4,-128.5,386.1,-127.3,384.9,-130.9,374.3,-127.3,373.3,-130.4,364.6,-127.4,365.5,-124.6,355.9,-121.3,357,-118.4,353.7,-117.3,353.2,-118.9,343.7,-115.7,347.2,-105.4,356.6,-108.6,355.9,-110.7,358.9,-111.6,359.3,-110.4,367.9,-113.4,370.9,-104.4,373.7,-105.4,374.7,-102.5,359.2,-97.3,361.4,-90.9,344.8,-85.3,345.8,-82.2],[2.8,-102.1,-359.9,-82.5,-369.2,-83.4,-371,-102.9,-361.7],[10.9,-264.6,120.9,-264.8,120.4,-262.6,119.6,-265.3,112.5,-266.8,113,-267.9,110.1,-269.4,110.7,-270.6,107.4,-283.8,112.4,-283.5,113.2,-284.3,113.5,-283.1,116.6,-285.6,117.5,-281.9,127.4],[10.1,250.9,-55.1,253.1,-46.6,269.5,-50.8,267.3,-59.3],[26,222.5,-307,230.3,-310.6,227.2,-319.2,222.5,-317.1,222.3,-317.6,218.5,-315.9],[6.5,-321,238.8,-315.4,235.7,-322,224.1,-329.7,228.4,-327.8,231.7,-326.9,231.3,-325,234.7,-323.8,234],[12.5,247.6,-246.4,245.5,-252.6,236.5,-249.6,238.5,-243.4],[12.8,-277.8,-200.7,-282.5,-197.6,-273.5,-184.1,-268.8,-187.2],[13.1,-132.4,-41.8,-137.2,-36.8,-128.9,-28.8,-123.9,-34,-126.5,-36.5,-125.1,-38,-128.4,-41.2,-129,-40.6,-130.2,-41.7,-131.2,-40.7],[12.1,-193.6,145.9,-188.8,143.3,-194.3,133.3,-196.1,132.1,-200.1,134.2],[27.3,-227.9,-297.5,-253.5,-281.1,-248.7,-273.6,-247.8,-274.2,-246.9,-272.7,-245,-273.9,-233.1,-255.3,-237.3,-252.6,-231.3,-243.4,-204.3,-260.7,-210.3,-269.8,-214.3,-267.2,-226.3,-285.9,-222.1,-288.5],[14.8,-327.2,-200,-327.9,-200.4,-327.6,-201.1,-329.3,-202.4,-329.2,-202.7,-331.7,-204.6,-336.6,-200.1,-339.5,-196.2,-340.6,-196.8,-341.9,-195,-339.7,-193.7,-340,-193.4,-334.1,-189.6],[10.9,-64.1,-76.7,-79.5,-92.2,-96.7,-75,-81.3,-59.6],[8,-277.6,269.1,-286.3,270.8,-284.8,278.5,-283.4,278.2,-283.3,278.8,-280.8,278.3,-280.2,281.2,-274.3,280,-275.9,272.3,-276.9,272.5],[9,-148.6,215.7,-140,213.5,-140.3,212.3,-137.6,211.6,-140.1,201.6,-145,202.8,-144.4,205.3,-150.8,207],[7.6,-294.1,-25.3,-294.7,-27.7,-291.9,-28.4,-291.4,-26.7,-288,-27.6,-289,-31.5,-300.7,-28.6,-299.5,-24],[9.4,-105.7,-213.5,-111.5,-222.9,-111,-223.2,-112.6,-225.9,-113.3,-225.5,-113.6,-226.1,-117.9,-223.2,-118.4,-223.9,-119.5,-223,-115.5,-217.2,-123.5,-212.1,-121.2,-208.1,-120.8,-208.4,-120.4,-207.8,-120.7,-207.5,-118.6,-204.8,-114.7,-207.5,-114.9,-207.8,-108.6,-211.1],[13.3,-238.3,273.1,-243.3,274,-245.9,258.5,-248.9,259,-248.4,261.9,-250.1,262.1,-247.9,275,-247,274.9,-246.3,279.3,-247.2,279.5,-245.9,287.5,-236.6,285.9,-237.8,278.8,-238.8,279,-239.1,277.5,-237.6,277.2],[8.9,-135.7,-169,-141.3,-176.6,-144.1,-174.5,-138.5,-167],[11.9,-105.8,83,-101.3,77,-106.4,73.2,-110.4,78.6],[10.5,-190.6,102.1,-195.7,95.8,-205.8,99.8,-203.8,106.2],[9.3,-39.8,-55.3,-46.5,-61.9,-50.4,-57.9,-49.7,-57.2,-50.8,-56.1,-45.3,-50.7,-43.6,-52.4,-43.1,-51.9],[7.7,-226.7,-79.2,-232.5,-91.9,-239.1,-88.8,-233.2,-76.2],[11,-333.7,-162.9,-325,-154.1,-322.3,-156.7,-322.8,-157.2,-318.9,-160.8,-326.9,-169.3],[9.2,114.8,-322.6,123.4,-323.3,122.8,-330.7,115.2,-330.1,115.3,-329.5,114.2,-329.4],[9.6,-222,-64.3,-217.9,-66.3,-218.6,-67.8,-216.2,-69,-219.9,-76.8,-226.5,-73.7],[9.6,-213.9,199.5,-211.8,205.5,-205.9,203.4,-206.5,201.8,-207.9,202.3,-209.4,197.9],[15.6,294.8,-215.6,287.9,-210.5,294.1,-202.1,301,-207.1],[10.1,-322.1,3.3,-325.2,-7.6,-339.8,-3.5,-337.5,5,-332,3.5,-331.4,5.8],[8.3,-154.3,-15.4,-141.7,-22.9,-146.5,-30.8,-149.5,-29,-148.1,-26.6,-157.6,-21],[9,-288.5,126.8,-289.8,121.4,-304.6,125,-303.3,130.3],[9.2,-122,190.7,-125.1,191.8,-125.5,202.6,-124.9,205,-117.4,202.1],[9.4,-67.6,-89,-60.1,-96.4,-61.3,-97.6,-59.9,-98.9,-68.3,-107.1,-77,-98.5],[-9999,-297.9,204.5,-308.6,208.5,-305.5,216.5,-298.4,213.8,-298.9,212.7,-295.3,211.3],[28.4,-170.7,-256.4,-172.9,-255.1,-178,-263.4,-185.3,-258.9,-184.7,-257.9,-185.6,-257.4,-175.4,-240.6,-164.9,-246.9],[34.7,9.6,-33.9,10.7,-34.5,12.2,-32.4,22.3,-39.2,14.9,-50.7,16.4,-51.8,12.6,-57.6,10.9,-56.6,4,-66.6,0,-64.2,-3,-67.9,-9.5,-63.8,-18.4,-53.5,-14.2,-47.7,-15,-47,-11.4,-42.3,-10.7,-42.8,-9,-40.7,-.9,-46.4,-6.9,-55.7,-5.6,-56.6],[9.4,-207.6,161.3,-199.1,157.5,-201.9,151.3,-210.4,155],[8.7,-265.7,-116.1,-262,-109.1,-256.9,-111.7,-257.7,-113.2,-258.1,-113,-260.5,-117.5,-257.3,-119.2,-260.8,-125.4,-268.2,-121.6,-265.2,-116.3],[13.9,-213.5,-232.6,-215.5,-235.8,-217.4,-234.6,-219.1,-237.3,-229.3,-230.8,-225.5,-224.9],[9,-238.8,-83.3,-243.1,-81.5,-238.9,-71.9,-235.8,-73.2,-236.3,-74.5,-235.2,-75],[14.1,41.3,-274.4,48.6,-274.9,47.9,-284.7,40.6,-284.2],[10,-292.6,253.5,-291.2,258,-282.7,255.3,-284.6,249.5,-292.4,252,-292,253.2],[18.7,28.1,-259,-1.2,-250.5,6.5,-223.7,35.8,-232.2],[7.7,-179,126.6,-182.1,127.8,-179.2,135.1,-176.2,133.9],[13.4,84.4,-383,88.2,-362.3,91.8,-363.1,92.4,-362.3,95.8,-363.3,96.7,-360.2,104,-361.6,104.9,-362.5,104.1,-366.1,100.8,-374.3,91.1,-373.7,90.5,-377.6,89.7,-377.4,88.7,-383.9],[7.6,54,-329.8,56.2,-316.7,59.7,-315.2,59,-330.3],[5.3,-29.1,1,-30.8,-.4,-40.5,10.8,-38.8,12.2],[19.9,-99.4,-385.5,-102.1,-384.2,-103,-385.9,-116.5,-379.9,-108.5,-364,-85.3,-376.6,-80.8,-377.9,-69.8,-361.7,-62.3,-359.8,-40.4,-366.5,-40.2,-365.8,-40,-378.2,-48.5,-381.2,-48.7,-386.9,-53.5,-386.9,-53.6,-380.8,-67.2,-390.6,-67.3,-391.3,-71.7,-392.9,-88.7,-387.8,-98,-383.3],[8.2,-327.9,216.9,-324.1,223.7,-318.6,220.6,-319.3,219.2,-317.4,218.1,-320.5,212.8],[9.6,-135.7,-88.3,-138.1,-85.7,-139.6,-87.1,-145.5,-80.6,-141,-76.5,-140.5,-77,-133.6,-70.8,-131.3,-73.3,-130.8,-72.9,-130,-73.7,-129,-72.8,-124.8,-77.5,-125.5,-78.2,-125.1,-78.7],[7.9,-298.5,149.4,-296.7,157,-295.6,156.7,-295.3,158,-291.9,157.1,-292.1,156.3,-290,155.8,-289.7,156.9,-285.9,156,-286.1,155.1,-282.8,154.3,-284.8,146],[12.6,-187.4,224,-202.5,229,-197.9,242.7,-182.8,237.7],[12.9,286.1,-286.8,281.7,-284.8,282.8,-282.3,278.7,-280.4,287.8,-260.7,296.4,-264.6],[10.3,-202.6,184.7,-203.8,182.4,-218.5,189.7,-213.9,198.9,-200.9,192.4,-204.3,185.6],[10.6,-135.2,217.9,-147.6,221,-146.4,225.5,-147.4,225.7,-146.5,229.2,-144.9,228.9,-144.7,229.9,-139.9,228.7,-140.2,227.6,-137.7,227,-137.9,226.2,-135.9,225.7,-135.3,228.3,-132.8,227.7],[9.9,-112.1,187.8,-107.8,197.3,-97.2,192.5,-97.7,191.4,-97,191.1,-98.1,188.7,-98.9,189.1,-101.3,183.6,-104.7,185,-104.9,184.6],[11.9,-280.4,89.5,-282.5,82.7,-293.1,86,-291,92.8],[13.4,-281.2,-70.8,-277.5,-74.4,-283.3,-80.4,-287,-76.8],[9.5,-183.9,1.6,-182.8,5.1,-183.8,5.7,-181.5,13.2,-172.9,10.5,-176.3,-.7],[12.2,-127.4,108,-132.5,91.8,-140.3,94.2,-135.3,110.4],[10.7,40.3,-159.2,29.3,-157.2,29.5,-156.3,28.2,-156.1,29,-151.6,37.2,-153,37,-154,41.1,-154.8],[15.4,-209.3,-117.2,-198.9,-122.7,-201.8,-127.9,-191.8,-133.2,-200.5,-149.5,-210.8,-144,-209.4,-141.3,-210.6,-140.6,-209.2,-138,-217.9,-133.4],[26.6,11.7,-110.8,12.7,-108.7,12.2,-108.5,17.7,-98.8,23.4,-109.2,28.4,-111.6,29,-113.7,26.3,-118.7],[6.7,-36.9,-78.2,-31.8,-73.2,-29.3,-75.8,-29.7,-76.1,-27.8,-77.9,-32.6,-82.5],[24.4,24.7,-88.4,32.2,-93.2,27.9,-99.9,20.4,-95.2],[7.7,-127.8,-149.3,-131.6,-155,-139.6,-149.7,-139.1,-148.9,-140.9,-147.7,-141.5,-148.5,-148.2,-144,-144.4,-138.2,-142.2,-139.6,-141,-137.7,-136.9,-140.5,-138.1,-142.4],[8.7,-74,-47.9,-77,-51,-85.2,-43,-84.8,-42.6,-85.5,-41.9,-82.9,-39.2],[10.4,-41.3,-1.4,-42.6,-1.4,-44.5,.9,-44.8,2.2,-38.5,7.4,-35.4,3.7],[9.7,176,-160.2,177.6,-156.9,175.8,-156.1,177.2,-153.2,176.3,-152.8,179,-147.1,180.1,-147.5,180.4,-146.7,183.8,-148.3,183.4,-149.1,190.8,-152.6,190.6,-153,193,-154.2,189.5,-161.6,187.5,-160.7,185.6,-164.7],[9.4,-167.3,146.3,-179.1,151.6,-177.5,155.1,-176.7,154.8,-173.1,162.7,-165.4,159.2,-165.7,158.6,-162.5,157.1],[-9999,-291.5,216.8,-282.9,213.5,-283.6,211.7,-282.5,211.2,-285.4,203.8,-295.1,207.6],[11.2,-140.7,95.7,-142.8,88.6,-153.1,94,-150.5,98.8],[7.5,148.6,-364.2,153.1,-349.6,162.2,-352.4,157.9,-366.3,153.9,-365,153.7,-365.8],[9.6,-143.1,87.6,-145,83.8,-145.8,84.1,-146.2,83.2,-149.1,84.6,-148.9,85,-157.4,89.1,-155.2,93.5],[7.3,-136.8,175.3,-143.7,176.6,-142,185.1,-137.9,184.3,-138.2,182.6,-136.8,182.3,-137,181.7,-135.6,181.4],[20.7,.7,-275.4,-1.6,-283.5,-15.2,-279.5,-12.9,-271.5],[13,-131.8,40.3,-130.1,42,-131.6,43.6,-130.6,44.6,-117.1,30.4,-119.9,27.7],[5.4,53.6,-328.7,47.4,-327.5,48.6,-320.8,54.8,-322],[9.4,-181.4,219,-178.4,226.8,-175.4,225.6,-178.4,217.8],[4.8,-298.7,166.9,-295.3,166.1,-297.2,158.4,-300.6,159.2],[8.8,-343.3,-85.7,-341.1,-77.9,-336.2,-79.2,-338.3,-87],[17.1,194,-203.6,190.1,-207.5,190.7,-208.1,188.9,-209.9,188.2,-209.2,185.5,-211.9,178.4,-204.8,174.5,-208.6,161.6,-195.6,166.5,-190.7,164.8,-189,172.1,-181.8],[9.9,240.1,-228.5,238.1,-232.9,237,-232.4,236.2,-234.1,227,-229.8,229.8,-223.8],[7.9,-86.3,-4.8,-78.7,2.2,-70.1,-7.2,-69.1,-6.2,-65.8,-9.8,-67,-10.9,-64.9,-13.2,-72.3,-19.9],[12.6,-365.6,26.4,-367.6,26.8,-367.8,25.7,-381.1,28.6,-379.3,36.8,-381.5,37.3,-379.2,47.9,-377.8,48.8,-362.4,45.3,-361.4,44],[10.1,-28.1,-243.6,-26.8,-240.7,-18.7,-244.5,-20.1,-247.4],[12.6,-320.5,3.1,-310.5,.5,-313.4,-10.7,-314.8,-10.3,-316.6,-17.5,-325.3,-15.2],[6.9,-13.8,-255,-17.7,-253.4,-17,-251.7,-19.4,-250.8,-16.2,-242.8,-10,-245.3],[13.8,-12,-242.3,-25,-236.4,-14.6,-213.6,-1.6,-219.6],[8.5,-180.3,72.3,-187.5,78.1,-184.5,81.8,-177.3,76],[7.3,-44.6,-22.2,-41.5,-19.4,-36.9,-24.5,-40,-27.3],[15,-162.6,-134.4,-159.9,-130.8,-146.8,-140.5,-149.4,-144.1],[8.1,-235.8,-45,-234.7,-42.3,-228.1,-44.9,-229.1,-47.6],[13.6,-249.1,224.9,-248.5,224.7,-252,216.5,-252.8,216.8,-253.2,215.9,-260.7,219.1,-260.4,219.8,-265,221.7,-265.5,220.4,-267.8,221.4,-267.5,222.1,-270.6,223.4,-271,222.6,-273.1,223.5,-272.5,225.1,-277.1,227,-277.4,226.4,-284.8,229.6,-284.4,230.6,-285.8,231.2,-283.6,236.5,-284.9,237,-283.4,240.6,-282.3,240.1,-280.1,245.4,-280.8,245.7,-279.6,248.5,-280.8,249,-278.5,254.5,-279.2,254.8,-277.6,258.6,-278.2,258.9,-276.7,262.3,-273.2,260.8,-272.7,262,-267.5,259.8,-268,258.7,-266.5,258.1,-267,257,-262.3,255,-261.8,256.4,-258.3,255,-258.8,253.8,-258.1,253.5,-258.7,252.1,-253.4,249.9,-253.8,248.9,-252.4,248.3,-255.3,241.3,-253.1,240.4,-253.6,239.1,-248.3,236.8,-247.7,238.2,-245,237,-245.5,235.7,-244.8,235.4],[10.1,-237.1,312.1,-245.1,310,-245.6,312,-246.7,311.7,-247.3,314.2,-244.9,314.8,-245.3,316.3,-243.1,316.9,-243.4,318,-239,319.1],[9.5,-88.6,-118.9,-93.2,-114.7,-89.7,-110.8,-85.1,-115],[11.8,-51.3,72.4,-45.5,79.4,-42.3,76.8,-48.1,69.8],[10.1,-238.1,310.6,-233.9,304.5,-240.5,300.1,-241,301,-244,299,-248.5,305.7,-245.2,308,-244.2,306.5],[9.3,-175.3,49.1,-180.8,53.8,-176.6,58.7,-175.1,57.3,-171.8,61.2,-170.2,59.7,-169.7,60.3,-167.3,58.3],[12.8,265.8,-224.7,273.4,-209,279.9,-212.1,275,-221.4,277.2,-222.8,274.5,-228.7],[10.2,-271.8,-74.5,-266.4,-77.8,-268.8,-82.1,-270.1,-81.4,-271.7,-83.9,-276,-81.3],[11.2,-112.3,205.9,-116.6,207.5,-114.5,213.3,-110.1,211.7],[10.5,-174.7,193.2,-165.5,188.8,-169.8,179.9,-177.5,183.6,-176,186.7,-177.5,187.4],[7.8,-334.6,77.3,-327.6,75.5,-327.8,74.6,-325.3,74,-326.8,68,-327.5,68.1,-327.8,66.9,-335.1,68.7,-335,69.2,-336.6,69.6],[11.5,-235.2,236.8,-240.2,226.1,-244,227.9,-239,238.6],[2.9,-137.2,151.4,-135.5,150.8,-137.4,145.8,-137,145.7,-138.6,141.4,-140.6,142.1],[34.8,-269.8,-270.5,-249.7,-239.4,-239.6,-245.9,-247.1,-257.5,-244.5,-259.1,-250,-267.5,-252.3,-266,-259.6,-277.2],[14.6,-216.3,91,-219.7,71.9,-220.5,72.1,-220.6,71.6,-221.3,71.7,-221.4,71.2,-222.2,71,-229.9,72.5,-229.8,73.1,-232.1,73.5,-231.7,75.2,-233.4,75.6,-232.4,80.3,-235.2,80.8,-234.4,85.1,-234.9,85.2,-234.6,87,-242.2,88.6,-239.2,96.2,-217.1,91.8,-217.2,91.1],[10.5,-297.2,-98.7,-302.4,-94.4,-300.1,-91.4,-299.7,-91.7,-298,-89.7,-293.6,-93.4,-294.2,-94,-293.6,-94.4],[10.9,-115.4,-114.5,-121,-108.5,-114.7,-102.6,-109.1,-108.6],[13.2,-175.6,134,-171.7,132.5,-174.3,125.8,-178.1,127.3],[19.5,94,-274.3,92.3,-286.3,83.3,-285,82.9,-287.6,77.6,-286.9,77.7,-286.4,72.3,-285.6,74.2,-271.5],[9.6,-84.9,-113.7,-89.3,-110.2,-86,-106.3,-81.7,-109.8],[8.1,-23,-32.4,-30.1,-38.3,-36.7,-30.4,-29.6,-24.5],[8.6,-178.5,-10.4,-179.4,-14.3,-180.7,-14,-180.9,-14.9,-188.1,-13.2,-187,-8.4],[27.5,-30.4,-213.3,-40.6,-207.5,-39.3,-203.3,-37.5,-201.9,-35.9,-198.7,-20.4,-212.6,-23,-217.6,-27.7,-214.8,-28.7,-216.4,-30.9,-215.2],[8.7,-211.9,-18.7,-214.3,-23.9,-225.2,-19],[11.5,-198.1,-110,-194.8,-105.1,-187.9,-109.7,-188.2,-110.1,-187,-110.9,-190.1,-115.5],[10.5,-115.4,-125.9,-119.9,-133.9,-126.8,-129.2,-121.3,-120.7],[6.4,-12.3,-28.5,-6.6,-34.4,-14.2,-41.6,-15.5,-40.3,-22.3,-46.7,-26.6,-42.1],[9.2,245.3,-281.1,243.8,-280.5,238.1,-274.9,238.6,-273.7,247,-276.9],[10,-288.5,-111.1,-295.3,-107.1,-291.3,-100.3,-290.6,-100.7,-290.3,-100.3,-284.1,-103.9],[12.4,-367.2,100.5,-371.6,80.2,-382.9,82.5,-382.7,83.4,-386.4,84.2,-386.7,82.9,-402.6,87.6,-397.1,99,-385.1,104.4],[16.1,-229.9,-195.2,-217.9,-202.7,-234,-228.2,-246.8,-220.2,-244.3,-216.2,-245,-215.7,-241.9,-210.7,-239.7,-212.1,-237.8,-209,-238.4,-208.7],[11.8,-240.6,104.3,-256.7,110.1,-253.6,118.7,-237.5,112.9],[8.2,-265.5,-89.3,-262,-91.8,-272.1,-105.8,-274.2,-104.3,-274.8,-105.2,-278.1,-102.8,-276.1,-99.6,-276.7,-99.1,-273.1,-94.2,-272.5,-94.7,-268.2,-88.7,-266.1,-90.2],[9.2,-316.6,-35.9,-308.3,-38.2,-309.4,-42.9,-313.5,-41.9,-313.9,-43.3,-318.2,-42.2],[15.2,385.3,-49.1,388.8,-38.9,407.8,-45.3,404.3,-55.5],[11.6,128,-357.8,124.9,-357,125.7,-353.9,124,-353.5,124.7,-350.8,124.1,-350.7,125,-347.2,130.4,-348.6],[8.9,-136.9,-66.9,-129.9,-55.9,-125.1,-59,-125.9,-60.2,-123.1,-62,-128.4,-70.3,-131,-68.7,-131.8,-70.1],[14.6,-279.7,1,-298.1,5.8,-297,9.1,-298.8,9.8,-293.2,29.9,-292.1,29.6,-292.5,27.9,-283.5,25.4,-284,23.4,-282.3,23,-280.8,21.3,-280.9,20.2,-274.6,18.4],[9.1,-340.5,42.1,-336.1,41,-338,32.9,-342.5,34],[9.9,189.8,-261.2,188.4,-265,177.8,-261,179.2,-257.3],[8.5,-140.8,193,-130.5,190.8,-131.5,186.1,-141.8,188.2],[11.2,86.2,-143.5,89.2,-144.7,88.7,-145.8,94,-148,87,-165.3,78.7,-161.9],[13.2,-23.5,-294.2,-26.1,-300.2,-27.8,-302.1,-33,-299.7,-33.5,-300.6,-37.3,-298.8,-36.8,-297.9,-39.3,-296.7,-35.7,-288.4],[7.1,-50.1,-109.4,-57,-115.8,-65.1,-107,-58.2,-100.6],[9.6,-136.1,-196.6,-133.7,-193.1,-124,-199.8,-126.4,-203.3],[10.4,-288.9,-99.2,-285.2,-92.7,-279,-96.3,-282.7,-102.8,-282.2,-103.1,-282.7,-103.9,-287.6,-101,-287.1,-100.2],[10.7,-360.2,-135.2,-365.8,-140,-368.1,-137.4,-362.6,-132.6],[9.1,-210.3,-21.4,-201.8,-25,-204.6,-31.4,-208.1,-29.9,-207.1,-27.7,-212.1,-25.5],[9.3,-99.6,-54.6,-103.7,-50.2,-101.2,-47.8,-100.6,-48.3,-98.6,-46.4,-98.2,-46.8,-95.6,-44.3,-92.4,-47.7],[11.4,-360.1,-77.2,-356.6,-64.4,-353.4,-65.3,-353.1,-64.5,-347.9,-66,-348.1,-66.6,-341.7,-68.3,-345.3,-81.2],[9.8,158.1,-255.4,169.7,-260,166.1,-269.2,162.2,-267.7,162.9,-266,155.1,-263],[16.6,-267.8,-207.9,-272.5,-204.9,-271.3,-203.1,-275,-200.7,-265.3,-185.9,-257,-191.4],[9.9,233.6,-242.2,228.9,-240.4,231.9,-233,236.5,-234.8],[8.1,-131,-115,-136.5,-123.2,-147.8,-115.6,-144.9,-111.2,-144.6,-111.5,-141.9,-107.6],[8.7,-353.3,-47.3,-351.6,-41.1,-342.4,-43.4,-341.9,-41.7,-333.4,-44.1,-335.6,-52.2],[9,-255.6,280,-264.8,282.7,-265.4,280.6,-270.7,282.1,-267.5,293.2,-266.8,293,-265.9,295.9,-258.9,293.8,-258.2,296.5,-253.4,295.1,-253.7,294.2,-253.3,294,-255.6,285.9,-254,285.4],[5.2,128.9,-140.6,140.8,-143.4,140.3,-145.8,128.3,-143.1],[10.8,-210.6,-114.5,-207.4,-107.8,-198,-112.1,-201.3,-119.1],[21.4,-6.1,4,-19.3,-7.9,-21.2,-5.6,-21.9,-6,-23.2,-4.2,-22.7,-3.8,-25.7,-.5,-22.1,2.4,-21.1,1.4,-19.3,3.1,-26.2,10.6,-29.6,9.9,-30.1,11.1,-27.4,13.8,-28,14.4,-29,13.6,-33.5,18.7,-32.5,20.1,-37.9,26.4,-39.7,25.2,-36.4,21.5,-37.4,20.5,-35.9,18.6,-41.1,14.3,-54.3,29.1,-45.4,36.5,-46.1,37,-43.4,38.7,-45,40.9,-36.6,47.8,-29.8,40.2,-23.6,32],[9.7,-331.1,-82,-326.3,-83.3,-328.6,-91.6,-332.8,-90.5,-332.3,-88.4,-332.8,-88.3],[11,210.2,-296.1,204.1,-293.7,206.4,-287.8,212.6,-290.2],[7.9,198.5,-205.7,200.4,-201.5,206.1,-204.1,204.2,-208.2],[13,-246.4,-14.7,-251.5,-13.4,-251.3,-12.6,-260,-10.2,-257.2,0,-249.3,-2.1,-249.1,-1.2,-243.2,-2.8],[10.7,-133.7,277.4,-132.7,282.4,-127.2,281.3,-127.6,279.2,-126.1,279,-126.6,276],[7.7,5.7,-9.7,-.5,-15.3,-4.6,-10.8,-1.5,-8,-2.1,-7.3,1.2,-4.8],[14.3,-19.9,-402.8,-19.4,-399.9,-17.8,-400.3,-15.6,-390.6,-13.6,-389.2,-11.6,-389.4,-11,-387.3,-5.8,-388.7,-6.9,-392.9,3.1,-395,2.9,-397.2,5.4,-397.8,3.8,-404.6,-8.4,-402.2,-9.2,-405.6,-6.7,-406.1,-8.6,-414.4,-22.7,-411,-21.2,-402.5],[20.3,-10.6,-298.7,-10.7,-299,-1.7,-300.9,-.8,-304.4,-2.7,-311.7,-5.6,-314.6,-20.3,-310.8,-21.1,-307.2,-19.2,-300.2],[11.5,-94.4,-115.3,-89.5,-119.7,-90.1,-120.3,-89.2,-121.1,-91,-123.1,-92,-122.3,-93.6,-124,-92.7,-124.9,-98.4,-131.1,-99.3,-130.3,-99.8,-130.9,-103.8,-127.2,-103,-126.4,-103.8,-125.7],[8.6,212.4,-202.9,216.2,-196.4,219.3,-198.1,215.9,-203.9,214.8,-204.3],[10.2,-243.5,-38.5,-247.3,-47.7,-250.7,-46.3,-246.9,-37.1],[14.6,60.5,23.1,50.3,28.7,51,30,50.6,44.9,57.3,41.3,57.7,42,67.8,36.5],[9.8,192.9,-249.4,189.6,-258,179.4,-254.1,181.3,-249.2,177.7,-247.8,180.7,-240,184.3,-241.4,183.6,-243,187.3,-244.4,186.7,-245.7,190,-247,189.5,-248.1],[9.6,-37.2,-226.3,-35.3,-222.9,-27.5,-227.3,-29.5,-230.6],[8.2,26,-363.1,25.6,-363.1,25.4,-367.4,16,-366.9,16.4,-361.2,17,-361.2,17.1,-359.8,19.3,-359.9,19.7,-353.8,21.2,-353.9,21.2,-353.4,26.6,-353.7],[9.2,-113.4,214.1,-123.3,218,-120.9,224,-116.8,222.4,-116.3,223.7,-112.3,222.1,-112.5,221.4,-109.3,220.1,-111.1,215.7,-112.6,216.2],[10.6,28.1,-259,26.4,-264,-2.9,-255.9,-1.2,-250.5],[14.6,233.3,-187.2,234.5,-185,236.1,-185.9,237.7,-183,238.7,-183.5,241.8,-178,245.1,-179.9,240.3,-188.1],[9.1,-48.5,5.6,-49.1,6.2,-49.7,5.5,-52.1,7.8,-45.4,14.6,-42.5,11.8],[10.7,-340,-35.7,-343.5,-34.9,-343.1,-33.2,-347.8,-32.1,-345.7,-23.4,-337.6,-25.3],[9.2,-43.3,3.9,-44.1,4.8,-46.5,2.4,-48.2,2,-49.9,3.7,-42.3,11.3,-39.1,8.1],[12,132.9,-349.7,137.3,-350.8,135,-359.9,130.6,-358.8],[9.8,-213.1,-51.2,-219.8,-48,-216.2,-40.5,-209.6,-43.8],[8.5,-78.3,-37,-71.8,-30.9,-57.4,-46.6,-63.9,-52.6],[14.9,-259.9,-.9,-272.1,2.5,-267.8,17.9,-255.6,14.5],[21.3,-283.6,-226,-270.1,-234.3,-271.5,-236.5,-258.9,-244.3,-259.9,-245.8,-258.5,-246.6,-261.5,-251.4,-263,-250.5,-278.4,-275.5,-304.4,-259.5],[10.4,-347.8,-59.5,-356.3,-57.2,-353.8,-47.9,-345.2,-50.3],[9.5,-131.4,-128.3,-122.7,-134.3,-125.3,-137.9,-124.1,-138.7,-128.5,-145,-134.9,-140.6,-134.4,-139.8,-136.7,-138.2,-137.2,-138.8,-142.6,-135,-138.3,-128.8,-136.2,-130.2,-134.3,-127.5,-131.9,-129.1],[8.3,121.4,-338.6,114,-338.2,114.3,-332.6,121.8,-333.1],[8.7,-117.4,-80.9,-124.8,-73.6,-117.9,-66.6,-110.5,-73.9],[9.1,-238.7,-11.7,-236.5,-5.7,-232.7,-7.1,-232.4,-6.5,-229.5,-7.6,-228.3,-4.3,-224.1,-5.9,-227.7,-15.7],[8.3,-283.5,184.2,-287.5,185.7,-287.4,186.3,-289.9,187.2,-289.1,189.3,-291.8,190.3,-289.7,195.8,-288.6,195.4,-287.2,199.2,-286.8,199,-286.5,199.7,-283.5,198.6,-283,199.9,-279.3,198.9,-279.5,198.5,-278.4,198.1],[10.4,-214.3,37.7,-218,30.6,-224.8,34.1,-223.7,36.1,-224.8,38.7,-222.4,39.7,-221.5,41.4],[7.3,-203.7,63,-206.3,59.9,-215.3,65.4,-212.3,70.1],[8.3,-264.2,-48.4,-260.5,-36.7,-254,-38.7,-255.5,-43.4,-256,-43.3,-256.7,-45.5,-257.6,-45.2,-259.1,-50],[11.9,-381,-84.1,-384.8,-82.3,-381.2,-74.4,-377.4,-76.1],[6.5,-27.5,-226.6,-35,-222.5,-31.2,-215.6,-27.7,-217.5,-28.4,-218.8,-24.4,-220.9],[11.5,-163.6,190.9,-172.9,195.2,-169.4,203.2,-159.8,200],[9.6,-376.8,77.1,-373.1,76.1,-372.6,77.9,-368.6,76.8,-370.7,67.1,-373,67.7,-374.2,63.3,-377.7,64.3,-378.3,62.2,-374.8,61.3,-376.2,56.3,-382,57.9],[4.9,-111.9,-348.1,-101.8,-353.7,-102.7,-355.6,-113,-350.1],[10.2,169.7,-280.5,172.1,-273.7,175.3,-274.9,175.1,-275.4,177.3,-276.2,175,-282.4],[16.1,-193.8,95.4,-185.9,88.3,-202.5,69.8,-208.7,75.4,-207.8,76.4,-209.5,78],[5.5,-5.4,51.1,1.2,54.8,12.1,35,7.1,32.3,12.6,22.4,10.9,21.5],[5.4,-280.6,157.9,-292.2,160.9,-290.1,168.9,-282.5,167,-282.2,168,-278.3,166.9],[10.2,177.6,-265.4,177.8,-265.1,176.9,-264.7,178.1,-261.4,188.3,-265.2,187,-268.9],[3.8,142.9,-23,153.5,-47.3,133.8,-41.9,139.1,-32.7,141.3,-33.6,137.9,-40,149.5,-43.3,140.4,-23.9],[15.1,69,-117.2,69.6,-116.8,69.8,-115.3,80.1,-129.8,80.9,-132.3,74.5,-131.5,74.1,-132.9,66.6,-131.8],[10.3,-167.2,97.1,-163.9,102.7,-157.8,99.2,-161.1,93.5],[14.1,.6,-17.7,1.8,-19.1,8.7,-14.7,13.9,-21.8,-1.4,-32.6,-6.8,-24.7,-3.2,-22.6,-3.7,-22],[11.8,23.9,-164,12.3,-161.8,13.1,-157.5,17.3,-158.2,17.7,-156.1,24.2,-157.3,23.4,-162.1,24.2,-162.3],[9,-222.7,-13.9,-221.4,-10.8,-220.7,-11.1,-219.9,-9.2,-209.7,-13.4,-211.8,-18.4],[9.8,215.7,-189.5,217.6,-185.9,223.6,-189.1,221.6,-192.7],[6.7,44.7,-81.1,48.5,-78,53.1,-83.7,52.7,-84,53.4,-84.8,52,-85.9,51.5,-85.3,49.4,-87],[10.3,-171.2,203.7,-184,208.9,-181.3,215.8,-173,212.5,-172.8,213.1,-168.7,211.4,-168.9,210.9,-168.3,210.7],[11,-64.9,2.1,-59.2,7.5,-55.3,3.5,-58.1,.8,-57.7,.4,-60.6,-2.4],[10.2,-274.2,80,-279.9,81.9,-278.8,85.3,-279.6,85.5,-274.9,100,-268.6,98],[13.9,11.1,308.9,5.3,309.3,-1.1,306.1,-10.2,322,-12.6,320.6,-13.7,322.8,-5.7,336.7,-3.2,324.7,-3.7,324.4,-2.3,319.1,10.3,313.6],[7.2,-17.3,-196,-10.1,-199.4,-14.2,-206.6,-16.6,-205.3,-16.4,-204.8,-20.7,-202.6],[7.1,-16.8,-297.5,-19.2,-300.2,-19.5,-301.4,-25,-299.7,-23.4,-295.7],[9.3,-95.9,-14.5,-88.9,-7.8,-78.2,-19,-85.2,-25.7],[10.9,-310,251.9,-307.4,256.3,-299.7,253.5,-300.2,252.9,-299.2,252.4,-302,247],[10,-305.7,257,-305.1,259.4,-297.5,257.4,-298.1,255],[13.5,9.7,-404.5,7.7,-404.3,8.4,-395.4,9.8,-395.5,10,-392.8,11,-392.9,11,-392.1,24.1,-393.1,23.7,-398.6,23,-398.5,22.8,-400.6,23.6,-400.7,23.3,-405.9,9.7,-405],[11.9,-280.4,-39.4,-275.8,-40.6,-276,-41.4,-275,-41.7,-276.3,-46.4,-277.3,-46.2,-278.9,-52.2,-282.2,-51.4,-282.1,-50.7,-284.6,-50,-282.9,-43.8,-281.7,-44.1],[8.9,-141.2,-22.4,-146.7,-19,-145.6,-17.3,-146.4,-16.8,-147.7,-18.9,-154.5,-14.7,-151.2,-9.3,-143.1,-14.3,-139.9,-9.3,-137.7,-10.7,-136.8,-9.3,-134.2,-10.9],[11.1,.6,-17.7,2.5,-15.7,1.6,-14.8,5,-11,8,-15.1,1.8,-19.1],[13.1,-259.8,-3.3,-262.5,-10.7,-272.7,-6.8,-270.1,.4],[15.2,-27,-407.1,-34.9,-405,-34,-402.2,-35.9,-401.7,-33.4,-392.9,-31.3,-393.5,-30.7,-391.3,-32.5,-390.6,-30.5,-383.6,-21.8,-385.9],[14.6,-168.8,-172.1,-175.7,-167.3,-186.4,-159.5,-186.3,-159.2,-192.8,-154.4,-190.9,-151.7,-191.2,-151.5,-187.2,-146.1,-182,-139,-179.1,-134.7,-179.5,-134.3,-178.1,-132.2,-178.8,-131.6,-176.9,-129,-171.8,-132.6,-171.4,-132,-166.8,-135.1,-167.2,-135.9,-165.3,-137.3,-166.3,-138.9,-156,-146.2,-152,-149,-151.2,-147.9,-140.6,-155.7,-139,-156.9,-138.2,-156.5,-136.3,-158.3,-142.9,-167.4,-154.4,-159,-155.2,-160.1,-153.9,-164,-151.8,-165.8,-152.9,-167.2,-152.5,-167.6,-156,-171.7,-156.6,-171.3,-161.2,-177.6],[10.4,24.7,-373.5,24.2,-380,9.2,-379.1,9.7,-371.1,13.9,-371.4,13.9,-372.8],[14.3,-296.1,61,-324,69.7,-318.8,86.9,-312.8,85.1,-313.2,83.5,-308,81.8,-307.4,83.7,-301.5,81.7,-302.1,80.2,-297.8,78.7,-297.1,80.8,-290.8,78.8],[3.7,-245,14.9,-245.9,11.1,-253.1,12.7,-252.2,16.6],[7.2,-182.7,127.5,-185.9,128.7,-182.9,136.3,-179.7,135.1],[9.2,-218.3,-55.5,-227.5,-71.2,-232.7,-68.1,-223.5,-52.5],[10.8,-242.1,67.1,-244.2,58.2,-253.8,60.4,-252,68.1,-244.8,66.4,-244.5,67.7],[12.1,-132.8,359.7,-134.6,364,-128.7,366.5,-128.4,365.6,-126.5,366.4,-125.1,362.9],[10.2,-304.8,236.9,-306.2,233.8,-318.3,239.3,-316.9,242.4],[12.2,-354.9,-137.8,-351,-133.2,-346,-137.4,-349.9,-142],[8.1,-246.5,-60.2,-248.1,-64,-249.3,-63.5,-250.9,-67.4,-260.3,-63.3,-257,-55.6],[10.9,-212.1,44.4,-214.1,39.7,-219.4,41.8,-218.8,43.1,-223.2,44.9,-221.8,48.3],[9.2,-120.5,191.5,-116.4,200.8,-108.4,197.1,-112.6,188],[12.3,-347.3,-60.5,-345,-52.1,-342.4,-52.8,-342.2,-52.2,-335.6,-54.2,-337.9,-63],[9.1,-237.9,21.2,-239.3,14.3,-251.3,16.6,-249.9,23.5],[11.9,-153.6,261.5,-144.7,259.7,-146.7,250,-155.5,251.7],[15.4,-230.8,193.5,-220.4,189.6,-223.1,182.6,-222.1,182.2,-224.3,176.4,-222.9,175.8,-221.6,179.2,-209.5,174.7,-215,160.2,-216,160.5,-216.8,158.4,-216,158.1,-218,153.6,-222.3,155.1,-222.1,155.6,-241.4,162.8,-239.2,168.8,-239.9,169.1],[10.5,-234.9,103.2,-233.4,111,-229.8,110.3,-231.3,102.5],[12.9,-298.3,175.7,-303.5,152.6,-309.2,153.9,-309.4,153.1,-316.5,154.7,-316.3,155.6,-322,156.9,-320.8,162.5,-323.4,163.1,-318.9,183.4,-309.2,181.2,-311,173.2,-309.7,172.9,-308.7,177.4,-305.5,176.7,-306.7,171.5,-305.3,171.2,-304,177],[8.6,-180.1,171.5,-176.6,169.7,-181.5,159.8,-185,161.5],[29.1,5.5,308.1,12.2,307.8,12.3,303.5,11.6,299.9,8,296.7,3.1,295.6,-1.8,296.8,-4.4,299.1,-5.4,298.9,1.6,277.5,7.1,268.4,1.5,265.2,6.3,254.2,2.2,251.4,2.9,238.5,-1.1,238.9,-6,246.7,-9.6,245.1,-14.7,260.1,-24.2,274,-22.1,274.8,-30.7,287.7,-19.5,293.4,-21.5,297.3,-33.5,290.5,-47.4,318.9,-44.1,320.2,-57.5,343.1,-62.7,340.4,-82.7,372.5,-70,379.4,-69.6,390.4,-58.9,389,-47.8,393.9,-45.5,387.6,-30.5,387.1,-28.9,397.5,-26.5,395.6,-24.5,398.1,-19.6,387.3,-13.5,369.1,-5.7,336.7,-13.7,322.8,-12.6,320.6,-10.2,322,-5.8,312.2,-9.3,310.2,-6.4,304],[25,-184.5,-270.3,-156.9,-288.3,-170.5,-308.5,-196.9,-292.4,-194,-289.4,-196.2,-288.1],[10.1,9.6,58.1,4.3,55.1,-11.9,81.3,-9.2,83.2,3.3,70.1],[30.6,156.2,-307.3,145.9,-305.3,145.1,-309.3,139.5,-308.2,144.6,-282.4,160.5,-285.6],[8.2,-298,149.2,-286.6,146.3,-287.3,143.5,-285.3,143,-285.5,142.4,-284.6,142.2,-285.2,139.7,-286.2,140,-286.3,139.3,-299.7,142.7],[11.8,159.9,-175.2,157.2,-186.7,145.1,-183.9,145.6,-182,141.9,-181.1,142.6,-178.4,137.9,-177.3,138.2,-176.2,136.8,-175.8,138.1,-170.2],[8.7,-73.5,-125.8,-75.8,-128.4,-83.5,-121.7,-81.1,-119],[13.8,37.5,-96.4,42.7,-99.8,37.7,-107.4,32.5,-103.9],[10,-239.5,-40.5,-241.6,-46.4,-242.3,-45.8,-243.6,-49.5,-246.4,-48.5,-243.1,-39.3],[10.1,-320.8,-24.9,-319.3,-19.7,-305.6,-23.7,-307.1,-28.9],[8.7,255.9,-291.1,254.3,-290.5,254.6,-289.9,253,-289.2,256.4,-281,259.6,-282.3],[32.8,-242.1,-171.2,-242.7,-170.8,-235.5,-159.6,-202.8,-180.4,-213.3,-196.7,-217.6,-194,-218.2,-195.1,-223.1,-191.9,-224.1,-193.4,-244.2,-180.5,-239.4,-172.9,-240.6,-172.1],[11.3,-180.9,188.7,-193.2,193.8,-192,196.7,-190.3,196,-189,199,-178.4,194.5],[9.4,-253.1,11.8,-240.9,8.9,-243.1,-0,-243.5,.1,-243.9,-1.6,-255.7,1.2,-255.5,2.4,-256.3,2.6,-254.5,10.1,-253.6,9.9],[42.1,-132.6,-368.9,-124.5,-354.3,-120.7,-356.4,-119.8,-360.6,-119,-361.1,-120.5,-363.6,-115.8,-366.2,-115.4,-369.2,-119.4,-376.6,-120.4,-376,-121.7,-378.3,-126.7,-375.6,-126.4,-374.9,-129.6,-373.1,-128.5,-371.2],[14.7,107.6,-376.7,111.8,-365.9,121,-369.2,117.1,-379.7,116.1,-380.4,113.5,-379.4,112,-383.1,109.1,-381.9,110.8,-378.2],[13.1,58.4,-223.3,56.7,-229.8,46.1,-227.2,46.4,-225.8,45.5,-225.6,46.5,-221.9,47.1,-222.1,48.1,-218.2,49.7,-218.6,52.5,-208,61.2,-210.4,57.7,-223.1],[3.1,-197.9,-162.7,-193.9,-156.8,-190.7,-159,-194.7,-164.9],[8.7,-213.2,-35.1,-216.2,-33.7,-213.8,-28.7,-210.8,-30.1],[12.4,-107.1,203.5,-111.9,205.2,-109.5,211.9,-104.7,210.2],[7.3,123.2,-341,124.8,-331.4,131.4,-332.5,131.5,-331.5,135.2,-332.1,133.9,-339.8,133.1,-339.7,132.7,-342.6],[7.5,-216.4,-89.9,-214.2,-84.9,-206.7,-88.2,-208.9,-93.2],[11,-223.4,-37,-217.1,-40.1,-222.7,-51.3,-229,-48.2],[7.1,-239.3,52,-241.2,43.5,-255.2,46.6,-252.8,57.8,-243.5,55.8,-244.1,53],[8.6,-127.9,-128.4,-134.5,-123.8,-132.2,-120.5,-132.9,-120,-129,-114.4,-121.8,-119.4],[8.7,-238.7,-126.5,-243.5,-123.9,-236.3,-110.6,-233.1,-112.3,-233.4,-112.8,-232.7,-113.1,-233.9,-115.3,-232.9,-115.8],[6.6,-371.8,-6,-372.8,-9.8,-374.3,-9.5,-375.2,-13,-389.5,-9.5,-387.7,-2.1],[9.1,-121.3,178.9,-117.1,187,-112.8,184.7,-112.3,185.7,-103.2,180.9,-108,171.9],[11.2,-94,-112.2,-99.8,-106.7,-88.6,-94.8,-83.6,-99.5,-84.1,-100.1,-83.3,-100.9],[9.4,-148.5,-185.9,-151.5,-183.6,-145.4,-175.7,-142.6,-177.9,-145,-181,-141.5,-183.7,-142.7,-185.3,-146,-182.7],[21.3,130.8,120.4,140,120.3,139.9,111.3,130.7,111.4],[12.2,-307.7,-100.2,-302.9,-94.7,-296.8,-99.8,-299.4,-103,-301.5,-101.2,-303.5,-103.7],[9.5,105.5,-354.9,105.9,-348,112.1,-348.5,111.6,-355.3],[18,-177.6,102.2,-184,106.7,-177.1,116.5,-175.8,115.6,-173.7,118.6,-166.8,117.4],[10.3,4.1,-271.4,.7,-270.4,2.2,-265.3,5.6,-266.3],[6.9,39.3,-288.7,39.7,-284.7,45.4,-285.4,45,-289.3],[5.4,-19.7,-380.7,-16.5,-381.4,-16.8,-382.8,-14.6,-383.3,-15.7,-388,-20.1,-387,-19.9,-385.9,-20.9,-385.7],[14.2,174.1,-132.6,166.9,-130.8,167.3,-128.7,156,-126,157.8,-118,176.3,-122.1],[11.6,-104,86.7,-105,87.5,-112.1,79.6,-120.3,87.1,-116.7,91.2,-115.4,90,-108.1,98.2,-106.9,97.2,-104,100.5,-97.1,94.3],[17.8,-192.6,319.9,-181.5,323.5,-173.9,300.5,-185.2,296.9,-186.2,299.9,-188.1,299.3,-189.9,304.9,-194.4,303.4,-198.5,315.8,-194.4,317.2,-194.9,318.7,-192.4,319.5],[8.6,-131.9,175,-136.4,176,-134.4,185.2,-131.8,184.6,-132.2,183.2,-130.2,182.8],[12.6,-51.1,-113.6,-40.4,-119.3,-43.7,-125.5,-54.4,-119.8],[16,-278.5,138.2,-272.6,153.9,-274.4,154.5,-270.9,163.9,-251.4,156.6,-259,136.2,-267.4,128.5,-278.1,132.1],[11.5,-233,-314.3,-229,-317,-230.7,-319.5,-230.1,-319.9,-232.4,-323.3,-237,-320.2],[18.7,-68.3,93,-69.3,91,-67.7,90.2,-71.2,83.2,-76.6,85.9,-75.7,87.7,-78.9,89.3,-75.4,96.4],[8.9,-288.6,237,-297.3,240.4,-294,249.1,-288.5,247.1,-289.8,243.8,-286.5,242.5],[10.6,-291.8,-93.1,-297.2,-88.6,-292.8,-83.5,-288,-87.6,-290.6,-90.7,-290.1,-91.1],[7.7,252.5,-207.2,250.1,-211.8,251.7,-212.7,249.8,-216.2,246.1,-214.3,245.6,-215.4,244.1,-214.6,243.5,-215.7,242.3,-215.1,241.9,-215.8,235.1,-212.2,241,-201.1],[11.8,-198.9,-71.6,-207.1,-68.2,-204.6,-62,-202.9,-62.7,-201.8,-60,-195.2,-62.7],[11.8,-192.8,53.7,-197.2,43.9,-202.8,46.5,-198.4,56.2],[11,-153.1,223.6,-155.4,212.4,-167,214.7,-166.3,218.1,-161.9,217.2,-160.3,225],[20.4,-62.1,80.3,-52.5,95.8,-45,93.1,-42.6,89.1,-48.2,79.9,-51.7,81.2,-54.1,75.8],[9.7,-121.5,106.1,-116.1,104.1,-118.8,95,-121.9,92.8,-125,93.8]],rd:[[-110.5,103.9,-117.4,106,-115.6,112.3,-113.2,112.4],[-136.4,-2.5,-135.1,-5.1,-135.2,-8,-143.4,-7.9,-146,-6.4,-140.3,.7],[-287,80.5,-296.4,83.2,-295.5,86],[-251.9,166.1,-272.1,168,-269.9,172.9],[-18,237.7,-12.6,229.1,-34.5,217.2,-39.3,225.6],[-301.9,-185.5,-307.4,-181.8,-251.6,-141.3,-247.8,-147.5],[167.8,-177,164.1,-175.7,166.6,-169.6,170.5,-171.2,172.1,-173.5,169.7,-177],[-80.8,-101,-84.3,-97.4,-81.4,-94.3,-79.6,-95,-77.2,-97.4],[-140.4,119.1,-144.1,113.6,-156.1,115.8,-155.1,121.5],[-167,229.7,-167.9,225.8,-178.2,228.1,-177.3,232],[-154.7,31,-158.6,27.5,-169.2,36.1,-165.9,40.1],[43.5,51.7,44.8,44.3,44.9,37.6,49.2,21,35.5,-4.6,15,45.7],[-43.4,-267.5,-50.1,-281.1,-52.7,-279.7,-46,-266.3],[-292.6,.3,-294.5,-4.6,-295.9,1.5],[-259.8,-17.9,-265.4,-47.6,-270.3,-56.8,-271.4,-56.2,-267.2,-48,-263.9,-34.5,-261.8,-17.7],[-72,-104.9,-74.6,-107.1,-80.8,-101,-78.5,-98.6],[-167.6,9.6,-172.2,-7.7,-176.6,-6.4,-171.6,10.7],[-15.4,-57.5,-18.2,-59.5,-20.2,-57.2,-17.5,-55],[-186.2,138.6,-191.3,130.9,-194.2,133,-190.5,139.1,-176.4,168.8,-172.1,173.9,-161.2,194.4,-155.5,209.4,-151.3,208],[-78.3,-400.1,-82.2,-398.9,-83.7,-396.7,-82.4,-392.5,-75.5,-394.7],[-88.6,-87.5,-91.3,-90.4,-128,-55.9,-125.7,-51.4],[-16.3,-205.6,-17.8,-208,-33.9,-193.6],[-273.7,-55.6,-274.6,-59.2,-307.3,-49.8,-306.3,-46.5],[-71.1,158.8,-73.6,156.2,-75.7,157.9,-75,158.9,-73.9,161.6],[-112.8,-118.4,-115.3,-115.6,-91.3,-90.4,-88.6,-93.1],[-313.7,192.7,-319.6,190.1,-329.9,193.8,-329.9,194.5,-320.2,196,-318,197,-314.2,194.6],[-49.2,-18,-52.1,-20.2,-54.4,-17.4,-56.6,-17.5,-59.2,-14.4,-53.7,-8.6,-50.9,-11.6],[-363,-151.9,-436.1,-113.1,-435.6,-110.1],[-13.2,125.4,-27.2,116.2,-30.6,121.1,-16.1,130.5],[-150.9,209.3,-151.3,208,-155.5,209.4,-155.1,210.8],[-101.5,-311.2,-122.6,-299.8,-108.5,-274.6,-94.8,-253.3,-79.3,-273.3],[-180.4,226.2,-183.3,226.9,-181.2,235,-178.3,234.1,-177.3,232],[-82.9,343.1,-113.9,330.5,-120.6,350,-143.5,417.8,-125.3,426.5,-112.2,399.2],[211.5,-296.1,225.8,-265.4,220.4,-281.2,220.7,-282.4,214.9,-297.3],[278.4,-205.5,281.9,-211.1,245.4,-188,241.1,-196.3,228.2,-193.8,224.9,-195.4,220.5,-203.7,219.8,-203.4,216.9,-209.3,169.7,-177,172.1,-173.5,215.7,-204.9,223.7,-190.6,237.3,-192.3,239.5,-191.6,244.2,-184.3],[158.7,-198.2,154.1,-208,150.5,-207.2],[-358.2,-62.4,-364.8,-67.2,-366.5,-65,-365.8,-61.3,-362.7,-59.9,-357.2,-59.2],[192.7,-290.3,191.7,-293,189.9,-293.7,185.4,-292.7,186.8,-288.1],[-107.2,-124.7,-111.1,-128.1,-113.2,-125.8,-109.4,-122.2],[-228.7,-141.6,-232.6,-148.9,-241.2,-145.2,-237.5,-137.7],[-121.6,14,-136.4,-2.5,-140.3,.7,-125.4,17.2],[343.4,-256.6,341.2,-259.8,313.6,-241.1,315.8,-237.8],[35.5,-350.1,35.2,-353.8,28.3,-353.3,28.6,-348.5,34.1,-348.8],[-365.8,-61.3,-366.5,-65,-403.7,-58.1,-403,-54.4],[-56.6,-17.5,-71.2,-29.4,-73.4,-27.2,-92.4,-44.1,-112.4,-25.8,-110.6,-23.6,-59.2,-14.4],[-250.6,328.5,-251.6,332.5,-218,341.1],[39.2,-224.2,38.7,-228.1,8.4,-218.6,5.1,-212.3,29.8,-219.5,29.4,-221.5],[34.1,-348.8,28.6,-348.5,31.6,-309,37,-309.4],[-208.8,-107.3,-212.6,-105.5,-205.4,-88.1,-201.6,-89.7],[-323.7,-95,-327.5,-102.9,-348.5,-93.7,-364.5,-81.5,-362.6,-77.4],[.7,-128.7,-20.2,-117.3,-2.7,-86.7,18.1,-97.4],[-241.4,92.5,-242.7,90,-245.6,91.3],[-257.8,-13.4,-259.8,-17.9,-261.8,-17.7,-261.7,-17.2,-259.7,-12.6,-259.5,-12.6],[-320.4,-96.4,-324.2,-104.4,-327.5,-102.9,-323.7,-95],[-345.8,186.4,-375.8,186.6,-378,191.8,-329.9,193.8,-319.6,190.1],[-320.2,196,-329.9,194.5,-355.2,211.2,-368.3,231.1,-363.9,233.4,-350.7,213.9,-326.4,198.7],[-323.4,-197.4,-325.8,-200,-358.5,-157.2,-356.1,-154.9],[-201,67.8,-204.1,63.9,-213.9,71.5,-210,75],[127.8,-269.2,126.9,-274.7,72.5,-266.8,73.3,-261.4],[12.7,-166.9,7.4,-165.9,8,-161.7],[225.8,-265.4,226.4,-259.7,229.3,-260.1,229.3,-262.3],[-145,-4.7,-146,-6.4,-156.9,1,-165.1,10.8,-162.7,12.8],[-70.6,-106.4,-73,-108.7,-74.6,-107.1,-72,-104.9],[-101.3,-139.1,-102.6,-137.6,-98.8,-134.1],[22.9,-88.8,22.6,-89.2,21.4,-91.6,.5,-81.2,.2,-80.8,2.6,-78.6],[286.9,-259.3,275.6,-283.4,272.4,-281.9,283.7,-257.8],[-199.7,66.8,-202.9,62.9,-204.1,63.9,-201,67.8],[-136,-372.7,-157.8,-362.7,-125.5,-305,-104.8,-317.1],[-208.1,95,-213.2,96.3,-205.1,124.6,-199.5,124.1],[285.1,-207.6,280.5,-205.3,291.8,-188.4,295.6,-191.3],[-367.1,-75.3,-369.1,-79.4,-385.6,-71.8,-441.4,-67,-441.9,-62.5],[-219.4,229.6,-224.2,231.4,-226.5,237.2,-224.1,241.2,-216.8,239.8,-217.2,234.9],[-162.4,122.7,-163.2,117,-198.8,124.5,-190.9,129.1],[-149.5,-85.3,-152.5,-86.1,-153.8,-81,-149.3,-78.1,-145.8,-79.2,-145.7,-81.5],[-13,-153.3,-14.7,-156.4,-35.8,-144.1,-33.6,-141.7],[310.7,-301,309.6,-303.4,274.8,-287.5,276,-285],[-280.9,-199.7,-284.7,-205.4,-305.4,-192.4,-301.9,-185.5],[62,-16.1,34.3,-14.6,36,-11.5,35.5,-4.6,49.2,21,59,19.6,76.4,9.8],[-260.7,-97.5,-263.5,-95.5,-260.7,-91.8,-256.5,-94.8,-258.3,-97.2],[-260.7,-97.5,-275.5,-118.6,-278.5,-116.5,-263.5,-95.5],[-205.1,124.6,-208.5,135,-204.3,138.1,-198.6,131.7,-196.5,131.6,-194.2,133,-191.3,130.9,-190.9,129.1],[22.9,-425.5,20.8,-429.2,-31.5,-412.5,-30.3,-408.9,7.4,-421.2],[-382.3,131.3,-381.8,150,-376.3,150.5,-377,130.8],[54,-32,53.9,-32.2,53.8,-32.6,46.9,-47.1,46.1,-48.4,44,-52.1,43.9,-52.3,24.4,-38.4,25.8,-29.7],[-123.3,19.6,-97.9,47.2,-72,60.7,-54.6,60.9,-54.6,57.7,-71.4,57.8,-93.9,43.4,-101.9,34.4,-119.2,16.2],[-134.1,-94.6,-137.9,-98.1,-140.3,-96.5],[-182.7,86.7,-199.7,66.8,-201,67.8,-183.9,87.8],[89.8,-166.9,87.4,-172.2,60.9,-163.5,59.2,-155.8],[283.5,-212.8,276,-229.6,274.7,-229,282.2,-212.5],[-112.8,-118.4,-116.4,-122.2,-119,-119.3,-115.3,-115.6],[-242.8,-20.6,-243.6,-25.8,-246.9,-26.2,-247.5,-24.1,-246.6,-18.7],[-356.1,-154.9,-358.5,-157.2,-359.8,-155.7,-357.2,-153.5],[-155.1,121.5,-156.1,115.8,-163.2,117,-162.4,122.7,-159.6,124.5,-155.9,123.3],[-286.3,276.5,-314.2,194.6,-318,197,-290.2,277.5],[271.9,-283.1,270.7,-285.7,251.3,-276.8,252.3,-274.3],[-303.8,-104.5,-308.1,-112.1,-313.7,-109.4,-313.8,-109.3,-309.8,-101.5,-309.8,-101.5,-309.6,-101.6,-306.2,-103.3],[-409.7,75.1,-413.1,76,-408.1,79.8],[-316.5,-70.3,-310.3,-49.3,-307.3,-49.8],[-16.8,-279.4,-21.4,-294.1,-26,-292.4,-20.5,-277.9],[19.5,-95.1,18.1,-97.4,-2.7,-86.7],[22.9,-88.8,2.6,-78.6,24.4,-38.4,43.9,-52.3],[-311.2,-100.1,-281.5,-67,-279.7,-68.8,-290.2,-79.2,-309.8,-101.5],[216.9,-299.2,223.8,-302,249.4,-316.3,246.3,-319.9,245.1,-318.3,222.2,-305.1,215.3,-302.3],[258.3,-258,252.3,-274.3,250.7,-273.8,256.1,-259.1,254.3,-258.6,258.4,-246.1,261.2,-247.1,257.7,-257.8],[-385.2,3,-388.1,3.6,-384.7,20.4,-381.9,19.8],[181.1,-317.1,174.5,-331.4,171.1,-330.7,178.4,-316.9],[41.9,61.9,31.3,61.7,29.8,72.7,39.8,74.8],[-309.8,-101.5,-315.5,-108.5,-311.2,-100.1],[-376.4,156,-381.9,156,-382.7,189.5,-376.7,185.7],[-20.7,222.8,-33.8,215.8,-34.5,217.2,-21.8,224.5],[-150.9,209.3,-155.1,210.8,-152.3,221,-139.9,276,-138.8,298.9,-179.5,379.4,-179.3,382.3,-172.6,381.3,-170.5,382.4,-135,298.4,-136.5,274.6],[-257.8,-94,-260.7,-91.8,-248.5,-65.9,-245.7,-67.1],[-20.5,-277.9,-26,-292.4,-50.1,-281.1,-43.4,-267.5],[-46,-266.3,-52.7,-279.7,-69.8,-270.6,-61.6,-258.3],[16.7,68.8,6.5,65.6,5.6,67.6,5.3,68.3,5.1,68.7,15.5,72,15.9,72.2,21.9,74,22.4,74.2,28.4,76,28.8,76.1,38.4,79.1,38.5,78.9,38.6,78.6,39.5,75.7,39.8,74.8,29.8,72.7],[43.4,-230.4,37.9,-294.3,32.4,-293.3,38.7,-228.1],[-182.6,-343.5,-185.9,-343.3,-224.1,-318.7,-220.8,-313.8,-186.9,-335.5,-183.9,-335.3,-155,-289.6,-149.5,-292.2],[83.8,-89.4,81.2,-93.8,78.9,-94,74.9,-88.7,75.8,-84.7],[-18,237.7,-39.3,225.6,-83.3,300.9,-79.5,336],[-119.2,16.2,-121.6,14,-125.4,17.2,-123.3,19.6],[-1.3,-132.2,-13,-153.3,-33.6,-141.7],[-75.5,-394.7,-36,-407.1,-37.1,-410.3,-76.7,-398.6],[-92.9,-140.2,-52.7,-176.3,-55.3,-180.5,-96.1,-144.3],[-356.1,-154.9,-357.2,-153.5,-341.5,-135.3,-340.1,-136.5],[-165.9,40.1,-169.2,36.1,-170.9,36,-174.3,38.7,-170.2,43.6],[-302,33.1,-301,36.9,-299.4,38,-294.6,36.5],[-270.3,-56.8,-272,-60.2,-274.6,-59.2,-273.7,-55.6],[-204.6,-86.1,-190.7,-53,-187.7,-57.7],[-25.7,-45.4,-28.8,-47.7,-41.1,-32.9,-38.4,-30.5],[171.8,-387,171.1,-389.6,158.4,-385.8,159.3,-383.2],[-.8,-213.5,-2.6,-215.5,-15.4,-209.7,-13.7,-207.2],[-223.6,-312,-226.9,-316.9,-309.4,-264.7,-307.1,-259.3],[-349.1,-31.6,-345.5,-36.2,-346.3,-39.2,-352.1,-41.1,-356.9,-39.8,-354.2,-30.2],[8.4,-218.6,3.3,-220.7,-.9,-220.4,-2.6,-215.5,-.8,-213.5,5.1,-212.3],[-384.5,126,-424.9,119.6,-425.4,122.3,-384.7,128.4],[-167.6,9.6,-171.6,10.7,-170.7,14.2,-167.4,18.5,-164,16.2,-162.7,12.8],[-184.8,59.7,-186.4,56.6,-189,58.9,-188.1,61.5,-144.1,113.6,-142.3,110.3],[-402.1,-192.7,-404.2,-190.8,-363,-151.9,-361.4,-153.8],[65,-124.4,64.4,-127.5,58.8,-126.1,60.2,-123.5],[-299.4,38,-287,80.5,-282.5,78.8],[-82.4,-392.5,-83.7,-396.7,-138.3,-376.8,-136,-372.7,-110.3,-383.7],[-230.8,-32.4,-231.7,-32.8,-233.6,-30.7,-234.5,-24.8,-232,-24.4],[-317.7,-159,-340.1,-136.5,-337.7,-133.7,-322.7,-145],[60.2,-123.5,58.8,-126.1,45.7,-118.2,45.9,-117.5,18.1,-97.4,19.5,-95.1],[-224.4,-145.5,-226.9,-140.8,-213.8,-108.2,-209.8,-109.8],[-243.6,-63.1,-242.8,-65.1,-244,-67.6,-248.5,-65.9,-246.7,-61.5],[-298.3,86.9,-299.2,84.1,-319.8,91.2,-385.2,105.3,-384.4,107.9],[115.2,110.4,122.5,98.9,122,86.7,118.2,84.7,76.4,9.8,59,19.6,114,110.5],[-201.4,-160,-204.8,-157.9,-189.5,-134.6,-189,-134.9,-153.8,-81,-152.5,-86.1],[69.3,-298.6,67.6,-313.6,61.9,-312.8,63.8,-297.8],[-183.5,352.9,-187.7,353.3,-186.1,377.1,-181.8,376.8],[-152.2,-281.6,-155.5,-286.7,-274.8,-210.6,-271.6,-205.7],[-231.2,40.1,-232.1,37.8,-248.3,42.3,-247.6,44.7],[-171.6,-68.1,-192.3,-104.8,-195.9,-102.8,-175.2,-66.1],[-51.2,177.8,-64,173.1,-68.2,197.8,-73.2,216.1,-77.5,219.4,-111,322.7],[37.8,-165.1,35.6,-171.6,12.7,-166.9,13.6,-163,32.9,-167,35.7,-158.9,52.6,-161.7,49.4,-165.2,40.6,-163.7],[240.3,-235.5,229.3,-260.1,226.4,-259.7,237.7,-234.6],[-98.2,-144.4,-115.4,-166.3,-116.3,-165.6,-123.9,-176.3,-125.4,-175.2,-125.1,-173.3,-118.6,-164.5,-117.9,-165.1,-100.5,-142.6],[-44.6,58.8,-54.6,57.7,-54.6,60.9,-52.6,65.6,-49.3,69.8,-40.9,63.2],[291.4,-326.9,253.7,-326.6,254.2,-321.5,258.8,-321,262.4,-321.7,264.2,-323.4,291.3,-323],[-301,36.9,-302,33.1,-413.3,58.5,-412.5,62.2],[66.3,-234.6,65.2,-238.2,43.4,-230.4,43.8,-226.8],[-221.1,52.6,-224.7,54.1,-217.2,74,-214.3,71.2],[192.7,-290.3,211,-297.1,209.8,-300.1,191.7,-293],[-17.5,-55,-20.2,-57.2,-27.1,-49.3,-24.2,-47.1],[-295.5,86,-296.4,83.2,-299.2,84.1,-298.3,86.9],[-295.5,86,-298.3,86.9,-289.7,103.5],[-287.4,286.8,-285.6,278.6,-286.3,276.5,-290.2,277.5,-292.4,280.2,-292.6,283.7,-290.7,286.2],[-81.4,-94.3,-88.6,-93.1,-85.8,-90.1],[189.9,-293.7,178.4,-316.9,185.4,-292.7],[-16.8,-279.4,-20.5,-277.9,-.9,-220.4],[43.8,-226.8,43.4,-230.4,38.7,-228.1,39.2,-224.2],[-362.6,-77.4,-367.1,-75.3,-364.8,-67.2,-358.2,-62.4],[-269.9,172.9,-272.1,168,-276.9,169.9,-275,175.1],[-138.7,75.5,-140.3,77.1,-109.5,101.8,-107.6,98.6,-121.2,89.8],[89.8,-166.9,95.7,-167.1,92.5,-174,87.4,-172.2],[164.6,-278.9,174,-254.5,177.8,-255.9,168.2,-280.2],[-170.9,36,-184.4,19.9,-184.5,18.7,-189.7,19.7,-174.3,38.7],[-92.9,-140.2,-96.1,-144.3,-98.2,-144.4,-100.5,-142.6,-95.9,-137.3],[-256.5,-94.8,-245.7,-101.7,-245,-101.4,-230,-110.3,-224.8,-99.4,-212.6,-105.5,-213.8,-108.2,-223.5,-103.4,-229.4,-114.5,-250.5,-101.1,-250.9,-101.7,-258.3,-97.2],[71.8,-234.7,71.8,-238.8,65.2,-238.2],[37.9,-294.3,37,-309.4,31.6,-309,32.4,-293.3],[-189.5,59,-192.8,55,-202.9,62.9,-199.7,66.8],[169,-281.7,186.8,-288.1,185.8,-291.1,167.8,-285.5],[-246.6,-18.7,-247.5,-24.1,-259.8,-17.9,-257.8,-13.4],[-278.6,-67.7,-280.6,-65.9,-274.6,-59.2,-272,-60.2],[-82.9,343.1,-79.5,336,-98.5,326.7,-111,322.7,-113.9,330.5],[-205.5,-166.5,-210.5,-162.9,-207.5,-158.5,-204.8,-157.9,-201.4,-160],[-155.1,210.8,-155.5,209.4,-182.9,217.5,-182.3,218.8],[-115.3,-115.6,-119,-119.3,-137.9,-98.1],[-389,106.2,-396.9,99.6,-408.1,79.8,-413.1,82.1,-393.1,109.9],[-225.8,39.6,-227.6,34.8,-231.2,36,-232.1,37.8,-231.2,40.1,-229.4,41],[-243.6,-25.8,-261.9,-61.5,-258.7,-65.9,-286.5,-113.3,-288.1,-112.5,-261.1,-66.7,-264.8,-61.8,-253.7,-44,-246.9,-26.2],[-413.3,58.5,-414.7,58,-417,63.4,-412.5,62.2],[58.3,-165.1,51.4,-166.2,49.4,-165.2,59.2,-155.8,60.9,-163.5],[252.3,-274.3,251.3,-276.8,249.7,-276.1,250.7,-273.8],[-16.1,130.5,-21,127.7,-41.6,159.8,-34.3,214.4,-30.6,206],[-413.4,62.4,-417,63.4,-413.1,76,-409.7,75.1],[-182.3,218.8,-182.9,217.5,-185.7,218.6,-185.2,219.9],[-38,-29.8,-39.8,-27.8,-3,3.8,-2,1.5],[-208.8,-107.3,-209.8,-109.8,-213.8,-108.2,-212.6,-105.5],[162.4,-374.3,158.9,-371.9,159.6,-368.6,164,-368.4,164.4,-369.8],[364.1,-228.6,357.8,-237,345.6,-228.5,345.9,-228.1,295.6,-191.3,301.5,-182.8],[-225.8,39.6,-229.4,41,-227.1,47.8,-223.4,46.4],[-82.2,-398.9,-78.3,-400.1,-80.8,-412.2,-84.5,-411.6],[280.5,-205.3,285.8,-209.7,283.5,-212.8,282.2,-212.5,278.4,-205.5],[-251.7,327.5,-258.2,326.4,-259.5,332.7,-255,333.7,-251.6,332.5,-250.6,328.5],[-172.5,-59.9,-175.7,-63.5,-184.8,-56.4,-182.9,-51.4],[-98.8,-134.1,-102.6,-137.6,-111.1,-128.1,-107.2,-124.7],[25.8,-29.7,34.3,-14.6,62,-16.1,54,-32],[-177.9,-10.7,-176.6,-6.4,-172.2,-7.7,-170.5,-9.3],[-259.7,-12.6,-261.7,-17.2,-294.5,-4.6,-292.6,.3],[-340.1,-136.5,-341.5,-135.3,-339.4,-132.4],[-110.6,-23.6,-112.4,-25.8,-115,-23.6,-113.1,-21.5],[-109.4,-122.2,-113.2,-125.8,-116.4,-122.2,-112.8,-118.4],[-104.8,-317.1,-125.5,-305,-122.6,-299.8,-101.5,-311.2],[-316.5,-70.3,-317.4,-73.6,-358.2,-62.4,-357.2,-59.2],[-15.4,-209.7,-17.8,-208,-16.3,-205.6],[150.5,-207.2,148.2,-210.6,115.3,-178.7,94.2,-170,95.7,-167.1,116.9,-175.2,146.1,-203.8],[-200.7,-87.8,-201.6,-89.7,-205.4,-88.1,-204.6,-86.1],[-282.5,78.8,-287,80.5,-286.3,83],[-303.2,5.9,-307,7.3,-299.9,32.6,-296.1,31.5],[16.6,-138.5,13.3,-141.1,-1.3,-132.2,.7,-128.7],[-77.6,78.6,-82.3,78.3,-84.7,82.6,-84.2,84.7,-80.9,88.4,-75.4,83.5],[250.7,-273.8,249.7,-276.1,249.5,-276,242.3,-273.3,233.8,-269.4,230.3,-267.3,230.1,-267.1,229.8,-267,229.4,-267,232,-265.4,234.9,-267.2,238.6,-268.9,243.3,-271],[-243.2,161.2,-244.7,157.1,-253.9,160.4,-251.9,166.1,-248.9,166.5,-243.3,164.2],[-126.8,-181.6,-142.7,-203.4,-145.3,-201.8,-140.9,-195.2,-141.3,-194.8,-132.5,-182.2,-131.3,-183.1,-129.1,-180.1],[-339.4,-132.4,-341.5,-135.3,-344.6,-133.9,-385,-104.8,-407.3,-94.6,-406.1,-91.9,-383.4,-102.3,-353.9,-127.4],[-307.4,-181.8,-309.3,-183.8,-315.1,-168.3,-316.7,-161.4,-313.7,-160.8,-312.7,-167.4],[-384.4,107.9,-385.2,105.3,-389,106.2,-393.1,109.9,-389.9,112.8],[43.8,-226.8,39.2,-224.2,51.4,-166.2,58.3,-165.1],[152.1,-213.8,142.7,-235.8,133.3,-269.3,129.5,-268.2,148.7,-212.4],[-363.9,233.4,-365.2,236.1,-338.2,249,-334.3,252.1,-334.9,253,-309,276,-292.6,283.7,-292.4,280.2,-310.6,271.7,-317.1,265.3,-316.8,264.8,-329.6,252.9,-329.2,252.4,-330.9,250.4],[-275,175.1,-276.9,169.9,-319.6,190.1,-313.7,192.7],[-279.5,-116.8,-284.5,-124.3,-290.8,-121.1,-286.5,-113.3],[-318,-202.1,-320.5,-204.8,-325.8,-200],[-301.9,-185.5,-305.4,-192.4,-307.9,-191.8,-309.8,-184.6,-307.4,-181.8],[-49.2,-18,-39.8,-27.8,-52.1,-20.2],[-69.8,-270.6,-79.3,-273.3,-94.8,-253.3,-92.5,-248.5,-66.2,-249.2,-63.6,-256,-61.6,-258.3],[169,-281.7,167.8,-285.5,162.3,-283.9,164.6,-278.9,168.2,-280.2],[164,-368.4,159.6,-368.6,171.1,-330.7,174.5,-331.4,172.2,-338.2,173.5,-338.6],[70.4,-267.5,69.3,-298.6,63.8,-297.8,65,-267.3],[-295.9,1.5,-297.7,-3.4,-304.3,-1.2,-302.5,4.2],[-149.1,-206.9,-205.5,-166.5,-202.6,-161.9],[-129.9,-47.3,-131.6,-50.6,-172.6,-11.5,-170.5,-9.3,-132.8,-45.9],[-251.7,70,-282.5,78.8,-281.6,81.5,-253.4,73.6,-245.6,91.3,-242.7,90],[-381.9,19.8,-384.7,20.4,-385.3,21.2,-384.2,26.2,-380.5,25.4],[-357.2,-153.5,-359.8,-155.7,-361.4,-153.8,-359.2,-151.6],[-217.9,75.1,-213.9,93.7,-208.7,92.7],[248.6,-337.8,245,-337.5,246.3,-319.9,249.4,-316.3],[-238.4,98.8,-241.4,92.5,-244.2,93.8,-240,102.3,-213.2,96.3,-213.9,93.7],[-357.2,-59.2,-362.7,-59.9,-356.9,-39.8,-352.1,-41.1],[-184.2,-48.1,-188.9,-46.6,-177.9,-10.7,-173.4,-12],[-184.8,-56.4,-187.7,-57.7,-190.7,-53,-190.9,-47.4,-188.9,-46.6,-182.9,-51.4],[15.9,72.2,-28.7,205.3,-14.9,211.8,28.4,76],[-217.9,75.1,-212,77.5,-210,75],[-286.5,-113.3,-290.8,-121.1,-288.1,-112.5],[66.6,-234.6,87.4,-172.2,92.5,-174,71.8,-234.7],[-97.3,-135.4,-98.8,-134.1,-87,-120.4,-86.5,-120.9,-74.6,-107.1,-73,-108.7,-87,-125.2,-88.2,-124.4],[-223.7,-147.1,-227.3,-152.5,-232.6,-148.9,-228.7,-141.6,-226.9,-140.8],[-288.7,107.6,-292.4,108.7,-276.9,169.9,-272.1,168],[-306.3,-46.5,-309.5,-45.6,-297.7,-3.9,-294.5,-4.6],[-122.9,-178.4,-71.1,-209.2,-72.5,-211.7,-124.7,-181.3],[-37,-434.8,-40.4,-432.3,-36.7,-413],[295.6,-191.3,291.8,-188.4,297.7,-180,301.5,-182.8],[-73.9,161.6,-75.2,161,-90.7,193.5,-90.1,194.5],[87.5,-71.7,75.8,-84.7,54,-46.7,46.9,-47.1,53.8,-32.6],[-123.9,-176.3,-124.7,-181.3,-126.8,-181.6,-129.1,-180.1,-125.4,-175.2],[-155.9,123.3,-159.6,124.5,-147.8,155.3,-144.1,153.8],[-287.9,104.4,-289.7,103.5,-293.4,104.6,-287,107.1],[-99.6,105.1,-80.9,88.4,-84.2,84.7,-102.8,100.7],[184.7,-113.1,170.5,-171.2,166.6,-169.6,169.1,-163.9,179.7,-112.9],[-33.9,-193.6,-52.7,-176.3,-35.1,-144.7,-14.7,-156.4],[-151.7,27.5,-154.7,31,-84.7,82.6,-90.1,76.1],[25.8,-29.7,24.4,-38.4,-1.3,1,4,4.2],[133.3,-269.3,133,-270.6,134,-272.4,132.9,-276.1,126.9,-274.7,127.8,-269.2,129.5,-268.2],[-136,-372.7,-138.3,-376.8,-159.4,-365.7,-157.8,-362.7],[-244.7,94,-245.6,91.3,-287.9,104.4,-287,107.1],[5.1,-212.3,-.8,-213.5,7.4,-165.9,12.7,-166.9],[-248.5,-132.4,-251.8,-139.2,-279.2,-123.7,-275.5,-118.6],[-359.2,-151.6,-361.4,-153.8,-363,-151.9,-360.9,-149.9],[-309.5,-45.6,-310.3,-49.3,-346.3,-39.2,-345.5,-36.2],[-27.1,-49.3,-27.4,-49.4,-28.8,-47.7,-25.7,-45.4,-25.5,-45.6,-24.2,-47.1],[-416,75.7,-416.8,81.2,-413.4,81.8],[-142.7,-203.4,-142.4,-205.4,-145.5,-209.4,-149.1,-206.9,-145.3,-201.8],[-279.2,-123.7,-278.5,-116.5,-275.5,-118.6],[-40.9,63.2,2.2,7,-3,3.8,-20.5,31,-31,45.2,-44.6,58.8],[-136.1,-92.4,-139.9,-96,-149.5,-85.3,-145.7,-81.5],[-50.3,-220,-71.1,-209.2,-55.3,-180.5,-36.6,-195.4],[-296.9,310.6,-293.5,311.5,-287.4,286.8,-290.7,286.2],[-115,-23.6,-112.4,-25.8,-114.2,-27.7,-127.4,-49,-129.9,-47.3],[4,4.2,-1.3,1,-3,3.8,2.2,7],[-309.4,-264.7,-312.4,-265.5,-318,-262.1,-312.9,-254.1,-307.5,-257.1,-307.1,-259.3],[-60.4,165.9,-64.3,172,-64,173.1],[-311.6,-100.6,-315.5,-108.5,-324.2,-104.4,-320.4,-96.4],[-216.9,143.9,-222,147.3,-219.4,152.8,-216.6,154.1,-213,152.8],[-223.4,46.4,-227.1,47.8,-228,49.5,-226.5,53.3,-224.7,54.1,-221.1,52.6],[-41.1,-32.9,-43.1,-30.5,-39.8,-27.8,-38,-29.8],[-243.6,-63.1,-246.7,-61.5,-233.6,-30.7,-231.7,-32.8],[-229.6,-26.5,-232,-24.4,-191.8,53.3,-189,51.8],[-70.6,-106.4,-33.6,-141.7,-35.8,-144.1,-73,-108.7],[71.8,-238.8,71.3,-258.9,65.4,-258.8,66.2,-238.6],[38.4,79.1,28.8,76.1,-17.2,217.5,-12.6,229.1],[-247.9,-147.4,-251.6,-141.3,-251.8,-139.2,-237.5,-137.7,-241.2,-145.2],[-243.3,164.2,-248.9,166.5,-224.2,231.4,-219.4,229.6],[134,-272.4,163.4,-279.9,162.3,-283.9,132.9,-276.1],[21,59.5,11.4,54.3,6.5,65.6,16.7,68.8],[-147.5,-291,-149.5,-292.2,-155,-289.6,-155.5,-286.7,-152.2,-281.6,-144.4,-286.1],[-313.7,-160.8,-316.7,-161.4,-317.7,-159,-314.4,-156.7,-312.1,-159],[-320.4,-96.4,-317.4,-73.6,-314.2,-74.5],[-77.2,-97.4,-79.6,-95,-54,-71.6,-35.9,-53.6,-28.8,-47.7,-27.4,-49.4],[-92.7,189.6,-116.1,147.1,-128.1,129,-137.1,118.7,-139.3,120.1,-119.3,148.6,-95.7,191.1],[-312.1,-159,-314.4,-156.7,-284.3,-124.4,-279.2,-123.7],[162.4,-374.3,159.3,-383.2,156,-382.1,158.9,-371.9],[-288.1,-112.5,-292.6,-120.1,-302.1,-115.2,-297.8,-107.5],[43.5,51.7,15,45.7,11.4,54.3,21,59.5,31.3,61.7,41.9,61.9],[-170.2,43.6,-173.5,39.6,-189,51.8,-186.4,56.6],[-338.4,5.8,-349.1,-31.6,-343.6,7.3],[-296.9,-106.4,-299.8,-103.7,-279.7,-68.8,-278.6,-67.7,-276.5,-71.7,-275.4,-70.6,-273.4,-72.4],[-121.6,14,-119.2,16.2,-119,15.2,-114.6,18.6,-113.2,17.4,-118.8,12],[-307,7.3,-309.1,.4,-334,8.4,-332.3,13.6],[251.8,-321.3,250.3,-340,248.6,-337.8,249.9,-321.1],[-180.4,226.2,-182.3,218.8,-185.2,219.9,-183.3,226.9],[-43.4,-267.5,-46,-266.3,-17.8,-208,-15.4,-209.7],[183.2,-102.5,179.8,-111.2,85.8,-86.2,92.4,-74.8],[-122.6,-299.8,-125.5,-305,-147.5,-291,-144.4,-286.1],[-384.4,107.9,-389.9,112.8,-387.8,114.8,-383.1,124.6,-377.7,124],[71.3,-258.9,73.3,-261.4,72.5,-266.8,65,-267.3,65.4,-258.8],[-242.8,-20.6,-246.6,-18.7,-231.2,36],[-306.3,-46.5,-307.3,-49.8,-310.3,-49.3,-309.5,-45.6],[2.6,-78.6,.2,-80.8,-18.2,-59.5,-15.4,-57.5],[-115.6,112.3,-117.4,106,-139.4,112.7,-137.1,118.7],[-137.9,-98.1,-153.3,-120.3,-155.5,-118.8,-140.3,-96.5],[171.1,-330.7,67.6,-313.6,69.3,-298.6],[-208.5,135,-214.7,148.3,-213.1,147.6],[-179.5,379.4,-181.8,376.8,-186.1,377.1,-186.3,382.5,-182.7,384.3,-181.8,382.5,-179.3,382.3],[-302.5,4.2,-304.3,-1.2,-309.1,.4,-307,7.3,-303.2,5.9],[63.8,-297.8,61.9,-312.8,37,-309.4,37.9,-294.3],[-149.3,-78.1,-153.8,-81,-171.1,-67.2,-168,-63.4],[-71.1,158.8,-73.9,161.6,-64.3,172,-60.4,165.9],[-377,130.8,-377.7,124,-383.1,124.6,-384.5,126,-384.7,128.4,-382.3,131.3],[214.9,-297.3,216.9,-299.2,215.3,-302.3,209.8,-300.1,211.5,-296.1],[159.3,-383.2,158.4,-385.8,155.1,-384.8,156,-382.1],[-167.4,18.5,-158.6,27.5,-155.6,24.8,-164,16.2],[-302.1,-115.2,-308.1,-112.1,-303.8,-104.5,-299.8,-103.7,-296.9,-106.4],[-49.3,69.8,-52.6,65.6,-59.6,70.8,-69.3,76.3,-77.6,78.6,-75.4,83.5,-63.3,79.7],[297.7,-180,291.8,-188.4,184.7,-113.1,188,-104.6],[-313.4,-71.2,-314.2,-74.5,-317.4,-73.6,-316.5,-70.3],[-219.4,152.8,-222,147.3,-244.7,157.1,-243.2,161.2],[-145.8,-79.2,-149.3,-78.1,-131.6,-50.6,-130.7,-55.8],[246.5,-322.7,245,-337.5,174.5,-331.4,181.1,-317.1],[276,-285,274.8,-287.5,272.4,-281.9,275.6,-283.4],[208.1,-383.4,207.1,-386.8,163.1,-373.8,164.4,-369.8],[28.1,-430.8,22.9,-425.5,28.3,-353.3,34.2,-353.7],[-307.5,-257.1,-312.9,-254.1,-284.4,-208.1,-277.7,-211.2],[-94.3,196.5,-91.2,196.2,-90.1,194.5,-92.7,189.6,-95.7,191.1,-96.5,193.6],[-113.2,112.4,-75.7,157.9,-73.6,156.2,-73.4,155.2,-109.1,110.2],[59.2,-155.8,52.6,-161.7,59.5,-126.5,64.4,-127.5],[188,-104.6,184.7,-113.1,179.7,-112.9,183.2,-102.5],[-384.2,26.2,-385.3,21.2,-431.4,31.5,-429.4,36.7],[-113.1,-21.5,-115,-23.6,-135.2,-8,-135.1,-5.1,-127,-5.5],[-210.5,-162.9,-227.3,-152.5,-223.7,-147.1],[-334,8.4,-338.4,5.8,-343.6,7.3,-341.2,15.8,-332.3,13.6],[-139.4,112.7,-142.3,110.3,-144.1,113.6,-139.3,120.1,-137.1,118.7],[-92.5,-248.5,-129.9,-221.1,-145.5,-209.4,-142.4,-205.4],[68.8,-108.1,65,-124.4,60.2,-123.5,63.3,-107.2,65.4,-103.3],[-375.8,186.6,-376.7,185.7,-382.7,189.5,-383,192.4,-379.4,193.1,-378,191.8],[-96.5,193.6,-126,206.2,-126.8,203.2,-125.9,191.9,-127.4,185.5,-129.5,185.8,-127.8,209.7,-94.3,196.5],[-50.3,-220,-51.7,-222.5,-72.5,-211.7,-71.1,-209.2],[-226.5,53.3,-228,49.5,-239.7,53,-238.5,56.8],[-213.9,93.7,-213.2,96.3,-208.1,95],[85.8,-86.2,84.1,-89,83.8,-89.4,75.8,-84.7,87.5,-71.7,89.6,-73.1,92,-74.6,92.4,-74.8],[21.4,-91.6,19.5,-95.1,-1.3,-84.3,.5,-81.2],[-362.6,-77.4,-364.5,-81.5,-369.1,-79.4,-367.1,-75.3],[-85.8,-90.1,-88.6,-93.1,-91.3,-90.4,-88.6,-87.5],[-177.4,237.3,-178.3,234.1,-181.2,235,-180.5,237.4],[-13.2,125.4,15.5,72,5.1,68.7,-27.2,116.2],[32.4,-293.3,31.6,-309,-21.4,-294.1,-16.8,-279.4],[251.8,-321.3,254.2,-321.5,257,-327.2,256.1,-340.4,250.3,-340],[160.9,-193,160.5,-195.8,158.7,-198.2,155.1,-196.7,157.4,-191.2],[295,-217.5,292.6,-220.4,285.8,-209.7],[-151.7,27.5,-155.6,24.8,-158.6,27.5,-154.7,31],[-318,-202.1,-323,-197.4,-309.8,-184.6,-307.9,-191.8],[-278.6,-67.7,-279.7,-68.8,-281.5,-67,-280.6,-65.9],[-220.8,-313.8,-224.1,-318.7,-226.9,-316.9,-223.6,-312],[-203.5,234.6,-217.2,234.9,-216.8,239.8,-209.1,238.8,-204.8,240.7,-194.1,258.8,-185.7,343.6,-181.2,345.1,-192.6,255.1],[-30.6,121.1,-56.5,158.7,-60.4,165.9,-49,172.1],[-20.7,222.8,-14.9,211.8,-28.7,205.3,-30.6,206,-34.3,214.4],[226.4,-259.7,225.8,-262.6,158.7,-198.2,160.5,-195.8],[-50.9,-11.6,-53.7,-8.6,-63.3,13.3,-60.3,15.9],[68.8,-108.1,65.4,-103.3,74.9,-88.7,78.9,-94],[-191.1,343.8,-207.2,339.7,-208.2,343.7,-192.2,348.1],[-274.8,-210.6,-277.7,-211.2,-284.4,-208.1,-284.7,-205.4,-280.9,-199.7,-271.6,-205.7],[-224.1,241.2,-226.5,237.2,-257.9,256.6,-251.5,295.1,-258.2,326.4,-251.7,327.5,-246.8,295.3,-252.5,261.7,-250.8,257.6],[-95.9,-137.3,-99.4,-141.2,-97.6,-135.7],[-33.9,-193.6,-55.3,-180.5,-52.7,-176.3],[-341.2,15.8,-381.8,20.3,-380.5,25.4],[154.1,-208,152.1,-213.8,148.7,-212.4,148.2,-210.6,150.5,-207.2],[-125.1,-146.1,-127.2,-144.5,-113.2,-125.8,-111.1,-128.1],[-209.4,162.6,-213,152.8,-216.6,154.1,-211.5,165.5,-200.3,187.3,-185.7,218.6,-182.9,217.5],[-181.2,345.1,-185.7,343.6,-189.4,344.2,-191.1,343.8,-192.2,348.1,-188.6,350.9,-187.7,353.3,-183.5,352.9],[-216.8,337.2,-218,341.1,-216.3,344.4,-211.9,345.7,-208.2,343.7,-207.2,339.7],[-171.6,-68.1,-175.2,-66.1,-175.7,-63.5,-172.5,-59.9,-168,-63.4],[-108.9,109.2,-108,108.9,-109.5,103.6,-110.5,103.9],[-66.2,-249.2,-92.5,-248.5,-72.5,-211.7,-51.7,-222.5],[-234.5,-24.8,-233.6,-30.7,-243.6,-25.8,-242.8,-20.6],[-190.9,-47.4,-190.7,-53,-230.8,-32.4,-229.4,-27.2],[-42,-82.7,-44.1,-80.6,-20.2,-57.2,-18.2,-59.5],[.7,-128.7,-1.3,-132.2,-22,-120.4,-20.2,-117.3],[-102.8,100.7,-104.5,100.6,-107.6,98.6,-109.5,101.8,-108,108.9,-99.6,105.1],[-186.4,56.6,-189,51.8,-191.8,53.3,-192.8,55],[159.6,-368.6,158.9,-371.9,35.5,-350.1,122.7,-357.2],[-125.7,-51.4,-128,-55.9,-130.7,-55.8,-131.6,-50.6,-129.9,-47.3,-127.4,-49],[167.8,-177,160.9,-193,157.4,-191.2,164.1,-175.7],[-36,-407.1,-30.3,-408.9,-31.5,-412.5,-33,-414,-36.7,-413,-37.1,-410.3],[-381.8,150,-383.5,151.1,-384,154.3,-381.9,156,-376.4,156,-376.3,150.5],[-242.8,-65.1,-226.5,-73.5,-227.1,-74.8,-204.6,-86.1,-205.4,-88.1,-244,-67.6],[-224.1,-318.7,-228.6,-325.8,-231.7,-324.1,-226.9,-316.9],[54,-32,57.6,-24.7,211.1,-109.8,207.8,-114.2],[54,-32,57.6,-24.7,211.1,-109.8,207.8,-114.2],[45.2,-59.2,34.4,-61.2,17.6,-68.2,3.3,-77.3,-5.6,-85.7,-14.5,-96.1,-78.5,-205.4,-85.3,-201.9,221.2,-95,217.2,-101,192.9,-87.6,67.5,-58.2,57.7,-58.1],[-70.3,-209.5,-76.9,-206.1,-13.2,-97.1,-4.4,-86.9,4.4,-78.6,18.4,-69.7,34.8,-62.9,45.4,-60.9,57.8,-59.8,67.4,-59.9,192.2,-89.2,216.3,-102.4,211.7,-109.3],[-78.5,-205.4,-14.5,-96.1,-5.6,-85.7,3.3,-77.3,17.6,-68.2,34.4,-61.2,45.2,-59.2,57.7,-58.1,67.5,-58.2,192.9,-87.6,217.2,-101,216.3,-102.4,192.2,-89.2,67.4,-59.9,57.8,-59.8,45.4,-60.9,34.8,-62.9,18.4,-69.7,4.4,-78.6,-4.4,-86.9,-13.2,-97.1,-76.9,-206.1],[-85.3,-201.9,221.2,-95,211.7,-109.3,-70.3,-209.5],[-76.9,-206.1,-70.3,-209.5,-89.4,-243.4,-89,-243.7,-98.2,-264.8,-114.7,-293.9,-117.4,-292.4,-134.5,-322.9],[-155.8,-311,-85.3,-201.9,-78.5,-205.4],[-76.9,-206.1,-87.3,-224.5,-99.6,-246.8,-120.5,-283.7,-132.4,-304.7,-139.8,-318.2,-140.3,-318.7,-140.8,-319,-141.6,-319,-141.6,-318.5,-141.5,-318.1,-134,-303.9,-122,-282.9,-101.1,-246,-88.8,-223.7,-78.5,-205.4],[-155.8,-310.9,-85.3,-201.9,-70.3,-209.5,-89.4,-243.4,-89,-243.7,-98.2,-264.8,-114.7,-293.9,-117.4,-292.4,-134.5,-322.9],[-206,-433.5,-141.6,-319,-134.5,-322.9,-163.5,-374.5,-181.4,-408.8,-195.8,-439.3],[-134.5,-322.9,-163.5,-374.5,-181.4,-408.8,-195.8,-439.3,-206,-433.5,-141.6,-319],[58.8,-22.3,62.5,-15.1,227.8,-91.3,224.1,-96.1],[58.8,-22.3,62.5,-15.1,227.8,-91.3,224.1,-96.1],[274.6,-148.1,267.5,-157.6,207.8,-114.2,216.3,-102.4,237.9,-118.1],[279.9,-141,275.6,-146.7,239,-116.8,217.2,-101,221.2,-95,223.7,-96.6,227.8,-91.3],[275.6,-146.7,274.6,-148.1,237.9,-118.1,216.3,-102.4,217.2,-101,239,-116.8],[207.8,-114.2,221.2,-95,223.7,-96.6,227.8,-91.3,279.9,-141,267.5,-157.6]],p:`東京都渋谷区代々木四丁目`},"./data/fallback/13111-53392558.json":{r:400,c:[35.54583,139.73125],n:`大田区（2025年度）`,b:[[4.1,211.3,-321.2,211.2,-318.9,221.7,-318.3,221.8,-320.7],[9.4,378.5,25.6,379.5,20.2,380.9,20.5,381.8,15.6,377,14.7,376.9,15.4,373.6,14.8,371.8,24.3],[19.5,244,-5.8,244,-11.2,238.8,-11.2,238.8,-5.8],[6.2,251.5,-13,251.3,-17.3,246.8,-17.1,247.1,-12.7],[7.5,134.4,-124.9,134,-128.2,133.3,-128.2,132.8,-133.8,126.3,-133.1,126.9,-126.5,127.6,-126.5,127.6,-125.6,129,-125.8,129.1,-124.4],[2.2,113.1,-331.5,113.1,-334.1,98.6,-334.3,98.6,-331.7],[6.3,115.1,-185,114.6,-189.3,103.8,-188.2,104.3,-183.9],[6,-153.1,36.5,-153.8,29.5,-166.2,30.8,-165.8,35.4,-164.3,35.3,-164.1,37.6],[3.7,-318.8,-17.3,-319,-19,-329.4,-17.8,-329.2,-15.5,-327.6,-15.7,-327.6,-16.1],[9.4,14.5,-134.8,13.4,-144.7,9.7,-144.4,11,-134.4],[9.3,13.4,-145.9,12.4,-153.6,8,-153,9,-145.3],[9,12.8,-154.4,12.2,-158.4,4.7,-157.4,5.5,-151.6,7.1,-151.8,6.9,-153.6],[9.2,5.1,-148.2,4.2,-157.4,.8,-157.1,1.8,-147.9],[9.6,1.1,-147.6,0,-157,-3.4,-156.6,-2.3,-147.3],[9.8,-4.4,-156.5,-8.1,-156,-6.8,-146,-3.1,-146.4],[9.5,-1.2,-141.2,-4.9,-140.6,-5.7,-138,-5.4,-133,-4.7,-133,-4.6,-132.6,-.2,-133],[8.7,325.4,-220.1,326.1,-227.5,321.9,-227.9,321.1,-219.2,323.3,-219,323.4,-220.3],[9.4,-.5,-140.4,.2,-133,4.6,-133.4,3.9,-140.8],[9.5,9.5,-141.5,4.6,-141,5.5,-133.6,10.3,-134],[13.7,-300,-56.6,-296.7,-29.6,-278.6,-34,-284.9,-60.3],[6.9,-201,-44.8,-200.8,-37,-193.6,-37.3,-193.9,-45],[6.6,-201.4,-55.5,-200.6,-49.8,-194.3,-50.8,-195.2,-56.5],[6.6,-198.3,-239.2,-203.2,-238.7,-202,-228.9,-197.2,-229.4],[6.4,-201.7,-224.4,-205.9,-224,-205.2,-217.6,-201,-218],[7.3,-207.1,35,-206.6,41,-204.9,40.9,-204.8,42.2,-199.7,41.7,-200.4,34.3],[5.5,-371.2,-23.8,-370,-16.4,-351.9,-19.4,-353.1,-26.7],[7.3,-363.1,-17.4,-362.3,-10.7,-356.8,-11.3,-356.5,-8.6,-350.4,-9.4,-351.4,-17.4,-355.5,-16.9,-355.7,-18.3],[7.2,-361.1,-4,-359.6,7.4,-352.4,6.4,-353.8,-4.9],[5.4,-387.6,-36.1,-385.3,-25.6,-367.8,-29.4,-370.1,-39.9],[4,-382.5,-14.3,-372.3,-16.7,-374.6,-26.4,-384.8,-24],[8.4,-368.4,-15.6,-367.9,-7.4,-362.7,-7.7,-363.2,-15.9],[6.4,-375,45.2,-374.9,51.8,-368.3,51.7,-368.3,50.5,-367.1,50.4,-367.2,45.1],[7.2,-366.9,51.5,-356.5,51.4,-356.6,44.6,-366.9,44.6],[10.2,-378.3,63,-379.1,67.4,-371.6,68.6,-370.9,64.1],[10.4,-377.6,58.6,-378.3,62.7,-370.9,63.9,-370.3,59.7],[7.1,-219.5,-60.7,-218.8,-54.1,-206.9,-55.4,-207.6,-62],[7.9,-217.5,-44,-216.7,-36.2,-205.2,-37.4,-205.9,-45.1],[6.9,-212.2,-201.4,-219.4,-200.6,-218.4,-192,-211.2,-192.8],[6.8,-209.3,-213,-214.5,-212.3,-213.4,-204.8,-208.2,-205.5],[6.9,-210.4,-185.2,-210.9,-191.4,-218.1,-190.8,-217.6,-184.7],[6.6,-207.8,-54.8,-218,-53.7,-217.3,-47.6,-210.6,-48.4,-210.7,-49.4,-207.2,-49.8],[7.2,-218.7,-186.5,-222.9,-186,-221.7,-175.9,-217.5,-176.4],[7.9,-224.6,-192.9,-225.6,-200.5,-230.5,-199.8,-229.5,-192.3],[12,-227.6,-232.7,-231.5,-232.2,-230.5,-223.7,-226.6,-224.1],[6.5,-203.9,-238.3,-208.5,-237.7,-207.1,-226.5,-202.5,-227.1],[8.5,-229.6,39.6,-219.9,38.4,-220.6,32.3,-229.2,33.3,-228.9,35.3,-230,35.4],[8.7,-218.2,26.8,-218.6,23.7,-217.6,23.5,-218.3,18.8,-225.3,19.8],[7.9,-225.9,20.2,-232.4,20.9,-231.6,28.6,-225.1,27.9],[12.2,-256.8,-36.7,-268.8,-35.3,-265.6,-9.4,-253.6,-10.8],[7.2,-244.4,2.1,-243.8,7.6,-236,6.8,-236.6,1.3],[5,-249.9,1.2,-249.5,8.7,-244.8,8.5,-245.2,.9],[9.4,-265,-157.7,-262.6,-147.9,-257,-149.2,-259.4,-159.1],[8.6,-254,-102.6,-265.9,-100,-263.7,-89.8,-251.7,-92.4],[9.8,-266.6,-176.9,-273.4,-175.7,-271.7,-165.4,-264.9,-166.5],[7.3,-268.3,-187.7,-267.3,-182.9,-260.3,-184.4,-261.3,-189.2],[5.9,-264,-197.4,-268.9,-196.5,-267.4,-188.4,-262.5,-189.3],[7,-275.3,-193.5,-275.6,-194.8,-274.2,-195.1,-275,-198.9,-285.9,-196.5,-284.8,-191.4],[7.4,-275.1,-199.4,-276.5,-206.3,-288,-203.9,-286.5,-197.1],[7.7,-254.4,-194.3,-260.7,-193.1,-259.1,-184.3,-252.8,-185.4],[7.2,-256.5,-203.1,-258.8,-202.7,-258.7,-202.2,-262.8,-201.5,-261.5,-194.6,-255.1,-195.7],[7.5,-264.9,-207,-269.7,-206,-268.4,-199.5,-263.5,-200.5],[8.8,-241.5,-262.8,-241.8,-269.6,-253.6,-269.1,-253.3,-262.3],[7.2,-282.8,-239.4,-287.8,-238.9,-286.9,-229.2,-281.9,-229.7],[7.2,-268.5,-244.7,-276.3,-242.7,-275.6,-240.1,-276.5,-239.9,-275.1,-234.5,-266.4,-236.8],[7.7,-270.9,-265.1,-270.6,-263.1,-271.5,-262.9,-270.9,-259.3,-268.9,-259.6,-268.5,-257.4,-260.9,-258.6,-262.1,-266.5],[6.9,-281.7,-263.8,-281,-253.1,-270.6,-255.7,-273.2,-266],[8.4,-258.5,-86.9,-262.7,-85.7,-261.1,-80.1,-256.9,-81.2],[7.3,-299.7,-187.9,-306.9,-186.8,-305.6,-178.9,-298.4,-180],[6.7,-301.2,-244.3,-308.4,-243.4,-307.4,-234.9,-300.2,-235.7],[9.8,-245.1,34.7,-244.2,41.2,-237.9,40.4,-238.8,33.9],[7.5,-240.9,-58,-240.3,-51.6,-229.1,-52.6,-229.7,-59],[7.7,-247.8,18.1,-231.8,16.5,-232.4,11,-236.1,11.3,-236.3,8.5,-248.6,9.7],[7.3,-231.2,-28.1,-236.9,-26.8,-237.2,-28,-240.2,-27.3,-237.2,-14.1,-228.5,-16],[9.1,-238,-230.5,-236.7,-220.9,-230.6,-221.6,-231.8,-231.3],[9,-245.5,-198.4,-244.5,-188.4,-232.7,-189.6,-232.8,-190.6,-230.1,-190.8,-231,-199.9],[5.7,-230.4,-187.4,-235.4,-186.6,-235.2,-185.6,-243.3,-184.3,-242.3,-177.5,-229.2,-179.5],[9.2,-237.1,34.6,-236.2,40.7,-230.6,39.9,-231.5,33.8],[6.4,-232.1,28.6,-233,20.9,-239.9,21.7,-239,29.4],[6.8,-60.4,-149.4,-60.7,-153.7,-69.3,-152.9,-69.1,-151.5,-70.7,-151.4,-70.5,-148.5],[6.7,-138.5,-304.7,-132.9,-304.8,-133,-311.1,-138.5,-311],[7.5,-123.8,-336.5,-123.6,-340,-127.1,-340.2,-127,-342.1,-138.3,-342.8,-138.6,-338.2,-136.4,-338.1,-136.4,-337.2],[8.4,-98.7,-115.6,-98.3,-110.9,-89.9,-111.8,-90.3,-116.4],[12.4,-91.1,-116.9,-91.5,-122.1,-99.7,-121.4,-99.3,-116.3],[7.6,-92.7,-128.3,-93.1,-133,-100.5,-132.5,-100.2,-127.8],[9.2,-91.7,-134.2,-92.5,-142.7,-101.5,-141.9,-100.7,-133.4],[7.5,-85.6,-306.8,-93.4,-306.9,-93.5,-298.6,-98.3,-298.7,-98.4,-293.4,-91,-293.3,-91,-296.1,-85.8,-296],[6.7,-94.8,-306.9,-99.2,-307,-99.3,-300.1,-94.9,-300],[7.3,-86.3,-341.4,-85.9,-347.5,-86.5,-347.6,-86.4,-349.7,-97.4,-350.5,-97.7,-346.3,-95.6,-346.2,-95.9,-342.2],[6.7,-94.1,-389.1,-101.6,-389.8,-102.5,-380,-95,-379.4],[8,-117.9,-108.8,-124.2,-108.2,-123.8,-104,-125.2,-103.9,-124.4,-95.4,-116.7,-96.2],[7.2,-118.9,-352.1,-125.2,-352.2,-125.3,-344.6,-119.1,-344.5],[9.1,-104,13.9,-108.5,14,-108.3,19.6,-103.8,19.5],[10.1,-106.3,-106.9,-110.7,-106.7,-110.4,-99.3,-106,-99.5],[8.4,-111,-118.4,-116.9,-118,-116.4,-111.7,-110.5,-112.2],[7,-113.7,-131.2,-112.8,-123.9,-107.9,-124.5,-108.1,-126.9,-106.8,-127,-107.3,-132],[10.6,-106.9,-132.9,-107.5,-141.1,-112.8,-140.6,-112.2,-132.4],[7.2,-105.1,-118.8,-109.8,-118.5,-109.4,-111.9,-104.7,-112.2],[8.6,-113.6,-124.1,-113.9,-128.4,-114.5,-128.4,-114.7,-131.3,-119.8,-130.9,-119.2,-123.7],[7.4,-109.2,-321.9,-114.5,-322.2,-115,-313.5,-109.7,-313.2],[11.1,-117.5,-155.4,-123.1,-155,-122.6,-147.8,-116.9,-148.2],[6.9,-121.8,-303,-113.7,-302.5,-113.3,-309.4,-121.4,-309.8],[4.2,-111.4,-298.4,-118.2,-297.7,-117.7,-291.9,-110.8,-292.5],[7.2,-120.8,-336,-121.1,-329.5,-114,-329.2,-113.8,-335.7],[6.8,-118.2,-341.8,-110.8,-341.2,-110,-351.5,-117.4,-352.1],[6.4,-126,-352.2,-130.9,-352.1,-130.8,-344.8,-125.9,-344.9],[10.4,-126.8,-129.3,-125.9,-122.2,-119.9,-122.9,-120.7,-130.1],[10.6,-128.8,-146.8,-123.7,-147.3,-124.5,-155.5,-129.6,-155],[7.3,-100.7,-121.6,-104.6,-121.2,-103.8,-111.8,-99.8,-112.2],[7.2,-101.5,-132.6,-106.5,-132.1,-105.6,-123.9,-100.7,-124.4],[7.5,-102.3,-159.3,-107.8,-158.7,-107,-150.8,-101.5,-151.4],[7.5,-122.1,-84.2,-120.8,-73.6,-101,-76,-102.3,-86.7],[10.6,-101.4,-133.5,-102.3,-142,-107,-141.5,-106.1,-133],[8.4,-101.1,-341,-110.7,-341.6,-111.4,-330.2,-101.8,-329.6],[11.3,-72.8,10,-77.8,10.2,-77.5,17.6,-72.5,17.4],[8.1,-71.9,2,-76.5,2.4,-76,9.1,-71.3,8.7],[6.9,-77.3,1.7,-82.8,2.2,-82.2,9.2,-76.7,8.8],[7,-84.7,-22.8,-92.4,-22,-91.3,-10.4,-86,-10.8,-86.5,-16.2,-84.1,-16.5],[9.1,-84.2,-161.7,-87,-161.5,-86.8,-159.3,-90.1,-159,-89.5,-151.4,-83.4,-151.9],[8.4,-71,-153.1,-71.4,-159.9,-76,-159.6,-75.5,-152.8],[6.3,-72.8,-170.2,-76.9,-169.8,-76.3,-162.6,-72.1,-162.9],[7.1,-82.9,9.8,-83.6,3.4,-88.5,4,-87.9,10.3],[10.1,-75.8,-141.5,-76.2,-148.7,-81.4,-148.4,-81.3,-147.4,-84.4,-147.2,-83.9,-140.2,-80.8,-140.4,-80.8,-141.2],[9.2,-74.7,-134.7,-75.1,-140.3,-80.7,-140,-80.7,-139.3,-84.1,-139.1,-83.8,-134.1],[9.6,-73.8,-128.5,-83.4,-127.8,-83.1,-123.3,-73.5,-124],[8.6,-82.7,-133.1,-82.1,-128.2,-74.1,-129.2,-74.7,-134.1],[7.2,-89.6,-180.1,-88.2,-162.1,-77.1,-163,-78.5,-181],[7,-81.8,-341,-76.2,-340.5,-76.1,-341.4,-72.2,-341,-71.5,-349.5,-79.6,-350.2,-79.7,-349.1,-81.2,-349.2],[7,-85.4,-388,-93.3,-388.6,-94.1,-378.4,-89.8,-378.1,-89.5,-382.5,-85.8,-382.3],[9,-81.7,-388,-81.8,-384.2,-78.5,-384,-78.6,-382.1,-69.7,-381.8,-69.5,-387.6],[7,-69,-360.5,-68.7,-367.4,-72.7,-367.5,-72.9,-360.7],[7.8,-74.1,-360,-73.9,-367.3,-81.5,-367.5,-81.7,-362,-78.3,-361.9,-78.4,-360.1],[7.6,-70.7,-351,-70.2,-358.8,-81.1,-359.6,-81.7,-351.8],[9.1,-73.6,-314.1,-81.1,-314.2,-81.2,-306,-73.7,-305.9],[8.1,-145,-81.4,-150.7,-80.6,-149.5,-72.5,-143.8,-73.3],[4.1,-176.3,12.5,-176,18.6,-169.9,18.3,-170.3,12.2],[7.9,-155.1,-146.8,-164.6,-146.3,-164.1,-137.6,-159.6,-137.8,-159.7,-139,-154.7,-139.3],[7.2,-158.8,-157.3,-166.5,-156.4,-165.5,-147.5,-157.9,-148.3],[4.7,-152.9,-153.3,-153.5,-158,-158.4,-157.4,-157.8,-152.7],[6.5,-144.7,-134,-149,-133.8,-148.3,-122.3,-144,-122.5],[6.7,-150.5,-132.1,-155.1,-131.5,-153.7,-120.5,-149.1,-121.1],[6.9,-158.8,-119.1,-165.5,-118.6,-164.7,-109.8,-158,-110.4],[6.9,-156.9,-104.9,-164.6,-104.4,-163.7,-91.4,-156,-91.9],[7.5,-156.6,-109.5,-152.4,-110.1,-153.7,-119.7,-158,-119.1],[4.8,-174.5,-130.3,-173.8,-121.6,-165.5,-122.3,-166.3,-130.9],[7.4,-182.4,-124.8,-183,-130.6,-186.1,-130.3,-184.7,-117.2,-175.9,-118.1,-176.3,-121.3,-174.5,-121.5,-174.9,-125.6],[8.4,-186.3,-139.8,-198.1,-138.7,-197.6,-133,-185.8,-134.1],[6.5,-147.1,-199.3,-153.3,-198.7,-151.9,-184,-145.7,-184.6],[6.1,-158.4,-197.2,-162.4,-196.9,-162,-191.9,-158,-192.3],[5.8,-160.4,-207.4,-163.7,-207.1,-163.2,-200.5,-159.9,-200.8],[6.8,-164,-199.6,-168.1,-199.4,-167.9,-192.2,-163.7,-192.3],[6.7,-172.5,-205.8,-171.8,-200.6,-166.6,-201.2,-166.7,-202.2,-164.2,-202.5,-164.7,-206.8],[6.4,-153.9,-198.3,-157.9,-197.8,-157.4,-193.1,-153.4,-193.5],[6.9,-153.1,-188.9,-160.1,-188.3,-160,-186.6,-163.4,-186.3,-162.8,-179.1,-152.4,-179.9],[-9999,-155.3,-208.1,-159.7,-207.9,-159.4,-199.7,-154.9,-199.9],[6.4,-179.2,-176.8,-180.4,-189.7,-183.1,-189.4,-183.5,-193.4,-187.8,-193.1,-186.3,-176.2],[7.4,-189.8,-204.5,-198.1,-203.5,-197,-194.7,-188.7,-195.7],[7.3,-187.6,-228,-196,-227.4,-195.5,-220.2,-187.1,-220.8],[6.3,-197.2,-226.2,-200.8,-225.8,-200,-218.8,-196.4,-219.2],[6.5,-190.2,-211.8,-196.8,-211.7,-196.7,-206.3,-190.1,-206.5],[8.3,-181.9,-243.9,-189,-242.7,-186.9,-231.3,-179.8,-232.6],[6.8,-145.9,-367.8,-156.6,-368.4,-156.8,-365,-146.1,-364.4],[7.8,-146,-363.1,-151,-363.2,-151.1,-354.9,-146.2,-354.8],[7,-145.8,-348,-153.5,-348,-153.6,-343.5,-145.8,-343.5],[7.1,-151.8,-343,-161.9,-343.3,-162.1,-337.9,-156.2,-337.7,-156.2,-335.6,-152.1,-335.4],[7.4,-162.9,-334.1,-162.6,-341,-173.3,-341.4,-173.6,-334.6],[7.6,-181.2,-342,-191.1,-342.7,-191.4,-339,-194.4,-339.3,-194.7,-334.7,-181.8,-333.7],[9.6,-166.7,-353.5,-167,-344.6,-162.7,-344.5,-162.4,-353.4],[5.5,-161,-348.6,-161.3,-344.2,-155.4,-343.8,-155.1,-348.1],[6.6,-151.6,-356.6,-151.4,-363.5,-159.7,-363.7,-159.8,-359.1,-156.1,-359,-156.2,-356.8],[5,-151.9,-354.2,-161.5,-354.4,-161.6,-349.2,-152,-349],[9.6,-168.9,-342.5,-168.5,-351.6,-177.3,-352,-177.7,-342.9],[7.3,-158.4,-317.8,-166.3,-318.2,-166.7,-309.9,-158.8,-309.5],[7.9,-167,-318.6,-177.1,-319.1,-177.6,-309,-167.5,-308.5],[6.9,-192.4,-302.4,-199.6,-302.6,-199.9,-292,-192.7,-291.7],[7,-178.8,-278.3,-184.1,-277.5,-181.4,-259,-176.2,-259.8],[7.9,-196.2,-273.7,-201,-272.8,-198.4,-260.1,-193.7,-261],[6.4,-185.2,-276.3,-190,-275.3,-187.5,-263.7,-182.8,-264.7],[3.8,-173.7,-279.8,-178.4,-279.1,-177.5,-273.6,-172.9,-274.3],[7.6,-177.4,-1.4,-177.6,4.9,-170,5.1,-169.9,2.4,-169.1,2.4,-169,-1.1],[9.7,-156.4,-274.4,-156.3,-266.6,-145.9,-266.9,-146.1,-274.6],[9.5,-162.2,-364.5,-168.2,-364.7,-168.5,-355.4,-162.5,-355.2],[3.7,-132.9,-344.8,-132.8,-352.9,-138.8,-352.9,-138.8,-344.8],[8.1,-128.9,-17.9,-150.3,-15.8,-149.2,-5.4,-127.9,-7.5],[10.4,-125.2,-294.9,-125.3,-302.9,-138.8,-302.8,-138.7,-294.8],[8.8,-137.5,30.7,-132.2,30.4,-132.5,24.5,-137.8,24.7],[6.8,-89.9,39.2,-90.2,34.6,-97.6,35.1,-97.2,39.7],[6.3,-92.5,24.9,-97.9,25.2,-97.5,32,-92.1,31.7],[6.8,-106.8,33.9,-107.1,30,-114,30.5,-113.7,34.5],[6.7,-105.5,40.7,-105.9,34.8,-113.3,35.4,-112.9,41.2],[10.1,-107.2,29.4,-107.5,26.1,-114.1,26.7,-113.8,30],[9.7,-131.3,30,-125.1,29.8,-125.3,24,-131.5,24.2],[7.9,-98.5,32.4,-99,25.5,-105.9,25.9,-105.4,32.8],[7.3,-70.9,31.4,-70.5,38.9,-64.2,38.6,-64.7,31],[9.8,-71.9,31.5,-79.2,32,-78.7,38.9,-71.4,38.4],[9.1,-79.3,39.3,-79.5,34.2,-89,34.7,-88.7,39.8],[9.1,-85.4,24.4,-91,24.6,-90.9,27.7,-89.3,27.6,-89.1,34.1,-85,33.9],[7,-71,30.3,-71.6,23.3,-77.7,23.8,-77.1,30.8],[7,-78.1,23.8,-84.6,24.2,-84,33.2,-79.9,32.9,-80,30.2,-77.8,30.1],[8.9,-64.3,22.9,-70.1,22.9,-70.1,30.1,-64.2,30.1],[7.6,-164.7,46.8,-153.6,45.3,-154.4,39.8,-165.4,41.3],[7.2,-200.3,33,-199.3,40.2,-195,39.6,-196,32.4],[7.2,-166.3,31.7,-174.8,32.2,-174.5,38.4,-165.9,38],[7.5,-163.2,28.3,-163.2,21.6,-175,21.8,-174.9,28.5],[7.8,-125.2,30.9,-141.7,31.8,-141.2,40.7,-124.7,39.9],[9,-147,25.1,-146.7,28.8,-138.1,28.2,-138.4,24.5],[8.9,-109.5,13.7,-115.4,14,-115,21.7,-109.1,21.4],[6.9,-97.1,12,-103.4,12.4,-102.8,20.6,-96.6,20.2],[7.4,30,-145.3,29.6,-151.5,20.5,-150.9,21,-144.7],[7.8,28.5,-160.8,22.2,-160.2,22.9,-153.4,29.1,-153.9],[6.2,26.8,-228.2,26.4,-232.9,17.9,-232.3,18.2,-227.6],[4.6,18.6,-150.5,14.2,-150.3,14.5,-144.2,18.9,-144.4],[6.7,21.2,-152.8,20.3,-158.3,13,-157.1,13.9,-151.6],[7.4,15.7,-191.7,9.3,-191.1,10.2,-181.3,16.6,-181.9],[8,17.4,-180.6,11,-180,11.8,-172.7,18.1,-173.4],[9.5,-17.7,-154.4,-18.2,-159.1,-20,-158.9,-20.1,-159.8,-25.3,-159.2,-24.7,-153.7],[7.3,34.9,-170.6,34.3,-177.6,27.1,-176.9,27.8,-169.9],[7.1,42.6,-170.3,42.2,-175.3,36.3,-174.8,36.7,-169.8],[3.2,44.2,-270.5,43.8,-273.9,35.3,-272.9,35.6,-269.5],[8,32.3,-143.3,33.1,-136.6,40.1,-137.4,39.4,-144.1],[7.1,35.8,-160.4,29.6,-159.8,30.3,-153.1,36.5,-153.7],[7.7,-39.4,28.5,-32.9,28.1,-33.4,21.1,-39.8,21.5],[6.8,-50.3,16.7,-51.2,7.7,-57.1,8.3,-56.3,17.3],[7.1,-49.6,-152,-50.2,-161.8,-59.8,-161.2,-59.2,-151.4],[3.7,-45.7,-166.4,-49.8,-166.1,-48.9,-155.7,-44.9,-156.1],[8.3,-47.2,-184.1,-51.9,-183.6,-50.6,-168.9,-47,-169.3,-47.2,-171.1,-46,-171.2],[6.8,-42.8,-379.3,-47.7,-379.7,-48.3,-372.2,-42.6,-371.6,-42.2,-375.3,-43.1,-375.4],[9.7,-56.5,-366.8,-56.8,-360.1,-49.6,-359.8,-49.3,-366.4],[6.2,-63.5,-367.1,-63.9,-360.7,-57.8,-360.3,-57.5,-366.7],[7.1,-49.4,30.3,-57.4,30.6,-57.1,38.4,-49.2,38.1],[8.5,-58.4,31.1,-64,31.4,-63.6,38.4,-58,38.1],[7.3,-56.2,28,-56.6,22.3,-63.5,22.8,-63.1,28.5],[9,-43.1,21.2,-49.1,21.6,-48.6,28.7,-42.6,28.4],[6.8,-39.8,-160.4,-43.9,-160,-43.4,-155.2,-39.3,-155.6],[8.1,-41.3,-377.5,-41.6,-372,-35.6,-371.7,-35.5,-373.4,-30,-373.1,-29.8,-376.9],[9.5,-29.7,-378.7,-29.4,-385.7,-40.7,-386.3,-41.1,-379.3],[7,-41.4,-180.7,-45.6,-180.3,-44.8,-171.8,-40.5,-172.2],[10.3,-41,28.9,-48.3,29.7,-47.6,36.5,-40.3,35.7],[7.1,348.2,-142,348.3,-146.5,341.5,-146.6,341.4,-142.2],[6.7,348.5,-147.6,348.6,-153.9,342.1,-154.1,341.9,-147.8],[6.7,342.3,-161.6,341.8,-155.2,346.3,-154.9,346.4,-156.1,348.3,-156,348.7,-161.1],[7,348.2,-162.3,348.9,-168.6,343,-169.3,342.3,-163],[6.6,349.4,-178.2,343,-178.6,342.6,-172.9,349,-172.5],[7.7,343.7,-187.4,349.8,-186.7,350.6,-192.8,344.5,-193.6],[7.4,349.4,-179.1,350.2,-185.3,343.8,-186.1,343,-179.9],[6.1,161.3,-65.3,154.8,-64.6,155.7,-56.3,162.2,-57],[11.1,199.3,-49.8,194.1,-49.5,194.8,-40.9,199.9,-41.3],[6.9,198.8,-102.5,192.5,-102.1,193,-95,199.3,-95.4],[7,188.8,-100.4,182.2,-99.7,182.9,-92.7,189.6,-93.4],[7.6,185.1,-210.8,179.5,-210.1,179.6,-208.9,174.7,-208.3,175.6,-197.6,180.1,-198.1,179.9,-200,186.2,-200.7],[6.8,176.4,-194.1,176.7,-190.8,178.6,-191,178.7,-190.3,181.5,-190.5,181.6,-190,186,-190.5,185.6,-195],[7.1,177.4,-184.6,187.2,-185.3,186.9,-189.7,178.8,-189.1,178.9,-188.3,177.1,-188.2],[9.8,188.3,-177,187.9,-184.7,184,-184.5,184.4,-176.8],[6.4,182.5,-182.4,178.2,-182,178.3,-181.2,175.5,-180.9,175.6,-179.8,174,-179.6,174.3,-176.1,183,-176.9],[-9999,177.9,-230.9,177.6,-234.5,175.3,-235.8,172.3,-235.6,172.7,-230.4],[7.1,178.8,-231,176.7,-218.4,184.3,-217.2,186.4,-229.7],[7.1,164.1,-92,157.9,-90.8,159.5,-82.4,165.7,-83.5],[11.1,166,-185,162.3,-184.7,163,-175.1,166.7,-175.3],[7.4,170,-191.4,169.8,-194.2,161.5,-193.6,161.7,-190.9],[6.4,167.8,-194.7,167.7,-195.7,169.6,-195.9,169.4,-198.6,160.8,-198.1,161,-196,161.7,-196.1,161.8,-194.4],[6.4,169.1,-200.4,169,-203.1,161.8,-202.6,161.9,-201.6,160.4,-201.5,160.6,-198.8,165.7,-199.1,165.6,-200.1],[9.8,168.4,-203.9,168,-208.4,164.6,-208.1,164.6,-208.8,159.8,-208.4,160.3,-203.2],[6.7,169.4,-224.3,164.9,-223.8,165.1,-221.5,164.5,-221.5,165.1,-215.8,170.1,-216.3],[7.5,167.2,-233.4,166.5,-240.1,162.3,-239.6,163,-233],[8.2,161.4,-181.9,157.4,-181.6,157.6,-180.1,156.6,-180.1,156.9,-175.9,158,-176,158.1,-174,162.1,-174.4],[7.2,177.9,-116.9,170.1,-115.9,171.8,-102.3,179.7,-103.3],[7.1,172.8,-182.4,169.8,-182.2,169.7,-183.5,167.1,-183.3,167.7,-175.8,173.2,-176.2],[9,170.7,-187,170.5,-189.8,162.4,-189.3,162.6,-185.6,169.2,-186,169.1,-186.9],[6.2,170.7,-216.1,174.4,-216.3,174.1,-220.6,175.9,-220.7,175.7,-223.8,170.2,-223.4],[6.7,176.6,-224.4,176.2,-229.6,169.5,-229.1,169.9,-224],[6.9,193.1,14.4,192.8,10.5,184.5,11.3,184.9,15.2],[4.9,192.2,8.8,192,2.8,183.3,3.1,183.6,9.2],[8.7,187.3,-80.8,191.8,-81.1,191.2,-90.7,186.6,-90.4],[8.1,198,-113,191.5,-112.5,192.1,-104.7,198.6,-105.1],[7.8,194.7,29.5,194.3,24.9,186.9,25.4,187.2,29.3,192.1,29,192.1,29.7],[6.4,194.3,24.2,193.9,20.1,185.9,20.9,186.1,23.2,186.7,23.1,186.9,24.9],[6.6,193.6,18.9,193.1,15.2,185.2,16.2,185.7,19.9],[7.6,136.2,-15.5,136.5,-11.7,141.9,-12.2,141.6,-15.9],[7.6,140.9,-179.6,136.8,-179.3,137.3,-172.1,141.4,-172.3],[6.8,145.6,-180.5,145.4,-183.5,143.2,-183.3,143.1,-183.9,136.9,-183.5,137,-181.8,136,-181.8,136.2,-179.8],[8.6,144.6,-184.9,144.4,-188.2,135.5,-187.8,135.6,-184.5],[8,144.5,-189,144.3,-192.4,142,-192.2,142,-192.8,136,-192.5,136.1,-190.5,135.1,-190.4,135.2,-188.4],[7.3,144,-193.8,143.7,-196.7,141.6,-196.5,141.5,-197.3,135.6,-196.8,135.7,-194.9,134.9,-194.9,135,-193.1],[7.2,143.7,-198.1,143.4,-201.2,141.1,-201,141,-201.8,135.1,-201.2,135.3,-199.6,134.3,-199.5,134.5,-197.2],[7.6,143.4,-202.4,143.2,-205.3,138.7,-205,138.6,-206.1,134.8,-205.8,135.1,-201.7],[8,142.3,-213.1,141.6,-219.6,133.7,-218.7,134.4,-212.2],[8.1,142.5,-250.7,137.9,-252.2,138.3,-247.1,137.5,-247.1,138,-242,143.3,-242.5],[10.1,117.4,-83.3,117.8,-78.1,126.2,-78.8,125.8,-83.9],[7.2,133.1,-85.7,127.3,-85.2,127.9,-78.7,133.7,-79.3],[6.9,130.7,-135.3,130.4,-140.7,124.5,-140.3,124.9,-134.9],[6.6,139.2,-150.1,135.1,-149.7,135.7,-144,136.4,-144.1,136.5,-142.8,140,-143.2],[8.4,113.1,-162.4,116.5,-162.6,115.9,-171.2,112.5,-171],[6.7,120.8,-172,116.6,-171.6,117.5,-162.8,121.7,-163.2],[7,126.2,-172,122.3,-171.7,122.9,-163.5,126.8,-163.8],[7.2,130.9,-173.1,126.9,-172.7,127.8,-163.8,131.7,-164.2],[7,136,-172.8,131.5,-172.3,132.3,-164.5,136.8,-164.9],[7.2,126.7,-178.2,130.6,-178.6,129.6,-187.2,125.8,-186.8],[6.8,125.2,-185.8,121,-185.4,121.6,-178.7,122.8,-178.8,122.9,-177.8,126,-178.1],[6.2,119.7,-184.6,115.4,-184.2,115.9,-178.5,116.9,-178.6,117.1,-176.9,120.4,-177.2],[6.3,114.6,-183.9,111.1,-183.6,111.8,-176.4,115.3,-176.8],[6.5,113.6,-189.7,113.3,-193.5,105.8,-193,106.1,-189.2],[7.3,113.2,-194.4,112.9,-197.5,105.1,-196.8,105.4,-193.7],[5.5,128.4,-247.7,131.9,-247.2,132.8,-253.8,129.3,-254.3],[9.5,126.9,-240.9,120.2,-240.4,120.7,-231.8,127.4,-232.3],[5.6,125.1,-248.9,119.5,-248.4,120.1,-242.9,125.6,-243.4],[7.3,128.4,-241.2,136.9,-241.6,136.6,-246.7,128.1,-246.3],[10.2,133.9,-232.1,133.1,-239.5,127.7,-238.9,128.4,-231.5],[6.1,131.6,-176.9,136,-177.4,135.6,-180.9,135,-180.8,134.3,-187.8,130.4,-187.3],[8.8,134.6,-190.2,133.8,-197.3,129.3,-196.8,128.4,-204.9,120.5,-204,122.2,-188.8],[7,109.9,-183.7,105.2,-183.2,106,-176.7,107.3,-176.8,107.5,-175.6,110.8,-176],[10.3,112,-162.4,111.3,-170.8,107.8,-170.5,107.9,-169.1,106.8,-169,107.3,-162],[6.9,135.3,-143.4,134.3,-149.8,126.6,-148.6,127.5,-143.3,130.1,-143.6,130.3,-142.6],[6.4,98.6,-329.7,98.5,-322.6,110.1,-322.4,110.2,-329.5],[7.2,131.1,-141,131.7,-134.3,135,-134.7,135.1,-133.3,140.1,-133.8,139.8,-137.1,140.8,-137.2,140.4,-141.9],[5.2,85,-17.3,77.3,-16.7,78.2,-5.5,88.9,-6.4,88.5,-10.3,85.6,-10.1],[8.3,84,-29,83.2,-39.7,73.8,-39,74.6,-28.3],[3.2,82.3,-267.7,82.2,-270.4,73.3,-272.3,73.5,-267.3],[7.4,101.3,-13,90.8,-11.9,91.2,-7.7,94.5,-8,94.6,-6.7,101.9,-7.5],[8,91.2,-24.8,91.4,-19.8,100.7,-20.3,100.4,-26,94.2,-25.6,94.3,-25],[9.3,101.1,-13.8,100.8,-18.5,91.6,-17.9,91.9,-13.2],[5.2,153.1,2.4,147.1,2.7,148,17.8,154,17.4],[7,142.5,-177.6,143.1,-172.3,148,-172.9,147.9,-174,149,-174.1,148.6,-178.3],[5.9,141.1,19.6,127.6,21.1,128.7,30.9,142.2,29.4],[-9999,158.3,-3.4,153.5,-3,154.1,5.5,158.9,5.2],[10.1,164.8,-43.8,148.5,-42.1,152,-9.3,168.3,-11],[6.7,159.1,-74.4,158.8,-80.5,147.8,-79.9,148.1,-73.8],[8,158.9,-195.5,158.5,-199.5,150.4,-198.6,150.8,-194.6],[9.4,159.5,-190.9,159.2,-194.6,151.8,-194,151.9,-193.2,150.7,-193.1,151,-190.2],[7.5,156.6,-174.4,156.2,-179.1,150,-178.5,150.4,-173.9],[4.5,153.8,-69.6,149.6,-69.2,150.9,-55.2,155,-55.6],[2.9,334.4,-39.9,333.9,-34.4,338.4,-34,338.9,-39.5],[7.1,335,-94,334.4,-98.6,327.3,-97.8,327.9,-93.2],[3,314.7,-8.8,314.2,-14,310.7,-13.7,311.1,-8.5],[10.1,327.3,-93,325.6,-110.6,316.5,-116.9,314.6,-116.7,317.1,-92],[6.7,339.9,-139.4,336.5,-139.7,335.9,-133.8,339.3,-133.5],[6.8,336,-139.7,331.6,-140.3,330.9,-134.7,335.2,-134.1],[8.6,329.8,-135.4,330.6,-140.4,326.9,-141,326,-136.1],[6.7,329.5,-141.5,330.3,-146.5,321.1,-147.9,320.3,-142.9],[7.2,341.2,-149.1,341.4,-155.1,334.6,-155.2,334.6,-156,327.2,-156.2,327.1,-149.3],[6.7,321.1,-156.5,320.7,-150.5,326.5,-150.2,326.9,-156.2],[8.9,319.9,-157.7,320.3,-163.5,310.4,-164.2,310,-158.4],[7.2,311.5,-172.8,310.7,-165.1,317.1,-164.5,317.2,-165.2,319.6,-165,320.4,-171.9],[7.8,328.8,-156.9,329.7,-163.2,321.6,-164.3,320.9,-159.1,325.6,-158.4,325.5,-157.3],[7.3,340.1,-163.1,340.3,-164.7,341.8,-164.6,342.2,-169.4,335.1,-169.9,334.6,-163.5],[7.2,342.3,-187.5,342.9,-193.3,335.6,-193.9,335.1,-188.2],[6.9,334.4,-194.1,329.2,-194.8,328.4,-189.2,333.6,-188.5],[7,326.2,-194.7,321.6,-195,321.1,-190.1,325.7,-189.7],[6.7,341.6,-180.4,342.2,-186.2,333.7,-187,333.1,-181.3],[7.1,342,-179.2,338.3,-179.3,338.2,-173.3,341.9,-173.2],[7.3,326.1,-216.7,325.7,-212.7,328.5,-212.5,328.4,-210.6,332.5,-210.3,333,-216.1],[6.9,319.6,-220.6,320.1,-226.6,314,-227.1,313.5,-221.1],[6.7,325.4,-217.6,313.7,-217.9,313.5,-212.9,325.2,-212.6],[7,325.7,-141.5,319.6,-142.6,318.2,-135.3,321.2,-134.7,321,-133.4,324.1,-132.9],[8.6,337.7,-179.7,333.2,-179.8,333.1,-173.9,337.6,-173.8],[6.8,320.7,-175.6,331.2,-174.3,331.9,-180.5,321.5,-181.7],[6.5,320.1,-183,320.8,-189.2,312.1,-190.2,311.4,-184],[6.5,305.1,-194.8,305.5,-200.1,301.3,-200.3,301,-195],[3.4,214.5,-301,214.5,-296.2,224.3,-296.2,224.4,-301],[6.7,380.9,11.6,381.7,6.7,372.1,5.2,371.3,10.1],[4,382.1,4.2,382.7,-1.7,372.1,-2.9,371.5,3],[7.6,365,-130.5,365.7,-136.8,358.8,-137.6,358,-131.3],[7,365.3,-138.2,366.3,-143.6,359.3,-144.9,358.3,-139.5],[8.9,365.7,-146.1,366,-151.1,359.3,-151.6,359,-146.5],[6.7,366.1,-151.8,366.5,-158.8,359.4,-159.2,359,-152.2],[6.9,366.2,-159.7,366.4,-165,360.7,-165.3,360.5,-160],[7.4,365.2,-129.9,358.3,-130.1,358,-118.6,364.9,-118.3],[7,369.2,3.5,370.1,-3.1,358.3,-4.6,357.3,3,364.3,3.9,364.5,2.9],[7.4,370.4,20.2,370.9,13.1,360,12.3,359.6,18.6,360.5,18.7,360.4,20.7,366.8,21.2,366.8,20],[6.1,353.8,-154.4,349,-154.4,349.1,-146.5,353.9,-146.5],[8.6,348.1,-131.5,347.7,-125.9,353.8,-125.4,354.2,-131],[7.1,354.3,-131.7,354.6,-137.7,348.7,-138.1,348.4,-132.1],[6.8,354.3,-139.6,355.1,-144.8,349.5,-145.6,348.7,-140.4],[6.8,355.4,-155.5,356,-168,349.5,-168.3,349.1,-160.2,350.5,-160.2,350.3,-155.7],[6.7,350.3,-177.4,349.9,-172.1,356.3,-171.6,356.5,-174.6,356,-174.7,356.2,-177],[8.5,356.7,-184.9,350.5,-185.5,349.9,-179,356.1,-178.4],[7.9,72.8,-171.6,80.7,-172.3,79.6,-184.9,71.7,-184.2],[8.1,-341.4,-22.6,-337.2,-23.3,-338.9,-32.8,-352.4,-30.3,-350.6,-20.6,-346,-21.5,-346.2,-22.4,-341.5,-23.3],[2.5,-339.5,-22,-345.4,-20.8,-344.5,-16.4,-338.5,-17.6],[8,-348.3,-33.9,-351,-43.7,-355.6,-42.5,-352.8,-32.6],[9.6,-356.5,-143.7,-357.4,-146.8,-363.9,-145.1,-362.6,-140.3,-357.9,-141.6],[7,-215.9,-219,-215.2,-213.7,-209.3,-214.5,-210.1,-219.8],[4.1,-234.6,-32,-225.9,-32.3,-226.2,-39.1,-227.5,-39,-227.5,-39.5,-234.8,-39.3],[6.7,-224.5,-206.5,-223.1,-206.7,-223.7,-212.4,-230.5,-211.6,-230.4,-210.3,-236.1,-209.6,-235.2,-201.6,-228.5,-202.3,-228.7,-204.3,-224.3,-204.8],[7.9,-229,-215.3,-228.6,-212.9,-225,-213.4,-226.2,-220.9,-235.5,-219.5,-234.7,-214.4],[8.3,-210.7,-63.7,-202.5,-64.8,-203.9,-76,-212.1,-74.9],[8,-328.7,-39.2,-321,-41,-323.3,-50.8,-331,-49],[7.2,-283.1,10.2,-290.9,11.5,-290.7,12.4,-291.1,12.4,-290.5,15.7,-286.3,15,-286.1,16.8,-282.3,16.3],[6.7,-284.3,3.4,-292.2,4.8,-291.6,9.6,-287.1,9.1,-286.9,10.2,-283.2,9.5],[6.6,-286.9,-16.3,-294.6,-14.8,-293.9,-10.9,-294.3,-10.8,-293.7,-7.8,-292.8,-7.9,-292.1,-4.4,-284.8,-5.8],[4.4,-286.5,-17.1,-285.7,-11.8,-283.8,-12.1,-283.4,-9.4,-278,-10.3,-278.1,-10.8,-276.6,-11,-277.7,-18.4],[14.5,-263.4,-64,-268.7,-63.4,-268.6,-62.9,-278.6,-61.6,-277.9,-52.9,-282.3,-52.1,-278.4,-33.4,-268.7,-35.6,-259.9,-36.6,-261.2,-42.4,-260.6,-42.5],[3,-326.6,17.3,-322,16.7,-322.7,11.3,-327.3,12],[7,-315,-177.5,-305.9,-178.8,-307.2,-188,-316.3,-186.6],[3.8,-245.7,-49.5,-241.7,-50,-242.8,-57.9,-248,-57.2,-247.2,-51.1,-246,-51.2],[9.1,-308.9,50.2,-304.3,49.5,-305.4,42.2,-310.1,42.9],[9.3,-313.9,51.2,-309.1,50.3,-310.5,42.9,-315.3,43.8],[7.8,-302.4,62,-293.6,60.8,-294.5,54.6,-295.4,54.7,-295.7,53.2,-303.4,54.3],[7,-138.5,-336,-138.6,-329.7,-134.5,-329.6,-134.4,-330,-122.7,-329.9,-122.6,-335.8],[7.6,-118,-292.4,-121.7,-292.2,-121.1,-282.3,-112.6,-282.9,-112.4,-280.7,-109.9,-280.9,-110.6,-291.6,-118,-291.1],[7.2,-99.8,-345.9,-99.6,-351.5,-108.9,-352,-109.3,-343.3,-102.9,-343,-102.8,-346],[8.7,-91.2,-288.2,-90.7,-282.8,-86.4,-283.1,-87.1,-292.2,-98.8,-291.3,-98.5,-287.6],[8.9,-93.7,-287.6,-98.3,-287.1,-97.6,-280.4,-94.6,-280.7,-94.7,-281.4,-93.1,-281.6],[9.5,-121.4,-63.7,-117,-64.2,-118.1,-72.6,-122.2,-72.3],[9.3,-105.7,-65.9,-106.6,-73.9,-111.8,-73.3,-110.8,-65.2],[9.6,-113,-57.9,-112.3,-51.8,-106.4,-52.4,-107.1,-58.5],[9.2,-105.9,-73.9,-104.9,-64.4,-100.7,-64.8,-101.6,-74.3],[9.8,-106.4,-58.8,-105.7,-52.6,-100.1,-53.2,-100.8,-59.4],[7.6,-148.4,-208.7,-147.9,-201.5,-144.8,-201.7,-144.9,-203.8,-142.6,-204,-143,-209.1],[8.8,-153.8,-250,-152.6,-239.5,-145.8,-240.3,-147,-250.8],[7.1,-165.7,4,-155.9,3.9,-155.9,-1.3,-165.8,-1.2],[7.5,-198.5,-139.9,-185.2,-141.6,-185.9,-147.1,-188.1,-146.9,-188.3,-147.9,-199.3,-146.6],[6.8,-151.5,-231.7,-145.2,-232.7,-146,-237.5,-152.3,-236.5],[8.6,-185.1,-299.6,-185.1,-297.7,-183.4,-297.8,-183.5,-304.6,-191,-304.5,-190.9,-299.5],[8.9,-182.5,-285,-182,-280.3,-175.4,-281.1,-176,-287.1,-180.1,-286.7,-179.9,-285.3],[7.1,-142.6,-117.5,-135.7,-118.1,-136.2,-124.8,-143.1,-124.2],[2.7,-157.9,28.8,-153.9,28.7,-154.1,24.1,-158.1,24.2],[7.5,-38.7,-366.7,-39.1,-358.2,-34.2,-358,-34.1,-359.5,-29.3,-359.3,-28.9,-366.2],[7.4,27.1,-226.8,16.7,-225.6,17.7,-216.5,21.4,-216.9,22.5,-207.5,29.1,-208.3],[3.8,49.9,9.3,49.5,4.9,45.6,5.3,48.5,32.5,51.4,32.2,48.9,9.4],[7.5,187.1,-41.2,193,-41.6,192.5,-50.3,186.6,-49.9],[8.5,189.5,-211.9,189.9,-206.2,196.1,-206.6,196.1,-207.4,202.6,-207.9,202.2,-212.8],[4,191,-160,195.9,-160.4,195.1,-170.4,190.2,-170],[9.8,123.7,-19.8,124.3,-19.9,125.2,-11.3,132.5,-12,132,-17.2,140.9,-18.1,139.8,-29.3,149,-30.2,147.6,-44.7,121.6,-42.2],[5.3,115.2,-137.1,115.1,-137.7,118.8,-137.9,118.4,-145.9,108.9,-145.4,109.2,-139.4,112.7,-139.6,112.8,-136.9],[8.5,101.1,-33.5,113.2,-34.8,112.4,-42.7,100.2,-41.5],[7.6,122.7,-141.4,125.8,-141.6,125.2,-147.8,120.5,-147.4,120.6,-146.2,119.2,-146,120.1,-136.5,123.2,-136.8],[9.4,110.8,-248.7,111.2,-245.9,118.7,-246.9,116.8,-260.8,106.5,-259.5,106.3,-261,102.8,-260.5,103,-259.1,96.1,-258.2,97.6,-246.9],[11.2,137,-103.9,141.2,-104.4,140.1,-114.7,135.9,-114.2],[10.9,133.8,-103.9,136.3,-104.2,135.1,-114.4,130.9,-113.9,132.2,-102.7,133.9,-102.9],[5.5,158.2,-68.2,158,-70.2,154.6,-69.9,155,-65.6,161.2,-66.2,161,-68.5],[5,152.5,-3.1,156.4,-3.5,156,-7.6,154.3,-7.4,154.1,-8.7,151.9,-8.5],[7.3,154,7.1,154.6,15.8,166.8,14.9,166.2,6.3],[9.5,209.9,-42.5,219.9,-43.4,219.6,-46.7,221,-46.8,220.7,-49.5,219.3,-49.4,219,-53.3,209.1,-52.5],[3.6,53.4,-162.9,63.4,-164,62.2,-175.3,52.2,-174.2],[10,-400.5,-8.1,-396.8,-8.7,-397.2,-11.1,-396.4,-11.2,-397,-15.5,-401.5,-14.9],[10.3,-395.7,-10.9,-391.1,-11.6,-391.4,-13.6,-388,-14.1,-388.4,-16.8,-396.4,-15.6],[10.1,-255.5,42.4,-254.4,49.7,-245.3,48.4,-246.3,41.1],[7.5,-255.6,21.1,-260.4,21.8,-258.3,36.4,-253.5,35.7],[7.9,-252.1,39.5,-245.5,38.5,-247.7,23.8,-254.2,24.7],[8.3,-245.9,30,-240.3,29.2,-241.3,22.1,-246.9,22.9],[8.1,-250.5,5.1,-251.4,-2.3,-262.2,-.9,-262,-0,-265.4,.4,-264.5,6.9],[7,-167.6,-33.9,-174.4,-33.2,-173.8,-26.9,-174.6,-26.8,-174.1,-21.6,-166.4,-22.4],[6.4,-118.2,-7.4,-117.8,-3.1,-114.4,-3.4,-114.2,.1,-110.2,-.2,-109.9,3.8,-91.4,2.4,-92.3,-9.4],[8.4,-70.6,18.3,-64.9,17.9,-65.5,10.1,-71.2,10.5],[11.8,-82.9,-79.3,-84.4,-79.2,-83.9,-74.7,-74.2,-75.8,-74.7,-80.1,-75.9,-80,-76.9,-88.9,-78.1,-88.8,-78.3,-90,-84,-89.4],[9.8,208.1,-52,204.6,-51.7,205.4,-42.1,209,-42.4],[9.7,204.1,-50.7,200.5,-50.4,201.3,-41.7,204.9,-42.1],[5.6,217,-1.9,217.6,3.5,224.6,2.7,224,-2.7],[9.3,203.2,-82,207.1,-82.5,205.9,-92.7,202,-92.2],[9.3,210.6,-92.8,207,-92.5,208,-82.7,211.6,-83.1],[9.4,212.4,-84.4,216.6,-85,215.5,-93.6,211.3,-93],[7.4,176.7,-57.2,175.5,-69.1,164.1,-68.1,164.8,-60.9,166.2,-61,166.7,-56.3],[8.5,156.9,-116,148.8,-115.3,149.9,-103.3,158.1,-104.1],[8.4,148.3,-115.3,146.6,-115.1,146.8,-113.1,143.2,-112.7,144.4,-102,149.7,-102.6],[9.3,145.7,-100.8,145.9,-97.3,154.9,-97.9,154.7,-101.4],[9.3,146.3,-96.7,146.5,-93.8,155.3,-94.4,155.1,-97.3],[9.1,147.5,-81.1,156.6,-82.1,156.3,-85.5,153.5,-85.2,153.3,-86.6,154.5,-86.7,154.2,-89.3,153.1,-89.2,152.9,-90.3,153.9,-90.4,153.6,-92.8,146.2,-92],[3.2,63.3,-143.6,66.4,-143.9,65,-156.4,61.9,-156.1],[8,36.2,-175.3,40.4,-175.7,40.1,-178.1,42,-178.3,40.8,-190.8,34.7,-190.2],[8.5,22,-168.3,22.7,-162.6,23.4,-162.7,23.6,-160.9,31.2,-161.8,31.3,-161,34.5,-161.4,33.6,-169.6],[25.8,-165,-108.4,-164.8,-105.5,-158.6,-105.9,-158.8,-108.8],[9.7,-141.5,-138.9,-137.7,-139.2,-138.1,-143.2,-137.5,-143.3,-137.7,-145.6,-142,-145.3],[9.4,-142.6,-145.3,-146.9,-144.8,-146.3,-139,-142,-139.4],[9,-263.2,-147.2,-262.4,-144.1,-257.2,-145.4,-257,-144.8,-249.3,-146.7,-250.2,-150.4],[8.7,-262.1,-143.5,-259.6,-128.7,-242.2,-132.4,-245.4,-147.1],[8.2,-276.5,-86.8,-281.4,-85.4,-281.2,-84.9,-284.7,-83.9,-281.9,-74.2,-273.6,-76.5],[9.6,-248.5,-209.4,-248.1,-205.6,-237.8,-206.7,-238.2,-210.5],[6.3,149.5,-222.9,153.4,-223.4,152.2,-233.1,148.3,-232.6],[8.9,154.6,-218.6,162.7,-219.5,162.3,-223.4,163.2,-223.5,162.5,-229.6,153.5,-228.6],[9.7,153.3,-229.9,162.1,-231.1,161.8,-233,160.4,-232.8,159.1,-242.7,151.7,-241.7],[9.7,-269.9,-272.3,-266.9,-272.4,-266.9,-273,-259.7,-273.1,-259.8,-280.5,-267.6,-280.4,-267.7,-281.7,-270,-281.6],[7.1,-327.7,-227.7,-324.2,-228.1,-324.1,-227.7,-317.3,-228.6,-319,-241.3,-329.3,-239.9],[7.6,-158.1,-282,-157.7,-276.1,-146.3,-276.9,-146.7,-282.8],[9.3,-171.2,-268.7,-166.3,-269.4,-166.1,-268,-161,-268.7,-162.5,-279.3,-165.2,-278.9,-165.2,-279.4,-172.5,-278.4],[9.4,-180.7,-333.9,-174.9,-333.4,-174.3,-341.7,-180.2,-342.1],[8.3,-95.2,-340.1,-95.5,-336.3,-86.2,-335.7,-85.9,-339.6],[9.6,-90.8,-327.9,-85.6,-327.6,-85.5,-330.3,-86.2,-330.3,-86,-334.8,-90.4,-335],[9.4,-91.3,-334.8,-95.2,-335,-95.3,-334.3,-96.5,-334.3,-96.6,-330.3,-94.9,-330.2,-95.1,-327.3,-91.7,-327.2],[9.9,324.4,-130.3,327.6,-129.2,327,-127.4,329,-126.7,328.8,-126.2,331.4,-125.3,332.2,-127.8,331,-128.3,332.4,-132.5,329,-133.7,329.2,-134.3,326.1,-135.3],[9.5,331.9,-145.4,331.5,-141.5,339.9,-140.5,340.3,-144.5],[4.2,331.8,-162.6,331.4,-157.8,335,-157.5,334.9,-156.3,340.3,-155.8,340.8,-161.8],[9.4,321.3,-169.5,320.8,-165.1,331.5,-163.7,332.1,-168.2],[6.7,321.7,-188.5,320.9,-182.7,330.4,-181.3,331.3,-187.2],[8.5,319.7,-189.7,320.2,-194.3,312.3,-195.2,311.8,-190.6],[9.1,319.2,-242.7,315.7,-243.2,314.5,-235.9,318.1,-235.3],[5.5,123.8,-282.8,125.4,-282.9,125.4,-282.5,127.1,-282.5,127.1,-283.5,129.5,-283.6,129.4,-289.5,123.8,-289.4],[9.4,-7.4,34.8,-3.7,34.5,-3.8,33.5,.5,33.1,.6,34.1,4.1,33.8,3.4,26,4.2,25.9,4,23.2,3.2,23.3,3,21.6,3.9,21.5,3.6,17.9,-8.8,19],[9.6,-183.6,46.9,-177.3,46.4,-177.9,39.1,-178.9,39.2,-179.1,36.2,-175.9,36,-176.2,31.3,-184.8,32.1],[9.6,-204.2,42.4,-203.7,49.1,-194.4,48.3,-194.6,46.8,-192.1,46.6,-191.9,48.5,-189.6,48.3,-189.7,47.4,-187.2,47.2,-187.7,41,-188.3,41,-188.5,38.2,-185.7,38,-186.1,32.5,-194.7,33.2,-194.1,41.5],[14.4,-169.1,-171.1,-174.1,-170.5,-174,-169.8,-176.9,-169.5,-176.7,-167.6,-179.9,-167.2,-178.2,-152.6,-179.1,-152.5,-178.7,-149.4,-166.8,-150.8],[9.5,-137.3,-370.1,-138,-358.7,-86.9,-355.7,-86.2,-366.5,-94.2,-366.9,-94,-370.9,-96.9,-371.1,-97.1,-367.4,-124.7,-369,-124.5,-372.9,-127.2,-373,-127.4,-369.4,-128.3,-369.4,-128.1,-373.1,-130.9,-373.2,-131.1,-369.7],[27.8,-8.6,-78.2,-9.8,-89.4,-37.2,-86.6,-37.6,-89.8,-41.7,-89.4,-40.2,-75],[15.1,16,-222.1,14.9,-233.5,-15.1,-230.5,-14.7,-226.2,-11.8,-219.3],[9.1,178.9,4.9,168.9,6,171.2,26.7,171.9,26.6,172.3,30.8,179,30,178.9,29.1,181,28.9,180.8,27.4,182.4,27.2,181.9,23,183.6,22.8,182.9,16.2,181.5,16.4,180.5,7.3,179.1,7.5],[10.2,-259,-160.3,-256.6,-150.1,-246.1,-152.5,-248.5,-162.7],[12.4,-263.4,-168.7,-263.1,-167,-251.1,-169.1,-253,-179.7,-265.8,-177.5,-264.2,-168.5],[9.7,-146.4,-295.5,-146.3,-304.5,-173.5,-304.6,-173.6,-295.6],[17.5,-210.9,-251.3,-200.5,-253.6,-204.6,-272.7,-215.1,-270.5],[9.4,-134.6,-324.1,-134.6,-324.5,-137.8,-324.7,-138.6,-315.4,-138,-315.4,-138.1,-314.5,-118.6,-312.9,-118.5,-313.6,-117.9,-313.6,-117.2,-322.9],[16,-41.9,-301.8,-41.7,-289.8,-28.1,-290.1,-28.4,-302.1],[29.4,-340.3,-85,-327.9,-84.9,-327.8,-109.7,-340.8,-109.7,-340.8,-109,-341.7,-109,-341.7,-107.2,-342.5,-107.2,-342.6,-98.6,-346.4,-98.6,-346.4,-96.1,-342.7,-96.1,-340.9,-78.4,-341.4,-78.2,-342.3,-81.8,-344.9,-81.2,-344,-77.7,-352.5,-75.7,-352.1,-73.7,-354.9,-73.1,-351.8,-59.9,-320.6,-67.2,-323.7,-80.4,-324.5,-80.2,-324.8,-81.5,-338.8,-78.5],[10,-395.7,-7.8,-394.8,-3.3,-391.8,-3.9,-391.9,-4.3,-386.9,-5.2,-387.1,-6,-386.1,-6.2,-386.8,-9.4],[9.4,-363.3,-5,-367,-4.5,-366.6,-2.4,-378.7,-.3,-375.9,10.8,-369.4,9.8,-369.4,8.9,-362,7.6],[9.2,-271.2,-124.5,-268.8,-114.1,-244.7,-119.4,-247,-129.8],[10,-323,-208.9,-331.7,-207.6,-329.7,-194.1,-320.9,-195.4],[9.2,-296.5,-160,-298.4,-169.8,-302.3,-169,-300.3,-159.2],[11.4,-303.7,-175.8,-302.3,-169.8,-298.1,-170.8,-297.9,-170,-296.2,-170.4,-298,-177.3],[12.7,-199.8,-155.3,-198.9,-147.8,-187.7,-149.2,-188.6,-156.6],[9.4,-185.2,-114.6,-196.9,-113.4,-194.8,-92.8,-183.1,-94],[27.4,-167.5,-111.8,-171.9,-111.4,-171.8,-110.9,-177.2,-110.4,-177,-108.3,-182.8,-107.8,-181.8,-96.8,-166.3,-98.2],[18.1,-188.1,-21.1,-177.2,-21.9,-177.5,-27,-176.8,-27,-177.5,-37.2,-173.6,-37.5,-173.8,-40.2,-174.6,-40.2,-174.7,-41.7,-177.8,-41.5,-178.9,-55.4,-190.6,-54.6],[12.8,-30.9,-265.1,-31.5,-265,-31.6,-266.2,-43.7,-264.9,-43.5,-263.3,-45.6,-263.1,-43.1,-240.7,-40.9,-240.9,-39.2,-225.1,-26.6,-226.5],[9.2,140.9,13,146.5,12.3,145.5,3.4,139.9,4.1],[13.4,126.6,-9.2,127.9,2.5,151.2,-.1,149.9,-11.7],[9.6,148.1,-221.5,148.2,-220.8,143.8,-220.2,144.6,-214.4,147.3,-214.7,147.6,-212.7,151.5,-213.2,151.2,-216,153.9,-216.3,153.2,-222.2],[10.5,318.7,-197.7,318.9,-199.9,319.4,-199.9,319.7,-203.9,316,-204.2,316,-203.4,312.7,-203.7,312.3,-198.2],[13.1,-280.1,-20.9,-267.4,-23.9,-270,-34.8,-283.8,-31.6,-283.5,-30.4,-284.5,-30.1,-283.2,-24.4,-281.1,-24.9],[9.5,-355.8,-171.8,-354.5,-164.2,-350.8,-164.8,-352.1,-172.5],[10,-351.6,-171.6,-349.4,-162.7,-345.5,-163.6,-347.7,-172.6],[9.7,110.2,-33.9,100.1,-32.8,100.9,-25.4,111,-26.5],[9.6,-175.9,-136.2,-176.6,-144.9,-179.1,-144.7,-178.4,-136],[10.1,-168.6,-137.3,-169.5,-145.6,-171.9,-145.3,-171.1,-137],[10.5,-164.7,-137.8,-165.8,-146.1,-168.4,-145.8,-167.3,-137.5],[23.6,-43.6,-86.8,-48.2,-86.4,-48.6,-90.3,-51.1,-90.1,-50.8,-87.3,-66.6,-85.9,-66.8,-88,-68.6,-87.8,-68.7,-88.7,-71.1,-88.4,-70.6,-82.8,-73.4,-82.5,-72.1,-68.8,-65.9,-69.4,-66,-70.6,-42.7,-72.7,-42.4,-73.6],[12.8,-68.9,-291.5,-55.8,-291.7,-55.9,-303.2,-69.1,-303],[9.2,-267.4,-102.5,-254.4,-106,-255.1,-108.7,-252.6,-109.3,-254,-114.4,-269.1,-110.3,-272.6,-123.4,-278.3,-121.9,-271.1,-95.1,-265.8,-96.5],[9.6,-230.4,15.3,-219.1,13.7,-219.9,7.6,-231.3,9.2],[21.7,-337,53.6,-338.4,53.9,-339.4,49.7,-344.5,50.9,-344.1,52.8,-352.5,54.7,-352.1,56.5,-356.8,57.5,-354,70.3,-334.3,66],[34.6,-201.8,-6,-210,-5.4,-208.9,9,-201.8,8.4,-201.3,14.1,-196.1,13.7,-195.6,20.2,-177.4,18.9,-178.7,2.7,-188.7,3.5,-189,-.3,-201.3,.6],[11.6,-200.5,-152.2,-202.3,-167.1,-234.5,-163.2,-232.7,-148.3],[11.6,-146.6,-306,-146.2,-314.4,-147.4,-314.4,-147,-323.4,-155.1,-323.8,-156,-306.5],[18.1,246.7,-240.5,246.6,-233.2,249.7,-233.1,249.7,-232.2,247.1,-232.3,247,-225.2,248.1,-225.1,247.8,-205.3,246.7,-205.4,246.7,-202.3,248.7,-202.1,248.8,-200.2,251.6,-200.2,251.7,-199.3,262.9,-199.5,262.9,-200.2,265.5,-200.2,264.8,-240.8],[21.4,246,-219,244.7,-219.8,245.7,-221.5,241.6,-224.1,241,-227.2,239.6,-225,236.7,-226.9,237,-227.4,235.9,-228,235.6,-227.6,231.5,-230.1,230.7,-233.4,229.4,-231.4,221.3,-236.6,220.5,-235.3,218.7,-236.5,215.8,-231.9,215.1,-232.4,211.3,-226.5,213.3,-225.3,212.9,-224.6,240.9,-207.1,245.3,-214,244.4,-214.5,245.3,-216,244.4,-216.5],[9.1,-205.2,-102.3,-209.7,-101.8,-209.9,-103.8,-212.5,-103.6,-212.2,-101.4,-219.6,-100.6,-218.7,-91.5,-208.8,-92.5,-209,-94,-204.4,-94.5],[9.5,-225.9,-126.5,-224.8,-114.8,-185.9,-118.7,-187.1,-130.3],[25.3,-166.7,-64.6,-166.4,-60.3,-167.6,-60.2,-166.7,-48,-166,-48,-165.9,-46.9,-155,-47.6,-156,-61.8,-157.6,-61.6,-157.7,-62.3,-158.7,-62.2,-158.8,-63.1,-161.4,-62.9,-161.5,-65],[26.6,-90.1,-61.9,-89.5,-55.4,-88.8,-55.4,-88.3,-49.2,-71,-50.9,-72.2,-63.6],[23.4,-6.4,-42.1,-7.6,-54.8,-10.2,-54.5,-10.5,-57.8,-7.2,-58.1,-8,-67.2,-16.2,-66.4,-16.1,-65.4,-19.7,-65.1,-19.5,-62.8,-17.4,-63,-16.7,-55.8,-19.5,-55.5,-19.9,-59.4,-22.7,-59.1,-22.3,-55.3,-37,-53.8,-36.9,-53.1,-38.7,-52.9,-37.3,-39],[15.7,-8.1,-247.2,-7.8,-244.6,-12.3,-244.1,-12.1,-241.7,-10.1,-241.9,-10,-241.5,-13.2,-241.2,-12.6,-233.8,-10,-234,-9.8,-231.8,-1.1,-232.5,-1.3,-234.3,7.2,-234.9,6.2,-248.3],[15.2,-17.5,-276.2,-17.2,-260.6,-14.2,-260.6,-14,-249,5.7,-249.3,5.5,-263.3,3.8,-263.2,3.5,-276.6],[13.9,-56.2,-125.5,-55.9,-122.6,-53.1,-122.9,-53,-122.1,-67.5,-120.4,-66.8,-115,-64,-115.3,-63.4,-110.5,-16.5,-115.9,-17.1,-120.8,-14.4,-121.1,-15,-126.3,-50.6,-122.2,-51.1,-126.1],[17.4,-125.9,-173.3,-126.1,-174.9,-130.4,-174.5,-129.1,-161.3,-121.1,-162,-120.9,-159.3,-124.2,-159,-124.1,-158.1,-89.2,-161.5,-90.7,-176.3,-92.3,-176.1,-92.5,-178.5,-94.4,-178.3,-94.2,-176.4],[14.2,-105.7,-110.5,-105.1,-99.2,-101,-99.5,-100.9,-97.8,-98.8,-97.9,-99.6,-110.9],[23.9,-298.3,-186.1,-294.4,-166.8,-285.8,-168.5,-284.5,-162.2,-282.2,-162.6,-287.7,-189.9,-292.1,-189,-291.8,-187.4],[29.2,-297,-134.5,-287,-136.6,-286,-132.2,-279.7,-133.6,-282.5,-146.7,-285.1,-146.1,-286.4,-150.7,-291.8,-149.2,-290.8,-145.5,-291.7,-145.3,-291.5,-144.5,-299.2,-142.4],[11.2,-378.8,67.8,-379.5,72.8,-377.3,73.1,-377.4,73.8,-374.3,74.2,-374.2,73.6,-372.1,73.9,-371.3,68.9],[10.8,-397.4,26.7,-397.1,29.8,-398.7,29.9,-398.3,34.5,-388.4,33.5,-388.5,32.5,-385,32.2,-385.5,25.7],[14.2,145.2,-335.9,145.4,-339.3,148.4,-339.1,148.8,-344.8,127.6,-346.1,127.8,-348.8,122.8,-349.1,122.6,-346.5,104.9,-347.6,105,-349,99,-349.3,98.4,-338.7],[31,-104.8,-221.9,-105.3,-228.3,-110.2,-228,-112.7,-252,-114.5,-251.8,-115.2,-259.6,-132,-254.8,-127.3,-218.8],[36.3,75.8,12,53.4,14.4,53.7,17.6,50.6,17.9,52.2,32.4,66.7,30.8,66.6,30.2,77.6,29],[8,-266.8,12.2,-266,18,-260.1,17.1,-259.9,18.1,-248.7,16.5,-249.7,9.8],[10.3,-207,-62.7,-206.1,-56.4,-194.5,-58,-195.3,-64.2],[10.1,-396.9,43.8,-397.8,52.3,-384.6,53.8,-383.6,45.3],[11.7,-222,-72.9,-220.3,-61.9,-211.4,-63.2,-213,-74.2],[9.2,-210.1,-182.9,-217.4,-182,-216.5,-174.7,-209.2,-175.6],[29.5,50.5,-134,51.9,-120.4,80.5,-123.4,79,-136.9],[9.5,-216.7,-270.9,-220.6,-270.3,-220.9,-272.1,-225.7,-271.4,-223.8,-259.3,-215.1,-260.6],[9.7,-247,-4.2,-246.3,.3,-241.1,-.5,-241,-0,-237.8,-.5,-238.6,-5.5],[15.8,-272.9,-75.3,-261.3,-77.9,-263.8,-89.1,-266.7,-88.4,-267.1,-90.2,-269.3,-89.7,-269.5,-90.3,-273.8,-89.3,-273.2,-87,-275.4,-86.5],[12.9,-278.5,-152.9,-277.8,-149.2,-279.4,-148.9,-277,-136.9,-270.4,-138.2,-269.6,-134.6,-261.7,-136.2,-263.6,-145.5,-270,-144.3,-270.4,-146.6,-264.5,-147.7,-266.1,-155.4],[10.8,-282.8,-262.6,-290.1,-261.4,-289,-254.5,-281.7,-255.6],[10,-277.1,-18.7,-275.7,-8.1,-266.6,-9.4,-268,-19.9],[19.8,-221.1,-148.2,-219.2,-131.4,-199.4,-133.6,-201.3,-150.4],[12.1,-310.9,-247.7,-300.8,-249.2,-300.4,-246.8,-290.7,-248.3,-291.1,-250.5,-289.4,-250.8,-290.9,-260.7,-312.3,-257.5],[9.5,-316.2,43.8,-320.4,44.7,-319.1,51,-314.9,50.2],[11,-320.9,44.7,-324.5,45.4,-324.2,47.2,-325.3,47.4,-324.3,52.9,-319.5,52],[9.7,-214.5,-283.9,-214.9,-289.1,-211.3,-289.4,-211.8,-294.8,-241.1,-292.4,-241.4,-296,-248.3,-295.5,-247.2,-281.3],[10.2,-250.5,-67.9,-249,-58.3,-233.5,-60.6,-233.7,-61.9,-229.7,-62.5,-230.9,-70.9],[16.7,-232.5,-85.4,-234.8,-94.2,-237.1,-93.6,-237.5,-95.1,-245.9,-92.9,-246.6,-95.6,-250.9,-94.5,-247.5,-81.5],[10.4,-235.4,-99,-237.1,-106.1,-246,-104,-244.3,-96.9],[11.3,-63.5,-181.6,-71.8,-180.9,-70,-159.5,-61.7,-160.2],[13.2,-56.5,-316.3,-72.4,-316.1,-72.3,-305.8,-56.4,-306],[9.6,-58,-386,-65.3,-386.2,-65.5,-375.7,-58.2,-375.6],[12.8,-112,-109.5,-116.7,-109,-115.7,-97.9,-110.9,-98.4],[12.4,-109,-158,-115.3,-157.3,-114.6,-150.3,-108.3,-150.9],[14.7,-127,-130.4,-120.1,-131.2,-121.2,-140,-128,-139.2],[9.8,-102.9,-320.8,-108.4,-320.8,-108.4,-311.6,-102.9,-311.6],[9.4,-74.2,-181.5,-77.7,-181.2,-77.1,-172.3,-73.5,-172.6],[11.2,-74.8,-123.5,-83.2,-122.7,-82,-104.6,-78.2,-104.9,-78.1,-103.1,-73.1,-103.5],[12.2,-188,-185.3,-197.3,-184.4,-196.6,-175.8,-187.3,-176.6],[15.5,-162.1,-232.3,-153.3,-234.2,-154.6,-240.5,-153.4,-240.7,-154.2,-244.2,-155.4,-244,-156.3,-248.7,-165.2,-246.9],[18.4,-178.2,-222,-178.2,-224,-178.9,-224.4,-181.9,-223.9,-182.5,-223.4,-182.2,-221.4,-185,-220.9,-186.1,-218.6,-185,-210.3,-181.4,-210.8,-181.4,-211.6,-178.7,-211.7,-178.7,-211.1,-175.1,-211.7,-175.3,-212.3,-172.5,-212.4,-172.5,-211.7,-169,-212.2,-169.1,-213,-166.1,-213.2,-166.1,-212.4,-162.8,-212.7,-162.9,-213.6,-160,-214,-161.1,-224.1],[7.1,-5.6,-173.5,-10.5,-173,-9.7,-165.7,-4.8,-166.2],[9.4,-178.9,-344.6,-178.4,-351.2,-188.6,-352,-188.5,-352.7,-193.5,-353.1,-194.1,-345.7],[9.7,-174.6,-358.5,-171.5,-358.5,-171.6,-359.4,-168.8,-359.4,-168.9,-364.8,-174.7,-364.7],[10.8,-161.3,-172,-167.5,-171.4,-166.6,-161,-160.5,-161.5],[10,-138.5,-153.1,-139.9,-173.9,-153.6,-173,-152.3,-152.2],[12.2,-147.2,21.9,-124.2,20.1,-125,9.6,-135.4,10.4,-135.6,8.5,-147.5,9.4,-147,14.9,-147.8,15],[11.9,24.7,-191.8,21.6,-191.5,21.8,-189.3,19.7,-189.1,19.9,-186.4,20.9,-186.5,21.4,-181.1,25.7,-181.5],[9.8,-2.5,-132,-1.7,-124.3,15.4,-126,14.6,-133.8],[9.5,-.3,-183.2,-.9,-190.1,-10.9,-189.2,-10.2,-182.2],[9,4.4,-175.4,3.6,-182.5,-8.2,-181.3,-7.5,-174.2],[9.5,42.7,-115.2,41.4,-128.3,33.3,-127.5,34.6,-114.4],[9.9,-26.4,22.3,-32.3,22.6,-32,28.3,-26.1,28],[15.1,-53.9,-180.7,-60,-180.1,-58.7,-166.1,-52.6,-166.7],[9.8,92.8,29.1,90.8,12.4,87.5,12.8,89.4,29.5],[10.3,-29,-316.8,-33,-316.8,-33,-317.9,-34.3,-317.8,-34.2,-315.2,-41.2,-315.2,-41.1,-307.7,-29,-307.8],[7.4,204.4,-11,205.9,2,208.5,1.7,207.1,-11.3],[7,239.5,-51,241.8,-29.6,244.9,-29.9,242.6,-51.3],[12.1,-219.2,-131.4,-221.1,-148.2,-224.2,-147.9,-222.3,-131.1],[10.7,-56.1,-329.4,-64.8,-329.9,-65,-325.4,-56.3,-324.9],[10.8,-32.7,-328.1,-43.9,-328.7,-44.2,-324.1,-33,-323.4],[15.1,46.6,-384.5,43.8,-384.5,44.3,-300,47.3,-300,47.3,-305.3,53.8,-305.3,53.9,-303.8,70.9,-304,70.6,-344.2,46.9,-344],[14.5,204.9,-62,218.8,-63.1,217.6,-77,203.8,-75.9],[15,203.3,-187.6,199.5,-187.2,199.2,-190.2,194.1,-189.7,199.5,-140.6,197.7,-140.4,198.3,-135.1,208.9,-136.2],[12.3,186,-118.5,180.4,-118,181.2,-109.1,186.8,-109.6],[10.7,186.4,-108.2,182.1,-107.8,182.5,-102.4,186.8,-102.7],[11.3,186.4,-75.5,186,-80.1,179.3,-79.7,179.6,-75.1],[9.8,187.3,-75,179.9,-74.2,181.2,-61.9,188.5,-62.6],[10.1,160.5,-81.5,161.4,-71.1,179.1,-72.6,178.2,-83],[11.5,196.4,-121.4,190.5,-120.6,191.5,-113,197.4,-113.7],[8.5,199.7,-312.4,199.7,-317.8,196.4,-317.8,196.4,-322.3,166.3,-322.2,166.3,-312.3],[11,144.9,-232.6,143.8,-241.8,133.9,-240.6,135,-231.4],[14.3,145.5,-323.7,137.3,-323.7,137.3,-272.2,145.6,-272.2],[9.3,132.6,-218.8,129.1,-218.3,130,-211.9,133.4,-212.4],[10.2,136.5,-163.7,124,-162.1,125.5,-150,138,-151.6],[11.7,119.9,-199.4,114.1,-198.8,115.3,-188.1,121.1,-188.7],[13.6,115.6,-98.4,116.4,-91.2,130.4,-92.7,129.6,-99.9],[14.1,106.8,-321.4,98.6,-321.4,98.7,-283.2,106.9,-283.2],[12,122.3,-213.2,121.2,-223.2,108.8,-221.9,108.2,-227.4,100.6,-226.5,101.7,-216.7,103.6,-217,104.3,-211.2],[10.3,111.9,-122.1,124.3,-123.6,123,-134.1,110.6,-132.5],[9.1,84.3,-19.6,83.5,-25.7,75.5,-24.8,76.2,-18.7],[10.4,98,-41.8,90.6,-40.9,92.3,-26.2,99.7,-27.1],[13.1,84,-186,93.9,-186.9,92.6,-199.9,82.7,-199],[11.1,150.2,-246.9,146.1,-246.3,147.2,-238.4,151.3,-239],[11,343,-200.7,336.3,-201.5,335.7,-195.7,342.4,-195],[10.4,318.2,-148,310.4,-149,309.9,-145.2,314,-140.3,317.2,-139.9],[22.8,266.1,29.1,266.1,23.1,264.9,23.1,264.9,17.1,262.6,17.1,262.6,15.6,237.7,15.6,237.7,20.4,241.9,20.4,241.9,21.8,240.8,21.8,240.8,29.2],[7.6,-199.2,-315.7,-199.2,-310.9,-188.6,-310.9,-188.6,-315.7],[7.5,-199.5,-309.9,-199.3,-305,-188.4,-305.3,-188.6,-310.3],[9.2,-187.1,-325,-187.9,-325,-187.9,-325.8,-192,-325.9,-192.1,-325.3,-193.2,-325.3,-193.5,-317.3,-187.4,-317],[10,-199,-317.1,-193.9,-316.9,-193.5,-323.5,-194.3,-323.5,-194.2,-326.1,-198.5,-326.3],[10.2,384.7,15.2,383,23.1,391.1,24.8,392.8,16.9],[10,353.6,-119.9,354.3,-124.5,348,-125.4,347.3,-120.9],[7.1,-388.6,6.2,-389,6.2,-389,9.6,-388,9.5,-388,10.5,-386.4,10.5,-386.3,11.8,-381.1,11.8,-381.1,9.2,-382.9,9.2,-383,1.8,-384,1.8,-384.1,-1.8,-388.7,-1.8],[8.4,26.1,-178.4,21,-177.8,21.9,-169.2,27.1,-169.8],[10,-60.9,-154.8,-61.5,-159.7,-69.7,-158.8,-69.1,-153.9],[8.1,-354.5,20.7,-363.8,22,-361.2,40.2,-351.8,38.8],[7.1,-224,39.8,-227.7,40.2,-227.2,44.8,-228.7,45,-227.8,52.4,-221.4,51.6,-222.1,45.4,-223.4,45.5],[7.1,-214.4,48.4,-215.5,38.6,-222.5,39.3,-221.4,49.2],[7.8,124.2,-249.9,123.4,-257.1,117.9,-256.5,118.8,-249.3],[6.8,307.3,-16,307,-27.1,257.8,-25.7,258.1,-14.7],[14.3,-342.8,-13.5,-342.9,-14,-343.5,-13.9,-343.6,-14.6,-349.4,-13.8,-348,-3.3,-346.8,-3.4,-346.2,1.1,-338.5,.1,-339.1,-4.5,-336.9,-4.7,-336.3,-.1,-328.6,-1.1,-329.2,-5.8,-327.2,-6.1,-326.6,-1.4,-318.9,-2.4,-319.5,-7.1,-317.4,-7.3,-316.8,-2.8,-309.1,-3.8,-309.7,-8.4,-308.4,-8.6,-309.8,-18.5,-309.2,-18.5,-309.3,-19.2,-315.7,-18.4,-315.6,-17.6,-316.1,-17.1],[12.7,-389.2,10,-391.3,-.8,-401.6,1.2,-399.1,13.7,-390.4,12,-390.7,10.3],[8.5,-244.5,-242.7,-244.4,-241.9,-239.8,-242.4,-240.9,-251.4,-248.1,-250.6,-247.9,-249.2,-255,-248.3,-254.2,-241.6],[9.4,-226.2,-259.3,-227.4,-259.2,-228.5,-270.3,-238.1,-269.4,-236.6,-253.8,-239.8,-253.5,-239,-245.1,-225,-246.5],[9.7,-288.6,-205,-283.2,-206.2,-285,-214.6,-290.5,-213.4],[9.4,-276.6,-208.3,-278.5,-216,-284.4,-214.4,-282.6,-206.8],[11,-142.4,38.2,-142.9,32.2,-148.2,32.6,-147.7,38.6],[8.6,-142.5,39.5,-148.4,40,-148,45.1,-142,44.6],[10,-67.9,-373.8,-67.6,-380.2,-81.1,-380.7,-81.3,-373.9,-72.7,-373.6,-72.7,-374],[10,-104.9,5.3,-114.9,5.8,-114.6,10.9,-104.6,10.4],[9.3,-103.8,11.7,-96.6,11,-97.4,4.2,-104.6,5],[8.3,-79,-151.1,-75.9,-151.4,-76.9,-162,-83.6,-161.3,-82.4,-148.5,-78.8,-148.9],[9.6,-240.2,51.7,-236.5,51.3,-237.6,41,-241.3,41.4],[9.4,-236.2,51.3,-232.5,50.9,-233.6,40.6,-237.3,41],[9.3,-232,50.7,-228.3,50.3,-229.4,40,-233.1,40.4],[9.1,-244.4,52.1,-240.7,51.7,-241.8,41.4,-245.5,41.8],[8.9,385.9,10.9,394.6,11.7,395.6,.3,387.4,-.4,387.4,.3,386.2,.2,385.3,10.1,386,10.1],[10,-332.5,61.6,-328.2,60.8,-330.5,48.1,-334.8,48.9],[9.2,-327.7,60.5,-323.8,59.8,-326.2,47.4,-330,48.1],[9.6,190.1,-224.5,189.8,-219.3,196.2,-218.5,196.7,-219.7,192,-224.2],[9.6,185.5,-219.7,188.6,-219.2,189.6,-225.4,188.4,-227.1,186.8,-227.4],[8.8,-69.8,-356,-70.3,-346.7,-33.3,-344.5,-33.2,-346.6,-36.9,-346.8,-36.5,-354.1],[4.3,-305.3,-199.9,-304.5,-195.7,-306.4,-195.3,-305.2,-189.1,-287.5,-192.5,-289.5,-202.9],[9.7,126,-229.6,126.5,-225.1,134.7,-226.1,134.1,-230.5],[9.3,126.9,-223.5,127.4,-219.2,135.1,-220.1,134.6,-224.5],[4.8,200.1,-108.6,201.1,-94.6,213.4,-95.4,212.4,-109.5],[17.2,-65,-48.2,-63.8,-35,-39.2,-37.4,-40.5,-51,-42.5,-50.8,-42.6,-51.7,-44.9,-51.5,-45.4,-56.1,-49,-55.7,-48.5,-50.8,-58.2,-49.8,-58.5,-53,-60.6,-52.8,-60.3,-49.7,-63.2,-49.4,-63.1,-48.4],[9.1,-138.3,-274.6,-138.1,-270.8,-134.3,-271.1,-134.6,-276.4,-137,-276.3,-136.9,-274.7],[11.9,-98.5,-108.9,-98.1,-100.6,-88.5,-101.1,-88.9,-109.4],[9.3,-129.2,-281,-134.5,-280.2,-133.2,-272.1,-127.9,-272.9],[10.7,-81.6,-304.1,-81.3,-287.8,-69.9,-288.1,-70.3,-304.4],[10.1,-151,-95.7,-149.9,-95.9,-149.7,-93.4,-143.9,-94,-145.3,-109.8,-152.2,-109.1],[10.1,-145.2,-186.1,-144.9,-180.8,-140.6,-181.1,-141,-186.4],[11.2,-167.5,-185.4,-177.8,-184.5,-177.2,-177.2,-166.8,-178.1],[10,-143.3,-71.4,-131.9,-72.4,-132.8,-83,-144.2,-82],[21.7,-154.5,-229.4,-155.1,-230,-159.3,-229.5,-158.4,-219.9,-155.7,-220,-155.2,-215.9,-157.7,-215.4,-156.8,-209.4,-152.4,-209.8,-152.3,-210.2,-150,-210.5,-148.1,-211.9,-147.1,-213.8,-147.4,-217,-146.2,-217.1,-146.5,-221.7,-148.1,-226.7,-150.1,-228.8],[14.2,137.9,-375.2,138.1,-378.4,132.9,-378.8,132.6,-375.5,105.1,-377.3,105.2,-378.9,99,-379.3,98.3,-369.1,145.2,-366,145.5,-369.7,148.4,-369.6,148.7,-374.5],[20.6,120.2,-70.4,121.5,-57,148.7,-59.6,147.3,-73.7,143.1,-73.3,142.9,-74.6,126.6,-73,126.3,-76.1,119.7,-75.4,120,-72.9,123.4,-73.2,123.7,-70.7],[17.6,300.6,-176.1,303.4,-179.1,301.1,-181.3,298.3,-178.4,283.3,-192.7,285.1,-194.5,283.5,-196,284.4,-197.1,282.7,-198.8,280.1,-196,278.8,-197.2,282.9,-201.9,280.4,-204.3,279.8,-203.8,277.2,-206.6,268.5,-197.5,268.5,-196.3,272.3,-192.6,268.5,-187.8,268.4,-186.2,299.1,-157.2,302.6,-160.6,302.8,-162.8,301.8,-163.8,303,-164.8,303.1,-166.8,301.1,-168.8,302.4,-170,301.5,-170.9,303.8,-173],[8.1,-113.5,-371.1,-113.6,-368.8,-99,-368.2,-98.8,-372,-101.1,-372.1,-101.2,-370.6],[1.7,-25.3,-27.3,-25,-25.1,-8.2,-26.9,-8.5,-29],[3.4,-25,-23.7,-24.7,-21,-7.7,-22.4,-7.9,-25.1],[3.5,100.4,1.7,100.8,5.8,112.9,4.4,112.4,.3],[5,-238.9,-270.7,-241.4,-270.5,-240.4,-258.9,-239.4,-259,-239.3,-257.8,-237.4,-258,-238,-265.3,-238.4,-265.3],[6.6,-101.2,-345.7,-101.5,-342.1,-96.3,-341.7,-96.1,-345.4],[3.1,-352.3,-121.1,-351.8,-119.3,-332.7,-124,-333.1,-125.9],[3,-353.1,-124.6,-352.6,-122.8,-333.6,-127.6,-334,-129.4],[-9999,-298.9,15.3,-303.8,15.9,-301.2,38.1,-296.3,37.5],[17,-279.2,-135.9,-277.5,-136.2,-281,-153.2,-282.7,-152.8],[4.9,-273.3,-135,-275.3,-134.5,-273,-125.2,-271,-125.7],[2.2,-183.3,-115.7,-183.1,-114.1,-168.4,-115.5,-168.5,-117.1],[7.1,-164,-77.8,-169.7,-77.3,-168.6,-65,-162.8,-65.6],[2.3,-79.1,-250,-78.9,-247.9,-63.8,-249.4,-64,-251.5],[17.4,-50.9,-265.7,-58.5,-264.9,-58.3,-263.1,-52.5,-263.7,-50.8,-247.2,-59.9,-246.2,-59.7,-244.1,-48.7,-245.3],[-9999,48.9,-21.7,46.7,-21.4,49.1,-1.3,51.3,-1.5],[-9999,49.8,-36.2,48.2,-36,51.8,-2,53.5,-2.1],[4,116.8,13.4,113.3,13.8,115.3,30.8,118.8,30.4],[4.9,185.3,-47.2,181.1,-46.7,181.6,-43.1,166.1,-41.3,171.5,3.9,191,1.5],[2.3,325.8,-33,325.6,-28.8,335.4,-28.3,335.6,-32.6],[16.8,339,-32.1,337,-32.1,336.6,-21.6,338.6,-21.5],[2.5,326.6,-27.6,326.5,-25.5,333.3,-25.3,333.2,-22.2,335.3,-22.2,335.5,-27.3],[3.1,-318.9,-23.4,-310.2,-25.4,-310.7,-27.6,-319.5,-25.6],[3.3,274.1,-208.5,293.3,-207,293.4,-208.6,274.2,-210.1],[2.9,110.3,-328.4,110.3,-322.2,113.3,-322.2,113.3,-328.4],[9.4,149.8,-353.8,149.7,-363.8,147.2,-363.8,147.4,-353.8],[3.6,19.2,-56,17.7,-68.5,5,-66.9,6.5,-54.4],[3.7,17.3,-73.9,16.6,-80.1,14,-79.8,13.3,-86.1,3.4,-85,4.8,-72.6],[2.3,-65.6,-144.5,-56.6,-145.4,-56.8,-147.6,-65.9,-146.6],[2.8,230.3,-308.5,230.3,-313.2,224.2,-313.2,224.2,-308.4],[4,121.8,-377.9,121.9,-379.6,105,-380.8,104.9,-379],[8.3,220.3,-248.2,219.9,-242.2,241.7,-240.8,242,-245,239.8,-245.1,239.9,-246.7],[2.6,239.6,-160.2,239.8,-158.6,252,-159.9,251.8,-161.6],[2.9,239.8,-158.1,240,-156.1,252.2,-157.3,252,-159.4],[7.4,218,-170.7,216.7,-183.4,214.1,-183.1,215.5,-170.4],[7.4,197.5,-133.4,197.7,-131.1,209.2,-132.3,208.9,-134.7],[2.4,-223.1,-111.1,-222.2,-102.9,-219.7,-103.2,-220.7,-111.4],[2.8,-219,-111.4,-218.1,-103.5,-215.7,-103.8,-216.6,-111.7],[2.9,189.6,-193.7,187.5,-193.4,189,-181.6,191.1,-181.9],[6,-38.3,-219.7,-38.5,-221.3,-44,-220.7,-44,-220.3,-92.9,-215,-92.7,-213,-43.6,-218.4,-43.7,-219.1],[1.8,-225.7,-295.9,-225.7,-297.7,-237.8,-297.9,-237.8,-296.1],[4.9,-198.5,-33.6,-197.9,-20,-192.8,-20.2,-193.4,-33.8],[1.5,145.5,-327,145.5,-329.4,131.2,-329,131.3,-326.6],[6.4,96.6,-360,96.4,-357.6,116.6,-355.9,116.8,-358.3],[2.4,113.5,-291.2,111.3,-291.2,111.5,-280.9,113.7,-281],[7.6,156.3,-343.4,151.2,-343.3,151.7,-326.6,156.8,-326.8],[9.7,-363.4,29.5,-364.5,29.7,-365.6,22.6,-375.5,24.1,-375.3,25,-375.9,25,-375.6,29.8,-374.7,29.6,-373.3,38.4,-374.2,38.6,-373.6,42.4,-361.7,40.6],[9.8,-282.2,27.4,-281,34.2,-263.4,30.9,-264.6,24.1],[9.7,-63.7,17.3,-58.7,16.9,-59.4,9.3,-60.4,9.4,-60.8,4.9,-59.6,4.8,-59.9,1.2,-65.1,1.7],[9.9,102.2,-14,102.8,-8.7,108.3,-9.4,108.5,-8.4,114.4,-9.1,113.6,-15.4],[16.5,201.4,-39.1,188.1,-37.5,191.1,-13.1,196,-13.7,196.3,-10.8,200.4,-11.3,200.1,-14.3,204.3,-14.8],[28.7,93.5,-154.4,79.7,-152.8,82.8,-126.2,83.4,-126.3,83.7,-123.7,96.8,-125.2],[14,-101.3,-158.6,-100.7,-152.8,-99.2,-152.9,-99,-150.8,-96,-151.1,-95.9,-150.3,-91.3,-150.8,-92.1,-159.5],[9.6,-164.9,-121.5,-155.3,-122.2,-156,-131.6,-160.3,-131.3,-160.3,-130.7,-163,-130.5,-163.1,-130.9,-165.6,-130.7],[9.3,-158.7,-158.8,-153.9,-159.4,-155.1,-168.8,-157.3,-168.5,-157.5,-170.4,-160.1,-170.1],[20.4,-216.5,-216.2,-218.2,-215.9,-219,-221.6,-217.3,-221.9,-218.4,-229.7,-225.3,-228.7,-224.2,-220.7,-222.5,-220.9,-221.8,-215.3,-223.3,-215.1,-222.2,-207.5,-215.5,-208.5],[6.3,-355.5,44.5,-355.4,50,-345.8,49.8,-345.9,44.3],[2.5,-299.9,-117.6,-299.5,-115.8,-280.6,-120.3,-281,-122],[2.9,-319.3,20,-315.2,19.3,-316.8,9.4,-320.9,10.1],[4.8,-190.3,-264.9,-193.5,-264.4,-192.2,-256.9,-189,-257.4],[3.9,1.9,-96.7,2.5,-90.7,13,-91.8,12.4,-97.8],[2.8,17.5,-43.6,16.9,-50.1,6.8,-49.1,7.4,-42.7],[11.3,-9.1,-197.7,-10.1,-206.3,-13.5,-205.9,-12.4,-197.3],[36.9,14.1,-22.1,7.7,-21.3,9.9,-2.4,13.5,-2.8,13.7,-.9,16.5,-1.3],[6.9,-125.6,-212.2,-126.5,-217.4,-135.6,-216.2,-134.5,-211.1],[7.2,-161.7,4.2,-161.4,9.4,-155.4,9.1,-155.8,4],[4.8,-161.4,8.5,-161.7,4.2,-166.6,4.4,-166.3,9],[7.3,-308.8,-234.5,-309.7,-239.9,-309.1,-240,-309.6,-243.5,-317.9,-242.2,-316.5,-233.3],[6.7,-308.7,-199.3,-310.4,-210.2,-316.6,-209.6,-315,-198.4],[9.2,-285.7,48.8,-260.4,44.2,-262.8,31.5,-288,36.1],[24.5,-306.1,13.9,-313.4,15.1,-311.9,21.7,-310,21.4,-309.5,24.5,-305.2,23.8],[11.5,392.2,-61.1,334.5,-73,335.4,-77.6,328.8,-79,324.5,-59.7,330.7,-58.3,329.5,-52.8,397.1,-37.6,399.7,-49.1,390,-51.3],[8.4,-258.9,-210.7,-259.2,-211.7,-258.8,-211.8,-261.1,-220.1,-270.4,-217.5,-267.8,-208.2],[21.7,-31.3,-220.6,-30.9,-216.9,-26.4,-217.4,-26.3,-216.7,-24.6,-216.9,-25,-221.3],[28.2,74.8,-14.9,55,-12.9,55.6,-3,75.9,-5.3],[14.8,217.7,-190.1,225.1,-190.7,224,-204.1,221.6,-205.1,216.5,-204.6],[16.2,232.7,-161.3,231,-161.4,230.9,-162.1,228.1,-161.7,227.2,-169.6,218.1,-168.5,220.2,-150.8,221.9,-151,221.8,-151.6,233.4,-152.9],[17.9,237.5,-257.2,231.3,-257.2,231.3,-253.8,229.7,-253.8,229.7,-251.6,237.6,-251.7],[9,237.6,-292.9,249.8,-293,250,-253.8,256.3,-253.8,256.1,-298.9,237.5,-298.9],[6.8,294.8,-211.5,295.6,-222.5,290.8,-222.8,291.1,-227.4,294.6,-227.2,295.4,-238.7,280.1,-239.8,278.7,-220.8,289.4,-220,288.8,-211.9],[7.4,-388.3,63.6,-388.3,60,-384.5,60.1,-384.4,54.5,-389.3,54.5,-389.3,55.6,-397,55.5,-397.1,63.5],[4.1,-64.7,-142.1,-63.9,-132.6,-55.2,-133.4,-56,-142.8],[6.9,-314.4,-225.2,-313.4,-225.3,-313.2,-222.5,-307.6,-223.1,-308.6,-232.9,-315.2,-232.3],[7.7,-316.5,-185.9,-329.3,-184,-327.9,-174.7,-322.2,-175.5,-322.5,-177.4,-316.7,-178.2,-316.8,-179.2,-315.5,-179.4],[4.7,-337.5,-35.1,-336.5,-29.9,-323.5,-32.3,-324.1,-35.1,-319.9,-35.9,-320.8,-40.6,-325.1,-39.8,-324.7,-37.5],[27,64,-224.2,61.8,-245.7,52.6,-244.8,54.8,-223.4,57.5,-223.7,57,-228.6,61.6,-229.1,62.2,-224],[11.6,188.2,-250.7,197.5,-250.8,197.4,-261.3,187.9,-261.3],[9.1,173.6,-332.2,168.5,-332.1,168.6,-325.9,199.3,-326.5,199.2,-332,193.4,-332,193.4,-329.4,173.6,-329.3],[21.6,-7.8,-18.2,-8.2,-22.1,-16.7,-21.3,-16.3,-17.5],[39.6,-12.1,-17.9,-16.3,-17.5,-15.8,-12.4,-48.5,-9.2,-49,-13.5,-51.8,-13.2,-51.5,-10,-58.5,-9.3,-57.3,2.9,-49.6,2.2,-49.3,6,-5.9,1.7,-6,.4,-5.1,.4,-5.7,-5.6,-4.7,-5.7,-5.2,-11.2,-6.7,-11,-6.9,-13.3,-11.6,-12.8],[25.1,244.9,6.2,272.2,5.4,271.8,-8.5,249.7,-7.8,249.6,-11.6,244.3,-11.5],[11.8,-8.9,-196.5,19.9,-199.6,19,-207.2,14.5,-206.7,14,-211.1,-10.4,-208.4],[45,-75.6,-242.3,-74,-227.4,-72.6,-227.6,-72.1,-223.2,-40.5,-226.5,-40.9,-230.9,-40.4,-231,-41,-236.6,-41.6,-236.6,-41.8,-238.8,-42.4,-238.7,-42.5,-239.9,-47.2,-239.4,-47.6,-243.6,-55.7,-242.7,-55.3,-238.9,-57.1,-238.7,-57.7,-244.2],[53.4,14.1,-22.1,16.5,-1.3,47.8,-4.8,46,-20.3,40.5,-19.6,40.1,-23.2,38,-22.9,38.4,-19.2,22.7,-17.5,22,-23],[11,-309.5,-38.9,-318.8,-37,-316.8,-27.3,-307.4,-29.2],[12.6,-326.1,-187.1,-314.4,-188.5,-315.1,-194,-326.8,-192.6],[23.1,233,-156.4,233.4,-152.9,221.8,-151.6,221.9,-151,220.2,-150.8,221.6,-136.8,284.9,-143.9,284.4,-148.5,283.6,-148.4,283.4,-149.4,277,-156,276.3,-156,276.2,-157.5,255.7,-155.2,255.3,-158.9,252.5,-158.6,252.9,-155,235.7,-153,235.3,-156.7],[2.5,-121.1,182.2,-120.8,178.8,-122.9,178.2,-122.3,173.2,-125.8,172.8,-126.7,177.2,-128.4,176.8,-128,176.2,-129.8,175.7,-131.3,178.6,-130.3,178.9,-130.5,180],[3,-35.5,-66.2,-30.8,-66.7,-31.3,-71.3,-36,-70.8],[3.5,59.1,-25.5,60.9,-25.7,59.5,-37.6,57.8,-37.4],[4.2,61.5,-26,63.5,-26.2,62.2,-37.5,60.2,-37.3],[6.2,79,30.8,82.8,30.4,80.7,11.6,76.8,12],[3.2,112.2,-5.3,111.9,-7.9,91.6,-5.4,91.9,-2.8],[2.5,65.6,-162.7,67.4,-162.9,65.9,-176.6,64,-176.4],[2.5,69.9,-177.1,68.1,-176.9,70.3,-157.9,72.1,-158.2],[2.5,67.9,-156.6,66.1,-156.4,67.7,-142.5,69.5,-142.7],[2.7,71.8,-143.2,73.6,-143.4,72.5,-154.4,70.7,-154.2],[8.1,77.6,-154.8,76,-154.7,77.2,-143.2,78.8,-143.4],[3.2,-337,-175.4,-337.3,-177.4,-349.2,-175.6,-348.9,-173.6],[7.6,-160.2,-266.8,-158.5,-267,-160.6,-281.5,-162.3,-281.2],[7,145.1,-354,145.3,-356.2,130.1,-357.4,129.9,-355.2],[4.9,68.8,-344.7,68.7,-360.1,47.2,-359.9,47.3,-344.5],[3.4,52.8,-372,50.8,-372,50.8,-370.7,47.3,-370.6,47.4,-366.1,52.8,-366.1],[3.1,-79,156,-79.1,159.5,-71.5,159.6,-71.5,156.1],[2.9,51.1,141.8,54.6,141.6,54.3,136.3,50.8,136.5],[6.8,62.4,-139,62.6,-137.2,76.1,-138.8,75.9,-140.5],[10.4,-10.4,-208.4,5.9,-210.2,5.4,-213.4,-1.7,-212.8,-2,-213.5,-11.1,-212.7],[21.5,-362.5,-60.5,-355.1,-62.5,-373,-127,-380.4,-125],[7.9,204.4,-11,191.9,-9.6,195.4,20.9,201.2,20.2,205.9,2],[18.2,296.6,3.1,297.1,9.1,300.8,8.8,300.3,2.8],[7.4,239.3,-53.1,229.4,-52.1,231.9,-27.9,241.8,-29],[8.6,285.9,-85.8,281.3,-126.4,225.1,-120.2,228.6,-89.1,260.7,-92.7,261.8,-83.1],[9.8,260.8,-81.1,263.3,-58.9,308.1,-63.9,305.6,-86.2],[7.5,161.7,-104.5,161.9,-100.7,168.3,-101.1,168.1,-104.9],[9.6,-38,-168,-37.5,-163.7,-27.5,-164.8,-28,-169.1],[20.2,43.8,-384.5,48.8,-384.5,48.7,-392.9,43.7,-392.9],[7.1,134.4,-84,134.7,-80.1,146.6,-81,145.5,-94.2,141.6,-93.9,142.3,-84.7],[23.5,-26.4,-217.4,-30.9,-216.9,-31.3,-220.6,-33.9,-220.3,-33.8,-219.7,-35.6,-219.5,-35.3,-216.4,-86.9,-210.5,-86.3,-205.2,-84.2,-205.5,-84,-203,-86.4,-202.8,-85.6,-196.1,-24.2,-203,-25.6,-215.8,-26.2,-215.7],[23.6,250,-253.8,249.8,-293,237.6,-292.9,237.6,-286.5,231.3,-286.5,231.3,-292.9,219.4,-292.8,219.6,-253.7,231.3,-253.8,231.3,-257.2,237.5,-257.2],[24.8,72.4,-52,72.3,-52.5,104.6,-55.9,102.8,-73.4,93.6,-72.4,94.1,-67.5,74.8,-65.5,74.3,-70.3,70.7,-70,70.1,-75.7,72.2,-75.9,69.4,-102.7,23.4,-97.9,28.7,-47.4],[31.8,55,-12.9,74.8,-14.9,73.9,-24.2,55.2,-22.3,54.8,-26.3,53.6,-26.2],[25.6,62.2,-224,61.6,-229.1,57,-228.6,57.5,-223.7,47.7,-222.7,46.6,-232.2,50.3,-232.6,50.1,-235.2,46.2,-234.8,44.6,-249.6,43.5,-249.4,43.3,-250.8,30.1,-249.3,32.7,-226.2,44.6,-227.5,45.2,-222.3,33.8,-221.1,33.9,-220.1,31.7,-219.8,33.1,-206.8,87.4,-212.8,85.9,-225.9,83.3,-225.6,83.2,-226.5,74.4,-225.6,73.9,-230.7,85.7,-231.9,83.1,-255.4,69.8,-253.9,70,-252.3,69,-252.2,70.6,-237.9,67.1,-237.6,67.5,-234.1,71.1,-234.5,72.1,-225.1],[15,-32,-328,-31.2,-343.2,-69.9,-345.3,-70.7,-330.2],[11.4,-2.6,-157.7,11.6,-159.5,10.7,-166.9,-3.5,-165.2],[10.5,-38,-168,-28,-169.1,-29.8,-186.4,-39.8,-185.3],[9.2,-4.9,-167.4,-3,-167.6,-2.8,-166.3,10.5,-167.8,9.7,-175.2,-5.6,-173.5],[20.7,337.8,6.9,330.2,7.2,330.3,10.4,327.6,10.5,328.1,23.9,351.1,23,350.5,8.5,351.9,8.5,354,-37.1,340.2,-37.7,339.4,-20,334.9,-20.2,334.8,-17.5,339,-17.3],[9.8,161.7,-104.5,167.6,-104.9,167.5,-105.6,168.3,-105.7,167.5,-117.8,160.9,-117.4],[10.5,173.6,-329.3,193.4,-329.4,193.4,-332,199.2,-332,199.2,-338,173.6,-337.9],[11.3,187.9,-255.1,187.9,-261.3,203.3,-261.4,203.2,-309.7,161.5,-309.8,161.6,-261.3,181.7,-261.3,181.7,-255.1],[7.3,134.4,-84,142.3,-84.7,141.4,-95.7,133.5,-95],[10.2,107.3,27.4,105.7,13.5,98.5,14.3,90.8,12.4,92.8,29.1],[11.3,294.7,-210.6,306.1,-209.8,307.4,-227.6,296,-228.4],[21.8,296.4,.9,299.3,.7,299.1,-2.3,296,-2,295.3,-8.9,281.7,-7.7,284.7,25.7,315.2,23.1,314,9.1,297.3,10.6],[26,-305.2,23.8,-309.5,24.5,-310,21.4,-311.9,21.7,-314.5,21.1,-313.9,25.3,-337.2,28.9,-337.8,25,-340.2,25.3,-339.6,29.4,-342,43.8,-341.6,44.1,-325.6,41.6,-325.7,41.2,-324.2,39.3,-303,35.8],[24.4,-301.3,-97.9,-276.7,-104.7,-279.8,-116.1,-282,-115.5,-282.5,-117.4,-286.5,-116.4,-286.3,-115.6,-288.5,-115,-288.6,-115.4,-299.7,-112.4,-299.8,-113,-300.8,-112.7,-301.4,-115.2,-305.7,-114],[12.2,-118.7,-209.7,-134.1,-208.4,-132.8,-194.4,-128.6,-194.7,-128.8,-196.8,-122.6,-197.3,-122.5,-195.4,-117.5,-195.8],[24.8,43.7,-408.4,-14.1,-408.1,-13.5,-292.5,44.3,-292.9],[19.3,217.7,-190.1,218.9,-176.1,247.9,-178.6,247.1,-187.3,241.9,-186.9,241.4,-192.2,232.8,-191.4,233.2,-185.9,228.2,-185.5,227.8,-190.9],[8.6,-118.7,-209.7,-116.3,-184.1,-109.2,-184.9,-111.5,-210.4],[21.6,82.8,-53.6,72.9,-52.5,73.1,-50.3,83,-51.3],[6,105.7,13.5,107.3,27.4,110.2,27,108.8,13.2],[8.9,334.5,-73,392.2,-61.1,393.1,-66.3,335.5,-78.7],[23.5,-302.7,-103,-304.1,-108.2,-305,-107.9,-304.9,-107.4,-309.7,-106.1,-308.6,-102,-303.8,-103.4,-303.6,-102.7],[8.4,55,-245.1,59.9,-245.6,59.3,-252.5,54.5,-252.2],[5.1,-127.9,-281.5,-127.3,-276.8,-126.6,-276.9,-126.3,-274.2,-121.8,-274.8,-122.5,-282.2],[9.9,-108.6,-283.1,-100.9,-283.6,-101,-284.4,-99.3,-284.5,-100,-293.7,-102.5,-293.5,-102.6,-295.1,-106.5,-294.8,-106.5,-295.6,-109.4,-295.3],[8.3,-108.3,-307.4,-108.4,-298,-107,-298,-107,-297.6,-105.1,-297.6,-105.1,-297.9,-101.1,-297.6,-101.1,-298,-99.8,-298,-99.8,-307.4],[6.7,-120.5,-341.5,-120.8,-337.1,-113.7,-336.6,-113.5,-339.3,-112.2,-339.2,-112,-340.9],[10.2,-43.6,-365.8,-44,-358.8,-41.9,-358.7,-42,-357.9,-39.9,-357.8,-39.4,-365.6],[10,-48.8,-366.2,-49,-359.2,-47.1,-359.1,-47.1,-358.2,-44.8,-358.2,-44.5,-366],[7.4,-82.7,-336.1,-82.7,-331.3,-81.1,-331.3,-81.1,-327.6,-72.7,-327.7,-72.8,-336.1],[9.4,-370,-149.7,-367.1,-150.4,-366.4,-147.9,-365.2,-148.2,-367.4,-156.7,-371.5,-155.6],[8.8,-343.4,-128.8,-344.5,-133.1,-346,-132.7,-346.4,-134.2,-340.5,-135.7,-341.4,-139.2,-371.2,-131.5,-368.8,-122.2],[7.3,-348.1,-101.6,-342.8,-103.3,-344.9,-109.6,-350.2,-107.9],[9.6,-395.9,-7.3,-401,-6.3,-399.9,-.7,-393.7,-1.8,-394,-3,-395,-2.8],[7.6,-371.2,-12.3,-371.3,-13.3,-381.1,-12.1,-379.8,-2.1,-371.5,-3.2,-371.7,-4.9,-370.3,-5,-370.7,-8.1,-369.3,-8.3,-369.9,-12.5],[7.1,-341.1,-47.1,-338.9,-36.8,-337.8,-37,-337.5,-35.4,-332.8,-36.4,-333.2,-38.2,-331.8,-38.4,-334,-48.6],[7.9,-254.6,-26.4,-250.7,-26.9,-251.2,-31,-244.1,-31.8,-244.8,-37.7,-255.9,-36.3],[7,-270.8,-186.2,-276.1,-185,-276.4,-186.4,-281.6,-185.2,-281.7,-185.6,-284.6,-184.9,-282.3,-175.1,-278.5,-176,-278.8,-177.7,-269.3,-179.9],[9.5,-216.2,-220.3,-211.3,-220.8,-212.2,-228.5,-217.1,-228],[9.6,-218.2,-236,-217.2,-228.5,-211.5,-229.1,-212.5,-236.6],[6.9,-201.2,-203.1,-205.8,-202.6,-204.9,-194.5,-200.3,-195],[5.3,-149.9,-28.9,-149.4,-24.2,-143.6,-24.8,-144.1,-29.4],[5.3,-139,-30.1,-138.5,-25.2,-132.7,-25.7,-133.2,-30.6],[5.1,-139.8,-38,-139.4,-33.1,-133.4,-33.6,-133.9,-38.5],[5.1,-150.5,-36.8,-150,-32,-144.3,-32.7,-144.8,-37.4],[9.3,-152.1,-46.8,-151.3,-39.3,-150.2,-39.4,-150.1,-38.5,-146.1,-38.9,-146.2,-39.8,-130.5,-41.4,-131.2,-49],[8.2,-125.2,6.2,-125.5,2.1,-126.3,2.2,-126.7,-3.1,-127.5,-3,-127.7,-5.7,-135.6,-5.1,-135.5,-4.1,-151.9,-2.9,-151.2,6.4,-150.7,6.4,-150.5,8.1],[8.9,-95.3,4.6,-95.1,8.4,-92.7,8.1,-92.5,10.6,-95,10.8,-94.5,18.5,-87.4,18,-87.8,11.7,-89.5,11.9,-90,4.1],[7.8,-87.2,11.3,-86.7,19.9,-79.8,19.5,-80.3,10.9],[6.7,-71.5,1.9,-70.9,9.5,-65.3,9,-66,1.4],[10.2,-96.7,-33.6,-89.6,-34.3,-91.6,-54.7,-90.8,-54.8,-91.2,-58.4,-92,-58.3,-92.2,-59.8,-99.3,-59.1],[4.4,-72.5,-135.7,-72,-130.2,-67.6,-130.6,-68.1,-136.1],[3.4,-74.6,-270,-74.4,-268,-49.1,-270.8,-48.7,-267.3,-45.6,-267.7,-46.3,-273.5],[9.3,76,-190.5,74.5,-190.3,74.6,-188.9,71,-188.6,71.4,-184.5,76.6,-185],[9.8,82.3,-189.8,78,-189.4,77.8,-190.8,76.6,-190.7,77.2,-185.1,82.7,-185.6],[8.9,73.3,-196.8,69.9,-196.4,70.8,-189,74.2,-189.5],[9,81.2,-198,77.7,-197.6,78.6,-189.7,82.2,-190.1],[6.3,36.6,-167.9,37.4,-160.5,37.9,-160.6,38,-159.5,39,-159.6,39.1,-158.7,44.8,-159.3,44.6,-161.4,45,-161.4,44.2,-168.7],[3.3,7.1,-31.8,7.6,-27.5,14.4,-28.2,13.9,-32.5],[8.7,100.9,-24.1,102.1,-14.7,114.9,-16.4,113.7,-25.7],[8.4,135,14.5,139.5,13.9,139.2,11.2,139.6,11.2,138.7,3.4,133.8,4],[6.4,162.6,-97.2,163.2,-93.5,166.5,-94.1,166.8,-92.3,167.5,-92.5,168.3,-87.6,171.1,-88.1,170.7,-90.4,172.7,-90.7,172.1,-94.3,169.8,-93.9,169.1,-98.3],[6.3,169.8,-100,170.7,-94.4,172.6,-94.7,173.3,-90.7,176.9,-91.3,175.3,-100.9],[8.5,171.5,-89.6,171.9,-86.7,169.4,-86.4,169.3,-86.8,166.6,-86.4,167.1,-83.1,173,-83.9,173.1,-83.2,177.6,-83.9,176.7,-90.4],[10.7,185.4,-90.4,178.1,-89.7,179,-79.9,186.3,-80.6],[10.1,196.2,-91.4,191.8,-91.1,192.6,-80.8,197,-81.2],[9.5,201.3,-92,196.8,-91.6,197.6,-81.2,202.1,-81.6],[10.7,160.5,-182.2,160.2,-185.8,150.2,-184.7,150.6,-181.1],[10.1,159.8,-186.3,159.4,-190.1,149.9,-189.1,150.3,-185.3],[7.8,153.6,-207.5,149.5,-207,149.7,-205.4,148.2,-205.2,149,-198.6,154.5,-199.3],[7.4,158.2,-207.8,154.9,-207.5,155.2,-204.4,154.4,-204.3,155,-199.3,159.1,-199.8],[7,164.3,-223.9,168.8,-224.5,168.2,-229.5,170,-229.7,169.7,-232.3,163.3,-231.5],[5.4,289.1,-119.4,284.8,-119,285.6,-111.3,289.9,-111.7],[7.5,284.3,-121.4,289.8,-122,288.9,-131,283.4,-130.4],[7.7,291.9,-119.1,296.3,-119.6,296.5,-118.3,299.6,-118.6,298.2,-131.8,290.6,-131],[7.7,360.6,-20.3,359.6,-12.4,360.5,-12.1,360.4,-11.3,364.2,-10.5,366.3,-19.1],[6.4,366.5,-32.8,362.4,-33.7,360.7,-24,361,-23.9,360.6,-22.1,361.4,-22,361.1,-20.6,364.4,-19.9],[7.2,364.7,-10.3,369.8,-9.2,370,-10.1,371.1,-9.9,372.7,-17.3,366.5,-18.7],[7,368.7,-18.6,372.3,-17.8,372.6,-19.4,373.3,-19.3,375.3,-27.5,375.7,-27.4,376.2,-31.2,372,-32,371.1,-27.7,370.6,-27.8],[7.7,350.5,-199.6,346.5,-200.2,346.4,-199.6,343.3,-200,342.5,-194.2,349.7,-193.2],[8.6,321.2,-203.1,320.7,-199,322.6,-198.8,322.4,-197.1,323.9,-196.9,323.8,-196.3,327.6,-195.9,328.2,-202.2],[7.2,-293,-134.9,-318.1,-128.7,-316.3,-121.8,-307.8,-124,-307.7,-123.5,-299,-125.7,-298.5,-123.5,-297.9,-123.6,-297.3,-119.8,-290.4,-121.2,-291.3,-125.7,-290.9,-125.9],[8.5,-295.5,40.8,-305.1,42.2,-304.6,45.8,-303.7,45.7,-303.1,49.7,-296.8,48.7,-294.7,46.5],[10.8,-304,-77.8,-292.5,-80.1,-294.4,-89.6,-300.2,-88.4,-300.2,-88,-305.8,-86.8],[8.7,-275,2.2,-273.1,12.5,-268.9,11.8,-270.8,1.4],[8.7,-279.4,3,-277.6,13.3,-273.5,12.5,-275.3,2.3],[9.4,-284,4,-282.2,14.1,-278.1,13.4,-279.8,3.3],[7.7,-322.2,-208.9,-319.8,-193.9,-314.7,-194.6,-317,-209.7],[6.5,-322.3,-143.7,-318.4,-129.4,-309.6,-131.3,-312.7,-145.7],[8.8,-312.7,-146.7,-310.6,-138.8,-310.2,-138.9,-308.6,-131.4,-300.4,-133.4,-300.6,-134.7,-300.2,-134.8,-303.5,-148.9],[5.1,-335.4,-23.3,-322.1,-25.9,-323.3,-32,-336.6,-29.5],[4.2,-331,-18.9,-319.7,-21.1,-320.6,-26,-331.9,-23.9],[11.5,-303.8,54.3,-313.5,55.8,-312.2,63.4,-302.5,61.9],[3.6,335.3,1,335.6,-10.2,326.4,-10.5,326.1,.7],[7.4,305.7,-208.1,294.3,-208.4,294.2,-200.9,305.5,-200.7],[7.4,277.1,-13.4,277.4,-8.1,284.1,-8.5,283.8,-13.8],[11.1,121.9,-105.9,114,-105,114.6,-99.2,122.5,-100],[10.8,131.7,-100.9,130.3,-113.6,126.4,-113.2,127.7,-100.5],[11,125.7,-112.9,121.6,-112.5,122.8,-100,126.9,-100.4],[11.2,121.9,-106.8,121.2,-112.7,112.9,-111.6,113.7,-105.7],[5,101.6,-80.4,102.2,-74.3,105.1,-74.5,104.5,-80.7],[2.8,155.9,26,159.1,25.9,159.1,25.1,160.8,25,160.6,20.3,155.7,20.5],[7.5,162.8,-2,160.6,-1.7,161.6,5.7,170.3,4.5,168.7,-7.1,162.2,-6.2],[14.7,189.9,-170.7,193.7,-171,192.9,-179.7,189.1,-179.3],[9.7,-39.6,29.6,-39.4,36.9,-32.3,36.7,-32.5,29.4],[10.1,-195.2,-277.6,-189.4,-278.1,-190,-284.9,-195.9,-284.4],[10.1,-182.7,-279.2,-183.3,-285.5,-189.5,-284.9,-188.9,-278.6],[8.3,-180.6,-299.7,-174.9,-299.7,-174.9,-304.6,-182.5,-304.6,-182.5,-297.8,-180.6,-297.8],[6.8,-188.9,-265.7,-190.5,-275.4,-195.2,-274.6,-193.6,-264.9],[9.4,-112.5,-73.2,-117.5,-72.5,-116.4,-64.4,-111.4,-65],[9.9,-120.1,-51.3,-113.9,-51.8,-114.4,-58.4,-120.7,-57.8],[7.4,-87.4,-6.7,-89.6,-6.5,-89,-.1,-79.4,-1,-80.1,-8.3,-87.5,-7.6],[6.3,-97.8,-14.3,-93.3,-14.6,-93.7,-21.3,-104.1,-20.7,-103.4,-10.5,-97.6,-10.8],[6.7,-237.1,-30.9,-238.6,-38.8,-244.1,-37.8,-242.6,-29.8],[6.6,-250.5,-58.2,-250.6,-59.4,-255.2,-58.9,-255.5,-61.7,-261.6,-61.1,-259,-37.9,-255.3,-38.3,-255.2,-36.9,-247,-37.8,-249.2,-58],[10.3,-358.9,-151.9,-365.4,-150.2,-364.2,-145.5,-357.7,-147.2],[10.2,-361.3,-162.8,-367.3,-161.4,-366.2,-156.7,-360.2,-158],[10.4,-360.1,-157.4,-366.7,-155.8,-365.5,-151.1,-359,-152.7],[9.8,-363.9,-166.1,-356.3,-167.1,-356.8,-171.6,-364.4,-170.6],[7.7,-343.4,-33.7,-338.9,-34.7,-341.4,-45.5,-345.9,-44.4],[9.1,-200.3,-284.1,-200.2,-281.3,-202.3,-281.1,-202.1,-278.4,-200,-278.5,-199.8,-275.7,-195.5,-276,-196,-284.3],[7.1,-33.5,-387.3,-33.2,-393.2,-45.6,-393.8,-45.8,-389.2,-42.8,-389.1,-42.8,-387.8],[8.7,-55.6,-387.6,-55.8,-385.3,-56.9,-385.4,-57.2,-381.2,-43.1,-380.3,-42.7,-386.8],[4.6,11.8,-171.3,12.2,-166.5,18.5,-167,18,-171.8],[6.9,-197.7,-208,-198.2,-212.4,-192.5,-213.1,-192.6,-214,-191.7,-214.1,-192.1,-216.9,-205,-215.3,-204.5,-210.4,-203.5,-210.5,-203.1,-207.3],[8.4,-235.9,-215.5,-238.9,-230.3,-253.2,-227.4,-251.1,-217,-244.1,-218.4,-243.2,-214],[7.3,-249.6,-252.8,-249.6,-253.5,-243.3,-253.9,-243.4,-254.4,-241.1,-254.5,-241.6,-262,-248.1,-261.6,-248,-260.9,-254,-260.6,-253.5,-252.6],[4.1,-261.9,-240.2,-262.5,-243.2,-261.4,-243.4,-262,-246.2,-263.1,-245.9,-263.3,-246.8,-267.3,-246,-266.1,-239.2],[7.5,-261.3,-250.6,-262.1,-253.8,-261.1,-254,-262,-257.6,-272.9,-254.7,-271.1,-248.1],[10.7,-273.2,-162.8,-275.7,-175.6,-281.8,-174.4,-280.1,-165.8,-277.5,-166.3,-276.7,-162.1],[7.5,-180.7,-313.7,-180.3,-323.8,-186.5,-324,-186.9,-314],[6.9,-178.4,-305.8,-178.1,-313.5,-179.9,-313.6,-180,-312.1,-187.2,-312.4,-187.3,-307.6,-184.4,-307.5,-184.4,-306],[9.1,-186,-291.4,-185.9,-298.4,-191.3,-298.5,-191.4,-291.5],[8.8,-174.9,-289.9,-175,-297.8,-180.4,-297.8,-180.3,-290.6,-179.8,-290.6,-179.8,-289.9],[8.3,-97.1,-321.6,-96.8,-311.5,-92.2,-311.7,-92.2,-313,-86.5,-313.1,-86.7,-321.8],[7.8,-122.1,-284.1,-122.4,-291.3,-134.7,-290.8,-134.4,-282,-125.6,-282.3,-125.7,-283.9],[4.5,-50.8,-307.9,-50.8,-317.4,-55,-317.4,-54.9,-307.9],[7,-64.5,-359.4,-64.3,-368,-68.5,-368.1,-68.7,-359.4],[7.2,328.8,-109,329.3,-105,326.5,-104.7,327.3,-98,332.8,-98.7,332.8,-99.3,334,-99.5,332.8,-109.5],[8.4,304.9,-99.6,304.5,-103.6,295,-102.7,295.4,-98.5,299,-98.8,299.1,-98.3,301.1,-98.5,301,-99.2],[8,286.7,-100.1,287.2,-95.3,295.2,-96.2,294.6,-101],[8.3,286.1,-105.7,286.7,-100.6,294.8,-101.5,294.2,-106.6],[8.5,304.1,-106.4,303.7,-110.6,294.4,-109.7,294.9,-105.5],[8.3,285.6,-110.7,286,-106.3,294.2,-107.1,293.7,-111.5],[6.7,193.1,-151.3,193.6,-146.4,193.2,-146.4,193.3,-143.9,197.2,-144.2,196.6,-151.6],[8.2,-119.8,-45.4,-118.7,-34.7,-117.9,-34.8,-117.2,-28,-110.7,-28.7,-111,-31.6,-105.9,-32.2,-106,-32.8,-99.3,-33.5,-100.7,-47.4,-102.4,-47.3,-102.7,-50.4,-113.3,-49.4,-113,-46.1],[7.4,-77.3,-40.7,-76.4,-34.5,-69,-35.6,-69.9,-41.8],[20.5,-82,-73.7,-80.9,-63.9,-72.7,-64.8,-73.8,-74.6],[6.8,-55.6,21.6,-55.1,28.8,-49.6,28.4,-50,22.1,-50.9,22.2,-51,21.3],[7,-25,19.6,-23.7,36.1,-17.9,35.7,-19.1,19.1],[10.1,-18.1,18.7,-17.2,35.3,-15.6,35.2,-15.6,35.7,-11.5,35.5,-11.5,34.9,-8.1,34.8,-8.6,23.2,-10.5,23.3,-10.6,20.9,-13.4,21,-13.5,18.5],[7.5,141.6,19.6,142.2,28.3,152.4,27.5,152.3,26.6,154.6,26.4,154,18.6],[9,132.9,-86.6,132.3,-92.2,118.7,-90.8,118.8,-89.8,115.9,-89.5,116.4,-84.9],[7.1,134.4,-131.8,134.9,-127.1,134.3,-127,134.7,-123.9,137.4,-124.2,137.2,-125.7,141,-126.1,140.3,-132.5],[7.4,106.6,-160.8,108.5,-145.7,118,-146.5,117.9,-147.5,125.3,-148.4,123.5,-162.9],[8.3,79.7,-184.8,80.4,-177.7,94.8,-179.1,94.1,-186.3],[7.1,134.9,-230.7,136.4,-219.7,141.2,-220.3,140.5,-224.9,141.6,-225,141.8,-223.9,146.1,-224.5,145.2,-231.1,139.7,-230.4,139.6,-231.3],[9,189,-74.9,189.9,-64.5,202.8,-65.7,202.7,-67.3,203.5,-67.4,202.9,-76],[8.5,25.9,-188.2,26.7,-178.5,32.8,-179,32,-188.7],[9.8,3.3,-190.1,4.9,-177,5.9,-177.1,5.8,-177.7,8.6,-178,8.4,-179.2,9.8,-179.4,8.5,-190.7],[9.9,-27.5,-176.3,-27,-171.3,-19,-172.1,-19.5,-177.1],[9.7,-27.2,-170.8,-26.7,-165.9,-18.6,-166.7,-19,-171.6],[7.6,-26.5,-165.2,-25.7,-159.6,-18.8,-160.4,-19.1,-162.9,-17.7,-163.1,-18.1,-166.3],[7.3,-36.8,-161,-36.7,-159.9,-38.2,-159.8,-37.7,-154.6,-33.2,-155,-33.1,-154.3,-26.2,-154.9,-26.8,-161.9],[8.8,31.1,-152.6,31.9,-145.6,34.8,-145.9,34.9,-145.4,38.6,-145.7,38,-153.2],[6.4,15.7,-131.7,16.1,-127.2,17.7,-127.3,17.9,-126.2,22.1,-126.7,22,-127.7,29.3,-128.5,28.9,-131.9,27.1,-131.6,27.1,-132.1,25.6,-131.9,25.5,-132.9],[8.1,16.5,-125.2,18.2,-111.6,24.1,-112.3,23.5,-117,25.5,-117.2,25.1,-121.1,23.4,-120.9,23,-123.8,22.5,-123.7,22.2,-125.9],[9.7,-105.2,33.9,-104.7,41.3,-98.4,40.9,-98.9,33.5],[4.5,-169,10.3,-168.7,18.8,-160.2,18.6,-160.4,12.5,-159.7,12.5,-159.8,10],[7.3,-144.5,-109.8,-143.6,-101,-142.2,-101.1,-142,-98.2,-136.7,-98.7,-136.8,-99.5,-134.3,-99.8,-134.7,-103.5,-135.4,-103.5,-136.1,-110.6],[9.4,-152,-114,-151.7,-110.5,-136.3,-111.8,-136.7,-115.4],[9.4,-152.9,-119.8,-152.4,-114.6,-143.3,-115.5,-143.8,-120.7],[9.8,-144.1,-134.2,-143.3,-126.3,-136.4,-126.9,-137.1,-134.8],[9.6,-116.8,-111.6,-117.3,-117.6,-125.3,-117,-125.2,-115.4,-126.5,-115.3,-126.1,-110.8],[-9999,-100.2,-127.2,-99.9,-122,-90.9,-122.5,-91.2,-127.6],[8.7,-197.3,-193.6,-197.2,-193,-199.1,-192.8,-198.3,-185.8,-188,-186.9,-188.9,-195.4,-194.6,-194.8,-194.5,-193.9],[9.6,-247.5,-203.6,-246.7,-199.3,-236.8,-201.3,-237.6,-205.5],[5.6,-198.4,-241.1,-196.2,-228.8,-187.5,-230.3,-189.6,-242.6],[8.8,-181.3,-244.6,-178.8,-232.7,-176.5,-233.2,-176.1,-231.5,-170.6,-232.7,-173.5,-246.2],[7.5,-172.7,-246.3,-170.2,-233.5,-164.7,-234.6,-167.3,-247.4],[8,334.9,-106.7,335.5,-96.8,340.5,-97,340.6,-94.6,344,-94.8,342.9,-107.2,335.5,-108.8],[9.2,-375.7,-147.9,-373.5,-139.3,-369.9,-140.2,-372.2,-148.8],[9,-371.7,-149,-369.5,-140,-365.8,-140.9,-368,-149.9],[6,-271.5,-131.7,-270.4,-126.2,-260.8,-128,-261.8,-133.6],[11.2,-323.3,58.2,-322.7,62.4,-321.8,62.2,-321.5,64.9,-312.9,63.7,-313.9,56.9],[6.4,-369.6,59.7,-369,62.6,-369.8,62.8,-369.2,65.6,-370.1,65.8,-369.7,67.5,-370.4,67.7,-369.5,72,-362.4,70.4,-362.8,68.4,-356.7,67.1,-358.9,57.3],[8.3,-395.9,65.5,-396.5,73.9,-398,73.8,-398.3,77.8,-393.5,78.1,-393.3,74.4,-385.3,75,-384.7,65.5,-387,65.4,-387,66],[4.3,-272.4,-188.9,-273.4,-193,-285.3,-190.2,-284.5,-186.2],[13.1,-112.7,-131.7,-113.5,-141.6,-119.1,-141.1,-118.2,-131.3],[7.3,-346.6,-160.9,-352.9,-158.9,-348.7,-145.9,-345.5,-146.9,-346.6,-150.2,-344.5,-150.9,-345.2,-152.8,-344,-153.2],[7.4,-339.8,-174.6,-346.5,-173,-344.4,-163.8,-341.6,-164.4,-341.5,-163.6,-337.7,-164.3],[11.8,-221.9,-6.3,-222.8,-6.2,-223.1,-8.4,-229.8,-7.3,-229.7,-6.4,-234.6,-5.9,-234.5,-4.6,-236.4,-4.4,-235.1,5.1,-220.7,3.2],[7.8,-122.1,-218.1,-121.4,-212.4,-111.4,-213.7,-111.8,-219.2],[7.3,-132.1,-311.1,-132.6,-305.1,-124,-304.4,-124.2,-302.2,-122.3,-302,-122,-305,-123.4,-305.2,-123,-310.3],[4.8,-251.4,-283.4,-252.3,-276.3,-249.1,-275.9,-248.3,-283],[10,-278.9,-251.9,-276.8,-245.3,-275.2,-245.9,-274.7,-244.3,-270.8,-245.6,-273.3,-253.6],[9.3,-228.9,-186.9,-227.4,-177.2,-222.6,-177.9,-224.1,-187.6]],rd:[[-214.7,-10,-215.6,-16.9,-222.8,-15.9,-221.9,-9.1],[-416.8,16.2,-410.6,-31.4,-417.7,-30.8,-424.4,18.8],[41,-195.4,40.4,-200.8,17.1,-198.2,17.8,-192.8],[-193.6,-355,-173,-353.6,-173,-354.1,-173.4,-357.2,-173.3,-357.6,-174.8,-357.7,-193.3,-359],[-203.6,-282,-207.7,-282.5,-208.1,-279.9,-210.3,-277.8,-251.7,-274.5,-251.4,-270.3,-204.6,-273.9],[-292.6,61,-379,76.3,-378.2,80.4],[-195,-332.3,-199.6,-332.6,-204.9,-327.7,-203.9,-326.2,-199.6,-327.4],[-139.2,-269.6,-139.3,-325.6,-145.7,-324,-145.4,-267],[41,-195.4,45,-195.7,44.4,-201.3,40.4,-200.8],[104.7,-174.6,101.4,-202.7,94.4,-201.4,97.5,-173.7],[-292.6,4.6,-293.3,-2.1,-300.6,-.8,-299.7,5.8],[105.6,52.7,105,48.7,41.3,57.3,41.9,61.3],[-199.6,-332.6,-246.8,-335.5,-249.4,-330.5,-204.9,-327.7],[-115.1,43.4,-116.3,26.6,-123.3,27.5,-122,44],[219.7,-124.4,218.7,-133.2,211.4,-132.3,212.4,-123.5],[304,-176.4,303.9,-173.9,310.3,-173.5],[95.8,-284.6,95.4,-349.1,85.9,-348.9,86.3,-282.7],[84.2,-39.6,86,-18,90.9,-18.4,89.1,-39.9],[-206.8,-289.5,-207.7,-282.5,-203.6,-282,-200.4,-284.9,-200.9,-289.2],[-9.8,-98.7,-14.2,-106.9,-80.7,-99.5,-79.4,-90.7],[-125.1,-117.3,-105.6,-119.8,-106.1,-123.7,-125.6,-121.2],[141.6,-206.9,141.1,-211.9,101,-207.6,101.4,-202.7],[-188.2,-169.6,-188.8,-175.5,-206.3,-173.4,-205.6,-167.7],[-334,-208.6,-336.6,-218.5,-342.7,-218.3,-341.4,-207.8],[-210.2,24.5,-211.2,17,-218.2,18,-217.2,25.7],[-341.4,-207.8,-342.7,-218.3,-404.7,-210.9,-396,-201.8],[-133.4,-181.7,-139.5,-255,-146.7,-253.1,-140.3,-180.9],[-3.6,-108.2,-11.2,-110.5,-14.2,-106.9,-9.8,-98.7,.6,-96.5,1.5,-97.5],[340.6,30.4,325.8,30.2,325.7,33.1,340.5,33.3],[358.8,-205.1,312.7,-211.7,311.8,-205.4,357.9,-198.9],[-123.6,-64.6,-125.5,-85.4,-132.7,-84.7,-130.8,-63.8],[-211.2,17,-211.6,13.7,-218.7,14.8,-218.2,18],[428.1,38.3,427.7,32,359.5,36,359.8,42.3],[-252,-296.9,-257.1,-297.3,-258.7,-276.7,-253.6,-276.3],[210.7,-208.6,202.4,-213.5,211.4,-132.3,218.7,-133.2],[119.2,-48.8,111.6,-112,103.7,-107.8,109.7,-53.4],[129.4,31.9,128,31.9,128,31.3,120.5,36.1,129.4,36],[210.6,-224.8,211.2,-249.8,205.2,-249.6,204.3,-234.8],[12.4,34.8,10.4,16.3,3.5,17,5.8,35.4],[307.8,-144.4,302.4,-152.1,296.2,-142.2,313,-118,315.7,-118.6],[-207.7,-167.5,-208.3,-173.2,-242.2,-169.2,-241.2,-163.7],[-21,-366,-28.4,-366.1,-28.1,-324.7,-20.8,-324.6],[-16,-151.7,-11.2,-110.5,-3.6,-108.2,-8.5,-152.3],[356.7,-170.9,310.7,-176,310.3,-173.5,356.4,-168.4],[359.1,-168.2,356.6,-168.4,354.2,-118.9,356.7,-118.8],[95.2,-389.6,85.6,-389.7,85.7,-378.8,95.2,-379,97.2,-381.6,98.3,-381.5,98.5,-386],[-139.7,-175,-140.3,-180.9,-182.3,-176.2,-181.6,-170.3],[-195.1,-353.7,-199.1,-353.7,-199.6,-332.6,-195,-332.3],[98.3,-351.9,149.6,-347.4,149.7,-353.3,98.6,-356.9],[-211.6,13.7,-214.7,-10,-221.9,-9.1,-218.7,14.8],[96.8,-282.4,95.8,-284.6,86.3,-282.7,86.7,-269.6,94.1,-267.8,94.8,-268.5],[120,-42.5,112.5,-43.8,120.6,31.9,128,31.3],[-285.5,60.1,-292.6,61,-292.1,64.9],[-21,-366,-21,-370,-28.4,-366.1],[302.4,-152.1,244.9,-203.1,210.6,-224.8,212,-209.4,296.2,-142.2],[-349.9,-143.3,-355.9,-166.5,-360.1,-165.8,-354.4,-142.1],[-218.2,18,-218.7,14.8,-253.7,20.3,-253.2,23.5],[-207.6,-302.3,-249.5,-303.1,-249.5,-298.9,-207.8,-298.1],[34.4,-112.3,31.9,-135.3,29,-135,31.5,-112],[-19,-289.7,-20.6,-291.9,-27.9,-290,-30.5,-276.6,-23,-276.7],[98.6,-356.9,85.8,-357.1,85.9,-348.9,95.4,-349.1,98.3,-351.9],[-230.6,-73.1,-231.7,-82,-301.4,-66.1,-300.3,-57.1],[202.4,-213.5,198.4,-218.1,175.4,-215.6,175.9,-210.8],[-115,43.8,-115.1,43.4,-122,44,-122.2,44.3,-121.8,48,-121.2,47.9,-119.3,47.8,-115.5,47.6,-114.7,47.5],[-154.2,-16.4,-155,-23,-157.6,-22.7,-156.9,-16.2],[86.3,-282.7,-19,-289.7,-23,-276.7,28.3,-278.3,86.7,-269.6],[-224.7,-83.2,-241.2,-163.7,-248.1,-163.2,-231.7,-82],[-295.8,52.9,-296.5,49,-324.5,53.7,-323.7,57.6],[313,-118,302.5,-132.4,310.9,-52.8,319.5,-52.9],[-139.5,-389.5,-139.5,-392.8,-145.9,-392.7],[229.9,31.4,129.4,31.9,129.4,36],[-139.5,-380.6,-139.5,-389.5,-145.8,-389.5,-145.8,-380.6],[44.4,-201.3,45,-195.7,94.4,-201.4,93.6,-206.8],[-336.9,-251.7,-337.1,-257.2,-343.2,-256.9],[-85.2,-377.1,-103.9,-378.3,-104.2,-374.7,-86.5,-373.6],[-156.9,-16.2,-157.6,-22.7,-215.6,-16.9,-214.7,-10],[-85,-326.2,-95.7,-326.8,-96,-322.8,-84.5,-322],[-206.4,50.6,-209.3,31.3,-216.3,32.4,-213.7,51.8],[95.1,-404.4,85.5,-409.5,85.6,-389.7,95.2,-389.6],[145.6,-265.5,96.8,-282.4,94.8,-268.5,139.8,-252.9],[81.6,-41.5,80.6,-49,7.7,-41.9,5,-32.9],[119.2,-48.8,109.7,-53.4,108.9,-51.8,112.5,-43.8,120,-42.5],[210.6,-224.8,204.3,-234.8,201.4,-233.5,198.4,-218.1,202.4,-213.5,210.7,-208.6,212,-209.4],[-88.9,-89.6,-90.1,-98.4,-126.1,-94.4,-125.5,-85.4],[205.2,-252.6,205.2,-249.6,211.2,-249.8],[-354.4,-142.1,-352.9,-136.6,-348.4,-137.8],[-209.3,31.3,-210.2,24.5,-217.2,25.7,-218.3,27.6,-216.3,32.4],[-215.6,-16.9,-223.3,-74.3,-230.6,-73.1,-222.8,-15.9],[3,17.1,2.7,13.2,-116.5,22.6,-116.3,26.6],[418.2,-46.9,409.7,-49.2,406.3,-35.2],[-139.5,-255,-139.2,-269.6,-145.4,-267,-146.7,-253.1],[-301.4,-66.1,-322.6,-144.3,-329.5,-142.6,-308.4,-64.5],[10.4,16.3,10,12.5,2.7,13.2,3,17.1],[-132.7,-176.3,-133.4,-181.7,-140.3,-180.9,-139.7,-175],[-130.5,-147.7,-132.7,-176.3,-139.7,-175,-136.9,-138.2],[-417.8,23,-416.8,16.2,-424.4,18.8,-425.4,27.1],[-13.4,-195,-23,-276.7,-30.5,-276.6,-20.8,-194.3],[170.1,-207.6,172.5,-183.6,176.5,-184,174.1,-208],[310.9,-52.8,229.3,-61.3,229,-54.5,309.5,-46],[-121.8,48,-122.2,44.3,-149.3,46.5,-148.9,50.3],[311.8,-205.4,306.1,-205.8,304,-176.4,309.8,-176.1],[237,30.6,229.9,31.4,229.9,35.7,237.4,35.6],[98.3,-381.5,145.5,-378.2,145.8,-382.7,98.5,-386],[187.2,-120.7,186.1,-129.4,110.9,-121,111.6,-112],[-103.9,-378.3,-106.6,-378.5,-106.9,-374.9,-104.2,-374.7],[94.1,-267.8,86.7,-269.6,93.6,-206.8,101,-207.6],[-30.1,-322.7,-82.9,-326,-82.3,-321.9,-30.4,-318.6],[-20.8,-324.6,-28.1,-324.7,-30.1,-322.7,-30.4,-318.6,-20.7,-318.5],[312.6,-298.3,267.3,-301.1,267.2,-299.2,312.5,-296.3],[143.9,-204.8,146.5,-180,150.5,-180.4,147.9,-205.3],[-260.1,-223.2,-261.9,-236.8,-279,-230.2,-274.5,-217.2],[35.8,-101.4,34.4,-112.3,31.5,-112,32.9,-101.1],[108,-171.1,98.3,-166.4,105.5,-167.2],[-85.2,-377.1,-86.5,-373.6,-85.1,-371.1,-83,-370],[-299.7,5.8,-300.6,-.8,-377.4,12.1,-375.5,18.6],[359.2,-170.7,356.7,-170.9,359.1,-168.2],[-149.4,46.4,-154.2,-16.4,-156.9,-16.2,-152.1,46.6],[306.5,-212,306.1,-205.8,311.8,-205.4],[-329.5,-142.6,-330.5,-148,-349.9,-143.1,-348.4,-137.8],[224.9,-79.3,224.2,-85.2,217,-84.1,215.8,-82,216.2,-78],[-8.8,-154.4,-12.7,-189.4,-20.3,-189,-16.2,-153.7],[-21.9,-427.3,-23.5,-428.9,-28.7,-427.9,-28.7,-416.9,-21.3,-415,-20,-416.2],[-195.3,-380,-198.5,-380,-198.4,-372.1,-195.3,-372,-193.4,-373.9],[201.4,-233.5,196,-238.2,151,-261.6,145.9,-250.2,198.4,-218.1],[-242.2,-169.2,-254,-228,-260.1,-223.2,-249.3,-168.8],[-279,-230.2,-282.4,-229,-278,-215.9],[-200.8,-303.6,-205,-304.2,-207.8,-298.1,-206,-296.1,-201.9,-295.5],[302.5,-132.4,296.2,-142.2,218.7,-133.2,219.7,-124.4],[-323.4,-149.7,-334,-208.6,-341.4,-207.8,-330.5,-148],[354.2,-118.9,351.3,-104,353.9,-103.3],[-223.3,-74.3,-224.7,-83.2,-231.7,-82,-230.6,-73.1],[-246.8,-335.5,-248.4,-337.2,-253.6,-336,-254.4,-330.8,-249.4,-330.5],[-251.3,-305.1,-256.4,-305.6,-257.1,-297.3,-252,-296.9,-249.5,-303.1],[-83.5,-426.1,-85.2,-426.4,-85.2,-377.1,-83.2,-375.9],[319.5,-52.9,310.9,-52.8,309.5,-46,311.6,-44.3,318.9,-43.3,319.9,-44],[360.5,-198.6,357.9,-198.7,356.7,-170.9,359.2,-170.7],[-30.5,-276.6,-27.9,-290,-81.8,-283.6,-78.9,-270.4],[187.2,-120.7,190.2,-91.9,192.9,-92.1,189.9,-121],[-241.2,-163.7,-242.2,-169.2,-249.3,-168.8,-248.1,-163.2],[-126.9,-19.1,-127.4,-25.7,-155,-23,-154.2,-16.4],[-97.1,-328.3,-101.1,-328.5,-101.5,-323.1,-96,-322.8,-95.7,-326.8],[151,-261.6,151,-269.9,147.1,-269.9,139.8,-252.9,145.9,-250.2],[-392.2,-35.7,-395.1,-46.7,-413.2,-42.9,-410.6,-31.4],[266.6,-299.3,262.8,-299.3,262.7,-249.2,211.3,-252.7,266.6,-245.9],[-78.9,-270.4,-81.8,-283.6,-81.1,-270],[-101.1,-327.2,-139.3,-329.6,-139.3,-325.6,-101.5,-323.1],[-151.7,50.5,-152.1,46.6,-206.3,51.3,-205.8,55.4],[-200.4,-284.9,-180.2,-286.9,-180.6,-291.1,-200.9,-289.2],[-221.9,-9.1,-222.8,-15.9,-293.3,-2.1,-292.6,4.6],[-126.1,-94.4,-128,-116.8,-135.2,-116.2,-133.5,-93.5],[-136.9,-138.2,-177.6,-133.9,-179.2,-135.4,-182.6,-169.1,-186.5,-168.5,-182.7,-130.9,-136.7,-135.5],[411.4,-56.3,409.7,-49.2,418.2,-46.9,420.9,-48.8,422.4,-53.2],[189.9,-121,188.9,-129.7,186.1,-129.4,187.2,-120.7],[-128.5,-123.9,-129.8,-138.6,-136.7,-135.5,-135.7,-123.3],[7.7,-41.9,6.7,-43,-2.8,-39.1,-2,-32.3,5,-32.9],[-381.2,72.5,-384.1,72.2,-384.1,81.2,-378.2,80.4,-379,76.3,-380.8,75],[361.3,-204.7,358.8,-205.1,360.5,-198.6],[406.3,-35.2,319.5,-52.9,319.9,-44,404.2,-27],[-81.1,-270,-84,-283,-139.2,-269.6,-139.5,-255],[-116.5,22.6,-119.5,-19.7,-126.9,-19.1,-123.6,23.5],[220.4,-54.1,219.7,-61.1,119.2,-48.8,120,-42.5],[-120.9,-62.5,-123.6,-64.6,-130.8,-63.8,-130,-55.3,-122.8,-56,-120.4,-58.3],[325.7,29.1,318.2,30,325.7,33.1],[-205.6,-167.7,-206.3,-173.4,-208.3,-173.2,-207.7,-167.5],[95.3,-357.2,95.2,-379,85.7,-378.8,85.8,-357.1],[32.9,-101.1,31.5,-112,-3.6,-108.2,1.5,-97.5],[-116.3,26.6,-116.5,22.6,-123.6,23.5,-123.3,27.5],[-106.6,-378.5,-139.2,-380.6,-139.5,-377,-106.9,-374.9],[-16.2,-153.7,-55.5,-149.1,-55.3,-147.1,-16,-151.7],[319.6,43.8,318.9,38.8,312.1,39.2,312.2,48.2,315,47.9],[95.4,-419.5,87.7,-421.5,86.2,-420.1,85.5,-409.5,95.1,-404.4,96.4,-406.6],[41,-195.4,43.4,-170.6,45.5,-170.9,46.9,-157,64,-158.9,63.5,-162.9,50.1,-161.4,49.3,-173.6,48,-173.4,47.1,-174.4,45,-195.7],[16.3,-192.6,15.6,-198.1,-13.4,-195,-12.7,-189.4],[-254.1,-270.1,-259.2,-270.7,-261.9,-236.8,-256.6,-238.8],[-119.5,-19.7,-120.1,-26.6,-127.4,-25.7,-126.9,-19.1],[17.8,-192.8,17.1,-198.2,15.6,-198.1,16.3,-192.6],[-375.5,18.6,-377.4,12.1,-380.3,12.1,-379.4,19.2],[-120.4,-58.3,-105.7,-59.7,-106.4,-64.1,-120.9,-62.5],[-195.1,-360.6,-198.9,-360.7,-199.1,-353.7,-195.1,-353.7,-193.6,-355],[267.2,-299.2,267.3,-301.1,262.8,-301],[-128.2,-145.8,-130.5,-147.7,-136.9,-138.2,-136.7,-135.5,-129.8,-138.6,-127.8,-140.8],[212.4,-123.5,211.4,-132.3,189.9,-121],[-125.5,-85.4,-126.1,-94.4,-133.5,-93.5,-132.7,-84.7],[-379.4,19.2,-380.3,12.1,-416.8,16.2,-417.8,23],[211.1,-252.7,210.8,-318.8,210.1,-318.8,209.5,-401.2,203.3,-400.4,204.6,-341.7,205.2,-252.6],[-278,-215.9,-282.4,-229,-319.7,-219.4,-336.6,-218.5,-334,-208.6,-310.7,-210.7,-309.8,-210.1],[-248.1,-163.2,-249.3,-168.8,-323.4,-149.7,-322.6,-144.3],[-389.3,-36.3,-392.3,-47.4,-395.1,-46.7],[-152.1,46.6,-151.7,50.5,-148.9,50.3],[-97.1,-328.3,-97,-340.7,-100.9,-341.1,-101.1,-328.5],[-352.9,-136.6,-354.4,-142.1,-379.9,-135.7,-377.6,-127.8,-370.9,-129.5,-371.4,-131.7],[16.3,-192.6,19.9,-158.4,21.5,-158.5,17.8,-192.8],[347.1,43,346.8,36.7,318.9,38.8,319.6,43.8],[-381.2,72.5,-379.5,53,-378.1,47.6,-375.5,18.6,-379.4,19.2,-384.1,72.2],[-307.4,-55.4,-308.4,-64.5,-353.6,-54.3,-354.1,-56.4,-392.3,-47.4,-389.3,-36.3],[-120.1,-26.6,-122.8,-56,-130,-55.3,-127.4,-25.7],[-146.7,-253.1,-212.6,-249.5,-209.7,-238.6],[318.9,-43.3,311.6,-44.3,318.2,30,325.7,29.1],[167.9,-209.9,167.4,-214.7,149.2,-212.8,149.8,-207.9],[-139.5,-377,-145.8,-377.1,-145.7,-329.2,-139.3,-329.6],[-83.1,-101.6,-87.3,-150.3,-128.2,-145.8,-127.8,-140.8,-94,-144.5,-91.7,-142.6,-88.1,-101.2],[-181.6,-170.3,-182.3,-176.2,-188.8,-175.5,-188.2,-169.6,-186.5,-168.5,-182.6,-169.1],[-335.6,78.7,-516.6,111.6,-515.6,117.2,-334.7,84.4,105,48],[-21.3,-415,-28.7,-416.9,-28.4,-369.9,-21,-370],[-145.7,-329.2,-195,-332.3,-199.6,-327.4,-145.7,-324],[422.5,-101.7,356.7,-118.3,353.9,-103.3,419.2,-88.3],[-28.5,-369.9,-81.6,-373.1,-83,-370,-28.7,-366.7],[-285.5,60.1,-286.5,53.5,-293.7,54.5,-292.6,61],[111.6,-112,110.9,-121,103.3,-121.7,102.1,-119.8,102.3,-108.9,103.7,-107.8],[229.3,-61.3,226.7,-63.2,219.7,-61.1,220.4,-54.1,227.8,-53.4,229,-54.5],[-213.5,55.9,-213.7,51.8,-284.9,64],[-379.9,-135.7,-382.5,-137.2,-388.5,-135.7,-389.9,-133,-387.7,-125.3,-377.6,-127.8],[149.8,-207.9,149.2,-212.8,141.1,-211.9,141.6,-206.9,143.9,-204.8],[175.9,-210.8,175.4,-215.6,167.4,-214.7,167.9,-209.9,170.1,-207.6,174.1,-208],[102.3,-108.9,102.1,-119.8,34.4,-112.3,35.8,-101.4],[.6,-96.5,-9.8,-98.7,-2.8,-39.1,6.7,-43],[-322.6,-144.3,-323.4,-149.7,-330.5,-148,-329.5,-142.6],[-195.3,-372,-198.4,-372.1,-198.9,-360.7],[-193.4,-373.9,-171,-373.1,-170.9,-373.5,-170.8,-376.7,-170.7,-377.1,-193.2,-378],[-217.8,31.5,-218.3,27.6,-238.6,30.1,-238.1,34.1],[108,-171.1,130.8,-173.7,130.2,-177.6,107.5,-175],[312.2,48.2,312,46.3,277.7,50,236,56,236,58.3,277.5,52],[-212.2,-238,-215.1,-248.8,-256,-238.7,-254,-228],[86.2,-420.1,-21.9,-427.3,-20,-416.2,85.5,-409.5],[216.2,-78,215.8,-82,189.9,-79.6,190.4,-75.6],[-413.2,-42.9,-417.3,-44.6,-428.4,-42,-429.2,-37.1,-417.7,-30.8,-410.6,-31.4],[120.5,36.1,120.1,32,12.5,35.3,13,39.1],[-100.6,-428.9,-103.3,-429.2,-106.6,-378.5,-103.9,-378.3],[-293.3,-2.1,-300.3,-57.1,-307.4,-55.4,-300.6,-.8],[-82.9,-326,-85,-326.2,-84.5,-322,-82.3,-321.9],[5,-32.9,-2,-32.3,2.7,13.2],[-145.8,-380.6,-145.8,-377.1,-139.5,-377],[-125.6,-121.2,-128.5,-123.9,-135.7,-123.3,-135.2,-116.2,-125.1,-117.3],[426.2,-86.4,419.2,-88.3,411.4,-56.3,418.3,-54.5],[-83,-370,-85.1,-371.1,-85,-326.2,-82.9,-326],[-206.4,50.6,-213.7,51.8,-213.5,55.9],[-384.1,81.2,-384.5,76.9,-425.9,83.7,-425,88.3],[110.9,-121,105.5,-167.2,98.3,-166.4,103.3,-121.7],[-256,-238.7,-261.9,-236.8,-260.1,-223.2,-254,-228],[-287.5,45.7,-292.6,4.6,-299.7,5.8,-294.6,46.7],[359.2,29.6,340.6,30.4,340.5,33.3,346.8,36.7,347.1,43,359.8,42.3],[-278,-215.9,-271.8,-188.7,-268,-189.7,-274.5,-216.8],[-20.6,-291.9,-20.7,-318.5,-28.1,-318.5,-27.9,-290],[12.4,34.8,5.8,35.4,6.1,39.7,8.5,40.8,11.5,40.8,13,39.1],[309.5,-173.5,302.4,-152.1,307.8,-144.4],[-286.5,53.5,-287.5,45.7,-294.6,46.7,-295.8,52.9,-293.7,54.5],[-253.6,-276.3,-258.7,-276.7,-259.2,-270.7,-251.4,-270.3,-251.7,-274.5],[91.1,-42.5,90.2,-50,80.6,-49,81.6,-41.5,84.2,-39.6,89.1,-39.9],[318.7,-295.8,312.5,-296.3,306.5,-212,312.5,-211.7],[-206.3,-173.4,-210.1,-203.1,-205,-203.8,-209.6,-238.3,-212.2,-238,-207.8,-205.3,-212.3,-204.7,-208.3,-173.2],[-139.3,-325.6,-139.3,-329.6,-145.7,-329.2,-145.7,-324],[-16,-151.7,-8.5,-152.3,-8.8,-154.4,-16.2,-153.7],[312.2,44.2,312.1,39.2,159.9,41.5,119.1,42.5,119.3,47.4],[412.9,-24.9,404.2,-27,391.9,23.8,381.1,26.6,376.9,28,397.5,24.6,400.4,25],[-201.9,-295.5,-206,-296.1,-206.8,-289.5,-202.7,-289],[-80.7,-99.5,-83.1,-101.6,-90.1,-98.4,-88.9,-89.6,-79.4,-90.7],[-12.7,-189.4,-13.4,-195,-20.8,-194.3,-20.3,-189],[119.1,42.5,104.8,42.3,105.6,52.7,114.3,51.6,119.3,47.4],[-82.3,-321.9,-84.5,-322,-84,-283.5,-81.8,-283.6],[6.1,39.7,5.8,35.4,-115,43.8,-114.7,47.5],[101.4,-202.7,101,-207.6,93.6,-206.8,94.4,-201.4],[-249.4,-330.5,-254.4,-330.8,-256.4,-305.6,-251.3,-305.1],[-212.6,-249.5,-215.1,-248.8,-212.2,-238],[112.5,-43.8,108.9,-51.8,90.2,-50,91.1,-42.5],[-200.8,-303.6,-199.6,-327.4,-203.9,-326.2,-205,-304.2],[-20.3,-189,-20.8,-194.3,-133.4,-181.7,-132.7,-176.3],[354.2,-118.9,324.6,-127.6,307.8,-144.4,315.7,-118.6,343,-107.6,343.3,-105.9,351.3,-104],[-300.3,-57.1,-301.4,-66.1,-308.4,-64.5,-307.4,-55.4],[151,-269.9,150.4,-328.9,146.5,-328.9,147.1,-269.9],[237,30.6,227.8,-53.4,220.4,-54.1,229.9,31.4],[-2,-32.3,-2.8,-39.1,-120.1,-26.6,-119.5,-19.7],[224.2,-85.2,219.7,-124.4,212.4,-123.5],[-336.6,-218.5,-336.9,-251.7,-343,-251.5,-342.7,-218.3],[226.7,-63.2,224.9,-79.3,217.7,-78.2,219.7,-61.1],[-132.7,-84.7,-133.5,-93.5,-224.7,-83.2,-223.3,-74.3],[318.3,34,318.2,30,237.1,31.6,237.4,35.6],[414.7,-33.2,406.3,-35.2,404.2,-27,412.9,-24.9],[-377.4,12.1,-389.3,-36.3,-392.1,-35.5,-380.3,12.1]],p:`東京都大田区本羽田二丁目`}})).map(([e,t])=>({...t,id:e.split(`/`).pop().replace(`.json`,``)})),Wu=e=>e*Math.PI/180;function Gu(e,t,n,r){let i=Wu(n-e),a=Wu(r-t),o=Math.sin(i/2)**2+Math.cos(Wu(e))*Math.cos(Wu(n))*Math.sin(a/2)**2;return 12742*Math.asin(Math.sqrt(o))}async function Ku(e,t){if(location.protocol===`file:`)return null;let n=new AbortController,r=setTimeout(()=>n.abort(),t);try{let t=await fetch(new URL(e,document.baseURI),{signal:n.signal});return t.ok?await t.json():null}catch{return null}finally{clearTimeout(r)}}async function qu(){let e=await Ku(`areas/index.json`,5e3);return Array.isArray(e)?e.filter(e=>e&&e.id&&Array.isArray(e.c)):[]}var Ju=``;function Yu(e){let t=e.filter(e=>e.id!==Ju),n=t.length?t:e,r=n[Math.random()*n.length|0];return Ju=r.id,r}function Xu(e,t,n,r=4){return Yu(e.map(e=>({e,d:Gu(t,n,e.c[0],e.c[1])})).sort((e,t)=>e.d-t.d).slice(0,r).map(e=>e.e))}function Zu(e){return Yu(e)}var Qu=-1;function $u(){let e=Math.random()*Uu.length|0;return Uu.length>1&&e===Qu&&(e=(e+1)%Uu.length),Qu=e,Uu[e]}async function ed(e){let t=e&&await Ku(`areas/${e.id}.json`,8e3);return t&&t.b&&t.c?{...t,id:e.id}:$u()}async function td(e,t,n){let r=new AbortController,i=setTimeout(()=>r.abort(),n);try{let n=await fetch(e,{signal:r.signal,cache:`no-store`,referrerPolicy:`no-referrer`,credentials:`omit`});if(!n.ok)return null;let i=t(await n.json());return i&&Number.isFinite(i.lat)&&Number.isFinite(i.lon)?i:null}catch{return null}finally{clearTimeout(i)}}async function nd(){return await td(`https://ipwho.is/?fields=success,latitude,longitude`,e=>e&&e.success!==!1?{lat:Number(e.latitude),lon:Number(e.longitude)}:null,3500)||td(`https://get.geojs.io/v1/ip/geo.json`,e=>e?{lat:parseFloat(e.latitude),lon:parseFloat(e.longitude)}:null,3500)}var rd=`北海道.青森県.岩手県.宮城県.秋田県.山形県.福島県.茨城県.栃木県.群馬県.埼玉県.千葉県.東京都.神奈川県.新潟県.富山県.石川県.福井県.山梨県.長野県.岐阜県.静岡県.愛知県.三重県.滋賀県.京都府.大阪府.兵庫県.奈良県.和歌山県.鳥取県.島根県.岡山県.広島県.山口県.徳島県.香川県.愛媛県.高知県.福岡県.佐賀県.長崎県.熊本県.大分県.宮崎県.鹿児島県.沖縄県`.split(`.`);function id(e){let t=rd[parseInt(String(e.id||``).slice(0,2),10)-1]||``,n=String(e.n||``).replace(/（\d{4}年度）/,``),r=e.p||n;return t&&!r.startsWith(t)?t+r:r}var ad=e=>document.getElementById(e),od=ad(`stage`),sd=ad(`vignette`),cd=ad(`veil`),ld=ad(`line`),ud=ad(`title`),dd=ad(`stick`),fd=new Tu({canvas:od,antialias:!1,powerPreference:`high-performance`});fd.setPixelRatio(Math.min(window.devicePixelRatio||1,Q.maxPixelRatio));var pd=new Cn;pd.background=new Y(Q.fogColor),pd.fog=new Sn(Q.fogColor,Q.fogDensity);var md=new qo(Q.fov,1,.1,900);md.rotation.order=`YXZ`,pd.add(new Fo(16777215,13621471,2.5));var hd=new Xo(16774890,1);hd.position.set(-60,100,40),pd.add(hd);var gd=null,_d=null;function vd(e){gd&&_d===e||(gd&&(pd.remove(gd.group),gd.dispose()),_d=e,gd=Au(e),pd.add(gd.group))}var yd=Bu(),bd=new mn;{let e=new si(new Mi(3.2,3.2,220,14,1,!0).translate(0,110,0),new Yr({color:16751421,transparent:!0,opacity:.4,depthWrite:!1,fog:!1,side:2})),t=new si(new Mi(1,1,220,10,1,!0).translate(0,110,0),new Yr({color:16761978,transparent:!0,opacity:.75,depthWrite:!1,fog:!1,side:2}));e.add(t),e.frustumCulled=!1,t.frustumCulled=!1;let n=document.createElement(`canvas`);n.width=n.height=64;let r=n.getContext(`2d`),i=r.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,`rgba(255,170,70,1)`),i.addColorStop(.35,`rgba(255,160,60,0.55)`),i.addColorStop(1,`rgba(255,150,50,0)`),r.fillStyle=i,r.fillRect(0,0,64,64);let a=new Hr(new Or({map:new Di(n),depthWrite:!1,fog:!1}));a.scale.set(34,34,1),a.position.y=2.6,bd.add(e,a),bd.userData.pillar=e,bd.visible=!1,pd.add(bd)}var $={x:0,z:0,yaw:0,pitch:0,bob:0,lastStep:0},xd=`title`,Sd=[],Cd={x:0,z:0},wd=null,Td=0,Ed=0,Dd=0,Od=null,kd=0,Ad={segs:[[]],caught:[],goal:{x:0,z:0}};function jd(e,t=4200){ld.textContent=e,ld.classList.add(`on`),clearTimeout(jd._t),jd._t=setTimeout(()=>ld.classList.remove(`on`),t)}function Md(e){$.x=e.x,$.z=e.z,$.pitch=0;let t=[];for(let n=0;n<16;n++){let n=Math.random()*Math.PI*2;if(Math.hypot(e.x-Math.sin(n)*110,e.z-Math.cos(n)*110)>gd.R-25)continue;let r=0;for(;r<80&&gd.isFree(e.x-Math.sin(n)*r,e.z-Math.cos(n)*r);r+=2);t.push({yaw:n,run:r})}t.sort((e,t)=>t.run-e.run),$.yaw=t.length?t[Math.min(t.length-1,Math.random()*3|0)].yaw:Math.random()*Math.PI*2}function Nd(e=$u()){Sd.forEach(e=>e.dispose()),Sd=[],vd(e);let t=null;for(let e=0;e<25;e++){let e=gd.plan();if(!e)continue;t=e;let n=e.goal.x-e.start.x,r=e.goal.z-e.start.z,i=Math.hypot(n,r)||1,a=!0;for(let t=2;t<=30;t+=2)if(!gd.isFree(e.start.x+n/i*t,e.start.z+r/i*t)){a=!1;break}if(a)break}t?(Cd=t.goal,wd=t.fromGoal,bd.position.set(Cd.x,0,Cd.z),bd.visible=!0,Sd=zu(Ru(),pd,gd),Md(t.start),Sd.forEach(e=>e.reset($,$.yaw)),Dd=0,Td=0,Ad={segs:[[{x:$.x,z:$.z}]],caught:[],goal:{x:Cd.x,z:Cd.z}},ad(`result`).classList.add(`gone`),cd.style.transition=`opacity 2.2s ease`,cd.className=``,cd.style.opacity=`0`,ud.classList.add(`gone`),xd=`intro`,kd=0):console.error(`no plan`)}function Pd(){xd===`intro`&&(xd=`play`,ld.classList.remove(`on`))}function Fd(){xd===`play`&&(xd=`caught`,Od=Sd.find(e=>e.caught)||Sd[0],Ad.caught.push({x:$.x,z:$.z}),Ed=Math.max(Ed,.5),ld.classList.remove(`on`),setTimeout(()=>{cd.style.transition=`opacity 0.8s ease`,cd.style.opacity=`1`},Q.caughtLook),setTimeout(()=>{Md(gd.pickRespawn(wd,$)),Sd.forEach(e=>e.reset($,$.yaw)),Ad.segs.push([{x:$.x,z:$.z}]),Td=0,Ed=0,cd.style.transition=`opacity 2.6s ease`,cd.style.opacity=`0`,xd=`play`,jd(`……まだ、帰り道だ。`)},Q.caughtLook+2200))}function Id(){if(xd!==`play`)return;xd=`home`,yd.home(),cd.className=`warm`,cd.style.transition=`opacity 2.6s ease`,cd.style.opacity=`1`,setTimeout(()=>jd(`ただいま。`,6e3),2200);let e=Dd;setTimeout(()=>{ld.classList.remove(`on`);let t=Math.floor(Math.min(innerWidth-32,innerHeight*.58,520));Vu(ad(`map`),_d,Ad,t),ad(`stats`).textContent=Hu(Ad,e),ad(`place`).textContent=id(_d),ad(`result`).classList.remove(`gone`)},5200)}var Ld=ad(`strange`);try{let e=localStorage.getItem(`kaerimichi.strange`);e!==null&&(Ld.checked=e===`1`)}catch{}location.search.includes(`strange`)&&(Ld.checked=!0),Ld.addEventListener(`change`,()=>{try{localStorage.setItem(`kaerimichi.strange`,Ld.checked?`1`:`0`)}catch{}Ld.checked||zd()});var Rd=null;function zd(){Rd||(Rd=nd())}Ld.checked||zd();var Bd=qu();async function Vd(){try{let e=await Bd;if(!e.length)return $u();let t;if(Ld.checked)t=Zu(e);else{zd();let n=await Rd;t=n?Xu(e,n.lat,n.lon):Zu(e)}return await ed(t)}catch{return $u()}}var Hd=!1;async function Ud(e){if(Hd)return;Hd=!0;let t=e.textContent;e.textContent=`マップ生成中…`,await new Promise(e=>requestAnimationFrame(()=>setTimeout(e,0)));let n=await Vd();yd.start(),yd.resume(),Nd(n),e.textContent=t,Hd=!1}ad(`btn-start`).addEventListener(`click`,e=>Ud(e.currentTarget)),ad(`btn-again`).addEventListener(`click`,e=>Ud(e.currentTarget));var Wd=Object.create(null);addEventListener(`keydown`,e=>{Wd[e.code]=!0,xd===`intro`&&kd>1.2&&Pd()}),addEventListener(`keyup`,e=>{Wd[e.code]=!1});var Gd={active:!1,id:-1,ox:0,oy:0,x:0,y:0},Kd=new Map;addEventListener(`pointerdown`,e=>{xd===`intro`&&kd>1.2&&!e.target.closest(`button`)?Pd():xd!==`play`||e.target.closest(`button`)||(e.pointerType===`touch`&&e.clientX<innerWidth*.45&&!Gd.active?(Object.assign(Gd,{active:!0,id:e.pointerId,ox:e.clientX,oy:e.clientY,x:0,y:0}),dd.hidden=!1,dd.style.left=e.clientX+`px`,dd.style.top=e.clientY+`px`,dd.firstElementChild.style.transform=``):Kd.set(e.pointerId,{x:e.clientX,y:e.clientY}))}),addEventListener(`pointermove`,e=>{if(Gd.active&&e.pointerId===Gd.id){let t=(e.clientX-Gd.ox)/55,n=(e.clientY-Gd.oy)/55,r=Math.hypot(t,n);r>1&&(t/=r,n/=r),Gd.x=t,Gd.y=n,dd.firstElementChild.style.transform=`translate(${t*36}px, ${n*36}px)`;return}let t=Kd.get(e.pointerId);t&&xd===`play`&&($.yaw-=(e.clientX-t.x)*Q.lookSpeed,$.pitch=Math.max(-1.1,Math.min(1.1,$.pitch-(e.clientY-t.y)*Q.lookSpeed)),t.x=e.clientX,t.y=e.clientY)});var qd=e=>{e.pointerId===Gd.id&&(Gd.active=!1,Gd.id=-1,Gd.x=Gd.y=0,dd.hidden=!0),Kd.delete(e.pointerId)};addEventListener(`pointerup`,qd),addEventListener(`pointercancel`,qd);function Jd(){let e=-Gd.y,t=Gd.x;(Wd.KeyW||Wd.ArrowUp)&&(e+=1),(Wd.KeyS||Wd.ArrowDown)&&--e,Wd.KeyD&&(t+=1),Wd.KeyA&&--t,Wd.ArrowLeft&&($.yaw+=.03),Wd.ArrowRight&&($.yaw-=.03);let n=Math.hypot(e,t);return n>1?{fwd:e/n,side:t/n}:{fwd:e,side:t}}function Yd(){let e=innerWidth,t=innerHeight;fd.setSize(e,t,!1),md.aspect=e/t,md.updateProjectionMatrix()}addEventListener(`resize`,Yd),Yd();function Xd(e){let t=Math.atan(Math.tan(md.fov*Math.PI/360)*md.aspect),n={px:$.x,pz:$.z,yaw:$.yaw,halfFovH:t,dt:e,onThump:(e,t,n)=>{let r=Math.hypot(e-$.x,t-$.z),i=Math.sin(Math.atan2(e-$.x,-(t-$.z))-$.yaw);yd.thump(r,Math.max(-1,Math.min(1,i))),r<90&&(Ed=Math.max(Ed,(1-r/90)*.5*n))}},r=0,i=!1;for(let e of Sd)e.update(n),r=Math.max(r,e.danger),i||(i=e.caught);return{dmax:r,isCaught:i}}function Zd(e,t,n,r,i){let a=e-$.x,o=n-$.z,s=(Math.atan2(-a,-o)-$.yaw+Math.PI*3)%(Math.PI*2)-Math.PI;$.yaw+=s*Math.min(1,i*r);let c=Math.atan2(t-Q.eyeHeight,Math.hypot(a,o));$.pitch+=(Math.max(-.3,Math.min(1,c))-$.pitch)*Math.min(1,i*r)}var Qd=new ps;function $d(){requestAnimationFrame($d);let e=Math.min(.05,Qd.getDelta());if(xd===`play`){Dd+=e;let t=Jd(),n=Q.walkSpeed,r=-Math.sin($.yaw),i=-Math.cos($.yaw),a=Math.cos($.yaw),o=-Math.sin($.yaw);$.x+=(r*t.fwd+a*t.side)*n*e,$.z+=(i*t.fwd+o*t.side)*n*e,gd.collide($,Q.playerRadius);let s=Ad.segs[Ad.segs.length-1],c=s[s.length-1];(!c||Math.hypot($.x-c.x,$.z-c.z)>1.5)&&s.push({x:$.x,z:$.z});let l=Math.hypot(t.fwd,t.side);if(l>.05){$.bob+=e*n*l*1.25;let t=Math.sin($.bob);t<0&&$.lastStep>=0&&yd.footstep(),$.lastStep=t}let{dmax:u,isCaught:d}=Xd(e);Td+=(u-Td)*Math.min(1,e*2),d?Fd():Math.hypot(Cd.x-$.x,Cd.z-$.z)<Q.goalReach&&Id()}else if(xd===`intro`){kd+=e,Xd(e*.35);let t=Q.intro;if(kd<t.giant){let t=Sd[0].focus();Zd(t.x,26,t.z,2.4,e)}else kd<t.giant+t.goal?Zd(Cd.x,Q.eyeHeight+Math.hypot(Cd.x-$.x,Cd.z-$.z)*.3,Cd.z,2.4,e):Pd()}else if(xd===`caught`&&Od){let t=Od.focus(),n=t.x-$.x,r=t.z-$.z,i=(Math.atan2(-n,-r)-$.yaw+Math.PI*3)%(Math.PI*2)-Math.PI;$.yaw+=i*Math.min(1,e*5);let a=Math.atan2(t.y-Q.eyeHeight,Math.hypot(n,r));$.pitch+=(Math.max(-.2,Math.min(1.2,a))-$.pitch)*Math.min(1,e*5)}else xd===`title`&&($.yaw+=e*.05);yd.update(xd===`play`?Td:0,e),Ed*=Math.exp(-e*3);let t=Math.sin($.bob)*.07;md.position.set($.x+(Math.random()-.5)*Ed*.4,Q.eyeHeight+t+(Math.random()-.5)*Ed*.4,$.z+(Math.random()-.5)*Ed*.4),md.rotation.set($.pitch,$.yaw,Math.sin(Dd*.9)*.012*Td),md.fov=Q.fov-8*Td+(xd===`play`?3:0),md.updateProjectionMatrix(),pd.fog.density=Q.fogDensity*(1+.3*Td),sd.style.opacity=String(Math.min(1,Td**.85*1.5)),bd.visible&&(bd.userData.pillar.material.opacity=.36+.07*Math.sin(performance.now()/700)),fd.render(pd,md)}$d(),location.search.includes(`debug`)&&(window.__k={get state(){return xd},player:$,get world(){return gd},get area(){return _d},loadIndex:qu,loadArea:ed,placeName:id,chooseArea:Vd,pickByLocation:Xu,pickRandom:Zu,pickFallback:$u,camera:md,get goal(){return Cd},get threats(){return Sd},startRun:Nd,caught:Fd,arrive:Id,endIntro:Pd,pickKinds:Ru,setKinds(e){Sd.forEach(e=>e.dispose()),Sd=zu(e,pd,gd),Sd.forEach(e=>e.reset($,$.yaw))}});