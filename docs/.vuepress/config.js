import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'PersonalWiki',
  description: 'My PersonalWiki Site',

  theme: defaultTheme({
    logo: '/logo.svg',

    navbar: [
      '/',
      {
        text: 'Article',
        link: '/article/',
      },
      {
        text: 'BigData',
        link: '/bigdata/',
      },
      {
        text: 'Cache',
        link: '/cache/',
      },
      {
        text: 'Database',
        link: '/database/',
      },
      {
        text: 'Java',
        link: '/java/',
      },
      {
        text: 'MQ',
        link: '/mq/',
      },
      {
        text: 'System',
        link: '/system/',
      },
      {
        text: 'Category',
        link: '/category/',
      },
      {
        text: 'Tag',
        link: '/tag/',
      },
      {
        text: 'Timeline',
        link: '/timeline/',
      },
    ],

    sidebar: {
      '/bigdata/': [
        {
          text: '大数据',
          children: [
            '/bigdata/',
            '/bigdata/hadoop-notes.md',
            '/bigdata/hbase-notes.md',
            '/bigdata/hive-notes.md',
            '/bigdata/flink-notes.md',
            '/bigdata/spark-notes.md',
            '/bigdata/time-series-data.md'
          ]
        }
      ],
      '/cache/': [
        {
          text: '缓存',
          children: [
            '/cache/redis-notes.md',
          ]
        }
      ],
      '/database/': [
        {
          text: '数据库',
          children: [
            '/database/mysql-notes.md',
          ]
        }
      ],
      '/java/': [
        {
          text: 'Java 基础',
          children: [
            '/java/java-basic-interview.md',
            '/java/jmm-notes.md',
            '/java/jvm-notes.md',
            '/java/multithreading-interview.md',
            '/java/multithreading-notes.md',
          ]
        }
      ],
      '/mq/': [
        {
          text: '消息队列',
          children: [
            '/mq/kafka-notes.md',
          ]
        }
      ],
      '/system/': [
        {
          text: '系统相关',
          children: [
            '/system/brew-tutorial.md',
            '/system/linux-notes.md',
            '/system/nvm-tutorial.md',
          ]
        }
      ],
    },
  }),

  plugins: [
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('posts/') : false,

      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || '',
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === 'string'
            ? frontmatter.excerpt
            : data?.excerpt || '',
      }),

      // Generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== 'string',

      category: [
        {
          key: 'category',
          getter: (page) => page.frontmatter.category || [],
          layout: 'Category',
          itemLayout: 'Category',
          frontmatter: () => ({
            title: 'Categories',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: false,
          }),
        },
        {
          key: 'tag',
          getter: (page) => page.frontmatter.tag || [],
          layout: 'Tag',
          itemLayout: 'Tag',
          frontmatter: () => ({
            title: 'Tags',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: 'article',
          // Remove archive articles
          filter: (page) => !page.frontmatter.archive,
          layout: 'Article',
          frontmatter: () => ({
            title: 'Articles',
            sidebar: false,
          }),
          // Sort pages with time and sticky
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

            if (!pageB.frontmatter.date) return 1
            if (!pageA.frontmatter.date) return -1

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            )
          },
        },
        {
          key: 'timeline',
          // Only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // Sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          layout: 'Timeline',
          frontmatter: () => ({
            title: 'Timeline',
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
  ],

  bundler: viteBundler(),
})
