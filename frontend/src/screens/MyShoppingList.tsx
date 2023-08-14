import ShoppingCard from "../components/ShoppingCard";
import ShoppingList from "../components/ShoppingList";
import SidebarGrid from "../components/SidebarGrid";

const MyShoppingList = () => {
  return (
    <SidebarGrid showComments={false}>
      <ShoppingList />
      <ShoppingCard />
    </SidebarGrid>
  );
};

export default MyShoppingList;
