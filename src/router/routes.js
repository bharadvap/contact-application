import SignUpComponent from "../components/SignUpComponent";
import SignInComponent from "../components/SignInComponent";
import ContactComponent from "../components/ContactComponent";

const routes = [
  { path: ["/", "/signUp"], exact: true, component: SignUpComponent },
  { path: "/signIn", exact: true, component: SignInComponent },
  { path: "/contact", isProtected: true, component: ContactComponent },
];

export default routes;
