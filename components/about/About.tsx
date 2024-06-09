import { createStyles, Title, Avatar } from "@mantine/core";
import { Text } from "@/components/common/Typography";
import { Link } from "@/components/common/Link";
import { AboutLinks } from "@/constants/AboutLinks";

export const About = () => {
  const { classes } = useStyles();
  return (
    <div id="about" className={classes.about}>
      <div className={classes.div1}>
        <Avatar src="/assets/images/me.png" radius="xl" size="xl" />
        <Title order={1} ml={10}>
          Who am i ?
        </Title>
      </div>

      <Text mb="md">
        {` Hey, I'm Ahmed Raza, I am a Computer Science graduate with expertise in
        Software Development. Over the last 5 years, I’ve gained a wide range of experience in different technologies and platforms, from static websites to Full stack web and mobile applications. Currently, I'm working as
        a Full Stack Software Developer `}
        <Link
          label={AboutLinks.HCRInternational.label}
          href={AboutLinks.HCRInternational.link}
          target={AboutLinks.HCRInternational.target}
        />
      </Text>
      <Text mb="md">
        {`Previously, I worked at `}
        <Link
          label={AboutLinks.WebHR.label}
          href={AboutLinks.WebHR.link}
          target={AboutLinks.WebHR.target}
        />
        {` a Cloud based Social HR Software for SMEs which is currently used in over 160 countries world
        wide by thousands of organizations to manage HR,
        `}
        <Link
          label={AboutLinks.SmartPupils.label}
          href={AboutLinks.SmartPupils.link}
          target={AboutLinks.SmartPupils.target}
        />
        {` is a dedicated platform that completely automates your
        educational institute by integrating all modules to streamline your
        educational processes by `}
        <Link
          label={AboutLinks.Verge.label}
          href={AboutLinks.Verge.link}
          target={AboutLinks.Verge.target}
        />
        {` And Led the project `}{" "}
        <Link
          label={AboutLinks.Safco.label}
          href={AboutLinks.Safco.link}
          target={AboutLinks.Safco.target}
        />
        {`, First Digital Banking Application for
       `}
        <Link
          label={AboutLinks.SSF.label}
          href={AboutLinks.SSF.link}
          target={AboutLinks.SSF.target}
        />
      </Text>
      <Text mb="md">
        {`My primary role was to develop and maintain mobile and web apps. Still, with this, I worked on AI and Desktop apps, created chat boats and face recognition and developed cross platform desktop apps for Biometric devices.`}
      </Text>

      <Text mb="md">
        {`Outside of work, I’m a big fan of side projects so, In my spare time, I
        work on side projects and contribute to open source. Some of my side
        by projects are `}
        <Link
          label={AboutLinks.SmartBaara.label}
          href={AboutLinks.SmartBaara.link}
          target={AboutLinks.SmartBaara.target}
        />
        {", "}
        <Link
          label={AboutLinks.IntelliroTelematics.label}
          href={AboutLinks.IntelliroTelematics.link}
          target={AboutLinks.IntelliroTelematics.target}
        />
        {" and "}
        <Link
          label={AboutLinks.DeltaPrism.label}
          href={AboutLinks.DeltaPrism.link}
          target={AboutLinks.DeltaPrism.target}
        />
        {`. I am also
        collaborator at `}
        <Link
          label={AboutLinks.reactMore.label}
          href={AboutLinks.reactMore.link}
          target={AboutLinks.reactMore.target}
        />
      </Text>
      <Text mb="md">
        {`I like to eat, read articles/books, solve `}{" "}
        <Link
          label={AboutLinks.hackerRankProfile.label}
          href={AboutLinks.hackerRankProfile.link}
          target={AboutLinks.hackerRankProfile.target}
        />
        {` problems, or watch Netflix in my spare time!`}
      </Text>
    </div>
  );
};

const useStyles = createStyles((theme) => ({
  about: {
    marginTop: "5%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  div1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 40,
  },
}));
