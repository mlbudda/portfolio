// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    app: {
        head: {
          title: 'Devjobs web app',
          meta: [
            // <meta name="viewport" content="width=device-width, initial-scale=1">
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ],
          link: [
            // <link rel="stylesheet" href="https://myawesome-lib.css">
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
            }
          ]
        }
      }
}
