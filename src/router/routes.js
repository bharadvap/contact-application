import SignUp from "../containers/SignUp";
import SignIn from "../containers/SignIn";
import Contact from "../containers/Contact";

const routes = [
  { path: ["/", "/signUp"], exact: true, component: SignUp },
  { path: "/signIn", exact: true, component: SignIn },
  { path: "/contact", isProtected: true, component: Contact },
  // { path: "/resourcenotfound", component: ResourceNotFound },
  // { component: ResourceNotFound },
];

export default routes;
