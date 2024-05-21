const VALID_MARKER = `<svg width="46" height="58" viewBox="0 0 46 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_5548_14287)">
<rect x="11" y="7.5" width="24" height="24" rx="12" fill="#2069E8"/>
<path d="M18.6452 20.135L21.9274 20.4758C21.9632 20.4758 21.9876 20.484 22.0006 20.5002C22.0169 20.5133 22.0251 20.5377 22.0251 20.5735L22.361 23.8655C22.361 24.012 22.3903 24.134 22.4489 24.2317C22.5107 24.3294 22.5905 24.401 22.6882 24.4465C22.7858 24.4954 22.89 24.5133 23.0007 24.5003C23.1113 24.4905 23.2155 24.4482 23.3132 24.3733C23.4141 24.3017 23.4971 24.1959 23.5622 24.0559L27.5836 15.8157C27.665 15.6366 27.696 15.4771 27.6764 15.3372C27.6569 15.1972 27.5983 15.0849 27.5006 15.0002C27.4062 14.9124 27.2858 14.8619 27.1393 14.8489C26.9961 14.8359 26.8382 14.87 26.6657 14.9514L18.401 18.9631C18.2741 19.0217 18.178 19.0982 18.1129 19.1926C18.0478 19.287 18.0104 19.3896 18.0006 19.5003C17.9909 19.6077 18.0088 19.7102 18.0543 19.8079C18.1032 19.9023 18.1764 19.9804 18.2741 20.0422C18.3717 20.1008 18.4954 20.1318 18.6452 20.135Z" fill="white"/>
<circle cx="23" cy="38.5" r="4" fill="#2069E8"/>
</g>
<defs>
<filter id="filter0_dd_5548_14287" x="0" y="0.5" width="46" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5548_14287"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect2_dropShadow_5548_14287"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_5548_14287" result="effect2_dropShadow_5548_14287"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_5548_14287" result="shape"/>
</filter>
</defs>
</svg>`;

const INVALID_MARKER = `<svg width="46" height="57" viewBox="0 0 46 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_4511_181398)">
<rect x="11" y="7" width="24" height="24" rx="12" fill="#D91E1E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.1464 15.1464C19.3417 14.9512 19.6583 14.9512 19.8536 15.1464L23 18.2929L26.1464 15.1464C26.3417 14.9512 26.6583 14.9512 26.8536 15.1464C27.0488 15.3417 27.0488 15.6583 26.8536 15.8536L23.7071 19L26.8536 22.1464C27.0488 22.3417 27.0488 22.6583 26.8536 22.8536C26.6583 23.0488 26.3417 23.0488 26.1464 22.8536L23 19.7071L19.8536 22.8536C19.6583 23.0488 19.3417 23.0488 19.1464 22.8536C18.9512 22.6583 18.9512 22.3417 19.1464 22.1464L22.2929 19L19.1464 15.8536C18.9512 15.6583 18.9512 15.3417 19.1464 15.1464Z" fill="#F7F7F7"/>
<circle cx="23" cy="38" r="4" fill="#D91E1E"/>
</g>
<defs>
<filter id="filter0_dd_4511_181398" x="0" y="0" width="46" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4511_181398"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect2_dropShadow_4511_181398"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_4511_181398" result="effect2_dropShadow_4511_181398"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_4511_181398" result="shape"/>
</filter>
</defs>
</svg>`;

export const getMarker = (isWater) => {
  const marker = isWater ? INVALID_MARKER : VALID_MARKER;
  return 'data:image/svg+xml;charset=UTF-8;base64,' + btoa(marker);
};

export const ACCESS_TOKEN = 'AIzaSyDWzus96n6vzsziFdZ_LjMZ_2chBOUKAUM';
