import React from 'react';
import {
  CustomActivity,
  CustomAirplay,
  CustomAlertCircle,
  CustomAlertTriangle,
  CustomAlignCenter,
  CustomAlignLeft,
  CustomAlignRight,
  CustomAnchor,
  CustomAperture,
  CustomArchiev,
  CustomArrowDown,
  CustomArrowLeft,
  CustomArrowRight,
  CustomArrowRightLeft,
  CustomArrowUp,
  CustomArrowUpLeft,
  CustomArrowUpRight,
  CustomAtSymbol,
  CustomAward,
  CustomBarChart,
  CustomBattery,
  CustomBatteryCharger,
  CustomBehance,
  CustomBell,
  CustomBellOff,
  CustomBluetooth,
  CustomBold,
  CustomBoldLinkidin,
  CustomBook,
  CustomBookmark,
  CustomBriefcase,
  CustomCalendar,
  CustomCamera,
  CustomCameraOff,
  CustomCast,
  CustomCheck,
  CustomCheckCircle,
  CustomCheckSquare,
  CustomChevron,
  CustomChevronDoubleDown,
  CustomChevronDoubleLeft,
  CustomChevronDoubleRight,
  CustomChevronDoubleUp,
  CustomChevronDown,
  CustomChevronLeft,
  CustomChevronRight,
  CustomChevronUp,
  CustomCircle,
  CustomCircleArrowDownIcon,
  CustomCircleArrowLeftIcon,
  CustomCircleArrowRightIcon,
  CustomCircleArrowUpIcon,
  CustomClipboard,
  CustomClock,
  CustomCloud,
  CustomCloudOff,
  CustomCloudRain,
  CustomCloudSnow,
  CustomCodePen,
  CustomCoffe,
  CustomCommand,
  CustomCompass,
  CustomCopy,
  CustomCornerDownLeft,
  CustomCornerDownRight,
  CustomCornerLeftDown,
  CustomCornerLeftUp,
  CustomCornerRightDown,
  CustomCornerRightUp,
  CustomCornerUpRight,
  CustomCpu,
  CustomCreditCard,
  CustomCrome,
  CustomCrop,
  CustomCrosshair,
  CustomCube,
  CustomDatabase,
  CustomDelete,
  CustomDisc,
  CustomDollarSign,
  CustomDoubleArrow,
  CustomDownload,
  CustomDribbleOutline,
  CustomDroplet,
  CustomEdit,
  CustomExteranlLink,
  CustomEye,
  CustomEyeOff,
  CustomFacebook,
  CustomFastForward,
  CustomFeather,
  CustomFile,
  CustomFilesMinus,
  CustomFilesPlus,
  CustomFilesText,
  CustomFilm,
  CustomFilter,
  CustomFlag,
  CustomFolder,
  CustomFolderAdd,
  CustomFolderMinus,
  CustomGift,
  CustomGiftBranch,
  CustomGitCommit,
  CustomGithub,
  CustomGitlab,
  CustomGitMerge,
  CustomGlobe,
  CustomGoogle,
  CustomGraduation,
  CustomGrid,
  CustomGroupUsers,
  CustomHardDrive,
  CustomHash,
  CustomHeadPhones,
  CustomHeart,
  CustomHelpCircle,
  CustomHome,
  CustomIconCircle,
  CustomImage,
  CustomInbox,
  CustomInfo,
  CustomInstagram,
  CustomItalic,
  CustomJustifyCenter,
  CustomLayers,
  CustomLayout,
  CustomLifeBuoy,
  CustomLink,
  CustomLinkdin,
  CustomLinkShare,
  CustomList,
  CustomLoader,
  CustomLock,
  CustomLogin,
  CustomLogout,
  CustomMail,
  CustomMailLike,
  CustomMap,
  CustomMapPin,
  CustomMaximize,
  CustomMaximize_2,
  CustomMenu,
  CustomMessageCircle,
  CustomMessageSquare,
  CustomMic,
  CustomMicOff,
  CustomMinimize,
  CustomMinimize_2,
  CustomMinus,
  CustomMinusCircle,
  CustomMinusSquare,
  CustomMonitor,
  CustomMoon,
  CustomMoreHorizontal,
  CustomMoreVertical,
  CustomMove,
  CustomMusic,
  CustomNavigation,
  CustomNavigation_2,
  CustomOctgoan,
  CustomOpenBook,
  CustomOutgoing,
  CustomPackage,
  CustomPaperClip,
  CustomPause,
  CustomPauseCircle,
  CustomPencil,
  CustomPencilEdit,
  CustomPercentage,
  CustomPhone,
  CustomPhoneCall,
  CustomPhoneForwared,
  CustomPhoneIncoming,
  CustomPhoneMissed,
  CustomPhoneOff,
  CustomPiechart,
  CustomPlay,
  CustomPlayCircle,
  CustomPlus,
  CustomPlusCircle,
  CustomPlusSquare,
  CustomPocket,
  CustomPower,
  CustomPrinter,
  CustomPullRequest,
  CustomRadio,
  CustomRefreshCcw,
  CustomRefreshCw,
  CustomRepeat,
  CustomRewind,
  CustomRotateCcw,
  CustomRotateCw,
  CustomRss,
  CustomSave,
  CustomScissors,
  CustomSearch,
  CustomSend,
  CustomServer,
  CustomSettings,
  CustomShare,
  CustomShare_2,
  CustomSheild,
  CustomSheildOff,
  CustomShoppingBag,
  CustomShoppingCart,
  CustomShuffle,
  CustomSidebar,
  CustomSkipBack,
  CustomSkipForward,
  CustomSlack,
  CustomSlash,
  CustomSliders,
  CustomSmartPhone,
  CustomSpeaker,
  CustomSquare,
  CustomStar,
  CustomStopCircle,
  CustomSun,
  CustomSunrise,
  CustomSunset,
  CustomTablet,
  CustomTag,
  CustomTarget,
  CustomTerminal,
  CustomThermometer,
  CustomThumbsDown,
  CustomThumbsUp,
  CustomThunderstorm,
  CustomToggleLeft,
  CustomToggleRight,
  CustomTrash,
  CustomTrash_2,
  CustomTrendingDown,
  CustomTrendingUP,
  CustomTriangle,
  CustomTruck,
  CustomTv,
  CustomTwitter,
  CustomType,
  CustomUmbrella,
  CustomUnderline,
  CustomUnlock,
  CustomUpload,
  CustomUpload_2,
  CustomUploadCloud,
  CustomUser,
  CustomUserCheck,
  CustomUserMinus,
  CustomUserPlus,
  CustomUsers,
  CustomUserX,
  CustomVerticalBarChart,
  CustomVideo,
  CustomVideoOff,
  CustomVoiceMail,
  CustomVolume,
  CustomVolume_1,
  CustomVolume_2,
  CustomVolumeX,
  CustomWatch,
  CustomWeather,
  CustomWifi,
  CustomWifiOff,
  CustomWind,
  CustomX,
  CustomXSquare,
  CustomYoutube,
  CustomZap,
  CustomZapOff,
  CustomZoomIn,
  CustomZoomOut,
  CustomAiStars,
} from '../assets/icons';

