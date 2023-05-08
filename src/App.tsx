import { CSVLink } from "react-csv";

const RESPONSE = [
  {
    id: 1,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "ah@smthing.co.com",
  },
  {
    id: 2,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "ah@smthing.co.com",
  },
  {
    id: 3,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "ah@smthing.co.com",
  },
  {
    id: 4,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "ah@smthing.co.com",
  },
];

function App() {
  const headers = [
    { label: "First Name", key: "first_name" },
    { label: "Last Name", key: "last_name" },
    { label: "Email", key: "email" },
  ];

  const data = RESPONSE;

  return (
    <>
      <CSVLink
        data={data}
        headers={headers}
        filename="downloaded-file.csv"
        className="download-btn"
      >
        Download me
      </CSVLink>
    </>
  );
}

export default App;
