import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from '@mantine/core';
import { DefaultTheme  } from './theme.tsx';
import '@mantine/core/styles.css';
// ‼️ import tiptap styles after core package styles
import '@mantine/tiptap/styles.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
    theme={{
      ...DefaultTheme,
    }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
