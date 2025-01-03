'use client'

import { Burger, Transition } from '@mantine/core'
import {
  IconBook,
  IconCashRegister,
  IconMap,
  IconPhoto,
  IconStar,
} from '@tabler/icons-react'
import { useMemo } from 'react'
import type React from 'react'
import { LinksGroup } from './navbar-links-group/NavbarLinksGroup'
import { useStyles } from './navbar.style'

export interface INavbar {
  label: string
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  icon: React.FC<any>
  link?: string
  links?: {
    label: string
    link: string
  }[]
}

const adminVietnameseSideBar = [
  {
    label: 'Bài viết',
    icon: IconBook,
    links: [
      {
        label: 'Quản lý bài viết',
        link: '/admin/quan-ly-bai-viet',
      },
    ],
  },
  {
    label: 'Tours',
    icon: IconMap,
    links: [
      {
        label: 'Quản lý tours',
        link: '/admin/quan-ly-tours',
      },
    ],
  },
  {
    label: 'Thanh toán',
    icon: IconCashRegister,
    links: [
      {
        label: 'Quản lý thanh toán',
        link: '/admin/quan-ly-thanh-toan',
      },
      {
        label: 'Thống kê theo khách hàng',
        link: '/admin/thong-ke-theo-khach-hang',
      },
    ],
  },
  {
    label: 'Album',
    icon: IconPhoto,
    links: [
      {
        label: 'Quản lý album',
        link: '/admin/quan-ly-album',
      },
    ],
  },
  {
    label: 'Đánh giá',
    icon: IconStar,
    links: [
      {
        label: 'Quản lý đánh giá',
        link: '/admin/quan-ly-danh-gia',
      },
    ],
  },
]

interface Props {
  toggle?: () => void
  closeNavbar: () => void
  opened?: boolean
}

export const Navbar = ({ opened, toggle, closeNavbar }: Props) => {
  const { classes } = useStyles()

  const links = useMemo(() => {
    const sideBar = adminVietnameseSideBar

    return sideBar?.map((item) => (
      <LinksGroup {...item} key={item.label} closeNavbar={closeNavbar} />
    ))
  }, [closeNavbar])

  return (
    <>
      <nav className={classes.navbar_desktop}>
        <div className={classes.links_inner}>{links}</div>
      </nav>

      <Transition
        transition="pop-top-left"
        duration={200}
        mounted={!!opened}
        keepMounted={true}
      >
        {(styles) => (
          <nav style={styles} className={classes.navbar_mobile}>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              p={8}
              style={{
                margin: '12px 12px 0px 12px',
              }}
            />
            <div className={classes.links_inner}>{links}</div>
          </nav>
        )}
      </Transition>
    </>
  )
}
