"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";
// import TalenteLogo from "@/assets/svg/TalenteLogo.svg";
import FacebookCircularIcon from "@/assets/svg/FacebookCircularLogo.svg?svgr";
import InstagramCircularIcon from "@/assets/svg/InstagramCircularLogo.svg?svgr";
import TwitterCircularIcon from "@/assets/svg/TwitterCircularLogo.svg?svgr";
import LinkedInCircularIcon from "@/assets/svg/LinkedInCircularLogo.svg?svgr";
import EmailIcon from "@/assets/svg/Email.svg?svgr";
import LocationIcon from "@/assets/svg/Location.svg?svgr";
import GradientTextCommon from "@/common/GradientTextCommon";
import { appConfig } from "@/appConfig";
import { usefulLinks } from "@/data/navbar";

const Footer = () => {
  return (
    <Box
      className="overflow-clip py-8 sm:py-10 md:pt-16 md:pb-4"
      sx={{
        background: "var(--black-color)",
        color: "var(--white-text)",
        position: "relative",
      }}
    >
      {/* <Box className="absolute sm:left-[-40px] md:left-[-150px] bottom-[-30px] scale-[.75] rotate-[0deg]">
        <Image
          draggable="false"
          src={CircularShape}
          alt="CircularShape"
          className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] md:w-[450px] md:h-[300px]"
        />
      </Box> */}
      <Container>
        <Grid container className="space-y-10 md:space-y-0">
          <Grid xs={12} md={3}>
            <Stack direction="column" alignItems="flex-start" spacing={2}>
              <Link href="/">
                <Image
                  draggable="false"
                  alt="Logo"
                  width={160}
                  height={40}
                  src="/images/brand.png"
                  className="cursor-pointer max-h-[40px] object-cover"
                />
              </Link>
              <Box>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                  <a href="https://www.facebook.com/profile.php?id=61559613423456" target="_blank">
                    <FacebookCircularIcon className="h-8 w-8" />
                  </a>
                  <a href="https://www.instagram.com/mytalente/" target="_blank">
                    <InstagramCircularIcon className="h-8 w-8" />
                  </a>
                  <a href="https://x.com/mytalente_" target="_blank">
                    <TwitterCircularIcon className="h-8 w-8" />
                  </a>
                  <a href="https://www.linkedin.com/company/talente-inc" target="_blank">
                    <LinkedInCircularIcon className="h-8 w-8" />
                  </a>
                </Stack>
              </Box>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack direction="column" spacing={2}>
              <GradientTextCommon
                text="Useful Links"
                className="!text-2xl Spartan-Bold"
                startColor="#CB6CE6"
                endColor="#FFFFFF"
              />
              <Stack direction="row" spacing={2}>
                {usefulLinks.map((link) => (
                  <>
                    {link.url ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="Spartan-SemiBold text-white navList hover-underline-animation text-lg"
                        onClick={(event) => event.stopPropagation()}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.path}
                        className="Spartan-Medium navList hover-underline-animation text-lg"
                        href={link.path}
                      >
                        {link.label}
                      </Link>
                    )}
                  </>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={3}>
            <Stack direction="column" spacing={2}>
              <GradientTextCommon
                text="Contact Talente"
                className="!text-2xl Spartan-Bold"
                startColor="#CB6CE6"
                endColor="#FFFFFF"
              />

              <Stack direction="row" alignItems="center" spacing={1.5}>
                <EmailIcon className="h-5 w-5" />
                <a href="mailto:hello@mytalente.com" className="text-lg Spartan-Medium">
                  {appConfig.company.email}
                </a>
              </Stack>
              <Stack direction="row" alignItems="flex-start" spacing={1.5}>
                <LocationIcon className="h-5 w-5 lg:h-7 lg:w-7" />
                <Typography className="text-lg Spartan-Medium">
                  {appConfig.company.location}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Typography className="mt-16 text-base Spartan-Regular text-center px-3 mb-[10px]">
          {appConfig.company.footerText}
        </Typography>
        <Box className="border-t pt-[10px]">
          <Box className="flex justify-center gap-2">
            <Link
              href="/"
              className="Spartan-Medium navList hover-underline-animation mx-3 relative"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="Spartan-Medium navList hover-underline-animation mx-3 relative before:content-[''] before:absolute before:h-[10px] before:w-[1px] before:bg-white before:left-[-10px] before:top-1/2 before:-translate-y-1/2"
            >
              Terms of Use
            </Link>
            <Link
              href="/legal-notice"
              className="Spartan-Medium navList hover-underline-animation mx-3 relative before:content-[''] before:absolute before:h-[10px] before:w-[1px] before:bg-white before:left-[-10px] before:top-1/2 before:-translate-y-1/2"
            >
              Legal
            </Link>
          </Box>
        </Box>
      </Container>
      {/* <Box className="absolute right-[-150px] top-2">
        <Image
          draggable="false"
          src={Globe}
          alt="Globe"
          className="w-[300px] h-[200px] sm:h-[300px]"
        />
      </Box> */}
    </Box>
  );
};

export default Footer;
