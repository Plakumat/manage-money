import React, { useState, useEffect } from 'react';
import { IPaginationProps } from '../../model';
import styled from 'styled-components/macro';

const Pagination: React.FC<IPaginationProps> = (props: IPaginationProps) => {
  const { division, pagerClick, className, ...rest } = props;
  const [activeIndex, setActiveIndex] = useState(1);
  const [divisionNumbers, setDivisionNumbers] = useState<Array<number>>([]);

  const PagerComponent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    button {
      margin: 0 10px 0 0;
      width: 32px;
      height: 32px;
      border: 0;
      border-radius: 12px;
      background: none;
      background-color: #f0f0f5;
      color: #909099;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      &.button--active {
        background-color: #155ed4;
        color: #fff;
        font-weight: bold;
        letter-spacing: 0.48px;
        &:hover {
          background-color: #155ed4;
          color: #fff;
        }
      }
      &:hover {
        background-color: #dfdfdf;
      }
      &:last-child {
        margin: 0;
      }
    }
  `;

  const handleClick: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = (event) => {
    pagerClick?.(event);
  };

  useEffect(() => {
    if (division) {
      const pagers: Array<number> = Array.from(
        { length: division },
        (_, i) => i + 1
      );
      setDivisionNumbers(pagers);
    }
  }, [division]);

  return (
    <PagerComponent className={className} {...rest}>
      {divisionNumbers.map((pager: number, index: number) => (
        <button
          className={pager === activeIndex ? 'button--active' : ''}
          key={index}
          onClick={(event) => {
            if (!(pager === activeIndex)) {
              setActiveIndex(pager);
              handleClick(event);
            }
          }}
          data-attribute={pager}
          data-active={pager}
        >
          {pager}
        </button>
      ))}
    </PagerComponent>
  );
};

export default Pagination;
