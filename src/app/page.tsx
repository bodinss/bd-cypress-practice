"use client";
import Image from "next/image";
import DefaultHeader from "@/components/DefaultHeader";
import DefaultSidebar from "@/components/DefaultSidebar";
export default function Home() {
  return (
    <div className=" bg-[#646565] w-screen h-screen flex flex-col">
      <DefaultHeader />
      <DefaultSidebar />
    </div>
  );
}
