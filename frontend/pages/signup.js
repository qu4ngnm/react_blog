import Layout from "../Components/Layout.js";
import Link from "next/link";
import SignupComponent from "../Components/auth/SignupComponent.js";
function Signup() {
  return <Layout>
    <h2>
      Signup page
    </h2>
    <SignupComponent/>
  </Layout>;
}

export default Signup;