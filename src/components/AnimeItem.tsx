import { Anime } from "@/types/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { MotionDiv } from "./MotionDiv";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function AnimeItem({
  item,
  index,
}: {
  item: Anime;
  index: number;
}) {
  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{
        duration: 0.5,
        delay: index * 0.25,
        ease: "easeInOut",
      }}
    >
      <Card className="flex flex-col h-full">
        <CardHeader className="flex-shrink-0">
          <Image
            src={`https://shikimori.one${item.image.original}`}
            alt={item.name}
            width={200}
            height={200}
            className="object-cover w-full h-[40vh]"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-lg ">{item.name}</CardTitle>
          <p>{item.kind}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p>Rating: {item.score}</p>
          <p>{item.status}</p>
        </CardFooter>
      </Card>
    </MotionDiv>
  );
}
