import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import {
  FlagIcon,
  EyeIcon,
  EyeOffIcon,
  GiftIcon,
  MailIcon,
  CheckIcon,
  XIcon as CloseIcon,
  MenuIcon
} from '@heroicons/react/solid'

export type TIcon = {
  className: string
}

//clipboard-list

const TwitterIcon: FC<TIcon> = ({ className }) => <FontAwesomeIcon {...className} icon={faTwitter} />

const ClipboardIcon: FC<TIcon> = ({ className }) => <FontAwesomeIcon {...className} icon={faClipboard} />
const GoogleIcon: FC<TIcon> = ({ className }) => <FontAwesomeIcon {...className} icon={faGoogle} />

export {
  FlagIcon,
  EyeIcon,
  EyeOffIcon,
  GiftIcon,
  MailIcon,
  TwitterIcon,
  CheckIcon,
  ClipboardIcon,
  GoogleIcon,
  CloseIcon,
  MenuIcon
}
