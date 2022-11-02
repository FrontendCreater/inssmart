const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
  const navButtons = tab.querySelectorAll('.tab__navigation-btn');
  const toggleButtons = tab.querySelectorAll('.tab__toggle');
  const contentNodes = tab.querySelectorAll('.tab__content');
  const collapseContentNodes = tab.querySelectorAll('.tab__content-content');

  navButtons.forEach((navButton, index) => {
    navButton.addEventListener('click', () => {
      if (navButton.classList.contains('tab__navigation-btn_active')) return;

      navButtons.forEach((navButton) => navButton.classList.remove('tab__navigation-btn_active'));
      navButton.classList.add('tab__navigation-btn_active');

      contentNodes.forEach((contentNode) => contentNode.classList.add('tab__content_hidden'));
      contentNodes[index].classList.remove('tab__content_hidden');

      collapseContentNodes.forEach((collapseContentNode) => collapseContentNode.classList.add('tab__content-content_collapsed'));
      collapseContentNodes[index].classList.remove('tab__content-content_collapsed');

      toggleButtons.forEach((toggleButton) => toggleButton.classList.remove('tab__toggle-active'));
      toggleButtons[index].classList.add('tab__toggle-active');
    });
  });

  toggleButtons.forEach((toggleButton, index) => {
    toggleButton.addEventListener('click', () => {
      toggleButton.classList.toggle('tab__toggle-active');
      collapseContentNodes[index].classList.toggle('tab__content-content_collapsed');
    });
  });
});
