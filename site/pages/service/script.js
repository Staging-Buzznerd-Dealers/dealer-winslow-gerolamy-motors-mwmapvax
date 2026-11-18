/* Open the first FAQ question that has an answer, as the page content shows it expanded. */
(function () {
  var items = document.querySelectorAll('[data-bz-node="fq-list"] details.bz-faq');
  for (var i = 0; i < items.length; i++) {
    var a = items[i].querySelector('.bz-faq__a');
    if (a && a.textContent.trim()) { items[i].setAttribute('open', ''); break; }
  }
})();
