"use client"

import Image from "next/image";
import { Dictionary } from "../../../types";
import { SocialLink } from "@/components/SocialLink";
import Modal from "@/components/Modal";
import { useState } from "react";
import { LanguageSelect } from "@/components/LanguageSelect";
import Accordion from "@/components/Accordion";
import Link from "next/link";
import { IconLink } from "@/icons";

export default function Body({ dict }: { dict: Dictionary }) {
  const [isWeChatModalOpen, setWeChatModalOpen] = useState<boolean>(false);
  const [clipboardCopyStatus, setClipboardCopyStatus] = useState<string>("");

  const handleWeChatClick = () => {
    setWeChatModalOpen(true);
    navigator.clipboard.writeText("ooodman").then(() => {
      setClipboardCopyStatus(dict.usernameCopiedToClipboard);
    }).catch((e) => {
      setClipboardCopyStatus("");
      console.error(e);
    });
  }

  return (
    <>
      <div className="relative top-0 w-full flex flex-row flex-wrap justify-end items-center p-4">
        <LanguageSelect dict={dict} />
      </div>
      <div className="text-text dark:text-darkText grid grid-cols-1 xl:grid xl:grid-cols-2 p-4 xl:px-48 xl:pt-24 gap-12">
        <div className="flex flex-col">
          <Image src="/images/headshot-square.webp" alt="Ollie speaking" width={200} height={200} className="border-2 border-border dark:border-darkBorder rounded-full mx-auto xl:m-0" />
          <div className="my-8">
            <h2 className="text-3xl text-center sm:text-left font-heading text-balance sm:text-[44px]">
              {dict.main.fullname}
            </h2>
            <h2 className="mt-4 text-xl text-center sm:text-left font-heading text-balance sm:text-4xl">
              ({dict.main.altname})
            </h2>
            <p className="mt-6 text-base font-base sm:text-xl">
              {dict.main.tagline}
            </p>
          </div>
          <h2 className="text-2xl font-heading mb-2">
            Connect with me
          </h2>
          <div
            id="grid-container"
            className="text-text dark:text-text grid w-full grid-cols-1 gap-4 md:grid-cols-2"
          >
            {dict.socials.map((value) => (
              <SocialLink 
                key={value.id} 
                social={value} 
                handleClickOverride={
                  value.id === "wechat" ? handleWeChatClick : undefined
                }
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-heading mb-2">
            My recent projects
          </h2>
          <div className="flex flex-col gap-4">
            {dict.projects.map((value) => {
              return (
                <Accordion
                  key={value.id}
                  defaultOpen={value.id === "neuronautllm"}
                  question={
                    <div className="flex items-center text-lg sm:text-base">
                      {value.name}
                    </div>
                  }
                  answer={
                    <div className="flex flex-col p-4 gap-2">
                      <Image src={value.imgSrc} alt={value.name} width={1600} height={900} className="rounded-base" />
                      <p className="mt-2">{value.description}</p>
                      <p className="flex-shrink text-sm text-balance opacity-70">{value.publishedState}</p>
                      {value.url && 
                        <Link 
                          href={value.url} 
                          className="mx-auto my-2 flex items-center text-text cursor-pointer rounded-base border-2 border-border dark:border-darkBorder bg-yellow-400 px-4 py-2 text-base sm:text-sm font-base shadow-light dark:shadow-dark transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none"
                        >
                          <IconLink className="text-xl mr-2" />
                          {dict.projectLearnMore}
                        </Link>
                      }
                    </div>
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
      <div id="modal"></div>
      <Modal active={isWeChatModalOpen} setActive={setWeChatModalOpen}>
        <Image src="/images/wechat-qr.webp" alt="WeChat QR code" width={500} height={500} className="rounded-base" />
        {clipboardCopyStatus && 
          <p className="mt-4 text-center opacity-80">
            {clipboardCopyStatus}
          </p>
        }
      </Modal>
    </>
  );
}
