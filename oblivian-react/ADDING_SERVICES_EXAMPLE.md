# Adding Services - Complete Example

This guide shows you exactly how to add new services to your landing page.

## Example 1: Adding a Single Service

Let's add a "Wiki" service:

### Step 1: Open the services file

Open `src/data/services.js`

### Step 2: Add your service to the array

```javascript
export const servicesData = [
  // ... existing services ...

  // Add this new service:
  {
    id: 'wiki',
    title: 'Wiki & Knowledge Base',
    description: 'Create and organize your own Wikipedia. Document everything from personal notes to team knowledge bases.',
    technologies: 'BookStack • Wiki.js',
    link: '#wiki'
  }
];
```

### Step 3: Save the file

That's it! The new service card will automatically appear on the Services page.

---

## Example 2: Adding Multiple Services at Once

Let's add three services for a complete self-hosted media setup:

```javascript
export const servicesData = [
  // ... existing services ...

  // Audiobook Server
  {
    id: 'audiobooks',
    title: 'Audiobook Server',
    description: 'Stream your audiobook collection to any device. Support for chapters, bookmarks, and progress tracking.',
    technologies: 'Audiobookshelf',
    link: '#audiobooks'
  },

  // eBook Library
  {
    id: 'ebooks',
    title: 'eBook Library',
    description: 'Manage and read your digital book collection. Sync reading progress across devices.',
    technologies: 'Calibre-Web • Kavita',
    link: '#ebooks'
  },

  // Podcast Manager
  {
    id: 'podcasts',
    title: 'Podcast Manager',
    description: 'Subscribe to podcasts and listen offline. Never miss an episode of your favorite shows.',
    technologies: 'PodFetch • AntennaPod',
    link: '#podcasts'
  }
];
```

---

## Example 3: Adding a Service with Custom Link

If you want to link to an external page or a custom route:

```javascript
{
  id: 'custom-tool',
  title: 'Custom Business Tool',
  description: 'A specialized tool built just for your business needs.',
  technologies: 'Custom Stack',
  link: 'https://yourdomain.com/custom-tool'  // External link
}
```

Or link to another page in your app:

```javascript
{
  id: 'custom-tool',
  title: 'Custom Business Tool',
  description: 'A specialized tool built just for your business needs.',
  technologies: 'Custom Stack',
  link: '/custom-tool'  // Internal route (you'll need to add the route in App.jsx)
}
```

---

## Example 4: Real-World Complete Addition

Here's a real example adding "Firewall & Security" service:

**Before** (`src/data/services.js`):
```javascript
export const servicesData = [
  {
    id: 'monitoring',
    title: 'System Monitoring',
    description: 'Monitor server health, uptime, and performance. Keep your infrastructure running smoothly.',
    technologies: 'Uptime Kuma • Grafana',
    link: '#monitoring'
  }
  // End of array
];
```

**After**:
```javascript
export const servicesData = [
  {
    id: 'monitoring',
    title: 'System Monitoring',
    description: 'Monitor server health, uptime, and performance. Keep your infrastructure running smoothly.',
    technologies: 'Uptime Kuma • Grafana',
    link: '#monitoring'
  },
  // NEW SERVICE ADDED HERE
  {
    id: 'firewall',
    title: 'Firewall & Security',
    description: 'Network firewall and intrusion detection. Protect your infrastructure from external threats.',
    technologies: 'pfSense • OPNsense',
    link: '#firewall'
  }
];
```

---

## Tips for Great Service Descriptions

### ✅ Good Description Examples:

- "Stream your music, videos, and photos to any device. Your personal Netflix and Spotify combined."
- "Secure vault for passwords, 2FA codes, and sensitive data. No third-party ever sees your secrets."
- "Network-wide ad blocking and DNS server. Block tracking and ads at the network level."

### ❌ Avoid These:

- Too short: "Email service" (not descriptive enough)
- Too technical: "SMTP/IMAP/POP3 server with SPF/DKIM/DMARC support" (too jargon-heavy)
- Too long: A full paragraph (keep it to 2 sentences max)

### Format for Technologies:

Use the bullet character `•` to separate multiple options:

```javascript
technologies: 'Nextcloud • Seafile'          // ✅ Good
technologies: 'Nextcloud, Seafile'           // ❌ Avoid commas
technologies: 'Nextcloud / Seafile'          // ❌ Avoid slashes
technologies: 'Nextcloud | Seafile'          // ❌ Avoid pipes
```

---

## Testing Your Changes

After adding services:

1. **Save the file** (`src/data/services.js`)
2. **Check your browser** - Vite will hot-reload automatically
3. **Verify the card appears** on the Services page
4. **Check the styling** - hover effects, animations, etc.

---

## Need to Remove a Service?

Simply delete the entire object from the array:

```javascript
// BEFORE
export const servicesData = [
  {
    id: 'old-service',
    title: 'Old Service',
    description: 'This service is no longer needed.',
    technologies: 'Deprecated',
    link: '#old'
  },
  {
    id: 'new-service',
    // ...
  }
];

// AFTER - removed old-service
export const servicesData = [
  {
    id: 'new-service',
    // ...
  }
];
```

---

## Common Issues

### Issue: Service not appearing

**Solution:** Check for syntax errors:
- Missing comma between services
- Missing quotes around strings
- Missing closing brace `}`

### Issue: Styling looks broken

**Solution:** Make sure your `id` is unique and doesn't conflict with existing IDs.

---

## Questions?

- Check the [README.md](./README.md) for full documentation
- Review the existing services in `src/data/services.js` for examples
- Email: hello@digitalfreedom.io
