import React, { useState } from "react";
import { EnvelopeIcon, TrashIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import ResizeablePanel from "../resizeable-panel/ResizeablePanel";

const mockMails = [
  {
    data: ["Apple's newest iPhone is here", "Watch our July event"],
    id: 1377685602474,
  },
  {
    data: [
      "Nintendo's Newsletter for July",
      "Introducing Strike, a 5-on-5 soccer game",
    ],
    id: 1267071297640,
  },
  {
    data: ["Your funds have been processed", "See your latest deposit online"],
    id: 146611307860,
  },
  {
    data: ["This Week in Sports", "The finals are heating up"],
    id: 622770758174,
  },
  {
    data: ["Changelog update", "Edge subroutines and more"],
    id: 1146387345357,
  },
  {
    data: ["React Hawaii is here!", "Time for fun in the sun"],
    id: 854750151993,
  },
];

function uniqueID() {
  return Math.floor(Math.random() * Date.now());
}

const EmailBox = () => {
  const [emails, setEmails] = useState(mockMails);
  function addMessage() {
    const newMail = {
      data: mockMails[Math.floor(Math.random() * mockMails.length)].data,
      id: uniqueID(),
    };
    setEmails((messages) => [...messages, newMail]);
  }

  function archiveMessage(id: number) {
    setEmails((messages) => {
      let newMessages = [...messages];
      newMessages = newMessages.filter((message) => message.id !== id);
      return newMessages;
    });
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
      className="w-full"
      key={"email-box"}
    >
      <ResizeablePanel
        className="mx-auto h-fit max-h-[70vh] w-full max-w-3xl overflow-hidden rounded-lg bg-white "
        wrapperClassName="max-h-[70vh] flex flex-col"
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        <div className="flex justify-between border-b border-solid border-slate-200 px-6 py-4">
          <button
            onClick={addMessage}
            className="text-slate-500 transition-colors duration-300 hover:text-slate-700 active:text-slate-600"
          >
            <EnvelopeIcon className="h-6" />
          </button>
        </div>
        <ul className="flex h-full flex-col overflow-y-auto">
          <AnimatePresence initial={false}>
            {emails.map(({ data: email, id }) => (
              <motion.li
                initial={{
                  height: 0,
                  opacity: 0,
                  background: "var(--blue-300)",
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  background: "white",
                }}
                exit={{
                  height: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  opacity: 0,
                  background: "var(--red-200)",
                  display: "none",
                }}
                transition={{
                  duration: 0.2,
                  display: { delay: 0.3 },
                }}
                key={id}
                className="flex flex-shrink-0 justify-between overflow-clip px-6 py-3 transition-colors duration-300 hover:bg-slate-100"
              >
                <div className="flex flex-col">
                  <h3 className="pb-0 font-medium text-slate-600">
                    {email[0]}
                  </h3>
                  <span className="text-sm text-slate-500">{email[1]}</span>
                </div>
                <div>
                  <button
                    onClick={() => archiveMessage(id)}
                    className="flex text-slate-500 transition-colors duration-300 hover:text-slate-700 active:text-slate-600 disabled:cursor-not-allowed disabled:text-slate-300"
                  >
                    <TrashIcon className="h-6" />
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </ResizeablePanel>
    </motion.div>
  );
};

export default EmailBox;
