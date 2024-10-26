import { Title } from "@solidjs/meta";
import serverFunction from "~/server-functions";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <button
        onClick={() => {
          serverFunction().then(console.log);
        }}
      >
        Click Me
      </button>
    </main>
  );
}
