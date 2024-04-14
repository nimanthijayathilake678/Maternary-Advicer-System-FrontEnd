import React, { useState } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import babylogo from "../Assest/babyim.jpg";
export default function Home() {
  return (
    <>
      <Nav />
      <div className="bg-white w-full">
        <div
          xs={12}
          className="bg-[url-of-your-image] bg-cover bg-center w-full"
          style={{ backgroundImage: `url(${babylogo})`, height: "600px" }}
        >
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            ></div>
            <div>
              <div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-10">
                <div
                  className="text-center"
                  style={{
                    fontFamily: "Monaco",
                  }}
                >
                  <h1
                    className="text-4xl  tracking-tight text-gray-900 sm:text-6xl"
                    style={{ fontFamily: "Garamond" }}
                  >
                    Welcome to Maternity Adviser
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Empowering expecting mothers with personalized advice and
                    support throughout their pregnancy journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#00A9BB] py-10 sm:py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-200">
                Expert Guidance
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Features to support you during pregnancy
              </p>
              <p className="mt-6 text-lg leading-8 text-indigo-200">
                Explore the key features of our Maternity Adviser system that
                will provide you with the support and guidance you need during
                your pregnancy.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    Personalized Advice
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                    <p className="flex-auto">
                      Receive tailored advice based on your specific needs and
                      concerns
                    </p>
                    <p className="mt-6">
                      <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-white"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    24/7 Support
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                    <p className="flex-auto">
                      Access to round-the-clock support from experienced
                      maternity advisers
                    </p>
                    <p className="mt-6">
                      <a
                        href="#"
                        classname="text-sm font-semibold leading-6 text-white"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    Health Tracker
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                    <p className="flex-auto">
                      Track your health and progress throughout your pregnancy
                      journey
                    </p>
                    <p className="mt-6">
                      <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-white"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl sm:text-center">
              <p
                className="mt-2 text-4xl  tracking-tight text-gray-900 sm:text-5xl"
                style={{ fontFamily: "Garamond" }}
              >
                Resources, You'll Love
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
              Select the resource that you want.
            </p>
            <div className="mt-20 flow-root">
              <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
                <div className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Birth Control
                  </h3>
                  <div className="pt-4">
                    <img
                      src="https://img.freepik.com/free-photo/people-holding-red-condom_23-2148495879.jpg?t=st=1708871025~exp=1708874625~hmac=ce2f79f90dafffca46cc5ca7561fb8c3c96dd0ad43e8d4dc1d8d60d685963078&w=1060"
                      style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
                      className="w-30 h-auto rounded"
                    />
                  </div>
                  <a
                    href="#"
                    className="mt-10 block rounded-md bg-[#00A9BB] px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    See More
                  </a>
                </div>

                <div className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Planning for a Baby
                  </h3>
                  <div className="pt-4">
                    <img
                      src="https://img.freepik.com/free-photo/high-angle-pregnancy-announcement-with-baby-related-items_23-2150252850.jpg?t=st=1708874493~exp=1708878093~hmac=1d02af627cb48b43ea5b003aa770b351c8a31af503c3a2fad231ede1d906ac98&w=1060"
                      style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
                      className="w-30 h-auto rounded"
                    />
                  </div>
                  <a
                    href="#"
                    className="mt-10 block rounded-md bg-[#00A9BB] px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    See More
                  </a>
                </div>

                <div className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Pregnancy
                  </h3>
                  <div className="pt-4">
                    <img
                      src="https://img.freepik.com/free-photo/cropped-image-pregnant-woman_171337-8360.jpg?t=st=1708875200~exp=1708878800~hmac=0882487a2e8234a4cb9cb3f56c1f4628b949b6984719a4dfe822f4c4625d20f0&w=1060"
                      style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
                      className="w-30 h-auto rounded"
                    />
                  </div>
                  <a
                    href="#"
                    className="mt-10 block rounded-md bg-[#00A9BB] px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#00A9BB]">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <br />
                Let us guide you through your pregnancy journey
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
                Receive expert advice and support tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
