function PaginationButtons() {
    var self = this;
    
    var paginationButton;
    var paginationRow = $('<div>').addClass('pagination-row');
    this.headersCount = loadHeadersCount();
    this.element = createPagination();

    function loadHeadersCount() {
    $.ajax({
        url: cors + baseUrl + '/posts?_start=0&_limit=0',
        method: 'GET',
        success: function (response, string, jqXHR) {
                var result = jqXHR.getResponseHeader('X-Total-Count'); 
                return result;
            }
        });
    }

    function createPagination() {
        console.log(headersCount);
        for (i = 0; i <= lf.headersCount/10; i++) {
            console.log(headersCount+12);
            paginationButton = $('<button>').addClass('pagination-button').text(i+1);
            paginationRow.append(paginationButton);
        }
        return paginationRow;
    }
}
