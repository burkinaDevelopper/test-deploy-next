import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";



export const metadata = {
  title: "page d'accueil",
  description: "description de la page d'accueil",
};



export default async function Home() {

  return (
    <>
      <div>
        <h1>Hello next js</h1>
      </div>
    </>
  );
}




