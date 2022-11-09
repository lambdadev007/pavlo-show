// Override Settings
var boostPFSInstantSearchConfig = {
  search: {
    //suggestionMode: 'test',
    //suggestionPosition: 'left'
  }
};

(function () {
  BoostPFS.inject(this);

  // Customize style of Suggestion box
  SearchInput.prototype.customizeInstantSearch = function () {};

  SearchInput.prototype.afterBindEvents = function () {
    // Fix cannot close search suggestion when clicking overlay 
    document.addEventListener('click', function (e) {
      if (this.searchAutoComplete && this.searchAutoComplete.isOpen && e && e.target) {
        var $clickedElement = jQ(e.target);
        var isClickSuggestion = $clickedElement.closest('.' + Class.searchSuggestionWrapper).length > 0;
        if (isClickSuggestion) {
          this.searchAutoComplete.$element.hide();
          this.searchAutoComplete.searchInput.onCloseAutocomplete();
          this.searchAutoComplete.isOpen = false;
        }
      }
    }.bind(this), true);
  }

  // Fix conflict with theme's cart
  jQ(Selector.otpTopCartLink).on('click', function () {
    console.log(jQ('.boost-pfs-minicart-wrapper').length);
    if (jQ('.boost-pfs-minicart-wrapper').length > 0) {
      jQ('.drawer').hide();
      jQ('body').removeClass('overflow-hidden');
    }
  })
})();
