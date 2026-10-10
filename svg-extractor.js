(()=>{
const BASE='https://generativelanguage.googleapis.com/v1beta/openai',MODEL='gemini-3.1-flash-lite',NS='http://www.w3.org/2000/svg',H='svg-ex-host',TID='svgx-toast';
const KEY=window.__SVGX_KEY;
const E=(t,p,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;if(p)p.appendChild(e);return e};
const toast=(m,bg,ms)=>{let e=document.getElementById(TID);if(!e){e=document.createElement('div');e.id=TID;e.style.cssText='position:fixed;left:50%;bottom:84px;transform:translateX(-50%);z-index:2147483647;padding:11px 18px;border-radius:999px;font:600 14px/1.4 system-ui,sans-serif;color:#fff;box-shadow:0 8px 28px rgba(0,0,0,.45);max-width:90vw;text-align:center;pointer-events:none';document.documentElement.appendChild(e)}e.style.background=bg||'#333';e.textContent=m;clearTimeout(e._t);if(ms!==0)e._t=setTimeout(()=>e.remove(),ms||3000)};
const ok=m=>toast('✅ '+m,'#16a34a',2600),bad=m=>toast('❌ '+m,'#dc2626',8000),info=m=>toast('⏳ '+m,'#374151',0);
const LS={get:k=>{try{return localStorage.getItem('svgx_'+k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem('svgx_'+k,v)}catch(e){}}};
const CSS=`
:host{all:initial}
*{box-sizing:border-box;font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;-webkit-tap-highlight-color:transparent}
button,input{font:inherit;color:inherit}
.ov{position:fixed;inset:0;background:rgba(6,8,18,.66);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;animation:fi .2s ease}
.pn{--bg:#0f111a;--s1:#171a26;--s2:#20243a;--bd:#2a2f47;--tx:#e9ebf5;--mu:#8a91ab;--ac:#7c8cff;--ac2:#b08cff;--tg:#6ea8ff;--at:#7fdbca;--st:#f2a98c;--pu:#6b7390;--cm:#6fbf73;--sh:0 30px 80px rgba(0,0,0,.6);
width:min(1120px,100vw);height:94vh;height:min(94dvh,920px);background:var(--bg);color:var(--tx);border:1px solid var(--bd);border-radius:20px;display:flex;flex-direction:column;overflow:hidden;box-shadow:var(--sh);animation:pop .25s cubic-bezier(.2,.9,.3,1.2)}
.pn.light{--bg:#f5f6fb;--s1:#ffffff;--s2:#eceffa;--bd:#dde1ef;--tx:#1b1f33;--mu:#6a7390;--ac:#5468ff;--ac2:#8b5cf6;--tg:#0b5bd3;--at:#0f766e;--st:#b4531f;--pu:#8890a8;--cm:#2f7d32;--sh:0 30px 80px rgba(30,40,90,.25)}
@keyframes fi{from{opacity:0}to{opacity:1}}
@keyframes pop{from{opacity:0;transform:translateY(14px) scale(.97)}to{opacity:1;transform:none}}
@keyframes sh{0%{background-position:200% 0}100%{background-position:-200% 0}}
.hd{display:flex;align-items:center;gap:12px;padding:14px 16px 10px}
.lg{width:40px;height:40px;border-radius:12px;display:grid;place-items:center;font:800 15px ui-monospace,Menlo,monospace;color:#fff;background:linear-gradient(135deg,var(--ac),var(--ac2));box-shadow:0 6px 18px rgba(124,140,255,.4)}
.tl{display:flex;flex-direction:column;min-width:0}.tl b{font-size:17px;letter-spacing:-.2px}.sb{font-size:12px;color:var(--mu)}
.sp{flex:1}
.ib{width:38px;height:38px;border-radius:11px;border:1px solid var(--bd);background:var(--s1);cursor:pointer;font-size:16px;display:grid;place-items:center;transition:.15s}
.ib:hover{background:var(--s2)}.ib.x:hover{background:#dc2626;border-color:#dc2626;color:#fff}
.tb{display:flex;flex-wrap:wrap;gap:8px;padding:6px 16px 12px;align-items:center}
.sr{position:relative;flex:1;min-width:180px}.sr span{position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--mu);font-size:15px;pointer-events:none}
.sr input{width:100%;height:38px;padding:0 12px 0 34px;border-radius:11px;border:1px solid var(--bd);background:var(--s1);outline:none;font-size:14px;transition:.15s}
.sr input:focus{border-color:var(--ac);box-shadow:0 0 0 3px rgba(124,140,255,.22)}
.sg{display:flex;background:var(--s1);border:1px solid var(--bd);border-radius:11px;padding:3px;gap:2px}
.sg button{border:0;background:transparent;border-radius:8px;padding:6px 10px;font-size:13px;cursor:pointer;color:var(--mu);transition:.15s;min-height:30px}
.sg button.on{background:var(--s2);color:var(--tx);font-weight:600}
.sm{border:1px solid var(--bd);background:var(--s1);border-radius:9px;padding:7px 11px;font-size:13px;cursor:pointer;transition:.15s;min-height:34px;white-space:nowrap}
.sm:hover{background:var(--s2)}.sm.p{background:var(--ac);border-color:var(--ac);color:#fff;font-weight:600}.sm.p:hover{filter:brightness(1.1)}
.pg{height:3px;background:var(--bd)}.pb{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--ac),var(--ac2));transition:width .3s}
.ls{flex:1;overflow:auto;padding:14px 16px;-webkit-overflow-scrolling:touch}
.gr{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:12px;align-items:start}
.gr.list{grid-template-columns:1fr}
.cd{position:relative;background:var(--s1);border:1px solid var(--bd);border-radius:16px;overflow:hidden;display:flex;flex-direction:column;transition:transform .15s,border-color .15s,box-shadow .15s;min-width:0}
.cd:hover{transform:translateY(-2px);border-color:var(--ac);box-shadow:0 10px 28px rgba(0,0,0,.25)}
.cd.sel{border-color:var(--ac);box-shadow:0 0 0 2px var(--ac)}
.list .cd{flex-direction:row}
.pv{position:relative;height:118px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#1b1f33;flex:none;overflow:hidden}
.list .pv{width:118px;height:auto;min-height:118px}
.pn[data-bg=check] .pv{background-color:#fff;background-image:linear-gradient(45deg,#e6e8f0 25%,transparent 25%,transparent 75%,#e6e8f0 75%),linear-gradient(45deg,#e6e8f0 25%,transparent 25%,transparent 75%,#e6e8f0 75%);background-size:14px 14px;background-position:0 0,7px 7px}
.pn[data-bg=white] .pv{background:#fff}
.pn[data-bg=dark] .pv{background:#0b0d14;color:#f1f3fb}
.pv>svg{width:56px;height:56px;max-width:80%;max-height:80%;transition:transform .2s}
.pv:hover>svg{transform:scale(1.15)}
.ix{position:absolute;left:8px;top:8px;font:600 11px ui-monospace,Menlo,monospace;background:rgba(20,22,35,.72);color:#fff;border-radius:7px;padding:2px 7px}
.ck{position:absolute;right:8px;top:8px;width:24px;height:24px;border-radius:50%;border:2px solid rgba(120,125,150,.7);background:rgba(255,255,255,.75);display:grid;place-items:center;font-size:13px;color:transparent;transition:.15s}
.sel .ck{background:var(--ac);border-color:var(--ac);color:#fff}
.bd{padding:11px 12px 12px;display:flex;flex-direction:column;gap:6px;min-width:0;flex:1}
.nm{font-weight:700;font-size:14px;color:var(--ac);word-break:break-word;min-height:18px}.nm.un{color:var(--mu);font-weight:600}
.nm.sk{height:16px;width:72%;border-radius:6px;background:linear-gradient(90deg,var(--s2) 25%,var(--bd) 50%,var(--s2) 75%);background-size:200% 100%;animation:sh 1.3s linear infinite}
.vi{font-size:12.5px;color:var(--mu);line-height:1.4;word-break:break-word}
.mt{display:flex;flex-wrap:wrap;gap:5px}.ch{font-size:11px;color:var(--mu);background:var(--s2);border-radius:999px;padding:2px 9px}
.ac{display:flex;gap:6px;margin-top:2px}.ac .sm{flex:1;padding:6px 8px}
.cd pre{display:none;margin:4px 0 0;max-height:230px;overflow:auto;background:var(--bg);border:1px solid var(--bd);border-radius:11px;padding:10px;font:12px/1.55 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:var(--tx);white-space:pre;tab-size:2}
.cd.open pre{display:block}
i{font-style:normal}.t{color:var(--tg)}.a{color:var(--at)}.s{color:var(--st)}.p{color:var(--pu)}
.em{display:none;text-align:center;color:var(--mu);padding:60px 20px;font-size:14px}
.ft{display:flex;align-items:center;gap:8px;padding:12px 16px;border-top:1px solid var(--bd);background:var(--s1)}
.stt{font-size:13px;color:var(--mu);min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.btn{border:1px solid var(--bd);background:var(--s2);border-radius:12px;padding:11px 16px;font-size:14px;font-weight:600;cursor:pointer;transition:.15s;min-height:44px;white-space:nowrap}
.btn:hover{filter:brightness(1.12)}.btn:disabled{opacity:.55;cursor:default}
.btn.p{background:linear-gradient(135deg,var(--ac),var(--ac2));border-color:transparent;color:#fff;box-shadow:0 6px 18px rgba(124,140,255,.35)}
.ls::-webkit-scrollbar,.cd pre::-webkit-scrollbar{width:9px;height:9px}.ls::-webkit-scrollbar-thumb,.cd pre::-webkit-scrollbar-thumb{background:var(--bd);border-radius:9px}
@media(max-width:640px){.pn{height:100vh;height:100dvh;border-radius:0;border:0}.gr{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.list .pv{width:96px}.ft .btn{flex:1;padding:11px 8px}.stt{display:none}.ft .sp{display:none}.sr{min-width:100%}}
`;
try{
if(!KEY){bad('Thiếu API key trong bookmarklet');return}
document.getElementById(H)?.remove();
const fmt=(n,d=0)=>{const p='  '.repeat(d),o=n.cloneNode(false).outerHTML,kids=[...n.childNodes].filter(k=>k.nodeType===1||(k.nodeType===3&&k.textContent.trim()));if(!kids.length)return p+o;const i=o.lastIndexOf('</'),op=o.slice(0,i),cl=o.slice(i);if(kids.length===1&&kids[0].nodeType===3)return p+op+kids[0].textContent.trim()+cl;return p+op+'\n'+kids.map(k=>k.nodeType===1?fmt(k,d+1):p+'  '+k.textContent.trim()).join('\n')+'\n'+p+cl};
const hl=(c,pre)=>{let l=0;const sp=(cls,x)=>E('i',pre,cls,x);c.replace(/(<\/?)([\w:.-]+)([^>]*?)(\/?>)/g,(m,a,t,r,e,i)=>{pre.append(c.slice(l,i));sp('p',a);sp('t',t);let q=0;r.replace(/([\w:.-]+)(=)("[^"]*")/g,(n,k,u,v,j)=>{pre.append(r.slice(q,j));sp('a',k);sp('p',u);sp('s',v);q=j+n.length;return n});pre.append(r.slice(q));sp('p',e);l=i+m.length;return m});pre.append(c.slice(l))};
const size=n=>n<1024?n+' B':(n/1024).toFixed(1)+' KB';
const seen=new Set(),items=[];
const add=(node,hint)=>{const code=fmt(node);if(seen.has(code))return;seen.add(code);items.push({code,hint,node,name:'',vi:'',sel:false})};
const hintOf=s=>{const t=(s.closest('a,button')?.innerText||'').trim().slice(0,40);return[s.getAttribute('aria-label')&&'aria-label:'+s.getAttribute('aria-label'),s.querySelector('title')?.textContent&&'title:'+s.querySelector('title').textContent,s.id&&'id:'+s.id,s.getAttribute('class')&&'class:'+s.getAttribute('class'),s.parentElement?.getAttribute('class')&&'parent:'+s.parentElement.getAttribute('class'),t&&'text:'+t].filter(Boolean).join(' | ').slice(0,250)};
info('Đang quét SVG...');
document.querySelectorAll('svg').forEach(s=>{const syms=s.querySelectorAll('symbol');if(syms.length){syms.forEach(y=>{const w=document.createElementNS(NS,'svg');w.setAttribute('xmlns',NS);const vb=y.getAttribute('viewBox');if(vb)w.setAttribute('viewBox',vb);y.childNodes.forEach(k=>w.appendChild(k.cloneNode(true)));add(w,'symbol id:'+y.id)});return}const c=s.cloneNode(true);if(!c.getAttribute('xmlns'))c.setAttribute('xmlns',NS);add(c,hintOf(s))});
const host=E('div',document.documentElement);host.id=H;host.style.cssText='position:fixed;inset:0;z-index:2147483646';
const sh=host.attachShadow({mode:'open'});
E('style',sh).textContent=CSS;
const ov=E('div',sh,'ov'),pn=E('div',ov,'pn');
pn.dataset.bg=LS.get('bg')||'check';if(LS.get('theme')==='light')pn.classList.add('light');
/* header */
const hd=E('div',pn,'hd');E('div',hd,'lg','</>');const tl=E('div',hd,'tl');E('b',tl,'','SVG Extractor');const sub=E('span',tl,'sb');E('div',hd,'sp');
const bTh=E('button',hd,'ib','◐'),bX=E('button',hd,'ib x','✕');bTh.title='Đổi giao diện sáng/tối';bX.title='Đóng (Esc)';
/* toolbar */
const tb=E('div',pn,'tb'),sr=E('div',tb,'sr');E('span',sr,'','⌕');const si=E('input',sr);si.placeholder='Tìm icon theo tên, mô tả, class…';
const sg=E('div',tb,'sg'),bG=E('button',sg,'','▦ Lưới'),bL=E('button',sg,'','☰ Danh sách');
const sb2=E('div',tb,'sg'),bgs={check:E('button',sb2,'','▨'),white:E('button',sb2,'','◻'),dark:E('button',sb2,'','◼')};bgs.check.title='Nền caro';bgs.white.title='Nền trắng';bgs.dark.title='Nền tối';
const bSel=E('button',tb,'sm','☑ Chọn hết');
const pg=E('div',pn,'pg'),pb=E('i',pg,'pb');
/* list */
const ls=E('div',pn,'ls'),gr=E('div',ls,'gr'),em=E('div',ls,'em',items.length?'Không có icon nào khớp với tìm kiếm.':'Không tìm thấy SVG nào trên trang này.');
if(!items.length)em.style.display='block';
/* footer */
const ft=E('div',pn,'ft'),st=E('span',ft,'stt','Sẵn sàng');E('div',ft,'sp');const bA=E('button',ft,'btn','✨ Đặt tên AI'),bC=E('button',ft,'btn p','Copy all');
const copy=async t=>{try{await navigator.clipboard.writeText(t)}catch(e){const a=E('textarea',document.body);a.value=t;a.style.cssText='position:fixed;opacity:0';a.select();document.execCommand('copy');a.remove()}};
const flash=(b,t)=>{const o=b.textContent;b.textContent=t;setTimeout(()=>b.textContent=o,1200)};
const label=(o,i)=>`<!-- ${i+1}. ${(o.name||'unnamed').replace(/-{2,}/g,'-')}${o.vi?' — '+o.vi.replace(/-{2,}/g,'-'):''} -->`;
const picked=()=>{const s=items.map((o,i)=>[o,i]).filter(([o])=>o.sel);return s.length?s:items.map((o,i)=>[o,i])};
const updSel=()=>{const n=items.filter(o=>o.sel).length;bC.textContent=n?`Copy ${n} đã chọn`:'Copy all'};
const updSub=()=>{const v=items.filter(o=>o.el.style.display!=='none').length;sub.textContent=v===items.length?items.length+' icon · ẩn/hiện code từng icon':v+'/'+items.length+' icon khớp'};
/* cards */
items.forEach((o,i)=>{
const d=E('div',gr,'cd'),pv=E('div',d,'pv');E('span',pv,'ix',String(i+1));E('span',pv,'ck','✓');
const c=o.node.cloneNode(true);c.querySelectorAll('script').forEach(s=>s.remove());pv.appendChild(c);
const bd=E('div',d,'bd');o.nm=E('div',bd,'nm sk');o.vE=E('div',bd,'vi');
const mt=E('div',bd,'mt');E('span',mt,'ch',size(new Blob([o.code]).size));const vb=o.node.getAttribute('viewBox');if(vb)E('span',mt,'ch','viewBox '+vb);if(o.hint.startsWith('symbol'))E('span',mt,'ch','symbol');
const ac=E('div',bd,'ac'),bCp=E('button',ac,'sm p','⧉ Copy'),bCd=E('button',ac,'sm','</> Code');
const pre=E('pre',bd);hl(o.code,pre);
o.el=d;
pv.onclick=()=>{o.sel=!o.sel;d.classList.toggle('sel',o.sel);updSel()};
bCd.onclick=()=>{d.classList.toggle('open');bCd.textContent=d.classList.contains('open')?'▲ Ẩn code':'</> Code'};
bCp.onclick=async()=>{await copy(label(o,i)+'\n'+o.code);flash(bCp,'✓ Đã copy');ok('Đã copy icon #'+(i+1))};
});
updSub();
/* controls */
const setView=v=>{gr.classList.toggle('list',v==='list');bG.classList.toggle('on',v!=='list');bL.classList.toggle('on',v==='list');LS.set('view',v)};
const setBg=b=>{pn.dataset.bg=b;Object.keys(bgs).forEach(k=>bgs[k].classList.toggle('on',k===b));LS.set('bg',b)};
setView(LS.get('view')||'grid');setBg(pn.dataset.bg);
bG.onclick=()=>setView('grid');bL.onclick=()=>setView('list');
Object.keys(bgs).forEach(k=>bgs[k].onclick=()=>setBg(k));
bTh.onclick=()=>{const l=pn.classList.toggle('light');LS.set('theme',l?'light':'dark')};
si.oninput=()=>{const q=si.value.trim().toLowerCase();let n=0;items.forEach(o=>{const m=!q||(o.name+' '+o.vi+' '+o.hint).toLowerCase().includes(q);o.el.style.display=m?'':'none';if(m)n++});em.style.display=n?'none':'block';updSub()};
bSel.onclick=()=>{const vis=items.filter(o=>o.el.style.display!=='none'),all=vis.length&&vis.every(o=>o.sel);vis.forEach(o=>{o.sel=!all;o.el.classList.toggle('sel',o.sel)});bSel.textContent=all?'☑ Chọn hết':'☐ Bỏ chọn';updSel()};
bC.onclick=async()=>{const p=picked();await copy(p.map(([o,i])=>label(o,i)+'\n'+o.code).join('\n\n'));flash(bC,'✓ Đã copy');ok('Đã copy '+p.length+' SVG')};
/* AI */
const paint=(o,i)=>{o.nm.classList.remove('sk','un');o.nm.textContent=o.name;o.vE.textContent=o.vi||''};
const ask=async batch=>{const r=await fetch(BASE+'/chat/completions',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+KEY},body:JSON.stringify({model:MODEL,temperature:0.2,messages:[{role:'system',content:'Bạn là chuyên gia nhận diện icon SVG. Nhận một mảng JSON [{i,hint,svg}]. Với mỗi icon, xác định icon đó là gì dựa trên mã SVG (path, shape) và hint (class, aria-label, text). Chỉ trả về MỘT mảng JSON thuần, không markdown, dạng [{"i":số,"name":"tên-icon-tiếng-Anh-kebab-case","vi":"mô tả ngắn tiếng Việt"}]. Phải trả đủ mọi i đã nhận.'},{role:'user',content:JSON.stringify(batch)}]})});if(!r.ok)throw new Error('API '+r.status+': '+(await r.text()).slice(0,120));const j=await r.json();return JSON.parse(j.choices[0].message.content.replace(/```json|```/g,'').trim())};
let busy=false;
const runAI=async()=>{if(busy)return;const todo=items.map((o,i)=>[o,i]).filter(([o])=>!o.name);if(!todo.length){ok('Đã đặt tên hết');return}busy=true;bA.disabled=true;let done=0,k=0,err='';todo.forEach(([o])=>{o.nm.className='nm sk';o.nm.textContent=''});info('AI đang phân tích '+todo.length+' icon...');st.textContent='AI đang phân tích…';const chunks=[];for(let i=0;i<todo.length;i+=12)chunks.push(todo.slice(i,i+12));const worker=async()=>{while(k<chunks.length){const ch=chunks[k++];try{const r=await ask(ch.map(([o,i])=>({i,hint:o.hint,svg:o.code.slice(0,1500)})));r.forEach(x=>{const o=items[x.i];if(o&&x.name){o.name=String(x.name);o.vi=String(x.vi||'');paint(o,x.i)}})}catch(e){err=e.message}done+=ch.length;pb.style.width=(done/todo.length*100)+'%';st.textContent='AI: '+done+'/'+todo.length;if(!err)info('AI: '+done+'/'+todo.length)}};await Promise.all([worker(),worker()]);items.forEach((o,i)=>{if(!o.name){o.nm.className='nm un';o.nm.textContent='Icon #'+(i+1)}});busy=false;bA.disabled=false;setTimeout(()=>pb.style.width='0',900);if(err){st.textContent='Lỗi AI';bad('AI lỗi: '+err)}else{st.textContent='AI xong ✓';ok('AI đã đặt tên xong')}};
bA.onclick=runAI;
/* close */
const close=()=>{host.remove();document.removeEventListener('keydown',kd,true)};
const kd=e=>{if(e.key==='Escape')close()};
document.addEventListener('keydown',kd,true);
bX.onclick=close;ov.onclick=e=>{if(e.target===ov)close()};
if(items.length){ok('Tìm thấy '+items.length+' SVG');setTimeout(runAI,600)}else toast('⚠️ Không có SVG nào trên trang','#b45309',4000);
}catch(e){bad('Lỗi: '+(e&&e.message||e))}
})();
