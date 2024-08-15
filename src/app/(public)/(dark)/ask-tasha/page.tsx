"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import SecondaryButton from "@/common/SecondaryButton";
import BlueCircle from "@/assets/svg/BlueCircle.svg";
import Container from "@/components/Container";
import { Grid, styled } from "@mui/material";
import TashaCapabilities from "@/components/TashaCapabilities";

const GradientText = styled(Typography)({
  background: "linear-gradient(45deg, var(--button-shadow), var(--white-text))",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  maxWidth: "1200px",
  paddingLeft: "20px",
  paddingRight: "20px",
});

const AskTashaPage = () => {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(to bottom, var( --black-color), var(--bg-gradient-color)) !important",
        }}
      >
        <Box className="h-auto pt-36 lg:pt-30 flex justify-center relative sm:!overflow-hidden overflow-x-hidden">
          <Box className="text-[var(--white-text)] relative w-full px-2 sm:px-0">
            <Box className="absolute bottom-6 -left-8 md:!-left-7 lg-left-16 spinCircle z-10 overflow-clip">
              <Image
                draggable="false"
                src={BlueCircle}
                alt="Blue Circle"
                className="xl:!w-[80px] xl:!h-[80px] lg:!w-[67px] lg:!h-[61px] !w-[80px] !h-[80px] spinGlobe"
              />
            </Box>
            <Container className="sm:!justify-between sm:!flex lg:!mt-0 sm:!mb-0 mb-0">
              <Grid container className="space-y-16 md:space-y-0 items-center justify-between">
                <Grid xs={12} lg={6}>
                  <div>
                    <GradientText
                      as="h1"
                      className="Spartan-SemiBold p-0 mb-6 overflow-wrap break-words flex flex-wrap"
                    >
                      <span className="text-gradient1">Meet Tasha.</span>
                    </GradientText>
                    <p className="Montserrat-Regular text-white mb-6 lg:max-w-[600px] w-full leading-tight">
                      Tasha is your AI-powered career companion. Whether you’re navigating your
                      career path solo or managing a diverse team, Tasha is here to streamline your
                      journey and elevate your success.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                      <SecondaryButton text="Try Tasha" color="#fff" />
                      <SecondaryButton text="Get API access" color="#FBCC3E" />
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} lg={6} className="relative">
                  <div className="relative max-w-[500px] w-full aspect-square mx-auto lg:mx-[initial] lg:ml-auto z-[1]">
                    <Image
                      src="/images/tasha/tasha-hero.png"
                      alt="tasha image"
                      fill
                      loading="eager"
                    />
                  </div>
                  {/* <Box className="max-w-[600px] lg:max-w-full mx-auto relative">
                  <Box className="flex justify-center items-center">
                    <Image
                      src={TashaChat}
                      alt="Tasha image for Tasha page"
                      className="z-20 tab:w-[460px] md:w-[330px] lg:w-[460px] lg:h-[800px] tab:-mr-16 tab:h-[500px] h-[400px] object-contain object-bottom sm:!w-[800px] !w-[440px] bottom-0 tasha-phone-mobile"
                    />
                    <Box className="absolute top-[100px] lg:top-[250px] xl:left-[-50px] -left-10 lg:-left-[40px] hidden tab:block">
                      <Image
                        src={ChatLeft}
                        alt=""
                        className="z-20 max-w-[250px] h-[123px] object-contain"
                      />
                      <Box className="Spartan-Medium xl:text-[16px] text-[14px] z-20 h-[auto] absolute top-[30px] left-4 pr-4 overflow-hidden w-full">
                        <TypingEffect
                          text="Let's check! When was the start date of your current role?"
                          speed={100}
                          deleteSpeed={30}
                        />
                      </Box>
                    </Box>
                    <Box className="absolute top-[250px] lg:top-[470px] lg:bottom-64 xl:left-[-50px] -left-10 lg:-left-[40px] hidden tab:block">
                      <Image
                        src={ChatLeft1}
                        alt=""
                        className="z-20 max-w-[250px] h-[123px] object-contain"
                      />
                      <Box className="Spartan-Medium xl:text-[16px] text-[14px] z-20 h-[auto] top-[30px] left-4 pr-4 overflow-hidden absolute">
                        <TypingEffect
                          text="Do you work fulltime or parttime?"
                          speed={100}
                          deleteSpeed={30}
                        />
                      </Box>
                    </Box>
                    <Box className="absolute top-10 lg:top-[200px] -right-10 hidden tab:block">
                      <Image
                        src={ChatRight}
                        alt=""
                        className="z-20 max-w-[250px] h-[123px] object-contain"
                      />
                      <Box className="Spartan-Medium xl:text-[16px] text-[14px] z-20 h-[auto] top-[30px] left-4 pr-4 overflow-hidden absolute">
                        <TypingEffect
                          text="Am I eligible for an FMLA?"
                          speed={100}
                          deleteSpeed={30}
                        />
                      </Box>
                    </Box>
                    <Box className="absolute top-[200px] lg:top-[400px] lg:bottom-64 -right-10 hidden tab:block">
                      <Image
                        src={ChatRight1}
                        alt=""
                        className="z-20 max-w-[250px] h-[100px] lg:h-[100px] object-contain object-bottom"
                      />
                      <Box className="Spartan-Medium xl:text-[16px] text-[14px] z-20 h-[auto] top-[30px] left-4 pr-4 overflow-hidden absolute">
                        <TypingEffect
                          text="Sure. My first day was February 24, 2023"
                          speed={100}
                          deleteSpeed={30}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box> */}
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Image
            src={BlueCircle}
            alt="BlueCircle image for Tasha page"
            className="w-[110px] absolute bottom-36 right-[-2.4rem] z-0 spinGlobe"
          />
        </Box>
        <TashaCapabilities />
      </Box>
    </>
  );
};

export default AskTashaPage;
