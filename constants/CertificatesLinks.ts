import { ICertificates } from "@/interfaces/ICertificates";
import ProblemSolving from "../public/assets/images/certificates/ProblemSolving.png";
import React from "../public/assets/images/certificates/React.png";
import Sql from "../public/assets/images/certificates/Sql.png";
import RestApi from "../public/assets/images/certificates/RestApi.png";
import ReactTestingAndDebuggging from "../public/assets/images/certificates/ReactTestingAndDebuggging.png";

export const CertificatesLinks: ICertificates[] = [
  {
    imageUrl: ProblemSolving,
    title: "Problem Solving",
    sideUrl: "https://www.hackerrank.com/certificates/bc65cdb2eb78",
    provide: "Hacker Rank",
  },
  {
    imageUrl: React,
    title: "React",
    sideUrl: "https://www.hackerrank.com/certificates/c08a0ea6859d",
    provide: "Hacker Rank",
  },
  {
    imageUrl: Sql,
    title: "SQl",
    sideUrl: "https://www.hackerrank.com/certificates/23c764ab6482",
    provide: "Hacker Rank",
  },
  {
    imageUrl: RestApi,
    title: "REST APIs",
    sideUrl:
      "https://www.linkedin.com/learning/certificates/73492441d6d5d64baa3d49d59625959889b7b9b21f846a3331acbe1bd4adee98",
    provide: "LinkedIn",
  },
  {
    imageUrl: ReactTestingAndDebuggging,
    title: "React: Testing and Debugging",
    sideUrl:
      "https://www.linkedin.com/learning/certificates/faaacdb02daa27936c79bc7bba0999d064028a674c1d388c5ce1361a7d6f3063",

    provide: "LinkedIn",
  },
];
