import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import type { StaticImageData } from 'next/image';

type TeamMemberProps = {
  src: StaticImageData['src'];
  name: string;
  role?: string;
  placeholderUrl?: string;
  onClickHandler?: () => void;
  style?: React.CSSProperties;
};

const TeamMember: React.FC<TeamMemberProps> = ({
  src,
  name,
  role,
  placeholderUrl,
  onClickHandler,
}: TeamMemberProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const borderColor = 'rgb(0 145 218)';

  return (
    <div
      className={classNames('flex flex-col items-center justify-center', {
        'cursor-pointer': !!onClickHandler,
      })}
      onClick={onClickHandler}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.3s ease-in-out' }}
    >
      <div style={{ borderRadius: '50%' }}>
        <Image
          src={src}
          alt={name}
          width={300}
          height={300}
          className="rounded-full w-40 h-40 my-2"
          placeholder={placeholderUrl ? 'blur' : undefined}
          blurDataURL={placeholderUrl}
          style={{ border: `2px solid ${borderColor}` }}
        />
      </div>
      <p className="font-medium text-lg">{name}</p>
      {role && <span className="font-light text-base">{role}</span>}
    </div>
  );
};

TeamMember.displayName = 'TeamMember';

export default TeamMember;
export type { TeamMemberProps };
