import { useState } from "react";
import Layout from "./Layout";
import LeftMenu from "./LeftMenu";
import UserForm from "./UserForm";
import UsersList from "./UsersList";
import Welcome from "./Welcome";

export default function App() {
  const MENU_ITEMS = {
    WELCOME: 0,
    USERSLIST: 1,
    USERFORM: 2,
  };

  const [itemClicked, setItemClicked] = useState(MENU_ITEMS.WELCOME);
  const apiUrl = import.meta.env.VITE_API_URL;

  function handleClick(item) {
    setItemClicked(item);
  }

  return (
    <Layout
      left={
        <LeftMenu
          items={MENU_ITEMS}
          handleMenu={handleClick}
          valueItem={itemClicked}
        />
      }
    >
      {itemClicked === MENU_ITEMS.WELCOME && <Welcome />}
      {itemClicked === MENU_ITEMS.USERSLIST && <UsersList apiUrl={apiUrl} />}
      {itemClicked === MENU_ITEMS.USERFORM && <UserForm apiUrl={apiUrl} />}
    </Layout>
  );
}
