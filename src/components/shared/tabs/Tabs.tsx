'use client';

import { useState } from 'react';
import { Tabs } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { tss } from '@/libs/utils/tss-style';
import React from 'react';

export interface IOptionTab {
  title: string;
  content: React.JSX.Element;
}

type PlacementType = 'left' | 'right' | 'top';

interface TabsCustomProps {
  placement?: PlacementType;
  options: IOptionTab[];
}

const sections = {
  left: {
    rightSection: <IconArrowRight size={20} />,
  },
  right: {
    leftSection: <IconArrowLeft size={20} />,
  },
  top: {
    rightSection: <IconArrowRight size={20} />,
  },
};

const TabsCustom = ({ placement = 'left', options }: TabsCustomProps) => {
  const [value, setValue] = useState<string | null>('1');
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };
  const { classes } = useStyles({ placement });

  if (placement === 'top') {
    return (
      <Tabs
        value={value}
        onChange={setValue}
        variant="none"
        className="gap-5 rounded-[30px] bg-primary p-3 md:p-[30px]"
      >
        <Tabs.List className={classes.list_top}>
          {options.map((option, index) => (
            <React.Fragment key={option.title}>
              <Tabs.Tab
                value={String(index + 1)}
                ref={setControlRef(String(index + 1))}
                className={classes.tab}
                {...sections[placement]}
              >
                {option.title}
              </Tabs.Tab>

              {value === String(index + 1) ? (
                <Tabs.Panel
                  className="block lg:hidden"
                  value={String(index + 1)}
                  key={option.title}
                >
                  {option.content}
                </Tabs.Panel>
              ) : null}
            </React.Fragment>
          ))}
        </Tabs.List>

        {options.map((option, index) =>
          value === String(index + 1) ? (
            <Tabs.Panel className="hidden lg:block" value={String(index + 1)} key={option.title}>
              {option.content}
            </Tabs.Panel>
          ) : null,
        )}
      </Tabs>
    );
  }

  return (
    <Tabs
      variant="none"
      value={value}
      onChange={setValue}
      orientation="vertical"
      placement={placement}
      className="gap-[30px] rounded-[30px] bg-white p-3 md:p-[30px]"
    >
      <Tabs.List className={classes.list}>
        {options.map((option, index) => {
          return (
            <React.Fragment key={option.title}>
              <Tabs.Tab
                value={String(index + 1)}
                ref={setControlRef(String(index + 1))}
                className={classes.tab}
                {...sections[placement]}
              >
                {option.title}
              </Tabs.Tab>

              {value === String(index + 1) ? (
                <Tabs.Panel
                  className="block lg:hidden"
                  value={String(index + 1)}
                  key={option.title}
                >
                  {option.content}
                </Tabs.Panel>
              ) : null}
            </React.Fragment>
          );
        })}
      </Tabs.List>

      {options.map((option, index) =>
        value === String(index + 1) ? (
          <Tabs.Panel className="hidden lg:block" value={String(index + 1)} key={option.title}>
            {option.content}
          </Tabs.Panel>
        ) : null,
      )}
    </Tabs>
  );
};

export { TabsCustom };

const useStyles = tss.withParams<{ placement: PlacementType }>().create(({ placement }) => ({
  list: {
    position: 'relative',
    marginBottom: 'var(--mantine-spacing-md)',
    width: '100%',
    gap: '20px',
    flex: 1,
    maxWidth: 'unset',

    '@media (min-width: 1024px)': {
      maxWidth: '350px',
    },
  },

  list_top: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '49px',
    flexDirection: 'column',

    '@media (min-width: 1024px)': {
      flexDirection: 'row',
    },
  },

  tab: {
    zIndex: 1,
    fontWeight: 500,
    backgroundColor: placement === 'top' ? '#fff' : '#f7f8ff',
    borderRadius: '25px',
    transition: 'all 800ms ease',
    color: placement === 'top' ? '#455589' : '#54595f',
    padding: '30px 20px',
    fontSize: '16px',
    textAlign: 'start',
    textTransform: 'uppercase',
    width: '100%',

    '&[data-active]': {
      backgroundColor: placement === 'top' ? '#455589' : '#1b264a',
      boxShadow: '0px 0px 40px -13px rgba(0, 0, 0, 0.5)',
      color: placement === 'top' ? '#fff' : '#f7f8ff',
      transform: 'translateY(0px) !important',
    },

    '&:hover': {
      backgroundColor: placement === 'top' ? '#455589' : '#1b264a',
      boxShadow: '0px 0px 40px -13px rgba(0, 0, 0, 0.5)',
      color: placement === 'top' ? '#fff' : '#f7f8ff',
      transform: 'translateY(-5px)',
    },

    '@media (min-width: 1024px)': {
      width: placement === 'top' ? 'fit-content' : 'inherit',
    },
  },
}));
