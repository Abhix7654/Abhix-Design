"use client";

import { ReactNode } from "react";
import { RoomProvider } from "../liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import { LiveMap } from "@liveblocks/client";
import { Loader, Loader2, Loader2Icon, LoaderCircleIcon } from "lucide-react";
import Loader4 from "@/components/Loader";

export function Room({ children }: { children: ReactNode }) {
  return (
    <RoomProvider id="my-room" initialPresence={{ cursor: null, cursorColor: null, editingText: null }}
    initialStorage={{ canvasObjects: new LiveMap(), }}
>
    <ClientSideSuspense fallback={<Loader4 />}>
        {() => children}
    </ClientSideSuspense>
</RoomProvider>
  );
}