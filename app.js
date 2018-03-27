var baseUrl = 'https://jsonplaceholder.typicode.com';
var cors = 'https://cors-anywhere.herokuapp.com/';
var board = {
    element: $('#post-section'),
    showPost: function(post) {
        this.element.append(post.element).append(post.buttonsElement);
    },
}
var pagination = {
    element: $('#pagination'),
    showPagination: function() {
        var paginationButtons = new PaginationButtons();
        this.element.append(paginationButtons.element);
    }
}

$.ajax({
    url: cors + baseUrl + '/posts?_start=' + 0 + '&_limit=10',
    method: 'GET',
    success: function(response) {
        setPost(response);
        pagination.showPagination();
    }
});


function setPost(reply) {
    reply.forEach(function(singlePost) {
        var post = new Post(singlePost.id, singlePost.userId, singlePost.title, singlePost.body);
        board.showPost(post);
    })
}
