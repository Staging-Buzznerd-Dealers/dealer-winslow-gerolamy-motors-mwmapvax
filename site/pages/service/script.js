/* Open the first FAQ question on load, as the page's content shows it expanded. */
(function () {
  var first = document.querySelector('[data-bz-node="fq-list"] details.bz-faq');
  if (first) first.setAttribute('open', '');
})();
