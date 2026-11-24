/* ---------- SVG helpers ---------- */
const $=s=>document.querySelector(s);
const flower=(c='#d6203f',d='#7a0f2e',cls='')=>{
  let p='';for(let i=0;i<5;i++)p+=`<path d="M50 50C18 42 14 8 50 6C86 8 82 42 50 50Z" fill="${c}" stroke="${d}" stroke-width="1.2" transform="rotate(${i*72} 50 50)"/><path d="M50 48L50 14" stroke="${d}" stroke-width=".8" opacity=".4" transform="rotate(${i*72} 50 50)"/>`;
  return `<svg class="${cls}" viewBox="0 0 100 100">${p}<circle cx="50" cy="50" r="9" fill="${d}"/><path d="M50 50L66 24" stroke="#f7c948" stroke-width="2.5"/><circle cx="66" cy="23" r="3.5" fill="#f7c948"/><circle cx="62" cy="28" r="2" fill="#fff3b0"/></svg>`};
const leaf=(cls='')=>`<svg class="${cls}" viewBox="0 0 60 100"><path d="M30 98C0 70 0 25 30 2C60 25 60 70 30 98Z" fill="#3f6b3a"/><path d="M30 95V10" stroke="#9ccc8a" stroke-width="2"/></svg>`;
const cup=(tea='#b01030',cls='',flowerOn=true)=>`<svg class="${cls}" viewBox="0 0 300 260">
<ellipse cx="150" cy="232" rx="125" ry="20" fill="#7a0f2e" opacity=".25"/>
<ellipse cx="150" cy="220" rx="115" ry="22" fill="#f7b6c2" stroke="#7a0f2e" stroke-width="3"/>
<ellipse cx="150" cy="216" rx="80" ry="13" fill="#fff0f3"/>
<path d="M232 105C290 100 290 170 228 172" fill="none" stroke="#7a0f2e" stroke-width="12" stroke-linecap="round"/>
<path d="M62 100H238C238 175 215 212 150 212C85 212 62 175 62 100Z" fill="#fff" stroke="#7a0f2e" stroke-width="4"/>
<path d="M75 135H225" stroke="#f7b6c2" stroke-width="5" stroke-dasharray="3 10" stroke-linecap="round"/>
<ellipse cx="150" cy="100" rx="88" ry="20" fill="#fff" stroke="#7a0f2e" stroke-width="4"/>
<ellipse cx="150" cy="102" rx="78" ry="15" fill="${tea}"/>
<ellipse cx="125" cy="98" rx="30" ry="4" fill="#fff" opacity=".35"/>
${flowerOn?`<g class="bob" style="transform-origin:150px 100px"><g transform="translate(170 78) scale(.42)">${flower().replace(/<\/?svg[^>]*>/g,'')}</g></g>`:''}
<g class="steam" transform="translate(0 20)"><path d="M115 70C100 50 130 40 115 18"/><path d="M150 70C135 50 165 40 150 18"/><path d="M185 70C170 50 200 40 185 18"/></g></svg>`;
const glass=(liq='#d6203f',top='#f7b6c2',garn='lemon',cls='')=>`<svg class="${cls}" viewBox="0 0 200 260">
<path d="M150 10L135 150" stroke="#7a0f2e" stroke-width="7" stroke-linecap="round"/>
<path d="M45 40H155L140 235C139 245 132 250 124 250H76C68 250 61 245 60 235Z" fill="${liq}" opacity=".92"/>
<path d="M50 40H150L146 82H54Z" fill="${top}" opacity=".7"/>
<rect x="72" y="100" width="34" height="34" rx="6" fill="#fff" opacity=".45" transform="rotate(12 89 117)"/>
<rect x="96" y="150" width="32" height="32" rx="6" fill="#fff" opacity=".4" transform="rotate(-10 112 166)"/>
<rect x="68" y="178" width="30" height="30" rx="6" fill="#fff" opacity=".35" transform="rotate(8 83 193)"/>
<g class="bub"><circle cx="90" cy="220" r="4"/><circle cx="112" cy="225" r="3"/><circle cx="100" cy="215" r="5"/></g>
<path d="M45 40H155L140 235C139 245 132 250 124 250H76C68 250 61 245 60 235Z" fill="none" stroke="#7a0f2e" stroke-width="4"/>
<path d="M56 50L68 220" stroke="#fff" stroke-width="5" opacity=".5" stroke-linecap="round"/>
${garn==='lemon'?'<g transform="translate(150 40)"><circle r="20" fill="#ffe36e" stroke="#e0b400" stroke-width="3"/><path d="M0 -17V17M-17 0H17M-12 -12L12 12M12 -12L-12 12" stroke="#fff6bf" stroke-width="2"/></g>':garn==='mint'?'<g transform="translate(70 38)"><ellipse rx="14" ry="26" fill="#3f6b3a" transform="rotate(-25) translate(-8 -14)"/><ellipse rx="14" ry="26" fill="#5a8f4f" transform="rotate(25) translate(8 -14)"/></g>':'<g transform="translate(150 38) scale(.38)">'+flower().replace(/<\/?svg[^>]*>/g,'')+'</g>'}
</svg>`;
const tin=(c='#7a0f2e',txt='Hibiscus',shape='tin')=>`<svg viewBox="0 0 200 240">${shape==='box'?`<rect x="30" y="40" width="140" height="170" rx="10" fill="${c}"/><rect x="30" y="40" width="140" height="22" fill="#000" opacity=".15"/>`:shape==='pouch'?`<path d="M40 30H160L170 220H30Z" fill="${c}"/><path d="M40 40H160" stroke="#fff" stroke-dasharray="4 4" opacity=".6"/>`:`<rect x="45" y="25" width="110" height="26" rx="8" fill="#f7b6c2"/><rect x="40" y="48" width="120" height="165" rx="14" fill="${c}"/>`}
<g transform="translate(66 80) scale(.7)">${flower('#fff0f3','#f7b6c2').replace(/<\/?svg[^>]*>/g,'')}</g>
<text x="100" y="175" text-anchor="middle" font-family="Fraunces,serif" font-size="17" font-weight="800" fill="#fff">${txt.replace(/[<>&]/g,'')}</text>
<text x="100" y="195" text-anchor="middle" font-size="9" fill="#fbd5dc">NATURAL • CAFFEINE-FREE</text></svg>`;

