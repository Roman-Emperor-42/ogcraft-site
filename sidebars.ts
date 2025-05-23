import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'Welcome',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'Info',
      items: [
        {
          type: 'autogenerated',
          dirName: 'Info', // Only include Info folder here
        },
        {
          type: 'link',
          label: '💬 Discord',
          href: 'https://ogcraft.org/discord',
        },
        {
          type: 'link',
          label: '🧭 Map',
          href: 'https://map.ogcraft.org',
        },
      ],
    },
    {
      type: 'category',
      label: 'Announcements',
      items: [
        {
          type: 'autogenerated',
          dirName: 'Announcements',
        },
      ],
    },
    {
      type: 'category',
      label: 'Events',
      items: [
        {
          type: 'autogenerated',
          dirName: 'Events',
        },
      ],
    },
    {
      type: 'category',
      label: 'Wiki',
      items: [
        {
          type: 'autogenerated',
          dirName: 'Wiki',
        },
      ],
    },
    {
      type: 'category',
      label: 'Legal',
      items: [
        {
          type: 'autogenerated',
          dirName: 'Legal',
        },
      ],
    },
  ],
};

export default sidebars;
