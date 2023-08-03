import HomeAtom from "@/components/Home";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>carregando...</p>}>
        <HomeAtom />
      </Suspense>
    </div>
  );
}
