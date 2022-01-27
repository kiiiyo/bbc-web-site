import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FlagIcon, EyeIcon, EyeOffIcon, GiftIcon, MailIcon, CheckIcon } from '@heroicons/react/solid'

export type TIcon = {
  className: string
}

const TwitterIcon: FC<TIcon> = ({ className }) => <FontAwesomeIcon {...className} icon={faTwitter} />

export { FlagIcon, EyeIcon, EyeOffIcon, GiftIcon, MailIcon, TwitterIcon, CheckIcon }
