import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

interface Card {
  title: string;
  subtitle: string;
  points: string[];
}

interface PricingInfoCardProps {
  card: Card;
}

const PricingInfoCard = ({ card }: PricingInfoCardProps) => {
  return (
    <>
      <Box className="flex !my-4">
        <Box className="Montserrat-Bold !text-xl bgCircle xl:!w-40 xl:!h-40 md:!w-36 md:!h-36 !w-[8.7rem] !h-[8.7rem] !-mr-11 z-20 flex flex-col !text-center !justify-center">
          {card.title}
          <span className="Montserrat-SemiBold !text-base !mx-auto">{card.subtitle}</span>
        </Box>
        <Box className="bgCard !text-[--white-text] lg:!w-[750px] md:!w-[600px] sm:!w-[550px] !w-[300px] xl:!h-[130px] md:!h-[125px] !h-[135px] !my-auto !py-5 flex !items-center">
          <List
            sx={{
              listStyleType: "disc",
              padding: "0px 10px",
              width: { lg: "700px", md: "500px", xs: "270px" },
              lineHeight: "1",
            }}
          >
            {card.points.map((point, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "list-item",
                  color: "#fff",
                  padding: "0px 0px !important",
                  width: "fit-content",
                  marginLeft: { xl: "6rem", lg: "5rem", md: "4.5rem", xs: "3.6rem" },
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: { xs: "12.5px", sm: "14px", md: "14px", lg: "15px" },
                  }}
                  className="Spartan-Medium !text-[--white-text]"
                >
                  {point}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
};

export default PricingInfoCard;
