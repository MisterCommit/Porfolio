import { ICertificates } from "@/interfaces/ICertificates";
import Image from "next/image";
import { Text } from "@/components/common/Typography";
import { Link } from "@/components/common/Link";

export const Certificate = ({
  certificateData,
}: {
  certificateData: ICertificates;
}) => {
  return (
    <div>
      <Text>{certificateData.title}</Text>
      <Link href={certificateData.sideUrl} target="_blank">
        <Image
          style={{ borderRadius: 10 }}
          layout="responsive"
          src={certificateData.imageUrl}
          alt={`certificate of ${certificateData.provide} issue by ${certificateData.provide}`}
          width={400}
          height={280}
          key={certificateData.title}
          placeholder="blur"
        />
      </Link>
    </div>
  );
};
