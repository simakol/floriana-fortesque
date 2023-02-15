const refs = {
  subscribeForm: document.getElementById("subscribeForm"),
  afterSubmitModal: document.getElementById("afterSubmitModal"),
  arrowUp: document.getElementById("arrowUp"),
};

const classes = {
  active: "active",
};

refs.subscribeForm.addEventListener("submit", onSubmit);

document.addEventListener(
  "scroll",
  _.throttle(() => {
    if (window.pageYOffset > 300) refs.arrowUp.classList.add(classes.active);
    else refs.arrowUp.classList.remove(classes.active);
  }, 1500)
);

function onSubmit(e) {
  e.preventDefault();
  e.currentTarget.classList.remove(classes.active);
  refs.afterSubmitModal.classList.add(classes.active);
  const user = {
    name: e.target.elements.name.value,
    email: e.target.elements.email.value,
  };
  postUser(user);
}
