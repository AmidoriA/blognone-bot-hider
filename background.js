// Blognone already use jquery 1.2 so we cannot use $.closest()

var patterns = [
  '=>',
  // '->', // this pattern is less likely to be bot
  'หัวข้อข่าว',
];

var usernames = [
  'panurat2000'
];

$.each(patterns, function(index, pattern) {
  markDomAsBot($('.comment-content:contains("'+pattern+'")').parent('.comment-body'));
});

$.each(usernames, function(index, username) {
  markDomAsBot($('.comment-info:contains("'+username+'")').siblings('.comment-body'));
});

function markDomAsBot(dom) {
  dom.hide();
  dom.siblings('.comment-info').css({background: '#7D7D7D'});
}