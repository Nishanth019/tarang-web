"use client";
import { Stack, Image, Text, Group, Grid, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const SubMainSection = () => {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  const styles = {
    flexContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: isMobileView ? "1.5rem" : "3rem",
      border: "1px solid black",
    },
  };

  return (
    <Container m={0} p={0} miw={"100%"}>
      <Grid gutter={0} columns={isMobileView ? 1 : 2}>
        <Grid.Col
          bg="#000"
          span={1}
          order={isMobileView ? 1 : ""}
          px={isMobileView ? "2rem" : "4.25rem"}
          py="2rem"
          style={{ border: "1px solid black" }}
        >
          <Group justify="center">
            <Image
              src={"/aboutPageImages/aboutSectionImg(1).png"}
              alt=""
              w={isMobileView ? "20.5rem" : "35rem"}
              mah={isMobileView ? "20.5rem" : "35rem"}
            />
          </Group>
        </Grid.Col>
        <Grid.Col
          style={styles.flexContainer}
          bg="#EFDEE3"
          order={isMobileView ? 2 : ""}
          span={1}
          pl={isMobileView ? "2rem" : "6rem"}
          pr={"2rem"}
          py="2rem"
        >
          <Text
            size={isMobileView ? "2rem" : "4rem"}
            lh={isMobileView && "2.4rem"}
            c="#000"
          >
            A Display of Dedication
          </Text>
          <Text
            size={isMobileView ? "0.75rem" : "1.25rem"}
            ta={isMobileView ? "left" : "justify"}
            c="#1A1D1F"
            maw={isMobileView ? "100%" : "90%"}
            lh={isMobileView ? "1rem" : "1.5rem"}
          >
            Tarang is where students can let loose and exhibit their real
            passions—whether it&apos;s dance, music, drama, literature,
            photography or anything, really. It&apos;s like a convergence of
            cultures and talents, an ocean where the rivers of everyone&apos;s
            unique skills combine and blossom.
          </Text>
          <Group gap={"2rem"}>
            {[
              { number: "100+", text: "participating colleges" },
              { number: "30+", text: "events" },
            ].map(({ number, text }) => (
              <Stack key={number}>
                <Text
                  c="#000"
                  fz={isMobileView ? "1.5rem" : "3rem"}
                  lh={isMobileView ? "1rem" : "2rem"}
                >
                  {number}
                </Text>
                <Text
                  c="#1A1D1F"
                  fz={isMobileView ? "0.75rem" : "1.25rem"}
                  lh={isMobileView ? "1rem" : null}
                >
                  {text}
                </Text>
              </Stack>
            ))}
          </Group>
        </Grid.Col>
        <Grid.Col
          style={styles.flexContainer}
          bg="#EFDEE3"
          order={isMobileView ? 4 : ""}
          span={1}
          py={isMobileView ? "2rem" : "4rem"}
          pl={isMobileView ? "2rem" : "3rem"}
          pr={isMobileView ? "2rem" : "6rem"}
        >
          <Text
            c={"#000"}
            fz={isMobileView ? "2rem" : "3rem"}
            lh={isMobileView ? "2.4rem" : "3.6rem"}
          >
            Star-Studded Spectacle
          </Text>
          <Text
            c={"#000"}
            ta={isMobileView ? "left" : "justify"}
            size={isMobileView ? "0.75rem" : "1.25rem"}
            lh={isMobileView ? "1rem" : "1.5rem"}
          >
            Of course, there have also been great stars that have graced the
            fest, proving to be a beacon of inspiration. Aakash Mehta, renowned
            comedian had the entire campus roaring with laughter. We would tell
            you his jokes, but you just HAD to be there!
          </Text>
          <Text
            c={"#000"}
            ta={isMobileView ? "left" : "justify"}
            size={isMobileView ? "0.75rem" : "1.25rem"}
            lh={isMobileView ? "1rem" : "1.5rem"}
          >
            Obviously no fest is complete without a DJ Night and boy was the
            last DJ night WILD! After tremendous success at sunburn, Julia Bliss
            herself was the DJ of the night in question, making the campus jive
            and groove to her sick EDM vibes. Her beats are playing in our heads
            to this day!
          </Text>
        </Grid.Col>
        <Grid.Col
          bg="#FFC900"
          span={1}
          order={isMobileView ? 3 : ""}
          style={{ border: "1px solid black" }}
        >
          <Group
            justify="center"
            align="center"
            h="100%"
            px={isMobileView && "2rem"}
            py={isMobileView && "4rem"}
          >
            <Image
              src={"/aboutPageImages/aboutSectionImg(2).png"}
              alt=""
              maw={isMobileView ? "15rem" : "20rem"}
              mah={isMobileView ? "15rem" : "20rem"}
            />
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default SubMainSection;
