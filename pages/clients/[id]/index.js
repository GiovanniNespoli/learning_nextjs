import { useRouter } from "next/router";

function ClientProjectsPage() {
  const { push } = useRouter();

  function loadProjectHandler() {
    push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "giovanni", clientprojectid: "project123" },
    });
  }

  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