/* ---------- Data ---------- */
const TEAS=[
{n:'Classic Hibiscus',c:'#b01030',t:5,p:650,d:'Pure tangy hibiscus. Rich in antioxidants.',tg:['Pure','Tart']},
{n:'Lemon Hibiscus',c:'#d9461f',t:4,p:700,d:'Fresh lemon zest for a bright, zingy cup.',tg:['Citrus','Fresh']},
{n:'Mint Hibiscus',c:'#9c1038',t:4,p:700,d:'Cooling pudina with hibiscus. Great after meals.',tg:['Cooling','Digestive']},
{n:'Honey Hibiscus',c:'#c1412b',t:5,p:800,d:'Soft natural sweetness, perfect for winter evenings.',tg:['Sweet','Cozy']},
{n:'Rose Hibiscus',c:'#c2185b',t:6,p:850,d:'Gulab petals meet hibiscus. Floral and calming.',tg:['Floral','Calm']},
{n:'Ginger Hibiscus',c:'#a8281c',t:7,p:750,d:'Adrak warmth for cold days and sore throats.',tg:['Warm','Spicy']}];
const COLD=[
{n:'Hibiscus Iced Cooler',l:'#d6203f',g:'lemon',p:350,d:'Chilled hibiscus, lemon, plenty of ice.'},
{n:'Pudina Mojito',l:'#9c1038',g:'mint',p:380,d:'Mint, lime and hibiscus. Summer in a glass.'},
{n:'Berry Blush Sparkle',l:'#c2185b',g:'flower',p:420,d:'Hibiscus, berries and soda. Fizzy and pink.'},
{n:'Gulab Hibiscus Sharbat',l:'#e0587a',g:'flower',p:360,d:'A modern twist on our classic sharbat.'}];
const PACKS=[
{n:'Starter Sip Box',c:'#7a0f2e',sh:'box',p:1800,d:'3 flavours, 10 tea bags each.'},
{n:'Family Chai Time',c:'#d6203f',sh:'tin',p:3200,d:'6 flavours, a ceramic cup set and honey.'},
{n:'Eid / Shaadi Hamper',c:'#a8123c',sh:'pouch',p:5500,d:'Premium tins, 2 cups, a glass bottle and a card.'}];

