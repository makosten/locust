import { useTheme } from '@mui/material/styles';

import { THEME_MODE } from 'constants/theme';

export default function Logo({ lightModeBackgroundColor }: { lightModeBackgroundColor?: string }) {
  const theme = useTheme();
  const strokeColor =
    theme.palette.mode === THEME_MODE.DARK
      ? theme.palette.background.default
      : lightModeBackgroundColor || theme.palette.primary.main;

  return (
    <svg
      aria-label='Locust'
      fill='none'
      height='35'
      role='img'
      viewBox='0 0 183 35'
      width='183'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        clipRule='evenodd'
        d='M36.6942 18.9754L48.9434 6.62621L47.341 5.01205L35.0918 17.3612L36.6942 18.9754Z'
        fill='#B8EE4B'
        fillRule='evenodd'
      />
      <path
        clipRule='evenodd'
        d='M40.954 20.093L53.0301 8.01687L51.4159 6.40271L39.3398 18.4788L40.954 20.093Z'
        fill='#B8EE4B'
        fillRule='evenodd'
      />
      <path
        clipRule='evenodd'
        d='M0 28.1761L39.9453 9.82391L43.7047 9.82392L47.4641 13.5833V19.9629L43.819 23.608L39.2012 18.9279L38.0252 20.0882L47.7932 29.988H41.7525L35.4796 23.7151L20.9615 29.988H0V28.1761Z'
        fill='#B8EE4B'
        fillRule='evenodd'
      />
      <rect fill='#B8EE4B' height='7.15246' width='2.45866' x='37.2148' y='17.4108' />
      <path
        d='M11.279 5.80442L10.9321 5.97319L10.8347 6.34649L4.72023 29.7764L4.44626 30.8262H5.53125H6.94682H10.2332H10.8805L11.0442 30.1999L15.3834 13.5938L32.3703 30.5807L32.6158 30.8262H32.963H39.4073H41.4309L40 29.3953L15.1525 4.54779L14.7302 4.12549L14.1931 4.38675L11.279 5.80442Z'
        fill='#B8EE4B'
        stroke={strokeColor}
        strokeWidth='1.67636'
      />
      <path
        d='M64.0015 30V11.009H68.5005V26.2244H79.4429V30H64.0015ZM90.4052 30.633C84.2105 30.633 79.9827 26.4731 79.9827 20.5045C79.9827 14.5359 84.2105 10.376 90.4052 10.376C96.6225 10.376 100.85 14.5359 100.85 20.5045C100.85 26.4731 96.6225 30.633 90.4052 30.633ZM90.4052 26.7218C93.7964 26.7218 96.3738 24.2349 96.3738 20.5045C96.3738 16.7741 93.7964 14.2872 90.4052 14.2872C87.0365 14.2872 84.4366 16.7741 84.4366 20.5045C84.4366 24.2349 87.0365 26.7218 90.4052 26.7218ZM112.638 30.633C106.488 30.633 102.238 26.4731 102.238 20.5045C102.238 14.5359 106.488 10.376 112.638 10.376C116.798 10.376 121.071 12.2298 121.997 17.8141H117.679C116.865 15.3724 114.989 14.2872 112.638 14.2872C109.269 14.2872 106.692 16.842 106.692 20.5045C106.692 24.1444 109.269 26.7218 112.638 26.7218C114.989 26.7218 116.865 25.6366 117.679 23.1723H121.997C121.071 28.7791 116.843 30.633 112.638 30.633ZM132.77 30.633C126.914 30.633 123.613 27.8748 123.613 22.0871V11.009H128.158V21.974C128.158 25.0036 129.672 26.8348 132.77 26.8348C135.867 26.8348 137.404 25.0036 137.404 21.974V11.009H141.926V22.0871C141.926 27.8748 138.625 30.633 132.77 30.633ZM152.22 30.633C146.432 30.633 143.38 28.5757 143.403 24.1218H147.472C147.63 25.9079 149.1 27.0383 152.22 27.0609C155.159 27.0609 156.764 26.0661 156.764 24.574C156.764 23.2627 155.702 22.6071 153.441 22.2227L151.089 21.8158C147.495 21.1827 143.923 20.2332 143.923 16.0959C143.923 12.5011 146.952 10.376 152.265 10.376C157.216 10.376 160.653 12.1168 160.698 16.8193H156.651C156.357 15.1011 155.023 13.9481 152.175 13.9481C149.597 13.9481 148.241 14.8298 148.241 16.2994C148.241 17.4524 149.168 18.1758 151.112 18.5376L153.169 18.8993C156.787 19.5549 161.241 20.1654 161.241 24.7096C161.241 28.4852 158.143 30.633 152.22 30.633ZM180.394 11.009V14.7846H173.272V30H168.751V14.7846H161.652V11.009H180.394Z'
        fill='currentcolor'
      />
    </svg>
  );
}
