const addContactFormElement = document.getElementById("add-contact-form");

const addContact = (event) => {
  event.preventDefault();
  const contactFormData = new FormData(addContactFormElement);

  const contacts = getContacts();

  const newId = contacts.length ? contacts[contacts.length - 1].id + 1 : 1;

  const newContact = {
    id: newId,
    fullName: contactFormData.get("fullName"),
    avatar: contactFormData.get("avatar"),
    email: contactFormData.get("email"),
    phoneNumber: contactFormData.get("phone"),
    label: contactFormData.get("label"),
    birthdate: new Date(contactFormData.get("birthdate")).toISOString(),
    notes: contactFormData.get("notes"),
  };

  const updatedContacts = [...contacts, newContact];

  setContacts(updatedContacts);
  addContactFormElement.reset();
  goToHomePage();
};

addContactFormElement.addEventListener("submit", addContact);
