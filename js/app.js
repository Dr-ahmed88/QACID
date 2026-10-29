var MN=['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
var MS=[];for(var i=0;i<12;i++){var mm=(8+i)%12,yy=mm>=8?2026:2027;MS.push([yy+'-'+String(mm+1).padStart(2,'0'),MN[mm]+' '+yy]);}
var COMMON=[['حضور المجلس التنفيذي لمركز ضمان الجودة','المجالس والمتابعة',15,1],['محاضر اجتماعات المجلس التنفيذي ومجلس الإدارة، استمارات الصرف','المجالس والمتابعة',15],['استخدام المضبطة والمحضر الإلكتروني','المجالس والمتابعة',10]];
var BK={1:[['الاستعداد لزيارات الدعم الفني واستقبالها (نتائج التقرير) + خطة التحسين','الدعم الفني',30],['تقرير لجنة التطوير الإداري بالوحدة عن موقف الكلية/المعهد من إجراءات الاستعداد لزيارة الشركة المانحة للأيزو طبقًا للمواصفة 9001/2015 (يُسلَّم قبل 15 يناير)','التطوير الإداري',30]],
2:[['إعداد وإرسال كافة تقارير استبيانات قياس رضا الطلاب عن الفصل الدراسي الأول (مرحلة جامعية أولى – دراسات عليا) معتمدة','الاستبيانات',20],['تقرير عن أنشطة الوحدة الربع سنوية (متضمنة أنشطة الأيزو) معتمدة','التقارير الدورية',20],['تقارير متابعة الخطة التنفيذية للوحدة (النصف سنوي) معتمدة','متابعة الخطط',20]],
3:[['إعداد وإرسال تقارير المقررات والبرامج (مقررات منتهية في الفصل الدراسي الأول) معتمدة','المقررات والبرامج',30],['إعداد وإرسال تقارير الفصل الدراسي الأول عن جودة الأداء بالكنترولات (استعدادات الكنترول وإعداد ملف الكنترول، الورقة الامتحانية، كراسات الإجابة)','الكنترولات',30]],
4:[['الاستعداد لزيارات الدعم الفني واستقبالها (نتائج التقرير) + خطة التحسين','الدعم الفني',30],['تقرير لجنة التطوير الإداري والميكنة عن موقف الكلية/المعهد من توصيات الجهة المانحة محدد به مسئوليات التنفيذ والتوقيتات','التطوير الإداري',30]],
5:[['تقرير عن أنشطة الوحدة الربع سنوية (متضمنة أنشطة الأيزو) معتمدة','التقارير الدورية',30],['تقرير عن أنشطة أيزو المعامل / الأيزو الإداري معتمدة','الأيزو',30]],
6:[['تقرير وحدة / لجنة إدارة الأزمات والكوارث عن أنشطتها','الأزمات والكوارث',30],['إعداد وإرسال تقارير متابعة الخطة الاستراتيجية (نصف سنوي)','متابعة الخطط',30]],
7:[['الاستعداد لزيارات الدعم الفني واستقبالها (نتائج التقرير) + خطة التحسين','الدعم الفني',20],['إعداد وإرسال تقارير الفصل الدراسي الثاني عن جودة الأداء بالكنترولات (استعدادات الكنترول وإعداد ملف الكنترول، الورقة الامتحانية، كراسات الإجابة)','الكنترولات',20],['إعداد وإرسال كافة تقارير استبيانات قياس الرضا (طلاب – رضا وظيفي – خدمات – أطراف مجتمعية) معتمدة','الاستبيانات',20]],
8:[['إعداد تقارير المقررات والبرامج (المقررات للفصلين الدراسيين) معتمدة','المقررات والبرامج',20],['إعداد وإرسال تقرير متابعة الخطة التنفيذية للوحدة (النصف سنوي)','متابعة الخطط',20],['إعداد وتسليم التقرير السنوي للوحدة معتمد','التقارير السنوية',30]],
9:[['الخطة التنفيذية للوحدة للعام القادم معتمدة','الخطط',30],['التقرير السنوي للمؤسسة','التقارير السنوية',30]],
10:[['الاستعداد لزيارات الدعم الفني واستقبالها (نتائج التقرير) + خطة التحسين','الدعم الفني',30],['خطة استقبال الطلاب الجدد وتسليم تقرير مفصل عن إجراءات الاستعداد وفعاليات اليوم','استقبال الطلاب',30]],
11:[['تقرير عن أنشطة الوحدة الربع سنوية (متضمنة أنشطة الأيزو)','التقارير الدورية',30],['تقارير مراجعة ملفات البرامج','المقررات والبرامج',30]],
12:[['تقرير عن تواصل الوحدات مع المركز (نقاط القوة، مقترحات التحسين)','التواصل مع المركز',20],['تقرير عن توافر عوامل وإجراءات الأمن والسلامة بالكلية / المعهد','الأمن والسلامة',20],['إعداد وإرسال تقارير متابعة الخطة الاستراتيجية (نصف سنوي)','متابعة الخطط',20]]};
function seedTasks(){var o=[];COMMON.forEach(function(c,i){o.push({id:'bc'+(i+1),n:c[0],c:c[1],w:c[2],m:'',a:c[3]||0});});
MS.forEach(function(m){var n=parseInt(m[0].slice(5),10);(BK[n]||[]).forEach(function(x,j){o.push({id:'b'+m[0].replace('-','')+'_'+(j+1),n:x[0],c:x[1],w:x[2],m:m[0],a:0});});});return o;}
function seedPay(){return{bands:[[90,100],[70,75],[50,50]],roles:[['مدير الوحدة',600],['نائب مدير الوحدة',500],['مسئول لجنة الدعم والمسئولية المجتمعية',400],['مسئول لجنة التخطيط والمتابعة',400],['مسئول لجنة القياس وتقويم الأداء والتطوير',400],['مسئول لجنة المراجعة الأكاديمية للبرامج',400],['مسئول لجنة المراجعة وإعداد التقارير',400],['مسئول لجنة التطوير الإداري والميكنة',400],['سكرتير',150],['عامل',150]]};}
var DEF=['كلية العلوم','كلية التجارة','كلية التربية','كلية الطب البيطري','كلية الهندسة الوراثية والتقنية الحيوية','كلية التربية النوعية','كلية التربية الرياضية','كلية التمريض','كلية الحقوق','كلية السياحة والفنادق','كلية العلاج الطبيعي','كلية الزراعة','الكلية 13','الكلية 14','الكلية 15'];
var CODES=[];for(var k=1;k<=15;k++)CODES.push('A'+k);
function pw(c){return c==='ADMIN'?'admin@2026':c.toLowerCase()+'@2026';}
var S,user,mon=MS[1][0],tab='dash',rev=null,pf='A1';
var SECS=['قطاع التعليم','قطاع خدمة المجتمع','قطاع الدراسات العليا','قطاع الشئون الإدارية (أمين الكلية)'];
var DEFK=[['k1','نسبة الأنشطة المنفذة إلى المخطط لها','(المنفذة ÷ المخطط) × 100',90,'%'],['k2','نسبة اكتمال توصيف المقررات وتقاريرها','(المقررات المكتملة ÷ إجمالي المقررات) × 100',100,'%'],['k3','مستوى رضا الطلاب عن العملية التعليمية','(متوسط الدرجات ÷ الدرجة العظمى) × 100',80,'%'],['k4','الأبحاث المنشورة دوليًا لكل عضو هيئة تدريس','عدد الأبحاث ÷ عدد الأعضاء',1,'بحث'],['k5','نسبة الأعضاء الحاصلين على دورات تدريبية','(الحاصلون على دورات ÷ إجمالي الأعضاء) × 100',80,'%'],['k6','نسبة اكتمال الشواهد المطلوبة لكل معيار','(الشواهد المرفوعة ÷ المطلوبة) × 100',90,'%']].map(function(k){return{id:k[0],n:k[1],f:k[2],t:k[3],u:k[4]};});
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function load(){try{S=JSON.parse(localStorage.getItem('usc_qa')||'null');user=localStorage.getItem('usc_user')||null;}catch(e){}S=S||{names:DEF.slice(),up:{}};while(S.names.length<CODES.length)S.names.push(DEF[S.names.length]);S.plan=S.plan||{};S.kv=S.kv||{};S.kpis=S.kpis||DEFK.slice();S.notes=S.notes||{};S.pay=S.pay||seedPay();if(!S.tv){var OLD={t1:1,t2:1,t3:1,t4:1,t5:1,t6:1,t7:1,t8:1};S.tasks=seedTasks().concat((S.tasks||[]).filter(function(t){return !OLD[t.id];}));Object.keys(S.up).forEach(function(k){if(OLD[k.split('|')[2]])delete S.up[k];});S.tv=2;}}
function save(){try{localStorage.setItem('usc_qa',JSON.stringify(S));}catch(e){}}
function setUser(u){user=u;try{u?localStorage.setItem('usc_user',u):localStorage.removeItem('usc_user');}catch(e){}}
function prate(p){var b=S.pay.bands.slice().sort(function(x,y){return y[0]-x[0];});for(var i=0;i<b.length;i++)if(p>=b[i][0])return b[i][1];return 0;}
function ptot(){return S.pay.roles.reduce(function(t,r){return t+r[1];},0);}
function pamt(p){return Math.round(ptot()*prate(p)/100);}
function minBand(){return S.pay.bands.length?Math.min.apply(null,S.pay.bands.map(function(b){return b[0];})):0;}
function pnext(p){var b=S.pay.bands.slice().sort(function(x,y){return x[0]-y[0];}),r=prate(p);for(var i=0;i<b.length;i++)if(b[i][0]>p&&b[i][1]>r)return b[i];return null;}
function bandsTxt(){return S.pay.bands.slice().sort(function(x,y){return y[0]-x[0];}).map(function(b){return 'إنجاز '+b[0]+'% فأكثر ← صرف '+b[1]+'%';}).join(' · ')+' · وأقل من '+minBand()+'% لا تُصرف المكافأة';}
function qv(u){return u&&u.s==='a'?(u.q===undefined?100:u.q):0;}
function earn(t,u){return Math.round(t.w*qv(u)/10)/10;}
function tfor(m){return S.tasks.filter(function(t){return !t.m||t.m===m;});}
function st(c,m){var a=0,p=0,r=0,W=0,wa=0,wu=0,T=tfor(m);T.forEach(function(t){W+=t.w;var u=S.up[c+'|'+m+'|'+t.id];if(u){if(u.s==='a'){a++;wa+=t.w*qv(u)/100;wu+=t.w;}else if(u.s==='p'){p++;wu+=t.w;}else r++;}});
return{a:a,p:p,r:r,up:a+p,n:T.length,W:W,pct:W?Math.round(wa/W*100):0,upc:W?Math.round(wu/W*100):0};}
function gr(p){return p>=90?['ممتاز','sg']:p>=75?['جيد جدًا','sg']:p>=60?['جيد','sy']:p>=40?['مقبول','sy']:['يحتاج تحسين','sr'];}
function col(p){return p>=75?'var(--g)':p>=50?'var(--y)':'var(--r)';}
function tag(p){var g=gr(p);return '<span class="tag '+g[1]+'">'+g[0]+'</span>';}
function mopts(){return MS.map(function(m){return '<option value="'+m[0]+'"'+(m[0]===mon?' selected':'')+'>'+m[1]+'</option>';}).join('');}
function mlabel(){return MS.filter(function(m){return m[0]===mon;})[0][1];}
function render(){var el=document.getElementById('app');if(!user){el.innerHTML=loginV();return;}
var adm=user==='ADMIN',i=CODES.indexOf(user);
var tabs=adm?[['dash','لوحة المتابعة'],['tasks','المهام ونسب الإنجاز'],['report','التقرير الشهري'],['pay','المكافآت ونسب الصرف'],['plans','خطط الكليات'],['kpis','مؤشرات الأداء'],['acc','الكليات والحسابات'],['about','عن النظام']]:[['mine','مهام الشهر'],['myrep','تقريري الشهري'],['plan','خطتي التنفيذية'],['kpi','مؤشرات الأداء'],['about','عن النظام']];
if(tabs.every(function(t){return t[0]!==tab;}))tab=tabs[0][0];
var h='<header><img class="lg" src="assets/logo.png" alt="شعار مركز ضمان الجودة والتطوير المستمر"><h1>المنصة الذكية لنظم ضمان الجودة<small>مركز ضمان الجودة والتطوير المستمر - جامعة مدينة السادات · '+(adm?'المستخدم الرئيسي':esc(S.names[i])+' ('+user+')')+'</small></h1><button class="btn" data-a="out">تسجيل الخروج</button></header>';
h+='<nav>'+tabs.map(function(t){return '<button data-a="tab" data-v="'+t[0]+'" class="'+(tab===t[0]?'on':'')+'">'+t[1]+'</button>';}).join('')+'</nav><main>';
h+={dash:dashV,tasks:tasksV,report:reportV,pay:payV,myrep:function(){return myrepV(user);},plans:plansV,kpis:kpisV,acc:accV,mine:function(){return mineV(user);},plan:function(){return xb('plan')+planV(user);},kpi:function(){return kpiV(user);},about:aboutV}[tab]();
el.innerHTML=h+'</main>';}
function loginV(){return '<div class="login"><div class="card"><div style="text-align:center"><img class="lgn" src="assets/logo.png" alt="شعار مركز ضمان الجودة والتطوير المستمر"><h2 style="margin-bottom:2px">المنصة الذكية لنظم ضمان الجودة</h2><div style="color:var(--mu);font-weight:600;margin-bottom:14px">مركز ضمان الجودة والتطوير المستمر - جامعة مدينة السادات</div></div><h3>تسجيل الدخول</h3><label for="u">كود الكلية (A1 إلى A15) أو ADMIN</label><input id="u" autocomplete="username" dir="ltr"><label for="p">كلمة المرور</label><input id="p" type="password" autocomplete="current-password" dir="ltr"><div class="err" id="e"></div><button class="btn" data-a="in" style="width:100%">دخول</button></div></div>';}
function dashV(){var rows=CODES.map(function(c,i){var s=st(c,mon);return{c:c,n:S.names[i],s:s};});
var avg=Math.round(rows.reduce(function(t,r){return t+r.s.pct;},0)/CODES.length),pend=rows.reduce(function(t,r){return t+r.s.p;},0),sub=rows.filter(function(r){return r.s.up>0;}).length;
var top=rows.slice().sort(function(a,b){return b.s.pct-a.s.pct;})[0];
var h='<div class="row" style="margin-bottom:14px"><h2 style="margin:0">لوحة المتابعة – '+mlabel()+'</h2><select data-a="mon" aria-label="الشهر">'+mopts()+'</select></div>';
h+=xb('dash');h+='<div class="kp"><div><b>'+avg+'%</b><span>متوسط الإنجاز المعتمد للجامعة</span></div><div><b>'+sub+' / '+CODES.length+'</b><span>كليات رفعت ملفات هذا الشهر</span></div><div><b>'+pend+'</b><span>ملفات بانتظار مراجعتك</span></div><div><b style="font-size:18px">'+(top.s.pct>0?esc(top.n):'—')+'</b><span>الأعلى إنجازًا ('+top.s.pct+'%)</span></div></div>';
h+='<div class="card"><h3>إنجاز الكليات والتقدير</h3><div class="tw"><table><tr><th>الكود</th><th>الكلية</th><th>الإنجاز المعتمد</th><th></th><th>مرفوع</th><th>للمراجعة</th><th>التقدير</th><th>نسبة الصرف</th><th></th></tr>';
rows.forEach(function(r){h+='<tr><td>'+r.c+'</td><td>'+esc(r.n)+'</td><td><b>'+r.s.pct+'%</b></td><td><div class="bar"><i style="width:'+r.s.pct+'%;background:'+col(r.s.pct)+'"></i></div></td><td>'+r.s.up+' / '+r.s.n+'</td><td>'+r.s.p+'</td><td>'+(r.s.up?tag(r.s.pct):'<span class="tag sm">لم يبدأ</span>')+'</td><td><b>'+prate(r.s.pct)+'%</b></td><td><button class="btn o" data-a="rev" data-v="'+r.c+'">مراجعة الملفات</button></td></tr>';});
h+='</table></div></div>';
h+=attV();if(rev)h+=revV(rev);
h+='<div class="card"><h3>متوسط الإنجاز الشهري للجامعة</h3><div class="tr">'+MS.map(function(m){var t=0;CODES.forEach(function(c){t+=st(c,m[0]).pct;});t=Math.round(t/CODES.length);return '<div class="'+(m[0]===mon?'cur':'')+'" title="'+m[1]+'"><span>'+t+'%</span><i style="height:'+Math.max(t,1)+'%"></i><span>'+m[1].split(' ')[0]+'</span></div>';}).join('')+'</div></div>';
return h;}
function tasksV(){var T=tfor(mon),W=T.reduce(function(t,x){return t+x.w;},0),so='<option value="">كل الشهور</option><option value="'+mon+'">هذا الشهر فقط ('+mlabel()+')</option>';
var h='<div class="row" style="margin-bottom:14px"><h2 style="margin:0">المهام المطلوبة ونسب الإنجاز – '+mlabel()+'</h2><select data-a="mon" aria-label="الشهر">'+mopts()+'</select></div>';
h+='<div class="card"><p style="margin-top:0;color:var(--mu)">حدد الملفات المطلوب من الكليات رفعها، ووزن كل ملف من 100%. تظهر هذه القائمة بأوزانها لكل كلية فور حفظها، وتُحتسب نسبة الإنجاز من مجموع أوزان الملفات المعتمدة فقط. المهمة بنطاق «كل الشهور» أي تعديل عليها يسري على كل الشهور.</p>';
h+='<div class="row" style="margin-bottom:10px"><b>مجموع الأوزان:</b> <span class="tag '+(W===100?'sg':'sy')+'">'+W+'%</span>'+(W===100?'':'<span style="color:var(--mu)">يفضّل أن يكون المجموع 100%، وإلا فستُحسب النسبة بالنسبة لمجموع الأوزان الحالي.</span>')+'</div>';
h+='<div class="tw"><table><tr><th>م</th><th>الملف المطلوب</th><th>التصنيف</th><th>الوزن %</th><th>النوع</th><th>النطاق</th><th class="np"></th></tr>';
T.forEach(function(t,i){h+='<tr><td>'+(i+1)+'</td><td><input style="min-width:260px" value="'+esc(t.n)+'" data-a="tn" data-v="'+t.id+'" aria-label="اسم الملف"></td><td><input style="min-width:130px" value="'+esc(t.c)+'" data-a="tc" data-v="'+t.id+'" aria-label="التصنيف"></td><td><input type="number" min="0" max="100" step="any" style="width:90px" value="'+t.w+'" data-a="tw" data-v="'+t.id+'" aria-label="الوزن"></td><td><select data-a="tt" data-v="'+t.id+'" aria-label="النوع"><option value="0"'+(t.a?'':' selected')+'>ملف يُرفع</option><option value="1"'+(t.a?' selected':'')+'>حضور (علامة صح)</option></select></td><td><select data-a="ts" data-v="'+t.id+'" aria-label="النطاق">'+so.replace('value="'+(t.m||'')+'"','value="'+(t.m||'')+'" selected')+'</select></td><td class="np"><button class="btn r" data-a="dt" data-v="'+t.id+'">حذف</button></td></tr>';});
if(!T.length)h+='<tr><td colspan="7" style="color:var(--mu)">لا توجد ملفات مطلوبة لهذا الشهر. أضف أول ملف من النموذج أدناه.</td></tr>';
h+='</table></div></div><div class="card np"><h3>إضافة ملف مطلوب</h3><div class="row"><input id="tn" placeholder="اسم الملف المطلوب" style="flex:2;min-width:220px"><input id="tc" placeholder="التصنيف (مثل: التعليم والتعلم)" style="flex:1;min-width:150px"><input id="tw" type="number" min="0" max="100" step="any" placeholder="الوزن %" style="width:110px"><select id="tk" aria-label="النوع"><option value="0">ملف يُرفع</option><option value="1">حضور (علامة صح)</option></select><select id="ts" aria-label="النطاق">'+so+'</select><button class="btn" data-a="at">إضافة</button></div></div>';
return h;}

function gname(c){return S.names[CODES.indexOf(c)];}
function pmon(m){var i=-1;MS.forEach(function(x,j){if(x[0]===m)i=j;});return i>0?MS[i-1][0]:null;}
function tn(t){return esc(t.n)+' (وزن '+t.w+'%)';}
function ana(c,m){var s=st(c,m),T=tfor(m),miss=[],ret=[],pend=[],part=[],sug=[],str=[],full=0,W=function(a,b){return b.w-a.w;};
var missA=[],att=0;T.forEach(function(t){var u=S.up[c+'|'+m+'|'+t.id];if(t.a){if(u)att++;else missA.push(t);return;}if(!u)miss.push(t);else if(u.s==='r')ret.push(t);else if(u.s==='p')pend.push(t);else if(qv(u)<100)part.push([t,qv(u)]);else full++;});
miss.sort(W);ret.sort(W);part.sort(function(a,b){return b[0].w-a[0].w;});
var pm=pmon(m),ps=pm?st(c,pm):null,d=ps&&(ps.up>0||ps.r>0)?s.pct-ps.pct:null,started=s.up>0||s.r>0;
if(!started&&T.length)sug.push('لم ترفع الكلية أي ملف هذا الشهر؛ يُوصى بتكليف وكيل الكلية للجودة بوضع جدول زمني عاجل للرفع، مع البدء بالملفات الأعلى وزنًا: '+miss.slice(0,3).map(tn).join('، ')+'.');
else if(miss.length)sug.push('استكمال رفع الملفات الناقصة ('+miss.length+'): '+miss.map(tn).join('، ')+'.');
if(missA.length)sug.push('لم يُسجَّل '+missA.map(function(t){return '«'+esc(t.n)+'» (وزن '+t.w+'%)';}).join('، ')+' هذا الشهر؛ يُوصى بالالتزام بالحضور الشهري.');
if(ret.length)sug.push('معالجة ملاحظات المراجعة وإعادة رفع: '+ret.map(tn).join('، ')+'.');
if(part.length)sug.push('رفع نسبة استيفاء الملفات التالية إلى 100%: '+part.map(function(x){return esc(x[0].n)+' (الاستيفاء الحالي '+x[1]+'%)';}).join('، ')+'.');
if(d!==null&&d<0)sug.push('تراجع الإنجاز '+Math.abs(d)+' نقطة عن الشهر السابق (من '+ps.pct+'% إلى '+s.pct+'%)؛ يُوصى بتحليل أسباب التراجع ومعالجتها.');
var kb=[],kn=0;S.kpis.forEach(function(k){var v=S.kv[c+'|'+m+'|'+k.id];if(v===undefined)kn++;else if(v<k.t)kb.push(esc(k.n)+' (المحقق '+v+' من مستهدف '+k.t+' '+esc(k.u)+')');});
if(S.kpis.length&&kn===S.kpis.length)sug.push('إدخال قيم مؤشرات الأداء للشهر (لم يُدخل أي مؤشر من '+S.kpis.length+').');
else{if(kn)sug.push('استكمال إدخال '+kn+' من مؤشرات الأداء.');if(kb.length)sug.push('وضع إجراءات تصحيحية للمؤشرات الأقل من المستهدف: '+kb.join('، ')+'.');}
if(!plan(c).length)sug.push('إدخال الخطة التنفيذية للكلية في المنصة (لا توجد أنشطة مسجلة حتى الآن).');
if(started&&s.pct<40)sug.push('عقد اجتماع متابعة مع عميد الكلية ووكيل الجودة لوضع خطة تحسين عاجلة.');
else if(started&&s.pct<60)sug.push('متابعة أسبوعية مع منسق الجودة بالكلية حتى بلوغ تقدير جيد على الأقل.');
if(att)str.push('الالتزام بحضور المجلس التنفيذي لمركز ضمان الجودة.');
if(full)str.push('اعتماد '+full+' ملف باستيفاء كامل.');
if(d!==null&&d>0)str.push('تحسّن الإنجاز '+d+' نقطة عن الشهر السابق.');
if(s.pct>=90)str.push('مستوى إنجاز ممتاز يُوصى بالحفاظ عليه ونشر الممارسات الجيدة منه.');
var nx=pnext(s.pct),mb=minBand();
if(started&&prate(s.pct)===0&&mb)sug.push('الإنجاز أقل من الحد الأدنى للصرف ('+mb+'%) فلا تُصرف المكافأة الشهرية للوحدة هذا الشهر؛ يلزم رفع الإنجاز '+(mb-s.pct)+' نقطة على الأقل.');
else if(started&&nx)sug.push('للانتقال إلى نسبة صرف '+nx[1]+'% يلزم بلوغ إنجاز '+nx[0]+'% (ينقصها '+(nx[0]-s.pct)+' نقطة).');
if(!sug.length)sug.push('لا توجد ملاحظات جوهرية؛ يُوصى بالاستمرار على نفس مستوى الالتزام.');
return{rate:prate(s.pct),amt:pamt(s.pct),s:s,miss:miss,ret:ret,pend:pend,part:part,sug:sug,str:str,d:d,started:started};}
function gt(a,w){return a.started?(w?gr(a.s.pct)[0]:tag(a.s.pct)):(w?'لم يبدأ':'<span class="tag sm">لم يبدأ</span>');}
function dtx(d){return d===null?'—':d>0?'▲ '+d:d<0?'▼ '+Math.abs(d):'0';}
function repHead(m,w){var t='مركز ضمان الجودة والتطوير المستمر - جامعة مدينة السادات';
return w?'<h1 style="text-align:center">'+t+'</h1><h2 style="text-align:center">المنصة الذكية لنظم ضمان الجودة</h2><h2 style="text-align:center">التقرير الشهري المجمع – '+mlabel()+'</h2><p style="text-align:center">تاريخ الإصدار: '+new Date().toLocaleDateString('ar-EG')+'</p>'
:'<div class="card rh" style="text-align:center"><img class="lgn" src="assets/logo.png" alt="شعار المركز"><h2 style="margin-bottom:2px">'+t+'</h2><div style="font-weight:600;color:var(--pr)">المنصة الذكية لنظم ضمان الجودة</div><h3 style="margin:10px 0 0">التقرير الشهري المجمع – '+mlabel()+'</h3><div style="color:var(--mu)">تاريخ الإصدار: '+new Date().toLocaleDateString('ar-EG')+'</div></div>';}
function repSec(c,m,w,ed){var a=ana(c,m),s=a.s,tb=w?' dir="rtl" border="1" cellpadding="5" style="border-collapse:collapse;width:100%"':'',nt=S.notes[c+'|'+m]||'';
var h=(w?'<hr>':'<div class="card rc">')+'<h3>'+c+' – '+esc(gname(c))+' &nbsp;|&nbsp; الإنجاز المعتمد '+s.pct+'% &nbsp;|&nbsp; '+gt(a,w)+'</h3>';
h+='<p>ملفات معتمدة '+s.a+' من '+s.n+' · بانتظار المراجعة '+s.p+' · معادة للتعديل '+s.r+' · لم تُرفع '+a.miss.length+' · التغير عن الشهر السابق: '+dtx(a.d)+' نقطة.</p>';
h+='<p><b>نسبة الصرف المستحقة: '+a.rate+'%</b> · المكافأة الشهرية المستحقة للوحدة '+fm(a.amt)+' جنيه من '+fm(ptot())+' جنيه (وفق ضوابط كتيب المهام والمكافآت).</p>';
if(a.str.length)h+='<b>نقاط القوة</b><ul>'+a.str.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul>';
h+='<b>مقترحات التحسين</b><ol>'+a.sug.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ol>';
if(ed){h+='<label class="np" style="display:block;font-weight:600;margin-top:8px">ملاحظات ومقترحات إضافية من المركز (تظهر للكلية وفي التقرير المطبوع)</label><textarea class="np" rows="2" data-a="note" data-v="'+c+'|'+m+'" aria-label="ملاحظات المركز للكلية '+c+'">'+esc(nt)+'</textarea>'+(nt?'<p class="po"><b>ملاحظات المركز:</b> '+esc(nt).replace(/\n/g,'<br>')+'</p>':'');}
else if(nt)h+='<p><b>ملاحظات المركز:</b> '+esc(nt).replace(/\n/g,'<br>')+'</p>';
return h+(w?'':'</div>');}
function repSum(m,w){var tb=w?' dir="rtl" border="1" cellpadding="5" style="border-collapse:collapse;width:100%"':'',rows=CODES.map(function(c){var a=ana(c,m);a.c=c;return a;}),
sorted=rows.slice().sort(function(x,y){return y.s.pct-x.s.pct;}),
avg=Math.round(rows.reduce(function(t,r){return t+r.s.pct;},0)/CODES.length),sub=rows.filter(function(r){return r.started;}).length,
pend=rows.reduce(function(t,r){return t+r.pend.length;},0),T=tfor(m),
h='<div'+(w?'':' class="card rc"')+'><h3>أولًا: ملخص الأداء</h3><p>متوسط الإنجاز المعتمد للجامعة <b>'+avg+'%</b> · كليات رفعت ملفات: <b>'+sub+' من '+CODES.length+'</b> · ملفات بانتظار مراجعة المركز: <b>'+pend+'</b></p><div class="tw"><table'+tb+'><tr><th>الترتيب</th><th>الكود</th><th>الكلية</th><th>الإنجاز المعتمد</th><th>التقدير</th><th>معتمد / مطلوب</th><th>التغير عن الشهر السابق</th><th>نسبة الصرف</th><th>المستحق (جنيه)</th></tr>';
sorted.forEach(function(r,i){h+='<tr><td>'+(i+1)+'</td><td>'+r.c+'</td><td>'+esc(gname(r.c))+'</td><td><b>'+r.s.pct+'%</b></td><td>'+gt(r,w)+'</td><td>'+r.s.a+' / '+r.s.n+'</td><td>'+dtx(r.d)+'</td><td><b>'+r.rate+'%</b></td><td>'+fm(r.amt)+'</td></tr>';});
h+='<tr><td colspan="8"><b>إجمالي المكافآت المستحقة للوحدات هذا الشهر</b></td><td><b>'+fm(rows.reduce(function(t,r){return t+r.amt;},0))+'</b></td></tr></table></div></div>';
var g=[],ns=rows.filter(function(r){return !r.started;}),low=rows.filter(function(r){return r.started&&r.s.pct<60;}),top=sorted.filter(function(r){return r.s.pct>=75;}).slice(0,3),worst=null,wc=0;
T.forEach(function(t){var n=CODES.filter(function(c){var u=S.up[c+'|'+m+'|'+t.id];return !u||u.s!=='a';}).length;if(n>wc){wc=n;worst=t;}});
if(ns.length)g.push('التواصل العاجل مع الكليات التي لم تبدأ الرفع: '+ns.map(function(r){return esc(gname(r.c));}).join('، ')+'.');
if(low.length)g.push('متابعة خاصة للكليات التي يقل إنجازها المعتمد عن 60%: '+low.map(function(r){return esc(gname(r.c))+' ('+r.s.pct+'%)';}).join('، ')+'.');
if(worst&&wc>0)g.push('أكثر الملفات تأخرًا: «'+esc(worst.n)+'» لم يُعتمد من '+wc+' كلية؛ يُوصى بتذكير الكليات بموعده وتوضيح متطلباته.');
if(pend)g.push('الانتهاء من مراجعة '+pend+' ملف بانتظار المركز حتى لا يتأخر احتساب إنجاز الكليات.');
if(top.length)g.push('الاستفادة من تجربة الكليات الأعلى أداءً ('+top.map(function(r){return esc(gname(r.c));}).join('، ')+') ونشر ممارساتها.');
if(!g.length)g.push('لا توجد توصيات عامة هذا الشهر.');
return h+'<div'+(w?'':' class="card rc"')+'><h3>ثانيًا: توصيات عامة للجامعة</h3><ol>'+g.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ol></div><h3'+(w?'':' style="margin:18px 0 10px"')+'>ثالثًا: تقرير كل كلية ومقترحات التحسين</h3>';}
function repBar(){return '<div class="row np" style="margin-bottom:14px"><select data-a="mon" aria-label="الشهر">'+mopts()+'</select><button class="btn o" data-a="pdf">طباعة / حفظ PDF</button><button class="btn o" data-a="word">تنزيل Word</button></div>';}
function reportV(){return repBar()+repHead(mon,false)+repSum(mon,false)+CODES.map(function(c){return repSec(c,mon,false,true);}).join('');}
function myrepV(c){return repBar()+repHead(mon,false)+repSec(c,mon,false,false);}
function wordDoc(m,cs){var b=repHead(m,true)+(cs.length>1?repSum(m,true):'')+cs.map(function(c){return repSec(c,m,true,false);}).join('');
return '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><title>التقرير الشهري المجمع</title><style>body{font-family:Arial,Tahoma,sans-serif;direction:rtl}th{background:#e6efec}h1,h2,h3{color:#0f5c4d}</style></head><body dir="rtl">'+b+'</body></html>';}
function dlw(n,html){var d=new Blob(['\ufeff'+html],{type:'application/msword;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(d);a.download=n;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(a.href);},1000);}
function attV(){var A=tfor(mon).filter(function(t){return t.a;});if(!A.length)return '';
var h='<div class="card np"><h3>تسجيل حضور المجلس التنفيذي – '+mlabel()+'</h3><p style="color:var(--mu);margin-top:0">ضع علامة صح أمام كل كلية حضرت؛ فتُضاف نسبة الحضور (وزن البند) مباشرة إلى معدل إنجازها الشهري وتدخل في حساب نسبة الصرف.</p>';
A.forEach(function(t){var n=0,cells=CODES.map(function(c,i){var on=S.up[c+'|'+mon+'|'+t.id];if(on)n++;return '<label class="chk"><input type="checkbox" data-a="att" data-v="'+c+'|'+t.id+'"'+(on?' checked':'')+'> '+c+' – '+esc(S.names[i])+'</label>';}).join('');
h+='<div class="row" style="margin-bottom:8px"><b>'+esc(t.n)+'</b><span class="tag sm">الوزن '+t.w+'%</span><span class="tag sg">حضر '+n+' من '+CODES.length+'</span></div><div class="atg">'+cells+'</div>';});
return h+'</div>';}
var pfo='A1';
function payV(){var h='<div class="row np" style="margin-bottom:14px"><h2 style="margin:0">المكافآت ونسب الصرف – '+mlabel()+'</h2><select data-a="mon" aria-label="الشهر">'+mopts()+'</select><button class="btn o" data-a="pdf">طباعة / حفظ PDF</button></div>';
var tot=0;h+='<div class="card"><h3>ملخص صرف المكافآت للوحدات</h3><div class="tw"><table><tr><th>الكود</th><th>الكلية</th><th>الإنجاز المعتمد</th><th>نسبة الصرف</th><th>المبلغ المستحق (جنيه)</th><th>من إجمالي (جنيه)</th></tr>';
CODES.forEach(function(c,i){var s=st(c,mon),r=prate(s.pct),a=pamt(s.pct);tot+=a;h+='<tr><td>'+c+'</td><td>'+esc(S.names[i])+'</td><td><b>'+s.pct+'%</b></td><td><span class="tag '+(r>=100?'sg':r>0?'sy':'sr')+'">'+r+'%</span></td><td>'+fm(a)+'</td><td>'+fm(ptot())+'</td></tr>';});
h+='<tr><td colspan="4"><b>الإجمالي</b></td><td><b>'+fm(tot)+'</b></td><td></td></tr></table></div><p style="color:var(--mu);margin-bottom:0">'+bandsTxt()+'.</p></div>';
h+='<div class="card"><div class="row np" style="margin-bottom:10px"><h3 style="margin:0">نموذج صرف المكافأة الشهرية للوحدة</h3><select data-a="pfo" aria-label="الكلية">'+CODES.map(function(c,i){return '<option value="'+c+'"'+(c===pfo?' selected':'')+'>'+c+' – '+esc(S.names[i])+'</option>';}).join('')+'</select></div>';
var ps=st(pfo,mon),pr=prate(ps.pct);h+='<p><b>'+esc(S.names[CODES.indexOf(pfo)])+'</b> – شهر '+mlabel()+' · معدل الإنجاز <b>'+ps.pct+'%</b> · نسبة الصرف <b>'+pr+'%</b></p><div class="tw"><table><tr><th>م</th><th>الاسم</th><th>الوظيفة بالوحدة</th><th>قيمة المكافأة الشهرية</th><th>معدل الإنجاز</th><th>القيمة وفقًا لمعدلات الإنجاز</th></tr>';
S.pay.roles.forEach(function(r,i){h+='<tr><td>'+(i+1)+'</td><td style="min-width:140px"></td><td>'+esc(r[0])+'</td><td>'+fm(r[1])+'</td><td>'+ps.pct+'%</td><td><b>'+fm(Math.round(r[1]*pr/100))+'</b></td></tr>';});
h+='<tr><td colspan="3"><b>الإجمالي</b></td><td><b>'+fm(ptot())+'</b></td><td></td><td><b>'+fm(pamt(ps.pct))+'</b></td></tr></table></div><p style="color:var(--mu);margin-bottom:0">ضوابط الصرف (من كتيب المهام): لا تُصرف المكافأة سوى مرة واحدة للعضو · تُرسل مستندات الصرف في الأسبوع الأول من كل شهر · لا صرف عند عدم الالتزام بتشكيل الوحدة طبقًا للائحة الموحدة · لا صرف للعمداء والوكلاء في حال قيامهم بمهام رئيس إحدى لجان الوحدة · الالتزام بنموذج استمارة الصرف.</p></div>';
h+='<div class="card np"><h3>شرائح نسبة الصرف</h3><p style="color:var(--mu);margin-top:0">تُطبَّق نسبة أعلى شريحة بلغها الإنجاز المعتمد، وما دون أدنى شريحة لا تُصرف له مكافأة.</p><div class="tw"><table><tr><th>إذا بلغ الإنجاز (%) فأكثر</th><th>تُصرف نسبة (%)</th><th></th></tr>';
S.pay.bands.forEach(function(b,i){h+='<tr><td><input type="number" min="0" max="100" step="any" style="width:110px" value="'+b[0]+'" data-a="pbm" data-v="'+i+'" aria-label="حد الإنجاز"></td><td><input type="number" min="0" max="100" step="any" style="width:110px" value="'+b[1]+'" data-a="pbr" data-v="'+i+'" aria-label="نسبة الصرف"></td><td><button class="btn r" data-a="delb" data-v="'+i+'">حذف</button></td></tr>';});
h+='</table></div><div class="row" style="margin-top:8px"><input id="nbm" type="number" placeholder="الإنجاز من %" style="width:150px"><input id="nbr" type="number" placeholder="نسبة الصرف %" style="width:150px"><button class="btn" data-a="addb">إضافة شريحة</button></div></div>';
h+='<div class="card np"><h3>قيمة المكافأة الشهرية للوظائف بالوحدة (عند صرف 100%)</h3><div class="tw"><table><tr><th>م</th><th>الوظيفة بالوحدة</th><th>القيمة (جنيه)</th><th></th></tr>';
S.pay.roles.forEach(function(r,i){h+='<tr><td>'+(i+1)+'</td><td><input style="min-width:280px" value="'+esc(r[0])+'" data-a="prn" data-v="'+i+'" aria-label="الوظيفة"></td><td><input type="number" min="0" step="any" style="width:110px" value="'+r[1]+'" data-a="pra" data-v="'+i+'" aria-label="القيمة"></td><td><button class="btn r" data-a="delr" data-v="'+i+'">حذف</button></td></tr>';});
return h+'<tr><td colspan="2"><b>الإجمالي للوحدة</b></td><td><b>'+fm(ptot())+'</b></td><td></td></tr></table></div><div class="row" style="margin-top:8px"><input id="nrn" placeholder="الوظيفة" style="flex:1;min-width:200px"><input id="nra" type="number" min="0" placeholder="القيمة" style="width:130px"><button class="btn" data-a="addr">إضافة وظيفة</button></div></div>';}
function revV(c){var i=CODES.indexOf(c),h='<div class="card" id="rv"><h3>مراجعة ملفات '+esc(S.names[i])+' – '+mlabel()+'</h3>';
tfor(mon).forEach(function(t){var u=S.up[c+'|'+mon+'|'+t.id];if(t.a){h+='<div class="task"><div>'+esc(t.n)+' <span class="tag sm">الوزن '+t.w+'%</span>'+(u?' <span class="tag sg">+'+t.w+'%</span>':'')+'<small>حضور — يُسجَّل بعلامة صح</small></div><label class="chk"><input type="checkbox" data-a="att" data-v="'+c+'|'+t.id+'"'+(u?' checked':'')+'> حضر</label></div>';return;}h+='<div class="task"><div>'+esc(t.n)+' <span class="tag sm">الوزن '+t.w+'%</span>'+(u&&u.s==='a'?' <span class="tag sg">استيفاء '+qv(u)+'% ← '+earn(t,u)+' من '+t.w+'</span>':'')+'<small>'+(u?'الملف: '+esc(u.n)+' · '+u.z+' ك.ب · '+u.d:'لم يُرفع ملف')+'</small></div><div class="row">'+(u?stag(u.s)+'<label style="display:flex;gap:6px;align-items:center">نسبة الاستيفاء <input type="number" min="0" max="100" step="any" id="q_'+c+'_'+t.id+'" value="'+(u.s==='a'?qv(u):100)+'" style="width:80px" dir="ltr" aria-label="نسبة استيفاء الملف"> %</label><button class="btn g" data-a="ok" data-v="'+c+'|'+t.id+'">'+(u.s==='a'?'تحديث الاستيفاء':'اعتماد')+'</button>'+(u.s!=='r'?'<button class="btn r" data-a="no" data-v="'+c+'|'+t.id+'">إعادة للتعديل</button>':''):'')+'</div></div>';});
return h+'</div>';}
function stag(s){return s==='a'?'<span class="tag sg">معتمد</span>':s==='p'?'<span class="tag sy">بانتظار المراجعة</span>':'<span class="tag sr">معاد للتعديل</span>';}
function mineV(c){var s=st(c,mon),h='<div class="row" style="margin-bottom:14px"><h2 style="margin:0">مهام الشهر</h2><select data-a="mon" aria-label="الشهر">'+mopts()+'</select></div>';
h+='<div class="card row" style="gap:24px"><div><div class="big">'+s.pct+'%</div><span style="color:var(--mu)">الإنجاز المعتمد</span></div><div>'+(s.up?tag(s.pct):'<span class="tag sm">لم يبدأ</span>')+'<div style="color:var(--mu);margin-top:6px">معتمد '+s.a+' · بانتظار المراجعة '+s.p+' · معاد '+s.r+' من '+s.n+' ملفات · مجموع الأوزان '+s.W+'% · نسبة الصرف المستحقة حاليًا <b>'+prate(s.pct)+'%</b></div></div></div><div class="card">';
tfor(mon).forEach(function(t){var u=S.up[c+'|'+mon+'|'+t.id];if(t.a){h+='<div class="task"><div>'+esc(t.n)+' <span class="tag sm">الوزن '+t.w+'%</span>'+(u?' <span class="tag sg">+'+t.w+'%</span>':'')+'<small>'+esc(t.c)+' · يسجّل المركز حضور الكلية</small></div><div class="row">'+(u?'<span class="tag sg">حضر ✓</span>':'<span class="tag sm">لم يُسجَّل الحضور</span>')+'</div></div>';return;}h+='<div class="task"><div>'+esc(t.n)+' <span class="tag sm">الوزن '+t.w+'%</span>'+(u&&u.s==='a'?' <span class="tag sg">استيفاء '+qv(u)+'% ← '+earn(t,u)+' من '+t.w+'</span>':'')+'<small>'+esc(t.c)+(u?' · '+esc(u.n)+' · '+u.d:'')+'</small></div><div class="row">'+(u?stag(u.s):'<span class="tag sm">لم يُرفع</span>')+'<label class="btn o" style="cursor:pointer">'+(u?'استبدال الملف':'رفع ملف')+'<input type="file" class="hid" data-t="'+t.id+'"></label></div></div>';});
return h+'</div>';}
function accV(){var h='<div class="card"><h2>الكليات والحسابات</h2><p style="color:var(--mu);margin-top:0">يمكنك تعديل اسم أي كلية. كلمة مرور كل كلية: الكود بحروف صغيرة ثم @2026 (مثل a1@2026).</p><div class="tw"><table><tr><th>الكود</th><th>اسم الكلية</th><th>كلمة المرور</th></tr>';
CODES.forEach(function(c,i){h+='<tr><td>'+c+'</td><td><input value="'+esc(S.names[i])+'" data-a="nm" data-v="'+i+'" aria-label="اسم الكلية '+c+'"></td><td dir="ltr" style="text-align:right">'+pw(c)+'</td></tr>';});
return h+'</table></div><p><button class="btn o" data-a="reset">مسح كل الملفات والبيانات التجريبية</button></p></div>';}
function xb(k){return '<div class="row np" style="margin-bottom:14px"><button class="btn o" data-a="x" data-v="'+k+'">تصدير Excel</button><button class="btn o" data-a="pdf">طباعة / حفظ PDF</button></div>';}
function plan(c){return S.plan[c]||(S.plan[c]=[]);}
function fm(n){return Number(n).toLocaleString('ar-EG');}
function plansV(){var h='<div class="row np" style="margin-bottom:14px"><h2 style="margin:0">خطط الكليات</h2><select data-a="pf" aria-label="الكلية">'+CODES.map(function(c,i){return '<option value="'+c+'"'+(c===pf?' selected':'')+'>'+c+' – '+esc(S.names[i])+'</option>';}).join('')+'</select></div>'+xb('plan');
h+='<div class="card"><h3>ملخص الأهداف والأنشطة لكل الكليات</h3><div class="tw"><table><tr><th>الكلية</th>'+SECS.map(function(n){return '<th>أهداف '+n+'</th>';}).join('')+'<th>الأهداف</th><th>الأنشطة</th><th>التكلفة</th></tr>';
CODES.forEach(function(c,i){var s=pst(c);h+='<tr><td>'+c+' – '+esc(S.names[i])+'</td>'+s.by.map(function(b){return '<td>'+Object.keys(b.o).length+'</td>';}).join('')+'<td><b>'+s.obj+'</b></td><td>'+s.act+'</td><td>'+fm(s.cost)+'</td></tr>';});
return h+'</table></div></div>'+planV(pf);}
function kc(v,t,sv){if(v===undefined||v==='')return '<span class="tag sm">—</span>';var r=v/t*100;return '<span class="tag '+(r>=100?'sg':r>=80?'sy':'sr')+'">'+(sv?v:(r>=100?'محقق':r>=80?'قريب':'أقل'))+'</span>';}
function kpiV(c){var h='<div class="row" style="margin-bottom:14px"><h2 style="margin:0">مؤشرات الأداء – '+mlabel()+'</h2><select data-a="mon" aria-label="الشهر">'+mopts()+'</select></div>'+xb('kpi')+'<div class="card"><div class="tw"><table><tr><th>المؤشر</th><th>المعادلة</th><th>المستهدف</th><th>القيمة المحققة</th><th>الحالة</th></tr>';
S.kpis.forEach(function(k){var key=c+'|'+mon+'|'+k.id,v=S.kv[key];h+='<tr><td>'+esc(k.n)+'</td><td>'+esc(k.f)+'</td><td>'+k.t+' '+esc(k.u)+'</td><td><input type="number" step="any" style="width:110px" value="'+(v===undefined?'':v)+'" data-a="kv" data-v="'+key+'" aria-label="'+esc(k.n)+'"></td><td>'+kc(v,k.t)+'</td></tr>';});
return h+'</table></div></div>';}
function kpisV(){var h='<div class="row np" style="margin-bottom:14px"><h2 style="margin:0">مؤشرات الأداء (KPIs) – '+mlabel()+'</h2><select data-a="mon" aria-label="الشهر">'+mopts()+'</select></div>'+xb('kpi')+'<div class="card"><div class="tw"><table><tr><th>المؤشر</th><th>المعادلة</th><th>المستهدف</th>'+CODES.map(function(c){return '<th>'+c+'</th>';}).join('')+'<th class="np"></th></tr>';
S.kpis.forEach(function(k){h+='<tr><td>'+esc(k.n)+'</td><td>'+esc(k.f)+'</td><td>'+k.t+' '+esc(k.u)+'</td>'+CODES.map(function(c){return '<td>'+kc(S.kv[c+'|'+mon+'|'+k.id],k.t,1)+'</td>';}).join('')+'<td class="np"><button class="btn r" data-a="dk" data-v="'+k.id+'">حذف</button></td></tr>';});
h+='</table></div></div><div class="card np"><h3>إضافة مؤشر جديد</h3><div class="row">';
[['kn','اسم المؤشر'],['kf','معادلة الاحتساب'],['kt','المستهدف (رقم)'],['ku','الوحدة (% أو عدد)']].forEach(function(f){h+='<input id="'+f[0]+'" placeholder="'+f[1]+'" style="flex:1;min-width:150px">';});
return h+'<button class="btn" data-a="ak">إضافة</button></div></div>';}
function csv(r){return '\ufeff'+r.map(function(x){return x.map(function(v){return '"'+String(v).replace(/"/g,'""')+'"';}).join(',');}).join('\r\n');}
function dl(n,rows){var d=new Blob([csv(rows)],{type:'text/csv;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(d);a.download=n;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(a.href);},1000);}
function exportK(k){var cs=user==='ADMIN'?CODES:[user],r;
if(k==='dash'){r=[['الكود','الكلية','الشهر','ملفات مرفوعة','ملفات معتمدة','نسبة الإنجاز %','التقدير','نسبة الصرف %','المبلغ المستحق']];CODES.forEach(function(c,i){var s=st(c,mon);r.push([c,S.names[i],mlabel(),s.up,s.a,s.pct,s.up?gr(s.pct)[0]:'لم يبدأ',prate(s.pct),pamt(s.pct)]);});}
else if(k==='plan'){r=[['الكود','الكلية','القطاع','الهدف','النشاط','مسؤول التنفيذ','التكلفة المعتمدة']];cs.forEach(function(c){plan(c).forEach(function(x){r.push([c,S.names[CODES.indexOf(c)],SECS[x.s],x.o,x.a,x.r,x.c]);});});}
else{r=[['الكود','الكلية','المؤشر','المعادلة','المستهدف','القيمة المحققة','الشهر']];cs.forEach(function(c){S.kpis.forEach(function(q){var v=S.kv[c+'|'+mon+'|'+q.id];r.push([c,S.names[CODES.indexOf(c)],q.n,q.f,q.t+' '+q.u,v===undefined?'':v,mlabel()]);});});}
dl('usc-'+k+'-'+mon+'.csv',r);}
function aboutV(){return '<div class="card"><h2>عن النظام</h2><p><b>الرؤية:</b> منظومة رقمية ذكية تجعل متابعة تنفيذ المهام والخطط وضمان الجودة بالجامعة لحظية وشفافة ومستندة إلى البيانات.</p><p><b>دورة العمل:</b> تخطيط ← إسناد ← تنفيذ ورفع الشواهد ← تقرير الكلية ← مراجعة مركز الجودة ← قياس وقرار ← تحسين.</p><p><b>طريقة احتساب الدرجة:</b> نسبة الإنجاز الشهرية = مجموع (وزن كل ملف × نسبة استيفائه) ÷ مجموع أوزان الملفات المطلوبة في الشهر. يحدد المسئول الرئيسي الوزن، ثم يحدد نسبة الاستيفاء بعد فحص الملف المرفوع (من 0 إلى 100%). الملفات التي لم تُراجع بعد لا تُحتسب حتى تُعتمد.</p><p><b>حضور المجلس التنفيذي:</b> يسجّله المسئول بعلامة صح أمام كل كلية حضرت، فيُضاف وزن البند مباشرة إلى معدل الإنجاز.</p><p><b>نسبة صرف المكافأة (من كتيب المهام):</b> '+bandsTxt()+'.</p><p>التقدير: 90% فأكثر ممتاز · 75% جيد جدًا · 60% جيد · 40% مقبول · أقل من ذلك يحتاج تحسين.</p><h3>مهام الرفع – '+mlabel()+'</h3><ul>'+tfor(mon).map(function(t){return '<li>'+esc(t.n)+' <span style="color:var(--mu)">('+esc(t.c)+') · الوزن '+t.w+'%</span></li>';}).join('')+'</ul></div>';}
document.addEventListener('click',function(e){var b=e.target.closest('[data-a]');if(!b)return;var a=b.dataset.a,v=b.dataset.v;
if(a==='in'){var c=document.getElementById('u').value.trim().toUpperCase(),p=document.getElementById('p').value;if((c==='ADMIN'||CODES.indexOf(c)>-1)&&p===pw(c)){setUser(c);rev=null;render();}else document.getElementById('e').textContent='الكود أو كلمة المرور غير صحيحة.';}
else if(a==='out'){setUser(null);render();}
else if(a==='tab'){tab=v;rev=null;render();}
else if(a==='rev'){rev=v;render();var r=document.getElementById('rv');if(r)r.scrollIntoView({behavior:'smooth'});}
else if(a==='ok'||a==='no'){var q=v.split('|'),u=S.up[q[0]+'|'+mon+'|'+q[1]];if(u){if(a==='ok'){var qe=document.getElementById('q_'+q[0]+'_'+q[1]),qn=qe?parseFloat(qe.value):100;u.q=isNaN(qn)?100:Math.min(100,Math.max(0,qn));u.s='a';}else{u.s='r';delete u.q;}save();render();var r2=document.getElementById('rv');if(r2)r2.scrollIntoView({block:'nearest'});}}
else if(a==='ap2'){var g3=function(i){return document.getElementById(i).value.trim();};if(g3('pg')&&g3('pa')){plan(v).push({s:+g3('ps'),g:g3('pg'),o:g3('po'),a:g3('pa'),r:g3('pr'),tm:g3('pt'),c:+g3('pc')||0,k:g3('pk')});save();render();}}
else if(a==='x'){exportK(v);}
else if(a==='pdf'){window.print();}
else if(a==='word'){dlw('usc-report-'+mon+'.doc',wordDoc(mon,user==='ADMIN'?CODES:[user]));}
else if(a==='at'){var g4=function(i){return document.getElementById(i).value.trim();},w4=parseFloat(g4('tw'));if(g4('tn')){S.tasks.push({id:'t'+Date.now(),n:g4('tn'),c:g4('tc')||'عام',w:isNaN(w4)?0:Math.min(100,Math.max(0,w4)),m:g4('ts'),a:g4('tk')==='1'?1:0});save();render();}}
else if(a==='dt'){if(confirm('سيتم حذف هذا الملف المطلوب وكل ما رفعته الكليات عليه. هل أنت متأكد؟')){S.tasks=S.tasks.filter(function(x){return x.id!==v;});Object.keys(S.up).forEach(function(k){if(k.split('|')[2]===v)delete S.up[k];});save();render();}}
else if(a==='addb'){var bm=parseFloat(document.getElementById('nbm').value),br=parseFloat(document.getElementById('nbr').value);if(!isNaN(bm)&&!isNaN(br)){S.pay.bands.push([Math.min(100,Math.max(0,bm)),Math.min(100,Math.max(0,br))]);save();render();}}
else if(a==='delb'){S.pay.bands.splice(+v,1);save();render();}
else if(a==='addr'){var rn=document.getElementById('nrn').value.trim(),ra=parseFloat(document.getElementById('nra').value);if(rn&&!isNaN(ra)&&ra>=0){S.pay.roles.push([rn,ra]);save();render();}}
else if(a==='delr'){S.pay.roles.splice(+v,1);save();render();}
else if(a==='dp'){var q2=v.split('|');plan(q2[0]).splice(+q2[1],1);save();render();}
else if(a==='ak'){var g2=function(i){return document.getElementById(i).value.trim();},t2=parseFloat(g2('kt'));if(g2('kn')&&t2>0){S.kpis.push({id:'k'+Date.now(),n:g2('kn'),f:g2('kf')||'—',t:t2,u:g2('ku')});save();render();}}
else if(a==='dk'){S.kpis=S.kpis.filter(function(k){return k.id!==v;});save();render();}
else if(a==='reset'){if(confirm('سيتم حذف كل الملفات المرفوعة. هل أنت متأكد؟')){S.up={};save();render();}}});
document.addEventListener('change',function(e){var t=e.target;
if(t.dataset.a==='mon'){mon=t.value;render();}
else if(t.dataset.a==='pf'){pf=t.value;render();}
else if(t.dataset.a==='imp'&&t.files[0]){var sc=+document.getElementById('pim').value,tc=t.dataset.v;parseDocx(t.files[0],function(r){if(!r||!r.length){imsg='لم أجد جدولًا بأعمدة النموذج (م، الهدف الإجرائي، أنشطة التنفيذ...) في الملف. تأكد أنه ملف Word بامتداد docx.';}else{r.forEach(function(x){x.s=sc;plan(tc).push(x);});imsg='تم استيراد '+r.length+' نشاطًا من الملف. راجعها وعدّل أي بند بالحذف والإضافة.';save();}render();});}
else if(t.dataset.a==='tn'||t.dataset.a==='tc'||t.dataset.a==='tw'||t.dataset.a==='ts'){var tk=S.tasks.filter(function(x){return x.id===t.dataset.v;})[0];if(tk){var f2=t.dataset.a;if(f2==='tn')tk.n=t.value.trim()||tk.n;else if(f2==='tc')tk.c=t.value.trim()||'عام';else if(f2==='tw'){var w5=parseFloat(t.value);tk.w=isNaN(w5)?0:Math.min(100,Math.max(0,w5));}else tk.m=t.value;save();if(f2==='tw'||f2==='ts')render();}}
else if(t.dataset.a==='att'){var aq=t.dataset.v.split('|'),ak=aq[0]+'|'+mon+'|'+aq[1];if(t.checked)S.up[ak]={n:'حضور مسجَّل',z:0,d:new Date().toLocaleDateString('ar-EG'),s:'a',q:100,att:1};else delete S.up[ak];save();render();}
else if(t.dataset.a==='tt'){var tq=S.tasks.filter(function(x){return x.id===t.dataset.v;})[0];if(tq){tq.a=t.value==='1'?1:0;save();render();}}
else if(t.dataset.a==='pfo'){pfo=t.value;render();}
else if(t.dataset.a==='pbm'||t.dataset.a==='pbr'){var bi=+t.dataset.v,bv=parseFloat(t.value);if(S.pay.bands[bi]&&!isNaN(bv)){S.pay.bands[bi][t.dataset.a==='pbm'?0:1]=Math.min(100,Math.max(0,bv));save();render();}}
else if(t.dataset.a==='prn'||t.dataset.a==='pra'){var ri=+t.dataset.v,rv=t.dataset.a==='prn'?t.value.trim():parseFloat(t.value);if(S.pay.roles[ri]&&rv!==''&&!(t.dataset.a==='pra'&&(isNaN(rv)||rv<0))){S.pay.roles[ri][t.dataset.a==='prn'?0:1]=rv;save();if(t.dataset.a==='pra')render();}}
else if(t.dataset.a==='note'){var nv=t.value.trim();if(nv)S.notes[t.dataset.v]=nv;else delete S.notes[t.dataset.v];save();}
else if(t.dataset.a==='kv'){if(t.value==='')delete S.kv[t.dataset.v];else S.kv[t.dataset.v]=parseFloat(t.value);save();render();}
else if(t.dataset.a==='nm'){S.names[+t.dataset.v]=t.value.trim()||DEF[+t.dataset.v];save();}
else if(t.dataset.t&&t.files[0]){var f=t.files[0],d=new Date();S.up[user+'|'+mon+'|'+t.dataset.t]={n:f.name,z:Math.max(1,Math.round(f.size/1024)),d:d.toLocaleDateString('ar-EG'),s:'p'};save();render();}});
document.addEventListener('keydown',function(e){if(e.key==='Enter'&&!user&&e.target.id){var b=document.querySelector('[data-a=in]');if(b)b.click();}});
var imsg='';
function parseDocx(f,cb){var fr=new FileReader();fr.onload=function(){if(!window.JSZip){cb(null);return;}JSZip.loadAsync(fr.result).then(function(z){return z.file('word/document.xml').async('string');}).then(function(x){var W='http://schemas.openxmlformats.org/wordprocessingml/2006/main',d=new DOMParser().parseFromString(x,'application/xml'),body=d.getElementsByTagNameNS(W,'body')[0],out=[],g='',A=Array.prototype,tx=function(n){return A.map.call(n.getElementsByTagNameNS(W,'t'),function(t){return t.textContent;}).join('').trim();};
A.forEach.call(body.children,function(n){if(n.localName==='p'){var s=tx(n);if(s.indexOf('الهدف الاستراتيجي')>-1)g=s.replace(/^.*?الهدف الاستراتيجي\s*:?/,'').trim();}else if(n.localName==='tbl'){A.forEach.call(n.getElementsByTagNameNS(W,'tr'),function(r){var c=A.map.call(r.getElementsByTagNameNS(W,'tc'),tx);if(c.length>=6&&(c[1]||c[2])&&c[2].indexOf('أنشطة التنفيذ')<0)out.push({g:g,o:c[1],a:c[2],r:c[3],tm:c[4],c:parseFloat(String(c[5]).replace(/[^\d.]/g,''))||0,k:c[6]||''});});}});cb(out);}).catch(function(){cb(null);});};fr.readAsArrayBuffer(f);}
function pst(c){var by=SECS.map(function(){return{o:{},a:0,c:0};}),G={},P={},cost=0;plan(c).forEach(function(x){var g=x.g||'—';by[x.s].o[g]=1;by[x.s].a++;by[x.s].c+=x.c;G[x.s+g]=1;P[x.s+g+x.o]=1;cost+=x.c;});return{by:by,obj:Object.keys(G).length,pro:Object.keys(P).length,act:plan(c).length,cost:cost};}
function planV(c){var s=pst(c),i=CODES.indexOf(c),p=plan(c),T='<td style="white-space:normal">',h='<div class="card"><h2>مقدمة الخطة – '+esc(S.names[i])+'</h2><div class="kp"><div><b>'+s.obj+'</b><span>الأهداف الاستراتيجية</span></div><div><b>'+s.pro+'</b><span>الأهداف الإجرائية</span></div><div><b>'+s.act+'</b><span>أنشطة التنفيذ</span></div><div><b>'+fm(s.cost)+'</b><span>التكلفة (جنيه)</span></div></div><div class="tw"><table><tr><th>القطاع</th><th>الأهداف الاستراتيجية</th><th>الأنشطة</th><th>التكلفة</th></tr>';
SECS.forEach(function(n,j){var b=s.by[j];h+='<tr><td>'+n+'</td><td>'+Object.keys(b.o).length+'</td><td>'+b.a+'</td><td>'+fm(b.c)+'</td></tr>';});
h+='</table></div></div>';var gs=[];p.forEach(function(x,j){var k=x.s+'|'+(x.g||'—'),f=gs.filter(function(q){return q.k===k;})[0];if(!f){f={k:k,g:x.g||'—',s:x.s,r:[]};gs.push(f);}f.r.push([x,j]);});
if(!gs.length)h+='<div class="card" style="color:var(--mu)">لا توجد أنشطة بعد. استورد الخطة من ملف Word أو أضف أول نشاط من النموذج أدناه.</div>';
gs.forEach(function(G){h+='<div class="card"><h3>الهدف الاستراتيجي: '+esc(G.g)+' <span class="tag sm">'+SECS[G.s]+'</span></h3><div class="tw"><table><tr><th>م</th><th>الهدف الإجرائي</th><th>أنشطة التنفيذ</th><th>مسئول التنفيذ</th><th>توقيت التنفيذ</th><th>التكلفة بالجنيه</th><th>مؤشرات المتابعة والتقويم</th><th class="np"></th></tr>';G.r.forEach(function(q,n){var x=q[0];h+='<tr><td>'+(n+1)+'</td>'+T+esc(x.o)+'</td>'+T+esc(x.a)+'</td>'+T+esc(x.r||'—')+'</td>'+T+esc(x.tm||'—')+'</td><td>'+fm(x.c)+'</td>'+T+esc(x.k||'—')+'</td><td class="np"><button class="btn r" data-a="dp" data-v="'+c+'|'+q[1]+'">حذف</button></td></tr>';});h+='</table></div></div>';});
var so=SECS.map(function(n,j){return '<option value="'+j+'">'+n+'</option>';}).join('');
h+='<div class="card np"><h3>استيراد الخطة من ملف Word</h3><p style="color:var(--mu);margin-top:0">ارفع ملف الخطة المكتوب بنفس جداول النموذج (م – الهدف الإجرائي – أنشطة التنفيذ – مسئول التنفيذ – توقيت التنفيذ – التكلفة – مؤشرات المتابعة)، وسيقرأ النظام الهدف الاستراتيجي من السطر الذي يسبق كل جدول.</p><div class="row"><select id="pim" aria-label="قطاع الخطة المستوردة">'+so+'</select><label class="btn" style="cursor:pointer">اختيار ملف الخطة (docx)<input type="file" class="hid" accept=".docx" data-a="imp" data-v="'+c+'"></label></div>'+(imsg?'<p>'+esc(imsg)+'</p>':'')+'</div>';
h+='<div class="card np"><h3>إضافة نشاط يدويًا</h3><div class="row"><select id="ps">'+so+'</select>';
[['pg','الهدف الاستراتيجي'],['po','الهدف الإجرائي'],['pa','أنشطة التنفيذ'],['pr','مسئول التنفيذ'],['pt','توقيت التنفيذ'],['pk','مؤشرات المتابعة والتقويم']].forEach(function(f){h+='<input id="'+f[0]+'" placeholder="'+f[1]+'" style="flex:1;min-width:150px">';});
imsg='';return h+'<input id="pc" type="number" min="0" placeholder="التكلفة بالجنيه" style="flex:1;min-width:150px"><button class="btn" data-a="ap2" data-v="'+c+'">إضافة</button></div></div>';}
var _ex=exportK;exportK=function(k){if(k!=='plan')return _ex(k);var r=[['الكود','الكلية','القطاع','الهدف الاستراتيجي','م','الهدف الإجرائي','أنشطة التنفيذ','مسئول التنفيذ','توقيت التنفيذ','التكلفة بالجنيه','مؤشرات المتابعة والتقويم']];(user==='ADMIN'?CODES:[user]).forEach(function(c){var cnt={};plan(c).forEach(function(x){var q=x.s+'|'+x.g;cnt[q]=(cnt[q]||0)+1;r.push([c,S.names[CODES.indexOf(c)],SECS[x.s],x.g||'',cnt[q],x.o,x.a,x.r||'',x.tm||'',x.c,x.k||'']);});});dl('usc-plan.csv',r);};
load();render();
