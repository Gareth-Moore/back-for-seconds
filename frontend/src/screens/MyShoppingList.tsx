import ShoppingCard from "../components/ShoppingCard";
import MyShoppingList from "../components/MyShoppingList";
import SidebarGrid from "../components/SidebarGrid";

const MyShopping = () => {
  return (
    <SidebarGrid showComments={false}>
      <MyShoppingList />
      <ShoppingCard />
    </SidebarGrid>
  );
};

export default MyShopping;
