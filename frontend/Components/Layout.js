import Header from "./Header";
function Layout({children}) {
  return (
    <h1>
      <Header/>
      {children}
    </h1>
  );
}
export default Layout;
