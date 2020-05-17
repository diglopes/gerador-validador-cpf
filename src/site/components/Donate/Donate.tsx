import styles from './Donation.module.styl'
import codeStyles from './Code.module.styl'
import React, { FC, useState } from 'react'
import BTCQR from './img/BTCQR.png'
import CopyToClipboard from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import i18nResources from '@i18nResources'
import { useTranslation } from 'react-i18next'

export const Donate: FC = () => {
  const { t } = useTranslation()
  const [isCodeVisible, setIsCodeVisible] = useState(false)

  interface Track {
    category: string
    type: string
  }

  const trackClick = ({ category, type }: Track) => (): void => {
    if (process.env.NODE_ENV === 'production') {
      import('react-ga').then((ReactGA) => {
        ReactGA.ga('send', 'event', category, 'click', type)
      })
    }
  }

  const handleCopy = (): void => {
    toast(t(i18nResources.messages.walletCopied))
  }

  const toggleCodeVisibility = (): void => {
    setIsCodeVisible(!isCodeVisible)
  }

  const handleClick = (trackInfo: Track) => (): void => {
    trackClick(trackInfo)()
    toggleCodeVisibility()
  }

  return (
    <div className="donation">
      <ul className={`${styles.list} ${isCodeVisible ? styles.blur : ''}`}>
        <li>
          <a
            className={`${styles.button} ${styles.buttonStar}`}
            onClick={trackClick({
              category: 'Star',
              type: 'generate-validade-cpf',
            })}
            aria-label={t(i18nResources.donate.leaveStar)}
            data-footnote={t(i18nResources.donate.leaveStar)}
            href="https://github.com/tiagoporto/gerador-validador-cpf/stargazers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="14" height="16" viewBox="0 0 14 16" version="1.1">
              <path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            className={`${styles.button} ${styles.buttonPaypal}`}
            onClick={trackClick({
              category: 'Donate',
              type: 'Paypal generate-validade-cpf',
            })}
            aria-label={t(i18nResources.donate.contributePaypal)}
            data-footnote={t(i18nResources.donate.contributePaypal)}
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YTDUQ8RZ2G4Q8&lc=BR&item_name=tiagoporto&item_number=geradorcpf&currency_code=BRL&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted"
            target="_blank"
            rel="noopener noreferrer"
          >
            PayPal
          </a>
        </li>

        <li>
          <CopyToClipboard
            text="3DztnDvY7McQ7zwGS8Vjafsbc1ee1HDAmE"
            onCopy={handleCopy}
          >
            <button
              className={`${styles.button} ${styles.buttonBitcoin}`}
              onClick={handleClick({
                category: 'Donate',
                type: 'Bitcoin generate-validate-cpf',
              })}
              aria-label={t(i18nResources.donate.contributeBitcoin)}
              data-footnote={t(i18nResources.donate.contributeBitcoin)}
            >
              Bitcoin
            </button>
          </CopyToClipboard>
        </li>
      </ul>

      <div
        className={codeStyles.codeBox}
        style={{ display: isCodeVisible ? 'block' : 'none' }}
      >
        <img
          src={BTCQR}
          onClick={toggleCodeVisibility}
          className={`${codeStyles.code} ${
            isCodeVisible ? codeStyles.showCode : codeStyles.hideCode
          }`}
        />
      </div>
    </div>
  )
}
