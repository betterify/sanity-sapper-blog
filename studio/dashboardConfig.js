export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb357b2c9eecd23bae28783',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-kxhw95nn',
                  apiId: '61cfea2c-3b2f-40e5-b7b8-935d5e0adcd9'
                },
                {
                  buildHookId: '5fb357b2127d23281b6e00a7',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-ppvax677',
                  apiId: '046e4bef-b099-445c-9b72-8e99036f4b75'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/betterify/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-ppvax677.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
