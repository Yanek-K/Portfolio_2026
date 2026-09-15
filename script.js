// Copy-to-clipboard for email links across the site.
// Usage: <span class="copy-email" data-email="hello@yanek-k.com">hello@yanek-k.com</span>
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.copy-email').forEach(function (el) {
    var originalText = el.textContent;
    el.style.cursor = 'pointer';
    el.title = 'Click to copy';
    el.addEventListener('click', function () {
      var email = el.getAttribute('data-email') || originalText;
      navigator.clipboard.writeText(email).then(function () {
        el.textContent = 'Copied ✓';
        setTimeout(function () {
          el.textContent = originalText;
        }, 1400);
      });
    });
  });
});
