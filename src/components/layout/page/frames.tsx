"use client"

import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout"

const Frames = [
  {
    id: 1,
    video: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    corner: "rounded",
    edgeHorizontal: "solid",
    edgeVertical: "solid",
    borderThickness: 2,
    borderSize: 1,
  },
  {
    id: 2,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    corner: "rounded",
    edgeHorizontal: "solid",
    edgeVertical: "solid",
    borderThickness: 2,
    borderSize: 1,
  },
  {
    id: 3,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    corner: "rounded",
    edgeHorizontal: "solid",
    edgeVertical: "solid",
    borderThickness: 2,
    borderSize: 1,
  },
  {
    id: 4,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    corner: "rounded",
    edgeHorizontal: "solid",
    edgeVertical: "solid",
    borderThickness: 2,
    borderSize: 1,
  },
  {
    id: 5,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    corner: "rounded",
    edgeHorizontal: "solid",
    edgeVertical: "solid",
    borderThickness: 2,
    borderSize: 1,
  },
  {
    id: 6,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    corner: "rounded",
    edgeHorizontal: "solid",
    edgeVertical: "solid",
    borderThickness: 2,
    borderSize: 1,
  },
  {
    id: 7,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    corner: "rounded",
    edgeHorizontal: "solid",
    edgeVertical: "solid",
    borderThickness: 2,
    borderSize: 1,
  },
  {
    id: 8,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Art%20Direction%20Exported.mp4",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    corner: "rounded",
    edgeHorizontal: "solid",
    edgeVertical: "solid",
    borderThickness: 2,
    borderSize: 1,
  },
  {
    id: 9,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Product%20Video.mp4",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    corner: "rounded",
    edgeHorizontal: "solid",
    edgeVertical: "solid",
    borderThickness: 2,
    borderSize: 1,
  },
]

export function Frame() {
  return (
    <div className="h-screen w-screen">
      <DynamicFrameLayout
        frames={Frames}
        className="container mx-auto flex h-[80vh] w-[80vw] max-w-[1200px] rounded-lg"
        hoverSize={6}
        gapSize={4}
      />
    </div>
  )
}