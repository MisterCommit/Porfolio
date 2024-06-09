import { SimpleGrid, Title } from "@mantine/core";
import { CertificatesLinks } from "@/constants/CertificatesLinks";
import { Certificate } from "@/components/common/Certificate";
import { ICertificates } from "@/interfaces/ICertificates";

export const Certifications = () => {
  return (
    <>
      <Title order={1} mb={20}>
        Achievements And Certifications 🏆
      </Title>
      <SimpleGrid
        cols={3}
        spacing="xl"
        breakpoints={[
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        {CertificatesLinks.map((certificate: ICertificates) => {
          return (
            <Certificate
              certificateData={certificate}
              key={certificate.title}
            />
          );
        })}
      </SimpleGrid>
    </>
  );
};
