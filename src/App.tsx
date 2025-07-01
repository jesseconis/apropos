import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { Demo } from "./Demo.tsx";
import { Layout } from "./Layout.tsx";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="container">
      <Layout />
      <Demo />
    </main>
  );
}

export default App;
