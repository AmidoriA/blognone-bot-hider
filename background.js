(function($) {
  var patterns = [
    '=>',
    // '->', // this pattern is less likely to be bot
    'หัวข้อข่าว',
  ];

  var usernames = [
    'panurat2000'
  ];

  [].concat(
    patterns.map(function(p) {
      return $('.comment-content:contains("' + p + '")').parent('.comment-body');
    }),

    usernames.map(function(username) {
      return $('.comment-info:contains("' + username + '")').siblings('.comment-body');
    })
  )
  .forEach(function(dom) {
    dom.hide().siblings('.comment-info').css({background: '#7D7D7D'});
  });

})(jQuery);