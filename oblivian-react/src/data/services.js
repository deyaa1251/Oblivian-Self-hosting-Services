// Services data configuration
// To add a new service, simply add a new object to this array with the required fields

export const servicesData = [
  {
    id: 'email',
    title: 'Email Server',
    description: 'Complete email solution with SMTP, IMAP, spam filtering, and webmail interface. Own your communications.',
    technologies: 'Mail-in-a-Box • Mailcow',
    link: '#email'
  },
  {
    id: 'cloud',
    title: 'Cloud Storage',
    description: 'Sync files across devices with full encryption. Your personal Dropbox alternative with complete privacy.',
    technologies: 'Nextcloud • Seafile',
    link: '#cloud'
  },
  {
    id: 'passwords',
    title: 'Password Manager',
    description: 'Secure vault for passwords, 2FA codes, and sensitive data. No third-party ever sees your secrets.',
    technologies: 'Vaultwarden • Bitwarden',
    link: '#passwords'
  },
  {
    id: 'chat',
    title: 'Instant Messaging',
    description: 'End-to-end encrypted chat for teams and individuals. Slack alternative without corporate surveillance.',
    technologies: 'Matrix • Rocket.Chat',
    link: '#chat'
  },
  {
    id: 'media',
    title: 'Media Server',
    description: 'Stream your music, videos, and photos to any device. Your personal Netflix and Spotify combined.',
    technologies: 'Jellyfin • Plex',
    link: '#media'
  },
  {
    id: 'docs',
    title: 'Office Suite',
    description: 'Collaborative document editing, spreadsheets, and presentations. Google Docs without the tracking.',
    technologies: 'OnlyOffice • Collabora',
    link: '#docs'
  },
  {
    id: 'vpn',
    title: 'VPN Server',
    description: 'Secure remote access to your network from anywhere. No commercial VPN logging your traffic.',
    technologies: 'WireGuard • OpenVPN',
    link: '#vpn'
  },
  {
    id: 'rss',
    title: 'RSS Aggregator',
    description: 'Follow blogs, news, and podcasts in one place. Curate your information diet algorithmically-free.',
    technologies: 'FreshRSS • Miniflux',
    link: '#rss'
  },
  {
    id: 'git',
    title: 'Git Hosting',
    description: 'Host your code repositories with CI/CD pipelines. GitHub alternative you fully control.',
    technologies: 'Gitea • GitLab',
    link: '#git'
  },
  {
    id: 'bookmarks',
    title: 'Bookmark Manager',
    description: 'Save, organize, and search your bookmarks. Access your saved web content from anywhere.',
    technologies: 'LinkWarden • Wallabag',
    link: '#bookmarks'
  },
  {
    id: 'photos',
    title: 'Photo Gallery',
    description: 'Organize, share, and backup your photos with AI-powered tagging. Google Photos without the data mining.',
    technologies: 'PhotoPrism • Immich',
    link: '#photos'
  },
  {
    id: 'notes',
    title: 'Note Taking',
    description: 'Capture thoughts, ideas, and knowledge with powerful search and organization. Evernote alternative.',
    technologies: 'Joplin • Standard Notes',
    link: '#notes'
  },
  {
    id: 'calendar',
    title: 'Calendar & Contacts',
    description: 'Sync calendars, contacts, and tasks across all devices. No cloud provider selling your schedule.',
    technologies: 'Radicale • Baikal',
    link: '#calendar'
  },
  {
    id: 'home',
    title: 'Home Automation',
    description: 'Control smart home devices locally. No cloud dependency, no corporate spying on your home.',
    technologies: 'Home Assistant',
    link: '#home'
  },
  {
    id: 'dns',
    title: 'DNS & Ad Blocker',
    description: 'Network-wide ad blocking and DNS server. Block tracking and ads at the network level.',
    technologies: 'Pi-hole • AdGuard Home',
    link: '#dns'
  },
  {
    id: 'monitoring',
    title: 'System Monitoring',
    description: 'Monitor server health, uptime, and performance. Keep your infrastructure running smoothly.',
    technologies: 'Uptime Kuma • Grafana',
    link: '#monitoring'
  }
];

// Helper function to get service by ID
export const getServiceById = (id) => {
  return servicesData.find(service => service.id === id);
};

// Helper function to add custom service
export const addCustomService = (service) => {
  // Validate required fields
  const requiredFields = ['id', 'title', 'description', 'technologies'];
  const hasAllFields = requiredFields.every(field => service[field]);

  if (!hasAllFields) {
    console.error('Service must have id, title, description, and technologies fields');
    return false;
  }

  servicesData.push({
    ...service,
    link: service.link || `#${service.id}`
  });

  return true;
};
