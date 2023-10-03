import "./App.css";

import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";
import { useEffect } from "react";
import { auth } from "./components/Firebase";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51NukRBB87da2k8vS8bUbzFQTJZWrNYqRJClqwRqEQqLmZNGFu02TGBOoUxeK5zVHw9OXfc8LSomLexbJ28qZBS9O00Km8s2Fmo"
);
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  // const [{user}, dispach] = useStateValue();
  // useEffect(() =>{
  //   auth.onAuthStateChanged((authUser) =>{
  //     if (authUser) {
  //       dispach({
  //         type: "SET_USER",
  //         user: authUser,
  //       })
  //     } else{
  //       dispach({
  //         type: "SET_USER",
  //         user:null,
  //       })
  //     }
  //   })
  // }, []);
  return (
    <Router>
   
    
      <div className="App">
        <Routes>
        
    
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Nav/>
                <Home />
                {/* <Nav/> */}
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Nav/>
                <Checkout />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );

}

export default App;
