import React, { useEffect, useContext } from "react";
import "./App.css";
import LoginForm from "./components/loginForm.js";
import RegistrationForm from "./components/registrationForm.js";
import Background from "./components/background-red-slash.js";
import UserDashboard from "./components/userDashboard.js";
import Profile from "./components/profile.js";
import ManagerDashboard from "./components/managerDashboard";
import CouponForm from "./components/couponForm.js";
import DiscoverDeal from "./components/discoverDeal.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LogoutPage from "./components/logoutPage";
import SearchPage from "./components/searchPage";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import mqtt from "mqtt";
import Menu from "./components/menu.js";
import { store } from "react-notifications-component";
import { UserContext } from "./userContext.js";

const cloudMqttUrl = "mqtts://tailor.cloudmqtt.com";
const options = {
  port: 38184,
  username: "kvuwrinm",
  password: "tucVHt31q7Gx",
};

function App() {
  const { currentUser } = useContext(UserContext);
  // const notification = (ntitle, message, type) => {
  //   store.addNotification({
  //     title: ntitle,
  //     message: message,
  //     type: type,
  //     insert: "top",
  //     container: "top-right",
  //     animationIn: ["animated", "fadeIn"],
  //     animationOut: ["animated", "fadeOut"],
  //     dismiss: {
  //       duration: 6000,
  //       timingFunction: "ease-out",
  //       onScreen: true,
  //     },
  //   });
  // };

  // useEffect(() => {
  //   let cflag = false;

  //   let client = mqtt.connect(cloudMqttUrl, options);
  //   client.on("connect", function () {
  //     client.subscribe("notification", function (err) {
  //       if (!err) {
  //         notification(
  //           "System Notification:",
  //           "Connect to MQTT Server Successfully!",
  //           "success"
  //         );
  //       } else {
  //         notification(
  //           "System Notification:",
  //           "Connect to MQTT Server Failed!",
  //           "danger"
  //         );
  //       }
  //     });
  //   });

  //   client.on("reconnect", function () {
  //     if (cflag === false) {
  //       notification(
  //         "System Notification:",
  //         "Network Disconnected! MQTT Will Try Reconnecting!",
  //         "danger"
  //       );
  //       cflag = true;
  //     }
  //   });

  //   client.on("message", function (topic, message) {
  //     // message is Buffer
  //     notification("System Notification:", message.toString(), "success");
  //   });
  // }, []);
  console.log(`user: ${currentUser.loggedIn}`);
  useEffect(() => {}, [currentUser.loggedIn]);

  return (
    // <ApolloProvider client={client}>
    <Router>
      {currentUser.loggedIn ? (
        <div className="App">
          <ReactNotification />
          <Route
            path="/"
            exact
            render={(props) => <Background comp={<DiscoverDeal />} />}
          />
          <Route
            path="/login"
            exact
            render={(props) => <Background comp={<LoginForm />} />}
          />
          <Route
            path="/register"
            render={(props) => <Background comp={<RegistrationForm />} />}
          />
          <Route path="/dashboard" component={UserDashboard} />
          <Route path="/managerDashboard" component={ManagerDashboard} />
          <Route path="/addCoupon" component={CouponForm} />
          <Route path="/profile" component={Profile} />
          <Route path="/logout" component={LogoutPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/menu" component={Menu} />
        </div>
      ) : (
        <div className="App">
          <Route
            path="/"
            exact
            render={(props) => <Background comp={<DiscoverDeal />} />}
          />
          <Route
            path="/login"
            exact
            render={(props) => <Background comp={<LoginForm />} />}
          />
          <Route
            path="/register"
            render={(props) => <Background comp={<RegistrationForm />} />}
          />
        </div>
      )}
    </Router>
    // </ApolloProvider>
  );
}

export default App;
