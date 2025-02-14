"use client";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

interface NemoPointPageProps {}
export default function NemoPointPage(props: NemoPointPageProps) {
  return (
    <main>
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Button>Open</Button>
        </DrawerTrigger>
        <DrawerContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, et.
          Ut similique velit rem nostrum deserunt doloremque. Voluptatem
          exercitationem pariatur cumque atque, dolorem consequatur alias
          minima. Magnam ipsum nesciunt dolorum.
        </DrawerContent>
      </Drawer>
    </main>
  );
}
