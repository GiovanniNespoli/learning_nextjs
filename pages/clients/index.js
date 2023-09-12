import Link from "next/link";

function ClientsPage() {
  const clients = [
    {
      id: "giovanni",
      name: "Giovanni ",
    },
    {
      id: "nespoli",
      name: "Nespoli ",
    },
  ];

  return (
    <div>
      <h1>Client Page</h1>
      <ul>
        {clients.map((clientsData) => (
          <li key={clientsData.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: clientsData.id },
              }}
            >
              {clientsData.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
