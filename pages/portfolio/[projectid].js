import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const { query } = useRouter();

  console.log(query);

  return (
    <div>
      <h1>Dynamic route</h1>
    </div>
  );
}

export default PortfolioProjectPage;
