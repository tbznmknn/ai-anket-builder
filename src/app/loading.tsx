import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-full w-screen items-center justify-center">
      <Loader2 className="mx-auto my-6 animate-spin" />
    </div>
  );
}
