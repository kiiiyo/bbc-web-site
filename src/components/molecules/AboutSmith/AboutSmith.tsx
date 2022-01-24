import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'

export const AboutSmith: FC = () => {
  return (
    <div className="flex flex-col mx-auto mt-24 lg:flex-row lg:w-4/5">
      <div className="object-cover object-top overflow-hidden w-full h-64 rounded lg:object-center lg:w-1/2 lg:h-auto">
        <Image
          alt="Bear Name Neo"
          className=""
          src="/assets/images/body-smith.png"
          layout={'responsive'}
          width={960}
          height={960}
        />
      </div>
      <div className="w-full lg:pl-10 lg:mt-0 lg:w-1/2">
        <h2 className="mt-4 text-sm tracking-widest text-gray-500 lg:mt-0">🐻 BEAR NAME</h2>
        <h1 className="my-1 text-3xl font-medium text-gray-900 ">Smith</h1>
        <p className="mt-6">TextTextTextTextTextTextTextTextTextTextTextTextText</p>
        <h3 className="mt-4 text-xl font-medium text-gray-900">Avatar</h3>
        <div className="flex mt-2">
          <Link href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/85612792707671471240665121138616411211534411599642434463980733055135626821633">
            <a
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden -ml-4 w-24 h-24 rounded-full border-4 border-white"
            >
              <Image
                className="w-full h-full"
                src="https://lh3.googleusercontent.com/U12mT7o2i4PbjeVQPe2yX4L4upgXl_QR9XefE-7h9EBuUCivaJppfT2RZv-_s8kH6O2MT6c1nHiQqcWKCnpHcpEp4AG3MftEJVbMU3k=w600"
                alt="Bit Bear Avatar Series #A0001"
                width="100%"
                height="100%"
              />
            </a>
          </Link>
          <Link href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/85612792707671471240665121138616411211534411599642434463980733140897533788161">
            <a
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden -ml-4 w-24 h-24 rounded-full border-4 border-white"
            >
              <Image
                className="w-full h-full"
                src="https://lh3.googleusercontent.com/n1g39NMO3tBRH25O-TqHxjhbn5FDWu6Snc0-lzK5c_Os9MSfn1c6Fp3AwnwAl_yMyDa_yf5P8Ikkwwsm0d_ufG0ybsWeyeOzcDtjyA=w600"
                alt="Bit Bear Avatar Series #A0072"
                width="100%"
                height="100%"
              />
            </a>
          </Link>
          <Link href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/85612792707671471240665121138616411211534411599642434463980733158489719832577">
            <a
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden -ml-4 w-24 h-24 rounded-full border-4 border-white"
            >
              <Image
                className="w-full h-full"
                src="https://lh3.googleusercontent.com/tjDoe6CgrFpl_BdkmIeTtUD1llLla6W6efY4dfDsaJpzhW0TaDJW35fwr7gGQteWYKknUZlVDnlVZK38hynCqf2uPnJg84ZD8hkVZw=w600"
                alt=""
                width="100%"
                height="100%"
              />
            </a>
          </Link>
          <Link href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/85612792707671471240665121138616411211534411599642434463980733051837091938305">
            <a
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden -ml-4 w-24 h-24 rounded-full border-4 border-white"
            >
              <Image
                className="w-full h-full"
                src="https://lh3.googleusercontent.com/5saqPG7oEsUrX2mVPuYBAuPRdEoijo9mAmpadUZaosS15Dmtzt5Mrm5UMoxIvimYPdMWvOsrXMrPhHyuRrbTrDxj5bTHM7B_uKE1lOI=w600"
                alt="Bit Bear Avatar Series #A0121"
                width="100%"
                height="100%"
              />
            </a>
          </Link>
          <Link href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/85612792707671471240665121138616411211534411599642434463980733051837091938305">
            <a
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden -ml-4 w-24 h-24 rounded-full border-4 border-white"
            >
              <Image
                className="w-full h-full"
                src="https://lh3.googleusercontent.com/U4PwWlcAi8-tZgz4XdMwVhhhJ3yjH3N1kpKW1d0KIJhUu1TpJXpWz6kTIjGIzpGce1lc_Y8Iqy-zoZsof_Gl3DwvNMP2ZX0lmJfp=w600"
                alt="Bit Bear Avatar Series #A0119"
                width="100%"
                height="100%"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