/* ---------- Store ---------- */
const store={
 users:()=>JSON.parse(localStorage.ht_users||'[]'),
 save:u=>localStorage.ht_users=JSON.stringify(u),
 me:()=>store.users().find(u=>u.email===localStorage.ht_me),
 upd(fn){const us=store.users(),m=us.find(u=>u.email===localStorage.ht_me);if(m){fn(m);store.save(us)}}
};
let cart=+(localStorage.ht_cart||0);
function toast(m){const t=$('#toast');t.textContent=m;t.className='show';setTimeout(()=>t.className='',2200)}
function add(n){cart++;localStorage.ht_cart=cart;toast(n+' added to cart ('+cart+')');renderNav()}
function applyPrefs(){const m=store.me();document.body.classList.toggle('dark',!!(m&&m.dark));document.body.classList.toggle('noanim',!!(m&&m.noanim))}

/* ---------- Nav ---------- */
const LINKS=[['home','Home'],['teas','Teas'],['cold','Cold Drinks'],['howto','How to Brew'],['gifts','Gift Packs'],['custom','Customize'],['about','About']];
function renderNav(){
 const m=store.me(),h=(location.hash||'#/home').slice(2);
 $('#lg').innerHTML=flower('#f7b6c2','#fff','');
 $('#nav').innerHTML=(m?LINKS:[]).map(([k,l])=>`<a href="#/${k}" class="${h===k?'on':''}">${l}</a>`).join('')+
 (m?`<a href="#/gifts">Cart (${cart})</a>`:'')+
 (m?`<a href="#/profile" aria-label="Profile">${m.pic?`<img class="avatar" src="${m.pic}" alt="">`:`<span class="avatar">${m.name[0].toUpperCase()}</span>`}</a>`
   :`<a href="#/login">Login</a><a href="#/register" class="on">Register</a>`)}

