"use client";

import Image from "next/image";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
} from "@/components/ui/morphing-dialog";

interface ZoomAbleImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function ZoomAbleImage({ src, alt, width, height, className }: ZoomAbleImageProps) {
  return (
    <MorphingDialog>
      <MorphingDialogTrigger className={className}>
        <Image src={src} alt={alt} width={width} height={height} className={className} />
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="max-w-4xl rounded-xl overflow-hidden">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-full object-contain"
          />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
