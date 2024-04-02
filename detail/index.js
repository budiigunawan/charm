const editContactFormElement = document.getElementById("edit-contact-form");
const deleteContactButtonElement = document.getElementById(
  "deleteContactButton",
);

const renderContactById = () => {
  const contacts = getContacts();

  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const id = Number(params.get("id"));

  const contact = contacts.find((contact) => contact.id === id);

  document.getElementById("fullName").defaultValue = contact.fullName;
  document.getElementById("avatar").defaultValue = contact.avatar;
  document.getElementById("email").defaultValue = contact.email;
  document.getElementById("phone").defaultValue = contact.phoneNumber;
  document.getElementById(contact.label.toLowerCase()).checked = true;
  document.getElementById("birthdate").valueAsDate = new Date(
    contact.birthdate,
  );
  document.getElementById("notes").defaultValue = contact.notes;

  console.log(document.getElementById("birthdate"), "fn");
};

const editContact = (event) => {
  event.preventDefault();
  const contactFormData = new FormData(editContactFormElement);

  const contacts = getContacts();

  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const id = Number(params.get("id"));

  const contactIndex = contacts.findIndex((contact) => contact.id === id);

  const editedContact = {
    id,
    fullName: contactFormData.get("fullName"),
    avatar: contactFormData.get("avatar"),
    email: contactFormData.get("email"),
    phoneNumber: contactFormData.get("phone"),
    label: contactFormData.get("label"),
    birthdate: new Date(contactFormData.get("birthdate")).toISOString(),
    notes: contactFormData.get("notes"),
  };

  contacts[contactIndex] = editedContact;

  setContacts(contacts);
  goToHomePage();
};

const deleteContact = () => {
  if (confirm(`Are you sure? You can't undo this action afterwards.`)) {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const id = Number(params.get("id"));

    const contacts = getContacts();

    const newContacts = contacts.filter((contact) => contact.id !== id);

    setContacts(newContacts);
    goToHomePage();
  }
};

renderContactById();
editContactFormElement.addEventListener("submit", editContact);
deleteContactButtonElement.addEventListener("click", deleteContact);
