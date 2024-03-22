const contacts = [
  {
    id: 1,
    fullName: 'Budi Indra Gunawan',
    email: 'budigunawan@mail.com',
    phoneNumber: '6281234567890',
    labels: ['Family'],
    birthday: '1996-07-31T03:24:00',
    avatar: 'https://i.pravatar.cc/150?img=53',
    notes: '',
  },
  {
    id: 2,
    fullName: 'John Doe',
    email: 'johndoe@mail.com',
    phoneNumber: '6285712345678',
    labels: ['Friend'],
    birthday: '1995-12-17T03:24:00',
    avatar: 'https://i.pravatar.cc/150?img=56',
    notes: '',
  },
  {
    id: 3,
    fullName: 'Jane Doe',
    email: 'janedoe@mail.com',
    phoneNumber: '6289876543210',
    labels: ['Work'],
    birthday: '1995-12-17T03:24:00',
    avatar: 'https://i.pravatar.cc/150?img=45',
    notes: '',
  },
];

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  const month = today.getMonth() - birthDate.getMonth();
  let age = today.getFullYear() - birthDate.getFullYear();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

function addContact(payload) {
  const { fullName, email, phoneNumber, labels, birthday, avatar, notes } =
    payload;
  let lastId = contacts[contacts.length - 1].id;
  contacts.push({
    id: lastId + 1,
    fullName,
    email,
    phoneNumber,
    labels,
    birthday,
    avatar,
    notes,
  });
}

function renderContacts() {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];
    const age = getAge(contact.birthday);
    const ageCategory = age > 30 ? 'is old enough' : 'is still young';
    console.log(
      `${contact.id}. ${contact.fullName} (${contact.phoneNumber}) ${ageCategory} `
    );
  }
  console.log('');
}

addContact({
  fullName: 'Dita Lestari',
  email: 'ditalestari@mail.com',
  phoneNumber: '6281234567890',
  labels: ['Family'],
  birthday: '1996-03-18T03:24:00',
  avatar: 'https://i.pravatar.cc/150?img=53',
  notes: '',
});

renderContacts();
