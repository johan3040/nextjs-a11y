import React, { PropsWithChildren } from 'react';

type FlexProps = {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  wrap?: 'wrap' | 'wrap-reverse' | 'nowrap';
  gap?: string;
  className?: string;
} & PropsWithChildren;

export const Flex = ({
  direction = 'row',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  wrap = 'nowrap',
  gap,
  className,
  children,
}: FlexProps) => {
  const flexStyles = {
    display: 'flex',
    flexDirection: direction,
    justifyContent,
    alignItems,
    flexWrap: wrap,
    gap
  };
  return <div className={className} style={flexStyles}>{children}</div>;
};
