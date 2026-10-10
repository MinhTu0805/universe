(()=>{
const BASE='https://generativelanguage.googleapis.com/v1beta/openai',MODEL='gemini-3.1-flash-lite',NS='http://www.w3.org/2000/svg',H='svg-ex-host',TID='svgx-toast';
const KEY=window.__SVGX_KEY;
const E=(t,p,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;if(p)p.appendChild(e);return e};
const toast=(m,bg,ms)=>{let e=document.getElementById(TID);if(!e){e=document.createElement('div');e.id=TID;e.style.cssText='position:fixed;left:50%;bottom:88px;transform:translateX(-50%);z-index:2147483647;padding:11px 18px;border-radius:999px;font:600 14px/1.4 system-ui,sans-serif;color:#fff;box-shadow:0 10px 30px rgba(0,0,0,.45);max-width:90vw;text-align:center;pointer-events:none';document.documentElement.appendChild(e)}e.style.background=bg||'#333';e.textContent=m;clearTimeout(e._t);if(ms!==0)e._t=setTimeout(()=>e.remove(),ms||3000)};
const ok=m=>toast('✅ '+m,'#16a34a',2800),bad=m=>toast('❌ '+m,'#dc2626',8000),info=m=>toast('⏳ '+m,'#374151',0);
const LS={get:k=>{try{return localStorage.getItem('svgx_'+k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem('svgx_'+k,v)}catch(e){}}};
const CSS=`
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
:host{all:initial}
*{box-sizing:border-box;font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;-webkit-tap-highlight-color:transparent}
button,input{font:inherit;color:inherit}
.ov{position:fixed;inset:0;background:rgba(5,7,16,.7);-webkit-backdrop-filter:blur(12px) saturate(1.2);backdrop-filter:blur(12px) saturate(1.2);display:flex;align-items:center;justify-content:center;animation:fi .2s ease}
.pn{--mono:"JetBrains Mono","Fira Code","SF Mono",ui-monospace,SFMono-Regular,Menlo,Consolas,"Liberation Mono","Courier New",monospace;
--bg:#0d0f18;--s1:#161926;--s2:#1f2336;--s3:#292e46;--bd:#2a2f48;--tx:#eaecf6;--mu:#8b92ad;--ac:#7c8cff;--ac2:#b58cff;--ok:#34d399;--wn:#fbbf24;--er:#f87171;
--k-t:#7ab8ff;--k-a:#7fe0cf;--k-s:#f4ae8e;--k-p:#677094;--sh:0 40px 100px rgba(0,0,0,.65);
width:min(1160px,100vw);height:94vh;height:min(94dvh,940px);background:var(--bg);color:var(--tx);border:1px solid var(--bd);border-radius:22px;display:flex;flex-direction:column;overflow:hidden;box-shadow:var(--sh);animation:pop .28s cubic-bezier(.2,.9,.3,1.15)}
.pn.light{--bg:#f4f5fb;--s1:#ffffff;--s2:#eceffa;--s3:#e1e5f5;--bd:#dce0f0;--tx:#1a1e33;--mu:#68718f;--ac:#5468ff;--ac2:#8b5cf6;--ok:#059669;--wn:#d97706;--er:#dc2626;--k-t:#0b5bd3;--k-a:#0f766e;--k-s:#b4531f;--k-p:#8a92ad;--sh:0 40px 100px rgba(30,40,100,.28)}
@keyframes fi{from{opacity:0}to{opacity:1}}
@keyframes pop{from{opacity:0;transform:translateY(16px) scale(.97)}to{opacity:1;transform:none}}
@keyframes sh{0%{background-position:200% 0}100%{background-position:-200% 0}}
@keyframes pl{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(1.5)}}
.hd{display:flex;align-items:center;gap:12px;padding:16px 18px 12px;background:radial-gradient(700px 140px at 0 0,rgba(124,140,255,.2),transparent 70%),radial-gradient(500px 120px at 100% 0,rgba(181,140,255,.14),transparent 70%)}
.lg{width:42px;height:42px;border-radius:13px;display:grid;place-items:center;font:700 15px var(--mono);color:#fff;background:linear-gradient(135deg,var(--ac),var(--ac2));box-shadow:0 8px 22px rgba(124,140,255,.45)}
.tl{display:flex;flex-direction:column;min-width:0}.tl b{font-size:18px;letter-spacing:-.3px}.sb{font-size:12px;color:var(--mu)}
.sp{flex:1}
.ib{width:40px;height:40px;border-radius:12px;border:1px solid var(--bd);background:var(--s1);cursor:pointer;font-size:16px;display:grid;place-items:center;transition:.15s}
.ib:hover{background:var(--s2);transform:translateY(-1px)}.ib.x:hover{background:var(--er);border-color:var(--er);color:#fff}
.sx{display:flex;flex-wrap:wrap;gap:8px;padding:0 18px 12px}
.pl{display:flex;align-items:center;gap:7px;background:var(--s1);border:1px solid var(--bd);border-radius:999px;padding:5px 12px 5px 10px;font-size:12.5px;color:var(--mu)}
.pl b{color:var(--tx);font-weight:700}.dt{width:8px;height:8px;border-radius:50%;background:var(--ac)}
.pl.n .dt{background:var(--ok)}.pl.d .dt{background:var(--wn)}.pl.s .dt{background:var(--ac2)}
.tb{display:flex;flex-wrap:wrap;gap:8px;padding:0 18px 14px;align-items:center}
.sr{position:relative;flex:1;min-width:190px}.sr span{position:absolute;left:13px;top:50%;transform:translateY(-50%);color:var(--mu);font-size:15px;pointer-events:none}
.sr input{width:100%;height:40px;padding:0 13px 0 36px;border-radius:12px;border:1px solid var(--bd);background:var(--s1);outline:none;font-size:14px;transition:.15s}
.sr input::placeholder{color:var(--mu)}
.sr input:focus{border-color:var(--ac);box-shadow:0 0 0 4px rgba(124,140,255,.2)}
.sg{display:flex;background:var(--s1);border:1px solid var(--bd);border-radius:12px;padding:3px;gap:2px}
.sg button{border:0;background:transparent;border-radius:9px;padding:6px 11px;font-size:13px;cursor:pointer;color:var(--mu);transition:.15s;min-height:32px}
.sg button.on{background:var(--s3);color:var(--tx);font-weight:600}
.sm{border:1px solid var(--bd);background:var(--s1);border-radius:10px;padding:7px 12px;font-size:13px;cursor:pointer;transition:.15s;min-height:34px;white-space:nowrap}
.sm:hover{background:var(--s2)}.sm.pri{background:var(--ac);border-color:var(--ac);color:#fff;font-weight:600}.sm.pri:hover{filter:brightness(1.12)}
.sm.wn{border-color:var(--wn);color:var(--wn)}
.pg{height:3px;background:var(--bd)}.pb{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--ac),var(--ac2));transition:width .3s}
.ls{flex:1;overflow:auto;padding:16px 18px;-webkit-overflow-scrolling:touch}
.gr{display:grid;grid-template-columns:repeat(auto-fill,minmax(215px,1fr));gap:14px;align-items:start}
.gr.list{grid-template-columns:1fr}
.cd{position:relative;background:var(--s1);border:1px solid var(--bd);border-radius:18px;overflow:hidden;display:flex;flex-direction:column;transition:transform .18s,border-color .18s,box-shadow .18s,opacity .18s;min-width:0}
.cd:hover{transform:translateY(-3px);border-color:var(--ac);box-shadow:0 14px 34px rgba(0,0,0,.28),0 0 0 1px var(--ac)}
.cd.sel{border-color:var(--ac);box-shadow:0 0 0 2px var(--ac),0 14px 34px rgba(124,140,255,.2)}
.cd.dup{opacity:.5;border-style:dashed;border-color:var(--wn)}.cd.dup:hover{opacity:1}
.list .cd{flex-direction:row}
.pv{position:relative;height:124px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#1a1e33;flex:none;overflow:hidden}
.list .pv{width:124px;height:auto;min-height:124px}
.pn[data-bg=check] .pv{background-color:#fff;background-image:linear-gradient(45deg,#e4e7f1 25%,transparent 25%,transparent 75%,#e4e7f1 75%),linear-gradient(45deg,#e4e7f1 25%,transparent 25%,transparent 75%,#e4e7f1 75%);background-size:14px 14px;background-position:0 0,7px 7px}
.pn[data-bg=white] .pv{background:#fff}
.pn[data-bg=dark] .pv{background:#090b12;color:#f2f4fc}
.pv>svg{width:58px;height:58px;max-width:80%;max-height:80%;transition:transform .22s cubic-bezier(.2,.9,.3,1.3)}
.pv:hover>svg{transform:scale(1.18)}
.ix{position:absolute;left:9px;top:9px;font:600 11px var(--mono);background:rgba(18,20,34,.78);color:#fff;border-radius:8px;padding:3px 8px}
.ck{position:absolute;right:9px;top:9px;width:25px;height:25px;border-radius:50%;border:2px solid rgba(120,126,155,.65);background:rgba(255,255,255,.8);display:grid;place-items:center;font-size:13px;font-weight:700;color:transparent;transition:.15s}
.sel .ck{background:var(--ac);border-color:var(--ac);color:#fff;transform:scale(1.08)}
.db{position:absolute;left:9px;bottom:9px;display:none;font:700 11px var(--mono);background:var(--wn);color:#241a04;border-radius:8px;padding:3px 8px}
.dup .db{display:block}
.bd{padding:12px 13px 13px;display:flex;flex-direction:column;gap:7px;min-width:0;flex:1}
.nm{font-weight:700;font-size:14.5px;color:var(--ac);word-break:break-word;min-height:19px;letter-spacing:-.1px}.nm.un{color:var(--mu);font-weight:600}
.nm.sk{height:17px;width:72%;border-radius:7px;background:linear-gradient(90deg,var(--s2) 25%,var(--s3) 50%,var(--s2) 75%);background-size:200% 100%;animation:sh 1.3s linear infinite}
.vi{font-size:12.5px;color:var(--mu);line-height:1.45;word-break:break-word}
.mt{display:flex;flex-wrap:wrap;gap:5px}.ch{font:500 11px var(--mono);color:var(--mu);background:var(--s2);border-radius:999px;padding:2px 9px}
.ac{display:flex;gap:6px;margin-top:3px;flex-wrap:wrap}.ac .sm{flex:1;padding:6px 8px;min-width:0}
.kp{display:none}.dup .kp{display:block}
.cd pre{display:none;margin:4px 0 0;max-height:240px;overflow:auto;background:var(--bg);border:1px solid var(--bd);border-radius:12px;padding:11px 12px;font-family:var(--mono);font-size:12.5px;line-height:1.65;font-weight:400;font-variant-ligatures:none;letter-spacing:0;color:var(--tx);white-space:pre;tab-size:2}
.cd pre *{font-family:var(--mono);font-size:inherit;font-style:normal}
.cd.open pre{display:block}
pre .k-t{color:var(--k-t);font-weight:500}pre .k-a{color:var(--k-a)}pre .k-s{color:var(--k-s)}pre .k-p{color:var(--k-p)}
.em{display:none;text-align:center;color:var(--mu);padding:70px 20px;font-size:14px}
.ft{display:flex;align-items:center;gap:8px;padding:12px 18px;border-top:1px solid var(--bd);background:var(--s1)}
.dot{width:9px;height:9px;border-radius:50%;background:var(--ok);flex:none}.dot.busy{background:var(--ac);animation:pl 1s ease-in-out infinite}
.stt{font-size:13px;color:var(--mu);min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.btn{border:1px solid var(--bd);background:var(--s2);border-radius:13px;padding:11px 16px;font-size:14px;font-weight:600;cursor:pointer;transition:.15s;min-height:44px;white-space:nowrap}
.btn:hover{filter:brightness(1.15);transform:translateY(-1px)}.btn:disabled{opacity:.5;cursor:default;transform:none}
.btn.pri{background:linear-gradient(135deg,var(--ac),var(--ac2));border-color:transparent;color:#fff;box-shadow:0 8px 22px rgba(124,140,255,.38)}
.ls::-webkit-scrollbar,.cd pre::-webkit-scrollbar{width:9px;height:9px}.ls::-webkit-scrollbar-thumb,.cd pre::-webkit-scrollbar-thumb{background:var(--s3);border-radius:9px}
@media(max-width:640px){.pn{height:100vh;height:100dvh;border-radius:0;border:0}.gr{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.list .pv{width:100px}.ft .btn{flex:1;padding:11px 6px;font-size:13px}.stt,.ft .sp{display:none}.sr{min-width:100%}.hd{padding:14px 14px 10px}.sx,.tb,.ls,.ft{padding-left:14px;padding-right:14px}}
`;
try{
if(!KEY){bad('Thiếu API key trong bookmarklet');return}
document.getElementById(H)?.remove();
const fmt=(n,d=0)=>{const p='  '.repeat(d),o=n.cloneNode(false).outerHTML,kids=[...n.childNodes].filter(k=>k.nodeType===1||(k.nodeType===3&&k.textContent.trim()));if(!kids.length)return p+o;const i=o.lastIndexOf('</'),op=o.slice(0,i),cl=o.slice(i);if(kids.length===1&&kids[0].nodeType===3)return p+op+kids[0].textContent.trim()+cl;return p+op+'\n'+kids.map(k=>k.nodeType===1?fmt(k,d+1):p+'  '+k.textContent.trim()).join('\n')+'\n'+p+cl};
const hl=(c,pre)=>{let l=0;const sp=(cls,x)=>E('i',pre,cls,x);c.replace(/(<\/?)([\w:.-]+)([^>]*?)(\/?>)/g,(m,a,t,r,e,i)=>{pre.append(c.slice(l,i));sp('k-p',a);sp('k-t',t);let q=0;r.replace(/([\w:.-]+)(=)("[^"]*")/g,(n,k,u,v,j)=>{pre.append(r.slice(q,j));sp('k-a',k);sp('k-p',u);sp('k-s',v);q=j+n.length;return n});pre.append(r.slice(q));sp('k-p',e);l=i+m.length;return m});pre.append(c.slice(l))};
const size=n=>n<1024?n+' B':(n/1024).toFixed(1)+' KB';
const sigOf=n=>{const c=n.cloneNode(true),re=/^(class|style|id|width|height|fill|stroke|role|focusable|tabindex|xmlns.*|aria-.*|data-.*)$/i,strip=e=>{[...e.attributes].forEach(a=>{if(re.test(a.name))e.removeAttribute(a.name)});[...e.children].forEach(strip)};strip(c);return c.outerHTML.replace(/\s+/g,' ')};
const seen=new Set(),items=[];
const add=(node,hint)=>{const code=fmt(node);if(seen.has(code))return;seen.add(code);items.push({code,hint,node,sig:sigOf(node),name:'',vi:'',sel:false,dup:null})};
const hintOf=s=>{const t=(s.closest('a,button')?.innerText||'').trim().slice(0,40);return[s.getAttribute('aria-label')&&'aria-label:'+s.getAttribute('aria-label'),s.querySelector('title')?.textContent&&'title:'+s.querySelector('title').textContent,s.id&&'id:'+s.id,s.getAttribute('class')&&'class:'+s.getAttribute('class'),s.parentElement?.getAttribute('class')&&'parent:'+s.parentElement.getAttribute('class'),t&&'text:'+t].filter(Boolean).join(' | ').slice(0,250)};
info('Đang quét SVG...');
document.querySelectorAll('svg').forEach(s=>{const syms=s.querySelectorAll('symbol');if(syms.length){syms.forEach(y=>{const w=document.createElementNS(NS,'svg');w.setAttribute('xmlns',NS);const vb=y.getAttribute('viewBox');if(vb)w.setAttribute('viewBox',vb);y.childNodes.forEach(k=>w.appendChild(k.cloneNode(true)));add(w,'symbol id:'+y.id)});return}const c=s.cloneNode(true);if(!c.getAttribute('xmlns'))c.setAttribute('xmlns',NS);add(c,hintOf(s))});
const host=E('div',document.documentElement);host.id=H;host.style.cssText='position:fixed;inset:0;z-index:2147483646';
const sh=host.attachShadow({mode:'open'});
E('style',sh).textContent=CSS;
const ov=E('div',sh,'ov'),pn=E('div',ov,'pn');
pn.dataset.bg=LS.get('bg')||'check';if(LS.get('theme')==='light')pn.classList.add('light');
let hideDup=true;
/* header */
const hd=E('div',pn,'hd');E('div',hd,'lg','</>');const tl=E('div',hd,'tl');E('b',tl,'','SVG Extractor');E('span',tl,'sb','Trích xuất · AI đặt tên · AI lọc trùng');E('div',hd,'sp');
const bTh=E('button',hd,'ib','◐'),bX=E('button',hd,'ib x','✕');bTh.title='Đổi giao diện sáng/tối';bX.title='Đóng (Esc)';
/* stats */
const sx=E('div',pn,'sx');const pill=(c,l)=>{const p=E('div',sx,'pl '+c);E('span',p,'dt');const v=E('b',p,'','0');E('span',p,'',l);return v};
const vT=pill('','icon'),vN=pill('n','đã đặt tên'),vD=pill('d','trùng'),vS=pill('s','đã chọn');
/* toolbar */
const tb=E('div',pn,'tb'),sr=E('div',tb,'sr');E('span',sr,'','⌕');const si=E('input',sr);si.placeholder='Tìm icon theo tên, mô tả, class…';
const sg=E('div',tb,'sg'),bG=E('button',sg,'','▦ Lưới'),bL=E('button',sg,'','☰ Danh sách');
const sb2=E('div',tb,'sg'),bgs={check:E('button',sb2,'','▨'),white:E('button',sb2,'','◻'),dark:E('button',sb2,'','◼')};bgs.check.title='Nền caro';bgs.white.title='Nền trắng';bgs.dark.title='Nền tối';
const bSel=E('button',tb,'sm','☑ Chọn hết'),bD=E('button',tb,'sm wn','');bD.style.display='none';
const pg=E('div',pn,'pg'),pb=E('i',pg,'pb');
/* list */
const ls=E('div',pn,'ls'),gr=E('div',ls,'gr'),em=E('div',ls,'em',items.length?'Không có icon nào khớp.':'Không tìm thấy SVG nào trên trang này.');
if(!items.length)em.style.display='block';
/* footer */
const ft=E('div',pn,'ft'),dot=E('i',ft,'dot'),st=E('span',ft,'stt','Sẵn sàng');E('div',ft,'sp');const bA=E('button',ft,'btn','✨ Đặt tên AI'),bU=E('button',ft,'btn','🧹 Lọc trùng AI'),bC=E('button',ft,'btn pri','Copy all');
const copy=async t=>{try{await navigator.clipboard.writeText(t)}catch(e){const a=E('textarea',document.body);a.value=t;a.style.cssText='position:fixed;opacity:0';a.select();document.execCommand('copy');a.remove()}};
const flash=(b,t)=>{const o=b.textContent;b.textContent=t;setTimeout(()=>b.textContent=o,1200)};
const label=(o,i)=>`<!-- ${i+1}. ${(o.name||'unnamed').replace(/-{2,}/g,'-')}${o.vi?' — '+o.vi.replace(/-{2,}/g,'-'):''} -->`;
const isDup=o=>hideDup&&o.dup!=null;
const picked=()=>{const s=items.map((o,i)=>[o,i]).filter(([o])=>o.sel);return s.length?s:items.map((o,i)=>[o,i]).filter(([o])=>!isDup(o))};
const stats=()=>{const n=items.filter(o=>o.sel).length,d=items.filter(o=>o.dup!=null).length;vT.textContent=items.length;vN.textContent=items.filter(o=>o.name).length;vD.textContent=d;vS.textContent=n;bC.textContent=n?`Copy ${n} đã chọn`:(d&&hideDup?`Copy ${items.length-d} (không trùng)`:'Copy all');bD.style.display=d?'':'none';bD.textContent=hideDup?`👁 Hiện ${d} icon trùng`:`🙈 Ẩn ${d} icon trùng`};
const vis=o=>{const q=si.value.trim().toLowerCase();return(!q||(o.name+' '+o.vi+' '+o.hint).toLowerCase().includes(q))&&!isDup(o)};
const refresh=()=>{let n=0;items.forEach(o=>{const v=vis(o);o.el.style.display=v?'':'none';if(v)n++});if(items.length)em.style.display=n?'none':'block';stats()};
/* cards */
items.forEach((o,i)=>{
const d=E('div',gr,'cd'),pv=E('div',d,'pv');E('span',pv,'ix','#'+(i+1));E('span',pv,'ck','✓');
const c=o.node.cloneNode(true);c.querySelectorAll('script').forEach(s=>s.remove());pv.appendChild(c);o.db=E('span',pv,'db');
const bd=E('div',d,'bd');o.nm=E('div',bd,'nm sk');o.vE=E('div',bd,'vi');
const mt=E('div',bd,'mt');E('span',mt,'ch',size(new Blob([o.code]).size));const vb=o.node.getAttribute('viewBox');if(vb)E('span',mt,'ch',vb);if(o.hint.startsWith('symbol'))E('span',mt,'ch','symbol');
const ac=E('div',bd,'ac'),bCp=E('button',ac,'sm pri','⧉ Copy'),bCd=E('button',ac,'sm','</> Code'),bKp=E('button',ac,'sm kp','↺ Giữ lại');
const pre=E('pre',bd);hl(o.code,pre);
o.el=d;
pv.onclick=()=>{o.sel=!o.sel;d.classList.toggle('sel',o.sel);stats()};
bCd.onclick=()=>{d.classList.toggle('open');bCd.textContent=d.classList.contains('open')?'▲ Ẩn code':'</> Code'};
bCp.onclick=async()=>{await copy(label(o,i)+'\n'+o.code);flash(bCp,'✓ Đã copy');ok('Đã copy icon #'+(i+1))};
bKp.onclick=()=>{o.dup=null;o.db.textContent='';d.classList.remove('dup');refresh()};
});
refresh();
/* controls */
const setView=v=>{gr.classList.toggle('list',v==='list');bG.classList.toggle('on',v!=='list');bL.classList.toggle('on',v==='list');LS.set('view',v)};
const setBg=b=>{pn.dataset.bg=b;Object.keys(bgs).forEach(k=>bgs[k].classList.toggle('on',k===b));LS.set('bg',b)};
setView(LS.get('view')||'grid');setBg(pn.dataset.bg);
bG.onclick=()=>setView('grid');bL.onclick=()=>setView('list');
Object.keys(bgs).forEach(k=>bgs[k].onclick=()=>setBg(k));
bTh.onclick=()=>{const l=pn.classList.toggle('light');LS.set('theme',l?'light':'dark')};
si.oninput=refresh;
bSel.onclick=()=>{const v=items.filter(o=>o.el.style.display!=='none'),all=v.length&&v.every(o=>o.sel);v.forEach(o=>{o.sel=!all;o.el.classList.toggle('sel',o.sel)});bSel.textContent=all?'☑ Chọn hết':'☐ Bỏ chọn';stats()};
bD.onclick=()=>{hideDup=!hideDup;refresh()};
bC.onclick=async()=>{const p=picked();await copy(p.map(([o,i])=>label(o,i)+'\n'+o.code).join('\n\n'));flash(bC,'✓ Đã copy');ok('Đã copy '+p.length+' SVG')};
/* AI */
let busy=false;
const lock=v=>{busy=v;bA.disabled=v;bU.disabled=v;dot.classList.toggle('busy',v)};
const chat=async(sys,data)=>{const r=await fetch(BASE+'/chat/completions',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+KEY},body:JSON.stringify({model:MODEL,temperature:0.1,messages:[{role:'system',content:sys},{role:'user',content:JSON.stringify(data)}]})});if(!r.ok)throw new Error('API '+r.status+': '+(await r.text()).slice(0,120));const j=await r.json();return JSON.parse(j.choices[0].message.content.replace(/```json|```/g,'').trim())};
const NAME_SYS='Bạn là chuyên gia nhận diện icon SVG. Nhận một mảng JSON [{i,hint,svg}]. Với mỗi icon, xác định icon đó là gì dựa trên mã SVG (path, shape) và hint (class, aria-label, text). Chỉ trả về MỘT mảng JSON thuần, không markdown, dạng [{"i":số,"name":"tên-icon-tiếng-Anh-kebab-case","vi":"mô tả ngắn tiếng Việt"}]. Phải trả đủ mọi i đã nhận.';
const DUP_SYS='Bạn là chuyên gia so sánh icon SVG. Nhận một mảng JSON [{i,name,vi,svg}] (svg đã bỏ class/size/màu). Tìm các nhóm icon TRÙNG: cùng hình dạng và cùng ý nghĩa, chỉ khác kích thước, màu, class hoặc khác biệt rất nhỏ. Icon outline và icon filled là KHÁC nhau; icon chỉ giống ý nghĩa nhưng vẽ khác nhau cũng là KHÁC. Khi không chắc thì KHÔNG gộp. Chỉ trả về MỘT mảng JSON thuần, không markdown: mỗi phần tử là một nhóm gồm các số i (ít nhất 2), số đầu tiên là bản nên giữ (sạch và đầy đủ nhất). Không có trùng thì trả [].';
const runAI=async()=>{if(busy)return;const todo=items.map((o,i)=>[o,i]).filter(([o])=>!o.name);if(!todo.length){ok('Đã đặt tên hết');return}lock(true);let done=0,k=0,err='';todo.forEach(([o])=>{o.nm.className='nm sk';o.nm.textContent=''});info('AI đang đặt tên '+todo.length+' icon...');st.textContent='AI đang đặt tên…';const chunks=[];for(let i=0;i<todo.length;i+=12)chunks.push(todo.slice(i,i+12));const worker=async()=>{while(k<chunks.length){const ch=chunks[k++];try{const r=await chat(NAME_SYS,ch.map(([o,i])=>({i,hint:o.hint,svg:o.code.slice(0,1500)})));r.forEach(x=>{const o=items[x.i];if(o&&x.name){o.name=String(x.name);o.vi=String(x.vi||'');o.nm.classList.remove('sk','un');o.nm.textContent=o.name;o.vE.textContent=o.vi}})}catch(e){err=e.message}done+=ch.length;pb.style.width=(done/todo.length*100)+'%';st.textContent='Đặt tên: '+done+'/'+todo.length;if(!err)info('AI đặt tên: '+done+'/'+todo.length)}};await Promise.all([worker(),worker()]);items.forEach((o,i)=>{if(!o.name){o.nm.className='nm un';o.nm.textContent='Icon #'+(i+1)}});lock(false);stats();setTimeout(()=>pb.style.width='0',900);if(err){st.textContent='Lỗi AI';bad('AI lỗi: '+err)}else{st.textContent='Đã đặt tên xong ✓';ok('AI đã đặt tên xong')}};
const runDup=async()=>{if(busy)return;if(items.length<2){ok('Chưa đủ icon để lọc trùng');return}
items.forEach(o=>{o.dup=null});
const map=new Map();let loc=0;items.forEach((o,i)=>{if(map.has(o.sig)){o.dup=map.get(o.sig);loc++}else map.set(o.sig,i)});
if(items.some(o=>!o.name)){await runAI()}
lock(true);let ai=0,err='';
try{const uniq=items.map((o,i)=>i).filter(i=>items[i].dup==null).sort((a,b)=>(items[a].name||'~').localeCompare(items[b].name||'~'));const chunks=[];for(let i=0;i<uniq.length;i+=80)chunks.push(uniq.slice(i,i+80));let n=0;
for(const ch of chunks){info('AI đang lọc trùng '+(++n)+'/'+chunks.length+'...');st.textContent='Lọc trùng: '+n+'/'+chunks.length;const gs=await chat(DUP_SYS,ch.map(i=>({i,name:items[i].name,vi:items[i].vi,svg:items[i].sig.slice(0,350)})));if(Array.isArray(gs))gs.forEach(g=>{if(!Array.isArray(g))return;const ids=g.map(Number).filter(x=>ch.includes(x)&&items[x].dup==null);if(ids.length<2)return;ids.slice(1).forEach(x=>{items[x].dup=ids[0];ai++})});pb.style.width=(n/chunks.length*100)+'%'}
}catch(e){err=e.message}
items.forEach((o,i)=>{const d=o.dup!=null;o.el.classList.toggle('dup',d);o.db.textContent=d?'Trùng #'+(o.dup+1):''});
hideDup=true;lock(false);refresh();setTimeout(()=>pb.style.width='0',900);
const tot=loc+ai;
if(err){st.textContent='Lỗi lọc trùng';bad('AI lọc trùng lỗi: '+err+(loc?' (đã lọc '+loc+' trùng chính xác)':''))}
else if(!tot){st.textContent='Không có icon trùng ✓';ok('Không phát hiện icon trùng')}
else{st.textContent='Đã lọc '+tot+' icon trùng ✓';ok('Đã ẩn '+tot+' icon trùng ('+loc+' giống hệt, '+ai+' do AI)')}};
bA.onclick=runAI;bU.onclick=runDup;
/* close */
const close=()=>{host.remove();document.removeEventListener('keydown',kd,true)};
const kd=e=>{if(e.key==='Escape')close()};
document.addEventListener('keydown',kd,true);
bX.onclick=close;ov.onclick=e=>{if(e.target===ov)close()};
if(items.length){ok('Tìm thấy '+items.length+' SVG');setTimeout(runAI,600)}else toast('⚠️ Không có SVG nào trên trang','#b45309',4000);
}catch(e){bad('Lỗi: '+(e&&e.message||e))}
})();
