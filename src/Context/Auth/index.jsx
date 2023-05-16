import React from "react";
import { useState } from "react";
export const AuthContext = React.Component();

function AuthProvider({children}){

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState({capabilitities: []});

  const login = () => {}

}