"use client";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Meditate from "@/components/Meditate";
import Confetti from 'react-confetti'

export default function Home() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [time, settime] = useState(-1);
  const [meditate, setmeditate] = useState(1);

  function handleOnClick() {
    setOpen(true);
  }

  function handleOnChange(e) {
    settime(parseInt(e.target.value));
  }

  function handleSubmit() {
    setOpen(false);
    setmeditate(true);

    setTimeout(() => {
      setmeditate(1);
    }, time * 1000 * 60);
  }

  function main_page() {
    return (
      <div className="w-[100vw] h-[100vh]">
        <h1 className="text-[#ef4444] text-[5em] text-center font-bold ">
          WELCOME TO MED APP
        </h1>
        <div className="w-[100%] flex justify-center items-center mb-7">
          <Image
            className=" shadow-lg shadow-white rounded-full"
            src="/meditation2.jpg"
            width={500}
            height={500}
          ></Image>
        </div>
        <div className="flex justify-around w-[40%] items-center mx-auto">
          <button
            className="bg-transparent hover:bg-blue-500 text-[#ef4444] w-[100%] font-bold hover:text-white py-5 px-5 border border-blue-500 hover:border-transparent rounded"
            onClick={handleOnClick}
          >
            Start Meditation
          </button>
        </div>

        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-base leading-6 text-gray-900 font-bold"
                          >
                            SELECT TIME FOR MEDITATION
                          </Dialog.Title>
                          <div className="mt-2">
                            <select
                              id="large"
                              class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              onChange={handleOnChange}
                            >
                              <option selected>Choose Time</option>
                              <option value="1">15-minutes</option>
                              <option value="25">25-minutes</option>
                              <option value="40">40-minutes</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex font-bold w-full justify-center rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 sm:ml-3 sm:w-auto"
                        onClick={handleSubmit}
                      >
                        SUBMIT
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto font-bold"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    );
  }

  function thankyou_page() {
    return (
      <div className="w-[50%] h-[100%] flex flex-col justify-center items-center mx-auto ">
        <h1 className="text-lime-400 text-[4em] text-center font-bold ">
          WELL DONE YOU HAVE COMPLETED A SESSION!!!!!!!!!
        </h1>
        <button
          className="bg-transparent hover:bg-blue-500 text-[#ef4444] w-[100%] font-bold hover:text-white py-5 px-5 border border-blue-500 hover:border-transparent rounded"
          onClick={() => setmeditate(0)}
        >
          HOME
        </button>

        <Confetti width={2000} height={1000} />
      </div>
    );
  }

  function render() {
    if (meditate === 0) return main_page();
    else if (meditate === 1) return thankyou_page();
    return <Meditate />;
  }

  return render();
}
