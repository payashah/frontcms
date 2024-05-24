import Product from './Components/Product/Product';
import Orders from './Components/Orders/Orders';
import Offs from './Components/Offs/Offs';
import Comments from './Components/Comments/Comments';
import Users from './Components/Users/Users';

const routes = [
    { path: "/product", element: <Product></Product> },
    { path: "/comments", element: <Comments></Comments> },
    { path: "/users", element: <Users></Users> },
    { path: "/orders", element: <Orders></Orders> },
    { path: "/offs", element: <Offs></Offs> },
]

export default routes