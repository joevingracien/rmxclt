import { Scene } from "~/components/Scene.client";
import { ClientOnly } from "remix-utils/client-only";

export default function App() {
  return (
    <ClientOnly fallback={<p>loading...</p>}>{() => <Scene />}</ClientOnly>
  );
}
