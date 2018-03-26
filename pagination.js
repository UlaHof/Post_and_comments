function paginationButtons() {
    var self = this;

    this.headersCount = loadHeadersCount();

    function loadHeadersCount() {
    $.ajax({
        url: cors + baseUrl + '/posts?_start=0&_limit=0',
        method: 'GET',
        success: function (data, string, response) {
            return response.getResponseHeader('x-total-count');
        }
    });
}

    var element = createPagination();

    function createPagination() {
        var pagination = $('<div>').addClass('pagination');
        var paginationButtons;

        for (i = 0; i <= headersCount/10; i++) {
            paginationButtons = $('<button>').addClass('paginationButton');
            pagination.append(paginationButtons);
        }
    }
}