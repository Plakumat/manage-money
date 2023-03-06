import React from 'react';
import styled from 'styled-components/macro';

const Badge: React.FC<IBadgeProps> = (props: IBadgeProps) => {
  const { value, className, ...rest } = props;

  const BadgeComponent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12px;
    height: 12px;
    background-color: #f20028;
    border-radius: 50%;
    color: #fff;
    font-size: 11px;
    font-weight: bold;
  `;

  return (
    <BadgeComponent className={className} {...rest}>
      {value}
    </BadgeComponent>
  );
};

export default Badge;

export interface IBadgeProps {
  value?: number;
  className?: string;
}
