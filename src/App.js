import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthForm from "./components/auth/AuthForm";
import ClassList from "./components/classes/ClassList";
import Hero from "./components/hero/Hero";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Hero />
        </Route>
        <Route path="/classes" exact>
          <ClassList />
        </Route>
        <Route path="/auth">
          <AuthForm />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
