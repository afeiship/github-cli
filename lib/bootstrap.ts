import httpSchema from '@jswork/http-schema';
import '@jswork/next';
import '@jswork/next-fetch';

const env = process.env;
const token = env.GITHUB_TOKEN || env.GITHUB_API_TOKEN;

// use Fetch API
const opts = {
  adapter: 'Fetch',
  harmony: true,
  responseType: 'json',
  slim: true,
  transformRequest: (config) => {
    config.headers = {
      'Content-Type': 'application/vnd.api+json',
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.switcheroo-preview+json',
    };
    return config;
  },
};
httpSchema(
  {
    baseURL: 'https://api.github.com',
    request: ['', 'json'],
    items: [
      {
        items: {
          pages_destroy: ['delete', '/repos/{owner_path}/pages'],
          pages_create: ['post', '/repos/{owner_path}/pages'],
        },
      },
    ],
  },
  opts,
);
