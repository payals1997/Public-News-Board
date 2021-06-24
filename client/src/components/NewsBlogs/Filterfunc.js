export function getFilter(BlogData,catAndCity){
    
    let filterdata = (BlogData);
    if(catAndCity.category==='all' && catAndCity.city==='all')

    {
        return BlogData;
    }
    else{ if(catAndCity.category!=='all'){
        filterdata = filterdata.filter((item)=>
        (item.category===catAndCity.category));
     
    }
     if(catAndCity.city!=='all'){
        filterdata = filterdata.filter((item)=>
        (item.newsCity===catAndCity.city));

        
    }
        if(filterdata == '')
        {
        alert("match not found !");
        filterdata = BlogData;
}
    
    return filterdata;
}
    
}
