
import React from 'react'
import Image from 'next/image'
const Bigcard = () => {
  return (
    <div>
        <section className="relative  bg-blueGray-50">
  <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")'
      }}
    >
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-75 bg-black"
      />
    </div>
    <div className="container relative mx-auto">
      <div className="items-center flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div className="pr-12">
            <h1 className="text-white font-semibold text-5xl">
            Feel better about finding healthcare
            </h1>
            <p className="mt-4 text-lg text-blueGray-200">
            An account allows you to manage family doctors and insurance, book appointments, receive exclusive discounts on prescription medicine, compare doctors, get appointment reminders, and more...
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
      style={{ transform: "translateZ(0px)" }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x={0}
        y={0}
      >
        <polygon
          className="text-blueGray-200 fill-current"
          points="2560 0 2560 100 0 100"
        />
      </svg>
    </div>
  </div>
  <section className="pb-10 bg-blueGray-200 -mt-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
            <Image alt='i' src={"/doc1.webp"} width={200} height={200} className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg"/>
              <h6 className="text-xl font-semibold">choose</h6>
              <p className="mt-2 mb-4 text-blueGray-500">
              Find doctors and hospitals based on the factors that matter most to you.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
            <Image alt='i' src={"/doc2.webp"} width={200} height={200} className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg"/>
              <h6 className="text-xl font-semibold">Connect</h6>
              <p className="mt-2 mb-4 text-blueGray-500">
              Conveniently schedule your appointment by phone or online when available.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <Image alt='ib' src={"/doc3.webp"} width={200} height={200} className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg"/>
              <h6 className="text-xl font-semibold">Prepare</h6>
              <p className="mt-2 mb-4 text-blueGray-500">
              Learn what you need to know and which questions to ask your doctor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</section>

    </div>
  )
}

export default Bigcard