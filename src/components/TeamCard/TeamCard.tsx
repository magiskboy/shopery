import * as React from "react";
import Image from "next/image";
import s from './TeamCard.module.css';
import Button from "../Button";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";


interface TeamCardProps {
  imageSrc: string;
  name: string;
  title: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ imageSrc, name, title }) => {
  return (
    <div className={s['team-card']}>
      <div className={s.image}>
        <div className={s.mask}>
          <div className={s.socials}>
            <Button className={s['social-btn']}><FaFacebookF size={20} /></Button>
            <Button className={s['social-btn']}><FaTwitter size={20} /></Button>
            <Button className={s['social-btn']}><FaPinterestP size={20} /></Button>
            <Button className={s['social-btn']}><FaInstagram size={20} /></Button>
          </div>
        </div>
        <Image
          src={imageSrc}
          alt={`${name}'s profile picture`}
          width={312}
          height={280}
        />
      </div>
      <div className={s.footer}>
        <h2 className={s.name}>{name}</h2>
        <p className={s.title}>{title}</p>
      </div>
    </div>
  );
};

export default TeamCard;