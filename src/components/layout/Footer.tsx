import Link from 'next/link';
import RawImg from '@/components/RawImg';

export default function Footer() {
  return (
    <footer className="flex relative flex-col gap-4 items-center self-stretch">
      <RawImg
        image="https://api.builder.io/api/v1/image/assets/TEMP/5ac2678b1d9e0ab46f638ff29ab81f302e8e865a?width=180"
        altText="Logo"
        className="relative aspect-[2/1] h-[45px] w-[90px]"
      />
      <div className="flex relative flex-col gap-2 items-center p-0">
        <div className="flex relative gap-1 items-center">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id=&quot;1:1234&quot; layer-name=&quot;Icon/22/phone-call&quot; data-component-name=&quot;Icon/22/phone-call&quot; width=&quot;14&quot; height=&quot;14&quot; viewBox=&quot;0 0 14 14&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;phone-icon&quot; style=&quot;width: 14px; height: 14px; aspect-ratio: 1/1; position: relative&quot;> <g clip-path=&quot;url(#clip0_1_1234)&quot;> <path d=&quot;M7.58333 1.16663C8.97571 1.16663 10.3111 1.71975 11.2956 2.70432C12.2802 3.68888 12.8333 5.02424 12.8333 6.41663&quot; stroke=&quot;white&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> <path d=&quot;M7.58333 3.5C8.35688 3.5 9.09874 3.80729 9.64572 4.35427C10.1927 4.90125 10.5 5.64312 10.5 6.41667&quot; stroke=&quot;white&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> <path d=&quot;M8.06867 9.66463C8.18915 9.71995 8.32487 9.7326 8.45349 9.70047C8.58211 9.66834 8.69595 9.59336 8.77626 9.48788L8.98334 9.21663C9.09201 9.07173 9.23293 8.95413 9.39492 8.87313C9.55692 8.79213 9.73555 8.74996 9.91667 8.74996H11.6667C11.9761 8.74996 12.2728 8.87288 12.4916 9.09167C12.7104 9.31046 12.8333 9.60721 12.8333 9.91663V11.6666C12.8333 11.976 12.7104 12.2728 12.4916 12.4916C12.2728 12.7104 11.9761 12.8333 11.6667 12.8333C8.8819 12.8333 6.21118 11.727 4.24205 9.75791C2.27292 7.78878 1.16667 5.11807 1.16667 2.33329C1.16667 2.02387 1.28959 1.72713 1.50838 1.50833C1.72717 1.28954 2.02392 1.16663 2.33334 1.16663H4.08334C4.39276 1.16663 4.6895 1.28954 4.9083 1.50833C5.12709 1.72713 5.25001 2.02387 5.25001 2.33329V4.08329C5.25001 4.26441 5.20784 4.44304 5.12684 4.60504C5.04584 4.76704 4.92823 4.90795 4.78334 5.01663L4.51034 5.22138C4.40325 5.30315 4.32777 5.41947 4.29672 5.55058C4.26567 5.68169 4.28096 5.81951 4.34001 5.94063C5.13724 7.55988 6.44842 8.86942 8.06867 9.66463Z&quot; stroke=&quot;white&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> </g> <defs> <clipPath id=&quot;clip0_1_1234&quot;> <rect width=&quot;14&quot; height=&quot;14&quot; fill=&quot;white&quot;></rect> </clipPath> </defs> </svg>',
              }}
            />
          </div>
          <div layer-name="Hotline:" className="relative text-xs leading-5 text-white">
            Hotline:
          </div>
          <div
            layer-name="(028) 36360292-(028) 36360293"
            className="relative text-xs leading-5 text-white"
          >
            (028) 36360292-(028) 36360293
          </div>
        </div>
        <div className="flex relative gap-1 items-center">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id=&quot;1:1238&quot; layer-name=&quot;Icon/22/map-pin&quot; data-component-name=&quot;Icon/22/map-pin&quot; width=&quot;14&quot; height=&quot;14&quot; viewBox=&quot;0 0 14 14&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;map-icon&quot; style=&quot;width: 14px; height: 14px; aspect-ratio: 1/1; position: relative&quot;> <path d=&quot;M11.6667 5.83329C11.6667 8.74588 8.43558 11.7792 7.35058 12.716C7.2495 12.792 7.12646 12.8331 7 12.8331C6.87353 12.8331 6.75049 12.792 6.64941 12.716C5.56441 11.7792 2.33333 8.74588 2.33333 5.83329C2.33333 4.59562 2.82499 3.40863 3.70016 2.53346C4.57533 1.65829 5.76232 1.16663 7 1.16663C8.23767 1.16663 9.42466 1.65829 10.2998 2.53346C11.175 3.40863 11.6667 4.59562 11.6667 5.83329Z&quot; stroke=&quot;white&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> <path d=&quot;M7 7.58337C7.9665 7.58337 8.75 6.79987 8.75 5.83337C8.75 4.86688 7.9665 4.08337 7 4.08337C6.0335 4.08337 5.25 4.86688 5.25 5.83337C5.25 6.79987 6.0335 7.58337 7 7.58337Z&quot; stroke=&quot;white&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> </svg>',
              }}
            />
          </div>
          <div layer-name="Trụ sở chính:" className="relative text-xs leading-5 text-white">
            Trụ sở chính:
          </div>
          <div className="flex relative gap-2.5 items-center p-0">
            <div
              layer-name="208 Hoàng Văn Thụ, phường 4, quận Tân Bình"
              className="relative text-xs leading-5 text-white"
            >
              208 Hoàng Văn Thụ, phường 4, quận Tân Bình
            </div>
          </div>
        </div>
        <div className="flex relative gap-1 items-center">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id=&quot;1:1243&quot; layer-name=&quot;Icon/22/link&quot; data-component-name=&quot;Icon/22/link&quot; width=&quot;14&quot; height=&quot;14&quot; viewBox=&quot;0 0 14 14&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;link-icon&quot; style=&quot;width: 14px; height: 14px; aspect-ratio: 1/1; position: relative&quot;> <g clip-path=&quot;url(#clip0_1_1243)&quot;> <path d=&quot;M5.83333 7.58335C6.08384 7.91826 6.40345 8.19538 6.77048 8.3959C7.13751 8.59643 7.54337 8.71567 7.96054 8.74555C8.37771 8.77542 8.79642 8.71523 9.18828 8.56906C9.58014 8.42288 9.93598 8.19414 10.2317 7.89835L11.9817 6.14835C12.513 5.59826 12.8069 4.86151 12.8003 4.09677C12.7936 3.33203 12.4869 2.60049 11.9461 2.05972C11.4054 1.51894 10.6738 1.2122 9.90908 1.20555C9.14434 1.19891 8.40758 1.49289 7.8575 2.02419L6.85416 3.02169&quot; stroke=&quot;white&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> <path d=&quot;M8.16666 6.41672C7.91615 6.08181 7.59654 5.80469 7.22951 5.60417C6.86248 5.40364 6.45661 5.2844 6.03945 5.25452C5.62228 5.22465 5.20357 5.28484 4.81171 5.43101C4.41985 5.57719 4.06401 5.80593 3.76833 6.10172L2.01833 7.85172C1.48703 8.40181 1.19305 9.13856 1.1997 9.9033C1.20634 10.668 1.51308 11.3996 2.05386 11.9404C2.59463 12.4811 3.32617 12.7879 4.09091 12.7945C4.85565 12.8012 5.5924 12.5072 6.14249 11.9759L7.13999 10.9784&quot; stroke=&quot;white&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> </g> <defs> <clipPath id=&quot;clip0_1_1243&quot;> <rect width=&quot;14&quot; height=&quot;14&quot; fill=&quot;white&quot;></rect> </clipPath> </defs> </svg>',
              }}
            />
          </div>
          <div layer-name="Website:" className="relative text-xs leading-5 text-white">
            Website:
          </div>
          <div className="flex relative gap-2.5 items-center p-0">
            <div
              layer-name="vietnamtouristvn.com"
              className="relative text-xs leading-5 text-white"
            >
              vietnamtouristvn.com
            </div>
          </div>
        </div>
      </div>
      <div
        layer-name="#cards"
        className="flex relative flex-col justify-center items-center self-stretch p-0"
      >
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id=&quot;1:1248&quot; layer-name=&quot;Social Icons / Transparent&quot; width=&quot;150&quot; height=&quot;30&quot; viewBox=&quot;0 0 150 30&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;social-icons&quot; style=&quot;display: flex; align-items: center; gap: 10px; position: relative; width: 150px; height: 30px&quot;> <g clip-path=&quot;url(#clip0_1_1248)&quot;> <path d=&quot;M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z&quot; fill=&quot;white&quot;></path> <path d=&quot;M21.6347 9.42325C20.3068 9.06055 14.9953 9.06055 14.9953 9.06055C14.9953 9.06055 9.68385 9.06055 8.35598 9.41096C7.64287 9.60768 7.05884 10.1917 6.86211 10.9171C6.5117 12.245 6.51172 14.9991 6.51172 14.9991C6.51172 14.9991 6.5117 17.7655 6.86211 19.081C7.05884 19.8064 7.63057 20.3782 8.35598 20.5749C9.69614 20.9376 14.9953 20.9376 14.9953 20.9376C14.9953 20.9376 20.3068 20.9376 21.6347 20.5872C22.3601 20.3905 22.9318 19.8187 23.1285 19.0933C23.4789 17.7655 23.4789 15.0114 23.4789 15.0114C23.4789 15.0114 23.4912 12.245 23.1285 10.9171C22.9379 10.1917 22.3601 9.61997 21.6347 9.42325Z&quot; fill=&quot;#3730A3&quot;></path> <path d=&quot;M13.3281 17.5394L17.7421 14.9943L13.3281 12.4492V17.5394Z&quot; fill=&quot;white&quot;></path> <path d=&quot;M55 0C63.2856 0 70 6.7144 70 15C70 23.2856 63.2856 30 55 30C46.7144 29.9939 40 23.2795 40 15C40 6.7144 46.7144 0 55 0Z&quot; fill=&quot;white&quot;></path> <path d=&quot;M56.8234 10.3227H58.7567V7.46875H56.4858V7.48102C53.7301 7.57922 53.1716 9.12587 53.1164 10.7523H53.1102V12.1762H51.2383V14.9749H53.1102V22.4688H55.9335V14.9749H58.2473L58.6953 12.1762H55.9335V11.3169C55.9396 10.7646 56.3017 10.3227 56.8234 10.3227Z&quot; fill=&quot;#3730A3&quot;></path> <path d=&quot;M95 30C103.284 30 110 23.2843 110 15C110 6.71573 103.284 0 95 0C86.7157 0 80 6.71573 80 15C80 23.2843 86.7157 30 95 30Z&quot; fill=&quot;white&quot;></path> <path d=&quot;M95.0017 6.08678C91.3501 6.08678 87.8829 5.76096 86.5611 9.16055C86.014 10.5622 86.0939 12.388 86.0939 15.0007C86.0939 17.2937 86.0202 19.4454 86.5611 20.8347C87.8829 24.2343 91.3808 23.9085 95.0017 23.9085C98.4997 23.9085 102.102 24.2712 103.442 20.8347C103.989 19.4146 103.91 17.6196 103.91 15.0007C103.91 11.5212 104.1 9.27121 102.416 7.58678C100.7 5.87162 98.389 6.08678 95.0017 6.08678ZM94.2025 7.69129C101.819 7.67899 102.791 6.83064 102.256 18.597C102.065 22.7589 98.8993 22.2978 95.0017 22.2978C87.9013 22.2978 87.6984 22.095 87.6984 14.9946C87.6984 7.80809 88.2579 7.69744 94.2025 7.69129ZM99.7538 9.17285C99.1636 9.17285 98.6841 9.65236 98.6841 10.2425C98.6841 10.8327 99.1636 11.3122 99.7538 11.3122C100.344 11.3122 100.823 10.8327 100.823 10.2425C100.823 9.65236 100.344 9.17285 99.7538 9.17285ZM95.0017 10.4208C92.4751 10.4208 90.4279 12.4679 90.4279 14.9946C90.4279 17.5212 92.4751 19.5683 95.0017 19.5683C97.5284 19.5683 99.5755 17.5212 99.5755 14.9946C99.5755 12.4679 97.5284 10.4208 95.0017 10.4208ZM95.0017 12.0253C98.93 12.0253 98.9361 17.9638 95.0017 17.9638C91.0734 17.97 91.0673 12.0253 95.0017 12.0253Z&quot; fill=&quot;#3730A3&quot;></path> <path d=&quot;M135 0C126.714 0 120 6.7201 120 15C120 23.2799 126.72 30 135 30C143.286 30 150 23.2799 150 15C150 6.7201 143.286 0 135 0Z&quot; fill=&quot;white&quot;></path> <path d=&quot;M137.805 5.83203C137.811 6.11562 137.835 6.39311 137.891 6.6582C137.891 6.67451 137.896 6.69072 137.902 6.70703H137.908C138.13 7.76116 138.734 8.67975 139.567 9.30859L139.573 9.31445L139.575 9.31641C140.315 9.87099 141.233 10.1982 142.226 10.1982H142.232V10.9932L142.231 10.9922V13.0322C141.257 13.0322 140.307 12.8417 139.413 12.4658C138.834 12.2254 138.297 11.9103 137.81 11.5342L137.822 17.9033C137.816 19.3397 137.248 20.684 136.219 21.7012C135.387 22.5271 134.326 23.051 133.18 23.2236C132.915 23.2668 132.637 23.2852 132.36 23.2852C131.133 23.2851 129.967 22.8847 129.018 22.1572C128.993 22.1388 128.969 22.1141 128.945 22.0957C128.94 22.09 128.935 22.0838 128.931 22.0781C128.785 21.9568 128.64 21.8349 128.5 21.6953C127.384 20.5979 126.811 19.106 126.909 17.54C126.983 16.344 127.465 15.2094 128.26 14.3154C129.314 13.132 130.787 12.4786 132.365 12.4785C132.643 12.4785 132.914 12.4969 133.186 12.54V13.3604C131.626 13.3789 130.177 14.032 129.135 15.1973C128.333 16.0912 127.859 17.2258 127.785 18.4219C127.73 19.3422 127.907 20.2361 128.287 21.0391C127.91 20.236 127.736 19.3443 127.791 18.4268C127.865 17.2309 128.347 16.097 129.142 15.2031C130.184 14.0317 131.639 13.3837 133.193 13.3652V15.4365C132.934 15.3564 132.662 15.3076 132.378 15.3076C130.936 15.3077 129.77 16.4793 129.795 17.9219C129.808 18.8404 130.307 19.6421 131.04 20.0859C131.043 20.0902 131.045 20.0944 131.048 20.0986L131.18 20.1729C131.494 20.3383 131.847 20.4403 132.225 20.4619C132.558 20.4804 132.885 20.4316 133.181 20.333C134.21 19.9939 134.95 19.0253 134.95 17.8848L134.956 13.6191V5.83203H137.805ZM135.832 6.71387V14.4941L135.825 18.7607C135.825 19.9012 135.085 20.8689 134.056 21.208C133.834 21.2819 133.595 21.3272 133.349 21.3379C133.597 21.3276 133.838 21.2825 134.062 21.208C135.091 20.8689 135.831 19.9003 135.831 18.7598L135.837 14.4941V6.71387H135.832Z&quot; fill=&quot;#3730A3&quot;></path> </g> <defs> <clipPath id=&quot;clip0_1_1248&quot;> <rect width=&quot;150&quot; height=&quot;30&quot; fill=&quot;white&quot;></rect> </clipPath> </defs> </svg>',
            }}
          />
        </div>
      </div>
    </footer>
  );
}
