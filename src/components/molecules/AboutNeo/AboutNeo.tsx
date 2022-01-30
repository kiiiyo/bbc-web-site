import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'

export const AboutNeo: FC = () => {
  return (
    <div className="flex flex-col mx-auto mt-24 lg:flex-row lg:w-4/5">
      <div className="object-cover object-top overflow-hidden w-full h-64 rounded lg:object-center lg:w-1/2 lg:h-auto">
        <Image
          alt="Bear Name Neo"
          className=""
          src="/assets/images/body-neo.png"
          layout={'responsive'}
          width={960}
          height={960}
        />
      </div>
      <div className="w-full lg:pl-10 lg:mt-0 lg:w-1/2">
        <h2 className="mt-4 text-sm tracking-widest text-gray-500 lg:mt-0">🐻 BEAR NAME</h2>
        <h1 className="my-1 text-3xl font-medium text-gray-900 ">Neo</h1>
        <p className="mt-6 break-words">TextTextTextTextTextTextTextTextTextTextTextTextText</p>
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
        <div className="flex mt-8">
          <Link href="https://opensea.io/assets/bit-bear-club-avatar-series?search[stringTraits][0][name]=Name&search[stringTraits][0][values][0]=Neo&search[sortAscending]=true&search[sortBy]=PRICE">
            <a
              target="_blank"
              className="inline-flex items-center py-2 px-3 mx-1 text-sm font-medium leading-5 text-center text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-200 md:mx-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 100 100">
                <path
                  fill="#fff"
                  d="M24.6679 51.6801L24.8836 51.341L37.8906 30.9932C38.0807 30.6953 38.5276 30.7261 38.6714 31.0497C40.8444 35.9196 42.7194 41.9762 41.841 45.7468C41.466 47.2982 40.4386 49.3992 39.2827 51.341C39.1338 51.6236 38.9694 51.901 38.7947 52.1681C38.7125 52.2914 38.5738 52.3633 38.4248 52.3633H25.048C24.6884 52.3633 24.4778 51.9729 24.6679 51.6801Z"
                />
                <path
                  fill="#fff"
                  d="M82.6444 55.461V58.6819C82.6444 58.8668 82.5314 59.0312 82.367 59.1031C81.3602 59.5346 77.9132 61.1168 76.48 63.11C72.8224 68.2008 70.0279 75.48 63.7812 75.48H37.721C28.4847 75.48 21 67.9697 21 58.7024V58.4045C21 58.1579 21.2003 57.9576 21.4469 57.9576H35.9745C36.2621 57.9576 36.4727 58.2247 36.4471 58.5072C36.3443 59.4524 36.519 60.4182 36.9659 61.2966C37.8289 63.0484 39.6166 64.1426 41.5481 64.1426H48.74V58.5278H41.6303C41.2656 58.5278 41.0499 58.1065 41.2605 57.8086C41.3375 57.6904 41.4249 57.5672 41.5173 57.4285C42.1903 56.473 43.1509 54.9884 44.1064 53.2983C44.7588 52.1579 45.3906 50.9404 45.8992 49.7178C46.002 49.4969 46.0841 49.2708 46.1663 49.0499C46.305 48.6595 46.4489 48.2948 46.5516 47.9301C46.6544 47.6218 46.7365 47.2982 46.8187 46.9951C47.0602 45.9574 47.1629 44.8581 47.1629 43.7177C47.1629 43.2708 47.1424 42.8033 47.1013 42.3564C47.0807 41.8684 47.0191 41.3803 46.9574 40.8923C46.9163 40.4608 46.8393 40.0344 46.7571 39.5875C46.6544 38.9351 46.5105 38.2879 46.3461 37.6354L46.2896 37.3889C46.1663 36.9419 46.0636 36.5156 45.9198 36.0687C45.5139 34.6662 45.0465 33.2998 44.5533 32.0207C44.3735 31.5121 44.168 31.0241 43.9625 30.5361C43.6595 29.8015 43.3512 29.1337 43.0687 28.5018C42.9249 28.2141 42.8016 27.9521 42.6783 27.685C42.5396 27.3819 42.3958 27.0788 42.2519 26.7912C42.1492 26.5703 42.031 26.3648 41.9488 26.1593L41.0704 24.536C40.9471 24.3151 41.1526 24.0531 41.394 24.1199L46.8907 25.6096H46.9061C46.9163 25.6096 46.9215 25.6148 46.9266 25.6148L47.6509 25.8151L48.4472 26.0412L48.74 26.1233V22.8562C48.74 21.2791 50.0037 20 51.5654 20C52.3462 20 53.0551 20.3185 53.5637 20.8373C54.0722 21.3562 54.3907 22.0651 54.3907 22.8562V27.7056L54.9764 27.8699C55.0226 27.8854 55.0688 27.9059 55.1099 27.9367C55.2538 28.0446 55.4592 28.2038 55.7212 28.3991C55.9267 28.5634 56.1476 28.7638 56.4147 28.9693C56.9438 29.3956 57.5757 29.9453 58.2692 30.5772C58.4541 30.7364 58.6339 30.9008 58.7983 31.0652C59.6922 31.8974 60.6939 32.8734 61.6494 33.9522C61.9165 34.2553 62.1785 34.5635 62.4456 34.8871C62.7127 35.2159 62.9953 35.5395 63.2418 35.8632C63.5655 36.2947 63.9148 36.7416 64.2179 37.2091C64.3617 37.43 64.5261 37.656 64.6648 37.8769C65.0552 38.4676 65.3994 39.079 65.7282 39.6903C65.8669 39.9728 66.0107 40.281 66.134 40.5841C66.4987 41.4009 66.7864 42.2331 66.9713 43.0653C67.0278 43.2451 67.0689 43.4403 67.0895 43.615V43.6561C67.1511 43.9026 67.1717 44.1646 67.1922 44.4317C67.2744 45.2845 67.2333 46.1372 67.0484 46.9951C66.9713 47.3599 66.8686 47.704 66.7453 48.0688C66.622 48.4181 66.4987 48.7828 66.3395 49.127C66.0313 49.841 65.6665 50.5551 65.235 51.2229C65.0963 51.4695 64.9319 51.7315 64.7675 51.9781C64.5877 52.24 64.4028 52.4866 64.2384 52.7281C64.0124 53.0363 63.771 53.3599 63.5244 53.6476C63.3035 53.9507 63.0775 54.2538 62.8309 54.5209C62.4867 54.9267 62.1579 55.312 61.8137 55.6819C61.6083 55.9233 61.3874 56.1699 61.1613 56.3908C60.9405 56.6373 60.7144 56.8582 60.5089 57.0637C60.1648 57.4079 59.8771 57.675 59.6356 57.8959L59.0706 58.4148C58.9884 58.4867 58.8805 58.5278 58.7675 58.5278H54.3907V64.1426H59.8976C61.1305 64.1426 62.3018 63.7059 63.247 62.9045C63.5706 62.622 64.9833 61.3994 66.6528 59.5552C66.7093 59.4935 66.7813 59.4473 66.8635 59.4268L82.0742 55.0295C82.3568 54.9473 82.6444 55.163 82.6444 55.461Z"
                />
              </svg>
              OpenSea
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
