import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

export default function App() {
  return (
    <div className="max-w-[1400px] gap-2 grid grid-cols-12 grid-rows-2 px-8">

    <Card isFooterBlurred className="w-full h-[350px] col-span-12 sm:col-span-7 rounded-3xl">
    <CardHeader className="absolute z-10 top-16 flex-col items-start">
      <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
      <h4 className="text-white/90 font-medium text-xl">Networks ver good. Okey.</h4>
    </CardHeader>

      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="/frame.png"
      />
      <CardFooter className="absolute inset-x-0 bottom-0 bg-black/40 p-4 flex justify-between items-center">
        <div className="flex-1 flex items-center">
          <p className="text-tiny text-white/80 mr-2">Birseyler yazz</p>
          <p className="text-tiny text-white/80">devam et yazmaya.</p>
        </div>
        <Button radius="full" size="sm">Learn More</Button>
      </CardFooter>
    </Card>
  </div>
  );
}
