const initialContacts = [
  {
    id: 1,
    fullName: "Budi Indra Gunawan",
    email: "budigunawan@mail.com",
    phoneNumber: "6281234567890",
    label: "Family",
    birthday: "1996-07-31T03:24:00",
    avatar: "https://i.pravatar.cc/150?img=53",
    notes: "",
  },
  {
    id: 2,
    fullName: "John Doe",
    email: "johndoe@mail.com",
    phoneNumber: "6285712345678",
    label: "Friend",
    birthday: "1995-12-17T03:24:00",
    avatar: "https://i.pravatar.cc/150?img=56",
    notes: "",
  },
  {
    id: 3,
    fullName: "Jane Doe",
    email: "janedoe@mail.com",
    phoneNumber: "6289876543210",
    label: "Work",
    birthday: "1995-12-17T03:24:00",
    avatar: "https://i.pravatar.cc/150?img=45",
    notes: "",
  },
];

const getContacts = () => {
  const contacts = localStorage.getItem("contacts");
  return JSON.parse(contacts);
};

const setContacts = (contacts) => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
};

const getInitialContacts = () => {
  const contacts = getContacts();

  if (!contacts) {
    setContacts(initialContacts);
  }
};

const renderContacts = () => {
  getInitialContacts();
  const contacts = getContacts();

  const contactsContainer = document.getElementById("contactsContainer");

  contactsContainer.innerHTML = "";

  contacts.forEach((contact) => {
    const contactRow = `
    <tr>
    <td
      class="border-t-0 border-l-0 border-r-0 text-sm whitespace-nowrap py-4 flex items-center"
    >
      <img
        src="${contact.avatar}"
        alt="${contact.fullName}"
        class="h-12 w-12 rounded-full border"
      />
      <span class="ml-3 font-bold">${contact.fullName}</span>
    </td>
    <td
      class="border-t-0 border-l-0 border-r-0 text-sm whitespace-nowrap py-4"
    >
      ${contact.email}
    </td>
    <td
      class="border-t-0 border-l-0 border-r-0 text-sm whitespace-nowrap py-4"
    >
      ${contact.phoneNumber}
    </td>
    <td
      class="border-t-0 border-l-0 border-r-0 text-sm whitespace-nowrap py-4"
    >
      <div
        class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-regular border-transparent bg-teal-200"
      >
        ${contact.label}
      </div>
    </td>
    <td
      class="border-t-0 border-l-0 border-r-0 text-sm whitespace-nowrap py-4"
    >
      31 Dec 1999
    </td>
    <td
      class="border-t-0 border-l-0 border-r-0 text-sm whitespace-nowrap py-4"
    >
      <a href="/detail/?id=1">
        <i class="fas fa-edit" title="edit"></i>
      </a>
    </td>
  </tr>
    `;
  });
};
