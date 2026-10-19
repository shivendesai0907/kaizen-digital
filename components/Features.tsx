"use client";

import { useEffect, useState } from "react";
import styles from "./Features.module.css";
import ScrollReveal from "./ScrollReveal";

const FEATURE_CARDS = [
  {
    title: "Unified Accounts",
    desc: "Connect all your banks, cards, wallets, and investments in one real-time view.",
    type: "small",
    id: "unified",
    bgPattern: "/images/features/bg-pattern-logo.svg",
    visual: (
      <div style={{ position: "relative", width: "100%", height: "260px", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%) scale(0.72)", transformOrigin: "top center", width: "528px", height: "300px" }}>
          <div style={{ position: "absolute", height: "83.875px", left: "115.5px", overflow: "clip", top: "63.25px", width: "297px" }}>
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, overflow: "clip" }}>
              <div style={{ position: "absolute", display: "contents", top: 0, right: 0, bottom: 0, left: 0 }}>
                <div style={{ position: "absolute", top: "0", right: "4.69%", bottom: "0", left: "5.08%", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "-15.082px 0px", WebkitMaskSize: "297px 83.875px", maskImage: "url(\'/images/features/group-0.svg\')" }}>
                  <div style={{ position: "absolute", top: "-0.75%", bottom: "-0.75%", left: "-0.24%", right: "-0.24%" }}>
                    <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/group-1.svg"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: "-55px", height: "265.375px", overflow: "clip", right: "-165px", width: "295.625px" }}>
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, overflow: "clip" }}>
              <div style={{ position: "absolute", top: "0", right: "0", bottom: "0.2%", left: "0" }}>
                <img alt="" style={{ position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/group-2.svg"} />
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: "-55px", height: "265.375px", left: "-165px", overflow: "clip", width: "295.625px" }}>
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, overflow: "clip" }}>
              <div style={{ position: "absolute", top: "0", right: "0", bottom: "0.2%", left: "0" }}>
                <img alt="" style={{ position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/group-3.svg"} />
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", backgroundColor: "rgba(255,255,255,0)", bottom: "86.62px", left: "220px", borderRadius: "15.125px", boxShadow: "0px 1.375px 110px 0px #6198fe", width: "88px", height: "88px" }}>
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, borderRadius: "15.125px" }}>
              <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, overflow: "hidden", pointerEvents: "none", borderRadius: "15.125px" }}>
                <img alt="" style={{ position: "absolute", left: 0, maxWidth: "none", width: "100%", height: "100%", top: 0 }} src={"/images/features/cloud-icon.png"} />
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", height: "55px", left: "19.79%", overflow: "clip", right: "19.79%", top: "11px" }}>
            <div style={{ transform: "translateX(-50%)" + " translateY(-50%)", position: "absolute", left: "calc(50% + 44px)", width: "55px", height: "55px", top: "50%" }} />
            <div style={{ transform: "translateX(-50%)" + " translateY(-50%)", position: "absolute", left: "calc(50% + 132px)", width: "55px", height: "55px", top: "50%" }} />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Wealth View",
    desc: "Track what you own and owe with simple, real-time clarity.",
    type: "small",
    id: "wealth",
    bgPattern: "/images/features/bg-pattern-logo-2.svg",
    visual: (
      <div style={{ position: "relative", width: "100%", height: "260px", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%) scale(0.72)", transformOrigin: "top center", width: "528px", height: "300px" }}>
          <div style={{ transform: "translateX(-50%)", position: "absolute", left: "50%", borderRadius: "130.625px", width: "130.625px", height: "130.625px", top: "70.13px", backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 130.63 130.63\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(6.4519 0 0 6.4519 65.105 66.119)\\'><stop stop-color=\\'rgba(15,20,36,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(15,24,49,1)\\' offset=\\'0.4207\\'/><stop stop-color=\\'rgba(15,24,49,1)\\' offset=\\'0.65\\'/><stop stop-color=\\'rgba(14,19,34,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
          <div style={{ position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", left: "53.82px", width: "423.5px", height: "423.5px", top: "-75.62px", "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div style={{ flex: "none", transform: "rotate(90deg)" }}>
              <div style={{ backgroundColor: "#060a17", borderRadius: "423.5px", width: "423.5px", height: "423.5px" }} />
            </div>
          </div>
          <div style={{ transform: "translateX(-50%)", position: "absolute", backgroundColor: "rgba(97,152,254,0.04)", left: "50%", borderRadius: "286px", width: "286px", height: "286px", top: "-6.87px" }}>
            <div style={{ position: "absolute", borderWidth: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.02)", borderStyle: "solid", left: 0, borderRadius: "286px", width: "286px", height: "286px", top: 0 }} />
          </div>
          <div style={{ position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", left: "77px", width: "374px", height: "374px", top: "-50.87px", "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div style={{ flex: "none", transform: "rotate(90deg)" }}>
              <div style={{ borderRadius: "374px", width: "374px", height: "374px", backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 374 374\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(18.7 0 0 18.7 187 187)\\'><stop stop-color=\\'rgba(35,105,235,0.24)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(35,105,235,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
            </div>
          </div>
          <div style={{ position: "absolute", top: "38.94%", right: "43.45%", bottom: "46.94%", left: "41.45%", lineHeight: "0", fontStyle: "normal", textAlign: "center" }}>
            <div style={{ transform: "translateX(-50%)" + " translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 500, height: "23.1px", justifyContent: "center", left: "calc(50% + 0.25px)", fontSize: "16.5px", color: "#ffffff", top: "calc(50% - 9.63px)", letterSpacing: "-0.165px", width: "77.167px" }}>
              <p style={{ lineHeight: "23.1px" }}>$950,000</p>
            </div>
            <div style={{ transform: "translateX(-50%)" + " translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", height: "19.25px", justifyContent: "center", left: "calc(50% + 0.35px)", fontSize: "rgba(111,127,158,0.9)", color: "rgba(111,127,158,0.9)", top: "calc(50% + 11.55px)", letterSpacing: "-0.6875px", width: "68.754px" }}>
              <p style={{ lineHeight: "19.25px" }}>NET WORTH</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "165.69px", overflow: "clip", width: "196.625px", height: "196.625px", top: "37.8px" }}>
            <div style={{ transform: "translateX(-50%)" + " translateY(-50%)", position: "absolute", left: "50%", overflow: "clip", width: "196.625px", height: "196.625px", top: "50%" }}>
              <div style={{ position: "absolute", display: "contents", top: "0", right: "0.32%", bottom: "8.15%", left: "50.42%" }}>
                <div style={{ position: "absolute", top: "0", right: "0.32%", bottom: "8.15%", left: "50.42%" }}>
                  <img alt="" style={{ position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/vector-0.svg"} />
                </div>
                <div style={{ position: "absolute", display: "contents", top: "0", right: "0.32%", bottom: "8.15%", left: "50.42%" }}>
                  <div style={{ position: "absolute", top: "0", right: "0.32%", bottom: "8.15%", left: "50.42%", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "-16.5px -16.5px", WebkitMaskSize: "129.846px 213.604px", maskImage: "url(\'/images/features/group-4.svg\')" }}>
                    <div style={{ position: "absolute", top: "-0.5%", bottom: "-0.5%", left: "-0.93%", right: "-0.93%" }}>
                      <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/group-5.svg"} />
                    </div>
                  </div>
                </div>
                <div style={{ position: "absolute", display: "contents", top: "0", right: "0.32%", bottom: "8.15%", left: "50.42%" }}>
                  <div style={{ position: "absolute", top: "0", right: "0.32%", bottom: "8.15%", left: "50.42%", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "-16.5px -16.5px", WebkitMaskSize: "129.846px 213.604px", maskImage: "url(\'/images/features/group-4.svg\')" }}>
                    <div style={{ position: "absolute", top: "-0.5%", bottom: "-0.5%", left: "-0.93%", right: "-0.93%" }}>
                      <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/group-6.svg"} />
                    </div>
                  </div>
                </div>
                <div style={{ position: "absolute", display: "contents", top: "0", right: "0.32%", bottom: "8.15%", left: "50.42%" }}>
                  <div style={{ position: "absolute", top: "0", right: "0.32%", bottom: "8.15%", left: "50.42%", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "-16.5px -16.5px", WebkitMaskSize: "129.846px 213.604px", maskImage: "url(\'/images/features/group-4.svg\')" }}>
                    <div style={{ position: "absolute", top: "-0.5%", bottom: "-0.5%", left: "-0.93%", right: "-0.93%" }}>
                      <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/group-7.svg"} />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", display: "contents", top: "70.75%", right: "25.9%", bottom: "0.44%", left: "11.75%" }}>
                <div style={{ position: "absolute", top: "70.75%", right: "25.9%", bottom: "0.44%", left: "11.75%" }}>
                  <img alt="" style={{ position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/vector-1.svg"} />
                </div>
                <div style={{ position: "absolute", top: "70.75%", right: "25.9%", bottom: "0.44%", left: "11.75%" }}>
                  <img alt="" style={{ position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/vector-2.svg"} />
                </div>
                <div style={{ position: "absolute", display: "contents", top: "70.75%", right: "25.9%", bottom: "0.44%", left: "11.76%" }}>
                  <div style={{ position: "absolute", top: "70.75%", right: "25.9%", bottom: "0.44%", left: "11.76%", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "0px 0px", WebkitMaskSize: "122.586px 56.648px", maskImage: "url(\'/images/features/group-8.svg\')" }}>
                    <div style={{ position: "absolute", top: "-1.59%", bottom: "-1.59%", left: "-0.73%", right: "-0.73%" }}>
                      <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/group-9.svg"} />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", display: "contents", top: "16.05%", right: "74.36%", bottom: "20.66%", left: "0" }}>
                <div style={{ position: "absolute", top: "16.05%", right: "74.36%", bottom: "20.66%", left: "0" }}>
                  <img alt="" style={{ position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/vector-3.svg"} />
                </div>
                <div style={{ position: "absolute", top: "16.05%", right: "74.36%", bottom: "20.66%", left: "0" }}>
                  <img alt="" style={{ position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/vector-4.svg"} />
                </div>
                <div style={{ position: "absolute", display: "contents", top: "16.05%", right: "74.36%", bottom: "20.66%", left: "0" }}>
                  <div style={{ position: "absolute", top: "16.05%", right: "74.36%", bottom: "20.66%", left: "0", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "0px 0px", WebkitMaskSize: "50.411px 124.438px", maskImage: "url(\'/images/features/group-10.svg\')" }}>
                    <div style={{ position: "absolute", top: "-0.72%", bottom: "-0.72%", left: "-1.78%", right: "-1.78%" }}>
                      <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/group-11.svg"} />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", display: "contents", top: "0.31%", right: "50.07%", bottom: "73.39%", left: "15.45%" }}>
                <div style={{ position: "absolute", top: "0.31%", right: "50.07%", bottom: "73.39%", left: "15.45%" }}>
                  <img alt="" style={{ position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/vector-5.svg"} />
                </div>
                <div style={{ position: "absolute", top: "0.31%", right: "50.07%", bottom: "73.39%", left: "15.45%" }}>
                  <img alt="" style={{ position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/vector-6.svg"} />
                </div>
                <div style={{ position: "absolute", display: "contents", top: "0.31%", right: "50.07%", bottom: "73.39%", left: "15.45%" }}>
                  <div style={{ position: "absolute", top: "0.31%", right: "50.07%", bottom: "73.39%", left: "15.45%", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "0px 0px", WebkitMaskSize: "67.779px 51.719px", maskImage: "url(\'/images/features/group-12.svg\')" }}>
                    <div style={{ position: "absolute", top: "-1.74%", bottom: "-1.74%", left: "-1.33%", right: "-1.33%" }}>
                      <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/group-13.svg"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", height: "50.6px", left: "30.25px", borderRadius: "16.5px", boxShadow: "0px 2.75px 2.75px 0px rgba(0,0,0,0.25)", top: "78.38px", width: "127.394px" }}>
            <div aria-hidden="true" style={{ position: "absolute", backgroundColor: "#141414", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "16.5px" }} />
            <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 400, height: "23.1px", justifyContent: "center", lineHeight: "0", left: "16.5px", fontStyle: "normal", fontSize: "rgba(255,255,255,0.8)", color: "rgba(255,255,255,0.8)", top: "25.3px", width: "94.959px" }}>
              <p style={{ lineHeight: "23.1px" }}>Investments</p>
            </div>
            <div style={{ position: "absolute", borderWidth: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.05)", borderStyle: "solid", height: "50.6px", left: 0, borderRadius: "16.5px", top: 0, width: "127.394px" }} />
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "inherit", boxShadow: "inset 0px 6.875px 6.875px 0px rgba(255,255,255,0.06)" }} />
          </div>
          <div style={{ position: "absolute", bottom: "63.25px", height: "50.6px", right: "90.74px", borderRadius: "16.5px", boxShadow: "0px 2.75px 2.75px 0px rgba(0,0,0,0.25)", width: "90.585px" }}>
            <div aria-hidden="true" style={{ position: "absolute", backgroundColor: "#141414", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "16.5px" }} />
            <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 400, height: "23.1px", justifyContent: "center", lineHeight: "0", left: "16.5px", fontStyle: "normal", fontSize: "rgba(255,255,255,0.8)", color: "rgba(255,255,255,0.8)", top: "25.3px", width: "58.036px" }}>
              <p style={{ lineHeight: "23.1px" }}>Income</p>
            </div>
            <div style={{ position: "absolute", borderWidth: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.05)", borderStyle: "solid", height: "50.6px", left: 0, borderRadius: "16.5px", top: 0, width: "90.585px" }} />
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "inherit", boxShadow: "inset 0px 6.875px 6.875px 0px rgba(255,255,255,0.06)" }} />
          </div>
          <div style={{ position: "absolute", height: "50.6px", right: "93.5px", borderRadius: "16.5px", boxShadow: "0px 2.75px 2.75px 0px rgba(0,0,0,0.25)", top: "33px", width: "94.462px" }}>
            <div aria-hidden="true" style={{ position: "absolute", backgroundColor: "#141414", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "16.5px" }} />
            <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 400, height: "23.1px", justifyContent: "center", lineHeight: "0", left: "16.5px", fontStyle: "normal", fontSize: "rgba(255,255,255,0.8)", color: "rgba(255,255,255,0.8)", top: "25.3px", width: "61.925px" }}>
              <p style={{ lineHeight: "23.1px" }}>Savings</p>
            </div>
            <div style={{ position: "absolute", borderWidth: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.05)", borderStyle: "solid", height: "50.6px", left: 0, borderRadius: "16.5px", top: 0, width: "94.462px" }} />
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "inherit", boxShadow: "inset 0px 6.875px 6.875px 0px rgba(255,255,255,0.06)" }} />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Smart AI Insights",
    desc: "Get simple, actionable insights on trends, patterns, and opportunities.",
    type: "small",
    id: "ai",
    bgPattern: "/images/features/bg-pattern-logo.svg",
    visual: (
      <div style={{ position: "relative", width: "100%", height: "260px", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%) scale(0.72)", transformOrigin: "top center", width: "528px", height: "300px" }}>
          <div style={{ position: "absolute", backgroundColor: "#6198fe", height: "50.875px", left: "131.38px", borderRadius: "16.5px", top: "19.25px", width: "266.75px" }}>
            <div style={{ position: "absolute", height: "50.875px", left: 0, pointerEvents: "none", borderRadius: "16.5px", boxShadow: "0px 0.664px 1.726px -2.578px rgba(0,0,0,0.17),0px 5.5px 14.3px -5.156px rgba(0,0,0,0.06)", top: 0, width: "266.75px" }}>
              <div aria-hidden="true" style={{ position: "absolute", backgroundColor: "rgba(255,255,255,0)", top: 0, right: 0, bottom: 0, left: 0, borderRadius: "16.5px" }} />
              <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, borderRadius: "inherit", boxShadow: "inset 0px 1.375px 20.625px 0px rgba(255,255,255,0.75)" }} />
            </div>
            <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 500, height: "24.75px", justifyContent: "center", lineHeight: "0", left: "20.63px", fontStyle: "normal", fontSize: "16.5px", color: "#ffffff", top: "50%", width: "99.799px" }}>
              <p style={{ lineHeight: "24.75px" }}>AI Analyzer</p>
            </div>
            <div style={{ transform: "translateY(-50%)", position: "absolute", left: "226.88px", overflow: "clip", width: "19.25px", height: "19.25px", top: "50%" }}>
              <img alt="" style={{ position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/icon-1.svg"} />
            </div>
            <div style={{ position: "absolute", borderWidth: "rgba(175,189,238,0.4)", borderColor: "rgba(175,189,238,0.4)", borderStyle: "solid", height: "50.875px", left: 0, borderRadius: "16.5px", top: 0, width: "266.75px" }} />
          </div>
          <div style={{ position: "absolute", backgroundColor: "#141414", bottom: "31.63px", height: "104.5px", left: "134.28px", opacity: 0.87, borderRadius: "16.5px", boxShadow: "0px 2.75px 2.75px 0px rgba(0,0,0,0.25)", width: "264px" }}>
            <div style={{ position: "absolute", height: "24.75px", left: "16.5px", top: "16.5px", width: "229.212px" }}>
              <div style={{ transform: "translateY(-50%)", position: "absolute", left: 0, overflow: "clip", width: "19.25px", height: "19.25px", top: "50%" }}>
                <div style={{ position: "absolute", top: "0", right: "2.75px", bottom: "2.75px", left: "0", overflow: "clip" }}>
                  <img alt="" style={{ position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/icon-2.svg"} />
                </div>
              </div>
              <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 500, height: "24.75px", justifyContent: "center", lineHeight: "0", left: "30.25px", fontStyle: "normal", fontSize: "16.5px", color: "#ffffff", top: "50%", width: "199.855px" }}>
                <p style={{ lineHeight: "24.75px" }}>Spending Spike Detected</p>
              </div>
            </div>
            <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 400, height: "59.95px", justifyContent: "center", lineHeight: "0", left: "16.5px", fontStyle: "normal", fontSize: "transparent", color: "transparent", top: "83.33px", width: "295.474px", whiteSpace: "pre-wrap" }}>
              <p style={{ lineHeight: "21.175px", marginBottom: 0 }}>{`Food expenses increased 14% this week `}</p>
              <p style={{ lineHeight: "21.175px", marginBottom: 0 }}>{`a common mid-month pattern, and just a `}</p>
              <p style={{ lineHeight: "21.175px" }}>gentle reminder to stay mindful.</p>
            </div>
            <div style={{ position: "absolute", borderWidth: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.02)", borderStyle: "solid", height: "104.5px", left: 0, borderRadius: "16.5px", top: 0, width: "264px" }} />
          </div>
          <div style={{ position: "absolute", backgroundColor: "#141414", bottom: "52.25px", height: "119.625px", left: "112.82px", borderRadius: "16.5px", width: "303.875px" }}>
            <div style={{ position: "absolute", height: "24.75px", left: "16.5px", top: "16.5px", width: "229.212px" }}>
              <div style={{ transform: "translateY(-50%)", position: "absolute", left: 0, overflow: "clip", width: "19.25px", height: "19.25px", top: "50%" }}>
                <div style={{ position: "absolute", top: "0", right: "2.75px", bottom: "2.75px", left: "0", overflow: "clip" }}>
                  <img alt="" style={{ position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/icon-2.svg"} />
                </div>
              </div>
              <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 500, height: "24.75px", justifyContent: "center", lineHeight: "0", left: "30.25px", fontStyle: "normal", fontSize: "16.5px", color: "#ffffff", top: "50%", width: "199.855px" }}>
                <p style={{ lineHeight: "24.75px" }}>Spending Spike Detected</p>
              </div>
            </div>
            <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 400, height: "53.9px", justifyContent: "center", lineHeight: "0", left: "16.5px", fontStyle: "normal", fontSize: "transparent", color: "transparent", top: "79.2px", width: "295.474px", whiteSpace: "pre-wrap" }}>
              <p style={{ lineHeight: "18.15px", marginBottom: 0 }}>{`Food expenses increased 14% this week `}</p>
              <p style={{ lineHeight: "18.15px", marginBottom: 0 }}>{`a common mid-month pattern, and just a `}</p>
              <p style={{ lineHeight: "18.15px" }}>gentle reminder to stay mindful.</p>
            </div>
            <div style={{ position: "absolute", borderWidth: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.03)", borderStyle: "solid", height: "119.625px", left: 0, borderRadius: "16.5px", top: 0, width: "303.875px" }} />
          </div>
          <div style={{ position: "absolute", bottom: "71.5px", height: "124.438px", left: "18.75%", right: "18.75%", borderRadius: "16.5px" }}>
            <div aria-hidden="true" style={{ position: "absolute", backgroundColor: "#141414", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "16.5px" }} />
            <div style={{ position: "absolute", height: "22.688px", left: "16.5px", top: "16.5px", width: "212.644px" }}>
              <div style={{ transform: "translateY(-50%)", position: "absolute", left: 0, overflow: "clip", width: "19.25px", height: "19.25px", top: "50%" }}>
                <img alt="" style={{ position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/icon-stars.svg"} />
              </div>
              <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 500, height: "22.688px", justifyContent: "center", lineHeight: "0", left: "30.25px", fontStyle: "normal", fontSize: "15.125px", color: "#ffffff", top: "50%", width: "183.093px" }}>
                <p style={{ lineHeight: "22.688px" }}>Spending Spike Detected</p>
              </div>
            </div>
            <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 400, height: "55px", justifyContent: "center", lineHeight: "0", left: "16.5px", fontStyle: "normal", fontSize: "rgba(255,255,255,0.5)", color: "rgba(255,255,255,0.5)", top: "78.79px", width: "279.455px", whiteSpace: "pre-wrap" }}>
              <p style={{ lineHeight: "19.25px", marginBottom: 0 }}>{`Food expenses increased 14% this week a `}</p>
              <p style={{ lineHeight: "19.25px", marginBottom: 0 }}>{`common mid-month pattern, and just a `}</p>
              <p style={{ lineHeight: "19.25px" }}>gentle reminder to stay mindful.</p>
            </div>
            <div style={{ position: "absolute", borderWidth: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.05)", borderStyle: "solid", height: "124.438px", left: 0, borderRadius: "16.5px", top: 0, width: "330px" }} />
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "inherit", boxShadow: "inset 0px 4.125px 8.25px 0px rgba(255,255,255,0.06)" }} />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Spend Control",
    desc: "Instantly spot changes in spending, savings, and bills with insights designed to guide smarter choices.",
    type: "wide",
    id: "spend",
    bgTexture: "/images/features/bg-texture.png",
    visual: (
      <div style={{ position: "relative", width: "100%", height: "280px", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%) scale(0.75)", transformOrigin: "top center", width: "808.5px", height: "316px" }}>
          <div style={{ transform: "translateX(-50%)", position: "absolute", bottom: "10px", height: "303px", left: "calc(50% - 0.25px)", width: "550px" }}>
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, overflow: "hidden", pointerEvents: "none" }}>
              <img alt="" style={{ position: "absolute", height: "100.33%", left: "0.05%", maxWidth: "none", top: "0%", width: "100%" }} src={"/images/features/speedometer.png"} />
            </div>
          </div>
          <div style={{ position: "absolute", height: "147.125px", left: "451px", overflow: "clip", top: "69.44px", width: "24.75px" }}>
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, overflow: "clip" }}>
              <div style={{ position: "absolute", top: "5.61%", right: "37.04%", bottom: "5.92%", left: "33.33%" }}>
                <img alt="" style={{ position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/group-14.svg"} />
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", height: "92.4px", left: "449.63px", borderBottomLeftRadius: "16.5px", borderBottomRightRadius: "16.5px", borderTopLeftRadius: "11px", borderTopRightRadius: "16.5px", boxShadow: "0px 2.75px 2.75px 0px rgba(0,0,0,0.25)", top: "19.25px", width: "163.625px" }}>
            <div aria-hidden="true" style={{ position: "absolute", backgroundColor: "#141414", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderBottomLeftRadius: "16.5px", borderBottomRightRadius: "16.5px", borderTopLeftRadius: "11px", borderTopRightRadius: "16.5px" }} />
            <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 400, height: "26.95px", justifyContent: "center", lineHeight: "0", left: "calc(50% - 65.31px)", fontStyle: "normal", fontSize: "19.25px", color: "#ffffff", top: "calc(50% - 18.97px)", width: "131.102px" }}>
              <p style={{ lineHeight: "26.95px" }}>Current score:</p>
            </div>
            <div style={{ transform: "translateX(-50%)" + " translateY(-50%)", position: "absolute", height: "26.95px", left: "calc(50% - 0.01px)", top: "calc(50% + 18.98px)", width: "40.301px" }}>
              <div style={{ transform: "translateX(-50%)" + " translateY(-50%)", position: "absolute", backgroundColor: "#6198fe", left: "calc(50% - 14.65px)", borderRadius: "11px", boxShadow: "0px 0px 8.25px 0px #8ba2f9", width: "11px", height: "11px", top: "50%" }} />
              <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 400, height: "26.95px", justifyContent: "center", lineHeight: "0", left: "calc(50% - 3.65px)", fontStyle: "normal", fontSize: "19.25px", color: "#ffffff", top: "50%", width: "24.216px" }}>
                <p style={{ lineHeight: "26.95px" }}>83</p>
              </div>
            </div>
            <div style={{ position: "absolute", borderWidth: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.05)", borderStyle: "solid", height: "92.4px", left: 0, borderBottomLeftRadius: "16.5px", borderBottomRightRadius: "16.5px", borderTopLeftRadius: "11px", borderTopRightRadius: "16.5px", top: 0, width: "163.625px" }} />
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "inherit", boxShadow: "inset 0px 6.875px 6.875px 0px rgba(255,255,255,0.06)" }} />
          </div>
          <div style={{ position: "absolute", bottom: "40.87%", left: "31.63px", top: "44.87%", width: "150.425px" }}>
            <div style={{ position: "absolute", backgroundColor: "rgba(97,152,254,0.1)", bottom: 0, left: 0, WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "0px 0px", WebkitMaskSize: "150.425px 45.1px", borderRadius: "13.75px", top: 0, width: "150.425px", maskImage: "url(\'/images/features/bg-text.svg\')" }}>
              <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 400, height: "23.1px", justifyContent: "center", lineHeight: "0", left: "calc(50% - 58.71px)", fontStyle: "normal", opacity: 0.5, fontSize: "16.5px", color: "#ffffff", top: "50%", width: "117.881px" }}>
                <p style={{ lineHeight: "23.1px" }}>Spending: -8%</p>
              </div>
              <div style={{ position: "absolute", borderWidth: "rgba(64,95,189,0.1)", borderColor: "rgba(64,95,189,0.1)", borderStyle: "solid", height: "45.1px", left: 0, borderRadius: "13.75px", top: 0, width: "150.425px" }} />
            </div>
          </div>
          <div style={{ position: "absolute", height: "45.1px", left: "27.86%", right: "53.86%", top: "42.63px" }}>
            <div style={{ position: "absolute", backgroundColor: "rgba(97,152,254,0.1)", height: "45.1px", left: 0, WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "0px 0px", WebkitMaskSize: "147.744px 45.1px", right: 0, borderRadius: "13.75px", top: 0, maskImage: "url(\'/images/features/bg-text-1.svg\')" }}>
              <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 400, height: "23.1px", justifyContent: "center", lineHeight: "0", left: "calc(50% - 57.37px)", fontStyle: "normal", opacity: 0.5, fontSize: "16.5px", color: "#ffffff", top: "50%", width: "115.196px" }}>
                <p style={{ lineHeight: "23.1px" }}>Savings: +12%</p>
              </div>
              <div style={{ position: "absolute", borderWidth: "rgba(64,95,189,0.1)", borderColor: "rgba(64,95,189,0.1)", borderStyle: "solid", height: "45.1px", left: 0, borderRadius: "13.75px", top: 0, width: "147.744px" }} />
            </div>
          </div>
          <div style={{ position: "absolute", bottom: "42.87%", right: "28.88px", top: "42.87%", width: "161.563px" }}>
            <div style={{ position: "absolute", backgroundColor: "rgba(97,152,254,0.1)", bottom: 0, WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "0px 0px", WebkitMaskSize: "161.563px 45.1px", right: 0, borderRadius: "13.75px", top: 0, width: "161.563px", maskImage: "url(\'/images/features/bg-text-2.svg\')" }}>
              <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 400, height: "23.1px", justifyContent: "center", lineHeight: "0", left: "calc(50% - 64.28px)", fontStyle: "normal", opacity: 0.5, fontSize: "16.5px", color: "#ffffff", top: "50%", width: "129.036px" }}>
                <p style={{ lineHeight: "23.1px" }}>Bills: 4 due soon</p>
              </div>
              <div style={{ position: "absolute", borderWidth: "rgba(64,95,189,0.1)", borderColor: "rgba(64,95,189,0.1)", borderStyle: "solid", height: "45.1px", left: 0, borderRadius: "13.75px", top: 0, width: "161.563px" }} />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Financial Health, Simplified",
    desc: "A single smart score shows how healthy your finances are, based on what you earn, spend, and keep.",
    type: "wide",
    id: "health",
    bgImage: "/images/features/card5.png",
    visual: (
      <div style={{ position: "relative", width: "100%", height: "280px", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%) scale(0.75)", transformOrigin: "top center", width: "808.5px", height: "316px" }}>
          <div style={{ position: "absolute", height: "132px", left: "109.29px", overflow: "clip", top: "15.13px", width: "610.5px" }}>
            <img alt="" style={{ position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/bg-line.svg"} />
          </div>
          <div style={{ position: "absolute", top: "6.48%", right: "10.88%", bottom: "10.48%", left: "10.88%" }}>
            <div style={{ transform: "translateX(-50%)", position: "absolute", bottom: 0, height: "141.625px", left: "calc(50% - 283.94px)", overflow: "clip", borderRadius: "16.5px", width: "64.625px" }}>
              <div aria-hidden="true" style={{ position: "absolute", backgroundColor: "#0e1224", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "16.5px" }} />
              <div style={{ position: "absolute", borderWidth: "rgba(22,29,54,0.7)", borderColor: "rgba(22,29,54,0.7)", borderStyle: "solid", top: 0, right: 0, bottom: 0, left: 0, borderRadius: "16.5px" }} />
              <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "inherit", boxShadow: "inset 0px 5.5px 16.5px 0px #161e3c" }} />
            </div>
            <div style={{ transform: "translateX(-50%)", position: "absolute", bottom: 0, height: "189.75px", left: "calc(50% - 202.81px)", overflow: "clip", borderRadius: "16.5px", width: "64.625px" }}>
              <div aria-hidden="true" style={{ position: "absolute", backgroundColor: "#0e1224", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "16.5px" }} />
              <div style={{ position: "absolute", borderWidth: "rgba(22,29,54,0.7)", borderColor: "rgba(22,29,54,0.7)", borderStyle: "solid", top: 0, right: 0, bottom: 0, left: 0, borderRadius: "16.5px" }} />
              <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "inherit", boxShadow: "inset 0px 5.5px 16.5px 0px #161e3c" }} />
            </div>
            <div style={{ transform: "translateX(-50%)", position: "absolute", bottom: 0, height: "110px", left: "calc(50% - 121.69px)", overflow: "clip", borderRadius: "16.5px", width: "64.625px" }}>
              <div aria-hidden="true" style={{ position: "absolute", backgroundColor: "#0e1224", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "16.5px" }} />
              <div style={{ position: "absolute", borderWidth: "rgba(22,29,54,0.7)", borderColor: "rgba(22,29,54,0.7)", borderStyle: "solid", top: 0, right: 0, bottom: 0, left: 0, borderRadius: "16.5px" }} />
              <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "inherit", boxShadow: "inset 0px 5.5px 16.5px 0px #161e3c" }} />
            </div>
            <div style={{ transform: "translateX(-50%)", position: "absolute", bottom: 0, height: "213.125px", left: "calc(50% - 40.56px)", overflow: "clip", borderRadius: "16.5px", width: "64.625px" }}>
              <div aria-hidden="true" style={{ position: "absolute", backgroundColor: "#0e1224", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "16.5px" }} />
              <div style={{ position: "absolute", borderWidth: "rgba(22,29,54,0.7)", borderColor: "rgba(22,29,54,0.7)", borderStyle: "solid", top: 0, right: 0, bottom: 0, left: 0, borderRadius: "16.5px" }} />
              <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "inherit", boxShadow: "inset 0px 5.5px 16.5px 0px #161e3c" }} />
            </div>
            <div style={{ transform: "translateX(-50%)", position: "absolute", bottom: 0, height: "148.5px", left: "calc(50% + 40.56px)", overflow: "clip", borderRadius: "16.5px", width: "64.625px" }}>
              <div aria-hidden="true" style={{ position: "absolute", backgroundColor: "#0e1224", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "16.5px" }} />
              <div style={{ position: "absolute", borderWidth: "rgba(22,29,54,0.7)", borderColor: "rgba(22,29,54,0.7)", borderStyle: "solid", top: 0, right: 0, bottom: 0, left: 0, borderRadius: "16.5px" }} />
              <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "inherit", boxShadow: "inset 0px 5.5px 16.5px 0px #161e3c" }} />
            </div>
            <div style={{ transform: "translateX(-50%)", position: "absolute", backgroundColor: "#6198fe", bottom: 0, height: "232.375px", left: "calc(50% + 121.69px)", borderRadius: "16.5px", boxShadow: "0px 0px 9.866px 0px #5b94ff,0px 0px 132.619px 0px rgba(91,148,255,0.5)", width: "64.625px" }}>
              <div style={{ position: "absolute", borderWidth: "rgba(175,189,238,0.4)", borderColor: "rgba(175,189,238,0.4)", borderStyle: "solid", top: 0, right: 0, bottom: 0, left: 0, borderRadius: "16.5px" }} />
            </div>
            <div style={{ transform: "translateX(-50%)", position: "absolute", backgroundColor: "#6198fe", bottom: 0, height: "262.625px", left: "calc(50% + 202.81px)", borderRadius: "16.5px", boxShadow: "0px 0px 9.866px 0px #5b94ff,0px 0px 132.619px 0px rgba(91,148,255,0.5)", width: "64.625px" }}>
              <div style={{ position: "absolute", borderWidth: "rgba(175,189,238,0.4)", borderColor: "rgba(175,189,238,0.4)", borderStyle: "solid", top: 0, right: 0, bottom: 0, left: 0, borderRadius: "16.5px" }} />
            </div>
            <div style={{ transform: "translateX(-50%)", position: "absolute", bottom: 0, height: "148.5px", left: "calc(50% + 283.94px)", overflow: "clip", borderRadius: "16.5px", width: "64.625px" }}>
              <div aria-hidden="true" style={{ position: "absolute", backgroundColor: "#0e1224", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "16.5px" }} />
              <div style={{ position: "absolute", borderWidth: "rgba(22,29,54,0.7)", borderColor: "rgba(22,29,54,0.7)", borderStyle: "solid", top: 0, right: 0, bottom: 0, left: 0, borderRadius: "16.5px" }} />
              <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none", borderRadius: "inherit", boxShadow: "inset 0px 5.5px 16.5px 0px #161e3c" }} />
            </div>
          </div>
          <div style={{ position: "absolute", backdropFilter: "blur(1.375px)", height: "80.85px", left: "42.69%", right: "34.7%", borderRadius: "16.5px", top: "59.13px", backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 182.81 80.85\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(16.791 0 0 7.4261 105.23 16.17)\\'><stop stop-color=\\'rgba(21,32,67,0.7)\\' offset=\\'0.17443\\'/><stop stop-color=\\'rgba(9,13,26,0.7)\\' offset=\\'0.71497\\'/></radialGradient></defs></svg>')" }}>
            <div style={{ transform: "translateY(-50%)", position: "absolute", height: "47.85px", left: "16.5px", top: "50%", width: "71.954px" }}>
              <div style={{ transform: "translateY(-50%)", position: "absolute", height: "22px", left: 0, top: "calc(50% - 12.92px)", width: "63.113px" }}>
                <div style={{ transform: "translateY(-50%)", position: "absolute", height: "22px", left: 0, overflow: "clip", top: "50%", width: "9.625px" }}>
                  <div style={{ position: "absolute", height: "22px", left: 0, overflow: "clip", top: 0, width: "9.625px" }}>
                    <div style={{ position: "absolute", top: "18.75%", right: "50.02%", bottom: "18.75%", left: "49.98%" }}>
                      <div style={{ position: "absolute", top: "0", bottom: "0", left: "-0.69px", right: "-0.69px" }}>
                        <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/group-15.svg"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 400, height: "19.25px", justifyContent: "center", lineHeight: "0", left: "15.12px", fontStyle: "normal", fontSize: "rgba(176,200,255,0.8)", color: "rgba(176,200,255,0.8)", top: "50%", width: "48.408px" }}>
                  <p style={{ lineHeight: "19.25px" }}>Income</p>
                </div>
              </div>
              <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 500, height: "23.1px", justifyContent: "center", lineHeight: "0", left: 0, fontStyle: "normal", fontSize: "16.5px", color: "#ffffff", top: "calc(50% + 12.38px)", width: "72.449px" }}>
                <p style={{ lineHeight: "23.1px" }}>$ 20,000</p>
              </div>
            </div>
            <div style={{ transform: "translateY(-50%)", position: "absolute", height: "47.85px", left: "104.94px", top: "50%", width: "61.366px" }}>
              <div style={{ transform: "translateY(-50%)", position: "absolute", height: "22px", left: 0, top: "calc(50% - 12.92px)", width: "53.006px" }}>
                <div style={{ transform: "translateY(-50%)", position: "absolute", height: "22px", left: 0, overflow: "clip", top: "50%", width: "9.625px" }}>
                  <div style={{ position: "absolute", height: "22px", left: 0, overflow: "clip", top: 0, width: "9.625px" }}>
                    <div style={{ position: "absolute", bottom: "18.75%", left: "50%", right: "50%", top: "18.75%" }}>
                      <div style={{ position: "absolute", top: "0", bottom: "0", left: "-0.69px", right: "-0.69px" }}>
                        <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={"/images/features/group-15.svg"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 400, height: "19.25px", justifyContent: "center", lineHeight: "0", left: "15.13px", fontStyle: "normal", fontSize: "rgba(176,200,255,0.8)", color: "rgba(176,200,255,0.8)", top: "50%", width: "38.384px" }}>
                  <p style={{ lineHeight: "19.25px" }}>Spent</p>
                </div>
              </div>
              <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 500, height: "23.1px", justifyContent: "center", lineHeight: "0", left: 0, fontStyle: "normal", fontSize: "16.5px", color: "#ffffff", top: "calc(50% + 12.38px)", width: "61.829px" }}>
                <p style={{ lineHeight: "23.1px" }}>$ 5,000</p>
              </div>
            </div>
            <div style={{ position: "absolute", borderWidth: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.05)", borderStyle: "solid", height: "80.85px", left: 0, borderRadius: "16.5px", top: 0, width: "182.806px" }} />
          </div>
          <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 400, height: "19.25px", justifyContent: "center", lineHeight: "0", left: "24.75px", fontStyle: "normal", fontSize: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.1)", top: "79.75px", width: "22.622px" }}>
            <p style={{ lineHeight: "19.25px" }}>10k</p>
          </div>
          <div style={{ transform: "translateY(-50%)", position: "absolute", display: "flex", flexDirection: "column", fontWeight: 400, height: "19.25px", justifyContent: "center", lineHeight: "0", left: "24.75px", fontStyle: "normal", fontSize: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.1)", top: "15.13px", width: "22.335px" }}>
            <p style={{ lineHeight: "19.25px" }}>15k</p>
          </div>
        </div>
      </div>
    )
  }
];

