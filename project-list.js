$(function () {
  var projectsDiv = $('#projects');
  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];
    var projectDiv = $('<div>').addClass('project').addClass(i % 2 == 0 ? 'even' : 'odd');
    projectsDiv.append(projectDiv);

    var buttons = $('<div>', {class: 'buttonbox'});
    projectDiv.append(buttons);

    var titleDiv = $('<div>').addClass('titlebar').append($('<a>').addClass('title').append(project.Title).attr('href', '/autumn2019-extra/posters/' + project.Poster));
    projectDiv.append(titleDiv);

    var sessionDiv = $('<div>').addClass('session').append($('<span>').addClass('author').append(
      project.Session));
    buttons.append(sessionDiv);

    var authorDiv = $('<div>').addClass('authorbar').append($('<span>').addClass('author').append(
      project.Group.map(function(member) { return member.Member; }).join(', ')));
    projectDiv.append(authorDiv);

    var mentorDiv = $('<div>').addClass('mentorbar').append($('<span>').addClass('mentor').append(
      'Mentor: ' + project.Mentor));
    projectDiv.append(mentorDiv);
  }
});
