(()=>{
const BASE='https://generativelanguage.googleapis.com/v1beta/openai',MODEL='gemini-3.1-flash-lite',NS='http://www.w3.org/2000/svg',H='svg-ex-host',TID='svgx-toast';
const KEY=window.__SVGX_KEY;
const toast=(m,color,ms)=>{let e=document.getElementById(TID);if(!e){e=document.createElement('div');e.id=TID;e.style.cssText='position:fixed;left:50%;top:16px;transform:translateX(-50%);z-index:2147483647;padding:12px 18px;border-radius:12px;font:14px/1.4 system-ui,sans-serif;color:#fff;box-shadow:0 4px 16px rgba(0,0,0,.4);max-width:90vw;text-align:center';document.documentElement.appendChild(e)}e.style.background=color||'#333';e.textContent=m;clearTimeout(e._t);if(ms!==0)e._t=setTimeout(()=>e.remove(),ms||3000)};
const ok=m=>toast('✅ '+m,'#1e8e3e',3000),bad=m=>toast('❌ '+m,'#c0392b',8000),info=m=>toast('⏳ '+m,'#444',0);
try{
if(!KEY){bad('Thiếu API key trong bookmarklet');return}
document.getElementById(H)?.remove();
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const hl=c=>esc(c).replace(/(&lt;\/?)([\w:.-]+)([\s\S]*?)(\/?&gt;)/g,(m,a,t,r,e)=>`<i class="p">${a}</i><i class="t">${t}</i>${r.replace(/([\w:.-]+)(=)("[^"]*")/g,'<i class="a">$1</i><i class="p">$2</i><i class="s">$3</i>')}<i class="p">${e}</i>`);
const fmt=(n,d=0)=>{const p='  '.repeat(d),o=n.cloneNode(false).outerHTML,kids=[...n.childNodes].filter(k=>k.nodeType===1||(k.nodeType===3&&k.textContent.trim()));if(!kids.length)return p+o;const i=o.lastIndexOf('</'),op=o.slice(0,i),cl=o.slice(i);if(kids.length===1&&kids[0].nodeType===3)return p+op+kids[0].textContent.trim()+cl;return p+op+'\n'+kids.map(k=>k.nodeType===1?fmt(k,d+1):p+'  '+k.textContent.trim()).join('\n')+'\n'+p+cl};
const seen=new Set(),items=[];
const add=(code,hint)=>{if(seen.has(code))return;seen.add(code);items.push({code,hint,name:'',vi:''})};
const hintOf=s=>{const t=(s.closest('a,button')?.innerText||'').trim().slice(0,40);return[s.getAttribute('aria-label')&&'aria-label:'+s.getAttribute('aria-label'),s.querySelector('title')?.textContent&&'title:'+s.querySelector('title').textContent,s.id&&'id:'+s.id,s.getAttribute('class')&&'class:'+s.getAttribute('class'),s.parentElement?.getAttribute('class')&&'parent:'+s.parentElement.getAttribute('class'),t&&'text:'+t].filter(Boolean).join(' | ').slice(0,250)};
info('Đang quét SVG...');
document.querySelectorAll('svg').forEach(s=>{const syms=s.querySelectorAll('symbol');if(syms.length){syms.forEach(y=>{const w=document.createElementNS(NS,'svg');w.setAttribute('xmlns',NS);const vb=y.getAttribute('viewBox');if(vb)w.setAttribute('viewBox',vb);w.innerHTML=y.innerHTML;add(fmt(w),'symbol id:'+y.id)});return}const c=s.cloneNode(true);if(!c.getAttribute('xmlns'))c.setAttribute('xmlns',NS);add(fmt(c),hintOf(s))});
const host=document.createElement('div');host.id=H;host.style.cssText='position:fixed;inset:0;z-index:2147483646';
const sh=host.attachShadow({mode:'open'});
sh.innerHTML=`<style>
*{box-sizing:border-box;font-family:system-ui,-apple-system,Segoe UI,sans-serif}
.ov{position:fixed;inset:0;background:rgba(0,0,0,.55);display:flex;justify-content:center;align-items:center}
.pn{width:min(980px,100vw);height:94vh;background:#1e1e1e;color:#ddd;border-radius:12px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.6)}
.hd{display:flex;align-items:center;flex-wrap:wrap;gap:8px;padding:10px 12px;background:#252526;border-bottom:1px solid #333}
.hd b{font-size:15px;color:#fff}.hd span{font-size:12px;color:#999}.sp{flex:1}
button{background:#0e639c;color:#fff;border:0;border-radius:8px;padding:10px 14px;font-size:14px;cursor:pointer;min-height:40px}
button:hover{background:#1177bb}button.x{background:#c0392b}button.x:hover{background:#e74c3c}button.g{background:#3a3d41}button.g:hover{background:#4a4d51}
.ls{flex:1;overflow:auto;padding:10px;display:flex;flex-direction:column;gap:10px;-webkit-overflow-scrolling:touch}
.cd{display:flex;gap:10px;background:#252526;border:1px solid #333;border-radius:8px;padding:10px}
.pv{width:64px;height:64px;flex:none;border-radius:6px;display:flex;align-items:center;justify-content:center;color:#222;background-color:#fff;background-image:linear-gradient(45deg,#eee 25%,transparent 25%,transparent 75%,#eee 75%),linear-gradient(45deg,#eee 25%,transparent 25%,transparent 75%,#eee 75%);background-size:12px 12px;background-position:0 0,6px 6px;overflow:hidden}
.pv svg{width:48px;height:48px;max-width:48px;max-height:48px}
.bd{flex:1;min-width:0}.tt{display:flex;align-items:center;gap:8px;margin-bottom:6px}
.nm{color:#4ec9b0;font-size:14px}.vi{color:#aaa;font-size:12px;flex:1;min-width:0}
pre{margin:0;max-height:140px;overflow:auto;background:#1a1a1a;border-radius:6px;padding:8px;font:12px/1.5 Consolas,Menlo,monospace;color:#d4d4d4;white-space:pre;tab-size:2}
i{font-style:normal}.t{color:#569cd6}.a{color:#9cdcfe}.s{color:#ce9178}.p{color:#808080}
.empty{padding:40px;text-align:center;color:#999}
</style><div class="ov"><div class="pn"><div class="hd"><b>SVG Extractor</b><span id="cnt"></span><span id="st"></span><span class="sp"></span><button class="g" id="ai">✨ Tên AI</button><button id="ca">Copy all</button><button class="x" id="x">✕ Đóng</button></div><div class="ls" id="ls"></div></div></div>`;
document.documentElement.appendChild(host);
const $=i=>sh.getElementById(i),ls=$('ls');
const st=t=>$('st').textContent=t;
$('cnt').textContent=items.length+' SVG';
const clean=c=>c.replace(/\son\w+="[^"]*"/gi,'').replace(/<script[\s\S]*?<\/script>/gi,'');
const label=(it,i)=>`<!-- ${i+1}. ${(it.name||'unnamed').replace(/-{2,}/g,'-')}${it.vi?' — '+it.vi.replace(/-{2,}/g,'-'):''} -->`;
const copy=async t=>{try{await navigator.clipboard.writeText(t)}catch(e){const a=document.createElement('textarea');a.value=t;a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();document.execCommand('copy');a.remove()}};
const flash=(b,t)=>{const o=b.textContent;b.textContent=t;setTimeout(()=>b.textContent=o,1200)};
if(!items.length)ls.innerHTML='<div class="empty">Không tìm thấy SVG nào trên trang này.</div>';
items.forEach((it,i)=>{const d=document.createElement('div');d.className='cd';d.innerHTML=`<div class="pv">${clean(it.code)}</div><div class="bd"><div class="tt"><b class="nm">#${i+1}</b><span class="vi"></span><button class="cp">Copy</button></div><pre>${hl(it.code)}</pre></div>`;d.querySelector('.cp').onclick=async e=>{await copy(label(it,i)+'\n'+it.code);flash(e.target,'Đã copy ✓');ok('Đã copy icon #'+(i+1))};ls.appendChild(d);it.el=d});
const paint=i=>{const it=items[i];it.el.querySelector('.nm').textContent='#'+(i+1)+' '+it.name;it.el.querySelector('.vi').textContent=it.vi||''};
const ask=async batch=>{const r=await fetch(BASE+'/chat/completions',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+KEY},body:JSON.stringify({model:MODEL,temperature:0.2,messages:[{role:'system',content:'Bạn là chuyên gia nhận diện icon SVG. Nhận một mảng JSON [{i,hint,svg}]. Với mỗi icon, xác định icon đó là gì dựa trên mã SVG (path, shape) và hint (class, aria-label, text). Chỉ trả về MỘT mảng JSON thuần, không markdown, dạng [{"i":số,"name":"tên-icon-tiếng-Anh-kebab-case","vi":"mô tả ngắn tiếng Việt"}]. Phải trả đủ mọi i đã nhận.'},{role:'user',content:JSON.stringify(batch)}]})});if(!r.ok)throw new Error('API '+r.status+': '+(await r.text()).slice(0,120));const j=await r.json();const t=j.choices[0].message.content.replace(/```json|```/g,'').trim();return JSON.parse(t)};
let busy=false;
const runAI=async()=>{if(busy)return;const todo=items.map((it,i)=>[it,i]).filter(([it])=>!it.name);if(!todo.length){ok('Đã đặt tên hết');return}busy=true;let done=0,k=0,err='';info('AI đang phân tích '+todo.length+' icon...');st('AI...');const chunks=[];for(let i=0;i<todo.length;i+=12)chunks.push(todo.slice(i,i+12));const worker=async()=>{while(k<chunks.length){const ch=chunks[k++];try{const r=await ask(ch.map(([it,i])=>({i,hint:it.hint,svg:it.code.slice(0,1500)})));r.forEach(o=>{const it=items[o.i];if(it&&o.name){it.name=String(o.name);it.vi=String(o.vi||'');paint(o.i)}})}catch(e){err=e.message}done+=ch.length;st(done+'/'+todo.length);if(!err)info('AI: '+done+'/'+todo.length)}};await Promise.all([worker(),worker()]);busy=false;if(err){st('Lỗi AI');bad('AI lỗi: '+err)}else{st('AI xong ✓');ok('AI đã đặt tên xong')}};
$('ai').onclick=runAI;
$('ca').onclick=async e=>{await copy(items.map((it,i)=>label(it,i)+'\n'+it.code).join('\n\n'));flash(e.target,'Đã copy ✓');ok('Đã copy '+items.length+' SVG')};
const close=()=>{host.remove();document.removeEventListener('keydown',kd,true)};
const kd=e=>{if(e.key==='Escape')close()};
document.addEventListener('keydown',kd,true);
$('x').onclick=close;
if(items.length){ok('Tìm thấy '+items.length+' SVG');setTimeout(runAI,600)}else toast('⚠️ Không có SVG nào trên trang','#b9770e',4000);
}catch(e){bad('Lỗi: '+(e&&e.message||e))}
})();
