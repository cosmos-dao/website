import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cosmos-dao",
  description: "Cosmos-dao",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://i.imgur.com/Li40CHL.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/documentation/' }
    ],

    sidebar: [
      {
        text: 'Start',
        items: [
          { text: 'Group module concepts', link: '/documentation/' },
          { text: 'Group Metadata', link: '/documentation/start/metadata' },
          { text: 'Create group', link: '/documentation/start/create-group' },
          { text: 'Manage group', link: '/documentation/start/manage-group' },
          { text: 'Create proposal', link: '/documentation/start/create-proposal' }
        ]
      },
      {
        text: 'Our network',
        items: [
          { text: 'Chain config', link: '/documentation/chain-config' },
          { text: 'LCD endpoint', link: 'https://lcd-devnet.cosmos-dao.com/' },
          { text: 'RPC endpoint', link: 'https://rpc-devnet.cosmos-dao.com/' } 
        ]        
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cosmos-dao' }
    ],
    footer: {
      message: 'Dev by atmon3r',
      //copyright: ''
    },
    /* search: {
      provider: 'local'
    } */
  }
})