export type IconName =
  | 'activity'
  | 'airplay'
  | 'alertCircle'
  | 'alertTriangle'
  | 'alignCenter'
  | 'alignLeft'
  | 'alignRight'
  | 'anchor'
  | 'aperture'
  | 'archiev'
  | 'arrowDown'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowRightLeft'
  | 'arrowUp'
  | 'arrowUpLeft'
  | 'arrowUpRight'
  | 'atSymbol'
  | 'award'
  | 'barChart'
  | 'battery'
  | 'batteryCharger'
  | 'behance'
  | 'bell'
  | 'bellOff'
  | 'bluetooth'
  | 'bold'
  | 'boldLinkidin'
  | 'book'
  | 'bookmark'
  | 'briefcase'
  | 'calendar'
  | 'camera'
  | 'cameraOff'
  | 'cast'
  | 'check'
  | 'checkCircle'
  | 'checkSquare'
  | 'chevron'
  | 'chevronDoubleDown'
  | 'chevronDoubleLeft'
  | 'chevronDoubleRight'
  | 'chevronDoubleUp'
  | 'chevronDown'
  | 'chevronLeft'
  | 'chevronRight'
  | 'chevronUp'
  | 'circle'
  | 'circleArrowDown'
  | 'circleArrowLeft'
  | 'circleArrowRight'
  | 'circleArrowUp'
  | 'clipboard'
  | 'clock'
  | 'cloud'
  | 'cloudOff'
  | 'cloudRain'
  | 'cloudSnow'
  | 'codePen'
  | 'coffee'
  | 'command'
  | 'compass'
  | 'copy'
  | 'cornerDownLeft'
  | 'cornerDownRight'
  | 'cornerLeftDown'
  | 'cornerLeftUp'
  | 'cornerRightDown'
  | 'cornerRightUp'
  | 'cornerUpRight'
  | 'cpu'
  | 'creditCard'
  | 'chrome'
  | 'crop'
  | 'crosshair'
  | 'cube'
  | 'database'
  | 'delete'
  | 'disc'
  | 'dollarSign'
  | 'doubleArrow'
  | 'download'
  | 'dribbleOutline'
  | 'droplet'
  | 'edit'
  | 'externalLink'
  | 'eye'
  | 'eyeOff'
  | 'facebook'
  | 'fastForward'
  | 'feather'
  | 'file'
  | 'filesMinus'
  | 'filesPlus'
  | 'filesText'
  | 'film'
  | 'filter'
  | 'flag'
  | 'folder'
  | 'folderAdd'
  | 'folderMinus'
  | 'gift'
  | 'giftBranch'
  | 'gitCommit'
  | 'github'
  | 'gitlab'
  | 'gitMerge'
  | 'globe'
  | 'google'
  | 'graduation'
  | 'grid'
  | 'groupUsers'
  | 'hardDrive'
  | 'hash'
  | 'headphones'
  | 'heart'
  | 'helpCircle'
  | 'home'
  | 'iconCircle'
  | 'image'
  | 'inbox'
  | 'info'
  | 'instagram'
  | 'italic'
  | 'justifyCenter'
  | 'layers'
  | 'layout'
  | 'lifeBuoy'
  | 'link'
  | 'linkedin'
  | 'linkShare'
  | 'list'
  | 'loader'
  | 'lock'
  | 'login'
  | 'logout'
  | 'mail'
  | 'mailLike'
  | 'map'
  | 'mapPin'
  | 'maximize'
  | 'maximize2'
  | 'menu'
  | 'messageCircle'
  | 'messageSquare'
  | 'mic'
  | 'micOff'
  | 'minimize'
  | 'minimize2'
  | 'minus'
  | 'minusCircle'
  | 'minusSquare'
  | 'monitor'
  | 'moon'
  | 'moreHorizontal'
  | 'moreVertical'
  | 'move'
  | 'music'
  | 'navigation'
  | 'navigation2'
  | 'octagon'
  | 'openBook'
  | 'outgoing'
  | 'package'
  | 'paperClip'
  | 'pause'
  | 'pauseCircle'
  | 'pencil'
  | 'pencilEdit'
  | 'percentage'
  | 'phone'
  | 'phoneCall'
  | 'phoneForward'
  | 'phoneIncoming'
  | 'phoneMissed'
  | 'phoneOff'
  | 'pieChart'
  | 'play'
  | 'playCircle'
  | 'plus'
  | 'plusCircle'
  | 'plusSquare'
  | 'pocket'
  | 'power'
  | 'printer'
  | 'pullRequest'
  | 'radio'
  | 'refreshCcw'
  | 'refreshCw'
  | 'repeat'
  | 'rewind'
  | 'rotateCcw'
  | 'rotateCw'
  | 'rss'
  | 'save'
  | 'scissors'
  | 'search'
  | 'send'
  | 'server'
  | 'settings'
  | 'share'
  | 'share2'
  | 'shield'
  | 'shieldOff'
  | 'shoppingBag'
  | 'shoppingCart'
  | 'shuffle'
  | 'sidebar'
  | 'skipBack'
  | 'skipForward'
  | 'slack'
  | 'slash'
  | 'sliders'
  | 'smartphone'
  | 'speaker'
  | 'square'
  | 'star'
  | 'stopCircle'
  | 'sun'
  | 'sunrise'
  | 'sunset'
  | 'tablet'
  | 'tag'
  | 'target'
  | 'terminal'
  | 'thermometer'
  | 'thumbsDown'
  | 'thumbsUp'
  | 'thunderstorm'
  | 'toggleLeft'
  | 'toggleRight'
  | 'trash'
  | 'trash2'
  | 'trendingDown'
  | 'trendingUp'
  | 'triangle'
  | 'truck'
  | 'tv'
  | 'twitter'
  | 'type'
  | 'umbrella'
  | 'underline'
  | 'unlock'
  | 'upload'
  | 'upload2'
  | 'uploadCloud'
  | 'user'
  | 'userCheck'
  | 'userMinus'
  | 'userPlus'
  | 'users'
  | 'userX'
  | 'verticalBarChart'
  | 'video'
  | 'videoOff'
  | 'voiceMail'
  | 'volume'
  | 'volume1'
  | 'volume2'
  | 'volumeX'
  | 'watch'
  | 'weather'
  | 'wifi'
  | 'wifiOff'
  | 'wind'
  | 'x'
  | 'xSquare'
  | 'youtube'
  | 'zap'
  | 'zapOff'
  | 'zoomIn'
  | 'zoomOut'
  | 'aiStars';

