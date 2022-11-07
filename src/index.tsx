import { render } from "react-dom";
import App from "./components/App";
import { StoreProvider } from "./StoreProvider";
 
render(
    <StoreProvider>
        <App/>
    </StoreProvider>,
    document.getElementById('app')
)
