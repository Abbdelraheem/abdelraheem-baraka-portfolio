const $ = (s) => document.querySelector(s);

let pollTimer = null;

async function refreshList() {
  try {
    const res = await fetch('/api/scans');
    const scans = await res.json();
    const box = $('#scans-list');
    if (!scans.length) {
      box.innerHTML = '<div class="empty">لا فحوصات بعد — ابدأ أول فحص من النموذج أعلاه</div>';
      return;
    }
    const running = scans.some((s) => s.status === 'queued' || s.status === 'running');
    box.innerHTML = scans.map((s) => {
      const st = s.status === 'done' ? s.grade || 'done'
        : s.status === 'error' ? 'error' : s.status;
      return `
      <div class="scan-row">
        <div>
          <div class="t">${s.target}</div>
          <div class="muted">${s.client_name || '—'} · ${s.created_at.replace('T', ' ').slice(0, 16)}</div>
        </div>
        <div class="status-chip st-${s.status}">${st}</div>
        <div>${s.status === 'done' ? `<b>${s.findings_count}</b> <span class="muted">نتيجة</span>` : ''}</div>
        <div>${s.status === 'done' ? `خطر ${s.score}` : ''}</div>
        <div class="act">
          ${s.status === 'done' ? `<a href="/scan/${s.id}">التفاصيل</a>` : ''}
          ${s.status === 'queued' || s.status === 'running' ? `<a href="javascript:void(0)" onclick="openModal('${s.id}')">متابعة</a>` : ''}
          <a href="javascript:void(0)" onclick="copyLink('${s.token}')">رابط العميل</a>
          <button onclick="delScan('${s.id}')">حذف</button>
        </div>
      </div>`;
    }).join('');
    if (running) {
      if (!pollTimer) pollTimer = setInterval(refreshList, 3000);
    } else if (pollTimer) {
      clearInterval(pollTimer);
      pollTimer = null;
    }
  } catch (e) { /* dashboard still loading */ }
}

function copyLink(token) {
  navigator.clipboard.writeText(location.origin + '/report/' + token).then(() => {
    alert('تم نسخ رابط تقرير العميل ✓');
  });
}

async function delScan(id) {
  if (!confirm('حذف هذا الفحص نهائياً؟')) return;
  const res = await fetch('/api/scans/' + id, { method: 'DELETE' });
  if (!res.ok) { alert((await res.json()).error || 'تعذر الحذف'); }
  refreshList();
}

$('#scan-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('.btn');
  const msg = $('#form-msg');
  btn.disabled = true;
  msg.textContent = '';
  try {
    const res = await fetch('/api/scans', { method: 'POST', body: new FormData(e.target) });
    const data = await res.json();
    if (!res.ok) { msg.textContent = data.error || 'خطأ في بدء الفحص'; return; }
    msg.textContent = 'بدأ الفحص ✓ — افتح "متابعة" لمشاهدة السجل الحي';
    e.target.reset();
    refreshList();
  } finally {
    btn.disabled = false;
  }
});

let modalTimer = null;
function openModal(id) {
  $('#modal').classList.remove('hidden');
  $('#m-log').textContent = '…';
  const poll = async () => {
    const res = await fetch('/api/scans/' + id);
    const s = await res.json();
    $('#m-title').textContent = s.target;
    $('#m-phase').textContent = 'المرحلة الحالية: ' + (s.phase || '…');
    $('#m-log').textContent = (s.log || []).join('\n');
    if (s.status === 'done' || s.status === 'error') {
      clearInterval(modalTimer);
      if (s.status === 'done') $('#m-phase').textContent = 'اكتمل الفحص ✓ ' + s.findings_count + ' نتيجة';
      else $('#m-phase').textContent = 'فشل الفحص: ' + (s.error || '');
      refreshList();
    }
  };
  clearInterval(modalTimer);
  poll();
  modalTimer = setInterval(poll, 1500);
}
function closeModal() { clearInterval(modalTimer); $('#modal').classList.add('hidden'); }
document.querySelector('.modal .close')?.addEventListener('click', closeModal);
$('#modal')?.addEventListener('click', (e) => { if (e.target.id === 'modal') closeModal(); });

refreshList();
setInterval(refreshList, 5000);
