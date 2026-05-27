import { Router as WouterRouter, Switch, Route } from "wouter";
import { Toaster } from "sonner";
import Home from "@/pages/Home";

function NotFound() {
  return (
    <main style={{ padding: "64px 24px", fontFamily: "var(--font-mono)", color: "var(--fg-dim)" }}>
      <p>$ error: 404 not found</p>
    </main>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <>
      <Toaster theme="dark" position="bottom-right" />
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </>
  );
}
