'use client'
import { Container, Image } from '@mantine/core'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className="bg-[url('/images/bgft.png')] bg-cover bg-center flex items-center justify-center">
        <Container size="lg" className="py-8">
          <div className="flex flex-col items-center gap-8">
            <Link href="/">
              <div className="w-full h-full max-w-[150px] max-h-[150px]">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  className="h-full w-full"
                />
              </div>
            </Link>

            <div className="flex flex-col items-center">
              <p className="text-3xl font-semibold text-[#F19C47]">
                Công ty TNHH Lữ Phong
              </p>
              <p className="text-white text-center font-inter text-xl font-medium">
                Địa chỉ: Khu phố 3 phường Đông Hưng Thuận, quận 12, TPHCM
              </p>
              <p className="text-white text-center font-inter text-xl font-medium">
                Sđt: +84 982 837 905
              </p>
              <p className="text-white text-center font-inter text-xl font-medium">
                Email: sgurbantours@gmail.com
              </p>
              <p className="text-white text-center font-inter text-xl font-medium">
                Website: saigonurbantours.com
              </p>
            </div>

            <p className="text-white font-inter text-xl font-medium leading-none">
              COPY RIGHT CÔNG TY BÁ CƯƠNG | Design By Nguyễn Cường
            </p>
          </div>
        </Container>
      </div>
    </>
  )
}

export { Footer }
