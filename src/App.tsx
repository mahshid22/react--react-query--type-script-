import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout />
        <ReactQueryDevtools initialIsOpen />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
