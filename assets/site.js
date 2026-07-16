document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('table.picks a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href").slice(1);
      var row = document.getElementById(id);
      if (!row) return;
      e.preventDefault();
      if (history.pushState) history.pushState(null, "", "#" + id);
      row.scrollIntoView({ behavior: "smooth", block: "center" });
      row.classList.add("flash");
      window.setTimeout(function () {
        row.classList.remove("flash");
      }, 900);
    });
  });
});
