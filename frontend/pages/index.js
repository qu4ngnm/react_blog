import Layout from "../Components/Layout.js";
import Link from "next/link";
function Index() {
  return (
    <Layout>
      <h2>Home page</h2>
      <Link href="/signup">
        <a>Sign Up</a>
      </Link>
      <Link href="/signin">
        <a>Sign In</a>
      </Link>
    </Layout>
  );
}

export default Index;