export default function Features() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <section className={styles.section} id="features">
      <ScrollReveal blur={15} yOffset={30}>
        <div className={styles.header}>
          <div className={styles.pill}>
            <span className={styles.pillDot} />
            <span className={styles.pillText}>Full-Service Technology Partner</span>
          </div>
          <h2 className={styles.title}>
            More Than CRM—Your Full Service <br />
            Technology Partner
          </h2>
          <p className={styles.description}>
  Kaizen Digital helps businesses build complete digital infrastructures — from CRM platforms and payment
  systems to mobile apps, SaaS platforms, automation tools, and enterprise software.
</p>
        </div>
      </ScrollReveal>

      <div className={styles.cardsContainer}>
        {/* Row 1: 3 columns */}
        <div className={styles.topRow}>
          {FEATURE_CARDS.filter(c => c.type === "small").map((card, i) => (
            <ScrollReveal key={card.id} delay={i * 0.1} scale={0.95} blur={10} yOffset={40}>
              <div className={styles.featureCard}>
                <div className={styles.cardBg}>
                  {card.bgPattern && (
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "100% 100%",
                      maskImage: `url('${card.bgPattern}')`
                    }}>
                      <img alt="" className={styles.bgImage} src="/images/features/bg-pattern-1.png" />
                    </div>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.textContent}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDescription}>{card.desc}</p>
                  </div>
                  <div className={styles.visualContainer}>
                    {card.visual}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Row 2: 2 columns */}
        <div className={styles.bottomRow}>
          {FEATURE_CARDS.filter(c => c.type === "wide").map((card, i) => (
            <ScrollReveal key={card.id} delay={i * 0.15} scale={0.98} blur={15} yOffset={50}>
              <div className={`${styles.featureCard} ${styles.wideCard}`}>
                <div className={styles.cardBg}>
                  {card.bgTexture && <img alt="" className={styles.bgTexture} src={card.bgTexture} />}
                  {card.bgImage && <img alt="" className={styles.bgImage} src={card.bgImage} style={{ opacity: 0.8 }} />}
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.textContent}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDescription}>{card.desc}</p>
                  </div>
                  <div className={styles.visualContainer}>
                    {card.visual}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}