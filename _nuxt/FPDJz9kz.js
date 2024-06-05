import{_ as N,o as m,c as p,a as y,n as Y,q as b,s as G,u as W,v as Se,x as we,F as Q,y as X,t as T,z as ve,b as B,w as Ie,A as Ee}from"./CyEiJAIG.js";import{_ as ke}from"./DsBHDyiH.js";const Ae={},be={class:"ui-spinner"},Le=y("div",null,null,-1),$e=y("div",null,null,-1),Re=y("div",null,null,-1),Oe=y("div",null,null,-1),Ne=[Le,$e,Re,Oe];function Ce(t,e){return m(),p("div",be,Ne)}const Fe=N(Ae,[["render",Ce]]),Te={props:{image:String},data(){return{loading:!0}},watch:{image(){this.loading=!0}}},De={class:"game-flag"},Pe=["src"];function je(t,e,s,r,n,i){const c=Fe;return m(),p("div",De,[n.loading?(m(),Y(c,{key:0})):b("",!0),y("img",{src:s.image,alt:"Country flag",class:G([n.loading?"loading":""]),onLoad:e[0]||(e[0]=o=>n.loading=!1)},null,42,Pe)])}const Ke=N(Te,[["render",je]]);function E(t){return Array.isArray?Array.isArray(t):ge(t)==="[object Array]"}const Ge=1/0;function Be(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Ge?"-0":e}function Ue(t){return t==null?"":Be(t)}function v(t){return typeof t=="string"}function ue(t){return typeof t=="number"}function We(t){return t===!0||t===!1||ze(t)&&ge(t)=="[object Boolean]"}function de(t){return typeof t=="object"}function ze(t){return de(t)&&t!==null}function x(t){return t!=null}function H(t){return!t.trim().length}function ge(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Ve="Incorrect 'index' type",He=t=>`Invalid value for key ${t}`,Ye=t=>`Pattern length exceeds max of ${t}.`,Qe=t=>`Missing ${t} property in key`,Xe=t=>`Property 'weight' in key '${t}' must be a positive integer`,ce=Object.prototype.hasOwnProperty;class Je{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(r=>{let n=fe(r);s+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,s+=n.weight}),this._keys.forEach(r=>{r.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function fe(t){let e=null,s=null,r=null,n=1,i=null;if(v(t)||E(t))r=t,e=oe(t),s=J(t);else{if(!ce.call(t,"name"))throw new Error(Qe("name"));const c=t.name;if(r=c,ce.call(t,"weight")&&(n=t.weight,n<=0))throw new Error(Xe(c));e=oe(c),s=J(c),i=t.getFn}return{path:e,id:s,weight:n,src:r,getFn:i}}function oe(t){return E(t)?t:t.split(".")}function J(t){return E(t)?t.join("."):t}function Ze(t,e){let s=[],r=!1;const n=(i,c,o)=>{if(x(i))if(!c[o])s.push(i);else{let a=c[o];const l=i[a];if(!x(l))return;if(o===c.length-1&&(v(l)||ue(l)||We(l)))s.push(Ue(l));else if(E(l)){r=!0;for(let h=0,d=l.length;h<d;h+=1)n(l[h],c,o+1)}else c.length&&n(l,c,o+1)}};return n(t,v(e)?e.split("."):e,0),r?s:s[0]}const qe={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},et={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},tt={location:0,threshold:.6,distance:100},st={useExtendedSearch:!1,getFn:Ze,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u={...et,...qe,...tt,...st};const nt=/[^ ]+/g;function rt(t=1,e=3){const s=new Map,r=Math.pow(10,e);return{get(n){const i=n.match(nt).length;if(s.has(i))return s.get(i);const c=1/Math.pow(i,.5*t),o=parseFloat(Math.round(c*r)/r);return s.set(i,o),o},clear(){s.clear()}}}class ne{constructor({getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){this.norm=rt(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,r)=>{this._keysMap[s.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,v(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();v(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,r=this.size();s<r;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!x(e)||H(e))return;let r={v:e,i:s,n:this.norm.get(e)};this.records.push(r)}_addObject(e,s){let r={i:s,$:{}};this.keys.forEach((n,i)=>{let c=n.getFn?n.getFn(e):this.getFn(e,n.path);if(x(c)){if(E(c)){let o=[];const a=[{nestedArrIndex:-1,value:c}];for(;a.length;){const{nestedArrIndex:l,value:h}=a.pop();if(x(h))if(v(h)&&!H(h)){let d={v:h,i:l,n:this.norm.get(h)};o.push(d)}else E(h)&&h.forEach((d,g)=>{a.push({nestedArrIndex:g,value:d})})}r.$[i]=o}else if(v(c)&&!H(c)){let o={v:c,n:this.norm.get(c)};r.$[i]=o}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function me(t,e,{getFn:s=u.getFn,fieldNormWeight:r=u.fieldNormWeight}={}){const n=new ne({getFn:s,fieldNormWeight:r});return n.setKeys(t.map(fe)),n.setSources(e),n.create(),n}function it(t,{getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){const{keys:r,records:n}=t,i=new ne({getFn:e,fieldNormWeight:s});return i.setKeys(r),i.setIndexRecords(n),i}function K(t,{errors:e=0,currentLocation:s=0,expectedLocation:r=0,distance:n=u.distance,ignoreLocation:i=u.ignoreLocation}={}){const c=e/t.length;if(i)return c;const o=Math.abs(r-s);return n?c+o/n:o?1:c}function ct(t=[],e=u.minMatchCharLength){let s=[],r=-1,n=-1,i=0;for(let c=t.length;i<c;i+=1){let o=t[i];o&&r===-1?r=i:!o&&r!==-1&&(n=i-1,n-r+1>=e&&s.push([r,n]),r=-1)}return t[i-1]&&i-r>=e&&s.push([r,i-1]),s}const O=32;function ot(t,e,s,{location:r=u.location,distance:n=u.distance,threshold:i=u.threshold,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,includeMatches:a=u.includeMatches,ignoreLocation:l=u.ignoreLocation}={}){if(e.length>O)throw new Error(Ye(O));const h=e.length,d=t.length,g=Math.max(0,Math.min(r,d));let f=i,_=g;const M=o>1||a,$=M?Array(d):[];let I;for(;(I=t.indexOf(e,_))>-1;){let S=K(e,{currentLocation:I,expectedLocation:g,distance:n,ignoreLocation:l});if(f=Math.min(S,f),_=I+h,M){let k=0;for(;k<h;)$[I+k]=1,k+=1}}_=-1;let C=[],R=1,P=h+d;const Me=1<<h-1;for(let S=0;S<h;S+=1){let k=0,A=P;for(;k<A;)K(e,{errors:S,currentLocation:g+A,expectedLocation:g,distance:n,ignoreLocation:l})<=f?k=A:P=A,A=Math.floor((P-k)/2+k);P=A;let re=Math.max(1,g-A+1),V=c?d:Math.min(g+A,d)+h,F=Array(V+2);F[V+1]=(1<<S)-1;for(let w=V;w>=re;w-=1){let j=w-1,ie=s[t.charAt(j)];if(M&&($[j]=+!!ie),F[w]=(F[w+1]<<1|1)&ie,S&&(F[w]|=(C[w+1]|C[w])<<1|1|C[w+1]),F[w]&Me&&(R=K(e,{errors:S,currentLocation:j,expectedLocation:g,distance:n,ignoreLocation:l}),R<=f)){if(f=R,_=j,_<=g)break;re=Math.max(1,2*g-_)}}if(K(e,{errors:S+1,currentLocation:g,expectedLocation:g,distance:n,ignoreLocation:l})>f)break;C=F}const z={isMatch:_>=0,score:Math.max(.001,R)};if(M){const S=ct($,o);S.length?a&&(z.indices=S):z.isMatch=!1}return z}function at(t){let e={};for(let s=0,r=t.length;s<r;s+=1){const n=t.charAt(s);e[n]=(e[n]||0)|1<<r-s-1}return e}class _e{constructor(e,{location:s=u.location,threshold:r=u.threshold,distance:n=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:l=u.ignoreLocation}={}){if(this.options={location:s,threshold:r,distance:n,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:l},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(g,f)=>{this.chunks.push({pattern:g,alphabet:at(g),startIndex:f})},d=this.pattern.length;if(d>O){let g=0;const f=d%O,_=d-f;for(;g<_;)h(this.pattern.substr(g,O),g),g+=O;if(f){const M=d-O;h(this.pattern.substr(M),M)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:r}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let _={isMatch:!0,score:0};return r&&(_.indices=[[0,e.length-1]]),_}const{location:n,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:a,ignoreLocation:l}=this.options;let h=[],d=0,g=!1;this.chunks.forEach(({pattern:_,alphabet:M,startIndex:$})=>{const{isMatch:I,score:C,indices:R}=ot(e,_,M,{location:n+$,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:a,includeMatches:r,ignoreLocation:l});I&&(g=!0),d+=C,I&&R&&(h=[...h,...R])});let f={isMatch:g,score:g?d/this.chunks.length:1};return g&&r&&(f.indices=h),f}}class L{constructor(e){this.pattern=e}static isMultiMatch(e){return ae(e,this.multiRegex)}static isSingleMatch(e){return ae(e,this.singleRegex)}search(){}}function ae(t,e){const s=t.match(e);return s?s[1]:null}class lt extends L{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class ht extends L{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class ut extends L{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class dt extends L{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class gt extends L{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class ft extends L{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class pe extends L{constructor(e,{location:s=u.location,threshold:r=u.threshold,distance:n=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:l=u.ignoreLocation}={}){super(e),this._bitapSearch=new _e(e,{location:s,threshold:r,distance:n,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class ye extends L{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,r;const n=[],i=this.pattern.length;for(;(r=e.indexOf(this.pattern,s))>-1;)s=r+i,n.push([r,s-1]);const c=!!n.length;return{isMatch:c,score:c?0:1,indices:n}}}const Z=[lt,ye,ut,dt,ft,gt,ht,pe],le=Z.length,mt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,_t="|";function pt(t,e={}){return t.split(_t).map(s=>{let r=s.trim().split(mt).filter(i=>i&&!!i.trim()),n=[];for(let i=0,c=r.length;i<c;i+=1){const o=r[i];let a=!1,l=-1;for(;!a&&++l<le;){const h=Z[l];let d=h.isMultiMatch(o);d&&(n.push(new h(d,e)),a=!0)}if(!a)for(l=-1;++l<le;){const h=Z[l];let d=h.isSingleMatch(o);if(d){n.push(new h(d,e));break}}}return n})}const yt=new Set([pe.type,ye.type]);class xt{constructor(e,{isCaseSensitive:s=u.isCaseSensitive,includeMatches:r=u.includeMatches,minMatchCharLength:n=u.minMatchCharLength,ignoreLocation:i=u.ignoreLocation,findAllMatches:c=u.findAllMatches,location:o=u.location,threshold:a=u.threshold,distance:l=u.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:r,minMatchCharLength:n,findAllMatches:c,ignoreLocation:i,location:o,threshold:a,distance:l},this.pattern=s?e:e.toLowerCase(),this.query=pt(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:n}=this.options;e=n?e:e.toLowerCase();let i=0,c=[],o=0;for(let a=0,l=s.length;a<l;a+=1){const h=s[a];c.length=0,i=0;for(let d=0,g=h.length;d<g;d+=1){const f=h[d],{isMatch:_,indices:M,score:$}=f.search(e);if(_){if(i+=1,o+=$,r){const I=f.constructor.type;yt.has(I)?c=[...c,...M]:c.push(M)}}else{o=0,i=0,c.length=0;break}}if(i){let d={isMatch:!0,score:o/i};return r&&(d.indices=c),d}}return{isMatch:!1,score:1}}}const q=[];function Mt(...t){q.push(...t)}function ee(t,e){for(let s=0,r=q.length;s<r;s+=1){let n=q[s];if(n.condition(t,e))return new n(t,e)}return new _e(t,e)}const U={AND:"$and",OR:"$or"},te={PATH:"$path",PATTERN:"$val"},se=t=>!!(t[U.AND]||t[U.OR]),St=t=>!!t[te.PATH],wt=t=>!E(t)&&de(t)&&!se(t),he=t=>({[U.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function xe(t,e,{auto:s=!0}={}){const r=n=>{let i=Object.keys(n);const c=St(n);if(!c&&i.length>1&&!se(n))return r(he(n));if(wt(n)){const a=c?n[te.PATH]:i[0],l=c?n[te.PATTERN]:n[a];if(!v(l))throw new Error(He(a));const h={keyId:J(a),pattern:l};return s&&(h.searcher=ee(l,e)),h}let o={children:[],operator:i[0]};return i.forEach(a=>{const l=n[a];E(l)&&l.forEach(h=>{o.children.push(r(h))})}),o};return se(t)||(t=he(t)),r(t)}function vt(t,{ignoreFieldNorm:e=u.ignoreFieldNorm}){t.forEach(s=>{let r=1;s.matches.forEach(({key:n,norm:i,score:c})=>{const o=n?n.weight:null;r*=Math.pow(c===0&&o?Number.EPSILON:c,(o||1)*(e?1:i))}),s.score=r})}function It(t,e){const s=t.matches;e.matches=[],x(s)&&s.forEach(r=>{if(!x(r.indices)||!r.indices.length)return;const{indices:n,value:i}=r;let c={indices:n,value:i};r.key&&(c.key=r.key.src),r.idx>-1&&(c.refIndex=r.idx),e.matches.push(c)})}function Et(t,e){e.score=t.score}function kt(t,e,{includeMatches:s=u.includeMatches,includeScore:r=u.includeScore}={}){const n=[];return s&&n.push(It),r&&n.push(Et),t.map(i=>{const{idx:c}=i,o={item:e[c],refIndex:c};return n.length&&n.forEach(a=>{a(i,o)}),o})}class D{constructor(e,s={},r){this.options={...u,...s},this.options.useExtendedSearch,this._keyStore=new Je(this.options.keys),this.setCollection(e,r)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof ne))throw new Error(Ve);this._myIndex=s||me(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){x(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let r=0,n=this._docs.length;r<n;r+=1){const i=this._docs[r];e(i,r)&&(this.removeAt(r),r-=1,n-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:r,includeScore:n,shouldSort:i,sortFn:c,ignoreFieldNorm:o}=this.options;let a=v(e)?v(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return vt(a,{ignoreFieldNorm:o}),i&&a.sort(c),ue(s)&&s>-1&&(a=a.slice(0,s)),kt(a,this._docs,{includeMatches:r,includeScore:n})}_searchStringList(e){const s=ee(e,this.options),{records:r}=this._myIndex,n=[];return r.forEach(({v:i,i:c,n:o})=>{if(!x(i))return;const{isMatch:a,score:l,indices:h}=s.searchIn(i);a&&n.push({item:i,idx:c,matches:[{score:l,value:i,norm:o,indices:h}]})}),n}_searchLogical(e){const s=xe(e,this.options),r=(o,a,l)=>{if(!o.children){const{keyId:d,searcher:g}=o,f=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(a,d),searcher:g});return f&&f.length?[{idx:l,item:a,matches:f}]:[]}const h=[];for(let d=0,g=o.children.length;d<g;d+=1){const f=o.children[d],_=r(f,a,l);if(_.length)h.push(..._);else if(o.operator===U.AND)return[]}return h},n=this._myIndex.records,i={},c=[];return n.forEach(({$:o,i:a})=>{if(x(o)){let l=r(s,o,a);l.length&&(i[a]||(i[a]={idx:a,item:o,matches:[]},c.push(i[a])),l.forEach(({matches:h})=>{i[a].matches.push(...h)}))}}),c}_searchObjectList(e){const s=ee(e,this.options),{keys:r,records:n}=this._myIndex,i=[];return n.forEach(({$:c,i:o})=>{if(!x(c))return;let a=[];r.forEach((l,h)=>{a.push(...this._findMatches({key:l,value:c[h],searcher:s}))}),a.length&&i.push({idx:o,item:c,matches:a})}),i}_findMatches({key:e,value:s,searcher:r}){if(!x(s))return[];let n=[];if(E(s))s.forEach(({v:i,i:c,n:o})=>{if(!x(i))return;const{isMatch:a,score:l,indices:h}=r.searchIn(i);a&&n.push({score:l,key:e,value:i,idx:c,norm:o,indices:h})});else{const{v:i,n:c}=s,{isMatch:o,score:a,indices:l}=r.searchIn(i);o&&n.push({score:a,key:e,value:i,norm:c,indices:l})}return n}}D.version="6.6.2";D.createIndex=me;D.parseIndex=it;D.config=u;D.parseQuery=xe;Mt(xt);const At={props:{gameOver:Boolean},emits:["answer"],data(){return{gameStore:W(),value:"",fuse:null,results:[],selectedIndex:null}},computed:{showingResults(){return this.value.length>1}},watch:{"gameStore.gameMode":{handler(){this.initFuse()}}},mounted(){this.initFuse(),document.addEventListener("keydown",this.handleKeyDown)},beforeUnmount(){document.removeEventListener("keydown",this.handleKeyDown)},updated(){this.$refs.guess&&this.$refs.guess.focus()},methods:{initFuse(){this.fuse=new D(this.gameStore[this.gameStore.gameMode],{threshold:.2,minMatchCharLength:2,ignoreLocation:!0,keys:["name"]})},search(){this.results=this.fuse.search(this.value),this.results.length&&(this.selectedIndex=0)},select(t){this.value="",this.results=[],this.$emit("answer",t)},handleKeyDown(t){t.key==="ArrowDown"?(t.preventDefault(),this.selectedIndex===null?this.selectedIndex=0:this.selectedIndex<this.results.length-1&&this.selectedIndex++):t.key==="ArrowUp"?(t.preventDefault(),this.selectedIndex>0&&this.selectedIndex--):(t.key==="Enter"||t.key==="Tab")&&this.results[this.selectedIndex]&&this.select(this.results[this.selectedIndex].item)}}},bt={class:"game-guess-input"},Lt={key:0},$t={key:0,class:"game-guess-input__typeahead"},Rt=["onClick"],Ot={key:0,class:"no-results"};function Nt(t,e,s,r,n,i){return m(),p("div",bt,[s.gameOver?b("",!0):(m(),p("div",Lt,[Se(y("input",{ref:"guess","onUpdate:modelValue":e[0]||(e[0]=c=>n.value=c),type:"text",class:G([i.showingResults?"showing-results":""]),placeholder:"Guess a country!",autofocus:"",onInput:e[1]||(e[1]=(...c)=>i.search&&i.search(...c))},null,34),[[we,n.value]]),i.showingResults?(m(),p("div",$t,[(m(!0),p(Q,null,X(n.results,(c,o)=>(m(),p("button",{key:o,class:G([n.selectedIndex===o?"selected":""]),onClick:a=>i.select(c.item)},T(c.item.name),11,Rt))),128)),n.results.length?b("",!0):(m(),p("button",Ot," No results found! Try again... "))])):b("",!0)]))])}const Ct=N(At,[["render",Nt]]),Ft={props:{result:Object},data(){return{gameStore:W()}},computed:{distance(){return this.result?this.gameStore.options.useMetric?parseInt(this.result.distance.toFixed(0)).toLocaleString()+" km":parseInt((this.result.distance*.621371).toFixed(0)).toLocaleString()+" mi":""},bearingIcon(){return this.result?this.result.success?"&#127881":this.result.bearing<=30?"&#x02191":this.result.bearing>30&&this.result.bearing<=75?"&#x02197":this.result.bearing>75&&this.result.bearing<=120?"&#x02192;":this.result.bearing>120&&this.result.bearing<=165?"&#x02198":this.result.bearing>165&&this.result.bearing<=210?"&#x02193":this.result.bearing>210&&this.result.bearing<=255?"&#x02199":this.result.bearing>255&&this.result.bearing<=300?"&#x02190":"&#x02196":""},percent(){if(this.result){const t=this.result.percent*100;return t>=100?"100%":t<=0?"0%":`${t.toFixed(0)}%`}return""}}},Tt={class:"game-guess__country"},Dt={class:"game-guess__distance"},Pt=["innerHTML"];function jt(t,e,s,r,n,i){return m(),p("div",{class:G(["game-guess",[s.result&&s.result.success?"success":""]])},[y("div",Tt,T(s.result?s.result.guess:""),1),y("div",Dt,T(i.distance),1),y("div",{innerHTML:i.bearingIcon},null,8,Pt),y("div",null,T(i.percent),1)],2)}const Kt=N(Ft,[["render",jt]]),Gt={props:{states:{type:Boolean,default:!1}},data(){return{gameStore:W(),gameOver:!1,displayAnswer:!1}},computed:{gameMode(){return this.states?"states":"countries"}},mounted(){if(this.gameStore.results.length){const t=this.gameStore.results[this.gameStore.results.length-1];this.gameStore.selected.name===t.guess&&(this.gameOver=!0,this.resetGame())}this.startGame(),document.addEventListener("keydown",this.handleKeyDown)},beforeUnmount(){document.removeEventListener("keydown",this.handleKeyDown)},methods:{answer(t){const e=ve.getResult(t,this.gameStore.selected);this.gameStore.results.push(e),(e.success||this.gameStore.results.length>=6)&&(this.gameOver=!0,e.success?this.gameStore.handleResult(!0,this.gameStore.results.length):(this.gameStore.handleResult(!1,this.gameStore.results.length),this.displayAnswer=!0))},startGame(t=!1){(this.gameStore.selected===null||t)&&this.gameStore.generateRandom(this.gameMode)},playAgain(){this.gameOver&&(this.gameOver=!1,this.displayAnswer=!1,this.gameStore.results=[],this.startGame(!0)),setTimeout(()=>{const t=document.querySelector('input[type="text"]');t&&t.focus()},500)},giveUp(){this.gameOver||(this.gameStore.statistics.winStreak=0,this.gameStore.handleResult(!1,this.gameStore.results.length),this.displayAnswer=!0,this.gameOver=!0),setTimeout(()=>{const t=document.querySelector('input[type="text"]');t&&t.focus()},500)}}},Bt={key:0,class:"game"},Ut={class:"game__flag"},Wt={key:0,class:"game__guess-input"},zt={key:1,class:"game__answer"},Vt={class:"game__guesses"},Ht={key:2,class:"game__give-up-menu"},Yt={key:3};function Qt(t,e,s,r,n,i){const c=Ke,o=Ct,a=Kt;return n.gameStore.selected?(m(),p("div",Bt,[y("div",Ut,[B(c,{image:`images/flags/${n.gameStore.selected.flag}`},null,8,["image"])]),!n.gameOver||!n.displayAnswer?(m(),p("div",Wt,[B(o,{"game-over":n.gameOver,"game-mode":i.gameMode,onAnswer:i.answer},null,8,["game-over","game-mode","onAnswer"])])):(m(),p("div",zt,[y("h3",null,"Correct Answer: "+T(n.gameStore.selected.name),1)])),y("div",Vt,[(m(!0),p(Q,null,X(n.gameStore.results,(l,h)=>(m(),Y(a,{key:h,result:l},null,8,["result"]))),128)),(m(!0),p(Q,null,X(6-n.gameStore.results.length,l=>(m(),Y(a,{key:l}))),128))]),!n.displayAnswer&&!n.gameOver?(m(),p("div",Ht,[y("button",{class:"game__play-again",onClick:e[0]||(e[0]=(...l)=>i.giveUp&&i.giveUp(...l))},"Give Up")])):b("",!0),n.gameOver?(m(),p("div",Yt,[y("button",{class:"game__play-again",onClick:e[1]||(e[1]=(...l)=>i.playAgain&&i.playAgain(...l))},"Play Again")])):b("",!0)])):b("",!0)}const os=N(Gt,[["render",Qt]]),Xt={data(){return{gameStore:W()}}},Jt={key:0,class:"game-win-streak"},Zt=y("small",{class:"game-win-streak__label"},"Streak",-1),qt={class:"game-win-streak__streak"};function es(t,e,s,r,n,i){return n.gameStore.statistics.winStreak>0?(m(),p("div",Jt,[Zt,y("h3",qt,T(n.gameStore.statistics.winStreak),1)])):b("",!0)}const ts=N(Xt,[["render",es]]),ss={};function ns(t,e){const s=ke,r=ts;return m(),p("span",null,[B(s,{class:"game-section"},{default:Ie(()=>[Ee(t.$slots,"default")]),_:3}),B(r)])}const as=N(ss,[["render",ns]]);export{os as _,as as a};