export const showSpinner = (node, extraClass) => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.classList.add(extraClass);
  node.appendChild(spinner);
};

export const hideSpinner = () => {
  const spinner = document.querySelector('.spinner');
  if (spinner) {
    spinner.remove();
  }
};
