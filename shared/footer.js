// Single source for the site footer -- was copy-pasted into every page
// (and missing entirely from the dashboard). The only thing that differs
// per page is how deep it sits relative to the site root, so that's the one
// parameter: basePath is "./" for the root page, "../" for anything one
// level down (dashboard/, login/, member/).
export function footerHtml(basePath) {
  return `
    <footer class="site-footer">
      <div class="footer-grid">
        <div>
          <h3>Heym Lounge</h3>
          <a href="${basePath}">Home</a>
          <a href="${basePath}login/">Leden inloggen</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="mailto:tgl@heymgroep.nl">tgl@heymgroep.nl</a>
          <a href="mailto:info@heymgroep.nl">info@heymgroep.nl</a>
          <a href="tel:+31202807045">020 2807045</a>
        </div>
        <div>
          <h3>Heym Groep</h3>
          <a href="https://heymgroep.nl/" target="_blank" rel="noopener">heymgroep.nl</a>
          <a href="https://heymrenovatie.nl/" target="_blank" rel="noopener">Heym Renovatie</a>
          <a href="https://heymverduurzaming.nl/" target="_blank" rel="noopener"
            >Heym Verduurzaming</a
          >
        </div>
      </div>
      <div class="footer-legal">
        KVK: 69343551 · BTW-nummer: NL857839251.B01 · Veemarkt 237, 1019 CM Amsterdam
      </div>
      <div class="footer-wordmark">heym</div>
    </footer>
  `;
}

export function mountFooter(basePath) {
  document.getElementById("footer-mount").outerHTML = footerHtml(basePath);
}
