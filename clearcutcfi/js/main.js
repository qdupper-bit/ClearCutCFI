/* =====================================================================
   CLEAR CUT CFI — main.js
   ---------------------------------------------------------------------
   ⚠️ ONE REQUIRED EDIT BEFORE LAUNCH:
   1. Create a free form at https://formspree.io (takes ~2 minutes)
   2. Paste your endpoint below, e.g. "https://formspree.io/f/abcdwxyz"
   Every waitlist form on the site uses this one value.
   ===================================================================== */
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; // ← EDIT THIS LINE

/* ---------- Waitlist forms ---------- */
document.querySelectorAll("form.waitlist").forEach((form) => {
  form.setAttribute("action", FORM_ENDPOINT);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const msg = form.querySelector(".form-msg");
    const btn = form.querySelector("button[type=submit]");
    const email = form.querySelector("input[type=email]");

    if (FORM_ENDPOINT.includes("YOUR_FORM_ID")) {
      msg.textContent = "Form not configured yet — see js/main.js.";
      msg.className = "form-msg err";
      return;
    }

    btn.disabled = true;
    msg.textContent = "Adding you to the list…";
    msg.className = "form-msg";

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        msg.textContent = "✓ You're on the founders list. Watch your inbox.";
        msg.className = "form-msg ok";
        email.value = "";
      } else {
        throw new Error("bad status");
      }
    } catch (err) {
      msg.textContent = "Something went wrong — email us instead and we'll add you.";
      msg.className = "form-msg err";
    } finally {
      btn.disabled = false;
    }
  });
});

/* ---------- Mobile nav ---------- */
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

/* ---------- Footer year ---------- */
document.querySelectorAll(".js-year").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
