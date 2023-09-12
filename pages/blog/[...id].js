import { useRouter } from "next/router";

function BlogPage() {
  const { query } = useRouter();

  console.log(query);

  return (
    <div>
      <h1>Blog Page Catch all routes</h1>
    </div>
  );
}

export default BlogPage;
