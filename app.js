// Portfolio page filters

$('.show-filters').on('click', function(){
  
    // 1. When our nav is expanded, collapse it
    // 2. change text of show filters to 'show filters'
    // 3. otherwise, if nav is collapsed, expand it
    // 4. change the text to say 'hide filter'
      
      if ($('.filters-list').is(':visible')) {
        $('.filters-list').slideUp()
        $('.show-filters').text('Show filters')
      } else {
        $('.filters-list').slideDown()
        $('.show-filters').text('Hide filters')
      }
      
      //   this will block the default behaviour of the # href jumping to the top of the page
      return false
       
    })
    
    $('.filters-list a').on('click', function() {
      
      var filter = $(this).attr('data-filter')
      
      console.log(filter)
      
    //   1. hide all products
    //   2. show the products with a particular filter
      
      $('.photo').hide()
      $(filter).show()
      
    //   this will add a class name of selected to the current filter link that we clicked on
      $('.filters-list a').removeClass('selected')
      $(this).addClass('selected')
      
      return false 
      
    })
                          
                          
                         