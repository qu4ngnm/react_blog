import Layout from "../Components/Layout.js";
import Link from "next/link";
function Signin() {
  return <Layout>
    <h2>
      Signin page
    </h2>
    <Link href="/">
        <a>Home</a>
    </Link>
  </Layout>;
}

export default Signin;