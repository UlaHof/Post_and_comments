function Comment(postId, id, name, email, body) {
    var self = this;

    this.postId = postId;
    this.id = id;
    this.name = name;
    this.email = email;
    this.body = body;
    this.element = createComment();

    function createComment() {
        var comment  = $('<div>').addClass('comment');
        var name = $('<h1>').addClass('comment-name').text(self.name);
        var email = $('<p>').addClass('user-email').text(self.name);
        var commentBody = $('<p>').addClass('comment-body').text(self.body);

    comment.append(name)
            .append(email)
            .append(commentBody);
    return comment;
    }
}