// Create a mapping of icon names to their components
export const iconComponents: Record<
  IconName,
  React.ComponentType<{ color?: string; height?: number; width?: number }>
> = {
  activity: CustomActivity,
  airplay: CustomAirplay,
  alertCircle: CustomAlertCircle,
  alertTriangle: CustomAlertTriangle,
  alignCenter: CustomAlignCenter,
  alignLeft: CustomAlignLeft,
  alignRight: CustomAlignRight,
  anchor: CustomAnchor,
  aperture: CustomAperture,
  archiev: CustomArchiev,
  arrowDown: CustomArrowDown,
  arrowLeft: CustomArrowLeft,
  arrowRight: CustomArrowRight,
  arrowRightLeft: CustomArrowRightLeft,
  arrowUp: CustomArrowUp,
  arrowUpLeft: CustomArrowUpLeft,
  arrowUpRight: CustomArrowUpRight,
  atSymbol: CustomAtSymbol,
  award: CustomAward,
  barChart: CustomBarChart,
  battery: CustomBattery,
  batteryCharger: CustomBatteryCharger,
  behance: CustomBehance,
  bell: CustomBell,
  bellOff: CustomBellOff,
  bluetooth: CustomBluetooth,
  bold: CustomBold,
  boldLinkidin: CustomBoldLinkidin,
  book: CustomBook,
  bookmark: CustomBookmark,
  briefcase: CustomBriefcase,
  calendar: CustomCalendar,
  camera: CustomCamera,
  cameraOff: CustomCameraOff,
  cast: CustomCast,
  check: CustomCheck,
  checkCircle: CustomCheckCircle,
  checkSquare: CustomCheckSquare,
  chevron: CustomChevron,
  chevronDoubleDown: CustomChevronDoubleDown,
  chevronDoubleLeft: CustomChevronDoubleLeft,
  chevronDoubleRight: CustomChevronDoubleRight,
  chevronDoubleUp: CustomChevronDoubleUp,
  chevronDown: CustomChevronDown,
  chevronLeft: CustomChevronLeft,
  chevronRight: CustomChevronRight,
  chevronUp: CustomChevronUp,
  circle: CustomCircle,
  circleArrowDown: CustomCircleArrowDownIcon,
  circleArrowLeft: CustomCircleArrowLeftIcon,
  circleArrowRight: CustomCircleArrowRightIcon,
  circleArrowUp: CustomCircleArrowUpIcon,
  clipboard: CustomClipboard,
  clock: CustomClock,
  cloud: CustomCloud,
  cloudOff: CustomCloudOff,
  cloudRain: CustomCloudRain,
  cloudSnow: CustomCloudSnow,
  codePen: CustomCodePen,
  coffee: CustomCoffe,
  command: CustomCommand,
  compass: CustomCompass,
  copy: CustomCopy,
  cornerDownLeft: CustomCornerDownLeft,
  cornerDownRight: CustomCornerDownRight,
  cornerLeftDown: CustomCornerLeftDown,
  cornerLeftUp: CustomCornerLeftUp,
  cornerRightDown: CustomCornerRightDown,
  cornerRightUp: CustomCornerRightUp,
  cornerUpRight: CustomCornerUpRight,
  cpu: CustomCpu,
  creditCard: CustomCreditCard,
  chrome: CustomCrome,
  crop: CustomCrop,
  crosshair: CustomCrosshair,
  cube: CustomCube,
  database: CustomDatabase,
  delete: CustomDelete,
  disc: CustomDisc,
  dollarSign: CustomDollarSign,
  doubleArrow: CustomDoubleArrow,
  download: CustomDownload,
  dribbleOutline: CustomDribbleOutline,
  droplet: CustomDroplet,
  edit: CustomEdit,
  externalLink: CustomExteranlLink,
  eye: CustomEye,
  eyeOff: CustomEyeOff,
  facebook: CustomFacebook,
  fastForward: CustomFastForward,
  feather: CustomFeather,
  file: CustomFile,
  filesMinus: CustomFilesMinus,
  filesPlus: CustomFilesPlus,
  filesText: CustomFilesText,
  film: CustomFilm,
  filter: CustomFilter,
  flag: CustomFlag,
  folder: CustomFolder,
  folderAdd: CustomFolderAdd,
  folderMinus: CustomFolderMinus,
  gift: CustomGift,
  giftBranch: CustomGiftBranch,
  gitCommit: CustomGitCommit,
  github: CustomGithub,
  gitlab: CustomGitlab,
  gitMerge: CustomGitMerge,
  globe: CustomGlobe,
  google: CustomGoogle,
  graduation: CustomGraduation,
  grid: CustomGrid,
  groupUsers: CustomGroupUsers,
  hardDrive: CustomHardDrive,
  hash: CustomHash,
  headphones: CustomHeadPhones,
  heart: CustomHeart,
  helpCircle: CustomHelpCircle,
  home: CustomHome,
  iconCircle: CustomIconCircle,
  image: CustomImage,
  inbox: CustomInbox,
  info: CustomInfo,
  instagram: CustomInstagram,
  italic: CustomItalic,
  justifyCenter: CustomJustifyCenter,
  layers: CustomLayers,
  layout: CustomLayout,
  lifeBuoy: CustomLifeBuoy,
  link: CustomLink,
  linkedin: CustomLinkdin,
  linkShare: CustomLinkShare,
  list: CustomList,
  loader: CustomLoader,
  lock: CustomLock,
  login: CustomLogin,
  logout: CustomLogout,
  mail: CustomMail,
  mailLike: CustomMailLike,
  map: CustomMap,
  mapPin: CustomMapPin,
  maximize: CustomMaximize,
  maximize2: CustomMaximize_2,
  menu: CustomMenu,
  messageCircle: CustomMessageCircle,
  messageSquare: CustomMessageSquare,
  mic: CustomMic,
  micOff: CustomMicOff,
  minimize: CustomMinimize,
  minimize2: CustomMinimize_2,
  minus: CustomMinus,
  minusCircle: CustomMinusCircle,
  minusSquare: CustomMinusSquare,
  monitor: CustomMonitor,
  moon: CustomMoon,
  moreHorizontal: CustomMoreHorizontal,
  moreVertical: CustomMoreVertical,
  move: CustomMove,
  music: CustomMusic,
  navigation: CustomNavigation,
  navigation2: CustomNavigation_2,
  octagon: CustomOctgoan,
  openBook: CustomOpenBook,
  outgoing: CustomOutgoing,
  package: CustomPackage,
  paperClip: CustomPaperClip,
  pause: CustomPause,
  pauseCircle: CustomPauseCircle,
  pencil: CustomPencil,
  pencilEdit: CustomPencilEdit,
  percentage: CustomPercentage,
  phone: CustomPhone,
  phoneCall: CustomPhoneCall,
  phoneForward: CustomPhoneForwared,
  phoneIncoming: CustomPhoneIncoming,
  phoneMissed: CustomPhoneMissed,
  phoneOff: CustomPhoneOff,
  pieChart: CustomPiechart,
  play: CustomPlay,
  playCircle: CustomPlayCircle,
  plus: CustomPlus,
  plusCircle: CustomPlusCircle,
  plusSquare: CustomPlusSquare,
  pocket: CustomPocket,
  power: CustomPower,
  printer: CustomPrinter,
  pullRequest: CustomPullRequest,
  radio: CustomRadio,
  refreshCcw: CustomRefreshCcw,
  refreshCw: CustomRefreshCw,
  repeat: CustomRepeat,
  rewind: CustomRewind,
  rotateCcw: CustomRotateCcw,
  rotateCw: CustomRotateCw,
  rss: CustomRss,
  save: CustomSave,
  scissors: CustomScissors,
  search: CustomSearch,
  send: CustomSend,
  server: CustomServer,
  settings: CustomSettings,
  share: CustomShare,
  share2: CustomShare_2,
  shield: CustomSheild,
  shieldOff: CustomSheildOff,
  shoppingBag: CustomShoppingBag,
  shoppingCart: CustomShoppingCart,
  shuffle: CustomShuffle,
  sidebar: CustomSidebar,
  skipBack: CustomSkipBack,
  skipForward: CustomSkipForward,
  slack: CustomSlack,
  slash: CustomSlash,
  sliders: CustomSliders,
  smartphone: CustomSmartPhone,
  speaker: CustomSpeaker,
  square: CustomSquare,
  star: CustomStar,
  stopCircle: CustomStopCircle,
  sun: CustomSun,
  sunrise: CustomSunrise,
  sunset: CustomSunset,
  tablet: CustomTablet,
  tag: CustomTag,
  target: CustomTarget,
  terminal: CustomTerminal,
  thermometer: CustomThermometer,
  thumbsDown: CustomThumbsDown,
  thumbsUp: CustomThumbsUp,
  thunderstorm: CustomThunderstorm,
  toggleLeft: CustomToggleLeft,
  toggleRight: CustomToggleRight,
  trash: CustomTrash,
  trash2: CustomTrash_2,
  trendingDown: CustomTrendingDown,
  trendingUp: CustomTrendingUP,
  triangle: CustomTriangle,
  truck: CustomTruck,
  tv: CustomTv,
  twitter: CustomTwitter,
  type: CustomType,
  umbrella: CustomUmbrella,
  underline: CustomUnderline,
  unlock: CustomUnlock,
  upload: CustomUpload,
  upload2: CustomUpload_2,
  uploadCloud: CustomUploadCloud,
  user: CustomUser,
  userCheck: CustomUserCheck,
  userMinus: CustomUserMinus,
  userPlus: CustomUserPlus,
  users: CustomUsers,
  userX: CustomUserX,
  verticalBarChart: CustomVerticalBarChart,
  video: CustomVideo,
  videoOff: CustomVideoOff,
  voiceMail: CustomVoiceMail,
  volume: CustomVolume,
  volume1: CustomVolume_1,
  volume2: CustomVolume_2,
  volumeX: CustomVolumeX,
  watch: CustomWatch,
  weather: CustomWeather,
  wifi: CustomWifi,
  wifiOff: CustomWifiOff,
  wind: CustomWind,
  x: CustomX,
  xSquare: CustomXSquare,
  youtube: CustomYoutube,
  zap: CustomZap,
  zapOff: CustomZapOff,
  zoomIn: CustomZoomIn,
  zoomOut: CustomZoomOut,
  aiStars: CustomAiStars,
};
