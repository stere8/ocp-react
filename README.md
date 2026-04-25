# Oracle Consults

Marketing site and portfolio for Oracle Consults, built with React, React Router, Bootstrap, and i18next.

## Scripts

- `npm start` runs the app locally on `http://localhost:3000`
- `npm run build` generates the sitemap and creates a production build
- `npm run check:translations` validates locale file structure against the English source
- `npm test` starts the CRA test runner

## Environment Variables

Copy `.env.example` to `.env.local` for local development, then set the required values:

- `REACT_APP_BLOG_API_URL`
  The blog API base URL, for example `https://ocp-blog.onrender.com/api/blogposts`
- `REACT_APP_EMAILJS_SERVICE_ID`
  EmailJS service id used by the contact form
- `REACT_APP_EMAILJS_TEMPLATE_ID`
  EmailJS template id used by the contact form
- `REACT_APP_EMAILJS_PUBLIC_KEY`
  EmailJS public key used when sending the form

Do not commit real secrets. In production, set the same variables in Netlify or your deployment platform.

## Notes

- If EmailJS variables are missing, the contact form stays visible but submission is disabled and users are directed to the direct contact links instead.
- Blog content is fetched through the configured `REACT_APP_BLOG_API_URL`, so the site can point at different environments without code changes.
