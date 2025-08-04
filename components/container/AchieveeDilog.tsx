'use client';
import { AchivevItem } from "@/src/constant/interfaces";
import React, { useState, FC } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { urlFor } from "@/sanity/lib/image";

interface AchieveeDilogProps {
  Achievement: AchivevItem[];
}

const AchieveeDilog: FC<AchieveeDilogProps> = ({ Achievement }) => {
  const [open, setOpen] = useState(false);
  const [imgDialogOpen, setImgDialogOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const handleImgClick = (imgUrl: string) => {
    setSelectedImg(imgUrl);
    setImgDialogOpen(true);
  };

  return (
    <div className="flex justify-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant='primary' className={buttonVariants({size:'lg'})}>View Achievements</Button>
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-[425px] 
                     h-[calc(100vh-theme(spacing.16))] 
                     md:h-[calc(100vh-theme(spacing.20))] 
                     overflow-y-auto
            w-[calc(100%-2rem)] 
            lg:max-w-[calc(100%-theme(spacing.20))] 
        "
        >
          <DialogHeader>
            <DialogTitle>My Achievements</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col md:flex-row  gap-6 md:gap-14 py-8 md:py-14">
            {Achievement.length > 0 ? (
              Achievement.map((achievement) => (
                <div
                  key={achievement._id}
                  className="flex flex-col items-center"
                >
                  <Image
                    src={urlFor(achievement.image[0])}
                    alt={`Achievement ${achievement.description}`}
                    width={300}
                    height={300}
                    sizes="(max-width: 768px) 180px, 300px"
                    className="
                      rounded-md shadow-md object-cover
                      w-[180px] h-[180px]
                      md:w-[300px] md:h-[300px]
                      cursor-pointer
                      transition-transform hover:scale-105
                    "
                    onClick={() => handleImgClick(urlFor(achievement.image[0]))}
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    {achievement.description}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground">
                No achievements to display yet.
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
      {/* Dialog for enlarged image */}
      <Dialog open={imgDialogOpen} onOpenChange={setImgDialogOpen}>
        <DialogContent className="flex flex-col items-center max-w-lg">
         {selectedImg && (
        <Image
          src={selectedImg}
          alt="Achievement"
          // Set intrinsic width/height to the largest possible size
          width={600}
          height={600}
          // ✅ Use 'sizes' to tell Next.js which image size to load
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, 600px" // Adapt sizes based on breakpoints
          className="
            rounded-lg shadow-lg
            w-auto h-auto //  Allow image to scale down
            max-w-full //  Ensures image never exceeds its parent's width
            max-h-[70vh] // Keep max height relative to viewport for all sizes
            object-contain //  Ensures the entire image is visible, even if it leaves empty space
          "
        />
      )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AchieveeDilog;