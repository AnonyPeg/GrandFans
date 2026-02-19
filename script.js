const popups = {
  how: {
    title: '📋 So funktioniert\'s',
    body: `
      <p class="popup-eyebrow">Wie es läuft</p>
      <p class="popup-sub">Alles In-Character auf GrandRP. Kein Account, kein Formular – ein Anruf genügt.</p>
      <div class="psteps">
        <div class="pstep">
          <div class="pstep-num">1</div>
          <div>
            <h4>IC melden</h4>
            <p>Ruf Anatoly Federov unter <strong style="color:#4ca3e8">67-57-875</strong> an oder finde ihn auf GrandRP – alles läuft In-Character.</p>
          </div>
        </div>
        <div class="pstep">
          <div class="pstep-num">2</div>
          <div>
            <h4>Vereinbarung</h4>
            <p>Wir besprechen IC dein Profil, deinen Content-Typ und die Preise pro Inhalt. Alles individuell und diskret.</p>
          </div>
        </div>
        <div class="pstep">
          <div class="pstep-num">3</div>
          <div>
            <h4>Creator werden</h4>
            <p>Du wirst als Creator aufgenommen. Dein Content wird gesperrt – Fans zahlen einmalig pro Inhalt den sie kaufen wollen.</p>
          </div>
        </div>
        <div class="pstep">
          <div class="pstep-num">4</div>
          <div>
            <h4>Verdienen – 50/50</h4>
            <p>Jede Einmalzahlung wird fair geteilt: <strong style="color:#4ca3e8">50% gehen direkt an dich</strong>, 50% an GrandFans. Fans zahlen mit GrandRP In-Game-Währung.</p>
          </div>
        </div>
      </div>
    `
  },
  leistungen: {
    title: '💎 Leistungen',
    body: `
      <p class="popup-eyebrow">Was wir bieten</p>
      <p class="popup-sub">Alles was Creator und Käufer auf GrandFans brauchen – IC abgewickelt.</p>
      <div style="padding:20px 22px;border-radius:18px;background:linear-gradient(135deg,rgba(26,111,212,.15),rgba(108,59,219,.15));border:1px solid rgba(76,163,232,.3);margin-bottom:22px;text-align:center;">
        <div style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#4ca3e8;margin-bottom:10px;">💰 Einnahmen-Aufteilung</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0;margin-bottom:12px;">
          <div style="flex:1;padding:14px;border-radius:12px 0 0 12px;background:linear-gradient(135deg,rgba(26,111,212,.25),rgba(26,111,212,.15));border:1px solid rgba(76,163,232,.3);border-right:none;text-align:center;">
            <div style="font-size:28px;font-weight:900;background:linear-gradient(135deg,#4ca3e8,#9b6fef);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">50%</div>
            <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,.6);margin-top:2px;">Creator</div>
          </div>
          <div style="padding:10px 14px;background:rgba(255,255,255,.06);border-top:1px solid rgba(255,255,255,.1);border-bottom:1px solid rgba(255,255,255,.1);font-size:16px;">⚡</div>
          <div style="flex:1;padding:14px;border-radius:0 12px 12px 0;background:linear-gradient(135deg,rgba(108,59,219,.25),rgba(108,59,219,.15));border:1px solid rgba(108,59,219,.3);border-left:none;text-align:center;">
            <div style="font-size:28px;font-weight:900;background:linear-gradient(135deg,#9b6fef,#4ca3e8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">50%</div>
            <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,.6);margin-top:2px;">GrandFans</div>
          </div>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,.4);line-height:1.5;">Jede Einmalzahlung wird fair geteilt – 50% direkt an dich, 50% an GrandFans.</div>
      </div>
      <div class="pgrid">
        <div class="pcard">
          <div class="pcard-ico">🔒</div>
          <h4>Exklusiver Content</h4>
          <p>Gesperrte Premium-Inhalte – Fotos, Videos, Stories. Fans zahlen einmalig pro Inhalt.</p>
        </div>
        <div class="pcard">
          <div class="pcard-ico">💳</div>
          <h4>Einmalzahlung</h4>
          <p>Kein Abo, kein Vertrag. Jeder Inhalt hat seinen eigenen Preis – einmalig in GrandRP-Währung.</p>
        </div>
        <div class="pcard">
          <div class="pcard-ico">📈</div>
          <h4>Creator-Wachstum</h4>
          <p>Wir vermarkten dich aktiv auf GrandRP – mehr Reichweite, mehr Käufer, mehr Einnahmen.</p>
        </div>
        <div class="pcard">
          <div class="pcard-ico">🎨</div>
          <h4>Profil-Branding</h4>
          <p>Wir gestalten dein GrandFans-Erscheinungsbild professionell für maximale Attraktivität.</p>
        </div>
        <div class="pcard">
          <div class="pcard-ico">🛡️</div>
          <h4>Diskretion & Schutz</h4>
          <p>Alles läuft IC und vertraulich. Dein Content, deine Konditionen – volle Kontrolle.</p>
        </div>
        <div class="pcard">
          <div class="pcard-ico">⚡</div>
          <h4>Schneller Start</h4>
          <p>Von der ersten IC-Meldung bis zum aktiven Creator – kein Aufwand, direkt loslegen.</p>
        </div>
      </div>
    `
  },
  kontakt: {
    title: '📞 Kontakt',
    body: `
      <p class="popup-eyebrow">Direkter IC-Kontakt</p>
      <p class="popup-sub">Kein Umweg, kein Ticket. Alles läuft In-Character auf GrandRP.</p>
      <div class="contact-wrap">
        <img src="me.png" alt="Anatoly Federov" class="contact-avatar"
             onerror="this.style.background='linear-gradient(135deg,#1a6fd4,#6c3bdb)';this.removeAttribute('src')">
        <div style="text-align:center">
          <div class="contact-name">Anatoly Federov</div>
          <div class="contact-role">Gründer & CEO · GrandFans</div>
        </div>
        <div class="contact-items">
          <div class="contact-item">
            <span style="font-size:17px">📞</span>
            <span>67-57-875</span>
            <button class="copybtn" onclick="copyPhone(this)">Kopieren</button>
          </div>
          <div class="contact-item">
            <span style="font-size:17px">🏙️</span>
            <span>GrandRP – In-Character erreichbar</span>
          </div>
          <div class="contact-item">
            <span style="font-size:17px">💼</span>
            <span>GrandFans – Das OnlyFans von GrandRP</span>
          </div>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,.35);text-align:center;margin-top:4px;line-height:1.6;">
          Keine Online-Registrierung. Alles wird ausschließlich<br>In-Character auf GrandRP abgewickelt.
        </div>
      </div>
    `
  }
};

