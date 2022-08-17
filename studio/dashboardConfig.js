export default {
  widgets: [
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
                  buildHookId: '62fd3368a096ad005de6d181',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-g96byivh',
                  apiId: '9c1b62c4-6159-496e-95d6-cee291e88540'
                },
                {
                  buildHookId: '62fd33685742b700b6debadb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xsgjz7v4',
                  apiId: 'c439c236-420f-407d-b71e-1be5bdc8c39d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zevinpolzin/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xsgjz7v4.netlify.app', category: 'apps'}
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
