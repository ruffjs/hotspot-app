import bobcat from './bobcat'
import cotx from './cotx'
import clodpi from './clodpi'
import customAntennas from './custom/antennas'
import finestra from './finestra'
import helium from './helium'
import linxdot from './linxdot'
import longAP from './longAP'
import nebra from './nebra'
import rak from './rak'
import sensecap from './sensecap'
import syncrobit from './syncrobit'
import kerlink from './kerlink'
import heltec from './heltec'
import pisces from './pisces'
import controllino from './controllino'
import freedomfi from './freedomfi'
import hummingbird from './hummingbird'
import { LangType, supportedLangs } from '../utils/i18n/i18nTypes'
import { HotspotMakerLangField } from './hotspotMakerTypes'

export const Makers: Record<string, { id: number; supportEmail: string }> = {
  bobcat,
  cotx,
  clodpi,
  finestra,
  helium,
  linxdot,
  longAP,
  nebra,
  rak,
  sensecap,
  syncrobit,
  kerlink,
  heltec,
  pisces,
  controllino,
  freedomfi,
  hummingbird,
}

export const AntennaModels = {
  ...bobcat.antennas,
  ...cotx.antennas,
  ...clodpi.antennas,
  ...customAntennas,
  ...finestra.antennas,
  ...helium.antennas,
  ...linxdot.antennas,
  ...longAP.antennas,
  ...nebra.antennas,
  ...rak.antennas,
  ...sensecap.antennas,
  ...syncrobit.antennas,
  ...kerlink.antennas,
  ...heltec.antennas,
  ...pisces.antennas,
  ...controllino.antennas,
  ...freedomfi.antennas,
  ...hummingbird.antennas,
}

export const HotspotMakerModels = {
  ...bobcat.hotspots,
  ...cotx.hotspots,
  ...clodpi.hotspots,
  ...finestra.hotspots,
  ...helium.hotspots,
  ...linxdot.hotspots,
  ...longAP.hotspots,
  ...nebra.hotspots,
  ...rak.hotspots,
  ...sensecap.hotspots,
  ...syncrobit.hotspots,
  ...kerlink.hotspots,
  ...heltec.hotspots,
  ...pisces.hotspots,
  ...controllino.hotspots,
  ...freedomfi.hotspots,
  ...hummingbird.hotspots,
}

export type HotspotType = keyof typeof HotspotMakerModels
export const HotspotModelKeys = Object.keys(
  HotspotMakerModels,
).sort() as HotspotType[]
export const HotspotTypeCount = HotspotModelKeys.length

type MakerLangType = Record<
  HotspotType,
  Record<HotspotMakerLangField, string | string[]>
>
export const getTranslations = () => {
  const trans: Record<LangType, MakerLangType> = {
    en: {} as MakerLangType,
    ko: {} as MakerLangType,
    zh: {} as MakerLangType,
    ja: {} as MakerLangType,
  }

  supportedLangs.forEach((l) => {
    HotspotModelKeys.forEach((ht) => {
      trans[l][ht] = HotspotMakerModels[ht].translations[l]
    })
  })
  return trans
}

export type AntennaType = keyof typeof AntennaModels
export const AntennaModelKeys = Object.keys(
  AntennaModels,
).sort() as AntennaType[]
export const AntennaTypeCount = AntennaModelKeys.length

export const getMakerSupportEmail = (makerId?: number): string => {
  const makerKey = Object.keys(Makers).find((m) => Makers[m].id === makerId)
  return makerKey ? Makers[makerKey].supportEmail : 'support@helium.com'
}