/* ---------- Pages ---------- */
const pages={
home(){
 let petals='';for(let i=0;i<10;i++)petals+=`<div class="petal" style="left:${Math.random()*100}%;animation-duration:${8+Math.random()*8}s;animation-delay:-${Math.random()*10}s">${flower('#d6203f','#7a0f2e')}</div>`;
 return `<div class="hero">${petals}
 <div><h1>A natural sip of freshness.</h1><p>Caffeine-free hibiscus tea, hot or iced, grown by local farmers and packed in eco-friendly boxes. Rich in antioxidants, light on your pocket.</p>
 <a class="btn" href="#/teas">Shop teas</a> <a class="btn alt" href="#/cold">Cold drinks</a></div>
 <div class="art">${cup('#b01030','cup')}<div class="fl sway" style="width:120px;left:2%;top:4%">${flower()}</div><div class="fl spin" style="width:90px;right:4%;top:10%">${flower('#e0587a','#7a0f2e')}</div><div class="fl bob" style="width:60px;left:12%;bottom:6%">${leaf()}</div><div class="fl sway" style="width:100px;right:2%;bottom:2%">${flower('#f06a86','#7a0f2e')}</div></div></div>
 <div class="bar"><div><b>100% natural</b>No artificial colour</div><div><b>Caffeine-free</b>Safe for the evening</div><div><b>Rs 650 onwards</b>Affordable and convenient</div><div><b>Eco packaging</b>Recyclable boxes</div></div>
 <section class="pg"><h2>Our favourite flavours</h2><div class="grid">${TEAS.slice(0,3).map(teaCard).join('')}</div>
 <h2 style="margin-top:50px">Cool down with a glass</h2><div class="grid">${COLD.slice(0,2).map(coldCard).join('')}</div></section>`},
teas(){return `<section class="pg"><h2>Tea flavours</h2><p>Every cup is a different colour. Pick one and add it to your cart.</p><div class="grid">${TEAS.map(teaCard).join('')}</div></section>`},
cold(){return `<section class="pg"><h2>Cold drinks</h2><p>Brew strong, pour over ice, and enjoy.</p><div class="grid">${COLD.map(coldCard).join('')}</div>
 <div class="card" style="margin-top:30px;text-align:left"><h3>Quick iced hibiscus recipe</h3><ol class="steps"><li>Steep 2 tea bags in 250 ml hot water for 5 minutes.</li><li>Remove the bags and add honey or sugar while warm.</li><li>Cool for 10 minutes, then pour over a glass full of ice.</li><li>Top with lemon, mint, or a splash of soda.</li></ol></div></section>`},
howto(){return `<section class="pg"><h2>How to brew the perfect cup</h2><div class="two"><div class="timer"><div class="chips" id="tchips">${TEAS.map((t,i)=>`<button class="chip ${i?'':'on'}" data-i="${i}">${t.n.split(' ')[0]}</button>`).join('')}</div>
 <div class="ring"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="#fbd5dc" stroke-width="7"/><circle id="arc" cx="50" cy="50" r="45" fill="none" stroke="#d6203f" stroke-width="7" stroke-linecap="round" stroke-dasharray="282.7" stroke-dashoffset="0"/></svg><div class="t" id="tt">05:00</div></div>
 <div id="tcup" style="width:200px"></div>
 <div><button class="btn" id="go">Start</button> <button class="btn alt" id="rs">Reset</button></div><div id="tmsg" class="msg ok"></div></div>
 <div><ol class="steps"><li>Boil fresh water, then wait 30 seconds.</li><li>Place one tea bag in your cup (or 1 tsp loose tea).</li><li>Pour 200 ml hot water and start the timer.</li><li>Watch the colour deepen. Remove the bag when the timer rings.</li><li>Add honey or lemon, sip slowly, and relax.</li></ol></div></div></section>`},
gifts(){return `<section class="pg"><h2>Gift packs</h2><p>Beautiful boxes for Eid, birthdays and weddings. Personalise any pack in <a href="#/custom" style="color:var(--red);font-weight:700">Customize</a>.</p><div class="grid">${PACKS.map(k=>`<div class="card">${tin(k.c,k.n.split(' ')[0],k.sh).replace('<svg','<svg class="item"')}<h3>${k.n}</h3><p>${k.d}</p><div class="price">Rs ${k.p}</div><button class="btn" onclick="add('${k.n}')">Add to cart</button></div>`).join('')}</div></section>`},
custom(){return `<section class="pg"><h2>Design your own pack</h2><div class="two"><div class="card" id="prev" style="min-height:380px;display:grid;place-items:center"></div>
 <div class="card" style="text-align:left"><label><b>Name on the pack</b></label><input id="cn" maxlength="14" value="${(store.me()||{name:'Hibiscus'}).name.split(' ')[0]}">
 <p style="margin-top:14px"><b>Shape</b></p><div class="chips" id="csh"><button class="chip on" data-v="tin">Tin</button><button class="chip" data-v="box">Box</button><button class="chip" data-v="pouch">Pouch</button></div>
 <p><b>Colour</b></p><div id="ccl">${['#7a0f2e','#d6203f','#c2185b','#3f6b3a','#4a1942','#e0587a'].map(c=>`<button class="sw" data-v="${c}" style="background:${c}" aria-label="${c}"></button>`).join('')}</div>
 <p style="margin-top:12px"><b>Flavour inside</b></p><select id="cf">${TEAS.map(t=>`<option>${t.n}</option>`).join('')}</select>
 <p style="margin-top:16px"><button class="btn" id="cadd">Add to cart – Rs 1,200</button> <button class="btn alt" id="csv">Save design</button></p></div></div></section>`},
about(){return `<section class="pg"><div class="two"><div><h2>Why hibiscus?</h2><p style="margin:14px 0">Hibiscus tea is naturally tangy, caffeine-free and rich in antioxidants. We wanted a healthy drink that students, families and tea lovers in Pakistan can afford every day.</p><p>We source flowers from local farmers, pack in eco-friendly materials, and follow PFA and FBR regulations. Our promise: grow naturally.</p></div>
 <div style="display:grid;place-items:center">${cup('#b01030','',true).replace('<svg','<svg style="width:320px"')}</div></div>
 <h2 style="margin-top:40px">Who we serve</h2><div class="grid">${['Health-conscious people (18–35)','Students and young professionals','Families who want natural drinks','Tea lovers who want new flavours','Eco-aware customers'].map(s=>`<div class="card"><div style="width:60px;margin:auto">${flower('#e0587a')}</div><h3 style="font-size:1.05rem">${s}</h3></div>`).join('')}</div></section>`},
login(){return `<section class="pg"><div class="form"><div style="position:absolute;right:-30px;top:-30px;width:110px;opacity:.9" class="spin">${flower()}</div><h2>Welcome back</h2>
 <label for="e">Email</label><input id="e" type="email" autocomplete="email"><label for="p">Password</label><input id="p" type="password" autocomplete="current-password">
 <p style="margin-top:20px"><button class="btn" id="lb">Log in</button></p><div class="msg" id="m"></div><p style="margin-top:14px">New here? <a href="#/register" style="color:var(--red);font-weight:700">Create an account</a></p></div></section>`},
register(){return `<section class="pg"><div class="form"><div style="position:absolute;left:-30px;top:-30px;width:110px" class="spin">${flower('#e0587a')}</div><h2 style="text-align:right">Join Hibiscus Tea</h2>
 <label for="n">Full name</label><input id="n"><label for="e">Email</label><input id="e" type="email"><label for="p">Password (min 6)</label><input id="p" type="password" autocomplete="new-password"><label for="p2">Confirm password</label><input id="p2" type="password">
 <p style="margin-top:20px"><button class="btn" id="rb">Create account</button></p><div class="msg" id="m"></div><p style="margin-top:14px">Already registered? <a href="#/login" style="color:var(--red);font-weight:700">Log in</a></p></div></section>`},
profile(){const m=store.me();if(!m){location.hash='#/login';return ''}
 return `<section class="pg"><div class="form" style="max-width:520px"><div id="bav">${m.pic?`<img class="big-av" src="${m.pic}" alt="Profile picture">`:`<div class="big-av">${m.name[0].toUpperCase()}</div>`}</div>
 <p style="text-align:center;margin:10px 0"><label class="btn alt" style="cursor:pointer;margin:0">Upload picture<input type="file" id="pf" accept="image/*" hidden></label></p>
 <h2 style="text-align:center">Settings</h2>
 <label for="n">Full name</label><input id="n" value="${m.name}"><label>Email</label><input value="${m.email}" disabled>
 <div class="row"><span>Dark mode</span><input type="checkbox" id="dk" style="width:22px" ${m.dark?'checked':''}></div>
 <div class="row"><span>Turn off animations</span><input type="checkbox" id="na" style="width:22px" ${m.noanim?'checked':''}></div>
 <p style="margin-top:18px"><button class="btn" id="sv">Save changes</button> <button class="btn alt" id="lo">Log out</button></p><div class="msg ok" id="m"></div>
 ${m.design?`<h3 style="margin-top:20px">Your saved design</h3><div style="width:150px;margin:auto">${tin(m.design.c,m.design.n,m.design.s)}</div>`:''}</div></section>`}
};
function teaCard(t){return `<div class="card">${cup(t.c,'item',false)}<h3>${t.n}</h3><div>${t.tg.map(x=>`<span class="tag">${x}</span>`).join('')}<span class="tag">${t.t} min</span></div><p>${t.d}</p><div class="price">Rs ${t.p}</div><button class="btn" onclick="add('${t.n}')">Add to cart</button></div>`}
function coldCard(c){return `<div class="card">${glass(c.l,'#f7b6c2',c.g,'item')}<h3>${c.n}</h3><p>${c.d}</p><div class="price">Rs ${c.p}</div><button class="btn" onclick="add('${c.n}')">Add to cart</button></div>`}

