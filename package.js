Package.describe({
  name: 'abellsmythe:flexbox',
  version: '0.1.0',
  summary: 'Grid flebox CSS3',
  git: 'https://github.com/abellsmythe/flexbox',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-rc.8');
  api.use('ecmascript');
  api.addFiles('src/flebox.css');
});
