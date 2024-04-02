const initialContacts = [
  {
    id: 1,
    fullName: "Budi Gunawan",
    email: "budigunawan@mail.com",
    phoneNumber: "+6281234567890",
    label: "Family",
    birthdate: "1996-07-30T17:00:00.000Z",
    avatar: "https://avatars.githubusercontent.com/u/40841245?v=4",
    notes: "",
  },
  {
    id: 2,
    fullName: "John Doe",
    email: "johndoe@mail.com",
    phoneNumber: "+6285712345678",
    label: "Friend",
    birthdate: "1996-07-30T17:00:00.000Z",
    avatar: "https://i.pravatar.cc/150?img=56",
    notes: "",
  },
  {
    id: 3,
    fullName: "Jane Doe",
    email: "janedoe@mail.com",
    phoneNumber: "+6289876543210",
    label: "Work",
    birthdate: "1996-07-30T17:00:00.000Z",
    avatar: "https://i.pravatar.cc/150?img=45",
    notes: "",
  },
];

const setInitialContacts = () => {
  const contacts = getContacts();

  if (!contacts) {
    setContacts(initialContacts);
  }
};

const renderContacts = () => {
  setInitialContacts();
  const contacts = getContacts();

  const contactsTableBody = document.getElementById("contactsTableBody");

  contactsTableBody.innerHTML = "";

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
      ${new Date(contact.birthdate).toLocaleString("id-ID", {
        dateStyle: "medium",
      })}
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

    contactsTableBody.innerHTML += contactRow;
  });
};

renderContacts();
