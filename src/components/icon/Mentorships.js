import React from 'react';
import Icon from './Icon.js';

export default function Dashboard({ active, ...props }) {
  return (
    <Icon viewBox="0 0 80 80" {...props}>
      <g id="mentorships" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(19.000000, 19.000000)">
          <polygon
            id="Path"
            fill="#C8C6CD"
            points="23.1534318 24.8726857 23.1534318 20.2830189 20.657889 20.2830189 20.657889 24.8726857 4.86792453 24.8726857 4.86792453 33.1417473 7.36346728 33.1417473 7.36346728 27.4435915 20.657889 27.4435915 20.657889 34.8867925 23.1534318 34.8867925 23.1534318 27.4435915 36.4478535 27.4435915 36.4478535 33.1417473 38.9433962 33.1417473 38.9433962 24.8726857"
          />
          <polygon
            id="Path"
            fill="#AEADB3"
            points="23.1534318 24.8726857 23.1534318 20.2830189 21.9056604 20.2830189 21.9056604 34.8867925 23.1534318 34.8867925 23.1534318 27.4435915 36.4478535 27.4435915 36.4478535 33.1417473 38.9433962 33.1417473 38.9433962 24.8726857"
          />
          <polygon
            id="Path"
            fill={active ? '#69D5B1' : '#DDDCDC'}
            points="11.3584906 43 0 43 0 31.6415094 11.3584906 31.6415094"
          />
          <polygon
            id="Path"
            fill={active ? '#179A6F' : '#898889'}
            points="43 43 31.6415094 43 31.6415094 31.6415094 43 31.6415094"
          />
          <polygon
            id="Path"
            fill={active ? '#32B88C' : '#BFBFBF'}
            points="27.5849057 43 16.2264151 43 16.2264151 31.6415094 27.5848198 31.6415094 27.5848198 43"
          />
          <polygon
            id="Path"
            fill={active ? '#179A6F' : '#898889'}
            points="27.5849057 43 21.9056604 43 21.9056604 31.6415094 27.5849057 31.6415094"
          />
          <path
            d="M29.2075472,21.9056604 L14.6037736,21.9056604 L14.6037736,13.9884877 C14.6037736,12.0909754 16.1750551,10.5471698 18.1065246,10.5471698 L25.7047126,10.5471698 C27.6360986,10.5471698 29.2074637,12.0908934 29.2074637,13.9884877 L29.2075472,21.9056604 Z"
            id="Path"
            fill={active ? '#32B88C' : '#BFBFBF'}
          />
          <path
            d="M28.3962264,21.9056604 L21.0943396,21.9056604 L21.0943396,10.5471698 L24.8934754,10.5471698 C26.8248614,10.5471698 28.3962264,12.0908934 28.3962264,13.9884877 L28.3962264,21.9056604 Z"
            id="Path"
            fill={active ? '#179A6F' : '#9B9B9B'}
          />
          <path
            d="M21.9056604,8.11320755 C19.6687981,8.11320755 17.8490566,6.29340288 17.8490566,4.05656305 C17.8490566,1.81980466 19.6687981,0 21.9056604,0 C24.1425227,0 25.9622642,1.81980466 25.9622642,4.05656305 C25.9622642,6.29348434 24.1425227,8.11320755 21.9056604,8.11320755 Z"
            id="Path"
            fill={active ? '#32B88C' : '#BFBFBF'}
          />
          <path
            d="M21.9056604,8.11320755 L21.9056604,0 C24.1425227,0 25.9622642,1.81980466 25.9622642,4.05656305 C25.9622642,6.29348434 24.1425227,8.11320755 21.9056604,8.11320755 Z"
            id="Path"
            fill={active ? '#179A6F' : '#9B9B9B'}
          />
        </g>
      </g>
    </Icon>
  );
}
