import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

// Define your SVG strings
const HealthIconSvg = `
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 266.66666 266.66666"
   height="300"
   width="300"
   xml:space="preserve"
   id="svg2"
   version="1.1"><metadata
     id="metadata8"><rdf:RDF><cc:Work
         rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" /></cc:Work></rdf:RDF></metadata><defs
     id="defs6"><linearGradient
       id="linearGradient30"
       spreadMethod="pad"
       gradientTransform="matrix(190,0,0,-190,5,100)"
       gradientUnits="userSpaceOnUse"
       y2="0"
       x2="1"
       y1="0"
       x1="0"><stop
         id="stop24"
         offset="0"
         style="stop-opacity:1;stop-color:#f26f61" /><stop
         id="stop26"
         offset="0.00302484"
         style="stop-opacity:1;stop-color:#f26f61" /><stop
         id="stop28"
         offset="1"
         style="stop-opacity:1;stop-color:#f58e58" /></linearGradient></defs><g
     transform="matrix(1.3333333,0,0,-1.3333333,0,266.66667)"
     id="g10"><g
       id="g12"><g
         id="g14"><g
           id="g20"><g
             id="g22"><path
               id="path32"
               style="fill:url(#linearGradient30);stroke:none"
               d="M 20.302,170.946 C 12.908,164.005 7.799,155.598 5.812,145.499 v 0 c -0.204,-1.039 -0.371,-2.087 -0.559,-3.13 v 0 c -0.005,-0.03 -0.073,-0.081 -0.082,-0.075 v 0 c -0.062,0.04 -0.115,0.092 -0.171,0.141 v 0 -12.825 c 0.515,0.184 0.404,-0.256 0.431,-0.474 v 0 c 1.105,-9.189 4.81,-17.461 8.988,-25.57 v 0 c 0.238,-0.464 0.523,-0.604 1.014,-0.601 v 0 c 9.975,0.058 19.95,0.111 29.924,0.136 v 0 c 0.665,0.002 0.878,0.374 1.121,0.842 v 0 c 3.244,6.237 6.476,12.481 9.748,18.705 v 0 c 3.124,5.944 6.28,11.872 9.443,17.796 v 0 c 1.828,3.424 5.376,5.027 9.317,4.262 v 0 c 3.924,-0.762 6.51,-3.46 6.916,-7.386 v 0 c 1.079,-10.426 2.106,-20.858 3.161,-31.287 v 0 c 0.541,-5.353 1.095,-10.704 1.656,-16.054 v 0 c 0.053,-0.498 0.201,-0.987 0.311,-1.514 v 0 c 0.499,0.073 0.524,0.487 0.676,0.766 v 0 c 1.47,2.708 2.896,5.44 4.404,8.126 v 0 c 1.43,2.549 3.356,4.561 6.447,4.879 v 0 c 1.965,0.201 3.952,0.247 5.929,0.248 v 0 c 4.531,0.003 9.063,-0.008 13.596,-0.018 v 0 c 7.222,-0.015 14.447,-0.032 21.67,0.004 v 0 c 6.016,0.03 12.028,-0.097 18.041,-0.179 v 0 c 2.373,-0.033 4.736,-0.061 6.771,-1.648 v 0 c 2.746,-2.14 3.68,-4.996 3.29,-8.294 v 0 c -0.402,-3.395 -2.367,-5.767 -5.535,-6.952 v 0 c -1.51,-0.564 -3.132,-0.525 -4.743,-0.486 v 0 c -0.462,0.011 -0.923,0.023 -1.38,0.02 v 0 c -16.501,-0.096 -33.001,-0.175 -49.504,-0.217 v 0 c -1.02,-0.003 -1.504,-0.335 -1.963,-1.232 v 0 C 99.572,73.388 94.533,63.231 89.042,53.31 v 0 C 87.713,50.909 86.1,48.946 83.236,48.313 v 0 C 77.732,47.096 73.195,50.187 72.44,55.75 v 0 c -1.026,7.569 -1.614,15.182 -2.375,22.777 v 0 c -0.871,8.697 -1.749,17.396 -2.629,26.093 v 0 c -0.006,0.06 -0.074,0.114 -0.162,0.242 v 0 c -0.512,-0.41 -0.743,-0.994 -1.033,-1.53 v 0 C 64.027,99.23 61.839,95.115 59.595,91.029 v 0 C 58.816,89.607 57.897,88.26 56.642,87.195 v 0 C 55.524,86.243 54.238,85.74 52.753,85.662 v 0 C 47.299,85.374 41.843,85.405 36.387,85.435 v 0 c -2.934,0.016 -5.867,0.033 -8.8,0 v 0 C 27.164,85.431 26.741,85.434 26.03,85.434 v 0 c 1.829,-2.374 3.46,-4.586 5.188,-6.721 v 0 C 45.941,60.525 62.27,43.965 80.95,29.8 v 0 c 5.176,-3.925 10.607,-7.444 16.569,-10.096 v 0 c 1.057,-0.469 1.914,-0.54 2.987,0 v 0 c 8.866,4.464 16.986,10.085 24.912,16.002 v 0 c 15.278,11.405 29.189,24.319 41.707,38.68 v 0 c 9.606,11.022 17.706,23.072 23.161,36.749 v 0 c 2.088,5.232 3.62,10.612 4.271,16.223 v 0 c 0.027,0.227 0.122,0.446 0.191,0.665 v 0 c 0.01,0.033 0.076,0.079 0.084,0.074 v 0 c 0.06,-0.044 0.113,-0.098 0.168,-0.149 v 0 12.112 c -0.673,-0.075 -0.411,0.488 -0.445,0.745 v 0 c -1.619,12.065 -7.131,22.127 -16.039,30.258 v 0 c -7.068,6.45 -15.642,9.214 -25.165,8.977 v 0 c -15.157,-0.378 -27.956,-6.555 -39.337,-16.151 v 0 c -4.924,-4.152 -9.298,-8.815 -13.064,-14.044 v 0 c -0.229,-0.319 -0.482,-0.62 -0.796,-1.023 v 0 c -1.167,1.287 -2.285,2.537 -3.42,3.772 v 0 c -6.101,6.637 -12.715,12.72 -20.3,17.61 v 0 c -7.345,4.735 -15.175,8.474 -23.93,9.862 v 0 c -2.535,0.401 -5.019,0.609 -7.447,0.609 v 0 c -9.193,0 -17.569,-2.983 -24.755,-9.729" /></g></g></g></g></g></svg>
`;

const LocateIconSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M0 0 C0.74604492 0.19787109 1.49208984 0.39574219 2.26074219 0.59960938 C30.63101791 8.38160245 54.55381981 23.08314941 76 43 C76.96486328 43.86625 76.96486328 43.86625 77.94921875 44.75 C104.82388593 69.99077756 123.56035902 110.88825744 125.16113281 147.70605469 C125.54077458 183.56012954 125.54077458 183.56012954 122 198 C121.70198486 199.24595947 121.70198486 199.24595947 121.39794922 200.51708984 C115.68670751 223.74280611 105.15257101 244.15870544 91.78515625 263.84765625 C88.51056815 268.69129309 85.38099712 273.62527465 82.25 278.5625 C81.65743408 279.49658691 81.06486816 280.43067383 80.4543457 281.39306641 C79.24062286 283.30751037 78.02732847 285.22222603 76.81445312 287.13720703 C73.88298628 291.76239275 70.94109603 296.38093389 68 301 C66.85150971 302.8046539 65.70307248 304.60934158 64.5546875 306.4140625 C58.703125 315.609375 52.8515625 324.8046875 47 334 C47.84530273 334.10812012 48.69060547 334.21624023 49.56152344 334.32763672 C58.25005221 335.49591261 66.71508362 337.10911027 75.25 339.125 C75.89041229 339.27584045 76.53082458 339.42668091 77.19064331 339.58209229 C111.4245631 347.69005653 158.01367551 359.84289881 178 392 C185.009803 404.55516248 186.81237823 416.24736674 184.41796875 430.453125 C178.48763423 450.70833149 160.43994983 463.56617905 142.92358398 473.44873047 C110.35162541 491.03573215 72.90313929 498.69687931 36.5625 503.8125 C35.8688736 503.91177795 35.17524719 504.01105591 34.46060181 504.11334229 C10.62560564 507.47725661 -13.24887844 508.38030357 -37.29134369 508.31785583 C-39.47200188 508.3124139 -41.65264921 508.31004783 -43.83331299 508.3079834 C-65.35210413 508.27624717 -86.63297627 507.7347222 -108 505 C-109.81395264 504.7831958 -109.81395264 504.7831958 -111.66455078 504.56201172 C-153.87618897 499.46546014 -203.10154397 490.11071168 -238 464 C-239.41345703 462.95392578 -239.41345703 462.95392578 -240.85546875 461.88671875 C-252.3564052 452.95564672 -261.8727277 441.58139866 -265 427 C-266.53847038 409.41050899 -262.73536516 397.14372317 -251.4375 383.5625 C-221.9512449 351.51222272 -171.22042923 340.89984616 -130 334 C-129.01 334 -128.02 334 -127 334 C-134.45044725 322.18299025 -141.9275293 310.38332419 -149.43359375 298.6015625 C-151.78427241 294.91158098 -154.1304826 291.21882297 -156.47265625 287.5234375 C-157.62751931 285.70307117 -158.78246727 283.88275868 -159.9375 282.0625 C-160.50936035 281.15999512 -161.0812207 280.25749023 -161.67041016 279.32763672 C-164.68934592 274.57781071 -167.74551076 269.85750554 -170.86328125 265.171875 C-197.39882382 225.25058847 -212.51205359 180.23219325 -203.3125 131.875 C-202.62366532 128.55963559 -201.84252354 125.27938198 -201 122 C-200.81276367 121.24138672 -200.62552734 120.48277344 -200.43261719 119.70117188 C-197.73737862 108.98538744 -193.80840487 98.93603994 -189 89 C-188.69191406 88.36320312 -188.38382812 87.72640625 -188.06640625 87.0703125 C-168.1286888 46.53304465 -132.24786332 17.50363152 -89.96459961 2.80712891 C-86.6761938 1.73589621 -83.35203821 0.84787304 -80 0 C-78.88890869 -0.29197266 -78.88890869 -0.29197266 -77.75537109 -0.58984375 C-53.18833135 -6.78857734 -24.4595581 -6.50442289 0 0 Z M-72 30 C-73.21792236 30.33862061 -73.21792236 30.33862061 -74.46044922 30.68408203 C-110.73652947 41.13240153 -140.16130068 64.56268067 -158.65332031 97.55786133 C-165.94216694 111.02848684 -170.19799343 124.99570677 -173 140 C-173.1757959 140.93062256 -173.3515918 141.86124512 -173.53271484 142.82006836 C-175.89347059 158.88529489 -175.37665349 178.35860413 -171 194 C-170.66935547 195.19979492 -170.66935547 195.19979492 -170.33203125 196.42382812 C-165.27807625 214.16615165 -157.17231127 229.80629909 -146.75 244.953125 C-143.46171267 249.74532021 -140.35977919 254.65331402 -137.25 259.5625 C-136.65590332 260.49900391 -136.06180664 261.43550781 -135.44970703 262.40039062 C-134.23451933 264.31673607 -133.01984152 266.23340494 -131.80566406 268.15039062 C-128.9177216 272.70799803 -126.02165973 277.2604297 -123.125 281.8125 C-122.26696777 283.16130249 -122.26696777 283.16130249 -121.39160156 284.53735352 C-116.93954194 291.53247608 -112.47181101 298.51749144 -108 305.5 C-101.21971821 316.08706986 -94.46257897 326.68864146 -87.71777344 337.29833984 C-84.81326436 341.86646057 -81.90650771 346.43315077 -79 351 C-77.8333228 352.83332663 -76.66665613 354.66665996 -75.5 356.5 C-74.9225 357.4075 -74.345 358.315 -73.75 359.25 C-72 362 -70.25 364.75 -68.5 367.5 C-67.92161377 368.40886963 -67.34322754 369.31773926 -66.74731445 370.25415039 C-65.58951523 372.07359539 -64.43179934 373.89309344 -63.27416992 375.71264648 C-60.22253945 380.50892651 -57.16914398 385.30407143 -54.11328125 390.09765625 C-53.47712891 391.09603516 -52.84097656 392.09441406 -52.18554688 393.12304688 C-50.96733093 395.03484562 -49.74860824 396.94632159 -48.52929688 398.85742188 C-47.70461914 400.15196289 -47.70461914 400.15196289 -46.86328125 401.47265625 C-46.38157471 402.22812744 -45.89986816 402.98359863 -45.40356445 403.76196289 C-44.37154626 405.40755531 -43.3930337 407.08700846 -42.44604492 408.78295898 C-41.9688501 409.51458252 -41.49165527 410.24620605 -41 411 C-40.34 411 -39.68 411 -39 411 C-37.54586502 409.11348144 -37.54586502 409.11348144 -36.0859375 406.62890625 C-35.49820557 405.67508057 -34.91047363 404.72125488 -34.30493164 403.73852539 C-33.34961548 402.16639282 -33.34961548 402.16639282 -32.375 400.5625 C-31.00775591 398.34298228 -29.63922642 396.12425596 -28.26953125 393.90625 C-27.74059517 393.04731895 -27.74059517 393.04731895 -27.20097351 392.17103577 C-23.55573746 386.25819399 -19.81650239 380.40679918 -16.0625 374.5625 C-15.40121094 373.53157227 -14.73992187 372.50064453 -14.05859375 371.43847656 C-12.71445846 369.34347501 -11.36989436 367.24874851 -10.02490234 365.15429688 C-6.63693674 359.87668467 -3.25581644 354.59469381 0.125 349.3125 C0.78862549 348.27577148 1.45225098 347.23904297 2.13598633 346.17089844 C8.7766929 335.79290947 15.3904124 325.39782552 22 315 C29.98911625 302.43197883 37.99474751 289.8748463 46.02758789 277.3347168 C51.05387585 269.48567039 56.06651997 261.6280378 61.05151367 253.75268555 C63.65703928 249.64384245 66.28160232 245.55476547 69 241.51953125 C85.32436159 217.2088498 94.41545289 191.40559103 94.375 161.9375 C94.37445618 161.26257507 94.37391235 160.58765015 94.37335205 159.89227295 C94.2437701 124.72580451 80.2002565 94.01865803 57 68 C56.05060547 66.92298828 56.05060547 66.92298828 55.08203125 65.82421875 C34.18747839 43.54592067 1.72386646 28.53987134 -28.58447266 26.79345703 C-32.30891361 26.69729421 -36.02437158 26.67052512 -39.75 26.6875 C-40.4074118 26.68998749 -41.06482361 26.69247498 -41.74215698 26.69503784 C-52.14224502 26.75572617 -61.95096566 27.200443 -72 30 Z M-229.6640625 406.39453125 C-233.2911301 410.75337564 -234.76861397 414.95792581 -234.5234375 420.578125 C-232.53567844 429.77521918 -224.23793285 436.0186351 -216.76464844 440.89111328 C-183.22084146 461.96969259 -142.1115457 469.68262176 -103.3125 474.25 C-102.60696991 474.33317474 -101.90143982 474.41634949 -101.17453003 474.50204468 C-86.71074952 476.18346682 -72.29731509 477.15040587 -57.73046875 477.203125 C-56.42265945 477.21013931 -55.11485016 477.21715363 -53.76741028 477.22438049 C-49.57410178 477.24375372 -45.38084876 477.2488142 -41.1875 477.25 C-40.47259399 477.25044186 -39.75768799 477.25088371 -39.02111816 477.25133896 C-17.21152236 477.25840541 4.35269585 476.94478522 26 474 C27.35561973 473.82119975 28.71125159 473.64249138 30.06689453 473.46386719 C47.96129473 471.06988697 65.56278884 467.7133347 83 463 C83.89106445 462.76168457 84.78212891 462.52336914 85.70019531 462.27783203 C108.01055436 456.22002489 133.14042084 447.62175462 149 430 C149.46535156 429.48953125 149.93070312 428.9790625 150.41015625 428.453125 C153.67809784 424.48426001 154.75028426 421.34565379 154.41015625 416.19140625 C152.82230984 407.70776971 145.59162799 401.63478501 138.96484375 396.7734375 C111.04720789 377.70713388 62.09872216 359.31968471 28 363 C25.98783722 364.80167865 25.98783722 364.80167865 24.53515625 367.359375 C23.6536792 368.73512695 23.6536792 368.73512695 22.75439453 370.13867188 C22.17544434 371.08291016 21.59649414 372.02714844 21 373 C19.91643921 374.67257168 18.83182439 376.34446104 17.74609375 378.015625 C16.64092243 379.75895647 15.53814019 381.5038043 14.4375 383.25 C13.2070932 385.19274757 11.97662265 387.13545477 10.74609375 389.078125 C10.12460449 390.06103516 9.50311523 391.04394531 8.86279297 392.05664062 C5.91763339 396.71022435 2.95851219 401.35489831 0 406 C-3.57475389 411.6143806 -7.14700971 417.23030186 -10.7109375 422.8515625 C-14.12945911 428.24154309 -17.56029636 433.62351627 -21 439 C-21.65452148 440.02697998 -21.65452148 440.02697998 -22.32226562 441.07470703 C-23.41510035 442.78416168 -24.51947724 444.48622332 -25.625 446.1875 C-26.47964844 447.50814453 -26.47964844 447.50814453 -27.3515625 448.85546875 C-29.8551656 452.11252587 -32.11225438 453.70408479 -36 455 C-41.77637741 455.37877885 -44.90118475 455.03916225 -50 452 C-55.96833348 445.67284888 -60.24923986 437.44961429 -64.72802734 430.0300293 C-67.83782573 424.87839576 -71.02659834 419.79102907 -74.3125 414.75 C-78.54445799 408.25683009 -82.72312478 401.7321845 -86.875 395.1875 C-91.65257069 387.66467793 -96.46069663 380.16268577 -101.3125 372.6875 C-101.8698584 371.82729248 -102.4272168 370.96708496 -103.00146484 370.08081055 C-103.51273926 369.29488525 -104.02401367 368.50895996 -104.55078125 367.69921875 C-105.22620972 366.66027466 -105.22620972 366.66027466 -105.9152832 365.6003418 C-106.90440122 364.03273576 -106.90440122 364.03273576 -108 363 C-145.72078222 361.38124388 -203.41881324 378.4209363 -229.6640625 406.39453125 Z " fill="#FFA500" transform="translate(296,4)"/>
  </svg>