/* ---------- Page behaviours ---------- */
const after={
howto(){
 let i=0,left=TEAS[0].t*60,tot=left,iv=null;
 const tt=$('#tt'),arc=$('#arc'),msg=$('#tmsg');
 const draw=()=>{tt.textContent=String(Math.floor(left/60)).padStart(2,'0')+':'+String(left%60).padStart(2,'0');arc.style.strokeDashoffset=282.7*(1-left/tot);
  const k=1-left/tot;$('#tcup').innerHTML=cup(`hsl(${350-0},${40+60*k}%,${70-35*k}%)`,'',false)};
 const set=n=>{clearInterval(iv);iv=null;i=n;tot=left=TEAS[n].t*60;$('#go').textContent='Start';msg.textContent='Steep time for '+TEAS[n].n+': '+TEAS[n].t+' min';draw()};
 const beep=()=>{try{const a=new AudioContext(),o=a.createOscillator();o.connect(a.destination);o.frequency.value=880;o.start();setTimeout(()=>o.stop(),600)}catch(e){}};
 $('#tchips').onclick=e=>{const b=e.target.closest('.chip');if(!b)return;document.querySelectorAll('#tchips .chip').forEach(x=>x.classList.remove('on'));b.classList.add('on');set(+b.dataset.i)};
 $('#go').onclick=e=>{if(iv){clearInterval(iv);iv=null;e.target.textContent='Resume';return}
  e.target.textContent='Pause';iv=setInterval(()=>{left--;draw();if(left<=0){clearInterval(iv);iv=null;$('#go').textContent='Start';msg.textContent='Your tea is ready! Remove the tea bag.';beep();left=tot}},1000)};
 $('#rs').onclick=()=>set(i);set(0)},
custom(){
 const st={c:'#7a0f2e',s:'tin'},draw=()=>$('#prev').innerHTML=`<div style="width:260px" class="bob">${tin(st.c,$('#cn').value||'Hibiscus',st.s)}</div>`;
 $('#cn').oninput=draw;
 $('#csh').onclick=e=>{const b=e.target.closest('.chip');if(!b)return;document.querySelectorAll('#csh .chip').forEach(x=>x.classList.remove('on'));b.classList.add('on');st.s=b.dataset.v;draw()};
 $('#ccl').onclick=e=>{if(e.target.dataset.v){st.c=e.target.dataset.v;draw()}};
 $('#cadd').onclick=()=>add('Custom pack');
 $('#csv').onclick=()=>{if(!store.me()){toast('Please log in to save your design');return}store.upd(m=>m.design={c:st.c,s:st.s,n:$('#cn').value||'Hibiscus'});toast('Design saved to your profile')};
 draw()},
login(){$('#lb').onclick=()=>{const u=store.users().find(x=>x.email===$('#e').value.trim().toLowerCase()&&x.pw===btoa($('#p').value));
  if(!u){$('#m').textContent='Email or password is wrong. Check both and try again.';return}
  localStorage.ht_me=u.email;location.hash='#/home'}},
register(){$('#rb').onclick=()=>{const n=$('#n').value.trim(),e=$('#e').value.trim().toLowerCase(),p=$('#p').value,m=$('#m');
  if(!n||!/^\S+@\S+\.\S+$/.test(e))return m.textContent='Enter your name and a valid email.';
  if(p.length<6)return m.textContent='Password must be at least 6 characters.';
  if(p!==$('#p2').value)return m.textContent='Passwords do not match.';
  const us=store.users();if(us.some(x=>x.email===e))return m.textContent='This email is already registered. Log in instead.';
  us.push({name:n,email:e,pw:btoa(p)});store.save(us);localStorage.ht_me=e;toast('Account created. Welcome, '+n.split(' ')[0]+'!');location.hash='#/home'}},
profile(){
 $('#pf').onchange=e=>{const f=e.target.files[0];if(!f)return;if(f.size>1.5e6){$('#m').textContent='Image is too large. Pick one under 1.5 MB.';return}
  const r=new FileReader();r.onload=()=>{store.upd(m=>m.pic=r.result);$('#bav').innerHTML=`<img class="big-av" src="${r.result}" alt="Profile picture">`;renderNav();$('#m').textContent='Picture updated.'};r.readAsDataURL(f)};
 $('#sv').onclick=()=>{store.upd(m=>{m.name=$('#n').value.trim()||m.name;m.dark=$('#dk').checked;m.noanim=$('#na').checked});applyPrefs();renderNav();$('#m').textContent='Settings saved.'};
 $('#lo').onclick=()=>{localStorage.removeItem('ht_me');applyPrefs();location.hash='#/register'}}
};

/* ---------- Router ---------- */
function route(){
 const me=store.me(),open=['login','register'];
 let k=(location.hash||'').slice(2);
 if(!pages[k])k=me?'home':'register';
 if(!me&&!open.includes(k))k='register';
 if(me&&open.includes(k))k='home';
 if(location.hash!=='#/'+k){location.hash='#/'+k;return}
 const pg=k;
 $('#app').innerHTML=pages[pg]();applyPrefs();renderNav();window.scrollTo(0,0);
 if(after[pg]&&$('#app').innerHTML)after[pg]();
}
addEventListener('hashchange',route);route();
