// Small account dropdown shared by every logged-in page's header -- the
// email address used to sit in plain view next to "Uitloggen" at all times;
// this tucks it behind a click so the header reads cleaner, while keeping
// it one click away instead of removing it outright. Click-to-toggle
// (not hover) deliberately -- hover-only menus don't work on touch and are
// a known accessibility gap for keyboard users.
//
// Classic script, not a module -- same reasoning as every other shared/*.js
// file here (file:// blocks module imports).
function mountAccountMenu(mountId, email) {
  const mount = document.getElementById(mountId);
  mount.innerHTML = `
    <div class="account-menu">
      <button type="button" class="small" id="account-trigger" aria-haspopup="true" aria-expanded="false">
        Account
      </button>
      <div class="account-popover" id="account-popover" hidden>
        <div class="account-email"></div>
        <button type="button" class="small danger" id="account-sign-out">Uitloggen</button>
      </div>
    </div>
  `;

  mount.querySelector(".account-email").textContent = email;

  const trigger = mount.querySelector("#account-trigger");
  const popover = mount.querySelector("#account-popover");

  function close() {
    popover.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
  }

  function open() {
    popover.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
  }

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    if (popover.hidden) open();
    else close();
  });

  document.addEventListener("click", (e) => {
    if (!popover.hidden && !mount.contains(e.target)) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !popover.hidden) close();
  });

  mount.querySelector("#account-sign-out").addEventListener("click", async () => {
    await supabaseClient.auth.signOut();
    window.location.href = "../login/index.html";
  });
}