`;

const ProfileIconSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M0 0 C1.45108658 0.00273422 1.45108658 0.00273422 2.93148804 0.00552368 C17.26440977 0.05095174 31.21023917 0.55983928 45.3125 3.3125 C46.65803955 3.55395752 46.65803955 3.55395752 48.03076172 3.80029297 C96.71843124 12.61028149 141.74255908 36.05356547 177.3125 70.3125 C178.3015332 71.26068604 178.3015332 71.26068604 179.31054688 72.22802734 C188.79880305 81.37247479 197.5387044 90.66984009 205.3125 101.3125 C206.17056152 102.46355017 207.02863451 103.61459177 207.88671875 104.765625 C213.92427396 112.95525981 219.30707302 121.45788276 224.3125 130.3125 C224.7146875 131.01971191 225.116875 131.72692383 225.53125 132.45556641 C238.54775099 155.57510937 247.281052 180.72419753 252.625 206.6875 C252.77235596 207.39801514 252.91971191 208.10853027 253.0715332 208.84057617 C256.05794017 224.48291051 256.68730954 240.11926093 256.625 256 C256.62226578 257.45108658 256.62226578 257.45108658 256.61947632 258.93148804 C256.57404826 273.26440977 256.06516072 287.21023917 253.3125 301.3125 C253.15152832 302.20952637 252.99055664 303.10655273 252.82470703 304.03076172 C244.01471851 352.71843124 220.57143453 397.74255908 186.3125 433.3125 C185.68037598 433.97185547 185.04825195 434.63121094 184.39697266 435.31054688 C175.25252521 444.79880305 165.95515991 453.5387044 155.3125 461.3125 C154.16144983 462.17056152 153.01040823 463.02863451 151.859375 463.88671875 C143.66974019 469.92427396 135.16711724 475.30707302 126.3125 480.3125 C125.60528809 480.7146875 124.89807617 481.116875 124.16943359 481.53125 C101.04989063 494.54775099 75.90080247 503.281052 49.9375 508.625 C49.22698486 508.77235596 48.51646973 508.91971191 47.78442383 509.0715332 C32.14208949 512.05794017 16.50573907 512.68730954 0.625 512.625 C-0.34239105 512.62317719 -1.3097821 512.62135437 -2.30648804 512.61947632 C-16.63940977 512.57404826 -30.58523917 512.06516072 -44.6875 509.3125 C-45.58452637 509.15152832 -46.48155273 508.99055664 -47.40576172 508.82470703 C-96.09343124 500.01471851 -141.11755908 476.57143453 -176.6875 442.3125 C-177.34685547 441.68037598 -178.00621094 441.04825195 -178.68554688 440.39697266 C-188.17380305 431.25252521 -196.9137044 421.95515991 -204.6875 411.3125 C-205.54556152 410.16144983 -206.40363451 409.01040823 -207.26171875 407.859375 C-213.29927396 399.66974019 -218.68207302 391.16711724 -223.6875 382.3125 C-224.0896875 381.60528809 -224.491875 380.89807617 -224.90625 380.16943359 C-237.92275099 357.04989063 -246.656052 331.90080247 -252 305.9375 C-252.22103394 304.87172729 -252.22103394 304.87172729 -252.4465332 303.78442383 C-255.43294017 288.14208949 -256.06230954 272.50573907 -256 256.625 C-255.99817719 255.65760895 -255.99635437 254.6902179 -255.99447632 253.69351196 C-255.94904826 239.36059023 -255.44016072 225.41476083 -252.6875 211.3125 C-252.44604248 209.96696045 -252.44604248 209.96696045 -252.19970703 208.59423828 C-243.38971851 159.90656876 -219.94643453 114.88244092 -185.6875 79.3125 C-185.05537598 78.65314453 -184.42325195 77.99378906 -183.77197266 77.31445312 C-174.62752521 67.82619695 -165.33015991 59.0862956 -154.6875 51.3125 C-153.53644983 50.45443848 -152.38540823 49.59636549 -151.234375 48.73828125 C-143.04474019 42.70072604 -134.54211724 37.31792698 -125.6875 32.3125 C-124.98028809 31.9103125 -124.27307617 31.508125 -123.54443359 31.09375 C-100.42489063 18.07724901 -75.27580247 9.343948 -49.3125 4 C-48.24672729 3.77896606 -48.24672729 3.77896606 -47.15942383 3.5534668 C-31.51708949 0.56705983 -15.88073907 -0.06230954 0 0 Z M-46.6875 35.3125 C-47.53135254 35.49441895 -48.37520508 35.67633789 -49.24462891 35.86376953 C-98.71947521 46.84182882 -145.7891194 75.94005148 -176.6875 116.3125 C-177.11772461 116.87163086 -177.54794922 117.43076172 -177.99121094 118.00683594 C-184.92029478 127.06037983 -191.06948199 136.39604496 -196.6875 146.3125 C-197.0287793 146.90466309 -197.37005859 147.49682617 -197.72167969 148.10693359 C-210.44573362 170.29792718 -218.60437703 195.1144428 -222.6875 220.3125 C-222.95457764 221.91182373 -222.95457764 221.91182373 -223.22705078 223.54345703 C-224.85285368 234.27026916 -225.08545847 244.85571751 -225.0625 255.6875 C-225.06228851 256.61081116 -225.06207703 257.53412231 -225.06185913 258.4854126 C-225.02772145 273.45519224 -224.01990615 287.67149939 -220.6875 302.3125 C-220.49494629 303.19969727 -220.30239258 304.08689453 -220.10400391 305.00097656 C-212.11733818 341.39134821 -195.04202546 373.4967452 -171.6875 402.3125 C-169.50520099 401.49776222 -169.50520099 401.49776222 -168.88476562 399.31323242 C-168.49321289 398.0038269 -168.49321289 398.0038269 -168.09375 396.66796875 C-167.79082031 395.69053711 -167.48789063 394.71310547 -167.17578125 393.70605469 C-166.84964844 392.64805664 -166.52351563 391.59005859 -166.1875 390.5 C-160.9626427 374.22816283 -153.83988777 359.1073475 -143.6875 345.3125 C-142.55054688 343.75015625 -142.55054688 343.75015625 -141.390625 342.15625 C-121.20369587 314.90633961 -94.34071124 294.57296171 -62.6875 282.3125 C-62.6875 281.3225 -62.6875 280.3325 -62.6875 279.3125 C-64.60846446 277.47748048 -64.60846446 277.47748048 -67.125 275.6875 C-76.20126838 268.65947272 -83.32414176 260.86407059 -89.6875 251.3125 C-90.28433594 250.42175781 -90.88117188 249.53101563 -91.49609375 248.61328125 C-106.11672753 225.26585493 -110.67607874 195.92854113 -105 169.0625 C-100.97170346 151.78782467 -93.43491823 135.65164856 -81.6875 122.3125 C-81.01203125 121.49394531 -80.3365625 120.67539063 -79.640625 119.83203125 C-63.55519021 100.89935709 -38.52466398 87.56842804 -13.6875 85.3125 C17.3725079 83.97641927 44.65162583 89.05412499 69.3125 109.3125 C70.16457031 109.99957031 71.01664062 110.68664062 71.89453125 111.39453125 C89.08722245 125.98801244 100.50112965 146.39348138 105.3125 168.3125 C105.49578857 169.14305908 105.67907715 169.97361816 105.86791992 170.8293457 C111.3827207 198.11451405 105.72981169 226.49833423 91.40234375 250.17578125 C83.79274247 261.59729495 73.9167996 272.83417359 62.3125 280.3125 C63.90466238 283.49682476 67.21720163 284.08697966 70.375 285.375 C111.93220185 303.01085507 145.06787607 336.45440934 162.47119141 378.15185547 C165.42814342 385.74588488 167.86811962 393.54145885 170.3125 401.3125 C173.2584089 401.65454028 173.2584089 401.65454028 174.671875 400.03759766 C175.13078125 399.43995605 175.5896875 398.84231445 176.0625 398.2265625 C176.58303955 397.55230225 177.1035791 396.87804199 177.63989258 396.18334961 C178.19185303 395.44221924 178.74381348 394.70108887 179.3125 393.9375 C179.88701904 393.17381104 180.46153809 392.41012207 181.0534668 391.62329102 C190.62095434 378.69471726 198.51275013 364.8683282 205.3125 350.3125 C205.61639648 349.67135254 205.92029297 349.03020508 206.23339844 348.36962891 C213.74863236 332.40476964 218.82888321 315.59077322 222.3125 298.3125 C222.46348145 297.61753418 222.61446289 296.92256836 222.77001953 296.20654297 C228.58243924 268.62419743 227.39309579 236.7176503 221.3125 209.3125 C221.13058105 208.46864746 220.94866211 207.62479492 220.76123047 206.75537109 C209.78317118 157.28052479 180.68494852 110.2108806 140.3125 79.3125 C139.75336914 78.88227539 139.19423828 78.45205078 138.61816406 78.00878906 C129.56462017 71.07970522 120.22895504 64.93051801 110.3125 59.3125 C109.72033691 58.9712207 109.12817383 58.62994141 108.51806641 58.27832031 C86.32723184 45.55435755 61.51048909 37.39524642 36.3125 33.3125 C34.71208862 33.04542236 34.71208862 33.04542236 33.0793457 32.77294922 C22.37336879 31.15107307 11.81068661 30.9145386 1 30.9375 C-0.38205124 30.93781723 -0.38205124 30.93781723 -1.79202271 30.93814087 C-17.08276662 30.97306145 -31.71357758 31.99011831 -46.6875 35.3125 Z M-59.34765625 142.328125 C-73.49699791 160.37503156 -79.13995461 181.87984542 -76.41943359 204.54589844 C-73.94570865 219.38824809 -66.79927244 233.26149178 -56.6875 244.3125 C-56.09710938 244.99441406 -55.50671875 245.67632812 -54.8984375 246.37890625 C-42.04597422 260.35254186 -22.73294514 268.43961025 -3.984375 269.52734375 C17.75480147 270.25038802 36.52748846 263.01787618 53.03125 249.00390625 C67.91042259 235.02023941 77.0372544 215.50164338 77.71679688 195.08178711 C77.9948105 173.46418365 70.43004469 153.45107971 55.58984375 137.5 C39.15529426 121.71381182 19.60984316 114.61991472 -2.84326172 114.84399414 C-24.95873886 115.51230941 -44.9813018 125.52447442 -59.34765625 142.328125 Z M-30.6875 304.3125 C-31.72261719 304.50585938 -32.75773437 304.69921875 -33.82421875 304.8984375 C-60.48958313 310.62572636 -83.24755115 325.80907423 -102.6875 344.3125 C-103.33332031 344.90546875 -103.97914063 345.4984375 -104.64453125 346.109375 C-126.34297273 366.63904797 -140.58393247 398.01384884 -144.05859375 427.45703125 C-143.95059253 430.42885266 -143.95059253 430.42885266 -141.765625 432.41015625 C-140.83234375 433.05855469 -139.8990625 433.70695313 -138.9375 434.375 C-138.41309326 434.74367188 -137.88868652 435.11234375 -137.34838867 435.4921875 C-135.47761623 436.7910192 -133.58417475 438.05181431 -131.6875 439.3125 C-130.94258301 439.81765137 -130.19766602 440.32280273 -129.43017578 440.84326172 C-90.64835303 467.1010463 -47.3372894 481.79188589 -0.3125 481.6875 C0.61180817 481.68695618 1.53611633 481.68641235 2.48843384 481.68585205 C17.45137105 481.6454741 31.68877165 480.71431735 46.3125 477.3125 C47.7970166 476.97508789 47.7970166 476.97508789 49.31152344 476.63085938 C61.66556592 473.76443725 73.60250284 470.17828407 85.3125 465.3125 C85.96234863 465.04856445 86.61219727 464.78462891 87.28173828 464.51269531 C102.70906434 458.21843652 116.87860215 450.05437808 130.52539062 440.52246094 C132.30220586 439.31946964 134.11474037 438.20757444 135.953125 437.1015625 C141.79116251 433.53498774 141.79116251 433.53498774 145.0390625 427.8203125 C144.91459913 424.44065332 144.21216274 421.57896778 143.3125 418.3125 C142.91103898 416.68760355 142.51003203 415.06259488 142.109375 413.4375 C136.12423116 390.23891995 125.78355152 369.60828896 110.3125 351.3125 C109.22582031 350.013125 109.22582031 350.013125 108.1171875 348.6875 C84.50304059 321.27656868 48.08317636 304.27428143 12.3125 301.3125 C-2.30044431 300.47000906 -16.36260722 301.37680769 -30.6875 304.3125 Z " fill="#FFA500" transform="translate(255.6875,-0.3125)"/>
  </svg>
`;


const NavigationBar = ({ onPressOption1, onPressOption2, onPressOption3 }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPressOption1}>
        <SvgXml xml={HealthIconSvg} width="24" height="24" style={styles.icon} />
        <Text style={styles.text}>Health</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressOption2}>
        <SvgXml xml={LocateIconSvg} width="24" height="24" style={styles.icon} />
        <Text style={styles.text}>Locate</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressOption3}>
        <SvgXml xml={ProfileIconSvg} width="24" height="24" style={styles.icon} />
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#FFA500',
    fontSize: 14, // Adjust text size
  },
  icon: {
    marginBottom: 8, // Add margin to create space between icon and text
  },
});

export default NavigationBar;