function switchTab(tab, btn) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  btn.classList.add('active');
}

function openPopup(key) {
  const data = popups[key];
  document.getElementById('popup-title').innerHTML = data.title;
  document.getElementById('popup-body').innerHTML = data.body;
  document.getElementById('popup-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  document.getElementById('popup-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closePopupOutside(e) {
  if (e.target === document.getElementById('popup-overlay')) closePopup();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closePopup(); });

function enterSite() {
  const g = document.getElementById('age-gate');
  g.style.transition = 'opacity .5s ease';
  g.style.opacity = '0';
  setTimeout(() => g.style.display = 'none', 520);
}

function denyAccess() {
  const g = document.getElementById('age-gate');
  g.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:16px;text-align:center;padding:40px;">
    <div style="font-size:52px;">🔞</div>
    <div style="font-size:22px;font-weight:800;color:#fff;">Zugang verweigert</div>
    <div style="font-size:15px;color:rgba(255,255,255,.45);">Diese Seite ist ausschließlich für Personen ab 18 Jahren.</div>
  </div>`;
}

function copyPhone(btn) {
  navigator.clipboard.writeText('67-57-875').then(() => {
    btn.textContent = '✓ Kopiert!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Kopieren'; btn.classList.remove('copied'); }, 2200);
  });
}