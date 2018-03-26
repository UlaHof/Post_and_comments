function Post(id, userId, title, body) {
    var self = this;
    var alreadyFetched = false;

    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
    this.element = createPost();
    this.buttonsElement = createToggleButtons();

    function createPost() {
        var post = $('<div>').addClass('post');
        var userId = $('<p>').addClass('user-name').text(self.userId);
        var postTitle = $('<h1>').addClass('post-title').text(self.title);
        var postContent = $('<p>').addClass('post-content').text(self.body);
        var showComments = $('<button>').addClass('show-comments').text('Show comments');
        var hideComments = $('<button>').addClass('hide-comments').text('Hide comments').hide();
        var commentList = $('<div>').addClass('comment-list');

        showComments.click(function() {
            if (!alreadyFetched) {
                commentsRequest();
            } else {
                showCommentList();
            } 
        });
        hideComments.click(function() {
            commentList.slideUp();
            hideComments.hide();
            showComments.show();
        });
        function commentsRequest() {
            $.ajax({
                url: cors + baseUrl + '	/comments?postId=' + self.id,
                method: 'GET',
                success: function (response) {
                    response.forEach(function (comments) {
                        var comment = new Comment(comments.postId, comments.id, comments.name, comments.email, comments.body);
                        commentList.append(comment.element);
                        showCommentList();
                        alreadyFetched = true;
                    });
                }
            });
        }
        function showCommentList() {
            commentList.hide().slideDown();
            showComments.hide();
            hideComments.show();
        }

        post.append(userId)
            .append(postTitle)
            .append(postContent)
            .append(showComments)
            .append(hideComments)
            .append(commentList);
        return post;
    }

    function createToggleButtons() {
        var toggleButtons = $('<div>').addClass('toggleButtons');
        var hidePost = $('<button>').addClass('hide-post').text('Hide post');
        var showPost = $('<button>').addClass('show-post').text('Show post');

        hidePost.click(function () {
            self.element.slideUp();
        });
        showPost.click(function () {
            self.element.slideDown();
        });
        toggleButtons.append(hidePost)
            .append(showPost);
        return toggleButtons;
    }
}