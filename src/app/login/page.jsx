"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { useMutation, useQuery } from "react-query";
import { createAccount, getUser } from "@/services/user";
import { redirect, useRouter } from "next/navigation";

const LoginPage = (props) => {
  const [state, setState] = useState({
    name: "",
  });
  const router = useRouter();
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const createUser = useMutation(createAccount, {
    onSuccess: (res) => {
      console.log("...redirecting to /game");
      alert(`user created with code: ${res.code}`);
      router.push("/game");
      redirect("/game");
    },
    onError: (error) => {
      alert(`ERROR: ${error.response.data.error}`);
    },
  });

  const handleCreateUser = async (e) => {
    e.preventDefault();
    createUser.mutate(state);
  };

  return (
    <div className={styles.container}>
      <form
        action="create user"
        onSubmit={handleCreateUser}
        className={styles.form}
      >
        <input
          type="text"
          placeholder="name"
          name="name"
          value={state.name}
          onChange={handleChange}
          className={styles.input}
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default LoginPage;
