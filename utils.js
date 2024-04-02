const setContacts = (contacts) => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
};

const getContacts = () => {
  const contacts = localStorage.getItem("contacts");

  if (!contacts) {
    setContacts([]);
  }

  try {
    return JSON.parse(contacts);
  } catch (error) {
    console.error("Failed to load contacts", error);
  }
};

const goToHomePage = () => {
  window.location = "/";
};
