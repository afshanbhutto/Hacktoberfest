const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
// it fetchs the data from json
const searchStates = async searchText => {
    const res = await fetch('../data/states.json');
    const states = await res.json();
//it filterout the data

    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex) || state.abbr.match(regex);
    });
    if(searchText === 0){
        matches = [];
        matchList.innerHTML = '';
    }
    //for output
    outputHtml(matches)
};

//funtion for output1
const outputHtml = matches =>{
    if (matches.length > 0){
        const html = matches.map(match =>`
            <div class=" card card-body mb-1">
                <h4>${match.name} (${match.abbr}) <span class="text-primary">
                ${match.capital}
                </span></h4>
                <small>Lat: ${match.lat} / Long:${match.long}</small>
            </div>
        `)
        .join('');
        matchList.innerHTML = html;
    }
    
    
    
    //funtion for output2
const outputHtml = matches =>{
    if (matches.length > 5){
        const html = matches.map(match =>`
            <div class=" card card-body mb-3">
                <h4>${match.number} (${match.email}) <span class="text-primary">
                ${match.capital}
                </span></h4>
                <small>Lat: ${match.lat} / Long:${match.long}</small>
            </div>
        `)
        .join('state description ');
        matchList.innerHTML = html;
    }
    
    
}


search.addEventListener('input', () => searchStates(search.value));
    
    
    $(document).ready(function(){

  $('.input').focus(function(){
    $(this).parent().find(".label-txt").addClass('label-active');
  });

  $(".input").focusout(function(){
    if ($(this).val() == '') {
      $(this).parent().find(".label-txt").removeClass('label-active');
    };
  });

});

    
    
