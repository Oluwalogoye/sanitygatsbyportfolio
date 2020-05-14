export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ebdbd99edacec017609e35d',
                  title: 'Sanity Studio',
                  name: 'sanitygatsbyportfolio-studio',
                  apiId: '2ce73ffb-95c4-4ff6-85b9-1c5f5938f716'
                },
                {
                  buildHookId: '5ebdbd99fd7eae0265707af8',
                  title: 'Portfolio Website',
                  name: 'sanitygatsbyportfolio',
                  apiId: 'bcd2a4ff-1196-4249-b202-9dff4d1c6962'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Oluwalogoye/sanitygatsbyportfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanitygatsbyportfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
