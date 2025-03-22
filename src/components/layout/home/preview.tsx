"use client";

import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

const people = [
  {
    id: 1,
    name: "Vân Nguyễn",
    designation: "Bồ tao",
    image:
      "/image/avatar-1.png",
  },
  {
    id: 2,
    name: "Nguyễn Thị Hồng Vân",
    designation: "Giàu sang phú quý",
    image:
      "/image/avatar-2.png",
  },
  {
    id: 3,
    name: "Quỷ 1",
    designation: "Răng hàm mặt",
    image:
      "/image/avatar-3.png",
  },
  {
    id: 4,
    name: "Quỷ 2",
    designation: "Khó nói",
    image:
      "/image/avatar-4.png",
  },
  // {
  //   id: 5,
  //   name: "Tyler Durden",
  //   designation: "Soap Developer",
  //   image:
  //     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  // },
  // {
  //   id: 6,
  //   name: "Dora",
  //   designation: "The Explorer",
  //   image:
  //     "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  // },
];

function Preview() {
  return (
    <div className="flex flex-row items-center justify-center">
      <AnimatedTooltip items={people} />
    </div>
  );
}

export { Preview };
